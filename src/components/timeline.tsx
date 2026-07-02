import { timeline } from "@/lib/data";
import { Heading } from "./ui/heading";
import { Section } from "./ui/section";
import { TimelineRow } from "./timeline-row";

export function Timeline() {
  return (
    <Section id="timeline">
      <Heading eyebrow="Timeline" ja="経歴" en="Timeline" />
      <ol className="mt-12 flex flex-col">
        {timeline.map((item, i) => (
          <TimelineRow
            key={`${item.date}-${item.title}`}
            item={item}
            isLast={i === timeline.length - 1}
          />
        ))}
      </ol>
    </Section>
  );
}
