import fs from "fs";
import puppeteer from "puppeteer";
import slug from "slug";
import https from "https";
import sizeOf from "image-size";

(async () => {
  const books = JSON.parse(fs.readFileSync("app/data/books.json", "utf8"));

  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: null,
  });

  const retrieveImageSize = async (path) => {
    return new Promise((resolve, reject) => {
      sizeOf(path, function (err, dimensions) {
        if (err) {
          reject(err);
        }

        resolve(dimensions);
      });
    });
  };

  const retrieveBookImageUrl = async (book) => {
    const page = await browser.newPage();
    await page.goto(book.url, {
      waitUntil: "domcontentloaded",
    });

    await page.waitForSelector(".BookCover img.ResponsiveImage");

    return await page.evaluate(() => {
      const image = document.querySelector(".BookCover img.ResponsiveImage");
      return image.src;
    });
  };

  const downloadFile = async (url, path) => {
    return await new Promise((resolve, reject) => {
      https
        .get(url, (response) => {
          const code = response.statusCode ?? 0;

          if (code >= 400) {
            return reject(new Error(response.statusMessage));
          }

          if (code > 300 && code < 400 && !!response.headers.location) {
            return resolve(downloadFile(response.headers.location, path));
          }

          // save the file to disk
          const fileWriter = fs.createWriteStream(path).on("finish", () => {
            resolve({});
          });

          response.pipe(fileWriter);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  };

  const getFilesizeInBytes = (filename) => {
    var stats = fs.statSync(filename);
    var fileSizeInBytes = stats.size;
    return fileSizeInBytes;
  };

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const dimensions = await retrieveImageSize(`public${book.image_path}`);

    if (dimensions.height < 200) {
      console.log(`Redownloading image for "${book.title}"...`);

      book.image_path = `/images/books/${slug(book.title)}.jpg`;

      const imageUrl = await retrieveBookImageUrl(book);
      if (imageUrl.indexOf("nophoto") >= 0) {
        console.error("Book doesn't have an image");
      }

      await downloadFile(imageUrl, `public${book.image_path}`);

      fs.writeFileSync(
        "app/data/books.json",
        JSON.stringify(books, null, "  ")
      );
    }
  }
  await browser.close();
})();
