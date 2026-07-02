import { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
};

export function Section({ id, children, className = "", bordered = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-border py-20 sm:py-28 ${bordered ? "border-t" : ""} ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">{children}</div>
    </section>
  );
}
