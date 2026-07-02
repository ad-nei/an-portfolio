import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-en">
          &copy; {year} {siteConfig.name}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-en transition-colors hover:text-accent"
        >
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
