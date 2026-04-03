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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MockDashboard() {
  const { steps, currentStepIndex, completeStep, setUserRole, isCompleted, getElapsedTime } =
    useOnboardingStore();

  const currentStep = steps[currentStepIndex];

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="flex w-56 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex h-14 items-center gap-2 border-b border-zinc-100 px-4 dark:border-zinc-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-xs font-bold text-white">
            A
          </div>
          <span className="font-semibold text-zinc-900 dark:text-white">
            Acme Analytics
          </span>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" active />
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />} label="Analytics" />
          <SidebarItem icon={<Users className="h-4 w-4" />} label="Users" />
          <SidebarItem icon={<TrendingUp className="h-4 w-4" />} label="Funnels" />
          <SidebarItem icon={<Bell className="h-4 w-4" />} label="Alerts" />
          <SidebarItem icon={<Settings className="h-4 w-4" />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h1 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Dashboard
          </h1>
          <div className="text-sm text-zinc-400">
            Demo mode
          </div>
        </div>

        {/* Onboarding checklist + dashboard content */}
        <div className="p-6">
          {/* Onboarding Progress Card */}
          {!isCompleted ? (
            <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-950">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-semibold text-blue-900 dark:text-blue-100">
                  Complete your setup
                </h2>
                <span className="text-sm text-blue-600">
                  {steps.filter((s) => s.completed).length}/{steps.length} done
                </span>
              </div>
              {/* Progress bar */}
              <div className="mb-4 h-2 rounded-full bg-blue-100 dark:bg-blue-900">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-500"
                  style={{
                    width: `${(steps.filter((s) => s.completed).length / steps.length) * 100}%`,
                  }}
                />
              </div>
              {/* Steps */}
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <div
                    key={step.id}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                      step.completed
                        ? "bg-blue-100/50 text-blue-600 dark:bg-blue-900/30"
                        : i === currentStepIndex
                          ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                          : "text-zinc-400"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {step.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Circle className="h-4 w-4" />
                      )}
                      <span>{step.title}</span>
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

          {/* Mock metric cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard label="Active Users" value="—" change="" empty />
            <MetricCard label="Events Today" value="—" change="" empty />
            <MetricCard label="Churn Rate" value="—" change="" empty />
            <MetricCard label="MRR" value="—" change="" empty />
          </div>

          {/* Empty state */}
          <div className="mt-8 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 py-16 dark:border-zinc-700">
            <BarChart3 className="mb-4 h-12 w-12 text-zinc-300" />
            <h3 className="mb-1 text-lg font-medium text-zinc-600 dark:text-zinc-400">
              No data yet
            </h3>
            <p className="text-sm text-zinc-400">
              Complete the setup to start seeing your analytics
            </p>
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
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-white"
          : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800"
      )}
    >
      {icon}
      {label}
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
    role: "Select role",
    "data-source": "Connect",
    dashboard: "Create",
    invite: "Invite",
    alert: "Set up",
  };

  return (
    <Button size="sm" className="h-7 gap-1 text-xs" onClick={onComplete}>
      {icons[stepId]}
      {labels[stepId]}
      <ChevronRight className="h-3 w-3" />
    </Button>
  );
}

function MetricCard({
  label,
  value,
  change,
  empty,
}: {
  label: string;
  value: string;
  change: string;
  empty?: boolean;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-xs text-zinc-500">{label}</p>
      <p
        className={cn(
          "mt-1 text-2xl font-bold",
          empty ? "text-zinc-300 dark:text-zinc-600" : "text-zinc-900 dark:text-white"
        )}
      >
        {value}
      </p>
      {change && (
        <p className="mt-1 text-xs text-green-600">{change}</p>
      )}
    </div>
  );
}

function CompletionCard({ elapsedTime }: { elapsedTime: number }) {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-950">
      <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
      <h2 className="mb-1 text-xl font-bold text-green-900 dark:text-green-100">
        Onboarding complete!
      </h2>
      <p className="mb-3 text-sm text-green-700 dark:text-green-300">
        You finished in <strong>{timeStr}</strong> — the average without AI assistance is{" "}
        <strong>45 minutes</strong>.
      </p>
      <div className="inline-flex items-center gap-4 rounded-lg bg-white px-5 py-3 shadow-sm dark:bg-zinc-800">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">{timeStr}</p>
          <p className="text-xs text-zinc-500">With AI</p>
        </div>
        <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-700" />
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-400">45 min</p>
          <p className="text-xs text-zinc-500">Without AI</p>
        </div>
        <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-700" />
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">5x faster</p>
          <p className="text-xs text-zinc-500">Improvement</p>
        </div>
      </div>
    </div>
  );
}
