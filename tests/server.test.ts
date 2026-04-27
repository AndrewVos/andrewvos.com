import { afterAll, beforeAll, describe, expect, test } from "bun:test";

const port = 43157;
const baseUrl = `http://localhost:${port}`;
let server: Bun.Subprocess;

beforeAll(async () => {
  server = Bun.spawn(["bun", "src/server.tsx"], {
    env: { ...process.env, PORT: String(port) },
    stdout: "pipe",
    stderr: "pipe",
  });

  await waitForServer();
});

afterAll(() => {
  server.kill();
});

describe("Bun server", () => {
  test.each([
    ["/", "andrewvos.com", "Andrew"],
    ["/books?filter=recommended", "Bookshelf - andrewvos.com", "Bookshelf"],
    ["/bio", "Bio - andrewvos.com", "Senior Full-Stack Software Engineer"],
    ["/chat", "Chat - andrewvos.com", "Type your message here"],
    ["/contact", "Contact - andrewvos.com", "Contact Andrew Vos"],
    ["/contact/success", "Success - andrewvos.com", "Thanks for your enquiry."],
  ])("renders %s", async (path, title, content) => {
    const response = await fetch(`${baseUrl}${path}`);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(`<title>${title}</title>`);
    expect(html).toContain(content);
  });

  test("serves the existing API route", async () => {
    const response = await fetch(`${baseUrl}/api/hello`);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ name: "John Doe" });
  });

  test("serves public assets and built client assets", async () => {
    expect((await fetch(`${baseUrl}/robots.txt`)).status).toBe(200);
    const client = await fetch(`${baseUrl}/build/client.js`);
    const styles = await fetch(`${baseUrl}/build/styles.css`);

    expect(client.status).toBe(200);
    expect(client.headers.get("content-type")).toContain("text/javascript");
    expect(styles.status).toBe(200);
    expect(styles.headers.get("content-type")).toContain("text/css");
  });

  test("serves the built CV PDF", async () => {
    const response = await fetch(`${baseUrl}/AndrewVos.pdf`);
    const pdf = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/pdf");
    expect(pdf.startsWith("%PDF")).toBe(true);
  });
});

async function waitForServer() {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 5000) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  throw new Error("Timed out waiting for test server to start");
}
