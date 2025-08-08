"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./projects.module.css";
import Footer from "../components/footer";
import ProjectOverlay from "../components/project-overlay";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastWheelTimeRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: "vetinn",
      title: "Vetinn",
      description:
        "A comprehensive veterinary management system designed to streamline clinic operations, patient care, and administrative tasks. The platform provides an intuitive interface for veterinarians to manage appointments, patient records, and treatment plans efficiently.",
      image: "/project_thumbnails/vetinn_thumb.png",
      brief:
        "Create a modern, user-friendly veterinary management system that improves clinic efficiency and patient care quality.",
      design:
        "Clean, medical-grade interface with emphasis on accessibility and quick information retrieval. Color scheme optimized for long viewing periods.",
      challenges:
        "Complex data relationships between patients, treatments, and appointments. Ensuring HIPAA compliance while maintaining usability.",
      thoughts:
        "The balance between comprehensive functionality and simplicity was crucial. Medical software must be both powerful and easy to use under pressure.",
      results:
        "Reduced appointment scheduling time by 40% and improved patient record accuracy by 25%.",
    },
    {
      id: "trt",
      title: "TRT Platform",
      description:
        "A specialized platform for testosterone replacement therapy management, featuring patient monitoring, dosage tracking, and healthcare provider communication tools.",
      image: "/project_thumbnails/trt_thumb.png",
      brief:
        "Develop a secure platform for TRT patients and healthcare providers to manage treatment plans and monitor progress.",
      design:
        "Professional medical interface with clear data visualization and secure communication channels. Emphasis on privacy and accuracy.",
      challenges:
        "Strict medical data security requirements and complex treatment protocol management.",
      thoughts:
        "Medical applications require exceptional attention to detail and user experience, as errors can have serious consequences.",
      results:
        "Improved treatment adherence by 35% and enhanced communication between patients and providers.",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description:
        "A modern, interactive portfolio showcasing design and development work with smooth animations and engaging user experience.",
      image: "/project_thumbnails/portfolio_thumb.png",
      brief:
        "Create a distinctive portfolio that demonstrates both design skills and technical capabilities while providing an engaging user experience.",
      design:
        "Minimalist approach with bold typography and smooth animations. Focus on showcasing work effectively without overwhelming the user.",
      challenges:
        "Balancing visual appeal with performance and ensuring cross-browser compatibility for complex animations.",
      thoughts:
        "Portfolio design should reflect the designer's style while remaining accessible and functional for all users.",
      results:
        "Increased engagement time by 60% and received positive feedback on user experience and visual design.",
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with advanced product filtering, secure payment processing, and comprehensive admin dashboard.",
      image: "/project_thumbnails/ecommerce_thumb.png",
      brief:
        "Build a scalable e-commerce solution with modern UX patterns and robust backend functionality.",
      design:
        "User-centric design with clear product presentation and streamlined checkout process. Mobile-first responsive design.",
      challenges:
        "Complex product catalog management and ensuring smooth payment processing across multiple payment methods.",
      thoughts:
        "E-commerce success depends heavily on reducing friction in the purchase process while maintaining security.",
      results:
        "Increased conversion rate by 28% and reduced cart abandonment by 45%.",
    },
    {
      id: "dashboard",
      title: "Analytics Dashboard",
      description:
        "A comprehensive data visualization platform providing real-time insights and customizable reporting for business intelligence.",
      image: "/project_thumbnails/dashboard_thumb.png",
      brief:
        "Create an intuitive dashboard that transforms complex data into actionable insights for business decision-making.",
      design:
        "Data-focused interface with clear visual hierarchy and interactive charts. Dark theme for extended viewing comfort.",
      challenges:
        "Presenting large datasets clearly without overwhelming users and ensuring real-time data accuracy.",
      thoughts:
        "Effective data visualization requires understanding both the technical aspects and the human factors of information processing.",
      results:
        "Reduced time to insights by 50% and improved data-driven decision making across the organization.",
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, projects.length]);

  // Keyboard navigation
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

  // Mouse wheel navigation with throttling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTimeRef.current;
      const throttleDelay = 150; // Minimum time between wheel events in ms

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

  const handleMouseEnter = () => {
    setIsAutoRotating(false);
  };

  const handleMouseLeave = () => {
    setIsAutoRotating(true);
  };

  // Drag functionality
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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className={styles.projectsHero}>
        <div className={styles.container}>
          {/* PROJECTS title */}
          <div className={styles.titleSection}>
            <h1 className={styles.projectsTitle}>PROJECTS</h1>
          </div>

          <div className={styles.contentSection}>
            {/* Numbered indicators on the left */}
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

            {/* 3D Carousel Container */}
            <div
              ref={carouselRef}
              className={styles.carouselContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <div className={styles.carouselTrack}>
                {projects.map((project, index) => {
                  const offset =
                    (index - currentIndex + projects.length) % projects.length;
                  const angle = (offset * 360) / projects.length;
                  const radius = 300; // Adjust for desired circle size
                  const z = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const scale =
                    0.4 + (Math.cos((angle * Math.PI) / 180) + 1) * 0.3;
                  const opacity =
                    0.4 + (Math.cos((angle * Math.PI) / 180) + 1) * 0.3;

                  // Apply hover scale if this item is being hovered
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
                          hoveredIndex === index ? 1000 : Math.round(z + 300), // Higher z-index when hovered
                      }}
                      onClick={() => handleProjectClick(project)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className={styles.projectThumbnail}>
                        <div className={styles.projectPlaceholder}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className={styles.projectImage}
                          />
                          <div className={styles.projectOverlay}>
                            <span className={styles.projectCategory}>
                              PROJECT
                            </span>
                          </div>
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

      {/* -------------------FOOTER------------------- */}
      <Footer />
    </>
  );
}
