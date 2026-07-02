import { visualWorkCategories } from "@/lib/data";
import { Heading } from "./ui/heading";
import { Section } from "./ui/section";
import { FadeIn } from "./ui/fade-in";
import { VisualWorkCard } from "./visual-work-card";

export function VisualWorks() {
  return (
    <Section id="visual-works">
      <Heading eyebrow="Visual Works" ja="ビジュアルワークス" en="Photography / Video / Design" />
      <div className="mt-14 flex flex-col gap-16">
        {visualWorkCategories.map((category, i) => (
          <FadeIn key={category.id} delay={i * 60}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5 border-b border-border pb-4">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-medium text-foreground">{category.title.ja}</h3>
                  <span className="font-en text-xs uppercase tracking-wide text-muted-foreground">
                    {category.title.en}
                  </span>
                </div>
                <p className="max-w-2xl text-sm text-foreground/75">{category.description.ja}</p>
                <p className="max-w-2xl font-en text-xs text-muted-foreground">
                  {category.description.en}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <VisualWorkCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
