"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectImageGalleryProps = {
  gallery: GalleryItem[];
  projectName: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

export function ProjectImageGallery({
  gallery,
  projectName,
}: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dragState = useRef<{
    dragging: boolean;
    startX: number;
    startY: number;
    baseX: number;
    baseY: number;
  }>({ dragging: false, startX: 0, startY: 0, baseX: 0, baseY: 0 });

  const isOpen = selectedIndex !== null;
  const selectedItem =
    selectedIndex !== null ? gallery[selectedIndex] : null;
  const hasMultiple = gallery.length > 1;

  const openAt = useCallback((index: number) => {
    setSelectedIndex(index);
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (gallery.length === 0) return;
      const normalized =
        ((index % gallery.length) + gallery.length) % gallery.length;
      setSelectedIndex(normalized);
      setZoom(MIN_ZOOM);
      setOffset({ x: 0, y: 0 });
    },
    [gallery.length],
  );

  const goNext = useCallback(() => {
    if (!hasMultiple || selectedIndex === null) return;
    goTo(selectedIndex + 1);
  }, [goTo, hasMultiple, selectedIndex]);

  const goPrev = useCallback(() => {
    if (!hasMultiple || selectedIndex === null) return;
    goTo(selectedIndex - 1);
  }, [goTo, hasMultiple, selectedIndex]);

  const close = useCallback(() => {
    setSelectedIndex(null);
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((prev) => {
      const next = Math.max(MIN_ZOOM, prev - ZOOM_STEP);
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(MIN_ZOOM);
    setOffset({ x: 0, y: 0 });
  }, []);

  // Escape fecha + setas navegam + trava rolagem do documento enquanto aberto.
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (!hasMultiple) return;
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, goNext, goPrev, hasMultiple]);

  // Foco: ao abrir vai para fechar; ao fechar volta para a miniatura.
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else if (selectedIndex === null) {
      // `close` já executado; o foco volta via handler abaixo.
    }
  }, [isOpen, selectedIndex]);

  const handleCloseAndRestoreFocus = useCallback(() => {
    const index = selectedIndex;
    close();
    // Restaura após o modal desmontar.
    requestAnimationFrame(() => {
      if (index !== null) triggerRefs.current[index]?.focus();
    });
  }, [close, selectedIndex]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= MIN_ZOOM) return;
    dragState.current = {
      dragging: true,
      startX: event.clientX,
      startY: event.clientY,
      baseX: offset.x,
      baseY: offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.dragging || zoom <= MIN_ZOOM) return;
    const dx = event.clientX - dragState.current.startX;
    const dy = event.clientY - dragState.current.startY;
    // Limite proporcional ao zoom para evitar perder a imagem.
    const limit = 240 * zoom;
    setOffset({
      x: Math.max(-limit, Math.min(limit, dragState.current.baseX + dx)),
      y: Math.max(-limit, Math.min(limit, dragState.current.baseY + dy)),
    });
  };

  const endDrag = () => {
    dragState.current.dragging = false;
  };

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <section className="mt-10" aria-label="Galeria de imagens do projeto">
        <h2 className="mb-5 font-display text-2xl font-semibold text-ink">
          Galeria do projeto
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-lg border border-base-border"
            >
              <button
                ref={(el) => {
                  triggerRefs.current[index] = el;
                }}
                type="button"
                onClick={() => openAt(index)}
                aria-label={`Ampliar imagem: ${item.alt}`}
                className="
                  relative
                  block
                  aspect-video
                  w-full
                  cursor-zoom-in
                  focus-visible:outline-none
                "
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </button>

              {item.caption && (
                <figcaption className="px-4 py-3 text-sm text-ink-muted">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>

      {isOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
          onClick={handleCloseAndRestoreFocus}
          data-testid="gallery-overlay"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-gallery-dialog-title"
            onClick={(event) => event.stopPropagation()}
            className="
              flex
              h-[94vh]
              max-h-[94vh]
              min-h-0
              w-full
              max-w-[96vw]
              flex-col
              overflow-hidden
              rounded-lg
              border
              border-base-border
              bg-base-surface
            "
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-base-border px-3 py-2">
              <h2
                id="project-gallery-dialog-title"
                className="truncate text-sm text-ink"
              >
                {projectName} — {selectedItem.alt}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseAndRestoreFocus}
                aria-label="Fechar visualização da imagem"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-base-border
                  p-2
                  text-ink-muted
                  hover:border-signal
                  hover:text-signal
                "
              >
                <X size={16} />
              </button>
            </div>

            <div
              className={`relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden bg-base ${
                zoom > MIN_ZOOM ? "cursor-grab active:cursor-grabbing" : ""
              }`}
              style={{ touchAction: zoom > MIN_ZOOM ? "none" : "auto" }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              data-testid="gallery-zoom-area"
            >
              <div
                className="relative h-full min-h-0 w-full motion-safe:transition-transform motion-safe:duration-150"
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                }}
              >
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  sizes="96vw"
                  className="object-contain"
                  priority
                />
              </div>

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      goPrev();
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                    aria-label="Imagem anterior"
                    className="
                      absolute
                      left-2
                      top-1/2
                      z-10
                      inline-flex
                      h-11
                      w-11
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-base-border
                      bg-base-surface/85
                      text-ink
                      backdrop-blur-sm
                      hover:border-signal
                      hover:text-signal
                      sm:left-3
                    "
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      goNext();
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                    aria-label="Próxima imagem"
                    className="
                      absolute
                      right-2
                      top-1/2
                      z-10
                      inline-flex
                      h-11
                      w-11
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-base-border
                      bg-base-surface/85
                      text-ink
                      backdrop-blur-sm
                      hover:border-signal
                      hover:text-signal
                      sm:right-3
                    "
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {selectedItem.caption && (
              <p className="shrink-0 truncate px-3 pt-2 text-sm text-ink-muted">
                {selectedItem.caption}
              </p>
            )}

            <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 px-3 py-2">
              {hasMultiple && selectedIndex !== null && (
                <span
                  aria-live="polite"
                  aria-label={`Imagem ${selectedIndex + 1} de ${gallery.length}`}
                  className="mr-1 font-mono text-xs text-ink-muted"
                  data-testid="gallery-position"
                >
                  {selectedIndex + 1} / {gallery.length}
                </span>
              )}
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoom <= MIN_ZOOM}
                aria-label="Reduzir zoom"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-base-border
                  p-2
                  text-ink-muted
                  hover:border-signal
                  hover:text-signal
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  disabled:hover:border-base-border
                  disabled:hover:text-ink-muted
                "
              >
                <Minus size={16} />
              </button>

              <span
                aria-live="polite"
                aria-label={`Nível de zoom ${Math.round(zoom * 100)} por cento`}
                className="min-w-[4.5rem] text-center font-mono text-xs text-ink-muted"
                data-testid="gallery-zoom-level"
              >
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={zoomIn}
                disabled={zoom >= MAX_ZOOM}
                aria-label="Ampliar zoom"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-base-border
                  p-2
                  text-ink-muted
                  hover:border-signal
                  hover:text-signal
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  disabled:hover:border-base-border
                  disabled:hover:text-ink-muted
                "
              >
                <Plus size={16} />
              </button>

              <button
                type="button"
                onClick={resetZoom}
                disabled={zoom === MIN_ZOOM}
                aria-label="Restaurar zoom original"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-base-border
                  px-3
                  py-2
                  font-mono
                  text-xs
                  text-ink-muted
                  hover:border-signal
                  hover:text-signal
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  disabled:hover:border-base-border
                  disabled:hover:text-ink-muted
                "
              >
                <RotateCcw size={14} />
                100%
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
