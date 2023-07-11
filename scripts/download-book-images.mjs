import fs from "fs";
import slug from "slug";
import download from "download";

(async () => {
  const books = JSON.parse(fs.readFileSync("app/data/books.json", "utf8"));
  for (let i = 0; i < books.length; i++) {
    const titleSlug = slug(books[i].title);
    const imagePath = `/images/books/${titleSlug}.jpg`;

    console.log(`[${i + 1}/${books.length}] ${books[i].title}`);

    if (books[i].image_url.indexOf("nophoto") >= 0) {
      delete books[i].image_url;
      continue;
    }

    if (fs.existsSync(`public${imagePath}`)) {
      console.log(`Already downloaded...`);
      console.log("");
      continue;
    } else {
      console.log(`Downloading "${books[i].image_url}"`);
      console.log("");
    }

    await download(books[i].image_url, "public/images/books", {
      filename: `${titleSlug}.jpg`,
    });
    books[i].image_path = imagePath;
  }
  fs.writeFileSync("app/data/books.json", JSON.stringify(books, null, "  "));
})();
