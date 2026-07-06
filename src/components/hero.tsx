import Link from "next/link";
import { FadeIn } from "./ui/fade-in";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <HeroBackground />
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-28 sm:px-8 sm:py-36">
        <FadeIn>
          <span className="font-en text-xs uppercase tracking-[0.3em] text-accent">
            Portfolio
          </span>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="text-6xl font-medium tracking-tight text-foreground sm:text-8xl">
            {siteConfig.name}
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="flex flex-col gap-1">
            <p className="text-lg text-foreground sm:text-xl">{siteConfig.titleJa}</p>
            <p className="font-en text-sm text-muted-foreground sm:text-base">
              {siteConfig.titleEn}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={240}>
          <div className="flex max-w-xl flex-col gap-1.5 border-l border-accent/40 pl-4">
            <p className="text-base text-foreground/90 sm:text-lg">{siteConfig.catchJa}</p>
            <p className="font-en text-sm text-muted-foreground">{siteConfig.catchEn}</p>
          </div>
        </FadeIn>

        <FadeIn delay={280}>
          <div className="flex max-w-xl flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xs uppercase tracking-wide text-foreground/70">
                できること
              </span>
              <span className="font-en text-[11px] uppercase tracking-wide text-muted-foreground">
                What I Do
              </span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {siteConfig.heroHighlightsJa.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-foreground/80 sm:text-base">
                  <span aria-hidden="true" className="text-accent">
                    ・
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-en text-xs text-muted-foreground sm:text-sm">
              {siteConfig.heroHighlightsEn}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={360}>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              プロジェクトを見る
              <span className="ml-2 font-en text-xs opacity-80">Projects</span>
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              お問い合わせ
              <span className="ml-2 font-en text-xs text-muted-foreground">Contact</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// 静かで上品な背景演出のプレースホルダー。
// 実写真/動画に差し替える場合は、この div を <Image fill .../> や <video> に置き換える。
function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%), radial-gradient(circle at 85% 0%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 50%)",
      }}
    />
  );
}
