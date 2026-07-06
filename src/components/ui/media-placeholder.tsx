import Image from "next/image";

type Aspect = "video" | "square" | "portrait" | "photo" | "calendar";

const aspectClass: Record<Aspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  photo: "aspect-[4/3]",
  calendar: "aspect-[3/2]",
};

type IconKind = "photo" | "video" | "design";

type MediaPlaceholderProps = {
  src?: string;
  alt: string;
  aspect?: Aspect;
  icon?: IconKind;
  className?: string;
};

// src が未指定の場合は破線枠のプレースホルダーを表示する。
// 素材差し替え時は data.ts の該当 src / videoUrl に値を入れるだけでよい。
export function MediaPlaceholder({
  src,
  alt,
  aspect = "photo",
  icon = "photo",
  className = "",
}: MediaPlaceholderProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-md bg-surface ${aspectClass[aspect]} ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-md border border-dashed border-border bg-surface ${aspectClass[aspect]} ${className}`}
    >
      <PlaceholderIcon kind={icon} />
      <span className="font-en text-[11px] tracking-wide text-muted-foreground/70">
        coming soon
      </span>
      <span className="sr-only">{alt}</span>
    </div>
  );
}

function PlaceholderIcon({ kind }: { kind: IconKind }) {
  const common = "h-6 w-6 text-muted-foreground/50";

  if (kind === "video") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 17l4.5-4.5 3 3L17 11l3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
