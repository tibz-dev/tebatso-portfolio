import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience} from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <div className="min-h-screen px-6 text-center text-[var(--color-text-muted)] pt-20">
        More sections coming next…
      </div>
    </>
  );
}