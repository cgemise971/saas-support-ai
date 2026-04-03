"use client";

import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={cn("flex gap-3 px-4 py-2", role === "user" ? "flex-row-reverse" : "")}>
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
          role === "assistant"
            ? "bg-gradient-to-br from-blue-500 to-violet-600"
            : "bg-white/10"
        )}
      >
        {role === "assistant" ? (
          <Bot className="h-3.5 w-3.5 text-white" />
        ) : (
          <User className="h-3.5 w-3.5 text-[#c8c8d8]" />
        )}
      </div>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          role === "user"
            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
            : "bg-white/[0.03] border border-white/5 text-[#c8c8d8]"
        )}
      >
        {role === "assistant" ? (
          <div
            className="prose-sm max-w-none [&_p]:my-1 [&_pre]:my-2 [&_ul]:my-1 [&_code]:text-blue-400 [&_strong]:text-white [&_a]:text-blue-400"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
          />
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="rounded-lg bg-black/30 p-3 text-xs overflow-x-auto my-2"><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="rounded bg-white/5 px-1.5 py-0.5 text-xs">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[Source (\d+)[^\]]*\]/g, '<span class="text-violet-400 text-[10px] font-medium">[Source $1]</span>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n- /g, "</p><li class='ml-4 list-disc'>")
    .replace(/\n(\d+)\. /g, "</p><li class='ml-4 list-decimal'>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
}
