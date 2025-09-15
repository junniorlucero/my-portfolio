import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experiences />
      </main>
    </>
  );
}
