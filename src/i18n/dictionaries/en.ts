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
        "A user-friendly website for a family-run veterinary clinic, designed to evoke a sense of warmth and care while upholding the highest standards of professionalism.",
      image: "/project_thumbnails/vetinn_thumb.png",
      brief:
        "Redesign the existing, outdated website for a veterinary clinic to build trust with new clients and provide clear, immediate access to critical information for stressed pet owners.",
      design:
        "The design uses a clean, bright interface with a soft and friendly color palette to feel approachable and reduce anxiety. A clear visual hierarchy places essential information like emergency contacts and opening hours front and center. The typography is professional yet warm, ensuring readability and a welcoming tone.",
      challenges:
        "The primary challenge was balancing a playful, caring aesthetic with the seriousness and professionalism required of a medical practice. The design needed to be reassuring to anxious pet owners while clearly communicating the clinic's expertise and competence.",
      thoughts:
        "For a service like veterinary care, the user's emotional state is key. The design's first job is to build trust and reduce stress. Every element, from the choice of imagery to the button labels, was chosen to create a feeling of safety, care, and reliability.",
      results:
        "The new design successfully created a clean, professional interface that is easy to navigate under pressure, while its playful and engaging elements helped reinforce the clinic's family-run, caring identity, leading to positive feedback from their clients.",
    },
    {
      id: "trt",
      title: "TRT Baltic",
      description:
        "A secure, professional medical platform for a testosterone replacement therapy clinic, featuring advanced patient forms and a visual language specifically targeted at a male demographic.",
      image: "/project_thumbnails/trt_thumb.png",
      brief:
        "Develop a secure, confidential platform for TRT patients and healthcare providers to manage complex treatment plans, track progress through data visualization, and communicate securely.",
      design:
        "The interface is clinical and professional, using a reserved color palette to build a sense of authority and trust. Data is visualized through clean charts and graphs for easy progress tracking. All forms and communication channels were designed with a primary emphasis on privacy, security, and accuracy.",
      challenges:
        "The project involved extremely strict data security and patient privacy (GDPR) requirements. Managing the complex logic of treatment protocols and presenting sensitive medical data in an understandable way for patients was a significant UI/UX challenge.",
      thoughts:
        "Medical applications carry immense responsibility. Unlike other projects, design errors here can have serious consequences. The user experience must prioritize clarity, accuracy, and security above all else, ensuring the technology empowers both the patient and the doctor.",
      results:
        "The platform created a secure and efficient environment for treatment management. Its clear data visualization and streamlined communication channels reportedly improved patient adherence to treatment protocols and enhanced the quality of patient-provider interactions.",
    },
    {
      id: "Portfolio",
      title: "Personal Portfolio",
      description:
        "The final iteration of my personal portfolio, which evolved from a raw creative experiment into a mature, interactive showcase that balances a unique style with core UI/UX principles.",
      image: "/project_thumbnails/portfolio_thumb.png",
      brief:
        "Create a distinctive portfolio that demonstrates my journey, design skills, and technical capabilities, culminating in an engaging and user-friendly experience that reflects my professional growth.",
      design:
        "The design uses bold typography and a strong grid system as its foundation. This structure is then layered with subtle, smooth animations and interactive elements to create an engaging experience. The core focus is on showcasing the work effectively without overwhelming the user, proving that a strong aesthetic can coexist with solid usability.",
      challenges:
        "The main challenge was refining my earlier, more chaotic 'anti-design' concepts into a functional product without losing personality. Technically, balancing the visual appeal of complex animations with fast page load times and ensuring cross-browser compatibility was a top priority.",
      thoughts:
        "A portfolio is more than a gallery; it's a design statement. This project taught me that my personal style is a strength, but its true power is realized when it's used to serve a clear purpose – in this case, creating an accessible and compelling narrative for the user.",
      results:
        "The final website is an effective culmination of my design journey, successfully demonstrating my growth from a visual artist into a product designer who prioritizes both creative expression and user-centric functionality.",
    },
    {
      id: "Ecommerce",
      title: "Layers.lt",
      description:
        "A full-featured e-commerce platform for a specialized skincare brand, featuring an educational approach, advanced filtering, and a secure, streamlined checkout process.",
      image: "/project_thumbnails/layers_thumb.png",
      brief:
        "Build a scalable e-commerce solution with modern UX patterns that not only sells products but also educates the consumer, building long-term trust and brand loyalty.",
      design:
        "A user-centric and mobile-first responsive design was implemented. The product pages feature clear information hierarchy, combining commercial details with educational content. The checkout process was streamlined into minimal steps to reduce cart abandonment, and the overall aesthetic balances clinical professionalism with a premium feel.",
      challenges:
        "A key challenge was integrating a large, complex product catalog with an intuitive filtering system. Another was ensuring a completely smooth and secure payment process across multiple payment methods, as any friction here directly impacts sales.",
      thoughts:
        "Modern e-commerce success depends on reducing friction and building trust. The user journey must be effortless. By providing genuine value through education, we transformed the platform from a simple store into a trusted resource, which is a far more powerful position in the market.",
      results:
        "The platform design successfully increased the likelihood that clients make informed purchasing decisions. By empowering users with knowledge instead of just pushing products, it fostered a stronger sense of trust and a more loyal customer base.",
    },
    {
      id: "vlkk",
      title: "VL Kineziterapijos Klinika",
      description:
        "A professional and welcoming website for a physiotherapy clinic, designed to reflect a responsible, modern approach to physical health and client well-being.",
      image: "/project_thumbnails/vlk_thumb.png",
      brief:
        "Create a professional, trustworthy, and easy-to-navigate online presence for a physiotherapy clinic, making it simple for potential clients to find services and book appointments.",
      design:
        "The design is clean, spacious, and uses a calming color palette associated with health and positivity. The interface prioritizes clear navigation and a strong call-to-action system to guide users effortlessly toward booking a consultation. The visual language is professional and data-driven, instilling confidence in the clinic's expertise.",
      challenges:
        "The primary challenge was to communicate medical professionalism without appearing cold or clinical. The design needed to be welcoming and empathetic to users who may be experiencing pain or distress, while still positioning the clinic as a team of highly skilled experts.",
      thoughts:
        "For a healthcare service, the website is often the first point of contact and must immediately build trust. The design must project competence, care, and ease-of-use. A confusing or unprofessional website can directly deter a potential client from seeking the help they need.",
      results:
        "The new website provided a clear, professional, and positive digital front door for the clinic. The intuitive navigation and clear service presentation made the process of seeking help less stressful for users and reinforced the brand's image of a modern, client-focused practice.",
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
