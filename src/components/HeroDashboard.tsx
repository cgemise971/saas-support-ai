"use client";

import { IconChat } from "@/components/ui/custom-icons";

export function HeroDashboard() {
  return (
    <div className="relative max-w-5xl mx-auto mt-20 group">
      {/* Glow blob behind the card */}
      <div
        className="absolute -inset-16 rounded-full -z-10 hero-glow transition-transform duration-700 group-hover:scale-110"
        aria-hidden="true"
      />

      {/* Main card */}
      <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl p-4">
        {/* Inner dark panel — 16:9 aspect ratio */}
        <div
          className="rounded-xl border border-white/5 overflow-hidden flex"
          style={{ aspectRatio: "16/9", background: "#000000" }}
        >
          {/* Sidebar skeleton */}
          <div className="w-44 shrink-0 border-r border-white/5 p-4 flex flex-col gap-4">
            <div className="h-4 w-24 bg-[#334155] rounded-full" />
            <div className="h-2 w-32 bg-white/5 rounded-full" />
            <div className="h-2 w-28 bg-white/5 rounded-full" />
            <div className="h-2 w-20 bg-white/5 rounded-full" />
            <div className="mt-auto h-8 w-full rounded-lg bg-[#6366F1]/20 border border-[#6366F1]/30" />
          </div>

          {/* Main area skeleton */}
          <div className="flex-1 p-8 relative overflow-hidden">
            {/* Top bar */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="h-6 w-48 bg-white/10 rounded-full mb-3" />
                <div className="h-3 w-64 bg-white/5 rounded-full" />
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#67E8F9]/20 border border-[#67E8F9]/30" />
                <div className="w-8 h-8 rounded-full bg-[#C084FC]/20 border border-[#C084FC]/30" />
              </div>
            </div>

            {/* Floating AI chat bubble */}
            <div
              className="absolute top-[22%] right-8 w-60 glass-card p-4 rounded-2xl shadow-xl border-[#818CF8]/20"
              style={{ animation: "float-slow 4s ease-in-out infinite" }}
            >
              <div className="flex gap-2 items-center mb-2">
                <IconChat className="h-4 w-4 shrink-0" />
                <span className="text-[10px] font-bold text-[#818CF8] tracking-widest uppercase">
                  AI Assistant
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded-full" />
                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1E293B] p-6 rounded-xl border border-white/5">
                <div className="h-2 w-12 bg-white/10 rounded-full mb-4" />
                <div className="h-8 w-20 bg-white/20 rounded-lg" />
              </div>
              <div className="bg-[#1E293B] p-6 rounded-xl border border-white/5">
                <div className="h-2 w-12 bg-white/10 rounded-full mb-4" />
                <div className="h-8 w-20 bg-white/20 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — top-left */}
      <div className="absolute -top-10 -left-10 glass-card px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#67E8F9]/20 border border-[#67E8F9]/30 flex items-center justify-center">
          {/* Trending up icon */}
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <polyline
              points="22 7 13.5 15.5 8.5 10.5 2 17"
              stroke="#67E8F9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="16 7 22 7 22 13"
              stroke="#67E8F9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-[10px] text-[#94A3B8] font-medium">Conversion Rate</div>
          <div className="text-xl font-bold text-white">+24.5%</div>
        </div>
      </div>
    </div>
  );
}
