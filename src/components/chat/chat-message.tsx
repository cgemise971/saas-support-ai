"use client";

import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { IconLogo } from "@/components/ui/custom-icons";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={cn("flex gap-3 px-4 py-2", role === "user" ? "flex-row-reverse" : "")}>
      {role === "assistant" ? (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
          <IconLogo className="h-7 w-7" />
        </div>
      ) : (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#334155]">
          <User className="h-3.5 w-3.5 text-[#94A3B8]" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          role === "user"
            ? "text-white"
            : "bg-[#1E293B]/50 border border-[#334155]/30 text-[#CBD5E1]"
        )}
        style={
          role === "user"
            ? { background: "linear-gradient(135deg, #6366F1, #7C3AED)" }
            : undefined
        }
      >
        {role === "assistant" ? (
          <div
            className="max-w-none text-sm leading-relaxed [&_p]:my-1 [&_pre]:my-2 [&_ul]:my-1 [&_code]:text-[#818CF8] [&_strong]:text-white [&_a]:text-[#818CF8]"
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
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="rounded-lg bg-[#0F172A]/60 border border-[#334155]/30 p-3 text-xs overflow-x-auto my-2"><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code class="rounded bg-[#334155]/50 px-1.5 py-0.5 text-xs text-[#818CF8]">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[Source (\d+)[^\]]*\]/g, '<span class="text-[#C084FC] text-[10px] font-semibold">[Source $1]</span>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n- /g, "</p><li class='ml-4 list-disc'>")
    .replace(/\n(\d+)\. /g, "</p><li class='ml-4 list-decimal'>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
}
