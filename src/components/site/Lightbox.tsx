import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export type LightboxImage = { src: string; alt: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onIndexChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  if (index === null) return null;
  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-100 flex flex-col bg-background/97 backdrop-blur-sm"
    >
      <div className="container-x flex h-20 items-center justify-between">
        <span className="label-xs text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="grid size-11 place-items-center border border-border-strong transition-colors hover:border-accent hover:text-accent"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 pb-6">
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[76vh] w-auto max-w-full object-contain"
        />
      </div>

      <div className="container-x flex items-center justify-between pb-8">
        <p className="max-w-md text-sm text-muted-foreground">{current.alt}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="grid size-11 place-items-center border border-border-strong transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="grid size-11 place-items-center border border-border-strong transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
