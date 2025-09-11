import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/*
    <section id="unique-name" className="container styles">
    <h2 className="section-title">Title</h2>
    <p className="section-description">Optional description text.</p>
    <div className="content-layout">
    { Inner content: cards, images, lists, etc. }
      </div>
    </section.




    same as

      <section>
      -Groups content into a block.
      -Add an id so your navbar can link to it (href="#about").



      <h2>Title</h2>
      -Each section has a clear heading (About Me, Projects).
      -Use h1 only once (for your name/hero headline).


      <p>text </p>
      -Short explanation for the section.
      -E.g., “Here are some of my projects.”


      <div>Content</div>
      -The actual “stuff” → cards, grid, flexbox, etc.
      -Styled with Tailwind’s flex, grid, gap, px, etc.


      </section>

      Section	            Syntax	              Why
      Hero	    mx-auto max-w-7xl px-6 py-32	Big intro, lots of space
      About	    mx-auto max-w-4xl px-6 py-20	Readable text width
      Projects	mx-auto max-w-6xl px-6 py-20	Wider grid area
      Skills	  mx-auto max-w-5xl px-6 py-20	Medium width, flex-wrap works well
      Contact	  mx-auto max-w-4xl px-6 py-10	Centered + smaller padding for footer

      
    */}

      <section
        id="hero"
        className="min-h-screen mx-auto max-w-7xl px-6 py-32 flex flex-col md:flex-row items-center gap-12"
      >
        <div
          className="flex-1 flex justify-center
        transition-transform duration-300 ease-out hover:-translate-y-1"
        >
          <img
            src="/IMG_4752.JPG"
            alt="Profile picture"
            className="rounded-xl w-90 h-128  object-cover"
          ></img>
        </div>

        <div className="text-center">
          <h1 className="text-7xl font-bold text-blue-600">
            Hello, I'm Junnior!
          </h1>
          <p className="mt-6 text-lg">
            Aspiring Software Engineer • MIS/CS @ UMN
          </p>
          <a
            href="/resume.pdf"
            className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r 
          from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700
          hover:animate-bounce"
          >
            Resume
          </a>
        </div>
      </section>

      <section id="aboutMe" className="mx-auto max-w-7xl px-6 py-6">
        <h2 className="text-4xl font-semibold">About Me ☺️</h2>

        <div className="relative -mt-8 flex flex-col items-center">
          {/* card + overlay image*/}
          <div className="translate-y-[30%] flex justify-center">
            <img
              src="/IMG_5104_(copy).jpg"
              alt="About me picture"
              className="w-56 h-72 object-cover rounded-xl shadow-xl ring-1 ring-neutral-500/30
              transition-transform duration-300 ease-out hover:-translate-y-1
              "
            ></img>
          </div>
          <div
            className="mx-auto w-full max-w-7xl rounded-2xl border 
          border-neutral-500/30 bg-gradient-to-r 
          from-blue-400 to-blue-600 py-16 px-10 pt-32
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
    </main>
  );
}
