import { Bilingual, Project } from "@/lib/data";
import { Badge } from "./ui/badge";
import { FadeIn } from "./ui/fade-in";
import { MediaPlaceholder } from "./ui/media-placeholder";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 80}>
      <article className="grid gap-8 rounded-lg border border-border bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,260px)_1fr]">
        <div className="flex flex-col gap-4">
          <MediaPlaceholder src={project.image} alt={project.title} aspect="photo" />
          <div className="flex flex-wrap items-center gap-2">
            {project.status === "in-progress" && <Badge tone="accent">In Progress</Badge>}
            <span className="font-en text-xs text-muted-foreground">{project.period}</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <header className="flex flex-col gap-1">
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/80">{project.subtitle.ja}</p>
            <p className="font-en text-xs text-muted-foreground">{project.subtitle.en}</p>
          </header>

          <dl className="grid gap-5 sm:grid-cols-3">
            <ProjectDetail label={{ ja: "課題", en: "Challenge" }} text={project.challenge} />
            <ProjectDetail label={{ ja: "アプローチ", en: "Approach" }} text={project.approach} />
            <ProjectDetail label={{ ja: "成果", en: "Result" }} text={project.result} />
          </dl>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              {project.link.label.ja}
              <span className="font-en text-xs">{project.link.label.en}</span>
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  d="M7 17L17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

function ProjectDetail({ label, text }: { label: Bilingual; text: Bilingual }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="flex items-baseline gap-1.5">
        <span className="text-xs font-medium text-accent">{label.ja}</span>
        <span className="font-en text-[10px] uppercase tracking-wide text-muted-foreground">
          {label.en}
        </span>
      </dt>
      <dd className="text-sm leading-relaxed text-foreground/85">{text.ja}</dd>
      <dd className="font-en text-xs leading-relaxed text-muted-foreground">{text.en}</dd>
    </div>
  );
}
