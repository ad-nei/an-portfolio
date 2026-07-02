import { about } from "@/lib/data";
import { FadeIn } from "./ui/fade-in";
import { Heading } from "./ui/heading";
import { Section } from "./ui/section";

export function About() {
  return (
    <Section id="about">
      <Heading eyebrow="About" ja="自己紹介" en="About" />
      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_260px]">
        <FadeIn className="flex flex-col gap-5">
          {about.paragraphsJa.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
          <p className="mt-2 font-en text-sm leading-relaxed text-muted-foreground">
            {about.summaryEn}
          </p>
        </FadeIn>

        <FadeIn
          delay={100}
          className="flex flex-col gap-4 border-t border-border pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0"
        >
          <span className="font-en text-xs uppercase tracking-wide text-muted-foreground">
            Highlights
          </span>
          <ul className="flex flex-col gap-4">
            {about.highlights.map((item) => (
              <li key={item.ja} className="flex flex-col gap-0.5">
                <span className="text-sm text-foreground">{item.ja}</span>
                <span className="font-en text-xs text-muted-foreground">{item.en}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
