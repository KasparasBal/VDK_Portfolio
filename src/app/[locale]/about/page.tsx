"use client";

import styles from "./page.module.css";
import AboutCarousel from "@/app/components/about-carousel";
import { useI18n } from "@/i18n/I18nProvider";

export default function AboutPage() {
  const { t } = useI18n();
  const d = t.aboutPage ?? {
    title: "About",
    subtitle: "",
    paragraphs: [],
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.heroTitle}>{d.title}</h1>
      {d.subtitle ? <p className={styles.subTitle}>{d.subtitle}</p> : null}

      <section className={styles.carouselSection}>
        <AboutCarousel />
      </section>

      <section className={`${styles.content} ${styles.introBlock}`}>
        {d.paragraphs?.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </main>
  );
}
