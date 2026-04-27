import { mkdir, writeFile } from "node:fs/promises";
import PDFDocument from "pdfkit";
import React from "react";
import { format } from "date-fns";
import cv from "../app/bio/cv";

type Link = { title: string; href: string };
type Experience = {
  name: string;
  hidden: boolean;
  from: Date;
  to?: Date;
  description?: string;
  things?: string[];
  links?: Link[];
};
type WorkExperience = Experience & {
  type?: string;
  agency?: { name: string; image: string };
  tech?: Record<string, boolean>;
};

const pdf = await renderCvPdf();

await mkdir("public", { recursive: true });
await writeFile("public/AndrewVos.pdf", pdf);

async function renderCvPdf() {
  const doc = new PDFDocument({
    size: "A4",
    margin: 42,
    bufferPages: true,
    info: {
      Title: `${cv.firstName} ${cv.lastName} CV`,
      Author: `${cv.firstName} ${cv.lastName}`,
      Subject: cv.title,
    },
  });
  const chunks: Buffer[] = [];
  const done = new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });

  drawHeader(doc);
  section(doc, "Summary");
  paragraph(doc, reactText(cv.summary));

  section(doc, "Skills");
  paragraph(doc, cv.skillGrouping.map((skills) => skills.join(", ")).join("\n"));

  twoColumnLists(doc, [
    ["Soft Skills", cv.softSkills],
    ["Achievements", cv.achievements],
  ]);

  section(doc, "Experience");
  cv.experience.filter((experience) => !experience.hidden).forEach((experience) => {
    drawExperience(doc, experience as WorkExperience);
  });

  drawFooters(doc);
  doc.end();

  return done;
}

function drawHeader(doc: PDFKit.PDFDocument) {
  const left = doc.page.margins.left;
  const firstNameWidth = doc.font("Helvetica-Bold").fontSize(26).widthOfString(cv.firstName) + 18;
  const nameTop = doc.y;

  doc
    .font("Helvetica-Bold")
    .fontSize(26)
    .rect(left, nameTop, firstNameWidth, 34)
    .fill("#111111")
    .fillColor("#ffffff")
    .text(cv.firstName, left + 9, nameTop + 5, { lineBreak: false });

  doc
    .rect(left + firstNameWidth, nameTop, doc.widthOfString(cv.lastName) + 18, 34)
    .stroke("#111111")
    .fillColor("#111111")
    .text(cv.lastName, left + firstNameWidth + 9, nameTop + 5, { lineBreak: false });

  doc.x = left;
  doc.moveDown(1.8);
  doc.font("Helvetica-Bold").fontSize(18).fillColor("#111111").text(cv.title, left, doc.y);
  doc.moveDown(0.4);

  const contact = [
    cv.contact.phone,
    cv.contact.email,
    cv.contact.urlTitle,
    cv.contact.github ? `github.com/${cv.contact.github}` : null,
  ].filter(Boolean);

  doc.font("Helvetica").fontSize(9).fillColor("#4b5563").text(contact.join("  |  "), left, doc.y);
  doc.moveDown(1.2);
}

function section(doc: PDFKit.PDFDocument, title: string) {
  ensureSpace(doc, 42);
  doc.x = doc.page.margins.left;
  doc.moveDown(0.5);
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#111111")
    .text(title.toUpperCase(), { characterSpacing: 0.6 });
  doc.moveTo(doc.page.margins.left, doc.y + 3).lineTo(pageRight(doc), doc.y + 3).stroke("#d1d5db");
  doc.moveDown(0.8);
}

function paragraph(doc: PDFKit.PDFDocument, text: string) {
  doc.font("Helvetica").fontSize(10).fillColor("#111827").text(clean(text), doc.page.margins.left, doc.y, {
    lineGap: 2,
    width: contentWidth(doc),
  });
  doc.moveDown(0.8);
}

