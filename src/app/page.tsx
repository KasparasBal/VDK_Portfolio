import Image from "next/image";
import HeroImage from "../../public/Hero.png";
import Logo from "../../public/logo.svg";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "./components/footer";
import FloppyGuard from "../../public/floppyGuard.png";
import FloppyDisk from "../../public/Floppy_disk.png";
import CD from "../../public/disk.png";
import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <>
      {/* -------------------HERO SECTION------------------- */}
      <section id="hero" className={styles.hero}>
        <Image
          className={styles.heroImage}
          src={HeroImage}
          alt="Kasparas Balys - Designer"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          priority
        />
      </section>
      {/* -------------------ABOUT SECTION------------------- */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutText}>ABOUT</div>
          <div className={styles.aboutRightColumn}>
            <div className={styles.aboutRowOne}>
              <div className={styles.logoGroup}>
                <Image className={styles.logo} src={Logo} alt="EBD logo" />
              </div>
              <div className={styles.aspireGroup}>
                <div className={styles.aspireText}>I ASPIRE TO BE A GREAT</div>
                <div className={styles.titleText}>DESIGNER</div>
              </div>
            </div>
            <div className={styles.aboutRowTwo}>
              <p className={styles.introductionText}>
                I have a background in programming & art. <br />I love all kinds
                of approaches to expression & find joy in exploring them.
              </p>
              <p className={styles.introductionText}>
                Although I have a great interest in UI & UX for its
                psychological analysis of the reader, I also immensely enjoy web
                experiences that provide unique experiences.
              </p>
            </div>
            <div className={styles.aboutRowThree}>
              <a href="#" className={styles.moreLink}>
                MORE <span data-hover=">">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------PROJECT SECTION------------------- */}
      <section id="projects" className={styles.projects}>
        <div className={styles.projectContainer}>
          <div className={styles.projectRowOne}>
            <div className={styles.projectInnerColumnOne}>
              <Link href="/projects?filter=design" className={styles.floppy}>
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
                <span className={styles.designText}>
                  DESI
                  <br />
                  GN.
                </span>
              </Link>
            </div>
            <div className={styles.projectInnerColumnTwo}>
              <Link
                href="/projects?filter=web"
                className={styles.diskContainer}
              >
                <span className={styles.webText}>WEB.</span>
                <Image className={styles.cdImage} src={CD} alt="CD Disk" />
              </Link>
            </div>
          </div>
          <div className={styles.projectRowTwo}>
            <Link href="/projects?filter=art">
              <span>ART.</span>
            </Link>
          </div>
        </div>
      </section>
      {/* -------------------CONTACT SECTION------------------- */}
      <section id="contact" className={styles.contacts}>
        <div className={styles.contactsContainer}>
          <div className={styles.contactsRowOne}>TALK?</div>
          <div className={styles.contactsRowTwo}>
            <div className={styles.contactsInnerColumnOne}>
              <ContactForm />
            </div>
            <div className={styles.contactsText}>
              <div className={styles.contactsLinks}>
                <h3>Links</h3>
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
                <h3>Information</h3>
                <ul>
                  <li>+37063027462</li>
                  <li>KasparasBalys@gmail.com</li>
                  <li>Trakai</li>
                </ul>
              </div>
              <div className={styles.contactsArrow}>
                <svg className={styles.arrowSvg} viewBox="0 0 24 24">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                <span>BACK TO TOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------FOOTER------------------- */}
      <Footer />
    </>
  );
}
