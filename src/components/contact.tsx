import { siteConfig, socialLinks } from "@/lib/data";
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

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) =>
            link.href ? (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 font-en text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.id}
                aria-disabled="true"
                className="cursor-not-allowed rounded-full border border-dashed border-border px-4 py-2 font-en text-xs text-muted-foreground/60"
              >
                {link.label}
              </span>
            )
          )}
        </div>
      </FadeIn>
    </Section>
  );
}
