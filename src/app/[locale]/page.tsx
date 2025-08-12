"use client";
import Image from "next/image";
import HeroImage from "../../../public/Hero.png";
import Logo from "../../../public/logo.svg";
import styles from "../page.module.css";
import Link from "next/link";
import Footer from "../components/footer";
import FloppyGuard from "../../../public/floppyGuard.png";
import FloppyDisk from "../../../public/Floppy_disk.png";
import CD from "../../../public/disk.png";
import ContactForm from "../components/contact-form";
import { useI18n } from "@/i18n/I18nProvider";

export default function Home() {
  const { t, locale } = useI18n();
  const base = `/${locale}`;
  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="hero" className={styles.hero}>
        <Image
          className={styles.heroImage}
          src={HeroImage}
          alt="Kasparas Balys - Designer"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          priority
        />
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutText}>{t.home.about}</div>
          <div className={styles.aboutRightColumn}>
            <div className={styles.aboutRowOne}>
              <div className={styles.logoGroup}>
                <Image className={styles.logo} src={Logo} alt="EBD logo" />
              </div>
              <div className={styles.aspireGroup}>
                <div className={styles.aspireText}>{t.home.aspirePrefix}</div>
                <div className={styles.titleText} data-text={t.home.designer}>
                  {t.home.designer}
                </div>
              </div>
            </div>
            <div className={styles.aboutRowTwo}>
              <p className={styles.introductionText}>{t.home.intro1}</p>
              <p className={styles.introductionText}>{t.home.intro2}</p>
            </div>
            <div className={styles.aboutRowThree}>
              <Link href={`${base}/about`} className={styles.moreLink}>
                {t.home.more} <span data-hover=">">&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projects}>
        <div className={styles.projectContainer}>
          <div className={styles.projectRowOne}>
            <div className={styles.projectInnerColumnOne}>
              <Link href={`${base}/process`} className={styles.floppy}>
                <Image
                  className={styles.floppyDisk}
                  src={FloppyDisk}
                  alt="Floppy Disk"
                />
                <Image
                  className={styles.floppyGuard}
                  src={FloppyGuard}
                  alt="Floppy Guard"
                />
                <span className={styles.designText}>{t.home.process}</span>
              </Link>
            </div>
            <div className={styles.projectInnerColumnTwo}>
              <Link
                href={`${base}/projects?filter=web`}
                className={styles.diskContainer}
              >
                <span className={styles.webText}>{t.home.web}</span>
                <Image className={styles.cdImage} src={CD} alt="CD Disk" />
              </Link>
            </div>
          </div>
          <div className={styles.projectRowTwo}>
            <Link href={`${base}/art`}>
              <span>{t.home.art}</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contacts}>
        <div className={styles.contactsContainer}>
          <div className={styles.contactsRowOne}>{t.home.contactTitle}</div>
          <div className={styles.contactsRowTwo}>
            <div className={styles.contactsInnerColumnOne}>
              <ContactForm />
            </div>
            <div className={styles.contactsText}>
              <div className={styles.contactsLinks}>
                <h3>{t.home.links}</h3>
                <ul>
                  <li>
                    <Link href="https://linkedin.com" target="_blank">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com" target="_blank">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com" target="_blank">
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.contactsInformation}>
                <h3>{t.home.information}</h3>
                <ul>
                  <li>+37063027462</li>
                  <li>KasparasBalys@gmail.com</li>
                  <li>Trakai</li>
                </ul>
              </div>
              <div
                className={styles.contactsArrow}
                role="button"
                tabIndex={0}
                onClick={handleBackToTop}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleBackToTop();
                  }
                }}
              >
                <svg className={styles.arrowSvg} viewBox="0 0 24 24">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                <span>{t.home.backToTop}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
