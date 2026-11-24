import Image from "next/image";
import { PROJECTS, SITE } from "../../lib/site";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-[#F3F2ED]/20"
    >
      <div className="p-5 md:p-10">
        <div>
          <p className="font-mono text-xs text-[#A6A6A6]">03 — SELECTED WORK</p>

          <h2
            id="projects-title"
            className="mt-4 text-[2.5rem] font-bold leading-none tracking-[-0.04em] transition-colors duration-300 hover:text-[#C8FF00] md:mt-5 md:text-6xl md:tracking-tight"
          >
            PROJECTS.
          </h2>
        </div>

        {PROJECTS.map((project) => (
          <article
            key={project.number}
            className="group mt-10 border-y border-[#F3F2ED]/20 transition-colors duration-500 hover:border-[#C8FF00]/60 md:mt-12"
          >
            <div className="grid md:grid-cols-[80px_1fr_160px]">
              {/* NUMBER */}
              <div className="border-b border-[#F3F2ED]/20 p-5 font-mono text-sm text-[#C8FF00] transition-colors duration-500 group-hover:bg-[#C8FF00] group-hover:text-[#0A0A0A] md:border-b-0 md:border-r">
                {project.number}
              </div>

              {/* CONTENT */}
              <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="border border-[#C8FF00]/40 px-2 py-1 font-mono text-[10px] text-[#C8FF00]">
                    {project.status}
                  </span>
                  <span className="font-mono text-[11px] text-[#A6A6A6]">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] text-[#8A8A8A]">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-2xl font-bold transition-colors duration-500 group-hover:text-[#C8FF00] md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#8A8A8A]">
                    {project.role}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-[#A6A6A6]">
                  {project.summary}
                </p>

                {project.image ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="mt-6 h-auto w-full border border-[#F3F2ED]/20"
                  />
                ) : null}

                <p className="mt-6 font-mono text-[11px] text-[#C8FF00]">
                  WHAT&apos;S INSIDE
                </p>
                <ul className="mt-3 max-w-2xl space-y-2 text-sm leading-6 text-[#A6A6A6]">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="text-[#C8FF00]">
                        —
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[11px] text-[#A6A6A6]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col justify-center gap-2 p-5">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button border border-[#C8FF00] px-4 py-3 text-center font-mono text-[11px] text-[#C8FF00] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C8FF00] hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00] active:translate-y-0"
                  >
                    VIEW LIVE
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block transition-transform duration-300 group-hover/button:translate-x-1.5"
                    >
                      ↗
                    </span>
                  </a>
                ) : null}

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button border border-[#F3F2ED]/30 px-4 py-3 text-center font-mono text-[11px] text-[#A6A6A6] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8FF00] hover:text-[#C8FF00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF00] active:translate-y-0"
                  >
                    SOURCE CODE
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block transition-transform duration-300 group-hover/button:translate-x-1.5"
                    >
                      ↗
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}

        <div className="border-b border-[#F3F2ED]/20 py-6">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-mono text-[11px] tracking-[0.12em] text-[#A6A6A6] transition-colors duration-300 hover:text-[#C8FF00] focus-visible:text-[#C8FF00] focus-visible:outline-none"
          >
            MORE CODE AND EXPERIMENTS ON GITHUB
            <span
              aria-hidden="true"
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
