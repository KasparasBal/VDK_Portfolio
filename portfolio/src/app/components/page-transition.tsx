"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pathname);
  const [isNavigating, setIsNavigating] = useState(false);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setIsNavigating(true);
      // Update the displayed page after a brief delay
      const timer = setTimeout(() => {
        setCurrentPage(pathname);
        previousPathname.current = pathname;
        setIsNavigating(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

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
          key={currentPage}
          initial={{
            x: "100%",
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            x: "0%",
            opacity: 1,
            scale: 1,
          }}
          exit={{
            x: "-100%",
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
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
