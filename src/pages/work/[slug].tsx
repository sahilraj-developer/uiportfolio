import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projectMap = {
  "mygynae-service-design": {
    variant: "mobile",
    title: "MyGynae Service Design",
    category: "App",
    label: "Healthcare Experience",
    heroTone:
      "linear-gradient(135deg, rgba(244,114,182,0.96), rgba(168,85,247,0.92), rgba(59,130,246,0.85))",
    intro:
      "A patient-first healthcare experience designed to reduce friction in appointments, care guidance, and follow-up support for women’s wellness journeys.",
    summary:
      "The concept focused on making a sensitive healthcare experience feel more empathetic, more guided, and much easier to navigate during emotionally stressful moments.",
    challenge: [
      "Patients often feel overwhelmed and uncertain about where to begin.",
      "Trust, comfort, and clarity needed to be reinforced without making the journey feel clinical or overwhelming.",
      "Information had to be simplified into a clear care path, from consultation to follow-up guidance.",
    ],
    solution:
      "I designed a calmer, more reassuring flow using accessible hierarchy, soft visual language, and guided decision-making. The experience supports the patient through key moments with empathy and clarity.",
    impact: [
      "Simplified appointment and support access",
      "Improved care navigation confidence",
      "Created a more reassuring digital health experience",
      "Strengthened patient trust during critical moments",
    ],
    process: [
      { title: "Research", description: "Mapped patient pain points, emotional triggers, and decision stress across the health journey." },
      { title: "Journey design", description: "Structured major milestones into a supportive flow with clear next steps and practical guidance." },
      { title: "Interface design", description: "Built empathetic screens using accessible information hierarchy, soft interfaces, and calm microcopy." },
    ],
    metrics: ["UX strategy", "Service blueprint", "Wireframes", "Prototype"],
    stats: [
      { label: "Role", value: "Product Designer" },
      { label: "Tools", value: "Figma, Miro" },
      { label: "Timeline", value: "4 week concept" },
    ],
    detailCards: [
      { title: "User need", value: "Find care quickly and feel informed" },
      { title: "Experience goal", value: "Feel supported, not overwhelmed" },
      { title: "Outcome", value: "A calmer, more human-centered care journey" },
    ],
    screens: [
      { title: "Landing flow", note: "Calm onboarding and care navigation", tone: "bg-gradient-to-br from-pink-200 via-rose-100 to-violet-200" },
      { title: "Appointment flow", note: "Clear steps for support and booking", tone: "bg-gradient-to-br from-violet-200 via-purple-100 to-sky-200" },
      { title: "Health dashboard", note: "Progress, guidance, and next steps", tone: "bg-gradient-to-br from-sky-200 via-cyan-100 to-indigo-200" },
    ],
  },
  "ecommerce-website-redesign": {
    variant: "commerce",
    title: "E-commerce Website Redesign",
    category: "E-commerce website",
    label: "Retail Experience",
    heroTone:
      "linear-gradient(135deg, rgba(16,185,129,0.96), rgba(45,212,191,0.9), rgba(59,130,246,0.85))",
    intro:
      "A conversion-focused e-commerce experience designed to improve product discovery, trust, and the buying journey on both mobile and desktop.",
    summary:
      "This redesign focused on shortening the path from interest to purchase while improving product clarity, storytelling, and confidence at every step of the journey.",
    challenge: [
      "Customers needed clearer product context before making a purchase decision.",
      "The previous experience failed to create strong hierarchy and trust signals.",
      "The shopping flow needed to feel premium while remaining efficient across mobile and desktop screens.",
    ],
    solution:
      "I redesigned the storefront around improved content hierarchy, shopping confidence, and a smoother path from discovery to checkout. The result is a more polished retail journey with stronger product storytelling and lower friction.",
    impact: [
      "Improved product discovery and comparison flow",
      "Higher clarity around pricing, value, and trust",
      "A more premium storefront experience across breakpoints",
      "Reduced cognitive load in the checkout journey",
    ],
    process: [
      { title: "UX audit", description: "Reviewed the funnel to identify key drop-off points, weak hierarchy, and friction in the product journey." },
      { title: "Content hierarchy", description: "Rebuilt the homepage and category structure to improve navigation and product storytelling." },
      { title: "UI system", description: "Created a cleaner, more conversion-friendly interface with stronger whitespace, emphasis, and trust cues." },
    ],
    metrics: ["UX audit", "Homepage flow", "Product system", "Responsive UI"],
    stats: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Tools", value: "Figma, Adobe" },
      { label: "Timeline", value: "3 week concept" },
    ],
    detailCards: [
      { title: "Business goal", value: "Increase product confidence and conversion" },
      { title: "Design focus", value: "Streamlined browsing and stronger trust cues" },
      { title: "User value", value: "Faster shopping with a premium feeling" },
    ],
    screens: [
      { title: "Home page", note: "Priority categories, editorial merchandising, and hero storytelling", tone: "bg-gradient-to-br from-emerald-200 via-emerald-100 to-cyan-200" },
      { title: "Collection page", note: "Browse filters, product rhythm, and curated merchandising", tone: "bg-gradient-to-br from-teal-200 via-cyan-100 to-sky-200" },
      { title: "Checkout flow", note: "Reduced friction and clearer trust indicators", tone: "bg-gradient-to-br from-cyan-200 via-sky-100 to-indigo-200" },
    ],
  },
  "ai-dashboard-experience": {
    variant: "dashboard",
    title: "AI Dashboard Experience",
    category: "AI dashboard",
    label: "Decision Intelligence",
    heroTone:
      "linear-gradient(135deg, rgba(251,146,60,0.96), rgba(236,72,153,0.9), rgba(139,92,246,0.82))",
    intro:
      "An intelligent dashboard concept that turns complex insights into clear priorities for faster, smarter decision-making.",
    summary:
      "The goal was to design a premium analytics experience that reduces noise, strengthens trust in AI signals, and helps teams take action quickly.",
    challenge: [
      "AI outputs become noisy when displayed without strong hierarchy or context.",
      "Decision-makers need clear summaries and confidence signals, not just raw data.",
      "The product had to help operators act quickly while still feeling polished and credible.",
    ],
    solution:
      "I built a dashboard system centered on insight prioritization, actionable summaries, and data storytelling. This allows users to understand what matters most and what action should follow next.",
    impact: [
      "Clear priority-based insight delivery",
      "Faster operational decisions with lower cognitive load",
      "Improved understanding of AI-driven recommendations",
      "Higher confidence in dashboard-guided actions",
    ],
    process: [
      { title: "Insight mapping", description: "Organized AI outputs into user-driven decision moments and operational priorities." },
      { title: "Visual prioritisation", description: "Created a hierarchy for risk signals, recommendations, and context-rich metrics." },
      { title: "Interaction design", description: "Focused on fast review patterns, quick actions, and strong feedback for operators." },
    ],
    metrics: ["Dashboard UX", "AI framing", "Data storytelling", "Interaction design"],
    stats: [
      { label: "Role", value: "Product Designer" },
      { label: "Tools", value: "Figma, FigJam" },
      { label: "Timeline", value: "2 week concept" },
    ],
    detailCards: [
      { title: "User need", value: "Know what matters most in real time" },
      { title: "Design focus", value: "Prioritised insights and clear action paths" },
      { title: "Outcome", value: "A smarter, calmer decision support dashboard" },
    ],
    screens: [
      { title: "Overview", note: "Smart summary and key signals at a glance", tone: "bg-gradient-to-br from-orange-200 via-amber-100 to-rose-200" },
      { title: "Insights panel", note: "AI recommendations with confidence and context", tone: "bg-gradient-to-br from-fuchsia-200 via-pink-100 to-violet-200" },
      { title: "Operations view", note: "Actionable reports designed for real workflow decisions", tone: "bg-gradient-to-br from-violet-200 via-indigo-100 to-sky-200" },
    ],
  },
} as const;

