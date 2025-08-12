"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./about-carousel.module.css";

type CarouselImage = {
  src: string;
  alt: string;
};

const ABOUT_PHOTOS: CarouselImage[] = [
  { src: "/about_photos/art_67.jpg", alt: "Artwork 67" },
  { src: "/about_photos/art_85.jpg", alt: "Artwork 85" },
  { src: "/about_photos/art_86.jpg", alt: "Artwork 86" },
  { src: "/about_photos/art_87.jpg", alt: "Artwork 87" },
  { src: "/about_photos/art_88.jpg", alt: "Artwork 88" },
  { src: "/about_photos/art_89.webp", alt: "Artwork 89" },
  { src: "/about_photos/art_90.jpg", alt: "Artwork 90" },
  { src: "/about_photos/art_14.PNG", alt: "Artwork 14" },
  { src: "/about_photos/artwork_81.jpg", alt: "Artwork 81" },
  { src: "/about_photos/unnamed.png", alt: "Artwork Unnamed" },
];

// placeholder util (reserved for future fine-tuning of drag)

export default function AboutCarousel() {
  const images = useMemo(() => ABOUT_PHOTOS, []);
  const count = images.length;

  const rootRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState<number>(320);

  // rotation state
  const rotationRef = useRef<number>(0); // degrees
  const velocityRef = useRef<number>(0); // deg per ms
  const draggingRef = useRef<boolean>(false);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const [, forceRender] = useState(0);

  // auto-rotate loop with inertia
  useEffect(() => {
    const baseSpeed = 0.006; // deg per ms (~21.6 deg/s)
    let raf = 0;
    const step = (ts: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const dt = ts - lastTimeRef.current;
      lastTimeRef.current = ts;
      if (!draggingRef.current) {
        // decay velocity to zero smoothly
        velocityRef.current *= 0.94;
      }
      rotationRef.current +=
        dt * (baseSpeed + (draggingRef.current ? 0 : velocityRef.current));
      forceRender((n) => (n + 1) % 1000000);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // responsive radius
  useEffect(() => {
    const compute = () => {
      const container = rootRef.current;
      if (!container) return;
      const w = container.clientWidth;
      const next = Math.max(140, Math.min(360, Math.floor(w * 0.38)));
      setRadius(next);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    const sensitivity = 0.65; // deg per px - higher for easier drag
    rotationRef.current += dx * sensitivity;
    velocityRef.current = dx * sensitivity * 0.02; // stronger inertia
    forceRender((n) => (n + 1) % 1000000);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div ref={rootRef} className={styles.carouselRoot}>
      <div
        className={styles.carousel}
        style={{ perspective: "1600px", touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {images.map((img, index) => {
          const step = 360 / count;
          const angle = rotationRef.current + index * step;
          const rad = (angle * Math.PI) / 180;
          const x = Math.sin(rad) * radius;
          const z = Math.cos(rad) * radius;
          const facing = -angle;
          const scale = 0.65 + 0.35 * ((Math.cos(rad) + 1) / 2);
          const opacity = 0.55 + 0.45 * ((Math.cos(rad) + 1) / 2);
          return (
            <div
              key={img.src}
              className={styles.item}
              style={{
                // translate(-50%, -50%) keeps each card centered on the carousel's exact middle.
                transform: `translate3d(-50%, -50%, 0) translate3d(${x}px, 0, ${z}px) rotateY(${facing}deg) scale(${scale})`,
                opacity,
              }}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 340px"
                  style={{ objectFit: "cover" }}
                  priority={index < 3}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
