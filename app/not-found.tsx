export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-4 py-4 text-[#F3F2ED] md:px-7 md:py-6">
      <div className="flex min-h-[calc(100vh-2rem)] flex-col border border-[#F3F2ED]/20 md:min-h-[calc(100vh-3rem)]">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#F3F2ED]/20 px-5 py-4 md:px-8">
          <a
            href="/"
            className="font-mono text-sm font-bold transition-colors duration-200 hover:text-[#C8FF00]"
          >
            RIZKY<span className="text-[#C8FF00]">/404</span>
          </a>

          <span className="font-mono text-[9px] text-[#A6A6A6]">
            ERROR / ROUTE NOT FOUND
          </span>
        </header>

        {/* Main */}
        <section className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-16 md:px-10">
          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute left-1/4 top-0 h-full border-l border-dashed border-[#F3F2ED]/10" />
            <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-[#F3F2ED]/10" />
            <div className="absolute left-3/4 top-0 h-full border-l border-dashed border-[#F3F2ED]/10" />

            <div className="absolute left-0 top-1/4 w-full border-t border-dashed border-[#F3F2ED]/10" />
            <div className="absolute left-0 top-1/2 w-full border-t border-dashed border-[#F3F2ED]/10" />
            <div className="absolute left-0 top-3/4 w-full border-t border-dashed border-[#F3F2ED]/10" />
          </div>

          {/* Center content */}
          <div className="relative z-10 w-full max-w-4xl">
            <div className="flex items-center gap-3 font-mono text-[9px] text-[#A6A6A6]">
              <span className="h-1.5 w-1.5 bg-[#C8FF00]" />
              SYSTEM RESPONSE
              <span className="text-[#C8FF00]">/</span>
              404
            </div>

            <div className="mt-8 border-y border-[#F3F2ED]/20 py-8 md:py-10">
              <h1 className="text-[clamp(6rem,18vw,15rem)] font-bold leading-[0.75] tracking-[-0.09em] text-[#F3F2ED]">
                404
              </h1>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="max-w-xl text-2xl font-bold leading-tight md:text-4xl">
                  THIS DIGITAL SPACE
                  <br />
                  DOESN&apos;T EXIST.
                </p>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#A6A6A6]">
                  The page you&apos;re looking for may have been moved,
                  deleted, or never existed in the first place.
                </p>
              </div>

              <a
                href="/"
                className="group inline-flex w-fit items-center border border-[#C8FF00] bg-[#C8FF00] px-5 py-3 font-mono text-[10px] font-bold text-[#0A0A0A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-[#C8FF00]"
              >
                BACK TO HOME
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Corner labels */}
          <span className="absolute left-5 top-5 font-mono text-[8px] text-[#A6A6A6] md:left-10 md:top-8">
            RIZKY/ERROR
          </span>

          <span className="absolute bottom-5 right-5 font-mono text-[8px] text-[#A6A6A6] md:bottom-8 md:right-10">
            STATUS: 404
          </span>
        </section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-2 border-t border-[#F3F2ED]/20 px-5 py-4 font-mono text-[9px] text-[#A6A6A6] sm:flex-row md:px-8">
          <span>DESIGN / CODE / EXPERIMENT</span>
          <span className="text-[#C8FF00]">RIZKY/404 — 2026</span>
        </footer>
      </div>
    </main>
  );
}