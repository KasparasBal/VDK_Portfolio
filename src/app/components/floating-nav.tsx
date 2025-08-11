"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import SvgIcon from "./svg-icon";
import styles from "./floating-nav.module.css";

export default function FloatingNav() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          className={styles.home_icon_container}
          width="24"
          height="24"
          viewBox="0 0 119 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="House_icon">
            <rect id="House" width="119" height="119" rx="10" fill="black" />
            <rect
              className={styles.door}
              id="Door"
              x="76"
              y="75"
              width="26"
              height="41"
              rx="5"
              fill="white"
            />
            <g id="Windows">
              <rect
                className={styles.window4}
                id="window4"
                x="13"
                y="20"
                width="21"
                height="20"
                rx="5"
                fill="white"
              />
              <rect
                className={styles.window3}
                id="window3"
                x="39"
                y="20"
                width="21"
                height="20"
                rx="5"
                fill="white"
              />
              <rect
                className={styles.window2}
                id="window2"
                x="39"
                y="45"
                width="21"
                height="20"
                rx="5"
                fill="white"
              />
              <rect
                className={styles.window1}
                id="window1"
                x="13"
                y="45"
                width="21"
                height="20"
                rx="5"
                fill="white"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      href: "/#projects",
      label: "Projects",
      icon: (
        <svg
          className={styles.projects_icon_container}
          width="24"
          height="24"
          viewBox="0 0 123 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Projects_icon">
            <rect
              id="Rectangle4"
              className={styles.rectangle4}
              width="57"
              height="31"
              rx="10"
              fill="black"
            />
            <rect
              className={styles.rectangle3}
              id="Rectangle3"
              y="38"
              width="57"
              height="74"
              rx="10"
              fill="black"
            />
            <rect
              className={styles.rectangle2}
              id="Rectangle2"
              x="66"
              width="57"
              height="74"
              rx="10"
              fill="black"
            />
            <rect
              className={styles.rectangle1}
              id="Rectangle1"
              x="66"
              y="82"
              width="57"
              height="30"
              rx="10"
              fill="black"
            />
          </g>
        </svg>
      ),
    },
    {
      href: "/#contact",
      label: "Contact",
      icon: (
        <svg
          className={styles.contact_icon_container}
          viewBox="0 0 98 73"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="contact-icon">
            <path
              className={styles.bottomTriangle}
              id="BottomTriangle"
              d="M64.351 37.1172L48.6644 49.8311L32.9778 37.1172L0.0878906 73.0001H97.2409L64.351 37.1172Z"
              fill="black"
            />
            <path
              className={styles.leftTriangle}
              d="M26.6648 32.0042L0 10.3926V61.0901L26.6648 32.0042Z"
              fill="black"
            />
            <path
              className={styles.rightTriangle}
              id="Righttriangle"
              d="M70.6699 32.0042L97.3347 61.0901V10.3926L70.6699 32.0042Z"
              fill="black"
            />
            <path
              className={styles.upperTriangle}
              id="Uppertriangle"
              d="M48.6674 39.3909L0.0625 0H97.2764L48.6674 39.3909Z"
              fill="black"
            />
          </g>
        </svg>
      ),
    },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // If navigating to a hash on the home page from elsewhere, allow default.
    // If already on home and clicking a hash, smooth-scroll.
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentHash(`#${id}`);
      return;
    }

    if (pathname === href || (pathname === "/" && href === "/")) {
      e.preventDefault();
      return;
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && currentHash === "";
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && currentHash === href.replace("/", "");
    }
    return pathname === href;
  };

  return (
    <nav className={styles.floatingNav}>
      <div className={styles.navContainer}>
        {/* Navigation items */}
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${
              isActive(item.href) ? styles.active : ""
            }`}
            onClick={(e) => handleNavClick(item.href, e)}
          >
            {item.icon}

            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
