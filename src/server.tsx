import React from "react";
import { renderToString } from "react-dom/server";
import Document from "./document";
import { routes, searchParamsFromUrl } from "./routes";

const publicDir = `${import.meta.dir}/../public`;
const appDir = `${import.meta.dir}/../app`;
const port = Number(process.env.PORT ?? 3000);

Bun.serve({
  port,
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const staticResponse = await serveStatic(url.pathname);
    if (staticResponse) return staticResponse;

    const route = routes[normalizePath(url.pathname)];
    if (!route) {
      return new Response("Not Found", { status: 404 });
    }

    const html = renderToString(
      <Document title={route.title} fullHeight={route.fullHeight}>
        {route.render(searchParamsFromUrl(url))}
      </Document>,
    );

    return new Response(`<!doctype html>${html}`, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`Server running at http://localhost:${port}`);

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

async function serveStatic(pathname: string) {
  const safePathname = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (safePathname.includes("..")) return null;

  const paths = [
    `${publicDir}/${safePathname}`,
    pathname === "/favicon.ico" ? `${appDir}/favicon.ico` : null,
  ].filter(Boolean) as string[];

  for (const path of paths) {
    const file = Bun.file(path);
    if (await file.exists()) {
      return new Response(file, {
        headers: { "Content-Type": contentType(path) },
      });
    }
  }

  return null;
}

function contentType(path: string) {
  if (path.endsWith(".css")) return "text/css; charset=utf-8";
  if (path.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (path.endsWith(".json")) return "application/json; charset=utf-8";
  if (path.endsWith(".txt")) return "text/plain; charset=utf-8";
  if (path.endsWith(".ico")) return "image/x-icon";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".webm")) return "video/webm";
  if (path.endsWith(".mp4")) return "video/mp4";
  if (path.endsWith(".pdf")) return "application/pdf";
  return "application/octet-stream";
}
