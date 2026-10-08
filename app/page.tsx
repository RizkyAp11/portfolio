"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F3F2ED]">
      <div className="mx-4 my-4 border border-[#F3F2ED]/20 md:mx-7 md:my-6">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="border-b border-[#F3F2ED]/20 px-5 py-4 md:px-8">
          <div className="flex items-center justify-between">

            <a
              href="#home"
              onClick={closeMenu}
              className="font-mono text-sm font-bold transition-colors hover:text-[#C8FF00]"
            >
              RIZKY<span className="text-[#C8FF00]">/001</span>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden gap-8 font-mono text-[10px] text-[#A6A6A6] md:flex">

              <a
                href="#home"
                className="relative transition-colors duration-200 hover:text-[#C8FF00] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#C8FF00] after:transition-all after:duration-300 hover:after:w-full"
              >
                01. HOME
              </a>

              <a
                href="#about"
                className="relative transition-colors duration-200 hover:text-[#C8FF00] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#C8FF00] after:transition-all after:duration-300 hover:after:w-full"
              >
                02. ABOUT
              </a>

              <a
                href="#projects"
                className="relative transition-colors duration-200 hover:text-[#C8FF00] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#C8FF00] after:transition-all after:duration-300 hover:after:w-full"
              >
                03. PROJECTS
              </a>

              <a
                href="#contact"
                className="relative transition-colors duration-200 hover:text-[#C8FF00] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#C8FF00] after:transition-all after:duration-300 hover:after:w-full"
              >
                04. CONTACT
              </a>

            </nav>

            {/* DESKTOP STATUS */}
            <div className="hidden items-center gap-2 font-mono text-[9px] text-[#A6A6A6] md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
              ONLINE
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="font-mono text-[9px] text-[#A6A6A6] transition-colors hover:text-[#C8FF00] md:hidden"
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

              <a
                href="#home"
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-[#F3F2ED]/10 py-4 font-mono text-[10px] text-[#A6A6A6] transition-colors hover:text-[#C8FF00]"
              >
                01. HOME
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-[#F3F2ED]/10 py-4 font-mono text-[10px] text-[#A6A6A6] transition-colors hover:text-[#C8FF00]"
              >
                02. ABOUT
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-[#F3F2ED]/10 py-4 font-mono text-[10px] text-[#A6A6A6] transition-colors hover:text-[#C8FF00]"
              >
                03. PROJECTS
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="group flex items-center justify-between py-4 font-mono text-[10px] text-[#A6A6A6] transition-colors hover:text-[#C8FF00]"
              >
                04. CONTACT
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <div className="flex items-center gap-2 py-4 font-mono text-[9px] text-[#A6A6A6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
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
          className="grid min-h-[680px] grid-cols-1 md:grid-cols-[1.05fr_1.2fr_0.75fr]"
        >

          {/* LEFT */}
          <div className="border-b border-[#F3F2ED]/20 p-6 md:border-b-0 md:border-r md:p-8">

            <p className="mb-12 font-mono text-[10px] text-[#A6A6A6] md:mb-16">
              01 — INTRO
            </p>

            <div>
              <h1 className="text-[clamp(3.5rem,6vw,6.5rem)] font-bold leading-[0.78] tracking-[-0.065em]">
                RIZKY
              </h1>

              <h1 className="text-[clamp(3.5rem,6vw,6.5rem)] font-bold leading-[0.78] tracking-[-0.065em]">
                ADITYA
              </h1>

              <h1 className="text-[clamp(3.5rem,6vw,6.5rem)] font-bold leading-[0.78] tracking-[-0.065em]">
                PRATAMA
              </h1>
            </div>

            <div className="mt-10 max-w-[260px]">
              <p className="text-sm leading-5 text-[#A6A6A6]">
                STUDENT DEVELOPER
                <br />
                BUILDING FOR
                <br />
                THE WEB.
              </p>

              <div className="mt-5 h-[2px] w-8 bg-[#C8FF00]" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-[#C8FF00] bg-[#C8FF00] px-5 py-3 font-mono text-[10px] font-bold text-[#0A0A0A] transition-colors hover:bg-transparent hover:text-[#C8FF00]"
              >
                VIEW PROJECTS →
              </a>

              <a
                href="https://github.com/RizkyAp11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#F3F2ED]/30 px-5 py-3 font-mono text-[10px] transition-colors hover:border-[#C8FF00] hover:text-[#C8FF00]"
              >
                GITHUB ↗
              </a>

            </div>

            <div className="mt-12 font-mono text-[9px] text-[#A6A6A6] md:mt-14">
              <p>BASED IN INDONESIA</p>

              <p className="mt-6">
                NO TRACKERS. &nbsp; BUILT WITH CODE.
              </p>
            </div>

          </div>


          {/* CENTER — PHOTO */}
          <div className="group relative min-h-[430px] overflow-hidden border-b border-[#F3F2ED]/20 sm:min-h-[500px] md:min-h-0 md:border-b-0 md:border-r">

            <img
              src="/hero.jpg"
              alt="Rizky portfolio visual"
              className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute left-[12%] top-[12%] h-[65%] w-[65%] border border-white/25 transition-colors duration-500 group-hover:border-[#C8FF00]/40" />

            <div className="absolute bottom-[16%] right-[12%] h-[30%] w-[34%] border border-white/20 transition-colors duration-500 group-hover:border-[#C8FF00]/40" />

            {/* CROSS 1 */}
            <div className="absolute left-[7%] top-[48%] h-8 w-8">
              <div className="absolute left-1/2 top-0 h-8 w-[2px] -translate-x-1/2 bg-[#C8FF00]" />
              <div className="absolute left-0 top-1/2 h-[2px] w-8 -translate-y-1/2 bg-[#C8FF00]" />
            </div>

            {/* CROSS 2 */}
            <div className="absolute left-[48%] top-[51%] h-7 w-7">
              <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-[#C8FF00]" />
              <div className="absolute left-0 top-1/2 h-px w-7 -translate-y-1/2 bg-[#C8FF00]" />
            </div>

            {/* SYSTEM LABEL */}
            <div className="absolute right-0 top-0 border-b border-l border-[#F3F2ED]/30 bg-[#0A0A0A]/90 px-3 py-2 font-mono text-[8px] leading-3">
              SYS/001
              <br />
              WEB_INTERFACE
              <br />
              v1.0
            </div>

            <div className="absolute bottom-0 left-0 border-r border-t border-[#F3F2ED]/30 bg-[#0A0A0A]/80 px-4 py-2 font-mono text-[8px] text-white/70">
              VISUAL_FIELD / 001
            </div>

            <div className="absolute bottom-[16%] right-[12%] bg-[#0A0A0A]/80 px-3 py-2 font-mono text-[8px] text-white/70">
              RIZKY/001
            </div>

          </div>


          {/* RIGHT */}
          <div className="flex flex-col justify-between p-6 md:p-8">

            <div className="font-mono text-[9px] text-[#A6A6A6]">
              RIZKY/001
            </div>

            <div className="mt-12 max-w-[180px] md:mt-0">
              <p className="text-xl font-medium leading-6">
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
              <div className="mb-5 h-8 w-28 bg-[repeating-linear-gradient(90deg,#F3F2ED_0px,#F3F2ED_1px,transparent_1px,transparent_3px)] opacity-70" />

              <p className="font-mono text-[9px] text-[#A6A6A6]">
                RIZKY/001
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

          <div className="border-b border-[#F3F2ED]/20 p-6 md:border-b-0 md:border-r md:p-10">

            <p className="mb-10 font-mono text-[10px] text-[#A6A6A6] md:mb-12">
              02 — ABOUT
            </p>

            <div className="max-w-2xl">

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                I&apos;M RIZKY.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#A6A6A6]">
                A student developer interested in building
                digital products, interfaces and things that
                live on the web.
              </p>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#A6A6A6]">
                Currently learning, experimenting and building
                things while figuring out what comes next.
              </p>

            </div>

          </div>


          <div className="p-6 md:p-10">

            <div className="grid grid-cols-2 gap-y-10 font-mono text-[10px]">

              <div>
                <p className="text-[#C8FF00]">AGE</p>
                <p className="mt-2 text-[#A6A6A6]">17</p>
              </div>

              <div>
                <p className="text-[#C8FF00]">BASE</p>
                <p className="mt-2 text-[#A6A6A6]">INDONESIA</p>
              </div>

              <div>
                <p className="text-[#C8FF00]">STATUS</p>
                <p className="mt-2 text-[#A6A6A6]">STUDENT</p>
              </div>

              <div>
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
                Learning modern web development,
                experimenting with interfaces and
                documenting the process through code.
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

          <div className="p-6 md:p-10">

            <div className="flex items-end justify-between">

              <div>

                <p className="font-mono text-[10px] text-[#A6A6A6]">
                  03 — SELECTED WORK
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                  PROJECTS.
                </h2>

              </div>

              <span className="hidden font-mono text-[9px] text-[#A6A6A6] md:block">
                001 — 003
              </span>

            </div>


            {/* =================================================
                PROJECT 01
            ================================================= */}
            <div className="group mt-12 border-y border-[#F3F2ED]/20 transition-colors duration-300 hover:border-[#C8FF00]/50">

              <div className="grid md:grid-cols-[80px_1fr_120px]">

                {/* NUMBER */}
                <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#C8FF00] transition-colors duration-300 group-hover:bg-[#C8FF00] group-hover:text-[#0A0A0A] md:border-b-0 md:border-r">
                  01
                </div>


                {/* CONTENT */}
                <div className="border-b border-[#F3F2ED]/20 p-6 md:border-b-0 md:border-r md:p-8">

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#C8FF00] md:text-3xl">
                        PORTFOLIO WEBSITE
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-[#A6A6A6]">
                        A personal portfolio website built from
                        scratch to document my work, experiments
                        and progress as a developer.
                      </p>

                    </div>

                    <span className="font-mono text-[10px] text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
                      2026
                    </span>

                  </div>


                  {/* TECH STACK */}
                  <div className="mt-7 flex flex-wrap gap-2">

                    <span className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[9px] text-[#A6A6A6] transition-colors duration-300 group-hover:border-[#C8FF00]/30">
                      NEXT.JS
                    </span>

                    <span className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[9px] text-[#A6A6A6] transition-colors duration-300 group-hover:border-[#C8FF00]/30">
                      TYPESCRIPT
                    </span>

                    <span className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[9px] text-[#A6A6A6] transition-colors duration-300 group-hover:border-[#C8FF00]/30">
                      TAILWIND
                    </span>

                  </div>

                </div>


                {/* ACTIONS */}
                <div className="flex flex-col items-stretch justify-center gap-2 p-6 sm:flex-row md:flex-col">

                  {/* LIVE */}
                  <a
                    href="#home"
                    className="border border-[#C8FF00] px-4 py-3 text-center font-mono text-[9px] text-[#C8FF00] transition-colors duration-300 hover:bg-[#C8FF00] hover:text-[#0A0A0A]"
                  >
                    LIVE ↗
                  </a>

                  {/* SOURCE */}
                  <a
                    href="https://github.com/RizkyAp11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#F3F2ED]/30 px-4 py-3 text-center font-mono text-[9px] text-[#A6A6A6] transition-colors duration-300 hover:border-[#C8FF00] hover:text-[#C8FF00]"
                  >
                    SOURCE ↗
                  </a>

                </div>

              </div>

            </div>


            {/* =================================================
                PROJECT 02
            ================================================= */}
            <div className="border-b border-[#F3F2ED]/20">

              <div className="grid md:grid-cols-[80px_1fr_120px]">

                <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#A6A6A6] md:border-b-0 md:border-r">
                  02
                </div>

                <div className="p-6 md:border-r md:p-8">

                  <div className="flex items-center justify-between gap-5">

                    <h3 className="text-xl font-bold">
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
                  <span className="font-mono text-[9px] text-[#A6A6A6]">
                    LOCKED
                  </span>
                </div>

              </div>

            </div>


            {/* =================================================
                PROJECT 03
            ================================================= */}
            <div className="border-b border-[#F3F2ED]/20">

              <div className="grid md:grid-cols-[80px_1fr_120px]">

                <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#A6A6A6] md:border-b-0 md:border-r">
                  03
                </div>

                <div className="p-6 md:border-r md:p-8">

                  <div className="flex items-center justify-between gap-5">

                    <h3 className="text-xl font-bold">
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
                  <span className="font-mono text-[9px] text-[#A6A6A6]">
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

            <div className="border-b border-[#F3F2ED]/20 p-6 md:border-b-0 md:border-r md:p-10">

              <p className="font-mono text-[10px] text-[#A6A6A6]">
                04 — CONTACT
              </p>

              <h2 className="mt-8 max-w-xl text-4xl font-bold leading-none tracking-tight md:text-6xl">
                LET&apos;S
                <br />
                BUILD
                <br />
                SOMETHING.
              </h2>

            </div>


            <div className="p-6 md:p-10">

              <p className="max-w-md text-sm leading-6 text-[#A6A6A6]">
                Got a project, idea, or just want to say hi?
                Feel free to reach out.
              </p>

              <div className="mt-10">

                {/* GITHUB */}
                <a
                  href="https://github.com/RizkyAp11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-colors hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>GITHUB</span>

                  <span className="break-all text-[#A6A6A6] group-hover:text-[#C8FF00]">
                    github.com/RizkyAp11 ↗
                  </span>
                </a>


                {/* EMAIL */}
                <a
                  href="mailto:rizkyadityapratama421@gmail.com"
                  className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-colors hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>EMAIL</span>

                  <span className="break-all text-[#A6A6A6] group-hover:text-[#C8FF00]">
                    rizkyadityapratama421@gmail.com ↗
                  </span>
                </a>


                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com/adit.ptama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 border-y border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-colors hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>INSTAGRAM</span>

                  <span className="text-[#A6A6A6] group-hover:text-[#C8FF00]">
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

            <span>
              DESIGN / CODE / EXPERIMENT
            </span>

            <span className="text-[#C8FF00]">
              AVAILABLE FOR PROJECTS
            </span>

            <span>
              RIZKY/001 — 2026
            </span>

          </div>

        </footer>

      </div>
    </main>
  );
}