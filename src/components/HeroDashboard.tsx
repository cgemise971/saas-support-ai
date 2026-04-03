"use client";

import { motion } from "framer-motion";
import { IconChat } from "@/components/ui/custom-icons";

export function HeroDashboard() {
  return (
    <div className="relative mx-auto max-w-5xl mt-16">
      {/* Glow behind dashboard */}
      <div
        className="absolute -inset-20 -z-10 rounded-full"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.20) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* 3D perspective wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 3 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        <div
          className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(99,102,241,0.08)]"
          style={{
            background: "linear-gradient(135deg, rgba(25,37,64,0.6), rgba(15,23,42,0.8))",
            border: "1px solid rgba(148,163,184,0.10)",
            backdropFilter: "blur(16px)",
            transform: "rotateX(2deg)",
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#22C55E]/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="h-6 rounded-md bg-white/5 flex items-center px-3">
                <span className="text-[10px] text-[#475569]">app.acme-analytics.com/dashboard</span>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="flex" style={{ height: "380px" }}>
            {/* Sidebar */}
            <div className="w-48 shrink-0 border-r border-white/5 p-4 flex flex-col" style={{ background: "rgba(15,23,42,0.4)" }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-6 w-6 rounded-md" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }} />
                <span className="text-[11px] font-bold text-white/80">Acme Analytics</span>
              </div>
              {["Dashboard", "Analytique", "Utilisateurs", "Entonnoirs", "Alertes"].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-0.5 text-[11px] ${
                    i === 0
                      ? "bg-white/[0.06] text-white font-medium"
                      : "text-[#64748B]"
                  }`}
                >
                  <div className={`h-3 w-3 rounded ${i === 0 ? "bg-[#818CF8]/30" : "bg-white/5"}`} />
                  {item}
                </div>
              ))}
              <div className="mt-auto rounded-lg p-2.5 border border-[#6366F1]/15" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))" }}>
                <span className="text-[9px] font-bold text-[#818CF8] uppercase tracking-widest">Pro</span>
              </div>
            </div>

            {/* Main area */}
            <div className="flex-1 p-6 relative overflow-hidden">
              {/* Top metrics row */}
              <div className="grid grid-cols-4 gap-3 mb-5">
                {[
                  { label: "Utilisateurs actifs", value: "2,847", change: "+12.5%", color: "#818CF8" },
                  { label: "Evenements/jour", value: "48.2K", change: "+8.3%", color: "#C084FC" },
                  { label: "Taux retention", value: "94.2%", change: "+3.1%", color: "#34D399" },
                  { label: "MRR", value: "€32.4K", change: "+18.7%", color: "#67E8F9" },
                ].map((metric) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + Math.random() * 0.4 }}
                    className="rounded-xl border border-white/5 p-3"
                    style={{ background: "rgba(30,41,59,0.3)" }}
                  >
                    <p className="text-[8px] font-medium text-[#64748B] uppercase tracking-wider mb-1">{metric.label}</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-bold text-white">{metric.value}</span>
                      <span className="text-[9px] font-semibold" style={{ color: metric.color }}>{metric.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart area */}
              <div className="rounded-xl border border-white/5 p-4 mb-4" style={{ background: "rgba(30,41,59,0.2)" }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-semibold text-white/70">Activite utilisateurs</span>
                  <span className="text-[9px] text-[#64748B]">7 derniers jours</span>
                </div>
                {/* Animated bar chart */}
                <div className="flex items-end gap-1.5 h-24">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 1 + i * 0.1, ease: "easeOut" }}
                      className="flex-1 rounded-t-md"
                      style={{
                        background: `linear-gradient(180deg, ${i === 5 ? "#818CF8" : "rgba(99,102,241,0.4)"} 0%, rgba(99,102,241,0.1) 100%)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating AI chat widget */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute top-4 right-4 w-52 rounded-xl shadow-2xl"
                style={{
                  background: "rgba(15,23,42,0.85)",
                  border: "1px solid rgba(99,102,241,0.20)",
                  backdropFilter: "blur(12px)",
                  animation: "float-fast 8s ease-in-out infinite",
                }}
              >
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5">
                  <IconChat className="h-3.5 w-3.5" />
                  <span className="text-[9px] font-bold text-[#818CF8] uppercase tracking-widest">Assistant IA</span>
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#34D399] animate-pulse" />
                </div>
                <div className="p-3 space-y-2">
                  <div className="rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/15 px-2.5 py-1.5">
                    <p className="text-[9px] text-[#CBD5E1] leading-relaxed">Bienvenue ! Je vais vous guider pour configurer votre tableau de bord.</p>
                  </div>
                  <div className="rounded-lg bg-white/5 px-2.5 py-1.5">
                    <p className="text-[9px] text-[#94A3B8]">Quel est votre role ?</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — conversion rate */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute -top-6 -left-8 rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3"
        style={{
          background: "rgba(15,23,42,0.85)",
          border: "1px solid rgba(103,232,249,0.15)",
          backdropFilter: "blur(16px)",
          animation: "float-mid 10s ease-in-out infinite",
        }}
      >
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(6,182,212,0.05))" }}>
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="16 7 22 7 22 13" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-[9px] text-[#64748B] font-medium">Taux de conversion</p>
          <p className="text-lg font-bold text-white">+24.5%</p>
        </div>
      </motion.div>

      {/* Floating badge — churn reduction */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute -bottom-4 -right-6 rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3"
        style={{
          background: "rgba(15,23,42,0.85)",
          border: "1px solid rgba(52,211,153,0.15)",
          backdropFilter: "blur(16px)",
          animation: "float-slow 12s ease-in-out infinite",
        }}
      >
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(52,211,153,0.05))" }}>
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-[9px] text-[#64748B] font-medium">Churn reduit</p>
          <p className="text-lg font-bold text-white">-62%</p>
        </div>
      </motion.div>
    </div>
  );
}
