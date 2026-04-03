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
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0b14]">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/6 blur-[80px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Header */}
      <header className="glass-strong sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
              <Bot className="h-4 w-4 text-white" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 opacity-50 blur-md" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              Onboard AI
            </span>
          </div>
          <Link href="/demo">
            <Button className="gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 text-sm font-medium text-white hover:from-blue-500 hover:to-violet-500">
              Try the demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-sm text-red-400">
          <UserX className="h-3.5 w-3.5" />
          60% of new signups churn in 7 days
        </div>
        <h1 className="animate-slide-up mb-6 text-5xl font-bold tracking-tight leading-[1.1] text-white md:text-6xl lg:text-7xl">
          Stop losing users to
          <br />
          <span className="gradient-text">bad onboarding</span>
        </h1>
        <p className="animate-slide-up mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#6b6b80] [animation-delay:0.1s]">
          An AI assistant that guides every new user through your SaaS,
          personalized to their role. Get them to value 5x faster.
        </p>
        <div className="animate-slide-up flex items-center justify-center gap-4 [animation-delay:0.2s]">
          <Link href="/demo">
            <button className="glow-blue-strong group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02]">
              <Sparkles className="h-4 w-4" />
              See it in action
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </Link>
          <Link href="/chat">
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-[#c8c8d8] transition-all hover:border-white/20 hover:bg-white/8">
              <MessageSquare className="h-4 w-4" />
              Try the chatbot
            </button>
          </Link>
        </div>
      </section>

      {/* Problem section */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-blue-400">
            The problem
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Your onboarding is killing growth
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-[#6b6b80]">
            Most SaaS products lose the majority of new users before they ever
            experience the core value.
          </p>
          <div className="stagger-children grid gap-6 md:grid-cols-3">
            <ProblemCard
              icon={<TrendingDown className="h-5 w-5 text-red-400" />}
              stat="40–60%"
              label="churn in week 1"
              description="Users sign up, get confused, and never come back."
            />
            <ProblemCard
              icon={<Clock className="h-5 w-5 text-amber-400" />}
              stat="45 min"
              label="average time to first value"
              description="Too many steps, too little guidance. Users give up."
            />
            <ProblemCard
              icon={<UserX className="h-5 w-5 text-red-400" />}
              stat="$0"
              label="revenue from churned users"
              description="Every lost user is wasted CAC. You paid and got nothing."
            />
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-center text-sm font-medium uppercase tracking-widest text-violet-400">
            The solution
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            AI-powered onboarding
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-[#6b6b80]">
            An intelligent assistant that knows your product and guides each
            user to their &ldquo;aha moment&rdquo; — fast.
          </p>
          <div className="stagger-children grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <SolutionCard
              icon={<Bot className="h-5 w-5" />}
              title="Personalized guidance"
              description="Adapts to the user's role and goals. No generic tours."
              color="blue"
            />
            <SolutionCard
              icon={<MessageSquare className="h-5 w-5" />}
              title="Live answers"
              description="Trained on your docs. Instant answers without leaving the app."
              color="violet"
            />
            <SolutionCard
              icon={<Zap className="h-5 w-5" />}
              title="5x faster activation"
              description="Users reach value in minutes, not hours."
              color="cyan"
            />
            <SolutionCard
              icon={<BarChart3 className="h-5 w-5" />}
              title="Measurable impact"
              description="Track completion, time-to-value, and drop-off points."
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Before vs. After
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <h3 className="text-sm font-semibold text-red-400">Without AI Onboarding</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#6b6b80]">
                <li className="flex gap-2.5"><span className="mt-0.5 text-red-500/60">&#x2717;</span> Generic product tours nobody reads</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-red-500/60">&#x2717;</span> 45 min average to first value</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-red-500/60">&#x2717;</span> 60% churn in first week</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-red-500/60">&#x2717;</span> Support tickets from confused users</li>
                <li className="flex gap-2.5"><span className="mt-0.5 text-red-500/60">&#x2717;</span> Same flow for CEO and developer</li>
              </ul>
            </div>
            <div className="gradient-border glass rounded-2xl p-6 glow-blue">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <h3 className="text-sm font-semibold text-emerald-400">With AI Onboarding</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#c8c8d8]">
                <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> Personalized guidance per role</li>
                <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> 5 min average to first value</li>
                <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> 2x higher activation rate</li>
                <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> 80% fewer support tickets</li>
                <li className="flex gap-2.5"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> Every user gets a tailored experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="gradient-border glass rounded-3xl px-8 py-16 glow-violet">
            <Shield className="mx-auto mb-4 h-8 w-8 text-violet-400" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
              Want this for your SaaS?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-[#6b6b80]">
              I build AI-powered onboarding systems for SaaS startups.
              Production-ready in 4–6 weeks. Reduce churn from day one.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="glow-blue-strong group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.02]">
                Book a free 30-min audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-[#6b6b80]">
          Built by{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300">
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
    <div className="glass gradient-border rounded-2xl p-6 text-center transition-all hover:bg-white/[0.04]">
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
        {icon}
      </div>
      <p className="text-3xl font-bold tracking-tight text-white">{stat}</p>
      <p className="mb-2 text-sm font-medium text-[#c8c8d8]">{label}</p>
      <p className="text-xs leading-relaxed text-[#6b6b80]">{description}</p>
    </div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "from-blue-500/20 to-blue-500/5 text-blue-400",
    violet: "from-violet-500/20 to-violet-500/5 text-violet-400",
    cyan: "from-cyan-500/20 to-cyan-500/5 text-cyan-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
  };

  return (
    <div className="glass rounded-2xl p-5 transition-all hover:bg-white/[0.04]">
      <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-b ${colorMap[color]}`}>
        {icon}
      </div>
      <h3 className="mb-1.5 text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs leading-relaxed text-[#6b6b80]">{description}</p>
    </div>
  );
}
