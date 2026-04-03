import Link from "next/link";
import {
  Bot,
  MessageSquare,
  FileText,
  Zap,
  Shield,
  ArrowRight,
  Code2,
  Search,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-zinc-900 dark:text-white">
              SaaS Support AI
            </span>
          </div>
          <Link href="/chat">
            <Button>
              Try the demo
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400">
          <Sparkles className="h-3.5 w-3.5" />
          RAG-Powered AI Support
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Your docs become a{" "}
          <span className="text-blue-600">smart assistant</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
          Turn your SaaS documentation into an AI support agent that answers
          questions accurately, cites sources, and never hallucates. Built with
          Next.js, Claude, and Retrieval-Augmented Generation.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/chat">
            <Button size="lg" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Try the demo
            </Button>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="gap-2">
              <Code2 className="h-4 w-4" />
              View source
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            How it works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<FileText className="h-5 w-5" />}
              title="Document Ingestion"
              description="Feed your markdown docs, API references, and knowledge base articles. The system chunks and indexes them automatically."
            />
            <FeatureCard
              icon={<Search className="h-5 w-5" />}
              title="Intelligent Retrieval"
              description="When a user asks a question, RAG finds the most relevant documentation chunks using semantic search and scoring."
            />
            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="Accurate Answers"
              description="Claude generates answers grounded in your actual documentation. Every response cites its sources for transparency."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Built with modern tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <TechCard
              icon={<Zap className="h-5 w-5 text-amber-500" />}
              title="Next.js 16"
              description="App Router, streaming, server components"
            />
            <TechCard
              icon={<Bot className="h-5 w-5 text-blue-500" />}
              title="Claude (Anthropic)"
              description="State-of-the-art LLM for accurate answers"
            />
            <TechCard
              icon={<Search className="h-5 w-5 text-green-500" />}
              title="RAG Pipeline"
              description="Document chunking + retrieval + generation"
            />
            <TechCard
              icon={<Shield className="h-5 w-5 text-purple-500" />}
              title="Vercel AI SDK"
              description="Streaming responses, edge-ready"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-100 bg-blue-600 py-16 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Want this for your SaaS?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            I build production-ready AI features for SaaS startups. RAG
            systems, AI agents, LLM integrations — shipped in weeks, not months.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-blue-600 hover:bg-blue-50"
            >
              Book a free 30-min audit
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-zinc-400">
          Built by{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Your Name
          </a>{" "}
          — AI infrastructure for SaaS startups
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function TechCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-zinc-100 p-4 dark:border-zinc-800">
      <div className="mt-0.5">{icon}</div>
      <div>
        <h3 className="font-medium text-zinc-900 dark:text-white">{title}</h3>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
    </div>
  );
}
