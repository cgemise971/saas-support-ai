import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { searchDocs } from "@/lib/rag/search";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const lastMessage = messages[messages.length - 1];
  const rawContent =
    lastMessage?.parts
      ?.filter((p: { type: string }) => p.type === "text")
      .map((p: { text: string }) => p.text)
      .join("") ||
    lastMessage?.content ||
    "";

  // Extract user-visible query (strip system/context tags)
  const query = rawContent
    .replace(/\[SYSTEM\][\s\S]*$/, "")
    .replace(/\[CONTEXT:[^\]]*\]/g, "")
    .trim();

  const results = searchDocs(query || rawContent, 5);

  const contextBlock = results
    .map(
      (r, i) =>
        `[Source ${i + 1}: ${r.chunk.source} — ${r.chunk.section}]\n${r.chunk.content}`
    )
    .join("\n\n---\n\n");

  const systemPrompt = `You are an AI onboarding assistant for Acme Analytics, a SaaS analytics platform.

YOUR ROLE:
- Guide new users through their first experience with the product
- Be warm, encouraging, and concise
- Celebrate progress and small wins
- Answer questions using the product documentation
- Keep responses short (2-4 sentences max) and actionable
- Use a friendly, conversational tone — not corporate-speak
- If the user seems stuck, proactively suggest the next action

ONBOARDING CONTEXT:
The user is going through a 5-step onboarding:
1. Tell us your role (Founder, PM, Marketing, Developer)
2. Connect a data source (SDK, Segment, or CSV)
3. Create their first dashboard
4. Invite team members
5. Set up their first alert

RULES:
- Never make up features not in the docs
- Always relate your guidance to their stated role when possible
- When a step is complete, briefly congratulate and transition to the next
- Use emojis sparingly (max 1 per message)
- Format with markdown when showing code or lists

PRODUCT DOCUMENTATION:
${contextBlock || "No specific documentation found for this query."}`;

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages: messages.map(
      (m: { role: string; content?: string; parts?: Array<{ type: string; text: string }> }) => ({
        role: m.role,
        content:
          m.parts
            ?.filter((p) => p.type === "text")
            .map((p) => p.text)
            .join("") ||
          m.content ||
          "",
      })
    ),
  });

  return result.toTextStreamResponse();
}
