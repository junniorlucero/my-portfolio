import Reveal from "./Reveal";

export default function Experiences() {
  const EXPERIENCES = [
    {
      company: "Ernst & Young",
      role: "Technology Risk Intern",
      location: "Minneapolis, MN",
      period: "June 2023 – Aug 2023",
      logo: "/ey.png",
    },
    {
      company: "Accenture",
      role: "Software Engineer Intern",
      location: "Minneapolis, MN",
      period: "June 2024 – Aug 2024",
      logo: "/accenture.png",
    },
    {
      company: "Ameriprise Financial",
      role: "Software Engineer Intern",
      location: "Minneapolis, MN",
      period: "June 2025 – Aug 2025",
      logo: "/ameriprise.png",
    },
    {
      company: "University of Minnesota",
      role: "CSCI Teaching Assistant",
      location: "Minneapolis, MN",
      period: "Jan 2024 – Present",
      logo: "/uofmn.png",
    },
  ];

  return (
    <section
      id="experiences"
      className="min-h-screen mx-auto max-w-7xl px-6 py-20"
    >
      <h2 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
        {" "}
        Experiences 📁
      </h2>

      <ol className="mt-8 relative grid gap-y-12">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 dark:bg-white/15 bg-black/15 md:block" />

        {EXPERIENCES.map(({ company, role, location, period, logo }, i) => {
          const leftSide = i % 2 === 0; //see if the index is even or odd, if even then starts on the left, if odd goes on the right

          const sideClasses = leftSide
            ? "md:col-start-1 md:justify-self-end text-left pr-6"
            : "md:col-start-3 md:justify-self-start text-left pl-6";

          return (
            <li key={company} className="md:grid md:grid-cols-[1fr_48px_1fr]">
              <Reveal
                className={`w-full max-w-md ${sideClasses}`}
                delay={i * 120}
              >
                <div className="rounded-xl border border-neutral-500/30 bg-gradient-to-r from-blue-500 to-blue-600 hover:brightness-110 p-6 transition-transform duration-300 ease-out hover:-translate-y-3">
                  <h3 className="font-semibold">{company}</h3>
                  <p>
                    {role} - {location}
                  </p>
                  <span className="text-sm opacity-70">{period}</span>

                  <div className="hidden md:flex md:col-start-2 justify-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full">
                      {logo ? (
                        <img
                          src={logo}
                          alt={`${company} logo`}
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <span className="text-xs font-bold text-black">•</span>
                      )}
                    </span>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
