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
    process: "PROCESAS",
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
  processPage: {
    title: "PROCESAS",
    subtitle: "Kaip sukurtas šis portfolio",
    heading: "Kaip buvo sukurtas šis portfolio",
    captions: {
      c1: "Pirmos idėjos tarp korporatyvumo ir kūrybos",
      c2: "Grunge tekstūrų dizainas",
      c3: "Tarpinė idėjų generacija",
      c4: "Galutinis dizainas",
    },
    s1Title: "1. Pirmieji pradmenys",
    s1Body:
      "Iškart po mokyklos trumpai studijavau dizainą. Vis dėlto patirtis atrodė slopinanti. Programa priminė sovietinį dizainą — griežtą, vienodą ir atmetantį naujas idėjas. Kūrybiškumas buvo tarsi antraeilis, o iniciatyva – retai skatinama. Jaučiausi įrėmintas, lyg dizainas būtų tik korporatyvinių tikslų aptarnavimas. Todėl išėjau ieškoti kažko kito.",
    s2Title: "2. Iš naujo atrastas dizaino žaismingumas",
    s2Body:
      "Bėgant metams supratau, kad dizainas neturi būti be gyvybės. Jame yra džiaugsmo, žaismingumo ir laisvės — jei žinai kada, kur ir kam kuri. Kurdamas pirmąjį portfolio norėjau aiškaus vizualinio pareiškimo: kovos tarp nugludinto, korporatyvaus dizaino pasaulio ir žaismingų, kartais chaotiškų kūrybinio interneto galimybių.",
    s3Title: "3. Pirmoji iteracija – Tvarka prieš Chaosą",
    s3Body:
      "Pirmoji versija įkvėpta ankstyvojo 2000-ųjų interneto, kai asmeniniai puslapiai buvo visur. Viena portfolio pusė naudojo švarią, modernizuotą Bauhauso tipo gardelę. Kita pusė priėmė ankstyvojo interneto anarchiją: netvarkingus išdėstymus, ryškius spalvų susidūrimus ir nevaržomą kūrybą.",
    s4Title: "4. Antroji iteracija – Grunge ir anti-dizainas",
    s4Body:
      "Tyrinėjimas nesibaigė. Kita versija išlaikė 2000-ųjų įtaką, bet dar labiau pasuko į grunge ir anti-dizaino estetiką — šiurkščias tekstūras, konfliktuojančią tipografiką ir maišto vizualinę kalbą. Tai buvo protestas prieš vis didesnę tendenciją kūrybą keisti dirbtinio intelekto generuotais turiniais. Norėjau, kad tai skambėtų kaip raginimas kurti dėl džiaugsmo, o ne tik dėl efektyvumo.",
    s5Title: "5. Kodėl judėjau toliau",
    s5Body:
      "Nors energija patiko, grunge versijoje trūko skaitomumo ir struktūros — ypač akademiniame kontekste, kuriam ruošiausi. Tai nebuvo balansas tarp aiškumo ir kūrybiškumo, kurio ieškojau.",
    s6Title: "6. Galutinė iteracija – Švari struktūra, drąsus charakteris",
    s6Body:
      "Dabartinė versija – šių paieškų rezultatas. Ji švari ir struktūruota, paremta nematoma gardele aiškumui užtikrinti, bet su drąsiais vizualiais akcentais. Įvairovę kuria skirtingi šriftai, subtilios animacijos įtraukia, o 2000-ųjų nostalgiją atgaivina judantys CD, disketės ir žaismingi „easter egg“. Tai – aš: pakankamai profesionalu rimtam vertinimui, bet kupina smalsumo ir charakterio.",
    closingTitle: "Pabaigos žodis",
    closingBody:
      "Šis portfolio – daugiau nei darbų galerija; tai asmeninė kelionė. Kiekviena stadija atspindi mano santykio su dizainu momentą – nuo nusivylimo iki naujo atradimo. Ir tai tik pradžia.",
  },
  aboutPage: {
    title: "Susipažinkime – Kasparas",
    subtitle: "Dizaineris • Kūrėjas • Menininkas",
    paragraphs: [
      "Ieškau kažko, kas iš tiesų jaustųsi kaip namai. Šiuo metu dirbu su svetainėmis ir kasdien mokausi — taip atradau Figma ir paragavau UI/UX. Tam tikra prasme vėl sugrįžau prie dizaino.",
      "Supratau, kad net ir korporacijų pasaulyje yra džiaugsmo mažuose dalykuose — sklandžioje SVG animacijoje, sumanioje sąveikoje, paslėptame vizualiniame siurprize.",
      "Mano svajonė? Kurti svetaines, vertas Awwwards — ne tik funkcionalius puslapius, bet patirtis, kurios skamba.",
      "Pradėjau kaip menininkas, vėliau nutolau, o sugrįžau per programavimą ir dizainą. Jei gyvenimas nėra apie tai, ką myli — tai kam tada? Noriu pasakoti istorijas — vaizdais, žodžiais ar abiem — kurios akimirksniu sujungia su žmogumi.",
      "Kai nekuriu, groju gitara, rašau poeziją arba tapau. Mėgstu iššūkius, savo ribų stūmimą ir neapibrėžtumo tyrinėjimą — net jei kartais pakeliui ir pasimetu.",
      "Pasaulis galbūt bando slopinti kūrybiškumą, bet aš noriu tam pasipriešinti — ir nerti stačia galva į nežinomybę.",
    ],
  },
};
