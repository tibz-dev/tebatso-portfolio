import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience} from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Credentials } from "@/components/sections/Credentials";
import { Projects } from "@/components/sections/Projects";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Credentials />
      <Projects />
      <GitHubStats />
      <Contact />
    </>
  );
}