import Link from "next/link";
import { Bot, ArrowLeft, FileText } from "lucide-react";
import { ChatContainer } from "@/components/chat/chat-container";

export default function ChatPage() {
  return (
    <div className="flex h-screen flex-col bg-[#0a0b14] bg-grid-dense">
      {/* Header */}
      <header className="glass-strong flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <button className="flex h-7 w-7 items-center justify-center rounded-lg text-[#6b6b80] transition-colors hover:bg-white/5 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
            </button>
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-white">
                Acme Analytics Support
              </h1>
              <p className="text-[10px] text-[#6b6b80]">AI assistant</p>
            </div>
          </div>
          <div className="ml-2 flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
            <span className="text-[10px] font-medium text-emerald-400">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[#6b6b80]">
          <FileText className="h-3 w-3" />
          5 docs indexed
        </div>
      </header>

      {/* Chat */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer />
      </div>
    </div>
  );
}
