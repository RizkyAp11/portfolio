"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "PORTFOLIO WEBSITE",
    description:
      "A personal portfolio website built from scratch to document my work, experiments and progress as a developer.",
    year: "2026",
    status: "LIVE",
    liveUrl: "https://portfoliorizky.vercel.app",
    githubUrl: "https://github.com/RizkyAp11/portfolio",
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
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

  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */
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

  /* =========================================================
     SMOOTH DESKTOP CURSOR
  ========================================================= */
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

  /* =========================================================
     SCROLL PROGRESS
  ========================================================= */
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
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F2ED]">
      {/* =====================================================
          SCROLL PROGRESS
      ===================================================== */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[110] h-px bg-[#C8FF00] transition-[width] duration-100"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* =====================================================
          SUBTLE CURSOR
      ===================================================== */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full border border-[#C8FF00]/70 transition-opacity duration-200 md:block ${
          cursorVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
        }}
      />

      <div className="mx-4 my-4 border border-[#F3F2ED]/20 md:mx-7 md:my-6">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="border-b border-[#F3F2ED]/20 px-5 py-4 md:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={closeMenu}
              className="group font-mono text-sm font-bold transition-colors duration-300 hover:text-[#C8FF00]"
            >
              RIZKY
              <span className="text-[#C8FF00] transition-opacity duration-300 group-hover:opacity-70">
                /001
              </span>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden gap-8 font-mono text-[10px] md:flex">
              {navigation.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`group relative transition-colors duration-300 ${
                      isActive
                        ? "text-[#C8FF00]"
                        : "text-[#A6A6A6] hover:text-[#C8FF00]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#C8FF00] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* DESKTOP STATUS */}
            <div className="hidden items-center gap-2 font-mono text-[9px] text-[#A6A6A6] md:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8FF00]/50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
              </span>
              ONLINE
            </div>

            {/* MOBILE MENU */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="font-mono text-[9px] text-[#A6A6A6] transition-all duration-300 hover:text-[#C8FF00] active:scale-95 md:hidden"
              aria-label="Toggle menu"
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
                    className={`group flex items-center justify-between border-b border-[#F3F2ED]/10 py-4 font-mono text-[10px] transition-all duration-300 ${
                      isActive
                        ? "text-[#C8FF00]"
                        : "text-[#A6A6A6] hover:px-1 hover:text-[#C8FF00]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`transition-transform duration-300 group-hover:translate-x-1 ${
                        isActive ? "text-[#C8FF00]" : ""
                      }`}
                    >
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

        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          id="home"
          className="grid min-h-[620px] grid-cols-1 md:min-h-[680px] md:grid-cols-[1.05fr_1.2fr_0.75fr]"
        >
          {/* LEFT */}
          <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-8">
            <p className="mb-10 font-mono text-[10px] text-[#A6A6A6] md:mb-16">
              01 — INTRO
            </p>

            <div>
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

            <div className="mt-8 max-w-[260px] md:mt-10">
              <p className="text-sm leading-5 text-[#A6A6A6]">
                STUDENT DEVELOPER
                <br />
                BUILDING FOR
                <br />
                THE WEB.
              </p>

              <div className="mt-5 h-[2px] w-8 bg-[#C8FF00] transition-all duration-500 hover:w-12" />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center border border-[#C8FF00] bg-[#C8FF00] px-5 py-3 font-mono text-[10px] font-bold text-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#C8FF00] active:translate-y-0"
              >
                VIEW PROJECTS
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>

              <a
                href="https://github.com/RizkyAp11"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center border border-[#F3F2ED]/30 px-5 py-3 font-mono text-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:text-[#C8FF00] active:translate-y-0"
              >
                GITHUB
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                  ↗
                </span>
              </a>
            </div>

            <div className="mt-12 font-mono text-[9px] text-[#A6A6A6] md:mt-14">
              <p>BASED IN INDONESIA</p>

              <p className="mt-6">
                NO TRACKERS. &nbsp; BUILT WITH CODE.
              </p>
            </div>
          </div>

          {/* CENTER PHOTO */}
          <div className="group relative min-h-[400px] overflow-hidden border-b border-[#F3F2ED]/20 sm:min-h-[500px] md:min-h-0 md:border-b-0 md:border-r">
            <img
              src="/hero.jpg"
              alt="Rizky portfolio visual"
              className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/5" />

            {/* SUBTLE SCANLINE */}
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

            {/* CROSS 1 */}
            <div className="absolute left-[7%] top-[48%] h-8 w-8 transition-transform duration-500 group-hover:rotate-45">
              <div className="absolute left-1/2 top-0 h-8 w-[2px] -translate-x-1/2 bg-[#C8FF00]" />
              <div className="absolute left-0 top-1/2 h-[2px] w-8 -translate-y-1/2 bg-[#C8FF00]" />
            </div>

            {/* CROSS 2 */}
            <div className="absolute left-[48%] top-[51%] h-7 w-7 transition-transform duration-500 group-hover:-rotate-45">
              <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-[#C8FF00]" />
              <div className="absolute left-0 top-1/2 h-px w-7 -translate-y-1/2 bg-[#C8FF00]" />
            </div>

            {/* SYSTEM LABEL */}
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

          {/* RIGHT */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div className="font-mono text-[9px] text-[#A6A6A6]">
              RIZKY/002
            </div>

            <div className="mt-12 max-w-[180px] md:mt-0">
              <p className="text-xl font-medium leading-6 transition-transform duration-500 hover:translate-x-1">
                TURN
                <br />
                IDEAS
                <br />
                INTO
                <br />
                REAL
                <br />
                PROJECTS.
              </p>
            </div>

            <div className="mt-16 md:mt-0">
              <div className="mb-5 h-8 w-28 bg-[repeating-linear-gradient(90deg,#F3F2ED_0px,#F3F2ED_1px,transparent_1px,transparent_3px)] opacity-70 transition-all duration-500 hover:w-32" />

              <p className="font-mono text-[9px] text-[#A6A6A6]">
                V2 / BUILD 001
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section
          id="about"
          className="grid border-t border-[#F3F2ED]/20 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-10">
            <p className="mb-10 font-mono text-[10px] text-[#A6A6A6] md:mb-12">
              02 — ABOUT
            </p>

            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight transition-colors duration-300 hover:text-[#C8FF00] md:text-6xl">
                I&apos;M RIZKY.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#A6A6A6]">
                A student developer interested in building digital products,
                interfaces and things that live on the web.
              </p>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#A6A6A6]">
                Currently learning, experimenting and building things while
                figuring out what comes next.
              </p>
            </div>
          </div>

          <div className="p-5 md:p-10">
            <div className="grid grid-cols-2 gap-y-10 font-mono text-[10px]">
              <div className="transition-transform duration-300 hover:translate-x-1">
                <p className="text-[#C8FF00]">AGE</p>
                <p className="mt-2 text-[#A6A6A6]">17</p>
              </div>

              <div className="transition-transform duration-300 hover:translate-x-1">
                <p className="text-[#C8FF00]">BASE</p>
                <p className="mt-2 text-[#A6A6A6]">INDONESIA</p>
              </div>

              <div className="transition-transform duration-300 hover:translate-x-1">
                <p className="text-[#C8FF00]">STATUS</p>
                <p className="mt-2 text-[#A6A6A6]">STUDENT</p>
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
                CURRENTLY
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#A6A6A6]">
                Learning modern web development, experimenting with interfaces
                and documenting the process through code.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}
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
                001 — 003
              </span>
            </div>

            {/* PROJECT 01 */}
            {projects.map((project) => (
              <div
                key={project.number}
                className="group mt-10 border-y border-[#F3F2ED]/20 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C8FF00]/60 md:mt-12"
              >
                <div className="grid md:grid-cols-[80px_1fr_120px]">
                  <div className="relative overflow-hidden border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#C8FF00] transition-all duration-500 group-hover:bg-[#C8FF00] group-hover:text-[#0A0A0A] md:border-b-0 md:border-r">
                    <span className="relative z-10">
                      {project.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-[#0A0A0A] transition-all duration-500 group-hover:w-full"
                    />
                  </div>

                  <div className="border-b border-[#F3F2ED]/20 p-5 transition-transform duration-500 group-hover:translate-x-1 md:border-b-0 md:border-r md:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="border border-[#C8FF00]/40 px-2 py-1 font-mono text-[8px] text-[#C8FF00] transition-all duration-300 group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-[#0A0A0A]">
                            {project.status}
                          </span>

                          <span className="font-mono text-[9px] text-[#A6A6A6]">
                            WEB / PERSONAL
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#C8FF00] md:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-[#A6A6A6]">
                          {project.description}
                        </p>
                      </div>

                      <span className="font-mono text-[10px] text-[#A6A6A6] transition-all duration-500 group-hover:-translate-x-1 group-hover:text-[#C8FF00]">
                        {project.year}
                      </span>
                    </div>

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
                  </div>

                  <div className="flex flex-col items-stretch justify-center gap-2 p-5 sm:flex-row md:flex-col md:p-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button border border-[#C8FF00] px-4 py-3 text-center font-mono text-[9px] text-[#C8FF00] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C8FF00] hover:text-[#0A0A0A] active:translate-y-0"
                    >
                      LIVE
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover/button:translate-x-1.5">
                        ↗
                      </span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button border border-[#F3F2ED]/30 px-4 py-3 text-center font-mono text-[9px] text-[#A6A6A6] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:text-[#C8FF00] active:translate-y-0"
                    >
                      SOURCE
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover/button:translate-x-1.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* PROJECT 02 */}
            <div className="group border-b border-[#F3F2ED]/20 transition-all duration-500 hover:border-[#C8FF00]/30">
              <div className="grid md:grid-cols-[80px_1fr_120px]">
                <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#A6A6A6] transition-all duration-300 group-hover:bg-[#F3F2ED]/5 group-hover:text-[#C8FF00] md:border-b-0 md:border-r">
                  02
                </div>

                <div className="p-5 transition-transform duration-500 group-hover:translate-x-1 md:border-r md:p-8">
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#C8FF00]">
                      COMING SOON
                    </h3>

                    <span className="font-mono text-[10px] text-[#A6A6A6]">
                      —
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-[9px] text-[#A6A6A6]">
                    NEXT PROJECT IN DEVELOPMENT
                  </p>
                </div>

                <div className="hidden items-center justify-center p-6 md:flex">
                  <span className="font-mono text-[9px] text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                    LOCKED
                  </span>
                </div>
              </div>
            </div>

            {/* PROJECT 03 */}
            <div className="group border-b border-[#F3F2ED]/20 transition-all duration-500 hover:border-[#C8FF00]/30">
              <div className="grid md:grid-cols-[80px_1fr_120px]">
                <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#A6A6A6] transition-all duration-300 group-hover:bg-[#F3F2ED]/5 group-hover:text-[#C8FF00] md:border-b-0 md:border-r">
                  03
                </div>

                <div className="p-5 transition-transform duration-500 group-hover:translate-x-1 md:border-r md:p-8">
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#C8FF00]">
                      COMING SOON
                    </h3>

                    <span className="font-mono text-[10px] text-[#A6A6A6]">
                      —
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-[9px] text-[#A6A6A6]">
                    SOMETHING IS BEING BUILT
                  </p>
                </div>

                <div className="hidden items-center justify-center p-6 md:flex">
                  <span className="font-mono text-[9px] text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                    LOCKED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
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
                LET&apos;S
                <br />
                BUILD
                <br />
                SOMETHING.
              </h2>
            </div>

            <div className="p-5 md:p-10">
              <p className="max-w-md text-sm leading-6 text-[#A6A6A6]">
                Got a project, idea, or just want to say hi? Feel free to
                reach out.
              </p>

              <div className="mt-10">
                <a
                  href="https://github.com/RizkyAp11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-all duration-300 hover:px-2 hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>GITHUB</span>

                  <span className="break-all text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                    github.com/RizkyAp11 ↗
                  </span>
                </a>

                <a
                  href="mailto:rizkyadityapratama421@gmail.com"
                  className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-all duration-300 hover:px-2 hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
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
                  className="group flex flex-col gap-2 border-y border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-all duration-300 hover:px-2 hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>INSTAGRAM</span>

                  <span className="text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                    @adit.ptama ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="border-t border-[#F3F2ED]/20 px-5 py-4 md:px-8">
          <div className="flex flex-col justify-between gap-2 font-mono text-[9px] text-[#A6A6A6] sm:flex-row">
            <span>DESIGN / CODE / EXPERIMENT</span>

            <span className="text-[#C8FF00]">
              AVAILABLE FOR PROJECTS
            </span>

            <span>RIZKY/002 — 2026</span>
          </div>
        </footer>
      </div>
    </main>
  );
}