import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { searchDocs } from "@/lib/rag/search";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const lastMessage = messages[messages.length - 1];
  const query = lastMessage?.content || "";

  const results = searchDocs(query, 5);

  const contextBlock = results
    .map(
      (r, i) =>
        `[Source ${i + 1}: ${r.chunk.source} — ${r.chunk.section}]\n${r.chunk.content}`
    )
    .join("\n\n---\n\n");

  const systemPrompt = `You are the AI support assistant for Acme Analytics, an AI-powered analytics platform for SaaS businesses.

Your role:
- Answer questions about Acme Analytics based ONLY on the provided documentation
- Be helpful, concise, and accurate
- If the documentation doesn't contain the answer, say so honestly
- Always cite your sources using [Source N] format
- Format responses with markdown for readability
- For code examples, use the appropriate language syntax highlighting

IMPORTANT RULES:
- Never make up features or information not in the docs
- If asked about pricing, use exact numbers from the docs
- For technical questions, include code examples when relevant
- Keep answers focused and actionable

Here is the relevant documentation for this question:

${contextBlock || "No relevant documentation found for this query."}`;

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
