import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "accent";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const toneClass =
    tone === "accent"
      ? "border-accent/30 bg-accent/10 text-accent"
      : "border-border bg-surface text-muted-foreground";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-en text-[11px] tracking-wide ${toneClass}`}
    >
      {children}
    </span>
  );
}
