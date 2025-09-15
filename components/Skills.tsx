import Reveal from "./Reveal";

export default function Skills() {
  const SKILLS = [
    {
      title: "Languages",
      gradient: "from-blue-500 to-blue-700",
      items: [
        "Python",
        "Java",
        "JavaScript",
        "C",
        "OCaml",
        "HTML",
        "CSS",
        "SQL",
      ],
    },

    {
      title: "Frameworks",
      gradient: "from-indigo-500 to-indigo-700",
      items: ["React", "Express.js"],
    },

    {
      title: "Libraries / Testing",
      gradient: "from-green-500 to-green-700",
      items: ["pandas", "NumPy", "JUnit"],
    },

    {
      title: "Databases",
      gradient: "from-orange-600 to-orange-700",
      items: ["MongoDB", "MySQL"],
    },

    {
      title: "Developer Tools",
      gradient: "from-rose-500 to-rose-700",
      items: [
        "Git",
        "Docker",
        "VS Code",
        "IntelliJ",
        "PyCharm",
        "Postman",
        "Linux Command Line",
        "Node.js",
      ],
    },
  ]; //define the schema for our list of SKILLS

  const left = SKILLS.slice(0, 3);
  const right = SKILLS.slice(3);

  return (
    <Reveal>
      <section
        id="skills"
        className="min-h-screen mx-auto max-w-7xl px-6 py-20"
      >
        <h2 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
          {" "}
          Skills 🛠️
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {left.map(({ title, gradient, items }) => (
            <div
              key={title}
              className={`rounded-xl border border-neutral-500/30 bg-gradient-to-r ${gradient} hover:brightness-110 p-6 transition-transform duration-300 ease-out hover:-translate-y-3 font-semibold`}
            >
              {title}

              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((items) => (
                  <li
                    key={items}
                    className="rounded-full bg-white/15 px-2 py-0.5 text-xs"
                  >
                    {items}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {right.map(({ title, gradient, items }) => (
            <div
              key={title}
              className={`rounded-xl border border-neutral-500/30 bg-gradient-to-r ${gradient} hover:brightness-110 p-6 transition-transform duration-300 ease-out hover:-translate-y-3 font-semibold`}
            >
              {title}

              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((items) => (
                  <li
                    key={items}
                    className="rounded-full bg-white/15 px-2 py-0.5 text-xs"
                  >
                    {items}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
