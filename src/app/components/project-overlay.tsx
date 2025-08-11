"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./project-overlay.module.css";
import { useI18n } from "@/i18n/I18nProvider";

interface ProjectOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    brief: string;
    design: string;
    challenges: string;
    thoughts: string;
    results: string;
  } | null;
}

export default function ProjectOverlay({
  isOpen,
  onClose,
  project,
}: ProjectOverlayProps) {
  const { t } = useI18n();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Prevent body and html scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      // Save previous styles
      const prevBodyOverflow = document.body.style.overflow;
      const prevBodyPosition = document.body.style.position;
      const prevBodyWidth = document.body.style.width;
      const prevBodyHeight = document.body.style.height;
      const prevHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.body.style.position = prevBodyPosition;
        document.body.style.width = prevBodyWidth;
        document.body.style.height = prevBodyHeight;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => {
      const isExpanding = !prev.includes(section);
      const next = isExpanding
        ? [...prev, section]
        : prev.filter((s) => s !== section);

      if (isExpanding) {
        // Scroll the opened section into view within the modal
        requestAnimationFrame(() => {
          const target = sectionRefs.current[section];
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }

      return next;
    });
  };

  if (!isOpen || !project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <button
            className={styles.backButton}
            onClick={onClose}
            aria-label={t.overlay.closeAria}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className={styles.titleSection}>
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <h2 className={styles.caseStudyTitle}>{t.overlay.caseStudy}</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Top Section */}
          <div className={styles.topSection}>
            <div className={styles.description}>
              <p>{project.description}</p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className={styles.projectImage}
              />
            </div>
          </div>

          {/* Expandable Sections */}
          <div className={styles.sections}>
            {[
              { key: "brief", title: t.overlay.brief, content: project.brief },
              {
                key: "design",
                title: t.overlay.design,
                content: project.design,
              },
              {
                key: "challenges",
                title: t.overlay.challenges,
                content: project.challenges,
              },
              {
                key: "thoughts",
                title: t.overlay.thoughts,
                content: project.thoughts,
              },
              {
                key: "results",
                title: t.overlay.results,
                content: project.results,
              },
            ].map(({ key, title, content }) => (
              <div
                key={key}
                className={styles.section}
                ref={(el) => {
                  sectionRefs.current[key] = el;
                }}
              >
                <button
                  className={styles.sectionHeader}
                  onClick={() => toggleSection(key)}
                >
                  <span className={styles.sectionTitle}>{title}</span>
                  <span
                    className={`${styles.chevron} ${
                      expandedSections.includes(key) ? styles.expanded : ""
                    }`}
                  >
                    &gt;
                  </span>
                </button>
                {expandedSections.includes(key) && (
                  <div className={styles.sectionContent}>
                    <p>{content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
