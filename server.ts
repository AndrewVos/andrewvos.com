declare const Bun: any;
export {};

const PORT = Number(process.env.PORT ?? 3000);
const PUBLIC_DIR = `${process.cwd()}/public`;

const contentTypes = new Map<string, string>([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".pdf", "application/pdf"],
  [".txt", "text/plain; charset=utf-8"],
]);

const getContentType = (pathname: string) => {
  const extension = pathname.slice(pathname.lastIndexOf("."));
  return contentTypes.get(extension) ?? "application/octet-stream";
};

const toPublicPath = (pathname: string) => {
  const normalized = pathname === "/" ? "/index.html" : pathname;
  return `${PUBLIC_DIR}${normalized}`;
};

const server = Bun.serve({
  port: PORT,
  async fetch(request: Request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
      return new Response(JSON.stringify({ message: "Hello from Bun!" }), {
        headers: { "content-type": "application/json; charset=utf-8" },
      });
    }

    const filePath = toPublicPath(url.pathname);
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file, {
        headers: { "content-type": getContentType(url.pathname) },
      });
    }

    const indexFile = Bun.file(`${PUBLIC_DIR}/index.html`);
    return new Response(indexFile, {
      status: 404,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`Bun server listening on http://localhost:${server.port}`);
