"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Aurora base */}
      <div
        className="absolute inset-0 animate-aurora opacity-30"
        style={{
          background:
            "linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4, #6366F1, #C084FC)",
          backgroundSize: "400% 400%",
          filter: "blur(120px)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 -right-20 h-[400px] w-[400px] rounded-full animate-float-mid"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 left-1/3 h-[350px] w-[350px] rounded-full animate-float-fast"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
