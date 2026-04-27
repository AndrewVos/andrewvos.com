import { serve } from "bun";
import index from "./index.html";
import { join } from "node:path";

const server = serve({
  routes: {
    "/*": index,
    "/images/*": async ({ url }) => {
      const { pathname } = new URL(url);
      const filePath = join("./public", pathname);
      const file = Bun.file(filePath);
      return new Response(file);
    },
    "/AndrewVos.pdf": async () => {
      const file = Bun.file("./public/AndrewVos.pdf");
      return new Response(file, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });
    },
    "/robots.txt": new Response(Bun.file("./public/robots.txt")),
  },
  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
