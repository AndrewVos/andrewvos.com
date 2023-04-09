import puppeteer from "puppeteer";
import queryString from "query-string";
import prompts from "prompts";
import fs from "fs";

const retrieveBook = async () => {
  const bookResponse = await prompts({
    type: "text",
    name: "value",
    message: "Search for a book",
  });

  if (!bookResponse.value) {
    return;
  }

  const url =
    "https://www.goodreads.com/search?" +
    queryString.stringify({
      query: bookResponse.value,
    });

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const searchPage = await browser.newPage();
  await searchPage.goto(url, {
    waitUntil: "domcontentloaded",
  });

  const results = await searchPage.evaluate(() => {
    const links = [...document.querySelectorAll(".tableList a.bookTitle")];

    return links.map((link) => ({
      title: link.text.trim(),
      href: `https://www.goodreads.com${link.getAttribute("href")}`,
    }));
  });

  if (results.length === 0) {
    console.error("No results");
    process.exit(1);
  }

  const bookChoiceResponse = await prompts([
    {
      type: "select",
      name: "value",
      message: "Choose a result",
      choices: results.map((r) => ({
        title: r.title,
        value: r.href,
      })),
      initial: 0,
    },
  ]);

  if (bookChoiceResponse.value) {
    const bookPage = await browser.newPage();
    await bookPage.goto(bookChoiceResponse.value, {
      waitUntil: "domcontentloaded",
    });

    await bookPage.waitForSelector("h1[data-testid=bookTitle]", {
      visible: true,
    });

    const book = await bookPage.evaluate(() => {
      return {
        title: document.querySelector("h1[data-testid=bookTitle]").innerText,
        rating: 0,
        author: document.querySelector(".ContributorLink__name").innerText,
        author_url: document
          .querySelector("a.ContributorLink")
          .getAttribute("href"),
        image_url: document
          .querySelector(".BookCover__image img")
          .getAttribute("src"),
        read_year: 2023,
      };
    });
    book.url = bookChoiceResponse.value.substring(
      0,
      bookChoiceResponse.value.indexOf("?")
    );

    const data = fs.readFileSync("app/data/books.json", "utf8");
    const modified = [book].concat(JSON.parse(data));
    fs.writeFileSync(
      "app/data/books.json",
      JSON.stringify(modified, null, "  ")
    );
  }

  await browser.close();
};

for (;;) {
  await retrieveBook();

  const continueResponse = await prompts({
    type: "toggle",
    name: "value",
    message: "Would you like to do another?",
    initial: true,
    active: "yes",
    inactive: "no",
  });

  if (!continueResponse.value) {
    break;
  }
}
