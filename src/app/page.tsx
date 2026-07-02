import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";
import { VisualWorks } from "@/components/visual-works";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <VisualWorks />
      <About />
      <Timeline />
      <Contact />
    </>
  );
}
