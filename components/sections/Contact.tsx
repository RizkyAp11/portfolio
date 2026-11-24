import { SITE } from "../../lib/site";

interface Channel {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export default function Contact() {
  const channels: Channel[] = [
    {
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
    },
  ];

  if (SITE.linkedin) {
    channels.push({
      label: "LinkedIn",
      value: SITE.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: SITE.linkedin,
      external: true,
    });
  }

  channels.push(
    {
      label: "GitHub",
      value: SITE.githubHandle,
      href: SITE.github,
      external: true,
    },
    {
      label: "Instagram",
      value: SITE.instagramHandle,
      href: SITE.instagram,
      external: true,
    },
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-ink/20"
    >
      <div className="grid md:grid-cols-2">
        <div className="border-b border-ink/20 p-5 md:border-b-0 md:border-r md:p-10">
          <p className="font-mono text-xs text-dim">Contact</p>

          <h2
            id="contact-title"
            className="mt-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
          >
            Got a project?
            <br />
            Let&apos;s talk.
          </h2>

          <p className="mt-8 max-w-md text-sm leading-6 text-muted">
            I&apos;m open to {SITE.openTo.toLowerCase()}. Tell me what you&apos;re
            building and what you need. A short message is enough to start.
          </p>
        </div>

        <div className="p-5 md:p-10">
          <p className="max-w-md text-sm leading-6 text-muted">
            Email is the fastest way to reach me. GitHub has my code and
            ongoing work.
          </p>

          <ul className="mt-8 border-b border-ink/20">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-col gap-1 border-t border-ink/20 py-5 text-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-mono text-xs text-dim">
                    {channel.label}
                  </span>
                  <span className="break-all text-ink underline-offset-4 group-hover:underline">
                    {channel.value}
                    <span aria-hidden="true"> ↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
