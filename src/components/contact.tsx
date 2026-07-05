import { siteConfig } from "@/lib/data";
import { FadeIn } from "./ui/fade-in";
import { Heading } from "./ui/heading";
import { Section } from "./ui/section";

export function Contact() {
  return (
    <Section id="contact">
      <Heading eyebrow="Get in touch" ja="連絡先" en="Contact" />
      <FadeIn className="mt-10 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">
            お仕事のご相談・ご連絡はこちらまでお願いいたします。
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="w-fit font-en text-xl text-foreground transition-colors hover:text-accent sm:text-2xl"
          >
            {siteConfig.email}
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
