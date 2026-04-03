import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { ChatContainer } from "@/components/chat/chat-container";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { IconLogo } from "@/components/ui/custom-icons";

export default function ChatPage() {
  return (
    <div className="relative flex h-screen flex-col bg-[#0F172A]">
      <AnimatedBackground />

      {/* Header */}
      <header className="glass relative z-10 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <button className="flex h-7 w-7 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:bg-[#1E293B] hover:text-white">
              <ArrowLeft className="h-4 w-4" />
            </button>
          </Link>
          <div className="flex items-center gap-2.5">
            <IconLogo className="h-8 w-8" />
            <div>
              <h1 className="font-[family-name:var(--font-syne)] text-sm font-bold text-white">
                Support Acme Analytics
              </h1>
              <p className="text-[10px] text-[#64748B]">Assistant IA</p>
            </div>
          </div>
          <div className="ml-2 flex items-center gap-1.5 rounded-full bg-[#34D399]/10 px-2.5 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#34D399] animate-pulse-soft" />
            <span className="text-[10px] font-semibold text-[#34D399]">En ligne</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[#64748B]">
          <FileText className="h-3 w-3" />
          5 docs indexees
        </div>
      </header>

      {/* Chat */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <ChatContainer />
      </div>
    </div>
  );
}
