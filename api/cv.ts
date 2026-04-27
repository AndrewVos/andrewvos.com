import { generateCvPdf } from "../src/pdf";

export default {
  async fetch(request: Request) {
    const pdf = await generateCvPdf(new URL("/bio", request.url).toString());

    return new Response(new Uint8Array(pdf), {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400",
        "Content-Disposition": 'attachment; filename="AndrewVos.pdf"',
        "Content-Type": "application/pdf",
      },
    });
  },
};