export default function WorkDetailPage() {
  const router = useRouter();
  const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug;
  const project = slug ? projectMap[slug as keyof typeof projectMap] : undefined;

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <div className="max-w-lg rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-primary/80">Project not found</p>
          <h1 className="text-3xl font-semibold tracking-tight">This case study is unavailable.</h1>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
            <ArrowLeft className="h-4 w-4" />
            Go back home
          </Link>
        </div>
      </main>
    );
  }

  const renderMockup = () => {
    if (project.variant === "mobile") {
      return (
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#f7f3fb] p-4 shadow-[0_22px_60px_rgba(15,23,42,0.2)]">
          <div className="mb-4 flex items-center justify-between px-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">
            <span>MyGynae</span>
            <span>08:24</span>
          </div>
          <div className="grid gap-3 rounded-[26px] bg-white/80 p-3">
            <div className="rounded-2xl bg-gradient-to-r from-pink-300 via-violet-300 to-sky-300 p-4">
              <div className="mb-3 h-2.5 w-20 rounded-full bg-white/80" />
              <div className="h-2.5 w-full rounded-full bg-white/60" />
              <div className="mt-2 h-2.5 w-[80%] rounded-full bg-white/40" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-xl bg-slate-100" />
              <div className="h-16 rounded-xl bg-slate-100" />
              <div className="h-16 rounded-xl bg-slate-100" />
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-50 p-3">
              <div className="h-2.5 w-24 rounded-full bg-slate-300" />
              <div className="h-2.5 w-full rounded-full bg-slate-200" />
              <div className="h-2.5 w-[75%] rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      );
    }

    if (project.variant === "commerce") {
      return (
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#f5f3ef] p-5 shadow-[0_22px_60px_rgba(15,23,42,0.2)]">
          <div className="rounded-[24px] bg-white/90 p-4">
            <div className="mb-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-slate-500">
              <span>New arrivals</span>
              <span>Store</span>
            </div>
            <div className="rounded-[18px] bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-200 p-4">
              <div className="mb-3 h-2.5 w-20 rounded-full bg-slate-800/70" />
              <div className="h-2.5 w-full rounded-full bg-slate-800/40" />
              <div className="mt-2 h-2.5 w-[70%] rounded-full bg-slate-800/30" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-2xl bg-slate-100" />
              <div className="h-20 rounded-2xl bg-slate-100" />
              <div className="h-20 rounded-2xl bg-slate-100" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0f172a] p-5 shadow-[0_22px_60px_rgba(15,23,42,0.25)]">
        <div className="mb-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-slate-300">
          <span>Overview</span>
          <span>Live</span>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-orange-500/70 to-pink-500/60 p-3">
              <div className="h-8 rounded-xl bg-white/30" />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-violet-500/70 to-indigo-500/60 p-3">
              <div className="h-8 rounded-xl bg-white/30" />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/70 to-pink-500/60 p-3">
              <div className="h-8 rounded-xl bg-white/30" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2.5 w-20 rounded-full bg-white/80" />
            <div className="h-2.5 w-full rounded-full bg-white/40" />
            <div className="h-2.5 w-[75%] rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <header className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
          <div className="grid gap-8 p-6 md:p-10 xl:grid-cols-[1.1fr_0.9fr] xl:p-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">
                {project.category}
              </div>
              <h1 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl xl:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                {project.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.metrics.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10" style={{ background: project.heroTone }}>
              <div className="flex h-full min-h-[320px] flex-col justify-between p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-white/80" />
                    <span className="h-3 w-3 rounded-full bg-white/60" />
                    <span className="h-3 w-3 rounded-full bg-white/40" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">Case study</span>
                </div>
                <div className="space-y-5">
                  <div className="h-3 w-28 rounded-full bg-white/80" />
                  <div className="h-3 w-full rounded-full bg-white/55" />
                  <div className="h-3 w-[90%] rounded-full bg-white/35" />
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="h-20 rounded-2xl bg-white/15" />
                    <div className="h-20 rounded-2xl bg-white/10" />
                    <div className="h-20 rounded-2xl bg-white/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-[22px] border border-white/10 bg-white/[0.02] p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
              <p className="mt-3 text-lg font-medium tracking-tight text-foreground">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">Overview</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">The challenge</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{project.summary}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              {project.challenge.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">Solution</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{project.solution}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {project.detailCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-background/60 p-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{card.title}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] p-4 md:p-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary/80">Featured concept</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Full-size mockup layout</h2>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary">
              Explore more work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-background/60 p-4 md:p-6">
            {renderMockup()}
          </div>
        </section>

        <section className="mt-16 rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">Process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">How I approached the problem</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {project.process.map((step) => (
              <div key={step.title} className="rounded-[22px] border border-white/10 bg-background/60 p-5">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {step.title.charAt(0)}
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">Selected screens</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Design system in context</h2>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {project.screens.map((screen) => (
              <div key={screen.title} className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.02] p-4">
                <div className={`rounded-[20px] border border-black/5 p-4 ${screen.tone}`}>
                  <div className="rounded-[18px] border border-white/30 bg-white/20 p-4 backdrop-blur-sm">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-800/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-800/50" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-800/30" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-2.5 w-20 rounded-full bg-slate-800/80" />
                      <div className="h-2.5 w-full rounded-full bg-slate-800/40" />
                      <div className="h-2.5 w-[80%] rounded-full bg-slate-800/30" />
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div className="h-16 rounded-xl bg-white/60" />
                        <div className="h-16 rounded-xl bg-white/35" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-foreground">{screen.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{screen.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
