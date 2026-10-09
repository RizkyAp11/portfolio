export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#F3F2ED]/20">
      <div className="grid md:grid-cols-2">
        <div className="border-b border-[#F3F2ED]/20 p-6 md:border-b-0 md:border-r md:p-10">
          <p className="font-mono text-[10px] text-[#A6A6A6]">
            04 — CONTACT
          </p>

          <h2 className="mt-8 max-w-xl text-4xl font-bold leading-none tracking-tight md:text-6xl">
            LET&apos;S
            <br />
            BUILD
            <br />
            SOMETHING.
          </h2>
        </div>

        <div className="p-6 md:p-10">
          <p className="max-w-md text-sm leading-6 text-[#A6A6A6]">
            Got a project, idea, or just want to say hi?
            Feel free to reach out.
          </p>

          <div className="mt-10">
            {/* GITHUB */}
            <a
              href="https://github.com/RizkyAp11"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-colors hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
            >
              <span>GITHUB</span>
              <span className="break-all text-[#A6A6A6] group-hover:text-[#C8FF00]">
                github.com/RizkyAp11 ↗
              </span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:rizkyadityapratama421@gmail.com"
              className="group flex flex-col gap-2 border-t border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-colors hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
            >
              <span>EMAIL</span>
              <span className="break-all text-[#A6A6A6] group-hover:text-[#C8FF00]">
                rizkyadityapratama421@gmail.com ↗
              </span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/adit.ptama"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 border-y border-[#F3F2ED]/20 py-5 font-mono text-[10px] transition-colors hover:text-[#C8FF00] sm:flex-row sm:items-center sm:justify-between"
            >
              <span>INSTAGRAM</span>
              <span className="text-[#A6A6A6] group-hover:text-[#C8FF00]">
                @adit.ptama ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}