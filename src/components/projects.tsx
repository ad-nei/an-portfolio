import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { Heading } from "./ui/heading";
import { Section } from "./ui/section";

export function Projects() {
  return (
    <Section id="projects">
      <Heading eyebrow="Selected Work" ja="プロジェクト" en="Projects" />
      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
