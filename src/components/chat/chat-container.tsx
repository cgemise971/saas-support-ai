"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport, type UIMessage } from "ai";
import { useRef, useEffect } from "react";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { IconLogo, IconChat } from "@/components/ui/custom-icons";

const SUGGESTIONS = [
  "Comment demarrer ?",
  "Quels sont les tarifs ?",
  "Comment suivre les evenements ?",
  "Quelles integrations disponibles ?",
];

const transport = new TextStreamChatTransport({ api: "/api/chat" });

function getMessageText(message: UIMessage): string {
  if (!message.parts) return "";
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export function ChatContainer() {
  const { messages, sendMessage, status } = useChat({ transport });
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSend(content: string) {
    sendMessage({ text: content });
  }

  return (
    <div className="flex h-full flex-col">
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center px-4">
            <div className="relative mb-6">
              <IconLogo className="h-16 w-16" />
              <div className="absolute inset-0 blur-xl opacity-30">
                <IconLogo className="h-16 w-16" />
              </div>
            </div>
            <h2 className="mb-2 font-[family-name:var(--font-syne)] text-lg font-bold text-white">
              Support Acme Analytics
            </h2>
            <p className="mb-8 max-w-sm text-center text-sm text-[#94A3B8]">
              Posez-moi n&apos;importe quelle question sur Acme Analytics.
              J&apos;ai acces a toute la documentation produit.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSend(suggestion)}
                  className="flex items-center gap-1.5 rounded-full border border-[#334155]/50 bg-[#1E293B]/30 px-4 py-2 text-xs text-[#94A3B8] transition-all hover:border-[#6366F1]/30 hover:bg-[#6366F1]/5 hover:text-[#818CF8]"
                >
                  <IconChat className="h-3 w-3" />
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-1 py-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role as "user" | "assistant"}
                content={getMessageText(message)}
              />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-3 px-4 py-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                  <IconLogo className="h-7 w-7" />
                </div>
                <div className="rounded-xl bg-[#1E293B]/50 border border-[#334155]/30 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#818CF8] [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#C084FC] [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#67E8F9] [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
}
