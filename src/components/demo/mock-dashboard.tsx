"use client";

import { useOnboardingStore } from "@/lib/store";
import {
  BarChart3,
  Users,
  TrendingUp,
  Bell,
  Settings,
  LayoutDashboard,
  ChevronRight,
  Plus,
  UserPlus,
  Zap,
  CheckCircle2,
  Circle,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function MockDashboard() {
  const { steps, currentStepIndex, completeStep, setUserRole, isCompleted, getElapsedTime } =
    useOnboardingStore();

  return (
    <div className="flex h-screen bg-[#0a0b14]">
      {/* Sidebar */}
      <aside className="flex w-56 flex-col border-r border-white/5 bg-[#0d0e1a]">
        <div className="flex h-14 items-center gap-2.5 border-b border-white/5 px-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 text-xs font-bold text-white">
            A
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            Acme Analytics
          </span>
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" active />
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />} label="Analytics" />
          <SidebarItem icon={<Users className="h-4 w-4" />} label="Users" />
          <SidebarItem icon={<TrendingUp className="h-4 w-4" />} label="Funnels" />
          <SidebarItem icon={<Activity className="h-4 w-4" />} label="AI Insights" badge="New" />
          <SidebarItem icon={<Bell className="h-4 w-4" />} label="Alerts" />
          <div className="my-3 h-px bg-white/5" />
          <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" />
        </nav>
        <div className="border-t border-white/5 p-3">
          <div className="rounded-xl bg-gradient-to-r from-blue-600/10 to-violet-600/10 border border-blue-500/10 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wider text-blue-400">Pro Plan</p>
            <p className="text-xs text-[#6b6b80] mt-0.5">14 days remaining</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-grid-dense">
        {/* Top bar */}
        <div className="glass-strong flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-semibold text-white">Dashboard</h1>
            <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-[#6b6b80]">
              Demo mode
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#6b6b80]">
              Last 7 days
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Onboarding Progress Card */}
          {!isCompleted ? (
            <div className="glass gradient-border glow-blue mb-6 rounded-2xl p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <h2 className="text-sm font-semibold text-white">
                    Complete your setup
                  </h2>
                </div>
                <span className="text-xs font-medium text-blue-400">
                  {steps.filter((s) => s.completed).length}/{steps.length}
                </span>
              </div>
              {/* Progress bar */}
              <div className="mb-5 h-1 rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700 ease-out"
                  style={{
                    width: `${(steps.filter((s) => s.completed).length / steps.length) * 100}%`,
                  }}
                />
              </div>
              {/* Steps */}
              <div className="space-y-1.5">
                {steps.map((step, i) => (
                  <div
                    key={step.id}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all",
                      step.completed
                        ? "text-[#6b6b80]"
                        : i === currentStepIndex
                          ? "glass bg-white/[0.03] text-white"
                          : "text-[#3d3d50]"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      {step.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      ) : i === currentStepIndex ? (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-blue-500 bg-blue-500/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        </div>
                      ) : (
                        <Circle className="h-4 w-4 text-[#2a2a3d]" />
                      )}
                      <span className={cn("text-xs", step.completed && "line-through")}>{step.title}</span>
                    </div>
                    {i === currentStepIndex && !step.completed && (
                      <StepAction
                        stepId={step.id}
                        onComplete={() => {
                          if (step.id === "role") setUserRole("founder");
                          completeStep(step.id);
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <CompletionCard elapsedTime={getElapsedTime()} />
          )}

          {/* Metric cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Active Users" value="—" trend={null} />
            <MetricCard label="Events Today" value="—" trend={null} />
            <MetricCard label="Churn Rate" value="—" trend={null} />
            <MetricCard label="MRR" value="—" trend={null} />
          </div>

          {/* Empty chart area */}
          <div className="mt-6 glass rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">User Activity</h3>
              <span className="text-xs text-[#6b6b80]">No data yet</span>
            </div>
            <div className="flex h-48 flex-col items-center justify-center">
              <BarChart3 className="mb-3 h-10 w-10 text-[#1e1e30]" />
              <p className="text-sm text-[#3d3d50]">
                Complete the setup to start seeing analytics
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer",
        active
          ? "bg-white/[0.06] text-white font-medium"
          : "text-[#6b6b80] hover:bg-white/[0.03] hover:text-[#c8c8d8]"
      )}
    >
      <div className="flex items-center gap-2.5">
        {icon}
        {label}
      </div>
      {badge && (
        <span className="rounded-full bg-violet-500/20 px-1.5 py-0.5 text-[9px] font-semibold text-violet-400">
          {badge}
        </span>
      )}
    </div>
  );
}

function StepAction({
  stepId,
  onComplete,
}: {
  stepId: string;
  onComplete: () => void;
}) {
  const icons: Record<string, React.ReactNode> = {
    role: <Users className="h-3 w-3" />,
    "data-source": <Zap className="h-3 w-3" />,
    dashboard: <Plus className="h-3 w-3" />,
    invite: <UserPlus className="h-3 w-3" />,
    alert: <Bell className="h-3 w-3" />,
  };

  const labels: Record<string, string> = {
    role: "Select",
    "data-source": "Connect",
    dashboard: "Create",
    invite: "Invite",
    alert: "Set up",
  };

  return (
    <button
      onClick={onComplete}
      className="flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-[10px] font-medium text-white transition-all hover:scale-105"
    >
      {icons[stepId]}
      {labels[stepId]}
      <ChevronRight className="h-3 w-3" />
    </button>
  );
}

function MetricCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: number | null;
}) {
  const empty = value === "—";
  return (
    <div className="glass rounded-xl p-4 transition-all hover:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#6b6b80]">{label}</p>
        {trend !== null && (
          <div className={cn("flex items-center gap-0.5 text-[10px]", trend >= 0 ? "text-emerald-400" : "text-red-400")}>
            {trend >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className={cn("mt-2 text-2xl font-bold tracking-tight", empty ? "text-[#1e1e30]" : "text-white")}>
        {value}
      </p>
    </div>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function CompletionCard({ elapsedTime }: { elapsedTime: number }) {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <div className="gradient-border glass glow-blue mb-6 rounded-2xl p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
      </div>
      <h2 className="mb-1 text-xl font-bold text-white">
        Onboarding complete!
      </h2>
      <p className="mb-6 text-sm text-[#6b6b80]">
        Finished in <strong className="text-white">{timeStr}</strong> — average without AI is{" "}
        <strong className="text-[#6b6b80]">45 minutes</strong>.
      </p>
      <div className="inline-flex items-center gap-6 rounded-xl bg-white/[0.03] border border-white/5 px-6 py-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-400">{timeStr}</p>
          <p className="text-[10px] uppercase tracking-wider text-[#6b6b80]">With AI</p>
        </div>
        <div className="h-10 w-px bg-white/5" />
        <div className="text-center">
          <p className="text-2xl font-bold text-[#3d3d50]">45 min</p>
          <p className="text-[10px] uppercase tracking-wider text-[#6b6b80]">Without AI</p>
        </div>
        <div className="h-10 w-px bg-white/5" />
        <div className="text-center">
          <p className="text-2xl font-bold gradient-text">5x faster</p>
          <p className="text-[10px] uppercase tracking-wider text-[#6b6b80]">Improvement</p>
        </div>
      </div>
    </div>
  );
}
