import Image from "next/image";
import { SITE, STACK_CORE } from "../../lib/site";

const buttonBase =
  "inline-flex items-center justify-center border px-5 py-3 font-mono text-xs transition-colors duration-200";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grid min-h-[680px] grid-cols-1 md:min-h-[700px] md:grid-cols-[1.05fr_1.2fr_0.75fr]"
    >
      {/* LEFT */}
      <div className="border-b border-ink/20 p-5 md:border-b-0 md:border-r md:p-8">
        <h1
          id="hero-title"
          className="mt-12 text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.045em] md:mt-16"
        >
          <span className="block">Rizky</span>{" "}
          <span className="block">Aditya</span>{" "}
          <span className="block">Pratama</span>
        </h1>

        <div className="mt-10 max-w-[320px]">
          <p className="text-base leading-6 text-ink">
            Student frontend developer.
          </p>
          <p className="mt-1 text-base leading-6 text-muted">
            I build web interfaces with Next.js and TypeScript.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className={`${buttonBase} border-accent bg-accent font-bold text-canvas hover:bg-transparent hover:text-accent`}
          >
            View projects
          </a>

          <a
            href="#contact"
            className={`${buttonBase} border-ink/30 text-ink hover:border-ink`}
          >
            Get in touch
          </a>

          {SITE.cvUrl ? (
            <a
              href={SITE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border-ink/30 text-ink hover:border-ink`}
            >
              Download CV
            </a>
          ) : null}
        </div>

        <p className="mt-12 font-mono text-xs text-muted md:mt-16">
          Based in {SITE.location}
        </p>
      </div>

      {/* CENTER — PORTRAIT */}
      <div className="relative min-h-[430px] overflow-hidden border-b border-ink/20 sm:min-h-[520px] md:min-h-0 md:border-b-0 md:border-r">
        <Image
          src="/hero.jpg"
          alt={`Portrait of ${SITE.name}`}
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      {/* RIGHT — STACK */}
      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="font-mono text-xs text-dim">Stack</p>
          <div className="mt-5 h-px w-full bg-ink/20" />
        </div>

        <ul className="mt-12 space-y-3 text-xl font-medium leading-6 md:mt-0">
          {STACK_CORE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-16 md:mt-0">
          <p className="font-mono text-xs text-dim">Open to</p>
          <p className="mt-1 text-sm text-ink">{SITE.openTo}</p>
        </div>
      </div>
    </section>
  );
}
