import { spawn } from "node:child_process";

const processes = [
  {
    name: "css",
    command: "bun",
    args: [
      "x",
      "tailwindcss",
      "-i",
      "./app/globals.css",
      "-o",
      "./public/build/styles.css",
      "--watch",
    ],
  },
  {
    name: "client",
    command: "bun",
    args: [
      "build",
      "./src/client.tsx",
      "--outdir=public/build",
      "--target=browser",
      "--minify",
      "--watch",
    ],
  },
  {
    name: "server",
    command: "bun",
    args: ["--watch", "src/server.tsx"],
  },
];

let isShuttingDown = false;
const children = processes.map(({ name, command, args }) => {
  const child = spawn(command, args, {
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
  });

  const prefixOutput = (stream) => {
    stream.on("data", (chunk) => {
      for (const line of chunk.toString().split(/\r?\n/)) {
        if (line) {
          console.log(`[${name}] ${line}`);
        }
      }
    });
  };

  prefixOutput(child.stdout);
  prefixOutput(child.stderr);

  child.on("exit", (code, signal) => {
    if (isShuttingDown) {
      return;
    }

    console.error(`[${name}] exited with ${signal ?? code}`);
    shutdown(code ?? 1);
  });

  return child;
});

const shutdown = (code = 0) => {
  isShuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }
  process.exit(code);
};

process.on("SIGINT", () => shutdown());
process.on("SIGTERM", () => shutdown());
