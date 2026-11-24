import Image from "next/image";
import { SITE, STACK_CORE } from "../../lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grid min-h-[680px] grid-cols-1 md:min-h-[700px] md:grid-cols-[1.05fr_1.2fr_0.75fr]"
    >
      {/* LEFT */}
      <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-8">
        <p className="font-mono text-xs text-[#A6A6A6]">01 — INTRO</p>

        <h1
          id="hero-title"
          className="mt-12 text-[clamp(3.15rem,6vw,6.5rem)] font-bold leading-[0.78] tracking-[-0.065em] md:mt-16"
        >
          <span className="block">RIZKY</span>{" "}
          <span className="block">ADITYA</span>{" "}
          <span className="block">PRATAMA</span>
        </h1>

        <div className="mt-10 max-w-[300px]">
          <p className="text-sm leading-5 text-[#F3F2ED]">
            {SITE.role.toUpperCase()}
          </p>
          <p className="mt-2 text-sm leading-5 text-[#A6A6A6]">
            BUILDING WEB INTERFACES WITH NEXT.JS &amp; TYPESCRIPT.
          </p>

          <div className="mt-5 h-[2px] w-8 bg-[#C8FF00] transition-all duration-500 hover:w-14" />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center border border-[#C8FF00] bg-[#C8FF00] px-5 py-3 font-mono text-xs font-bold text-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#C8FF00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00] active:translate-y-0"
          >
            VIEW PROJECTS
            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center border border-[#F3F2ED]/30 px-5 py-3 font-mono text-xs text-[#A6A6A6] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:text-[#C8FF00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00] active:translate-y-0"
          >
            LET&apos;S TALK
            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
            >
              ↗
            </span>
          </a>

          {SITE.cvUrl ? (
            <a
              href={SITE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center border border-[#F3F2ED]/30 px-5 py-3 font-mono text-xs text-[#A6A6A6] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:text-[#C8FF00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00] active:translate-y-0"
            >
              DOWNLOAD CV
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </a>
          ) : null}
        </div>

        <div className="mt-12 font-mono text-[11px] leading-5 text-[#A6A6A6] md:mt-16">
          <p>BASED IN {SITE.location.toUpperCase()}</p>
          <p className="mt-2">BUILT WITH NEXT.JS · HOSTED ON VERCEL</p>
        </div>
      </div>

      {/* CENTER — PORTRAIT */}
      <div className="group relative min-h-[430px] overflow-hidden border-b border-[#F3F2ED]/20 sm:min-h-[520px] md:min-h-0 md:border-b-0 md:border-r">
        <Image
          src="/hero.jpg"
          alt={`Portrait of ${SITE.name}`}
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, #F3F2ED 4px)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute left-[12%] top-[12%] h-[65%] w-[65%] border border-white/25 transition-all duration-500 group-hover:scale-[1.015] group-hover:border-[#C8FF00]/40"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[16%] right-[12%] h-[30%] w-[34%] border border-white/20 transition-all duration-500 group-hover:-translate-x-1 group-hover:border-[#C8FF00]/40"
        />

        <div
          aria-hidden="true"
          className="absolute left-[7%] top-[48%] h-8 w-8 transition-transform duration-500 group-hover:rotate-45"
        >
          <div className="absolute left-1/2 top-0 h-8 w-[2px] -translate-x-1/2 bg-[#C8FF00]" />
          <div className="absolute left-0 top-1/2 h-[2px] w-8 -translate-y-1/2 bg-[#C8FF00]" />
        </div>

        <div
          aria-hidden="true"
          className="absolute left-[48%] top-[51%] h-7 w-7 transition-transform duration-500 group-hover:-rotate-45"
        >
          <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-[#C8FF00]" />
          <div className="absolute left-0 top-1/2 h-px w-7 -translate-y-1/2 bg-[#C8FF00]" />
        </div>
      </div>

      {/* RIGHT — STACK */}
      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="font-mono text-[11px] text-[#A6A6A6]">STACK</p>
          <div className="mt-5 h-px w-full bg-[#F3F2ED]/20" />
        </div>

        <ul className="mt-12 space-y-3 text-xl font-medium leading-6 md:mt-0">
          {STACK_CORE.map((item) => (
            <li
              key={item}
              className="transition-transform duration-500 hover:translate-x-1"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-16 md:mt-0">
          <div
            aria-hidden="true"
            className="mb-5 h-8 w-28 bg-[repeating-linear-gradient(90deg,#F3F2ED_0px,#F3F2ED_1px,transparent_1px,transparent_3px)] opacity-70"
          />
          <p className="font-mono text-[11px] text-[#8A8A8A]">OPEN TO</p>
          <p className="mt-1 text-sm text-[#F3F2ED]">{SITE.openTo}</p>
        </div>
      </div>
    </section>
  );
}
