import Reveal from "./Reveal";
import { TextRevealTW } from "./TextRevealTW";

export default function Hero() {
  return (
    <Reveal>
      <section
        id="hero"
        className="min-h-screen mx-auto max-w-7xl px-6 py-32 flex flex-col md:flex-row items-center gap-12"
      >
        <div
          className="flex-1 flex justify-center
                transition-transform duration-300 ease-out hover:-translate-y-3"
        >
          <img
            src="/IMG_4752.JPG"
            alt="Profile picture"
            className="rounded-xl w-90 h-128 object-cover
                    shadow-xl"
          ></img>
        </div>

        <div className="text-center">
          <TextRevealTW
            text="Hello, I'm Junnior!"
            className="text-7xl font-bold text-blue-600 dark:text-blue-400"
          />
          <p className="mt-6 text-lg text-black dark:text-white">
            Aspiring Software Engineer • MIS/CS @ UMN
          </p>
          <a
            href="/resume.pdf"
            className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r 
                  from-blue-400 to-blue-600 text-white hover:brightness-120
                  transition-transform duration-300 ease-out hover:-translate-y-3"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </section>
    </Reveal>
  );
}
