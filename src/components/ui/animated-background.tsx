"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Mesh gradient — radial glows centered/top-right/bottom-left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 50% 50%, rgba(129,140,248,0.12) 0%, transparent 55%)," +
            "radial-gradient(at 80% 15%, rgba(192,132,252,0.09) 0%, transparent 45%)," +
            "radial-gradient(at 15% 85%, rgba(103,232,249,0.09) 0%, transparent 45%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 -right-20 h-[400px] w-[400px] rounded-full animate-float-mid"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 left-1/3 h-[350px] w-[350px] rounded-full animate-float-fast"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Hero glow — top-right corner accent */}
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px]"
        style={{
          background: "linear-gradient(135deg, #818CF8, #C084FC, #67E8F9)",
        }}
      />

      {/* Bottom-left corner accent */}
      <div
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px]"
        style={{
          background: "linear-gradient(135deg, #67E8F9, #818CF8)",
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(222,229,255,0.025) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(222,229,255,0.025) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
