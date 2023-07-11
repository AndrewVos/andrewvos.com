import fs from "fs";
import puppeteer from "puppeteer";

(async () => {
  const books = JSON.parse(fs.readFileSync("app/data/books.json", "utf8"));

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  for (let i = 0; i < books.length; i++) {
    console.log(`[${i + 1}/${books.length}] ${books[i].title}`);
    if (!books[i].image_url) {
      const page = await browser.newPage();
      await page.goto(books[i].url, {
        waitUntil: "domcontentloaded",
      });

      await page.waitForSelector(".BookCover img.ResponsiveImage");

      books[i].image_url = await page.evaluate(() => {
        const image = document.querySelector(".BookCover img.ResponsiveImage");
        return image.src;
      });
    }
    fs.writeFileSync("app/data/books.json", JSON.stringify(books, null, "  "));
  }
  await browser.close();
})();
