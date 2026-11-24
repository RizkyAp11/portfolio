import { SITE, STACK_CORE, STACK_TOOLS } from "../../lib/site";

export default function About() {
  const facts: { label: string; value: string }[] = [
    { label: "Open to", value: SITE.openTo },
    { label: "Based in", value: SITE.location },
    { label: "Status", value: "Student" },
    { label: "Focus", value: "Frontend and UI" },
  ];

  if (SITE.school) {
    facts.push({ label: "Studying at", value: SITE.school });
  }

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="grid border-t border-ink/20 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="border-b border-ink/20 p-5 md:border-b-0 md:border-r md:p-10">
        <p className="font-mono text-xs text-dim">About</p>

        <div className="mt-10 max-w-2xl md:mt-12">
          <h2
            id="about-title"
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            I&apos;m Rizky.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            I&apos;m a student frontend developer from {SITE.location}. I build
            websites and interfaces with Next.js, React and TypeScript.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            I learn by shipping: what you see here is designed, built and
            deployed by me, with the source public on GitHub.
          </p>

          <div className="mt-10">
            <p className="font-mono text-xs text-dim">Core stack</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK_CORE.map((item) => (
                <li
                  key={item}
                  className="border border-ink/30 px-3 py-1 font-mono text-xs text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-xs text-dim">Tools</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK_TOOLS.map((item) => (
                <li
                  key={item}
                  className="border border-ink/15 px-3 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs text-dim">{fact.label}</dt>
              <dd className="mt-1 leading-5 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="my-10 h-px bg-ink/20" />

        <div>
          <p className="font-mono text-xs text-dim">Currently</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            {SITE.currently}
          </p>
        </div>
      </div>
    </section>
  );
}
