export default function About() {
  return (
    <section
      id="about"
      className="grid border-t border-[#F3F2ED]/20 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="border-b border-[#F3F2ED]/20 p-6 md:border-b-0 md:border-r md:p-10">
        <p className="mb-10 font-mono text-[10px] text-[#A6A6A6] md:mb-12">
          02 — ABOUT
        </p>

        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            I&apos;M RIZKY.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#A6A6A6]">
            A student developer interested in building
            digital products, interfaces and things that
            live on the web.
          </p>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#A6A6A6]">
            Currently learning, experimenting and building
            things while figuring out what comes next.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <div className="grid grid-cols-2 gap-y-10 font-mono text-[10px]">
          <div>
            <p className="text-[#C8FF00]">AGE</p>
            <p className="mt-2 text-[#A6A6A6]">17</p>
          </div>

          <div>
            <p className="text-[#C8FF00]">BASE</p>
            <p className="mt-2 text-[#A6A6A6]">INDONESIA</p>
          </div>

          <div>
            <p className="text-[#C8FF00]">STATUS</p>
            <p className="mt-2 text-[#A6A6A6]">STUDENT</p>
          </div>

          <div>
            <p className="text-[#C8FF00]">FOCUS</p>
            <p className="mt-2 leading-5 text-[#A6A6A6]">
              WEB
              <br />
              UI
              <br />
              DEVELOPMENT
            </p>
          </div>
        </div>

        <div className="my-10 h-px bg-[#F3F2ED]/20" />

        <div>
          <p className="font-mono text-[10px] text-[#C8FF00]">
            CURRENTLY
          </p>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#A6A6A6]">
            Learning modern web development,
            experimenting with interfaces and
            documenting the process through code.
          </p>
        </div>
      </div>
    </section>
  );
}