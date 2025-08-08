"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    { href: "/", label: "Home", icon: "/home.svg" },
    { href: "/projects", label: "Projects", icon: "/projects.svg" },
    { href: "/#contact", label: "Contact", icon: "/contact.svg" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // Prevent navigation if clicking on current page
    if (pathname === href || (pathname === "/" && href === "/")) {
      e.preventDefault();
      return;
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && currentHash !== "#contact";
    }
    if (href === "/#contact") {
      return pathname === "/" && currentHash === "#contact";
    }
    return pathname === href;
  };

  return (
    <nav
      className={`${styles.floatingNav} ${isHovered ? styles.revealed : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            <div className={styles.iconContainer}>
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className={styles.icon}
              />
            </div>
            <span className={styles.label}>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
