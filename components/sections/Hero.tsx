export default function Hero() {
  return (
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
          <p className="mt-6">NO TRACKERS. &nbsp; BUILT WITH CODE.</p>
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
  );
}