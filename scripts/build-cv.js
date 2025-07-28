const puppeteer = require("puppeteer");
const chromium = require("@sparticuz/chromium");

(async () => {
  const viewport = {
    deviceScaleFactor: 1,
    hasTouch: false,
    height: 1080,
    isLandscape: true,
    isMobile: false,
    width: 1920,
  };
  const browser = await puppeteer.launch({
    args: puppeteer.defaultArgs({ args: chromium.args, headless: "shell" }),
    defaultViewport: viewport,
    executablePath: await chromium.executablePath(),
    headless: "shell",
  });

  const page = await browser.newPage();

  // https://stackoverflow.com/a/61278565
  page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36 WAIT_UNTIL=load"
  );

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
