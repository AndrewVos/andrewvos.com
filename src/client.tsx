import React from "react";
import { hydrateRoot } from "react-dom/client";
import { routes, searchParamsFromUrl } from "./routes";

const root = document.getElementById("root");
const url = new URL(window.location.href);
const route = routes[url.pathname];

if (root && route) {
  hydrateRoot(root, route.render(searchParamsFromUrl(url)));
}
