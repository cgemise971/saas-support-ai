import type { DocChunk, SearchResult } from "@/types";
import { loadAllChunks } from "./chunks";

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function computeScore(query: string, chunk: DocChunk): number {
  const queryTokens = tokenize(query);
  const contentTokens = tokenize(chunk.content + " " + chunk.title);
  const contentText = (chunk.content + " " + chunk.title).toLowerCase();

  let score = 0;

  // Exact phrase match (highest weight)
  if (contentText.includes(query.toLowerCase())) {
    score += 10;
  }

  // Token overlap
  for (const qt of queryTokens) {
    const matches = contentTokens.filter((ct) => ct.includes(qt)).length;
    score += matches * 2;

    // Bonus for title match
    if (chunk.title.toLowerCase().includes(qt)) {
      score += 5;
    }
  }

  // Bigram matching
  for (let i = 0; i < queryTokens.length - 1; i++) {
    const bigram = queryTokens[i] + " " + queryTokens[i + 1];
    if (contentText.includes(bigram)) {
      score += 8;
    }
  }

  // Length normalization (prefer concise, focused chunks)
  const lengthPenalty = Math.log(contentTokens.length + 1) / 5;
  score = score / (1 + lengthPenalty);

  return score;
}

export function searchDocs(query: string, topK = 4): SearchResult[] {
  const chunks = loadAllChunks();

  const results: SearchResult[] = chunks
    .map((chunk) => ({
      chunk,
      score: computeScore(query, chunk),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  return results;
}
