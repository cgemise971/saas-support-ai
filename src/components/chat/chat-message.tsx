"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-3",
        role === "user" ? "flex-row-reverse" : ""
      )}
    >
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback
          className={cn(
            role === "assistant"
              ? "bg-blue-600 text-white"
              : "bg-zinc-700 text-white"
          )}
        >
          {role === "assistant" ? (
            <Bot className="h-4 w-4" />
          ) : (
            <User className="h-4 w-4" />
          )}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          role === "user"
            ? "bg-blue-600 text-white"
            : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
        )}
      >
        {role === "assistant" ? (
          <div
            className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-pre:my-2 prose-ul:my-1 prose-code:text-blue-600 dark:prose-code:text-blue-400"
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
    .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[Source (\d+)[^\]]*\]/g, '<span class="text-blue-500 text-xs font-medium">[Source $1]</span>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n- /g, "</p><li>")
    .replace(/\n(\d+)\. /g, "</p><li>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
}
