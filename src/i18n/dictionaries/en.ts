import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  nav: {
    home: string;
    projects: string;
    contact: string;
    langShort: string;
    langToggleAria: string;
  };
  home: {
    about: string;
    aspirePrefix: string;
    designer: string;
    more: string;
    process: string;
    projects: string;
    web: string;
    art: string;
    contactTitle: string;
    links: string;
    information: string;
    backToTop: string;
    intro1: string;
    intro2: string;
  };
  form: {
    name: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  overlay: {
    caseStudy: string;
    brief: string;
    design: string;
    challenges: string;
    thoughts: string;
    results: string;
    closeAria: string;
  };
  footer: {
    designWebArt: string;
    portfolio: string;
  };
  projectsPage: {
    title: string;
  };
  projectsData: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    brief: string;
    design: string;
    challenges: string;
    thoughts: string;
    results: string;
  }>;
  artPage?: {
    info: string;
    close: string;
    details: string;
    medium: string;
    idea: string;
    meaning: string;
    inspiration: string;
  };
  aboutPage?: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  processPage?: {
    title: string;
    subtitle: string;
    heading?: string;
    captions: {
      c1: string;
      c2: string;
      c3: string;
      c4: string;
    };
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
};

export const en: Dictionary = {
  nav: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    langShort: "EN",
    langToggleAria: "Switch language to Lithuanian",
  },
  home: {
    about: "ABOUT",
    aspirePrefix: "I ASPIRE TO BE A GREAT",
    designer: "DESIGNER",
    more: "MORE",
    process: "PROCESS",
    projects: "PROJECTS",
    web: "WEB.",
    art: "ART.",
    contactTitle: "TALK?",
    links: "Links",
    information: "Information",
    backToTop: "BACK TO TOP",
    intro1:
      "I have a background in programming & art. I love all kinds of approaches to expression & find joy in exploring them.",
    intro2:
      "Although I have a great interest in UI & UX for its psychological analysis of the reader, I also immensely enjoy web experiences that provide unique experiences.",
  },
  form: {
    name: "Name",
    subject: "Subject",
    message: "Your Message",
    send: "Send",
    sending: "Sending…",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
  },
  overlay: {
    caseStudy: "CASE STUDY",
    brief: "BRIEF",
    design: "DESIGN",
    challenges: "CHALLENGES",
    thoughts: "THOUGHTS",
    results: "RESULTS",
    closeAria: "Close",
  },
  footer: {
    designWebArt: "DESIGN/WEB/ART",
    portfolio: "PORTFOLIO",
  },
  projectsPage: {
    title: "PROJECTS",
  },
  projectsData: [
    {
      id: "vetinn",
      title: "Vetinn",
      description:
        "Family-run veterinary clinic website that invokes a sense of cuteness & care without forsaking professionalism.",
      image: "/project_thumbnails/vetinn_thumb.png",
      brief:
        "Create a modern, user-friendly veterinary management system that improves clinic efficiency and patient care quality.",
      design:
        "Clean, medical-grade interface with emphasis on accessibility and quick information retrieval. Color scheme optimized for long viewing periods.",
      challenges:
        "Complex data relationships between patients, treatments, and appointments. Ensuring privacy while maintaining usability.",
      thoughts:
        "The balance between comprehensive functionality and simplicity was crucial. Medical software must be both powerful and easy to use under pressure.",
      results:
        "Reduced appointment scheduling time by 40% and improved patient record accuracy by 25%.",
    },
    {
      id: "trt",
      title: "TRT Baltic",
      description:
        "A specialized platform for testosterone replacement therapy with advanced forms & a visual language targeted at men.",
      image: "/project_thumbnails/trt_thumb.png",
      brief:
        "Develop a secure platform for TRT patients and healthcare providers to manage treatment plans and monitor progress.",
      design:
        "Professional medical interface with clear data visualization and secure communication channels. Emphasis on privacy and accuracy.",
      challenges:
        "Strict data security requirements and complex treatment protocol management.",
      thoughts:
        "Medical applications require exceptional attention to detail and user experience, as errors can have serious consequences.",
      results:
        "Improved treatment adherence by 35% and enhanced communication between patients and providers.",
    },
    {
      id: "Portfolio",
      title: "Personal Portfolio",
      description:
        "A modern, interactive portfolio showcasing design and development work with smooth animations and engaging user experience.",
      image: "/project_thumbnails/portfolio_thumb.png",
      brief:
        "Create a distinctive portfolio that demonstrates both design skills and technical capabilities while providing an engaging user experience.",
      design:
        "Minimalist approach with bold typography and smooth animations. Focus on showcasing work effectively without overwhelming the user.",
      challenges:
        "Balancing visual appeal with performance and ensuring cross-browser compatibility for complex animations.",
      thoughts:
        "Portfolio design should reflect the designer's style while remaining accessible and functional for all users.",
      results:
        "Increased engagement time by 60% and received positive feedback on user experience and visual design.",
    },
    {
      id: "Ecommerce",
      title: "Layers.lt",
      description:
        "A full-featured online shopping platform with advanced product filtering, secure payments, concise & clear information serving.",
      image: "/project_thumbnails/layers_thumb.png",
      brief:
        "Build a scalable e-commerce solution with modern UX patterns and robust backend functionality.",
      design:
        "User-centric design with clear product presentation and streamlined checkout process. Mobile-first responsive design.",
      challenges:
        "Complex product catalog management and ensuring smooth payment processing across multiple payment methods.",
      thoughts:
        "E-commerce success depends heavily on reducing friction in the purchase process while maintaining security.",
      results:
        "Increased conversion rate by 28% and reduced cart abandonment by 45%.",
    },
    {
      id: "vlkk",
      title: "VL Kineziterapijos Klinika",
      description:
        "Family-run physiotherapy clinic website aiming to reflect professionalism and a responsible approach to the body and clients.",
      image: "/project_thumbnails/vlk_thumb.png",
      brief:
        "Create an intuitive dashboard that transforms complex data into actionable insights for decision-making.",
      design:
        "Data-focused interface with clear visual hierarchy and interactive charts. Dark theme for extended viewing comfort.",
      challenges:
        "Presenting large datasets clearly without overwhelming users and ensuring real-time data accuracy.",
      thoughts:
        "Effective data visualization requires understanding both the technical aspects and the human factors of information processing.",
      results:
        "Reduced time to insights by 50% and improved data-driven decisions across the organization.",
    },
  ],
  artPage: {
    info: "Info",
    close: "Close",
    details: "Artwork details",
    medium: "MEDIUM",
    idea: "IDEA",
    meaning: "MEANING",
    inspiration: "INSPIRATION",
  },
  processPage: {
    title: "PROCESS",
    subtitle: "How this portfolio was crafted",
    heading: "How This Portfolio Was Crafted",
    captions: {
      c1: "First ideas between corporate and creativity",
      c2: "Grunge texture design",
      c3: "In-between idea generation",
      c4: "Final design",
    },
    s1Title: "1. Early Beginnings",
    s1Body:
      "Right after high school, I studied design for a short time. The experience, however, felt… suppressive. The curriculum reminded me of Soviet-inspired design — rigid, uniform, and resistant to fresh ideas. Creativity seemed like an afterthought, and initiative was rarely encouraged. I felt boxed in, as if design had become only about serving corporate goals. So, I left to search for something else.",
    s2Title: "2. Rediscovering Design’s Fun Side",
    s2Body:
      "Over the years, I began to see that design didn’t have to be lifeless. There’s joy, playfulness, and freedom — if you know when, where, and for whom you’re creating. When I decided to build my first portfolio, I wanted it to be a visual statement: a war between the polished, corporate world of design and the whimsical, sometimes chaotic possibilities of creative web design.",
    s3Title: "3. The First Iteration – Order vs. Chaos",
    s3Body:
      "The first version was inspired by the early 2000s internet, when personal websites were everywhere. One half of the portfolio used a clean, modernized Bauhaus-style grid. The other half embraced the anarchy of the early web: irregular layouts, bold color clashes, and unrestrained creativity.",
    s4Title: "4. The Second Iteration – Grunge & Anti-Design",
    s4Body:
      "I wasn’t done exploring. The next iteration kept the 2000s influence but leaned harder into grunge and anti-design aesthetics — raw textures, clashing typography, and the visual language of rebellion. This version was my protest against the growing trend of replacing human creativity with AI-generated content. I wanted it to feel like a rallying cry for creative freedom, a reminder that creation should be for joy, not just efficiency.",
    s5Title: "5. Why I Moved On",
    s5Body:
      "As much as I loved its energy, the grunge-heavy version lacked the readability and structure I wanted — especially for the academic setting I was applying to. It didn’t strike the balance between clarity and creativity that I was looking for.",
    s6Title: "6. The Final Iteration – Clean Structure, Bold Personality",
    s6Body:
      "The portfolio you see now is the result of that search. It’s clean and structured, built on an invisible grid for clarity — but with bold visual statements. Fonts vary for diversity, subtle animations keep the viewer engaged, and a touch of early-2000s nostalgia lives on through moving CDs, floppy disks, and playful easter eggs. This version feels like me: professional enough for serious consideration, but still brimming with curiosity and character.",
    closingTitle: "Closing Note",
    closingBody:
      "This portfolio is more than a gallery — it’s a personal journey. Each stage reflects a moment in my relationship with design, from disillusionment to rediscovery. And it’s only the beginning.",
  },
  aboutPage: {
    title: "Meet Kasparas",
    subtitle: "Designer • Developer • Artist",
    paragraphs: [
      "I’m searching for something that truly feels like home. Right now, I work with websites and keep learning every day — that’s how I discovered tools like Figma and got a taste of UI/UX. In a way, it’s how I reconnected with design again.",
      "I’ve learned that even in a world of corporate transactions, there’s joy in the little things — a smooth SVG animation, a clever interaction, a hidden visual Easter egg that makes someone smile.",
      "My dream? To create websites worthy of Awwwards — not just functional pages, but experiences that sing.",
      "I started as an artist, drifted away from it, and returned through coding and design. If life isn’t about pursuing what you love, then what’s the point? I want to tell stories — through visuals, words, or both — that connect with people in an instant.",
      "When I’m not designing, I’m playing guitar, writing poetry, or painting. I like challenges, pushing my limits, and exploring uncertainty — even if I sometimes get distracted along the way.",
      "The world might try to suppress creativity, but I want to challenge that — and dive headfirst into the unknown.",
    ],
  },
};
