"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport, type UIMessage } from "ai";
import { useRef, useEffect, useState } from "react";
import { useOnboardingStore } from "@/lib/store";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatInput } from "@/components/chat/chat-input";
import { Bot, X, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const transport = new TextStreamChatTransport({ api: "/api/chat" });

function getMessageText(message: UIMessage): string {
  if (!message.parts) return "";
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export function OnboardingWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const { messages, sendMessage, status } = useChat({ transport });
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";
  const { steps, currentStepIndex, startOnboarding } = useOnboardingStore();
  const hasSentInitial = useRef(false);

  useEffect(() => {
    if (!hasSentInitial.current) {
      hasSentInitial.current = true;
      startOnboarding();
      const currentStep = steps[0];
      if (currentStep) {
        sendMessage({
          text: `[SYSTEM] The user just opened the product for the first time. Current onboarding step: "${currentStep.title}" - ${currentStep.description}. ${currentStep.aiPrompt}`,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSend(content: string) {
    const currentStep = steps[currentStepIndex];
    const context = currentStep
      ? `[CONTEXT: User is on step "${currentStep.title}". ${currentStep.aiPrompt}]`
      : "";
    sendMessage({ text: `${content}\n\n${context}` });
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg transition-all hover:scale-105 glow-blue-strong"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[380px] flex-col overflow-hidden rounded-2xl glass-strong glow-blue">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-blue-600/20 to-violet-600/20 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
            <Bot className="h-3.5 w-3.5 text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Onboarding Assistant</p>
            <p className="text-[10px] text-blue-300/60">
              Step {currentStepIndex + 1} of {steps.length}
            </p>
          </div>
        </div>
        <button
          className="flex h-6 w-6 items-center justify-center rounded-md text-[#6b6b80] transition-colors hover:bg-white/5 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700"
          style={{
            width: `${(steps.filter((s) => s.completed).length / steps.length) * 100}%`,
          }}
        />
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="space-y-1 py-3">
          {messages
            .filter((m) => m.role === "assistant" || !getMessageText(m).startsWith("[SYSTEM]"))
            .map((message) => {
              const text = getMessageText(message);
              if (message.role === "user" && text.includes("[CONTEXT:")) {
                const cleanText = text.split("\n\n[CONTEXT:")[0];
                return (
                  <ChatMessage key={message.id} role="user" content={cleanText} />
                );
              }
              return (
                <ChatMessage
                  key={message.id}
                  role={message.role as "user" | "assistant"}
                  content={text}
                />
              );
            })}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex gap-3 px-4 py-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
                <Bot className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="flex items-center gap-1.5 rounded-xl bg-white/[0.03] border border-white/5 px-4 py-2.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:300ms]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
}
