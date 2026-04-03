import Link from "next/link";
import { Check } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/animated-background";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import {
  IconOnboarding,
  IconSpeed,
  IconChart,
  IconChat,
  IconTarget,
  IconLogo,
} from "@/components/ui/custom-icons";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { HeroDashboard } from "@/components/HeroDashboard";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F172A] overflow-x-hidden">
      <AnimatedBackground />

      {/* ── Navigation ──────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <IconLogo className="h-8 w-8" />
              <span className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-tighter text-white">
                Onboard AI
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {(
                [
                  ["Fonctionnalités", "#features"],
                  ["Solutions", "#solution"],
                  ["Tarifs", "#cta"],
                  ["Docs", "#"],
                ] as const
              ).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="font-[family-name:var(--font-geist-sans)] text-sm tracking-tight text-[#94A3B8] hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="font-[family-name:var(--font-geist-sans)] text-sm px-4 py-2 text-[#94A3B8] hover:text-white transition-colors">
              Se connecter
            </button>
            <Link href="/demo">
              <button className="font-[family-name:var(--font-geist-sans)] text-sm px-5 py-2 bg-gradient-to-r from-[#818CF8] to-[#C084FC] text-white font-bold rounded-lg hover:scale-[1.02] transition-transform">
                Commencer
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-40">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FCA5A5] animate-pulse" />
              <span className="text-[#FCA5A5] text-xs font-semibold tracking-wider uppercase">
                60% des nouveaux inscrits abandonnent en 7 jours
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-[family-name:var(--font-syne)] text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-tight">
              Stoppez la perte <br />
              d&apos;utilisateurs
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#94A3B8] mb-10">
              Un assistant IA qui guide chaque nouvel utilisateur dans votre
              SaaS, adapté à son profil. Atteignez la valeur{" "}
              <strong className="text-[#CBD5E1]">5x plus vite</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
              <Link href="/demo">
                <button className="px-8 py-4 bg-gradient-to-r from-[#818CF8] via-[#C084FC] to-[#67E8F9] text-white font-bold rounded-xl text-lg shadow-[0_0_40px_rgba(129,140,248,0.3)] hover:scale-105 transition-all duration-300">
                  Voir la démo interactive
                </button>
              </Link>
              <Link href="/chat">
                <button className="flex items-center gap-2 px-8 py-4 bg-[#1E293B]/50 border border-[#334155]/50 backdrop-blur-md rounded-xl text-lg font-medium text-[#CBD5E1] hover:bg-[#1E293B] transition-colors">
                  <IconChat className="h-5 w-5" />
                  Tester le chatbot
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <HeroDashboard />
          </ScrollReveal>
        </section>

        {/* ── Problem Section ──────────────────────────────────────── */}
        <section id="features" className="max-w-7xl mx-auto px-6 mb-40 relative z-10 border-t border-[#1E293B] pt-28">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="mb-3 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]/70">
                Le problème
              </p>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold mb-4">
                Votre onboarding tue la croissance
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
                Chaque minute de friction est un utilisateur perdu. La réalité
                de la rétention SaaS est brutale.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="glass-card p-10 rounded-2xl group transition-all duration-500 hover:border-[#EF4444]/40 text-center">
                <div className="font-[family-name:var(--font-syne)] text-5xl font-extrabold mb-1 text-[#FCA5A5]">
                  <AnimatedCounter value={60} suffix="%" duration={2} className="font-[family-name:var(--font-syne)] text-5xl font-extrabold text-[#FCA5A5]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#F1F5F9]">Churn Semaine 1</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">Le pourcentage moyen d&apos;utilisateurs qui ne reviennent jamais apres leur premiere session.</p>
                {/* Mini bar visualization */}
                <div className="mt-5 flex gap-1 justify-center">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={`h-8 w-2 rounded-full transition-all duration-500 ${i < 6 ? "bg-[#EF4444]/40" : "bg-white/5"}`} style={{ height: `${20 + Math.random() * 20}px` }} />
                  ))}
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-10 rounded-2xl group transition-all duration-500 hover:border-[#6366F1]/40 text-center">
                <div className="font-[family-name:var(--font-syne)] text-5xl font-extrabold mb-1 text-[#818CF8]">
                  <AnimatedCounter value={45} suffix=" min" duration={1.8} className="font-[family-name:var(--font-syne)] text-5xl font-extrabold text-[#818CF8]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#F1F5F9]">Temps de Valeur</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">C&apos;est trop long. Si un utilisateur n&apos;atteint pas l&apos;Aha Moment en 5 min, il s&apos;en va.</p>
                {/* Circular progress */}
                <div className="mt-5 flex justify-center">
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                    <circle cx="30" cy="30" r="24" fill="none" stroke="#6366F1" strokeWidth="4" strokeLinecap="round"
                      strokeDasharray="150.8" strokeDashoffset="25" opacity="0.5"
                      style={{ transform: "rotate(-90deg)", transformOrigin: "center" }} />
                    <text x="30" y="34" textAnchor="middle" fill="#818CF8" fontSize="12" fontWeight="bold">9x</text>
                  </svg>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-10 rounded-2xl group transition-all duration-500 hover:border-[#06B6D4]/40 text-center">
                <div className="font-[family-name:var(--font-syne)] text-5xl font-extrabold mb-1 text-[#67E8F9]">
                  <AnimatedCounter value={0} prefix="" suffix=" €" duration={0.5} className="font-[family-name:var(--font-syne)] text-5xl font-extrabold text-[#67E8F9]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#F1F5F9]">Revenus perdus</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">Chaque inscription ratee est un MRR fantome qui ne se concretisera jamais.</p>
                {/* Declining chart */}
                <div className="mt-5 flex items-end gap-1 justify-center h-10">
                  {[80, 65, 50, 38, 28, 18, 10, 5].map((h, i) => (
                    <div key={i} className="w-2 rounded-full bg-[#06B6D4]/30" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* ── Solution Section ─────────────────────────────────────── */}
        <section id="solution" className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <p className="mb-3 font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
                  La solution
                </p>
                <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold mb-4">
                  Onboarding propulsé par l&apos;IA
                </h2>
                <p className="text-[#94A3B8] text-lg">
                  Ne les laissez plus deviner. Guidez-les intelligemment avec
                  une couche d&apos;assistance prédictive.
                </p>
              </div>
              <div className="h-1 flex-1 bg-[#1E293B] mx-8 mb-4 rounded-full relative hidden md:block">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#818CF8] to-[#C084FC] rounded-full" />
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem>
              <SolutionCard
                icon={<IconOnboarding className="h-7 w-7" />}
                borderColor="border-l-[#818CF8]"
                title="Guidage personnalisé"
                description="L'IA analyse le profil de l'utilisateur pour adapter le parcours en temps réel."
              />
            </StaggerItem>
            <StaggerItem>
              <SolutionCard
                icon={<IconChat className="h-7 w-7" />}
                borderColor="border-l-[#C084FC]"
                title="Réponses en direct"
                description="Un chatbot contextuel qui connaît votre interface et répond aux questions techniques."
              />
            </StaggerItem>
            <StaggerItem>
              <SolutionCard
                icon={<IconSpeed className="h-7 w-7" />}
                borderColor="border-l-[#67E8F9]"
                title="5x plus rapide"
                description="Accélérez la courbe d'apprentissage en supprimant les didacticiels statiques ennuyeux."
              />
            </StaggerItem>
            <StaggerItem>
              <SolutionCard
                icon={<IconChart className="h-7 w-7" />}
                borderColor="border-l-[#F1F5F9]"
                title="Impact mesurable"
                description="Visualisez exactement où vos utilisateurs bloquent et comment l'IA les débloque."
              />
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* ── Before / After ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10 border-t border-[#1E293B] pt-28">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold mb-16 text-center">
              La différence est immédiate
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column — comparison cards */}
            <div className="order-2 md:order-1">
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  {/* Without */}
                  <div className="p-6 rounded-2xl bg-[#0F172A] border border-[#EF4444]/10 flex items-start gap-4 opacity-70">
                    <span className="mt-0.5 text-[#FCA5A5] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <h5 className="font-bold text-[#FCA5A5] mb-1">
                        Sans Onboard AI
                      </h5>
                      <p className="text-sm text-[#64748B] italic">
                        &ldquo;Je ne comprends pas comment créer mon premier
                        projet... Je verrai ça plus tard.&rdquo;
                      </p>
                      <div className="mt-4">
                        <div className="h-1.5 w-full bg-[#1E293B] rounded-full overflow-hidden">
                          <div className="bg-[#EF4444] w-1/4 h-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* With */}
                  <div className="p-8 rounded-2xl bg-[#0F172A] border border-[#6366F1]/20 flex items-start gap-4 shadow-2xl shadow-[#6366F1]/10 scale-105 origin-left">
                    <span className="mt-0.5 text-[#818CF8] shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h5 className="font-bold text-[#818CF8] mb-1">
                        Avec Onboard AI
                      </h5>
                      <p className="text-sm text-[#F1F5F9] italic">
                        &ldquo;L&apos;assistant m&apos;a montré exactement où
                        cliquer. Projet créé en 30 secondes&nbsp;!&rdquo;
                      </p>
                      <div className="mt-4">
                        <div className="h-1.5 w-full bg-[#1E293B] rounded-full overflow-hidden">
                          <div className="bg-[#818CF8] w-full h-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column — description + checklist */}
            <div className="order-1 md:order-2">
              <ScrollReveal delay={0.2}>
                <p className="text-[#94A3B8] mb-8 text-lg">
                  Ne laissez plus vos utilisateurs dans le noir. Transformez la
                  confusion en clarté avec une assistance IA native qui connaît
                  votre produit par cœur.
                </p>
                <ul className="space-y-4">
                  {[
                    "Réduction du support client de 40%",
                    "Activation utilisateur multipliée par 2.5",
                    "Intégration en moins de 15 minutes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-[#818CF8]" />
                      <span className="text-[#F1F5F9]">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── CTA Section ──────────────────────────────────────────── */}
        <section id="cta" className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
          <ScrollReveal>
            <div className="relative glass-card p-12 md:p-20 rounded-[2rem] text-center overflow-hidden border border-[#6366F1]/20">
              {/* Background decoration */}
              <div
                className="absolute -top-1/2 -left-1/2 w-full h-full blur-[120px] opacity-20"
                style={{ background: "#818CF8" }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-1/2 -right-1/2 w-full h-full blur-[120px] opacity-20"
                style={{ background: "#C084FC" }}
                aria-hidden="true"
              />

              <div className="relative">
                <IconTarget className="mx-auto h-10 w-10 mb-6" />
                <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold mb-8">
                  Envie de ça pour votre SaaS&nbsp;?
                </h2>
                <p className="text-[#94A3B8] text-lg max-w-xl mx-auto mb-12">
                  Rejoignez les 200+ entreprises qui ont automatisé leur succès
                  avec Onboard AI.
                </p>
                <Link href="/demo">
                  <button className="px-12 py-5 bg-gradient-to-r from-[#818CF8] via-[#C084FC] to-[#67E8F9] text-white font-bold rounded-2xl text-xl shadow-[0_0_50px_rgba(129,140,248,0.4)] hover:scale-105 transition-all">
                    Commencer l&apos;essai gratuit
                  </button>
                </Link>
                <p className="mt-8 text-sm text-[#475569]">
                  Pas de carte de crédit requise. Installation en 1 ligne de code.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="w-full py-12 bg-[#0F172A] border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <IconLogo className="h-6 w-6" />
              <span className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-tighter text-white">
                Onboard AI
              </span>
            </div>
            <p className="font-[family-name:var(--font-geist-sans)] text-xs uppercase tracking-[0.05em] text-[#475569]">
              © 2024 Onboard AI. Engineering the future of autonomy.
            </p>
          </div>
          <div className="flex gap-8">
            {(
              [
                ["Privacy", "#"],
                ["Terms", "#"],
                ["Twitter", "#"],
                ["GitHub", "#"],
              ] as const
            ).map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="font-[family-name:var(--font-geist-sans)] text-xs uppercase tracking-[0.05em] text-[#475569] hover:text-[#67E8F9] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────────── */

function SolutionCard({
  icon,
  borderColor,
  title,
  description,
}: {
  icon: React.ReactNode;
  borderColor: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={`glass-card p-8 rounded-2xl border-l-4 ${borderColor} hover:bg-[#1E293B]/60 transition-all cursor-default`}
    >
      <div className="mb-6">{icon}</div>
      <h4 className="font-[family-name:var(--font-syne)] text-lg font-bold mb-3 text-[#F1F5F9]">
        {title}
      </h4>
      <p className="text-sm text-[#94A3B8] leading-relaxed">{description}</p>
    </div>
  );
}
