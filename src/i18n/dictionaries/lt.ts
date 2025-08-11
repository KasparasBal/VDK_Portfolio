import type { Dictionary } from "./en";

export const lt: Dictionary = {
  nav: {
    home: "Pradžia",
    projects: "Projektai",
    contact: "Kontaktai",
    langShort: "LT",
    langToggleAria: "Perjungti kalbą į anglų",
  },
  home: {
    about: "APIE",
    aspirePrefix: "SIEKIU TAPTI PUIKIU",
    designer: "DIZAINERIU",
    more: "DAUGIAU",
    projects: "PROJEKTAI",
    web: "WEB.",
    art: "KŪRYBA",
    contactTitle: "LABAS?",
    links: "Nuorodos",
    information: "Informacija",
    backToTop: "ATGAL Į VIRŠŲ",
    intro1:
      "Turiu programavimo ir meno pagrindus. Man patinka įvairūs raiškos būdai ir džiaugiuosi juos tyrinėdamas.",
    intro2:
      "Nors labai domiuosi UI ir UX dėl psichologinio skaitytojo analizės, taip pat dievinu unikalias internetines patirtis.",
  },
  form: {
    name: "Vardas",
    subject: "Tema",
    message: "Jūsų žinutė",
    send: "Siųsti",
    sending: "Siunčiama…",
    success: "Žinutė sėkmingai išsiųsta!",
    error: "Nepavyko išsiųsti žinutės. Bandykite dar kartą.",
  },
  overlay: {
    caseStudy: "PROJEKTO ANALIZĖ",
    brief: "SANTRAUKA",
    design: "DIZAINAS",
    challenges: "IŠŠŪKIAI",
    thoughts: "MINTYS",
    results: "REZULTATAI",
    closeAria: "Uždaryti",
  },
  footer: {
    designWebArt: "DIZAINAS/WEB/KŪRYBA",
    portfolio: "PORTFOLIO",
  },
  projectsPage: {
    title: "PROJEKTAI",
  },
  projectsData: [
    {
      id: "vetinn",
      title: "Vetinn",
      description:
        "Šeimos valdoma veterinarijos klinikos svetainė, kuri kuria mielumo ir rūpesčio įspūdį, neprarandant profesionalumo.",
      image: "/project_thumbnails/vetinn_thumb.png",
      brief:
        "Sukurti modernią, patogią veterinarijos valdymo sistemą, gerinančią klinikos efektyvumą ir pacientų priežiūros kokybę.",
      design:
        "Švari, medicininio lygio sąsaja su akcentu į prieinamumą ir greitą informacijos radimą. Spalvų schema pritaikyta ilgam žiūrėjimui.",
      challenges:
        "Sudėtingi duomenų ryšiai tarp pacientų, gydymų ir vizitų. Privatumo užtikrinimas išlaikant patogumą.",
      thoughts:
        "Pusiausvyra tarp funkcionalumo ir paprastumo buvo esminė. Medicininė programinė įranga turi būti ir galinga, ir paprasta naudoti.",
      results:
        "Vizitų registravimo laikas sumažėjo 40%, o pacientų įrašų tikslumas padidėjo 25%.",
    },
    {
      id: "trt",
      title: "TRT Baltic",
      description:
        "Specializuota platforma testosterono pakaitinei terapijai su pažangiomis formomis ir vizualine kalba, skirta vyrams.",
      image: "/project_thumbnails/trt_thumb.png",
      brief:
        "Sukurti saugią platformą TRT pacientams ir sveikatos priežiūros specialistams gydymo planams valdyti ir pažangai stebėti.",
      design:
        "Profesionali medicininė sąsaja su aiškia duomenų vizualizacija ir saugiais komunikacijos kanalais. Akcentas – privatumui ir tikslumui.",
      challenges:
        "Griežti duomenų saugumo reikalavimai ir sudėtingas gydymo protokolų valdymas.",
      thoughts:
        "Medicininės programos reikalauja išskirtinio dėmesio detalėms ir naudotojo patirčiai, nes klaidos gali turėti rimtų pasekmių.",
      results:
        "Pagerėjo gydymo laikymasis 35% ir sustiprėjo pacientų bei specialistų komunikacija.",
    },
    {
      id: "Portfolio",
      title: "Asmeninis portfolio",
      description:
        "Modernus, interaktyvus portfolio, pristatantis dizaino ir programavimo darbus su sklandiomis animacijomis ir įtraukiančia patirtimi.",
      image: "/project_thumbnails/portfolio_thumb.png",
      brief:
        "Sukurti išskirtinį portfolio, parodantį tiek dizaino įgūdžius, tiek technines galimybes, užtikrinant malonią naudotojo patirtį.",
      design:
        "Minimalistinė kryptis su ryškia tipografija ir sklandiomis animacijomis. Dėmesys darbų pateikimui neperkraunant naudotojo.",
      challenges:
        "Pusiausvyra tarp vizualaus patrauklumo ir našumo, užtikrinant sudėtingų animacijų suderinamumą tarp naršyklių.",
      thoughts:
        "Portfolio turėtų atspindėti kūrėjo stilių, išliekant prieinamas ir funkcionalus visiems naudotojams.",
      results:
        "Padidėjo įsitraukimo laikas 60% ir gauta daug teigiamų atsiliepimų apie UX ir vizualiką.",
    },
    {
      id: "Ecommerce",
      title: "Layers.lt",
      description:
        "Pilnai funkcinė el. prekybos platforma su pažangiu produktų filtravimu, saugiais mokėjimais ir aiškia informacijos pateiktimi.",
      image: "/project_thumbnails/layers_thumb.png",
      brief:
        "Sukurti mastelį atlaikančią e. prekybos sistemą su moderniais UX sprendimais ir patikimu backend funkcionalumu.",
      design:
        "Naudotojui palanki sąsaja su aiškiu produktų pateikimu ir supaprastintu apmokėjimu. Pirmiausia – mobiliesiems.",
      challenges:
        "Sudėtingas produktų katalogo valdymas ir sklandžių mokėjimų užtikrinimas su keliais metodais.",
      thoughts:
        "E. prekybos sėkmė labai priklauso nuo trinties mažinimo pirkimo procese, kartu užtikrinant saugumą.",
      results:
        "Konversijos rodiklis padidėjo 28%, o krepšelio apleidimas sumažėjo 45%.",
    },
    {
      id: "vlkk",
      title: "VL Kineziterapijos Klinika",
      description:
        "Šeimos vedamos kineziterapijos klinikos puslapis, atspindintis profesionalumą ir atsakingą požiūrį į žmogaus kūną ir klientus.",
      image: "/project_thumbnails/vlk_thumb.png",
      brief:
        "Sukurti intuityvią analitinę aplinką, paverčiančią sudėtingus duomenis veiksmais pagrįstomis įžvalgomis.",
      design:
        "Į duomenis orientuota sąsaja su aiškia vizualine hierarchija ir interaktyviomis diagramomis. Tamsi tema ilgesniam darbui.",
      challenges:
        "Didelių duomenų rinkinių aiškus pateikimas neapkraunant naudotojų ir realaus laiko tikslumo užtikrinimas.",
      thoughts:
        "Veiksminga duomenų vizualizacija reikalauja suprasti tiek techninius aspektus, tiek žmogaus suvokimą.",
      results: "Laikas iki įžvalgų sumažėjo 50%, pagerėjo sprendimų priėmimas.",
    },
  ],
  artPage: {
    info: "Informacija",
    close: "Uždaryti",
    details: "Daugiau apie kūrinį",
    medium: "TECHNIKA",
    idea: "IDĖJA",
    meaning: "PRASMĖ",
    inspiration: "ĮKVĖPIMAS",
  },
};
