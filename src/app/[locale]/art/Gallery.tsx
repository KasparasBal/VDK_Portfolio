"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./art.module.css";
import SvgIcon from "@/app/components/svg-icon";

type GalleryItem = {
  id: number;
  thumbSrc: string;
  fullSrc: string;
  blurSrc?: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  // Close lightbox with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Aside panel disabled for now; details generation removed

  return (
    <>
      <section className={styles.viewportStatic}>
        <div className={styles.masonry}>
          {items.map((art) => (
            <div key={art.id} className={styles.masonryItem}>
              <button
                className={styles.imageButton}
                onClick={() => setSelected(art.id)}
                aria-label={`View Artwork ${art.id}`}
              >
                <Image
                  src={art.thumbSrc}
                  alt={`Artwork ${art.id}`}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={styles.image}
                  priority={art.id <= 2}
                  placeholder={art.blurSrc ? "blur" : undefined}
                  blurDataURL={art.blurSrc}
                />
              </button>
              {/*
              <button
                className={styles.infoButton}
                onClick={() => {
                  // Open aside only; do not trigger/enlarge the image
                  setSelected(art.id);
                  setIsInfoOpen(true);
                }}
                aria-label={`${t.artPage?.details ?? "Details"}: Artwork ${art.id}`}
              >
                <SvgIcon
                  src="/read-cv-logo-fill.svg"
                  width={24}
                  height={24}
                  className={styles.infoIcon}
                />
              </button>
              */}
            </div>
          ))}
        </div>
      </section>

      {selected !== null && (
        <div
          className={`${styles.lightbox} ${styles.lightboxVisible}`}
          onClick={() => setSelected(null)}
        >
          <button
            className={styles.lightboxClose}
            aria-label="Close"
            onClick={() => setSelected(null)}
          >
            <SvgIcon src="/x-circle.svg" width={28} height={28} />
          </button>
          <div className={styles.lightboxInner}>
            <div className={styles.spinner} />
            <Image
              src={
                items.find((a) => a.id === selected)?.fullSrc ||
                "/placeholder.jpg"
              }
              alt={`Artwork ${selected}`}
              fill
              sizes="100vw"
              className={styles.lightboxImage}
              placeholder={
                items.find((a) => a.id === selected)?.blurSrc
                  ? "blur"
                  : undefined
              }
              blurDataURL={items.find((a) => a.id === selected)?.blurSrc}
              onLoadingComplete={() => {
                const s = document.querySelector(
                  `.${styles.spinner}`
                ) as HTMLElement | null;
                if (s) s.style.display = "none";
              }}
            />
          </div>
        </div>
      )}

      {/* Temporarily disabled aside info panel until descriptions are ready
      {isInfoOpen && selected !== null && (
        <>
          <div
            className={`${styles.asideBackdrop} ${styles.asideBackdropVisible}`}
            onClick={() => {
              setIsInfoOpen(false);
              setSelected(null);
            }}
          />
          <aside
            className={`${styles.infoPanel} ${styles.infoPanelOpen}`}
            role="dialog"
            aria-modal="true"
          >
            <div className={styles.infoHeader}>
              <h3 className={styles.infoTitle}>{`Artwork ${selected}`}</h3>
              <button
                className={styles.closeBtn}
                aria-label="Close"
                onClick={() => {
                  setIsInfoOpen(false);
                  setSelected(null);
                }}
              />
            </div>
            <div className={styles.infoContent}>
              <div className={styles.infoThumbWrap}>
                <Image
                  src={
                    items.find((a) => a.id === selected)?.thumbSrc ||
                    "/placeholder.jpg"
                  }
                  alt={`Thumb ${selected}`}
                  fill
                  sizes="300px"
                  className={styles.infoThumb}
                />
              </div>
              <div className={styles.sections}>
                {(() => {
                  const details = getArtworkDetails(selected);
                  return [
                    { key: "medium", title: t.artPage?.medium, content: details.medium },
                    { key: "idea", title: t.artPage?.idea, content: details.idea },
                    { key: "meaning", title: t.artPage?.meaning, content: details.meaning },
                    { key: "inspiration", title: t.artPage?.inspiration, content: details.inspiration },
                  ];
                })().map(({ key, title, content }) => (
                  <div key={key} className={styles.section}>
                    <button className={styles.sectionHeader} onClick={() => toggle(key)}>
                      <span className={styles.sectionTitle}>{title}</span>
                      <span className={`${styles.chevron} ${expanded.includes(key) ? styles.expanded : ""}`}>
                        &gt;
                      </span>
                    </button>
                    {expanded.includes(key) && (
                      <div className={styles.sectionContent}>
                        <p>{content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </>
      )}
      */}
    </>
  );
}
