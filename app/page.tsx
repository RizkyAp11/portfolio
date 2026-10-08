"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "PORTFOLIO WEBSITE",
    category: "WEB / PERSONAL",
    description:
      "A personal digital portfolio designed and developed from scratch to turn my work, experiments and progress into one focused experience.",
    details:
      "Editorial interface built around strong typography, responsive layouts, subtle interaction and a deliberately minimal visual system.",
    year: "2026",
    status: "LIVE",
    liveUrl: "https://portfoliorizky.vercel.app",
    githubUrl: "https://github.com/RizkyAp11/portfolio",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
    role: "DESIGN / DEVELOPMENT",
  },
];

const navigation = [
  { id: "home", label: "01. HOME" },
  { id: "about", label: "02. ABOUT" },
  { id: "projects", label: "03. PROJECTS" },
  { id: "contact", label: "04. CONTACT" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      setCursorPosition({
        x: currentX,
        y: currentY,
      });

      animationFrame = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    animationFrame = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = Math.min(
        100,
        Math.max(0, (scrollTop / documentHeight) * 100),
      );

      setScrollProgress(progress);
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F2ED] selection:bg-[#C8FF00] selection:text-[#0A0A0A]">
      {/* SCROLL PROGRESS */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[110] h-px bg-[#C8FF00]"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* CUSTOM CURSOR */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full border border-[#C8FF00]/70 transition-opacity duration-200 md:block ${
          cursorVisible
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
        }}
      />

      {/* MAIN FRAME */}
      <div className="mx-3 my-3 border border-[#F3F2ED]/20 sm:mx-4 sm:my-4 md:mx-7 md:my-6">
        {/* HEADER */}
        <header className="border-b border-[#F3F2ED]/20 px-5 py-4 md:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={closeMenu}
              className="group font-mono text-sm font-bold transition-colors duration-300 hover:text-[#C8FF00] focus-visible:outline-none focus-visible:text-[#C8FF00]"
            >
              RIZKY
              <span className="text-[#C8FF00] transition-opacity duration-300 group-hover:opacity-70">
                /001
              </span>
            </a>

            <nav className="hidden gap-8 font-mono text-[10px] md:flex">
              {navigation.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`group relative transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#C8FF00] ${
                      isActive
                        ? "text-[#C8FF00]"
                        : "text-[#A6A6A6] hover:text-[#C8FF00]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#C8FF00] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 font-mono text-[9px] text-[#A6A6A6] md:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8FF00]/50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
              </span>
              ONLINE
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="font-mono text-[9px] text-[#A6A6A6] transition-all duration-300 hover:text-[#C8FF00] active:scale-95 focus-visible:outline-none focus-visible:text-[#C8FF00] md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "CLOSE ×" : "MENU +"}
            </button>
          </div>

          {/* MOBILE NAV */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
              menuOpen
                ? "max-h-[320px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav className="mt-4 border-t border-[#F3F2ED]/20 pt-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between border-b border-[#F3F2ED]/10 py-4 font-mono text-[10px] transition-all duration-300 focus-visible:outline-none focus-visible:text-[#C8FF00] ${
                      isActive
                        ? "text-[#C8FF00]"
                        : "text-[#A6A6A6] hover:px-1 hover:text-[#C8FF00]"
                    }`}
                  >
                    {item.label}

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                );
              })}

              <div className="flex items-center gap-2 py-4 font-mono text-[9px] text-[#A6A6A6]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8FF00]/50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
                </span>
                ONLINE
              </div>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section
          id="home"
          className="grid min-h-[680px] grid-cols-1 md:min-h-[700px] md:grid-cols-[1.05fr_1.2fr_0.75fr]"
        >
          {/* HERO LEFT */}
          <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-8">
            <div className="flex items-start justify-between">
              <p className="font-mono text-[10px] text-[#A6A6A6]">
                01 — INTRO
              </p>

              <span className="font-mono text-[8px] text-[#666]">
                2026.001
              </span>
            </div>

            <div className="mt-12 md:mt-16">
              <h1 className="text-[clamp(3.15rem,6vw,6.5rem)] font-bold leading-[0.78] tracking-[-0.065em]">
                RIZKY
              </h1>

              <h1 className="text-[clamp(3.15rem,6vw,6.5rem)] font-bold leading-[0.78] tracking-[-0.065em]">
                ADITYA
              </h1>

              <h1 className="text-[clamp(3.15rem,6vw,6.5rem)] font-bold leading-[0.78] tracking-[-0.065em]">
                PRATAMA
              </h1>
            </div>

            <div className="mt-10 max-w-[290px]">
              <p className="text-sm leading-5 text-[#A6A6A6]">
                WEB DEVELOPER
                <br />
                BUILDING DIGITAL
                <br />
                EXPERIENCES.
              </p>

              <p className="mt-4 font-mono text-[9px] leading-5 text-[#666]">
                WEB DEVELOPMENT · UI · DIGITAL PRODUCTS
              </p>

              <div className="mt-5 h-[2px] w-8 bg-[#C8FF00] transition-all duration-500 hover:w-14" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center border border-[#C8FF00] bg-[#C8FF00] px-5 py-3 font-mono text-[10px] font-bold text-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#C8FF00] active:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00]"
              >
                VIEW PROJECTS
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center border border-[#F3F2ED]/30 px-5 py-3 font-mono text-[10px] text-[#A6A6A6] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:text-[#C8FF00] active:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00]"
              >
                LET&apos;S TALK
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                  ↗
                </span>
              </a>
            </div>

            <div className="mt-12 font-mono text-[9px] text-[#A6A6A6] md:mt-16">
              <p>BASED IN INDONESIA</p>

              <p className="mt-6">
                NO TRACKERS. &nbsp; BUILT WITH CODE.
              </p>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="group relative min-h-[430px] overflow-hidden border-b border-[#F3F2ED]/20 sm:min-h-[520px] md:min-h-0 md:border-b-0 md:border-r">
            <img
              src="/hero.jpg"
              alt="Portrait of Rizky Aditya Pratama"
              className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/5" />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, #F3F2ED 4px)",
              }}
            />

            <div className="absolute left-[12%] top-[12%] h-[65%] w-[65%] border border-white/25 transition-all duration-500 group-hover:scale-[1.015] group-hover:border-[#C8FF00]/40" />

            <div className="absolute bottom-[16%] right-[12%] h-[30%] w-[34%] border border-white/20 transition-all duration-500 group-hover:-translate-x-1 group-hover:border-[#C8FF00]/40" />

            <div className="absolute left-[7%] top-[48%] h-8 w-8 transition-transform duration-500 group-hover:rotate-45">
              <div className="absolute left-1/2 top-0 h-8 w-[2px] -translate-x-1/2 bg-[#C8FF00]" />
              <div className="absolute left-0 top-1/2 h-[2px] w-8 -translate-y-1/2 bg-[#C8FF00]" />
            </div>

            <div className="absolute left-[48%] top-[51%] h-7 w-7 transition-transform duration-500 group-hover:-rotate-45">
              <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-[#C8FF00]" />
              <div className="absolute left-0 top-1/2 h-px w-7 -translate-y-1/2 bg-[#C8FF00]" />
            </div>

            <div className="absolute right-0 top-0 border-b border-l border-[#F3F2ED]/30 bg-[#0A0A0A]/90 px-3 py-2 font-mono text-[8px] leading-3 transition-colors duration-300 group-hover:border-[#C8FF00]/50">
              SYS/002
              <br />
              WEB_INTERFACE
              <br />
              v2.0
            </div>

            <div className="absolute bottom-0 left-0 border-r border-t border-[#F3F2ED]/30 bg-[#0A0A0A]/80 px-4 py-2 font-mono text-[8px] text-white/70 transition-colors duration-300 group-hover:text-[#C8FF00]">
              VISUAL_FIELD / 001
            </div>

            <div className="absolute bottom-[16%] right-[12%] bg-[#0A0A0A]/80 px-3 py-2 font-mono text-[8px] text-white/70 transition-transform duration-500 group-hover:-translate-y-1">
              RIZKY/002
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div>
              <p className="font-mono text-[9px] text-[#A6A6A6]">
                RIZKY/002
              </p>

              <div className="mt-5 h-px w-full bg-[#F3F2ED]/20" />
            </div>

            <div className="mt-12 max-w-[200px] md:mt-0">
              <p className="text-xl font-medium leading-6 transition-transform duration-500 hover:translate-x-1">
                IDEAS
                <br />
                DESERVE
                <br />
                TO BECOME
                <br />
                REAL
                <br />
                THINGS.
              </p>

              <p className="mt-5 font-mono text-[9px] leading-4 text-[#666]">
                DESIGN
                <br />
                CODE
                <br />
                ITERATE
              </p>
            </div>

            <div className="mt-16 md:mt-0">
              <div className="mb-5 h-8 w-28 bg-[repeating-linear-gradient(90deg,#F3F2ED_0px,#F3F2ED_1px,transparent_1px,transparent_3px)] opacity-70 transition-all duration-500 hover:w-32" />

              <p className="font-mono text-[9px] text-[#A6A6A6]">
                BUILD 001 / ONLINE
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="grid border-t border-[#F3F2ED]/20 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-10">
            <div className="flex items-start justify-between">
              <p className="font-mono text-[10px] text-[#A6A6A6]">
                02 — ABOUT
              </p>

              <span className="font-mono text-[8px] text-[#666]">
                PROFILE / 001
              </span>
            </div>

            <div className="mt-10 max-w-2xl md:mt-12">
              <h2 className="text-4xl font-bold tracking-tight transition-colors duration-300 hover:text-[#C8FF00] md:text-6xl">
                I&apos;M RIZKY.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#A6A6A6]">
                I build websites and digital interfaces with a focus on clear
                visual systems, useful interactions and details that make an
                experience feel intentional.
              </p>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#A6A6A6]">
                I enjoy taking an idea from a rough thought to something
                people can actually open, use and experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "WEB",
                  "UI",
                  "FRONTEND",
                  "INTERACTION",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[9px] text-[#A6A6A6] transition-all duration-300 hover:border-[#C8FF00]/50 hover:text-[#C8FF00]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 md:p-10">
            <div className="grid grid-cols-2 gap-y-10 font-mono text-[10px]">
              <div className="transition-transform duration-300 hover:translate-x-1">
                <p className="text-[#C8FF00]">AVAILABILITY</p>
                <p className="mt-2 text-[#A6A6A6]">PROJECTS</p>
              </div>

              <div className="transition-transform duration-300 hover:translate-x-1">
                <p className="text-[#C8FF00]">BASE</p>
                <p className="mt-2 text-[#A6A6A6]">INDONESIA</p>
              </div>

              <div className="transition-transform duration-300 hover:translate-x-1">
                <p className="text-[#C8FF00]">STATUS</p>
                <p className="mt-2 text-[#A6A6A6]">STUDENT / BUILDER</p>
              </div>

              <div className="transition-transform duration-300 hover:translate-x-1">
                <p className="text-[#C8FF00]">FOCUS</p>
                <p className="mt-2 leading-5 text-[#A6A6A6]">
                  WEB
                  <br />
                  UI
                  <br />
                  DEVELOPMENT
                </p>
              </div>
            </div>

            <div className="my-10 h-px bg-[#F3F2ED]/20" />

            <div>
              <p className="font-mono text-[10px] text-[#C8FF00]">
                CURRENTLY BUILDING
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#A6A6A6]">
                New web projects, sharper interfaces and experiments that
                push my frontend skills into real-world work.
              </p>
            </div>

            <div className="mt-10 border-t border-[#F3F2ED]/10 pt-5">
              <p className="font-mono text-[8px] leading-4 text-[#666]">
                PRINCIPLE / 001
                <br />
                MAKE IT USEFUL.
                <br />
                MAKE IT CLEAR.
                <br />
                MAKE IT YOURS.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-t border-[#F3F2ED]/20"
        >
          <div className="p-5 md:p-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] text-[#A6A6A6]">
                  03 — SELECTED WORK
                </p>

                <h2 className="mt-4 text-[2.5rem] font-bold leading-none tracking-[-0.04em] transition-colors duration-300 hover:text-[#C8FF00] md:mt-5 md:text-6xl md:tracking-tight">
                  PROJECTS.
                </h2>
              </div>

              <span className="hidden font-mono text-[9px] text-[#A6A6A6] md:block">
                001
              </span>
            </div>

            {projects.map((project) => (
              <article
                key={project.number}
                className="group mt-10 border-y border-[#F3F2ED]/20 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C8FF00]/60 md:mt-12"
              >
                <div className="grid md:grid-cols-[80px_1fr_145px]">
                  {/* PROJECT NUMBER */}
                  <div className="relative overflow-hidden border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#C8FF00] transition-all duration-500 group-hover:bg-[#C8FF00] group-hover:text-[#0A0A0A] md:border-b-0 md:border-r">
                    <span className="relative z-10">
                      {project.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-[#0A0A0A] transition-all duration-500 group-hover:w-full"
                    />
                  </div>

                  {/* PROJECT CONTENT */}
                  <div className="border-b border-[#F3F2ED]/20 p-5 transition-transform duration-500 group-hover:translate-x-1 md:border-b-0 md:border-r md:p-8">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="border border-[#C8FF00]/40 px-2 py-1 font-mono text-[8px] text-[#C8FF00] transition-all duration-300 group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#0A0A0A]">
                        {project.status}
                      </span>

                      <span className="font-mono text-[9px] text-[#A6A6A6]">
                        {project.category}
                      </span>

                      <span className="font-mono text-[9px] text-[#666]">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-2xl font-bold transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#C8FF00] md:text-3xl">
                        {project.title}
                      </h3>

                      <span className="font-mono text-[9px] text-[#666]">
                        {project.role}
                      </span>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-6 text-[#A6A6A6]">
                      {project.description}
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-[#666]">
                      {project.details}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[9px] text-[#A6A6A6] transition-all duration-300 group-hover:border-[#C8FF00]/30 group-hover:text-[#F3F2ED]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-[#F3F2ED]/10 pt-5">
                      <a
                        href="#contact"
                        className="group/project inline-flex items-center font-mono text-[9px] tracking-[0.12em] text-[#A6A6A6] transition-colors duration-300 hover:text-[#C8FF00] focus-visible:outline-none focus-visible:text-[#C8FF00]"
                      >
                        LOOKING FOR SOMETHING SIMILAR?
                        <span className="ml-2 transition-transform duration-300 group-hover/project:translate-x-1.5">
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* PROJECT ACTIONS */}
                  <div className="flex flex-col justify-center gap-2 p-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button border border-[#C8FF00] px-4 py-3 text-center font-mono text-[9px] text-[#C8FF00] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C8FF00] hover:text-[#0A0A0A] active:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00]"
                    >
                      VIEW LIVE
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover/button:translate-x-1.5">
                        ↗
                      </span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button border border-[#F3F2ED]/30 px-4 py-3 text-center font-mono text-[9px] text-[#A6A6A6] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:text-[#C8FF00] active:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00]"
                    >
                      SOURCE CODE
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover/button:translate-x-1.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {/* FUTURE WORK */}
            <div className="border-b border-[#F3F2ED]/20">
              <div className="flex items-center justify-between gap-6 py-6">
                <div>
                  <p className="font-mono text-[9px] text-[#C8FF00]">
                    MORE WORK
                  </p>

                  <p className="mt-2 max-w-md font-mono text-[10px] leading-5 text-[#666]">
                    MORE PROJECTS WILL APPEAR HERE AS THEY BECOME REAL,
                    TESTED AND WORTH SHOWING.
                  </p>
                </div>

                <span className="font-mono text-[9px] text-[#A6A6A6]">
                  002+
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-[#F3F2ED]/20"
        >
          <div className="grid md:grid-cols-2">
            <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-10">
              <p className="font-mono text-[10px] text-[#A6A6A6]">
                04 — CONTACT
              </p>

              <h2 className="mt-8 max-w-xl text-4xl font-bold leading-none tracking-tight transition-colors duration-300 hover:text-[#C8FF00] md:text-6xl">
                HAVE AN
                <br />
                IDEA?
                <br />
                LET&apos;S BUILD.
              </h2>

              <p className="mt-8 max-w-md text-sm leading-6 text-[#666]">
                Open to interesting websites, interfaces and digital projects.
                If there&apos;s something worth building, send it over.
              </p>
            </div>

            <div className="p-5 md:p-10">
              <div className="mb-8">
                <p className="font-mono text-[9px] text-[#C8FF00]">
                  DIRECT CHANNELS
                </p>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#A6A6A6]">
                  The fastest way to reach me is through email or Instagram.
                  GitHub is available for code and ongoing work.
                </p>
              </div>

              <div>
                <a
                  href="mailto:rizkyadityapratama421@gmail.com"
                  className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-all duration-300 hover:px-2 hover:text-[#C8FF00] focus-visible:outline-none focus-visible:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>EMAIL</span>

                  <span className="break-all text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                    rizkyadityapratama421@gmail.com ↗
                  </span>
                </a>

                <a
                  href="https://instagram.com/adit.ptama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-all duration-300 hover:px-2 hover:text-[#C8FF00] focus-visible:outline-none focus-visible:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>INSTAGRAM</span>

                  <span className="text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                    @adit.ptama ↗
                  </span>
                </a>

                <a
                  href="https://github.com/RizkyAp11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 border-y border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-all duration-300 hover:px-2 hover:text-[#C8FF00] focus-visible:outline-none focus-visible:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>GITHUB</span>

                  <span className="break-all text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                    github.com/RizkyAp11 ↗
                  </span>
                </a>
              </div>

              <div className="mt-8 flex items-center justify-between font-mono text-[8px] text-[#666]">
                <span>RESPONSE / WHEN AVAILABLE</span>
                <span className="text-[#C8FF00]">ONLINE</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#F3F2ED]/20 px-5 py-4 md:px-8">
          <div className="flex flex-col justify-between gap-2 font-mono text-[9px] text-[#A6A6A6] sm:flex-row">
            <span>DESIGN / CODE / EXPERIMENT</span>

            <span className="text-[#C8FF00]">
              RIZKY/001 — DIGITAL EDITORIAL
            </span>

            <span>2026 / INDONESIA</span>
          </div>
        </footer>
      </div>
    </main>
  );
}