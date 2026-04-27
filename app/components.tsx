import React from "react";

type LinkHref =
  | string
  | {
    pathname: string;
    query?: Record<string, string | string[] | undefined>;
  };

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: LinkHref;
};

export function Link({ href, ...props }: LinkProps) {
  return <a href={formatHref(href)} {...props} />;
}

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  priority?: boolean;
};

export function Image({ priority: _priority, ...props }: ImageProps) {
  return <img {...props} />;
}

function formatHref(href: LinkHref) {
  if (typeof href === "string") return href;

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(href.query ?? {})) {
    if (Array.isArray(value)) {
      value.forEach((item) => params.append(key, item));
    } else if (value) {
      params.set(key, value);
    }
  }

  const query = params.toString();
  return query ? `${href.pathname}?${query}` : href.pathname;
}
