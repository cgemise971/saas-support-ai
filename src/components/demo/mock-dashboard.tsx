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
  Activity,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { IconLogo } from "@/components/ui/custom-icons";

export function MockDashboard() {
  const { steps, currentStepIndex, completeStep, setUserRole, isCompleted, getElapsedTime } =
    useOnboardingStore();

  return (
    <div className="flex h-screen bg-[#0F172A]">
      {/* Sidebar */}
      <aside className="flex w-56 flex-col border-r border-[#1E293B]" style={{ background: "linear-gradient(180deg, #0F172A 0%, #131C31 100%)" }}>
        <div className="flex h-14 items-center gap-2.5 border-b border-[#1E293B] px-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
            <span className="text-[10px] font-bold text-white">A</span>
          </div>
          <span className="font-[family-name:var(--font-syne)] text-sm font-bold text-white">
            Acme Analytics
          </span>
        </div>
        <nav className="flex-1 space-y-0.5 p-3">
          <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} label="Tableau de bord" active />
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />} label="Analytique" />
          <SidebarItem icon={<Users className="h-4 w-4" />} label="Utilisateurs" />
          <SidebarItem icon={<TrendingUp className="h-4 w-4" />} label="Entonnoirs" />
          <SidebarItem icon={<Activity className="h-4 w-4" />} label="Insights IA" badge />
          <SidebarItem icon={<Bell className="h-4 w-4" />} label="Alertes" />
          <div className="my-3 h-px bg-[#1E293B]" />
          <SidebarItem icon={<Settings className="h-4 w-4" />} label="Parametres" />
        </nav>
        <div className="border-t border-[#1E293B] p-3">
          <div className="rounded-xl border border-[#6366F1]/10 p-3" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))" }}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#818CF8]">Plan Pro</p>
            <p className="mt-0.5 text-[11px] text-[#64748B]">14 jours restants</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="glass flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <h1 className="font-[family-name:var(--font-syne)] text-sm font-bold text-white">Tableau de bord</h1>
            <span className="rounded-full bg-[#1E293B] px-2.5 py-0.5 text-[10px] text-[#64748B]">Mode demo</span>
          </div>
          <span className="rounded-full bg-[#1E293B] px-3 py-1 text-[11px] text-[#64748B]">7 derniers jours</span>
        </div>

        <div className="p-6">
          {!isCompleted ? (
            <div className="glass glow-indigo mb-6 rounded-2xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-[family-name:var(--font-syne)] text-sm font-bold text-white">
                  Completez votre configuration
                </h2>
                <span className="text-xs font-semibold text-[#818CF8]">
                  {steps.filter((s) => s.completed).length}/{steps.length}
                </span>
              </div>
              <div className="mb-5 h-1 rounded-full bg-[#1E293B]">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${(steps.filter((s) => s.completed).length / steps.length) * 100}%`,
                    background: "linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)",
                  }}
                />
              </div>
              <div className="space-y-1.5">
                {steps.map((step, i) => (
                  <div
                    key={step.id}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all",
                      step.completed
                        ? "text-[#64748B]"
                        : i === currentStepIndex
                          ? "bg-[#1E293B]/60 text-white"
                          : "text-[#334155]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {step.completed ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34D399]/15">
                          <Check className="h-3 w-3 text-[#34D399]" />
                        </div>
                      ) : i === currentStepIndex ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#6366F1]">
                          <div className="h-2 w-2 rounded-full bg-[#6366F1] animate-pulse-soft" />
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-full border border-[#334155]" />
                      )}
                      <span className={cn("text-xs", step.completed && "line-through")}>{step.title}</span>
                    </div>
                    {i === currentStepIndex && !step.completed && (
                      <button
                        onClick={() => {
                          if (step.id === "role") setUserRole("founder");
                          completeStep(step.id);
                        }}
                        className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold text-white transition-all hover:opacity-90"
                        style={{ background: "linear-gradient(90deg, #6366F1, #8B5CF6)" }}
                      >
                        Configurer
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <CompletionCard elapsedTime={getElapsedTime()} />
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Utilisateurs actifs", "Evenements", "Taux de churn", "MRR"].map((label) => (
              <div key={label} className="glass rounded-xl p-5 transition-all hover:bg-[#1E293B]/50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">{label}</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-[#334155]">—</p>
              </div>
            ))}
          </div>

          <div className="glass mt-6 rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold text-white">Activite utilisateurs</h3>
              <span className="text-[11px] text-[#64748B]">Pas encore de donnees</span>
            </div>
            <div className="flex h-48 flex-col items-center justify-center">
              <BarChart3 className="mb-3 h-10 w-10 text-[#1E293B]" />
              <p className="text-sm text-[#334155]">Completez la configuration pour voir vos analytics</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active, badge }: { icon: React.ReactNode; label: string; active?: boolean; badge?: boolean }) {
  return (
    <div className={cn("flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors", active ? "bg-[#1E293B]/80 font-medium text-white" : "text-[#64748B] hover:bg-[#1E293B]/40 hover:text-[#94A3B8]")}>
      <div className="flex items-center gap-2.5">{icon}{label}</div>
      {badge && <span className="rounded-full bg-[#6366F1]/15 px-1.5 py-0.5 text-[8px] font-bold text-[#818CF8]">NEW</span>}
    </div>
  );
}

function CompletionCard({ elapsedTime }: { elapsedTime: number }) {
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <div className="glass glow-emerald mb-6 rounded-2xl p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#34D399]/10">
        <Check className="h-6 w-6 text-[#34D399]" />
      </div>
      <h2 className="mb-1 font-[family-name:var(--font-syne)] text-xl font-bold text-white">Onboarding termine !</h2>
      <p className="mb-6 text-sm text-[#94A3B8]">
        Termine en <strong className="text-white">{timeStr}</strong> — la moyenne sans IA est de <strong>45 minutes</strong>.
      </p>
      <div className="inline-flex items-center gap-6 rounded-xl bg-[#1E293B]/50 border border-[#334155]/50 px-6 py-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#34D399]">{timeStr}</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">Avec IA</p>
        </div>
        <div className="h-10 w-px bg-[#334155]" />
        <div className="text-center">
          <p className="text-2xl font-bold text-[#334155]">45 min</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">Sans IA</p>
        </div>
        <div className="h-10 w-px bg-[#334155]" />
        <div className="text-center">
          <p className="gradient-text text-2xl font-bold">5x</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#64748B]">Plus rapide</p>
        </div>
      </div>
    </div>
  );
}
