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
        "Patogi naudoti svetainė šeimos veterinarijos klinikai, sukurta siekiant perteikti šilumos ir rūpestingumo jausmą, tačiau neaukojant profesionalumo.",
      image: "/project_thumbnails/vetinn_thumb.png",
      brief:
        "Atnaujinti esamą, pasenusią svetainę, siekiant sukurti didesnį pasitikėjimą naujiems klientams ir suteikti aiškią, greitą prieigą prie svarbiausios informacijos stresą patiriantiems augintinių savininkams.",
      design:
        "Dizainas naudoja švarią, šviesią sąsają su švelnia ir draugiška spalvų palete, kad sukurtų prieinamumo jausmą ir sumažintų nerimą. Aiški vizualinė hierarchija iškelia svarbiausią informaciją, pavyzdžiui, skubios pagalbos kontaktus ir darbo valandas, į priekį. Tipografija yra profesionali, tačiau šilta, užtikrinanti skaitomumą ir svetingą toną.",
      challenges:
        "Svarbiausias iššūkis buvo subalansuoti žaismingą, rūpestingą estetiką su medicinos praktikai būtinu profesionalumu. Dizainas turėjo būti raminantis susirūpinusiems augintinių savininkams, tuo pačiu aiškiai komunikuojant klinikos ekspertizę ir kompetenciją.",
      thoughts:
        "Veterinarijos paslaugų srityje vartotojo emocinė būsena yra esminė. Pirmasis dizaino tikslas – sukurti pasitikėjimą ir sumažinti stresą. Kiekvienas elementas, nuo nuotraukų pasirinkimo iki mygtukų pavadinimų, buvo pasirinktas siekiant sukurti saugumo, rūpesčio ir patikimumo jausmą.",
      results:
        "Naujasis dizainas sėkmingai sukūrė švarią, profesionalią sąsają, kurią lengva naudoti esant įtampai, o žaismingi elementai padėjo sustiprinti šeimos verslo identitetą ir sulaukė teigiamų klientų atsiliepimų.",
    },
    {
      id: "trt",
      title: "TRT Baltic",
      description:
        "Saugi, profesionali medicininė platforma pakaitinės testosterono terapijos klinikai, pasižyminti pažangiomis pacientų formomis ir vizualine kalba, skirta vyrų auditorijai.",
      image: "/project_thumbnails/trt_thumb.png",
      brief:
        "Sukurti saugią, konfidencialią platformą TRT pacientams ir sveikatos priežiūros specialistams, skirtą valdyti sudėtingus gydymo planus, stebėti progresą per duomenų vizualizaciją ir saugiai komunikuoti.",
      design:
        "Sąsaja yra kliniška ir profesionali, naudojanti santūrią spalvų paletę autoriteto ir pasitikėjimo jausmui sukurti. Duomenys vizualizuojami per aiškias diagramas ir grafikus, kad būtų lengva sekti progresą. Visos formos ir komunikacijos kanalai buvo sukurti teikiant didžiausią prioritetą privatumui, saugumui ir tikslumui.",
      challenges:
        "Projektas susidūrė su itin griežtais duomenų saugumo ir pacientų privatumo (BDAR) reikalavimais. Sudėtingų gydymo protokolų logikos valdymas ir jautrių medicininių duomenų pateikimas pacientams suprantamu būdu buvo reikšmingas UI/UX iššūkis.",
      thoughts:
        "Medicininės programos reikalauja išskirtinės atsakomybės. Kitaip nei kituose projektuose, dizaino klaidos čia gali turėti rimtų pasekmių. Naudotojo patirtis privalo teikti pirmenybę aiškumui, tikslumui ir saugumui, užtikrinant, kad technologija įgalintų tiek pacientą, tiek gydytoją.",
      results:
        "Platforma sukūrė saugią ir efektyvią aplinką gydymo valdymui. Jos aiškus duomenų vizualizavimas ir supaprastinti komunikacijos kanalai, kaip pranešama, pagerino pacientų gydymo režimo laikymąsi ir sustiprino pacientų bei gydytojų sąveikos kokybę.",
    },
    {
      id: "Portfolio",
      title: "Asmeninis Portfolio",
      description:
        "Galutinė mano asmeninio portfolio iteracija, kuri evoliucionavo iš kūrybinio eksperimento į brandų, interaktyvų darbą, balansuojantį tarp unikalaus stiliaus ir kertinių UI/UX principų.",
      image: "/project_thumbnails/portfolio_thumb.png",
      brief:
        "Sukurti išskirtinį portfolio, kuris demonstruotų mano kelionę, dizaino įgūdžius ir techninius gebėjimus, sukuriant įtraukiančią ir patogią naudotojo patirtį, kuri atspindėtų mano profesinį augimą.",
      design:
        "Dizainas paremtas drąsia tipografija ir tvirtu tinkleliu kaip pagrindu. Ši struktūra yra papildyta subtiliomis, sklandžiomis animacijomis ir interaktyviais elementais, siekiant sukurti įtraukiančią patirtį. Pagrindinis tikslas yra efektyviai pristatyti darbus neperkraunant vartotojo, taip įrodant, kad stipri estetika gali egzistuoti kartu su tvirtu funkcionalumu.",
      challenges:
        "Pagrindinis iššūkis buvo išgryninti mano ankstesnes, chaotiškesnes 'anti-dizaino' koncepcijas į funkcionalų produktą, neprarandant asmeniškumo. Techniškai, svarbiausias prioritetas buvo suderinti sudėtingų animacijų vizualų patrauklumą su greita svetainės krovimo sparta ir užtikrinti suderinamumą tarp skirtingų naršyklių.",
      thoughts:
        "Portfolio yra daugiau nei galerija – tai dizaino manifestas. Šis projektas mane išmokė, kad mano asmeninis stilius yra stiprybė, bet jo tikroji galia atsiskleidžia, kai jis tarnauja aiškiam tikslui – šiuo atveju, sukurti prieinamą ir paveikų pasakojimą vartotojui.",
      results:
        "Galutinė svetainė yra efektyvi mano dizaino kelionės kulminacija, sėkmingai parodanti mano augimą iš vizualaus menininko į produkto dizainerį, kuris vertina tiek kūrybinę išraišką, tiek į vartotoją orientuotą funkcionalumą.",
    },
    {
      id: "Ecommerce",
      title: "Layers.lt",
      description:
        "Pilnai funkcionali e-komercijos platforma specializuotam odos priežiūros prekės ženklui, pasižyminti edukaciniu požiūriu, pažangiu filtravimu ir saugiu, sklandžiu apmokėjimo procesu.",
      image: "/project_thumbnails/layers_thumb.png",
      brief:
        "Sukurti plečiamą e-komercijos sprendimą su moderniais UX šablonais, kuris ne tik parduoda produktus, bet ir edukuoja vartotoją, taip kuriant ilgalaikį pasitikėjimą ir prekės ženklo lojalumą.",
      design:
        "Į vartotoją orientuotas ir 'mobile-first' principu paremtas dizainas. Produktų puslapiuose yra aiški informacijos hierarchija, jungianti komercinę informaciją su edukaciniu turiniu. Atsiskaitymo procesas buvo supaprastintas iki minimalių žingsnių, siekiant sumažinti krepšelio apleidimo rodiklį, o bendra estetika balansuoja tarp klinikinio profesionalumo ir premium jausmo.",
      challenges:
        "Svarbiausias iššūkis buvo integruoti didelį, sudėtingą produktų katalogą su intuityvia filtravimo sistema. Kitas iššūkis – užtikrinti visiškai sklandų ir saugų apmokėjimo procesą per kelis skirtingus mokėjimo metodus, nes bet kokia trintis čia tiesiogiai veikia pardavimus.",
      thoughts:
        "Šiuolaikinės e-komercijos sėkmė priklauso nuo gebėjimo sumažinti trintį pirkimo procese ir sukurti pasitikėjimą. Vartotojo kelionė turi būti be pastangų. Suteikdami tikrą vertę per edukaciją, mes pavertėme platformą iš paprastos parduotuvės į patikimą šaltinį, o tai yra daug galingesnė pozicija rinkoje.",
      results:
        "Platformos dizainas sėkmingai padidino tikimybę, kad klientai priims informuotus pirkimo sprendimus. Suteikiant vartotojams žinių, o ne tik stumiant produktus, buvo sukurtas stipresnis pasitikėjimo jausmas ir lojalesnių klientų bazė.",
    },
    {
      id: "vlkk",
      title: "VL Kineziterapijos Klinika",
      description:
        "Profesionali ir svetinga interneto svetainė kineziterapijos klinikai, sukurta atspindėti atsakingą, modernų požiūrį į fizinę sveikatą ir klientų gerovę.",
      image: "/project_thumbnails/vlk_thumb.png",
      brief:
        "Sukurti profesionalų, patikimą ir lengvai naviguojamą skaitmeninį įvaizdį kineziterapijos klinikai, leidžiantį potencialiems klientams lengvai rasti paslaugas ir užsiregistruoti vizitui.",
      design:
        "Dizainas yra švarus, erdvus, naudojama raminanti spalvų paletė, asocijuojama su sveikata ir pozityvumu. Sąsaja teikia pirmenybę aiškiai navigacijai ir stipriai 'call-to-action' sistemai, kad vartotojai būtų be vargo nukreipti link konsultacijos užsakymo. Vizualinė kalba yra profesionali ir orientuota į duomenis, kelianti pasitikėjimą klinikos ekspertize.",
      challenges:
        "Pagrindinis iššūkis buvo perteikti medicininį profesionalumą, tačiau neatrodyti šaltam ar kliniškam. Dizainas turėjo būti svetingas ir empatiškas vartotojams, kurie gali jausti skausmą ar nerimą, tuo pačiu pozicionuojant kliniką kaip aukštos kvalifikacijos ekspertų komandą.",
      thoughts:
        "Sveikatos priežiūros paslaugų srityje svetainė dažnai yra pirmasis kontaktinis taškas ir privalo iškart sukurti pasitikėjimą. Dizainas turi projektuoti kompetenciją, rūpestį ir patogumą. Paini ar neprofesionali svetainė gali tiesiogiai atgrasyti potencialų klientą nuo pagalbos paieškos.",
      results:
        "Naujoji svetainė tapo aiškiais, profesionaliais ir pozityviais skaitmeniniais klinikos vartais. Intuityvi navigacija ir aiškus paslaugų pristatymas padarė pagalbos paieškos procesą mažiau įtemptą ir sustiprino prekės ženklo, kaip modernios, į klientą orientuotos praktikos, įvaizdį.",
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
