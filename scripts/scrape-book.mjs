import puppeteer from "puppeteer";
import queryString from "query-string";
import prompts from "prompts";

const retrieveBook = async () => {
  const bookResponse = await prompts({
    type: "text",
    name: "value",
    message: "Which book do you want to retrieve",
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
    headless: false,
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

  console.log("Results:");
  results.forEach((r) => console.log(r.title));

  const correctBookResponse = await prompts({
    type: "toggle",
    name: "value",
    message: "Use the first result?",
    initial: true,
    active: "yes",
    inactive: "no",
  });

  if (correctBookResponse.value) {
    const result = results[0];
    console.log(result);
    const bookPage = await browser.newPage();
    await bookPage.goto(result.href, {
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
    book.url = result.href.substring(0, result.href.indexOf("?"));

    console.log(book);
  }

  await browser.close();
};

retrieveBook();
