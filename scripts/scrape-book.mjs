import { chromium } from "playwright";
import queryString from "query-string";
import inquirer from "inquirer";
import fs from "fs";
import slug from "slug";
import download from "download";

const GOODREADS_URL = "https://www.goodreads.com";

const decodeHtml = (html) =>
  html.replace(/&(#\d+|#x[\da-f]+|amp|lt|gt|quot|apos);/gi, (entity, value) => {
    if (value[0] === "#") {
      const radix = value[1]?.toLowerCase() === "x" ? 16 : 10;
      const codePoint = parseInt(value.replace(/^#x?/i, ""), radix);
      return Number.isNaN(codePoint) ? entity : String.fromCodePoint(codePoint);
    }

    return {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: "\"",
      apos: "'",
    }[value.toLowerCase()] ?? entity;
  });

const getAttribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}=(["'])(.*?)\\1`, "i"));
  return match?.[2];
};

const stripTags = (html) => decodeHtml(html.replace(/<[^>]*>/g, "")).trim();

const hasClass = (attributes, className) =>
  (getAttribute(attributes, "class") ?? "").split(/\s+/).includes(className);

const parseAnchors = (html) =>
  [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map((match) => ({
    attributes: match[1],
    html: match[2],
    index: match.index,
    endIndex: match.index + match[0].length,
  }));

export const formatSearchResultChoice = (result) =>
  `${result.title}${result.author ? ` by ${result.author}` : ""} - ${result.value}`;

export const parseSearchResults = (html) => {
  const anchors = parseAnchors(html);
  const bookAnchors = anchors.filter((anchor) => hasClass(anchor.attributes, "bookTitle"));

  return bookAnchors
    .map((anchor, index) => {
      const href = getAttribute(anchor.attributes, "href");
      const nextBookIndex = bookAnchors[index + 1]?.index ?? html.length;
      const resultHtml = html.slice(anchor.endIndex, nextBookIndex);
      const authorAnchor = parseAnchors(resultHtml).find((resultAnchor) =>
        hasClass(resultAnchor.attributes, "authorName")
      );

      if (!href) {
        return;
      }

      const url = new URL(decodeHtml(href), GOODREADS_URL);
      url.search = "";

      return {
        title: stripTags(anchor.html),
        author: authorAnchor ? stripTags(authorAnchor.html) : undefined,
        value: url.toString(),
      };
    })
    .filter(Boolean)
    .filter((result) => result.title)
    .slice(0, 20);
};

export const searchBooks = async (query) => {
  const url =
    `${GOODREADS_URL}/search?` +
    queryString.stringify({
      query,
    });

  const response = await fetch(url);
  const html = await response.text();
  return parseSearchResults(html);
};

const retrieveBook = async () => {
  const { searchQuery } = await inquirer.prompt([
    {
      type: "input",
      name: "searchQuery",
      message: "Search for a book",
    },
  ]);

  if (!searchQuery?.trim()) {
    return;
  }

  let results;
  try {
    results = await searchBooks(searchQuery.trim());
  } catch (error) {
    console.error(`Search failed: ${error.message}`);
    return;
  }

  if (results.length === 0) {
    console.error("No results");
    return;
  }

  const { selectedBookUrl } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedBookUrl",
      message: "Choose a result",
      choices: results.map((result) => ({
        name: formatSearchResultChoice(result),
        value: result.value,
      })),
    },
  ]);

  if (!selectedBookUrl) {
    return;
  }

  const { rating } = await inquirer.prompt([
    {
      type: "list",
      name: "rating",
      message: "Choose a star rating",
      choices: [1, 2, 3, 4, 5].map((starCount) => ({
        name: `${"★".repeat(starCount)}${"☆".repeat(5 - starCount)} (${starCount})`,
        value: starCount,
      })),
      default: 5,
    },
  ]);

  const currentYear = new Date().getFullYear();
  const { readYear } = await inquirer.prompt([
    {
      type: "input",
      name: "readYear",
      message: "Year read",
      default: currentYear,
      filter: Number,
      validate: (value) => {
        const year = Number(value);
        return Number.isInteger(year) && year >= 1000 && year <= 9999
          ? true
          : "Enter a four-digit year";
      },
    },
  ]);

  const browser = await chromium.launch({
    headless: false,
  });

  const bookPage = await browser.newPage();
  await bookPage.goto(selectedBookUrl, {
    waitUntil: "domcontentloaded",
  });

  await bookPage.waitForSelector("h1[data-testid=bookTitle]", {
    visible: true,
  });

  await bookPage.waitForSelector(".BookCover img.ResponsiveImage");

  const book = await bookPage.evaluate(() => {
    const title = document.querySelector(
      "h1[data-testid=bookTitle]"
    ).innerText;
    return {
      title,
      rating: 0,
      author: document.querySelector(".ContributorLink__name").innerText,
      author_url: document.querySelector("a.ContributorLink").getAttribute("href"),
      image_url: document.querySelector(".BookCover__image img").getAttribute("src"),
    };
  });

  book.url = selectedBookUrl.split("?")[0];
  book.rating = rating;
  book.read_year = readYear;
  book.image_path = `/images/books/${slug(book.title)}.jpg`;

  const data = fs.readFileSync("app/data/books.json", "utf8");
  const modified = [book].concat(JSON.parse(data));
  fs.writeFileSync(
    "app/data/books.json",
    JSON.stringify(modified, null, "  ")
  );

  if (fs.existsSync(`public${book.image_path}`)) {
    console.log(`Already downloaded...`);
  } else {
    console.log(`Downloading "${book.image_url}"`);
  }

  await download(book.image_url, "public/images/books", {
    filename: `${slug(book.title)}.jpg`,
  });

  await browser.close();
};

if (import.meta.main) {
  for (;;) {
    await retrieveBook();

    const { shouldContinue } = await inquirer.prompt([
      {
        type: "confirm",
        name: "shouldContinue",
        message: "Would you like to do another?",
        default: true,
      },
    ]);

    if (!shouldContinue) {
      break;
    }
  }
}
