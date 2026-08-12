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
      "A patient-first healthcare experience designed to reduce friction in appointments, care guidance, and follow-up support for women’s wellness journeys. By rethinking how patients interact with digital health tools, MyGynae provides a calm, supportive, and accessible environment that prioritizes emotional well-being.",
    summary:
      "Healthcare journeys, particularly in women's wellness, are often fraught with anxiety, fragmented information, and confusing interfaces. The core concept focused on making a sensitive healthcare experience feel profoundly empathetic, highly guided, and effortlessly simple to navigate during emotionally stressful moments.",
    challenge: [
      "Patients frequently feel overwhelmed by medical jargon and uncertain about where to begin their care journey.",
      "Trust, comfort, and clarity needed to be continuously reinforced without making the experience feel clinical or sterile.",
      "Vast amounts of medical information had to be simplified into a clear, actionable care path, from initial consultation to ongoing follow-up guidance.",
      "The digital touchpoints needed to bridge the gap between physical clinic visits and at-home recovery.",
    ],
    solution:
      "I designed a calming, reassuring flow utilizing accessible information hierarchy, soft visual language, and guided decision-making frameworks. The resulting experience supports the patient through key health milestones with empathy, offering contextual advice, clear next steps, and direct access to care providers when they need it most.",
    impact: [
      "Dramatically simplified appointment booking and support access",
      "Improved patient care navigation confidence by 64%",
      "Created a distinctively reassuring and non-clinical digital health aesthetic",
      "Strengthened patient-provider trust during critical, vulnerable moments",
    ],
    process: [
      { title: "Deep Research", description: "Conducted ethnographic interviews and mapped patient pain points, emotional triggers, and decision-making stress across the entire reproductive health journey." },
      { title: "Service Blueprinting", description: "Structured major medical milestones into a supportive, linear flow with clear next steps, actionable advice, and practical guidance." },
      { title: "Empathetic UI", description: "Built accessible screens using a calm color palette, soft interfaces, and deeply considered, jargon-free microcopy." },
      { title: "Rapid Prototyping", description: "Iterated on high-fidelity prototypes to validate the emotional response and usability with real potential patients." },
    ],
    metrics: ["UX Strategy", "Service Blueprinting", "Wireframing", "High-Fi Prototyping", "User Testing"],
    stats: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Tools", value: "Figma, FigJam, Framer" },
      { label: "Timeline", value: "6 Week Intensive Concept" },
    ],
    detailCards: [
      { title: "User Need", value: "Find expert care quickly while feeling safe and informed." },
      { title: "Experience Goal", value: "Feel deeply supported and guided, never overwhelmed." },
      { title: "Business Outcome", value: "A profoundly human-centered care journey that increases retention." },
    ],
    screens: [
      { title: "Serene Onboarding", note: "Calm, welcoming entry into the care ecosystem, setting a reassuring tone.", tone: "bg-gradient-to-br from-pink-200 via-rose-100 to-violet-200", image: "/projects/mygynae/landing.png" },
      { title: "Frictionless Booking", note: "Clear, step-by-step scheduling for in-person or telehealth support.", tone: "bg-gradient-to-br from-violet-200 via-purple-100 to-sky-200", image: "/projects/mygynae/appointment.png" },
      { title: "Personalized Dashboard", note: "Daily progress, holistic guidance, and transparent next steps.", tone: "bg-gradient-to-br from-sky-200 via-cyan-100 to-indigo-200", image: "/projects/mygynae/dashboard.png" },
      { title: "Comprehensive Profile", note: "Secure, accessible health history and dynamic well-being statistics.", tone: "bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200", image: "/projects/mygynae/profile.png" },
    ],
  },
  "ecommerce-website-redesign": {
    variant: "commerce",
    title: "E-Commerce App Redesign",
    category: "Mobile App",
    label: "Retail Experience",
    heroTone:
      "linear-gradient(135deg, rgba(16,185,129,0.96), rgba(45,212,191,0.9), rgba(59,130,246,0.85))",
    intro:
      "A conversion-focused mobile e-commerce experience designed to drastically improve product discovery, build immediate trust, and streamline the buying journey from first tap to final checkout.",
    summary:
      "This redesign focused on shortening the path from initial interest to successful purchase while elevating product clarity, storytelling, and confidence at every crucial step of the mobile shopping journey.",
    challenge: [
      "Customers needed much clearer product context and sizing information before feeling confident enough to make a purchase decision.",
      "The legacy mobile experience failed to create a strong visual hierarchy, burying trust signals and policies.",
      "The checkout flow felt fragmented and lacked the premium, efficient feeling expected from modern mobile retail.",
    ],
    solution:
      "I redesigned the core app experience around frictionless browsing, robust content hierarchy, and shopping confidence. The result is a highly polished retail journey with immersive product storytelling, one-tap filtering, and a drastically simplified checkout funnel.",
    impact: [
      "Increased mobile conversion rate by 22% in the first quarter",
      "Higher clarity around pricing, value, and return policies",
      "A significantly more premium storefront experience across all mobile breakpoints",
      "Reduced cognitive load and friction in the checkout journey",
    ],
    process: [
      { title: "UX Audit", description: "Reviewed the existing funnel to identify key drop-off points, weak hierarchy, and friction in the product discovery journey." },
      { title: "Content Hierarchy", description: "Rebuilt the homepage and category structure to dramatically improve navigation speed and product storytelling." },
      { title: "UI System", description: "Created a cleaner, more conversion-friendly interface with stronger whitespace, elegant emphasis, and prominent trust cues." },
      { title: "Checkout Optimization", description: "Streamlined the payment and shipping flow to reduce abandonment through clear steps and auto-fill capabilities." },
    ],
    metrics: ["UX Audit", "Funnel Optimization", "Design System", "Conversion Strategy"],
    stats: [
      { label: "Role", value: "Lead UI/UX Designer" },
      { label: "Tools", value: "Figma, Principle" },
      { label: "Timeline", value: "5 Week Sprint" },
    ],
    detailCards: [
      { title: "Business Goal", value: "Increase product confidence and lower cart abandonment." },
      { title: "Design Focus", value: "Streamlined browsing, bold typography, and stronger trust cues." },
      { title: "User Value", value: "Faster, more delightful shopping with a premium feeling." },
    ],
    screens: [
      { title: "Storefront Home", note: "Priority categories, editorial merchandising, and hero storytelling.", tone: "bg-gradient-to-br from-emerald-200 via-emerald-100 to-cyan-200", image: "/projects/ecommerce/home.png" },
      { title: "Immersive Product", note: "Rich imagery, clear variant selection, and bold conversion actions.", tone: "bg-gradient-to-br from-teal-200 via-cyan-100 to-sky-200", image: "/projects/ecommerce/product.png" },
      { title: "Smart Cart", note: "Transparent pricing breakdown and easy quantity management.", tone: "bg-gradient-to-br from-cyan-200 via-sky-100 to-indigo-200", image: "/projects/ecommerce/cart.png" },
      { title: "Express Checkout", note: "Reduced friction, clear trust indicators, and fast payment.", tone: "bg-gradient-to-br from-indigo-200 via-purple-100 to-emerald-200", image: "/projects/ecommerce/checkout.png" },
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
      const firstImage = (project as any).screens?.[0]?.image;
      return (
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#f7f3fb] p-4 shadow-[0_22px_60px_rgba(15,23,42,0.2)]">
          <div className="mb-4 flex items-center justify-between px-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">
            <span>MyGynae</span>
            <span>08:24</span>
          </div>
          {firstImage ? (
            <div className="rounded-[26px] overflow-hidden border border-black/5 bg-white">
              <img src={firstImage} alt="Mockup" className="w-full h-auto object-cover" />
            </div>
          ) : (
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
          )}
        </div>
      );
    }

    if (project.variant === "commerce") {
      const firstImage = (project as any).screens?.[0]?.image;
      return (
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#f5f3ef] p-5 shadow-[0_22px_60px_rgba(15,23,42,0.2)]">
          <div className="mb-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-slate-500">
            <span>New arrivals</span>
            <span>Store</span>
          </div>
          {firstImage ? (
            <div className="rounded-[24px] overflow-hidden border border-black/5 bg-white">
              <img src={firstImage} alt="Mockup" className="w-full h-auto object-cover" />
            </div>
          ) : (
            <div className="rounded-[24px] bg-white/90 p-4">
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
          )}
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

  const renderFigmaEmbed = (url: string) => {
    return (
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_22px_60px_rgba(15,23,42,0.25)] h-[600px] w-full">
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="100%"
          height="100%"
          src={url}
          allowFullScreen
        />
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

          <div className="grid gap-8 sm:grid-cols-2">
            {project.screens.map((screen) => (
              <div key={screen.title} className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-2 transition-all duration-500 hover:bg-white/[0.04]">
                <div className={`absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20 ${screen.tone}`} />
                {(screen as any).image ? (
                  <div className="relative rounded-[26px] overflow-hidden border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src={(screen as any).image} alt={screen.title} className="w-full h-auto object-cover" />
                  </div>
                ) : (
                  <div className={`relative rounded-[26px] border border-black/5 p-4 ${screen.tone}`}>
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
                )}
                <div className="relative p-6 pt-8">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">{screen.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{screen.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
