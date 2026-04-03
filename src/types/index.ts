export interface DocChunk {
  id: string;
  title: string;
  content: string;
  source: string;
  section: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: DocChunk[];
}

export interface SearchResult {
  chunk: DocChunk;
  score: number;
}
