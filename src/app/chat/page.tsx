import Link from "next/link";
import { Bot, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChatContainer } from "@/components/chat/chat-container";

export default function ChatPage() {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-zinc-900 dark:text-white">
                Acme Analytics Support
              </h1>
              <p className="text-xs text-zinc-500">AI assistant</p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="ml-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400"
          >
            Online
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <FileText className="h-3.5 w-3.5" />
          4 docs indexed
        </div>
      </header>

      {/* Chat */}
      <div className="flex-1 overflow-hidden">
        <ChatContainer />
      </div>
    </div>
  );
}
