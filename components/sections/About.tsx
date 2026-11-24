import { SITE, STACK_CORE, STACK_TOOLS } from "../../lib/site";

export default function About() {
  const facts: { label: string; value: string }[] = [
    { label: "OPEN TO", value: SITE.openTo.toUpperCase() },
    { label: "BASE", value: SITE.location.toUpperCase() },
    { label: "STATUS", value: "STUDENT" },
    { label: "FOCUS", value: "FRONTEND / UI" },
  ];

  if (SITE.school) {
    facts.push({ label: "STUDYING AT", value: SITE.school.toUpperCase() });
  }

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="grid border-t border-[#F3F2ED]/20 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-10">
        <p className="font-mono text-xs text-[#A6A6A6]">02 — ABOUT</p>

        <div className="mt-10 max-w-2xl md:mt-12">
          <h2
            id="about-title"
            className="text-4xl font-bold tracking-tight transition-colors duration-300 hover:text-[#C8FF00] md:text-6xl"
          >
            I&apos;M RIZKY.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#A6A6A6]">
            I&apos;m a student frontend developer from {SITE.location}. I build
            websites and interfaces with Next.js, React and TypeScript, and I
            care about clear layouts, readable typography and details that feel
            intentional.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#A6A6A6]">
            I learn by shipping: what you see here is designed, built and
            deployed by me, with the source public on GitHub.
          </p>

          <div className="mt-10">
            <p className="font-mono text-[11px] text-[#C8FF00]">CORE STACK</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK_CORE.map((item) => (
                <li
                  key={item}
                  className="border border-[#C8FF00]/40 px-3 py-1 font-mono text-[11px] text-[#F3F2ED]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[11px] text-[#C8FF00]">TOOLS</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK_TOOLS.map((item) => (
                <li
                  key={item}
                  className="border border-[#F3F2ED]/20 px-3 py-1 font-mono text-[11px] text-[#A6A6A6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 font-mono text-xs">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="transition-transform duration-300 hover:translate-x-1"
            >
              <dt className="text-[#C8FF00]">{fact.label}</dt>
              <dd className="mt-2 leading-5 text-[#A6A6A6]">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="my-10 h-px bg-[#F3F2ED]/20" />

        <div>
          <p className="font-mono text-xs text-[#C8FF00]">CURRENTLY</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#A6A6A6]">
            {SITE.currently}
          </p>
        </div>
      </div>
    </section>
  );
}
