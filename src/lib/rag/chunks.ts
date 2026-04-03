import fs from "fs";
import path from "path";
import type { DocChunk } from "@/types";

function generateId(source: string, index: number): string {
  return `${source.replace(/[^a-z0-9]/gi, "-").toLowerCase()}-${index}`;
}

function splitIntoChunks(
  content: string,
  source: string,
  maxChunkSize = 800
): DocChunk[] {
  const chunks: DocChunk[] = [];
  const sections = content.split(/^## /m);

  let currentTitle = source.replace(".md", "").replace(/-/g, " ");

  for (const section of sections) {
    if (!section.trim()) continue;

    const lines = section.split("\n");
    const sectionTitle = lines[0]?.trim() || currentTitle;
    const sectionContent = lines.slice(1).join("\n").trim();

    if (!sectionContent) continue;

    if (sectionContent.length <= maxChunkSize) {
      chunks.push({
        id: generateId(source, chunks.length),
        title: sectionTitle,
        content: sectionContent,
        source,
        section: sectionTitle,
      });
    } else {
      const paragraphs = sectionContent.split(/\n\n+/);
      let buffer = "";

      for (const paragraph of paragraphs) {
        if (buffer.length + paragraph.length > maxChunkSize && buffer) {
          chunks.push({
            id: generateId(source, chunks.length),
            title: sectionTitle,
            content: buffer.trim(),
            source,
            section: sectionTitle,
          });
          buffer = "";
        }
        buffer += paragraph + "\n\n";
      }

      if (buffer.trim()) {
        chunks.push({
          id: generateId(source, chunks.length),
          title: sectionTitle,
          content: buffer.trim(),
          source,
          section: sectionTitle,
        });
      }
    }

    currentTitle = sectionTitle;
  }

  return chunks;
}

let cachedChunks: DocChunk[] | null = null;

export function loadAllChunks(): DocChunk[] {
  if (cachedChunks) return cachedChunks;

  const docsDir = path.join(process.cwd(), "docs");
  const files = fs.readdirSync(docsDir).filter((f) => f.endsWith(".md"));
  const allChunks: DocChunk[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(docsDir, file), "utf-8");
    const chunks = splitIntoChunks(content, file);
    allChunks.push(...chunks);
  }

  cachedChunks = allChunks;
  return allChunks;
}
