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
    <div className="border-t border-white/5 bg-[#0a0b14]/80 p-3">
      <div className="flex items-end gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-1.5">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          placeholder="Ask a question..."
          rows={1}
          className="flex-1 resize-none bg-transparent py-2 text-sm text-[#e4e4f0] outline-none placeholder:text-[#3d3d50]"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white transition-all hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
        >
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
      <p className="mt-1.5 text-center text-[10px] text-[#3d3d50]">
        Powered by RAG — answers grounded in documentation
      </p>
    </div>
  );
}
