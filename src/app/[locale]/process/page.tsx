"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useI18n } from "@/i18n/I18nProvider";
import Footer from "@/app/components/footer";
import { useState, useCallback } from "react";

export default function ProcessPage() {
  const { t } = useI18n();
  type ProcessDict = {
    title: string;
    subtitle: string;
    heading?: string;
    captions?: { c1: string; c2: string; c3: string; c4: string };
    s1Title?: string;
    s1Body?: string;
    s2Title?: string;
    s2Body?: string;
    s3Title?: string;
    s3Body?: string;
    s4Title?: string;
    s4Body?: string;
    s5Title?: string;
    s5Body?: string;
    s6Title?: string;
    s6Body?: string;
    closingTitle?: string;
    closingBody?: string;
  };
  const d: ProcessDict =
    (t.processPage as ProcessDict) ??
    ({
      title: "Process",
      subtitle: "How this portfolio was crafted",
    } as const);

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const open = useCallback((src: string) => setLightboxSrc(src), []);
  const close = useCallback(() => setLightboxSrc(null), []);

  return (
    <>
      <main className={styles.page}>
        <h1 className={styles.title}>{d.title}</h1>
        {d.subtitle ? <p className={styles.subtitle}>{d.subtitle}</p> : null}

        <div className={styles.grid}>
          <section className={styles.section}>
            <h2>{d.heading ?? "How This Portfolio Was Crafted"}</h2>
            <h3>{d.s1Title ?? "1. Early Beginnings"}</h3>
            <p>
              {d.s1Body ??
                "Right after high school, I studied design for a short time. The experience, however, felt… suppressive. The curriculum reminded me of Soviet-inspired design — rigid, uniform, and resistant to fresh ideas. Creativity seemed like an afterthought, and initiative was rarely encouraged. I felt boxed in, as if design had become only about serving corporate goals. So, I left to search for something else."}
            </p>
            {/* intentionally no image for step 1 */}
          </section>

          <section className={styles.section}>
            <h3>{d.s2Title ?? "2. Rediscovering Design’s Fun Side"}</h3>
            <p>
              {d.s2Body ??
                "Over the years, I began to see that design didn’t have to be lifeless. There’s joy, playfulness, and freedom — if you know when, where, and for whom you’re creating. When I decided to build my first portfolio, I wanted it to be a visual statement: a war between the polished, corporate world of design and the whimsical, sometimes chaotic possibilities of creative web design."}
            </p>
            <div
              className={styles.image}
              onClick={() => open("/process_photos/comparison_selection.png")}
            >
              <Image
                src="/process_photos/comparison_selection.png"
                alt="Comparison selection"
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.caption}>{d.captions?.c1 ?? ""}</p>
          </section>

          <section className={styles.section}>
            <h3>{d.s3Title ?? "3. The First Iteration – Order vs. Chaos"}</h3>
            <p>
              {d.s3Body ??
                "The first version was inspired by the early 2000s internet, when personal websites were everywhere. One half of the portfolio used a clean, modernized Bauhaus-style grid. The other half embraced the anarchy of the early web: irregular layouts, bold color clashes, and unrestrained creativity."}
            </p>
            <div className={styles.imageRow}>
              <div
                className={styles.image}
                onClick={() => open("/process_photos/comparison_1.png")}
              >
                <Image
                  src="/process_photos/comparison_1.png"
                  alt="Comparison 1"
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                className={styles.image}
                onClick={() => open("/process_photos/comparison_2.png")}
              >
                <Image
                  src="/process_photos/comparison_2.png"
                  alt="Comparison 2"
                  fill
                  sizes="(max-width: 720px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <p className={styles.caption}>{d.captions?.c1 ?? ""}</p>
          </section>

          <section className={styles.section}>
            <h3>
              {d.s4Title ?? "4. The Second Iteration – Grunge & Anti-Design"}
            </h3>
            <p>
              {d.s4Body ??
                "I wasn’t done exploring. The next iteration kept the 2000s influence but leaned harder into grunge and anti-design aesthetics — raw textures, clashing typography, and the visual language of rebellion. This version was my protest against the growing trend of replacing human creativity with AI-generated content. I wanted it to feel like a rallying cry for creative freedom, a reminder that creation should be for joy, not just efficiency."}
            </p>
            <div
              className={styles.image}
              onClick={() => open("/process_photos/grunge_design_variant.png")}
            >
              <Image
                src="/process_photos/grunge_design_variant.png"
                alt="Grunge design variant"
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.caption}>{d.captions?.c2 ?? ""}</p>
          </section>

          <section className={styles.section}>
            <h3>{d.s5Title ?? "5. Why I Moved On"}</h3>
            <p>
              {d.s5Body ??
                "As much as I loved its energy, the grunge-heavy version lacked the readability and structure I wanted — especially for the academic setting I was applying to. It didn’t strike the balance between clarity and creativity that I was looking for."}
            </p>
            <div className={styles.thumbGrid}>
              <div
                className={styles.thumb}
                onClick={() =>
                  open("/process_photos/inbetween_idea_generation.png")
                }
              >
                <Image
                  src="/process_photos/inbetween_idea_generation.png"
                  alt="In-between idea generation"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className={styles.thumb}
                onClick={() => open("/process_photos/Idea_generation_step.png")}
              >
                <Image
                  src="/process_photos/Idea_generation_step.png"
                  alt="Idea generation step 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className={styles.thumb}
                onClick={() =>
                  open("/process_photos/Idea_generation_step-2.png")
                }
              >
                <Image
                  src="/process_photos/Idea_generation_step-2.png"
                  alt="Idea generation step 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className={styles.thumb}
                onClick={() => open("/process_photos/logo_moodboard.png")}
              >
                <Image
                  src="/process_photos/logo_moodboard.png"
                  alt="Logo moodboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <p className={styles.caption}>{d.captions?.c3 ?? ""}</p>
          </section>

          <section className={styles.section}>
            <h3>
              {d.s6Title ??
                "6. The Final Iteration – Clean Structure, Bold Personality"}
            </h3>
            <p>
              {d.s6Body ??
                "The portfolio you see now is the result of that search. It’s clean and structured, built on an invisible grid for clarity — but with bold visual statements. Fonts vary for diversity, subtle animations keep the viewer engaged, and a touch of early-2000s nostalgia lives on through moving CDs, floppy disks, and playful easter eggs. This version feels like me: professional enough for serious consideration, but still brimming with curiosity and character."}
            </p>
            <div
              className={styles.image}
              onClick={() => open("/process_photos/final_design_vision.png")}
            >
              <Image
                src="/process_photos/final_design_vision.png"
                alt="Final design vision"
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={styles.caption}>{d.captions?.c4 ?? ""}</p>
          </section>

          <section className={styles.section}>
            <h3>{d.closingTitle ?? "Closing Note"}</h3>
            <p>
              {d.closingBody ??
                "This portfolio is more than a gallery — it’s a personal journey. Each stage reflects a moment in my relationship with design, from disillusionment to rediscovery. And it’s only the beginning."}
            </p>
          </section>
        </div>
        {lightboxSrc && (
          <>
            <div
              className={`${styles.lightboxBackdrop} ${styles.lightboxBackdropVisible}`}
              onClick={close}
            />
            <div className={styles.lightboxContent} onClick={close}>
              <button
                className={styles.lightboxClose}
                aria-label="Close"
                onClick={close}
              >
                ✕
              </button>
              <div className={styles.lightboxInner}>
                <Image
                  src={lightboxSrc}
                  alt="Enlarged"
                  fill
                  sizes="100vw"
                  className={styles.lightboxImage}
                />
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
