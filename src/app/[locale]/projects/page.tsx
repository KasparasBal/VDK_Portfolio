"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/projects/projects.module.css";
import Footer from "../../components/footer";
import ProjectOverlay from "../../components/project-overlay";
import { useI18n } from "@/i18n/I18nProvider";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  brief: string;
  design: string;
  challenges: string;
  thoughts: string;
  results: string;
}

export default function Projects() {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastWheelTimeRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [radius, setRadius] = useState(300);

  useEffect(() => {
    setIsMounted(true);
    const computeRadius = () => {
      const containerWidth =
        carouselRef.current?.clientWidth || window.innerWidth;
      const nextRadius = Math.max(
        140,
        Math.min(280, Math.floor(containerWidth * 0.35))
      );
      setRadius(nextRadius);
    };
    computeRadius();
    window.addEventListener("resize", computeRadius);
    return () => window.removeEventListener("resize", computeRadius);
  }, []);

  const projects: Project[] = t.projectsData as unknown as Project[];

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoRotating, projects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentIndex(
          (prev) => (prev - 1 + projects.length) % projects.length
        );
        setIsAutoRotating(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsAutoRotating(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projects.length]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTimeRef.current;
      const throttleDelay = 150;
      if (timeSinceLastWheel < throttleDelay) {
        return;
      }
      lastWheelTimeRef.current = now;
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      } else {
        setCurrentIndex(
          (prev) => (prev - 1 + projects.length) % projects.length
        );
      }
      setIsAutoRotating(false);
    };
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("wheel", handleWheel);
      return () => carousel.removeEventListener("wheel", handleWheel);
    }
  }, [projects.length]);

  const handleNumberClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(false);
  };

  const handleMouseEnter = () => setIsAutoRotating(false);
  const handleMouseLeave = () => setIsAutoRotating(true);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
    setIsAutoRotating(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaY = e.clientY - dragStartY;
    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        setCurrentIndex(
          (prev) => (prev - 1 + projects.length) % projects.length
        );
      } else {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
      setIsDragging(false);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartY(e.touches[0]?.clientY ?? 0);
    setIsAutoRotating(false);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    // Prevent the whole page from scrolling while swiping projects
    e.preventDefault();
    e.stopPropagation();
    const currentY = e.touches[0]?.clientY ?? 0;
    const deltaY = currentY - dragStartY;
    if (Math.abs(deltaY) > 40) {
      if (deltaY > 0) {
        setCurrentIndex(
          (prev) => (prev - 1 + projects.length) % projects.length
        );
      } else {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
      setIsDragging(false);
    }
  };
  const handleTouchEnd = () => setIsDragging(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOverlayOpen(true);
  };

  // Prevent background scroll while interacting with carousel on touch devices
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const handler = (e: TouchEvent) => {
      if (isDragging) e.preventDefault();
    };
    el.addEventListener("touchmove", handler, { passive: false });
    return () => el.removeEventListener("touchmove", handler);
  }, [isDragging]);

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className={styles.projectsHero}>
        <div className={styles.container}>
          <div className={styles.titleSection}>
            <h1 className={styles.projectsTitle}>{t.projectsPage.title}</h1>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.projectNumbers}>
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.numberItem} ${
                    index === currentIndex ? styles.activeNumber : ""
                  }`}
                  onClick={() => handleNumberClick(index)}
                >
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            <div
              ref={carouselRef}
              className={styles.carouselContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: "none" }}
            >
              <div className={styles.carouselTrack}>
                {projects.map((project, index) => {
                  const offset =
                    (index - currentIndex + projects.length) % projects.length;
                  const angle = (offset * 360) / projects.length;
                  const z = isMounted
                    ? Math.cos((angle * Math.PI) / 180) * radius
                    : 0;
                  const y = isMounted
                    ? Math.sin((angle * Math.PI) / 180) * radius
                    : 0;
                  const scale = isMounted
                    ? 0.4 + (Math.cos((angle * Math.PI) / 180) + 1) * 0.3
                    : 1;
                  const opacity = isMounted
                    ? 0.4 + (Math.cos((angle * Math.PI) / 180) + 1) * 0.3
                    : 1;
                  const finalScale =
                    hoveredIndex === index ? scale * 1.05 : scale;

                  return (
                    <div
                      key={project.id}
                      className={`${styles.carouselItem} ${
                        index === currentIndex ? styles.activeItem : ""
                      }`}
                      style={{
                        transform: `translate3d(0, ${y}px, ${z}px) scale(${finalScale})`,
                        opacity: opacity,
                        zIndex:
                          hoveredIndex === index
                            ? 1000
                            : Math.round((z || 0) + 300),
                      }}
                      onClick={() => handleProjectClick(project)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className={styles.projectThumbnail}>
                        <div className={styles.projectPlaceholder}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            className={styles.projectImage}
                            fill
                            sizes="(max-width: 480px) 260px, (max-width: 768px) 320px, 500px"
                          />
                        </div>
                        <div className={styles.projectInfo}>
                          <h3 className={styles.projectTitle}>
                            {project.title}
                          </h3>
                          <p className={styles.projectDescription}>
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectOverlay
        isOpen={isOverlayOpen}
        onClose={handleCloseOverlay}
        project={selectedProject}
      />

      <Footer />
    </>
  );
}
