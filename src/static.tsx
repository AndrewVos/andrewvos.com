import { mkdir, rm, cp, writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import Document from "./document";
import { routes } from "./routes";

const distDir = `${import.meta.dir}/../dist`;
const publicDir = `${import.meta.dir}/../public`;

await rm(distDir, { force: true, recursive: true });
await mkdir(distDir, { recursive: true });
await cp(publicDir, distDir, { recursive: true });

for (const [pathname, route] of Object.entries(routes)) {
  const html = `<!doctype html>${renderToString(
    <Document title={route.title} fullHeight={route.fullHeight}>
      {route.render({})}
    </Document>,
  )}`;

  const dir = pathname === "/" ? distDir : `${distDir}${pathname}`;
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}/index.html`, html);
}
