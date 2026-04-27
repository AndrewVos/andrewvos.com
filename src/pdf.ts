import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer";

export async function generateCvPdf(url: string) {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      deviceScaleFactor: 1,
      hasTouch: false,
      height: 1080,
      isLandscape: true,
      isMobile: false,
      width: 1920,
    },
    executablePath: await executablePath(),
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");

    return await page.pdf({
      format: "A4",
      scale: 0.67,
      margin: {
        top: "10mm",
        left: "10mm",
        right: "10mm",
        bottom: "10mm",
      },
    });
  } finally {
    await browser.close();
  }
}

async function executablePath() {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    return chromium.executablePath();
  }

  return puppeteer.executablePath();
}
