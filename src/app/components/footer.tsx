"use client";

import styles from "./footer.module.css";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const { t } = useI18n();
  return (
    <div className={variant === "light" ? styles.footerLight : styles.footer}>
      <span
        className={variant === "light" ? styles.ebdTextLight : styles.ebdText}
      >
        EBD
      </span>
      <p className={styles.footerText}>
        KASPARAS BALYS <br /> 2025.
      </p>
      <p className={styles.footerText}>
        {t.footer.designWebArt} <br />
        {t.footer.portfolio}
      </p>
    </div>
  );
}
