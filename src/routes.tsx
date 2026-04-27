import React from "react";
import Home from "../app/page";
import Books from "../app/books/page";
import Bio from "../app/bio/page";

export type SearchParams = Record<string, string | string[] | undefined>;

export type AppRoute = {
  title: string;
  fullHeight?: boolean;
  render: (searchParams: SearchParams) => React.ReactElement;
};

export const routes: Record<string, AppRoute> = {
  "/": {
    title: "andrewvos.com",
    render: () => <Home />,
  },
  "/books": {
    title: "Bookshelf - andrewvos.com",
    render: (searchParams) => <Books searchParams={searchParams} />,
  },
  "/bio": {
    title: "Bio - andrewvos.com",
    render: () => <Bio />,
  },
};

export function searchParamsFromUrl(url: URL): SearchParams {
  const result: SearchParams = {};
  for (const key of new Set(url.searchParams.keys())) {
    const values = url.searchParams.getAll(key);
    result[key] = values.length > 1 ? values : values[0];
  }
  return result;
}
