export default function Projects() {
  return (
    <section id="projects" className="border-t border-[#F3F2ED]/20">
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

        {/* PROJECT 01 */}
        <div className="group mt-12 border-y border-[#F3F2ED]/20 transition-colors duration-300 hover:border-[#C8FF00]/50">
          <div className="grid md:grid-cols-[80px_1fr_120px]">
            <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#C8FF00] transition-colors duration-300 group-hover:bg-[#C8FF00] group-hover:text-[#0A0A0A] md:border-b-0 md:border-r">
              01
            </div>

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

              <div className="mt-7 flex flex-wrap gap-2">
                {["NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[9px] text-[#A6A6A6] transition-colors duration-300 group-hover:border-[#C8FF00]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center p-6">
              <a
                href="#home"
                className="w-full border border-[#C8FF00] px-4 py-3 text-center font-mono text-[9px] text-[#C8FF00] transition-colors duration-300 hover:bg-[#C8FF00] hover:text-[#0A0A0A] sm:w-auto"
              >
                VIEW PROJECT ↗
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 02 */}
        <div className="border-b border-[#F3F2ED]/20">
          <div className="grid md:grid-cols-[80px_1fr_120px]">
            <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#A6A6A6] md:border-b-0 md:border-r">
              02
            </div>

            <div className="p-6 md:border-r md:p-8">
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-xl font-bold">COMING SOON</h3>

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

        {/* PROJECT 03 */}
        <div className="border-b border-[#F3F2ED]/20">
          <div className="grid md:grid-cols-[80px_1fr_120px]">
            <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#A6A6A6] md:border-b-0 md:border-r">
              03
            </div>

            <div className="p-6 md:border-r md:p-8">
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-xl font-bold">COMING SOON</h3>

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
  );
}