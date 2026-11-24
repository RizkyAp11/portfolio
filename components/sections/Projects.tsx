import Image from "next/image";
import { PROJECTS, SITE } from "../../lib/site";

const actionBase =
  "border px-4 py-3 text-center font-mono text-xs transition-colors duration-200";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-ink/20"
    >
      <div className="p-5 md:p-10">
        <p className="font-mono text-xs text-dim">Selected work</p>

        <h2
          id="projects-title"
          className="mt-4 text-[2.5rem] font-bold leading-none tracking-[-0.04em] md:mt-5 md:text-6xl md:tracking-tight"
        >
          Projects
        </h2>

        {PROJECTS.map((project) => (
          <article
            key={project.number}
            className="mt-10 border-y border-ink/20 md:mt-12"
          >
            <div className="grid md:grid-cols-[80px_1fr_160px]">
              {/* NUMBER */}
              <div className="border-b border-ink/20 p-5 font-mono text-sm text-dim md:border-b-0 md:border-r">
                {project.number}
              </div>

              {/* CONTENT */}
              <div className="border-b border-ink/20 p-5 md:border-b-0 md:border-r md:p-8">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                  <span className="inline-flex items-center gap-2 text-ink">
                    {project.status === "Live" ? (
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                      />
                    ) : null}
                    {project.status}
                  </span>
                  <span>{project.category}</span>
                  <span className="text-dim">{project.year}</span>
                </p>

                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-dim">
                    {project.role}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
                  {project.summary}
                </p>

                {project.image ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="mt-6 h-auto w-full border border-ink/20"
                  />
                ) : null}

                <p className="mt-6 font-mono text-xs text-dim">
                  What&apos;s inside
                </p>
                <ul className="mt-3 max-w-2xl space-y-2 text-sm leading-6 text-muted">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="text-dim">
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
                      className="border border-ink/20 px-3 py-1 font-mono text-xs text-muted"
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
                    className={`${actionBase} border-ink text-ink hover:bg-ink hover:text-canvas`}
                  >
                    View live ↗
                  </a>
                ) : null}

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${actionBase} border-ink/30 text-muted hover:border-ink hover:text-ink`}
                  >
                    Source code ↗
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}

        <div className="border-b border-ink/20 py-6">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
          >
            More code and experiments on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
