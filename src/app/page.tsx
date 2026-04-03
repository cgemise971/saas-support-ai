import Link from "next/link";
import {
  Bot,
  ArrowRight,
  Clock,
  TrendingDown,
  UserX,
  Sparkles,
  CheckCircle2,
  BarChart3,
  MessageSquare,
  Zap,
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
              Onboard AI
            </span>
          </div>
          <Link href="/demo">
            <Button>
              Try the demo
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          <UserX className="h-3.5 w-3.5" />
          60% of new signups churn in 7 days
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Stop losing users to{" "}
          <span className="text-blue-600">bad onboarding</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
          An AI assistant that guides every new user through your SaaS,
          step by step. Personalized to their role, answers questions in
          real-time, and gets them to value 5x faster.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/demo">
            <Button size="lg" className="gap-2">
              <Sparkles className="h-4 w-4" />
              See it in action
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="outline" size="lg" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Try the chatbot
            </Button>
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            The onboarding problem
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-zinc-500">
            Most SaaS products lose the majority of new users before they ever
            experience the core value.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <ProblemCard
              icon={<TrendingDown className="h-6 w-6 text-red-500" />}
              stat="40-60%"
              label="of signups churn in week 1"
              description="Users sign up, get confused by the interface, and never come back."
            />
            <ProblemCard
              icon={<Clock className="h-6 w-6 text-orange-500" />}
              stat="45 min"
              label="average time to first value"
              description="Too many steps, too little guidance. Users give up before seeing results."
            />
            <ProblemCard
              icon={<UserX className="h-6 w-6 text-red-500" />}
              stat="$0"
              label="revenue from churned users"
              description="Every lost user is wasted CAC. You paid to acquire them and got nothing."
            />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            The fix: AI-powered onboarding
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-zinc-500">
            An intelligent assistant that knows your product and guides each
            user to their "aha moment" — fast.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SolutionCard
              icon={<Bot className="h-5 w-5" />}
              title="Personalized guidance"
              description="Adapts to the user's role, goals, and progress. No generic tours."
            />
            <SolutionCard
              icon={<MessageSquare className="h-5 w-5" />}
              title="Answers questions live"
              description="Trained on your docs. Users get instant answers without leaving the app."
            />
            <SolutionCard
              icon={<Zap className="h-5 w-5" />}
              title="5x faster activation"
              description="Users reach value in minutes, not hours. Completion rates go up."
            />
            <SolutionCard
              icon={<BarChart3 className="h-5 w-5" />}
              title="Measurable impact"
              description="Track completion rates, time-to-value, and drop-off points."
            />
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Before vs. After
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-white p-6 dark:border-red-800 dark:bg-zinc-800">
              <h3 className="mb-4 font-semibold text-red-600">Without AI Onboarding</h3>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-2"><span className="text-red-400">&#x2717;</span> Generic product tours nobody reads</li>
                <li className="flex gap-2"><span className="text-red-400">&#x2717;</span> 45 min average to first value</li>
                <li className="flex gap-2"><span className="text-red-400">&#x2717;</span> 60% churn in first week</li>
                <li className="flex gap-2"><span className="text-red-400">&#x2717;</span> Support tickets from confused users</li>
                <li className="flex gap-2"><span className="text-red-400">&#x2717;</span> Same flow for CEO and developer</li>
              </ul>
            </div>
            <div className="rounded-xl border border-green-200 bg-white p-6 dark:border-green-800 dark:bg-zinc-800">
              <h3 className="mb-4 font-semibold text-green-600">With AI Onboarding</h3>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" /> Personalized guidance per role</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" /> 5 min average to first value</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" /> 2x higher activation rate</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" /> 80% fewer support tickets</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" /> Every user gets a tailored experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Want this for your SaaS?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            I build AI-powered onboarding systems for SaaS startups.
            Production-ready in 4-6 weeks. Reduce churn from day one.
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

function ProblemCard({
  icon,
  stat,
  label,
  description,
}: {
  icon: React.ReactNode;
  stat: string;
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/30">
        {icon}
      </div>
      <p className="text-3xl font-bold text-zinc-900 dark:text-white">{stat}</p>
      <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
        {label}
      </p>
      <p className="text-xs text-zinc-400">{description}</p>
    </div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mb-1 text-sm font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}
