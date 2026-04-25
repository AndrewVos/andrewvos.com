import { chromium } from "playwright";
import queryString from "query-string";
import inquirer from "inquirer";
import fs from "fs";
import slug from "slug";
import download from "download";

const GOODREADS_URL = "https://www.goodreads.com";

const searchBooks = async (query) => {
  const url =
    `${GOODREADS_URL}/search?` +
    queryString.stringify({
      query,
    });

  const response = await fetch(url);
  const html = await response.text();
  return [...html.matchAll(/<a class="bookTitle" href="([^"]+)">([\s\S]*?)<\/a>/g)]
    .map(([, href, titleHtml]) => ({
      title: titleHtml.replace(/<[^>]*>/g, "").trim(),
      value: `${GOODREADS_URL}${href}`,
    }))
    .filter((result) => result.title)
    .slice(0, 20);
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
        name: result.title,
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
      read_year: new Date().getFullYear(),
    };
  });

  book.url = selectedBookUrl.split("?")[0];
  book.rating = rating;
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
