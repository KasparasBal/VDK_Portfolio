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
};
