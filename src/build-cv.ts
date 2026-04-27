import { mkdir, writeFile } from "node:fs/promises";
import { generateCvPdf } from "./pdf";

const port = Number(process.env.CV_BUILD_PORT ?? 43213);
const origin = `http://localhost:${port}`;

const server = Bun.spawn(["bun", "src/server.tsx"], {
  env: { ...process.env, PORT: String(port) },
  stderr: "pipe",
  stdout: "pipe",
});

try {
  await waitForServer();
  const pdf = await generateCvPdf(`${origin}/bio`);

  await mkdir("public", { recursive: true });
  await writeFile("public/AndrewVos.pdf", pdf);
} finally {
  server.kill();
}

async function waitForServer() {
  const startedAt = Date.now();

  while (Date.now() - startedAt < 5000) {
    try {
      const response = await fetch(`${origin}/bio`);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  throw new Error("Timed out waiting for the CV build server to start");
}