function twoColumnLists(doc: PDFKit.PDFDocument, columns: [string, string[]][]) {
  ensureSpace(doc, 170);
  const gap = 20;
  const width = (contentWidth(doc) - gap) / 2;
  const startY = doc.y;
  const heights: number[] = [];

  columns.forEach(([title, items], index) => {
    const x = doc.page.margins.left + index * (width + gap);
    doc.x = x;
    doc.y = startY;
    doc.font("Helvetica-Bold").fontSize(10).fillColor("#111111").text(title, { width });
    doc.moveDown(0.3);
    items.forEach((item) => {
      drawBullet(doc, item, x, width, 9);
    });
    heights[index] = doc.y - startY;
  });

  doc.x = doc.page.margins.left;
  doc.y = startY + Math.max(...heights) + 10;
}

function drawExperience(doc: PDFKit.PDFDocument, experience: WorkExperience) {
  ensureSpace(doc, 95);

  const title = experience.agency ? `${experience.name} via ${experience.agency.name}` : experience.name;
  doc.font("Helvetica-Bold").fontSize(12).fillColor("#111111").text(clean(title));

  const meta = [experience.type, dateRange(experience.from, experience.to)].filter(Boolean).join("  |  ");
  doc.font("Helvetica-Bold").fontSize(9).fillColor("#4b5563").text(clean(meta), doc.page.margins.left, doc.y);

  if (experience.description) {
    doc.moveDown(0.35);
    doc.font("Helvetica").fontSize(9.5).fillColor("#111827").text(clean(experience.description), doc.page.margins.left, doc.y, {
      lineGap: 1.5,
      width: contentWidth(doc),
    });
  }

  if (experience.things?.length) {
    doc.moveDown(0.35);
    experience.things.forEach((thing) => drawBullet(doc, thing, doc.page.margins.left, contentWidth(doc), 9));
  }

  if (experience.links?.length) {
    doc.moveDown(0.35);
    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor("#374151")
      .text(clean(`Links: ${experience.links.map((link) => link.title).join(", ")}`), doc.page.margins.left, doc.y, {
        width: contentWidth(doc),
      });
  }

  const tech = Object.entries(experience.tech ?? {})
    .filter(([, enabled]) => enabled)
    .map(([name]) => name);

  if (tech.length) {
    doc.moveDown(0.35);
    doc.font("Helvetica").fontSize(8).fillColor("#6b7280").text(clean(tech.join("  /  ")), doc.page.margins.left, doc.y, {
      width: contentWidth(doc),
      lineGap: 1,
    });
  }

  doc.moveDown(0.9);
}

function drawBullet(
  doc: PDFKit.PDFDocument,
  text: string,
  x: number,
  width: number,
  fontSize: number,
) {
  ensureSpace(doc, 24);
  const bulletWidth = 10;
  const y = doc.y;
  doc.font("Helvetica").fontSize(fontSize).fillColor("#111827").text("-", x, y, {
    width: bulletWidth,
    lineBreak: false,
  });
  doc.text(clean(text), x + bulletWidth, y, {
    width: width - bulletWidth,
    lineGap: 1.5,
  });
  doc.moveDown(0.25);
}

function drawFooters(doc: PDFKit.PDFDocument) {
  const range = doc.bufferedPageRange();
  for (let index = range.start; index < range.start + range.count; index += 1) {
    doc.switchToPage(index);
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor("#9ca3af")
      .text(
        `${cv.firstName} ${cv.lastName} - ${index + 1} / ${range.count}`,
        doc.page.margins.left,
        doc.page.height - doc.page.margins.bottom - 12,
        { align: "center", lineBreak: false, width: contentWidth(doc) },
      );
  }
}

function ensureSpace(doc: PDFKit.PDFDocument, height: number) {
  if (doc.y + height > doc.page.height - doc.page.margins.bottom - 22) {
    doc.addPage();
  }
}

function reactText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return reactText(node.props.children);
  }
  return "";
}

function dateRange(from: Date, to?: Date) {
  return `${format(from, "MMMM yyyy")} to ${to ? format(to, "MMMM yyyy") : "Present"}`;
}

function clean(text: string) {
  return text
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*/g, "\n")
    .replace(/[–—]/g, "-")
    .replace(/[“”]/g, "\"")
    .replace(/[‘’]/g, "'")
    .trim();
}

function contentWidth(doc: PDFKit.PDFDocument) {
  return doc.page.width - doc.page.margins.left - doc.page.margins.right;
}

function pageRight(doc: PDFKit.PDFDocument) {
  return doc.page.width - doc.page.margins.right;
}
