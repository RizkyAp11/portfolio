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
      label: "EMAIL",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
    },
  ];

  if (SITE.linkedin) {
    channels.push({
      label: "LINKEDIN",
      value: SITE.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: SITE.linkedin,
      external: true,
    });
  }

  channels.push(
    {
      label: "GITHUB",
      value: SITE.githubHandle,
      href: SITE.github,
      external: true,
    },
    {
      label: "INSTAGRAM",
      value: SITE.instagramHandle,
      href: SITE.instagram,
      external: true,
    },
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-[#F3F2ED]/20"
    >
      <div className="grid md:grid-cols-2">
        <div className="border-b border-[#F3F2ED]/20 p-5 md:border-b-0 md:border-r md:p-10">
          <p className="font-mono text-xs text-[#A6A6A6]">04 — CONTACT</p>

          <h2
            id="contact-title"
            className="mt-8 max-w-xl text-4xl font-bold leading-none tracking-tight transition-colors duration-300 hover:text-[#C8FF00] md:text-6xl"
          >
            HAVE AN
            <br />
            IDEA?
            <br />
            LET&apos;S BUILD.
          </h2>

          <p className="mt-8 max-w-md text-sm leading-6 text-[#A6A6A6]">
            Open to {SITE.openTo.toLowerCase()}. Tell me what you&apos;re
            building and what you need. A short message is enough to start.
          </p>
        </div>

        <div className="p-5 md:p-10">
          <p className="font-mono text-[11px] text-[#C8FF00]">
            DIRECT CHANNELS
          </p>

          <p className="mt-3 max-w-md text-sm leading-6 text-[#A6A6A6]">
            Email is the fastest way to reach me. GitHub has my code and
            ongoing work.
          </p>

          <ul className="mt-8 border-b border-[#F3F2ED]/20">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-xs transition-all duration-300 hover:px-2 hover:text-[#C8FF00] focus-visible:text-[#C8FF00] focus-visible:outline-none sm:flex-row sm:items-center sm:justify-between"
                >
                  <span>{channel.label}</span>
                  <span className="break-all text-[#A6A6A6] transition-colors duration-300 group-hover:text-[#C8FF00]">
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
