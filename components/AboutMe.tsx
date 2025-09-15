import Reveal from "./Reveal";

export default function aboutMe() {
  return (
    <Reveal>
      <section
        id="aboutMe"
        className="min-h-screen mx-auto max-w-7xl px-6 py-20"
      >
        <h2 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
          About Me 😁
        </h2>

        <div className="relative -mt-8 flex flex-col items-center">
          {/* card + overlay image*/}
          <div className="translate-y-[30%] flex justify-center">
            <img
              src="/IMG_5104_(copy).jpg"
              alt="About me picture"
              className="w-56 h-72 object-cover rounded-xl shadow-xl ring-1 ring-neutral-500/30
              transition-transform duration-300 ease-out hover:-translate-y-3
              "
            ></img>
          </div>
          <div
            className="mx-auto w-full max-w-7xl rounded-2xl border 
          border-neutral-500/30 bg-gradient-to-r 
          from-blue-400 to-blue-600 py-16 px-10 pt-32
          shadow-xl
          "
          >
            <p className="flex text-center">
              I am a MIS & CS student who is naturally curious and loves
              exploring new technologies. I love fixing problems with technology
              and especially programming. When I am not programming, I enjoy
              watching sports, spending time with family, collecting shoes, and
              fashion!
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
