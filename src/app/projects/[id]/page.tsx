import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./project.module.css";
import Footer from "../../components/footer";
import { useI18n } from "@/i18n/I18nProvider";

// Sample project data - replaced by dictionary-driven data when used via overlay
const projectsData = {
  1: {
    title: "Brand Identity Design",
    category: "Design",
    brief:
      "Creating a cohesive brand identity that reflects the company's innovative spirit while maintaining professional credibility. The challenge was to balance modern aesthetics with timeless appeal.",
    design:
      "The design approach focused on minimalism and clarity. Using a limited color palette of deep blues and crisp whites, we developed a visual language that speaks to both technical expertise and creative innovation.",
    challenges:
      "The main challenge was creating a brand that could scale across multiple platforms while maintaining consistency. We needed to ensure the identity worked equally well in digital and print applications.",
    thoughts:
      "This project pushed me to think beyond traditional branding approaches. The intersection of technology and creativity required a nuanced understanding of both worlds.",
    results:
      "The rebrand resulted in a 40% increase in client inquiries and significantly improved brand recognition. The client reported enhanced confidence in their market positioning.",
    image: "/project1-hero.png", // Replace with actual image path
  },
  2: {
    title: "Layers.lt",
    category: "Web",
    brief:
      "Developing a modern e-commerce platform that prioritizes user experience while maintaining high performance standards. The goal was to create an intuitive shopping experience that drives conversions.",
    design:
      "The design emphasizes clean product presentation with subtle animations that guide user attention. We implemented a mobile-first approach with seamless responsive transitions.",
    challenges:
      "Balancing visual appeal with loading speed was crucial. We had to optimize images and animations without compromising the premium feel of the brand.",
    thoughts:
      "This project reinforced the importance of user testing. Several design decisions were revised based on user feedback, ultimately leading to a more successful outcome.",
    results:
      "The new platform achieved a 65% increase in conversion rates and 50% reduction in cart abandonment. Customer satisfaction scores improved significantly.",
    image: "/project2-hero.png",
  },
  3: {
    title: "Digital Art Collection",
    category: "Art",
    brief:
      "Exploring the intersection of traditional artistic principles with digital mediums. This series examines how modern technology can express timeless human emotions and experiences.",
    design:
      "The collection utilizes vibrant color palettes and organic shapes to create emotional resonance. Each piece is carefully composed to evoke specific feelings while maintaining visual harmony.",
    challenges:
      "The challenge was translating physical art concepts into digital formats while preserving the emotional impact. Technical limitations required creative problem-solving.",
    thoughts:
      "This personal project allowed me to explore pure creative expression. It reminded me why I fell in love with art in the first place and influenced my approach to commercial work.",
    results:
      "The collection was featured in several digital art exhibitions and generated significant social media engagement. It opened doors to new creative opportunities and collaborations.",
    image: "/project3-hero.png",
  },
  4: {
    title: "Mobile App UI/UX",
    category: "Design",
    brief:
      "Designing a healthcare mobile application that makes medical information accessible and actionable. The focus was on creating an interface that reduces anxiety while providing comprehensive functionality.",
    design:
      "The interface uses calming colors and clear typography to create a sense of trust and reliability. Information architecture was carefully planned to minimize cognitive load for users in stressful situations.",
    challenges:
      "Balancing comprehensive functionality with simplicity was the primary challenge. We needed to present complex medical information in digestible formats without overwhelming users.",
    thoughts:
      "This project highlighted the responsibility designers have when creating tools that impact people's health and wellbeing. Every decision needed careful consideration of user psychology.",
    results:
      "User testing showed 80% improvement in task completion rates and significantly reduced user stress levels. The app received positive feedback from both patients and healthcare providers.",
    image: "/project4-hero.png",
  },
};
// @ts-expect-error fornow
export default function ProjectDetail({ params }) {
  const { t } = useI18n();
  const projectId = parseInt(params.id);
  // @ts-expect-error fornow
  const project = projectsData[projectId];

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className={styles.projectHero}>
        <div className={styles.container}>
          <div className={styles.backButton}>
            <Link href="/projects" className={styles.backLink}>
              <span className={styles.arrow}>←</span>
            </Link>
          </div>

          <div className={styles.projectHeader}>
            <h1 className={styles.projectTitle}>PROJECT</h1>
            <span className={styles.caseStudy}>{t.overlay.caseStudy}</span>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.briefIntro}>{project.brief}</p>
            </div>
            <div className={styles.heroImage}>
              {/* Placeholder for project hero image */}
              <div className={styles.imagePlaceholder}>
                <span>{project.category.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projectContent}>
        <div className={styles.container}>
          <div className={styles.contentSections}>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>BRIEF</h2>
                <span className={styles.sectionArrow}>→</span>
              </div>
              <div className={styles.sectionContent}>
                <p>{project.brief}</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>DESIGN</h2>
                <span className={styles.sectionArrow}>→</span>
              </div>
              <div className={styles.sectionContent}>
                <p>{project.design}</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>CHALLENGES</h2>
                <span className={styles.sectionArrow}>→</span>
              </div>
              <div className={styles.sectionContent}>
                <p>{project.challenges}</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>THOUGHTS</h2>
                <span className={styles.sectionArrow}>→</span>
              </div>
              <div className={styles.sectionContent}>
                <p>{project.thoughts}</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>RESULTS</h2>
                <span className={styles.sectionArrow}>→</span>
              </div>
              <div className={styles.sectionContent}>
                <p>{project.results}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
