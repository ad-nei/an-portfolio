"use client";

import { useEffect, useRef, useState } from "react";
import { TimelineItem } from "@/lib/data";

export function TimelineRow({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`relative flex gap-6 pb-10 transition-all duration-700 ease-out last:pb-0 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
        {!isLast && <span className="w-px flex-1 bg-border" />}
      </div>
      <div className="flex flex-col gap-1 pb-2">
        <span className="font-en text-xs tracking-wide text-muted-foreground">
          {item.dateEn} ・ {item.date}
        </span>
        <span className="text-base text-foreground">{item.title}</span>
        <span className="font-en text-xs text-muted-foreground">{item.titleEn}</span>
      </div>
    </li>
  );
}
