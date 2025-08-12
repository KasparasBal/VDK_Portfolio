"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./art.module.css";
import { useI18n } from "@/i18n/I18nProvider";
import SvgIcon from "@/app/components/svg-icon";

type GalleryItem = {
  id: number;
  thumbSrc: string;
  fullSrc: string;
  blurSrc?: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const { t } = useI18n();
  const [selected, setSelected] = useState<number | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (key: string) => {
    setExpanded((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

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
              <button
                className={styles.infoButton}
                onClick={() => {
                  // Open aside only; do not trigger/enlarge the image
                  setSelected(art.id);
                  setIsInfoOpen(true);
                }}
                aria-label={`${t.artPage?.details ?? "Details"}: Artwork ${
                  art.id
                }`}
              >
                <SvgIcon
                  src="/read-cv-logo-fill.svg"
                  width={24}
                  height={24}
                  className={styles.infoIcon}
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      {selected !== null && !isInfoOpen && (
        <div
          className={`${styles.lightbox} ${styles.lightboxVisible}`}
          onClick={() => setSelected(null)}
        >
          <button className={styles.lightboxClose} aria-label="Close">
            <SvgIcon src="/x-circle.svg" width={28} height={28} />
          </button>
          <div
            className={styles.lightboxInner}
            onClick={(e) => e.stopPropagation()}
          >
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
            />
          </div>
        </div>
      )}

      {isInfoOpen && selected !== null && (
        <>
          <div
            className={`${styles.asideBackdrop} ${styles.asideBackdropVisible}`}
            onClick={() => setIsInfoOpen(false)}
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
                onClick={() => setIsInfoOpen(false)}
              >
                <SvgIcon src="/x-circle.svg" width={24} height={24} />
              </button>
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
              <p className={styles.infoText}>
                {t.artPage?.details ?? "Artwork details"}
              </p>
              <div className={styles.sections}>
                {[
                  {
                    key: "medium",
                    title: t.artPage?.medium,
                    content: "Oil on canvas",
                  },
                  {
                    key: "idea",
                    title: t.artPage?.idea,
                    content: "Exploration of light and shadow.",
                  },
                  {
                    key: "meaning",
                    title: t.artPage?.meaning,
                    content: "Reflects the duality of human emotion.",
                  },
                  {
                    key: "inspiration",
                    title: t.artPage?.inspiration,
                    content: "Inspired by nature and urban geometry.",
                  },
                ].map(({ key, title, content }) => (
                  <div key={key} className={styles.section}>
                    <button
                      className={styles.sectionHeader}
                      onClick={() => toggle(key)}
                    >
                      <span className={styles.sectionTitle}>{title}</span>
                      <span
                        className={`${styles.chevron} ${
                          expanded.includes(key) ? styles.expanded : ""
                        }`}
                      >
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
    </>
  );
}
