"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport, type UIMessage } from "ai";
import { useRef, useEffect, useState } from "react";
import { useOnboardingStore } from "@/lib/store";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatInput } from "@/components/chat/chat-input";
import { X, MessageSquare } from "lucide-react";
import { IconLogo } from "@/components/ui/custom-icons";
import { motion, AnimatePresence } from "framer-motion";

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
          text: `[SYSTEM] The user just opened the product for the first time. Current onboarding step: "${currentStep.title}" - ${currentStep.description}. ${currentStep.aiPrompt}. IMPORTANT: Respond in French.`,
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
      ? `[CONTEXT: User is on step "${currentStep.title}". ${currentStep.aiPrompt}. IMPORTANT: Respond in French.]`
      : "";
    sendMessage({ text: `${content}\n\n${context}` });
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_0_32px_rgba(99,102,241,0.3)] transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
          >
            <MessageSquare className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 flex h-[520px] w-[380px] flex-col overflow-hidden rounded-2xl shadow-[0_8px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(99,102,241,0.08)]"
            style={{ background: "rgba(15, 23, 42, 0.92)", backdropFilter: "blur(24px)", border: "1px solid rgba(148,163,184,0.08)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))", borderBottom: "1px solid rgba(148,163,184,0.06)" }}>
              <div className="flex items-center gap-2.5">
                <IconLogo className="h-7 w-7" />
                <div>
                  <p className="text-xs font-semibold text-white">Assistant d&apos;onboarding</p>
                  <p className="text-[10px] text-[#64748B]">
                    Etape {currentStepIndex + 1} sur {steps.length}
                  </p>
                </div>
              </div>
              <button
                className="flex h-6 w-6 items-center justify-center rounded-md text-[#64748B] transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Progress */}
            <div className="h-0.5 bg-[#1E293B]">
              <div
                className="h-full transition-all duration-700"
                style={{
                  width: `${(steps.filter((s) => s.completed).length / steps.length) * 100}%`,
                  background: "linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)",
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
                      return <ChatMessage key={message.id} role="user" content={text.split("\n\n[CONTEXT:")[0]} />;
                    }
                    return <ChatMessage key={message.id} role={message.role as "user" | "assistant"} content={text} />;
                  })}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-3 px-4 py-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
                      <div className="h-3 w-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
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
            </div>

            <ChatInput onSend={handleSend} isLoading={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
