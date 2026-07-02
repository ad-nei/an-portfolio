type HeadingProps = {
  eyebrow?: string;
  ja: string;
  en: string;
  align?: "left" | "center";
  size?: "lg" | "md";
};

export function Heading({ eyebrow, ja, en, align = "left", size = "lg" }: HeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const jaSize = size === "lg" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl";

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {eyebrow && (
        <span className="font-en text-xs tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className={`${jaSize} font-medium tracking-tight text-foreground`}>{ja}</h2>
      <p className="font-en text-sm text-muted-foreground">{en}</p>
    </div>
  );
}
