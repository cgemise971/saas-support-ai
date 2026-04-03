"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleInput() {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 160) + "px";
    }
  }

  return (
    <div className="border-t border-[#1E293B] p-3" style={{ background: "rgba(15, 23, 42, 0.6)" }}>
      <div className="flex items-end gap-2 rounded-xl border border-[#334155]/40 bg-[#1E293B]/40 px-3 py-1.5">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          placeholder="Posez votre question..."
          rows={1}
          className="flex-1 resize-none bg-transparent py-2 text-sm text-[#F1F5F9] outline-none placeholder:text-[#475569]"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white transition-all hover:opacity-90 disabled:opacity-20"
          style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
        >
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="mt-1.5 text-center text-[9px] text-[#475569]">
        Propulse par RAG — reponses basees sur la documentation
      </p>
    </div>
  );
}
