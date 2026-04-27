import { describe, expect, test } from "bun:test";
import { parseSearchResults } from "../scripts/scrape-book.mjs";

describe("book scraper", () => {
  test("parses Goodreads search result links with extra attributes", () => {
    const html = `
      <a class="bookTitle" itemprop="url" href="/book/show/44767458-dune?from_search=true&amp;rank=1">
        <span itemprop="name">Dune (Dune, #1)</span>
      </a>
      <a class="authorName" href="/author/show/58.Frank_Patrick_Herbert">
        Frank Herbert
      </a>
    `;

    expect(parseSearchResults(html)).toEqual([
      {
        title: "Dune (Dune, #1)",
        value:
          "https://www.goodreads.com/book/show/44767458-dune?from_search=true&rank=1",
      },
    ]);
  });
});
