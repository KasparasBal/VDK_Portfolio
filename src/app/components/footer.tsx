import styles from "./footer.module.css";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <div className={styles.footer}>
      <span className={styles.ebdText}>EBD</span>
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
