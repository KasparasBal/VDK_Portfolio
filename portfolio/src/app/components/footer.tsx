import styles from "./footer.module.css";

export default function Home() {
  return (
    <div className={styles.footer}>
      <span className={styles.ebdText}>EBD</span>
      <p className={styles.footerText}>
        KASPARAS BALYS <br /> 2025.
      </p>
      <p className={styles.footerText}>
        DESIGN/WEB/ART <br />
        PORTFOLIO
      </p>
    </div>
  );
}
