import React from "react";

type DocumentProps = {
  children: React.ReactNode;
  fullHeight?: boolean;
  title: string;
};

export default function Document({ children, fullHeight, title }: DocumentProps) {
  return (
    <html lang="en" className={fullHeight ? "h-full" : undefined}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Andrew Vos's personal site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/build/styles.css" />
        <title>{title}</title>
      </head>
      <body className={fullHeight ? "font-serif h-full" : "font-serif"}>
        <div id="root">{children}</div>
        <script type="module" src="/build/client.js" defer />
      </body>
    </html>
  );
}
