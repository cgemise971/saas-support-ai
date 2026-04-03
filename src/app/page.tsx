import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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
  IconShield,
  IconTarget,
  IconLogo,
} from "@/components/ui/custom-icons";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F172A]">
      <AnimatedBackground />

      {/* Header */}
      <header className="glass sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <IconLogo className="h-8 w-8" />
            <span className="font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-white">
              Onboard AI
            </span>
          </div>
          <Link href="/demo">
            <button className="group flex items-center gap-2 rounded-full bg-[#6366F1] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#818CF8] hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]">
              Essayer la demo
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-24 text-center">
        <ScrollReveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#EF4444]/20 bg-[#EF4444]/5 px-4 py-2 text-sm text-[#FCA5A5]">
            <IconTarget className="h-4 w-4" />
            60% des nouveaux inscrits abandonnent en 7 jours
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[4.5rem]">
            Stoppez la perte
            <br />
            <span className="gradient-text">d&apos;utilisateurs</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#94A3B8]">
            Un assistant IA qui guide chaque nouvel utilisateur dans votre SaaS,
            adapte a son profil. Atteignez la valeur{" "}
            <strong className="text-[#CBD5E1]">5x plus vite</strong>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/demo">
              <button className="group flex items-center gap-2.5 rounded-full bg-[#6366F1] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(99,102,241,0.2)] transition-all hover:bg-[#818CF8] hover:shadow-[0_0_48px_rgba(99,102,241,0.3)]">
                Voir la demo interactive
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </Link>
            <Link href="/chat">
              <button className="flex items-center gap-2 rounded-full border border-[#334155] bg-[#1E293B]/50 px-8 py-3.5 text-sm font-medium text-[#CBD5E1] transition-all hover:border-[#475569] hover:bg-[#1E293B]">
                <IconChat className="h-4 w-4" />
                Tester le chatbot
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Problem */}
      <section className="relative z-10 border-t border-[#1E293B] py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 text-center font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.2em] text-[#EF4444]/70">
              Le probleme
            </p>
            <h2 className="mb-5 text-center font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Votre onboarding tue la croissance
            </h2>
            <p className="mx-auto mb-16 max-w-md text-center text-[#94A3B8]">
              La majorite des produits SaaS perdent leurs utilisateurs avant
              qu&apos;ils ne decouvrent la valeur reelle.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid gap-5 md:grid-cols-3">
            <StaggerItem>
              <ProblemCard
                stat="40–60%"
                label="abandonnent en semaine 1"
                description="Les utilisateurs s'inscrivent, se perdent dans l'interface, et ne reviennent jamais."
              />
            </StaggerItem>
            <StaggerItem>
              <ProblemCard
                stat="45 min"
                label="avant la premiere valeur"
                description="Trop d'etapes, pas assez de guidage. Ils abandonnent avant de voir les resultats."
              />
            </StaggerItem>
            <StaggerItem>
              <ProblemCard
                stat="0 €"
                label="de revenus perdus"
                description="Chaque utilisateur perdu est du CAC gaspille. Vous avez paye pour rien."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Solution */}
      <section className="relative z-10 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 text-center font-[family-name:var(--font-syne)] text-xs font-bold uppercase tracking-[0.2em] text-[#6366F1]">
              La solution
            </p>
            <h2 className="mb-5 text-center font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Onboarding propulse par l&apos;IA
            </h2>
            <p className="mx-auto mb-16 max-w-md text-center text-[#94A3B8]">
              Un assistant intelligent qui connait votre produit et amene chaque
              utilisateur a son moment &ldquo;aha&rdquo;.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <StaggerItem>
              <SolutionCard
                icon={<IconOnboarding className="h-6 w-6" />}
                title="Guidage personnalise"
                description="S'adapte au role et aux objectifs de chaque utilisateur. Pas de tour generique."
              />
            </StaggerItem>
            <StaggerItem>
              <SolutionCard
                icon={<IconChat className="h-6 w-6" />}
                title="Reponses en direct"
                description="Entraine sur votre doc. Reponses instantanees sans quitter l'app."
              />
            </StaggerItem>
            <StaggerItem>
              <SolutionCard
                icon={<IconSpeed className="h-6 w-6" />}
                title="5x plus rapide"
                description="Vos utilisateurs atteignent la valeur en minutes, pas en heures."
              />
            </StaggerItem>
            <StaggerItem>
              <SolutionCard
                icon={<IconChart className="h-6 w-6" />}
                title="Impact mesurable"
                description="Suivez le taux de completion, le time-to-value et les points d'abandon."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Before/After */}
      <section className="relative z-10 border-t border-[#1E293B] py-28">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <h2 className="mb-16 text-center font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Avant vs. Apres
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-2xl p-7">
                <div className="mb-6 flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/60" />
                  <h3 className="font-[family-name:var(--font-syne)] text-sm font-bold text-[#FCA5A5]">
                    Sans onboarding IA
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-[#94A3B8]">
                  {[
                    "Tours produit generiques que personne ne lit",
                    "45 min en moyenne avant la premiere valeur",
                    "60% de churn la premiere semaine",
                    "Tickets support d'utilisateurs perdus",
                    "Le meme parcours pour le CEO et le dev",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-xs text-[#EF4444]/50">&#x2717;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-7 glow-indigo">
                <div className="mb-6 flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
                  <h3 className="font-[family-name:var(--font-syne)] text-sm font-bold text-[#6EE7B7]">
                    Avec onboarding IA
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-[#CBD5E1]">
                  {[
                    "Guidage personnalise selon le role",
                    "5 min en moyenne avant la premiere valeur",
                    "2x plus d'activation",
                    "80% de tickets support en moins",
                    "Experience sur-mesure pour chaque utilisateur",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="glass glow-indigo rounded-3xl px-8 py-16 text-center">
              <IconShield className="mx-auto mb-5 h-10 w-10" />
              <h2 className="mb-4 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white">
                Envie de ca pour votre SaaS ?
              </h2>
              <p className="mx-auto mb-10 max-w-md text-[#94A3B8]">
                Je construis des systemes d&apos;onboarding intelligents pour les startups
                SaaS. Pret en production en 4-6 semaines.
              </p>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <button className="group inline-flex items-center gap-2.5 rounded-full bg-[#6366F1] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_32px_rgba(99,102,241,0.2)] transition-all hover:bg-[#818CF8] hover:shadow-[0_0_48px_rgba(99,102,241,0.3)]">
                  Reservez un audit gratuit de 30 min
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1E293B] py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-[#475569]">
          Concu par{" "}
          <a href="#" className="text-[#818CF8] hover:text-[#A5B4FC] transition-colors">
            Votre Nom
          </a>{" "}
          — Infrastructure IA pour startups SaaS
        </div>
      </footer>
    </div>
  );
}

function ProblemCard({
  stat,
  label,
  description,
}: {
  stat: string;
  label: string;
  description: string;
}) {
  return (
    <div className="glass rounded-2xl p-7 text-center transition-all duration-300 hover:bg-[#1E293B]/70">
      <p className="font-[family-name:var(--font-syne)] text-4xl font-extrabold tracking-tight text-white">
        {stat}
      </p>
      <p className="mt-1 text-sm font-medium text-[#CBD5E1]">{label}</p>
      <p className="mt-3 text-xs leading-relaxed text-[#94A3B8]">{description}</p>
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
    <div className="glass rounded-2xl p-6 transition-all duration-300 hover:bg-[#1E293B]/70">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 font-[family-name:var(--font-syne)] text-sm font-bold text-white">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-[#94A3B8]">{description}</p>
    </div>
  );
}
