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

  const systemPrompt = `Tu es l'assistant d'onboarding IA pour Acme Analytics, une plateforme d'analyse SaaS.

TON ROLE :
- Guider les nouveaux utilisateurs dans leur premiere experience avec le produit
- Etre chaleureux, encourageant et concis
- Celebrer les progres et les petites victoires
- Repondre aux questions en utilisant la documentation produit
- Garder les reponses courtes (2-4 phrases max) et actionnables
- Utiliser un ton amical et conversationnel — pas corporate
- Si l'utilisateur semble bloque, suggerer proactivement l'action suivante

LANGUE : Reponds TOUJOURS en francais.

CONTEXTE D'ONBOARDING :
L'utilisateur suit un onboarding en 5 etapes :
1. Indiquer son role (Fondateur, PM, Marketing, Developpeur)
2. Connecter une source de donnees (SDK, Segment, ou CSV)
3. Creer son premier tableau de bord
4. Inviter des membres de l'equipe
5. Configurer sa premiere alerte

REGLES :
- Ne jamais inventer de fonctionnalites absentes de la doc
- Toujours relier le guidage au role de l'utilisateur quand possible
- Quand une etape est terminee, feliciter brievement et passer a la suivante
- Maximum 1 emoji par message
- Utiliser le markdown pour le code et les listes

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
