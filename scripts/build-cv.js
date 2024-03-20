const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--font-render-hinting=none",
    ],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/bio", {
    waitUntil: "domcontentloaded",
  });

  await page.pdf({
    path: "public/AndrewVos.pdf",
    format: "A4",
    scale: 0.67,
    margin: {
      top: "10mm",
      left: "10mm",
      right: "10mm",
      bottom: "10mm",
    },
  });
  await browser.close();
})();
