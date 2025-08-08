"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./project-overlay.module.css";

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
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Prevent body and html scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overlay-open");
      document.documentElement.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
      document.documentElement.classList.remove("overlay-open");
    }

    return () => {
      document.body.classList.remove("overlay-open");
      document.documentElement.classList.remove("overlay-open");
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  if (!isOpen || !project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.backButton} onClick={onClose}>
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
            <h1 className={styles.projectTitle}>PROJECT</h1>
            <h2 className={styles.caseStudyTitle}>CASE STUDY</h2>
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
              { key: "brief", title: "BRIEF", content: project.brief },
              { key: "design", title: "DESIGN", content: project.design },
              {
                key: "challenges",
                title: "CHALLENGES",
                content: project.challenges,
              },
              { key: "thoughts", title: "THOUGHTS", content: project.thoughts },
              { key: "results", title: "RESULTS", content: project.results },
            ].map(({ key, title, content }) => (
              <div key={key} className={styles.section}>
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
