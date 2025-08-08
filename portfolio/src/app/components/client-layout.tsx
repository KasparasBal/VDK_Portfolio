"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const previousPathname = useRef(pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip animation on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Only animate if we're actually navigating to a different page
    if (previousPathname.current !== pathname) {
      setShouldAnimate(true);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  // Reset animation flag after transition
  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
      }, 600); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={
            shouldAnimate
              ? { x: "100%", opacity: 0, scale: 0.95 }
              : { x: "0%", opacity: 1, scale: 1 }
          }
          animate={{ x: "0%", opacity: 1, scale: 1 }}
          exit={
            shouldAnimate
              ? { x: "-100%", opacity: 0, scale: 0.95 }
              : { x: "0%", opacity: 1, scale: 1 }
          }
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            transformOrigin: "center center",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
