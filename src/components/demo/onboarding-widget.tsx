"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport, type UIMessage } from "ai";
import { useRef, useEffect, useState } from "react";
import { useOnboardingStore } from "@/lib/store";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatInput } from "@/components/chat/chat-input";
import { Bot, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[380px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
      {/* Header */}
      <div className="flex items-center justify-between bg-blue-600 px-4 py-3">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-white" />
          <div>
            <p className="text-sm font-medium text-white">Onboarding Assistant</p>
            <p className="text-xs text-blue-200">
              Step {currentStepIndex + 1} of {steps.length}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-white hover:bg-blue-500"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-blue-100">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${((steps.filter((s) => s.completed).length) / steps.length) * 100}%`,
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
                  <ChatMessage
                    key={message.id}
                    role="user"
                    content={cleanText}
                  />
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
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="flex items-center gap-1 rounded-2xl bg-zinc-100 px-4 py-3 dark:bg-zinc-800">
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
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
