"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  pageKey: string;
}

export default function PageWrapper({ children, pageKey }: PageWrapperProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (pathname !== pageKey) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [pathname, pageKey]);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0, scale: 0.95 }}
      animate={
        isVisible
          ? { x: "0%", opacity: 1, scale: 1 }
          : { x: "-100%", opacity: 0, scale: 0.95 }
      }
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
  );
}
