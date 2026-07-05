import { VisualWorkItem } from "@/lib/data";
import { MediaPlaceholder } from "./ui/media-placeholder";

export function VisualWorkCard({ item }: { item: VisualWorkItem }) {
  return (
    <div className="flex flex-col gap-2.5">
      {item.kind === "video" ? (
        item.videoUrl ? (
          <div
            className={`relative mx-auto w-full overflow-hidden rounded-md bg-surface ${
              item.videoAspect === "vertical" ? "aspect-[9/16] max-w-[280px]" : "aspect-video"
            }`}
          >
            <iframe
              src={item.videoUrl}
              title={item.title.ja}
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          <MediaPlaceholder alt={item.title.ja} aspect="video" icon="video" />
        )
      ) : (
        <MediaPlaceholder
          src={item.src}
          alt={item.title.ja}
          aspect="photo"
          icon={item.kind}
        />
      )}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-foreground/90">{item.title.ja}</p>
        <p className="font-en text-xs text-muted-foreground">{item.title.en}</p>
        {item.description && (
          <p className="mt-1 text-xs leading-relaxed text-foreground/60">{item.description.ja}</p>
        )}
      </div>
    </div>
  );
}
