import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const serviceIcons = {
  Code2,
  Frame,
  SearchCheck,
  MonitorSmartphone,
  Eye,
};

const aboutStats = resumeData.stats;
const projects = resumeData.projects;
const services = resumeData.services.map((service) => ({
  ...service,
  icon: serviceIcons[service.icon as keyof typeof serviceIcons],
}));

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.26em] text-primary/90">
              Product designer • UX researcher
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-5xl tracking-tighter text-foreground md:text-6xl 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-5xl md:text-6xl 2xl:text-8xl">
                  {resumeData.displayName}.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-4 max-w-xl text-base leading-7 tracking-tight text-muted-foreground md:text-lg 2xl:text-xl"
              >
                {resumeData.tagline}
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row flex-wrap items-center gap-3 pt-6"
            >
              <Link href={`mailto:${resumeData.email}`} passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">UI/UX</span>
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">Research</span>
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">Design systems</span>
            </div>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>

          <div className="relative mt-14 w-full max-w-[760px] xl:mt-0">
            <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-primary/20 blur-[90px]" />
            <div className="absolute -right-10 bottom-16 h-32 w-32 rounded-full bg-secondary/25 blur-[100px]" />
            <div
              data-scroll
              data-scroll-speed="-.01"
              id={styles["canvas-container"]}
              className="relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_30%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(14,18,35,0.9))]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  </div>
                  <span>Creative portfolio</span>
                </div>

                <div className="relative mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Selected work</span>
                    <span>2026</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-28 rounded-full bg-white/80" />
                    <div className="h-3 w-full rounded-full bg-white/50" />
                    <div className="h-3 w-[82%] rounded-full bg-white/35" />
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-2xl bg-gradient-to-br from-primary/70 to-secondary/50" />
                    <div className="h-20 rounded-2xl bg-gradient-to-br from-emerald-400/60 to-cyan-400/50" />
                    <div className="h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500/60 to-orange-400/50" />
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Currently designing</p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">Human-centered digital products</p>
                  </div>
                  <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-primary">
                    Available for work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16 pb-2 max-w-4xl text-xl font-light leading-normal tracking-tight text-foreground md:text-2xl xl:text-3xl">
              {resumeData.about}
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Selected work across app, commerce, and AI.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I design digital products that balance clarity, conversion, and a premium user experience.
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Link href={project.href} className="block h-full transition-transform duration-300 hover:-translate-y-1">
                        <Card
                          id="tilt"
                          className={cn(
                            "h-full overflow-hidden border border-white/10 bg-white/[0.02] shadow-[0_18px_50px_rgba(15,23,42,0.18)]",
                            project.variant === "dashboard" && "border-primary/20 bg-[#111827]/80",
                          )}
                        >
                          <CardHeader className="p-0">
                            {project.variant === "mobile" && (
                              <div className="relative aspect-[4/3] overflow-hidden rounded-t-md">
                                <div className="absolute inset-0" style={{ background: project.theme }} />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_45%)]" />
                                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                                  {project.category}
                                </div>
                                <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/15 bg-slate-950/25 p-4 backdrop-blur-md">
                                  <div className="mb-3 flex items-center justify-between">
                                    <div className="flex gap-2">
                                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                    </div>
                                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">App</span>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="h-2 w-24 rounded-full bg-white/80" />
                                    <div className="h-2.5 w-full rounded-full bg-white/60" />
                                    <div className="h-2.5 w-4/5 rounded-full bg-white/40" />
                                    <div className="mt-3 flex gap-2">
                                      <div className="h-14 flex-1 rounded-xl bg-white/15" />
                                      <div className="h-14 flex-1 rounded-xl bg-white/10" />
                                      <div className="h-14 flex-1 rounded-xl bg-white/15" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {project.variant === "commerce" && (
                              <div className="relative aspect-[4/3] overflow-hidden rounded-t-md bg-[#f7f7f4]">
                                <div className="absolute inset-0" style={{ background: project.theme }} />
                                <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
                                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/85">Store</span>
                                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                                </div>
                                <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/15 bg-slate-950/20 p-4 backdrop-blur-md">
                                  <div className="mb-3 flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/70">New arrivals</span>
                                    <span className="rounded-full border border-white/20 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-white/80">
                                      24% off
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                    <div className="h-16 rounded-xl bg-white/15" />
                                    <div className="h-16 rounded-xl bg-white/20" />
                                    <div className="h-16 rounded-xl bg-white/15" />
                                  </div>
                                  <div className="mt-3 h-2 w-28 rounded-full bg-white/70" />
                                  <div className="mt-2 h-2 w-full rounded-full bg-white/40" />
                                </div>
                              </div>
                            )}

                            {project.variant === "dashboard" && (
                              <div className="relative aspect-[4/3] overflow-hidden rounded-t-md bg-[#0b1120]">
                                <div className="absolute inset-0" style={{ background: project.theme }} />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_50%)]" />
                                <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-full border border-white/15 bg-slate-950/30 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                                  <span>{project.category}</span>
                                  <span>Live</span>
                                </div>
                                <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/10 bg-slate-950/35 p-4 backdrop-blur-md">
                                  <div className="mb-3 grid grid-cols-3 gap-2">
                                    <div className="rounded-xl bg-white/15 p-2">
                                      <div className="h-8 rounded-lg bg-white/25" />
                                    </div>
                                    <div className="rounded-xl bg-white/10 p-2">
                                      <div className="h-8 rounded-lg bg-white/20" />
                                    </div>
                                    <div className="rounded-xl bg-white/15 p-2">
                                      <div className="h-8 rounded-lg bg-white/25" />
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="h-2 w-20 rounded-full bg-white/80" />
                                    <div className="h-2.5 w-full rounded-full bg-white/45" />
                                    <div className="h-2.5 w-5/6 rounded-full bg-white/30" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </CardHeader>
                          <CardContent className="bg-background/80 p-0 backdrop-blur-md">
                            <CardTitle className="flex flex-col gap-3 border-t border-white/5 p-4 text-left">
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary/80">
                                  {project.label}
                                </span>
                                <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-primary">
                                  {project.category}
                                </span>
                              </div>
                              <span className="text-lg font-medium tracking-tighter text-foreground">
                                {project.title}
                              </span>
                              <span className="text-sm leading-6 text-muted-foreground">
                                {project.description}
                              </span>
                              <div className="flex flex-wrap gap-2 pt-1">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/80">
                                {project.outcome}
                              </span>
                            </CardTitle>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href={`mailto:${resumeData.email}`} passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
