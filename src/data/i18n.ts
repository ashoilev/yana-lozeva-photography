import { withBase } from "./site";

export const languages = ["en", "bg"] as const;
export type Language = (typeof languages)[number];
export type PageKey = "home" | "portraits" | "companies" | "contact" | "giftVouchers";

export const pageSlugs: Record<PageKey, string> = {
  home: "",
  portraits: "portraits",
  companies: "companies",
  contact: "contact",
  giftVouchers: "gift-vouchers"
};

export const localizedPath = (lang: Language, page: PageKey = "home", hash = "") => {
  const slug = pageSlugs[page];
  return withBase(`/${lang}/${slug ? `${slug}/` : ""}${hash}`);
};

export const copy = {
  en: {
    locale: "en_US",
    nav: { work: "Work", personal: "Personal portraits", personalShort: "Personal", companies: "For companies", companiesShort: "Companies", giftVouchers: "Gift vouchers", instagram: "Instagram", book: "Book a portrait",  bookCompanies: "Plan a shoot", bookVouchers: "Get a voucher", language: "BG" },
    footer: { role: "Photographer", location: "Sofia, Bulgaria", giftVouchers: "Gift vouchers", email: "Email" },
    home: {
      title: "Yana Lozeva — Portrait Photographer in Sofia",
      description: "Portrait photographer based in Sofia, creating intimate, editorial portraits of individuals, couples, families and teams.",
      eyebrow: "Yana Lozeva",
      h1: "Portrait photographer, Sofia",
      intro: [
        "I am Yana, and I love making portraits. I photograph people individually, together, and at work.",
        "My approach is relaxed and direct, and works for people who do not naturally feel comfortable in front of a camera.",
        "I am based in Sofia and available throughout Europe.",
        "You do not need to be prepared for posing. I will help you with that part, keeping the session simple, calm, and specific to you."
      ],
      servicesLabel: "Portrait services",
      personal: { label: "Personal portraits", title: "Individuals, couples, families, children", body: "You do not need to be prepared for posing. I will help you with that part, keeping the session simple, calm, and specific to you.", action: "Book a portrait", gallery: "Personal portrait examples" },
      corporate: { label: "For companies", title: "Employee portraits, headshots, team portraits", body: "Professional portraits can look sharp without flattening everyone into the same expression.", action: "Make an inquiry", gallery: "Company portrait examples" },
      allWork: "View all work",
      booking: { label: "Book a portrait", title: "Choose a time with Yana", body: "Personal portrait sessions are booked directly through Calendly. For company work, use the inquiry link instead." }
    },
    work: { title: "Portrait Photography — Yana Lozeva", description: "Selected personal and professional portrait photography by Sofia-based photographer Yana Lozeva.", label: "Selected archive", h1: "Portrait photography", intro: "Personal and professional portraits, photographed in Sofia and throughout Bulgaria.", gallery: "Portrait photography by Yana Lozeva" },
    portraits: { title: "Personal & Family Portrait Photography in Sofia — Yana Lozeva", description: "Personal portrait photography in Sofia for individuals, couples, families and children, with a relaxed and direct approach.", label: "Personal portraits", h1: "People, properly photographed", intro: "A portrait session can be quiet, direct and surprisingly easy.", section: "Private sessions", services: [{ title: "Personal", body: "For people who’d like to capture a moment in their life or just see themselves from a fresh perspective. These days we have hundreds of candid pictures but rarely one that leaves an impression." }, { title: "Couples", body: "Intimate photographs of closeness, without turning the session into a performance." }, { title: "Families", body: "Simple and warm family portraits that respect the relationships already there." }, { title: "Children", body: "Letting children be children, without forced smiles." }], cta: { label: "Booking", title: "Want your own?", body: "You do not need to know how to pose. Yana will guide the session without making it feel staged.", action: "Book a portrait" } },
    companies: { title: "Corporate Portrait Photography in Sofia — Yana Lozeva", description: "Corporate portraits, employee headshots and team photography in Sofia and throughout Bulgaria, with a consistent editorial approach.", label: "For companies", h1: "Real people, clear system", intro: "Professional portraits can look sharp without flattening everyone into the same expression.", offer: "Offer", services: [{ title: "Employee portraits", body: "Consistent portrait sessions for teams of different sizes, shaped around the company and the people inside it." }, { title: "Team portraits", body: "Groups photographed naturally and with the same visual language as the individual portraits." }, { title: "Headshots", body: "Clean professional portraits for profiles, press, websites and internal communications." }, { title: "Workplace photography", body: "Editorial photography of people at work, made within the same visual identity." }], process: "Process", processIntro: "A consistent visual system across the team, with enough room for each person to remain individual.", steps: [{ label: "01 — Brief", title: "Plan", body: "We discuss the number of people, visual direction, location, and usage." }, { label: "02 — Shoot", title: "Photograph", body: "I create a comfortable setup and photograph the team with care." }, { label: "03 — Delivery", title: "Select", body: "A consistent, carefully edited set of finished photographs." }], cta: { label: "Company shoots", title: "Plan a company shoot", body: "Send a short note with the team size, intended use and rough timing. Corporate enquiries go through email rather than Calendly.", action: "Email Yana", subject: "Corporate photography inquiry" } },
    contact: { title: "Contact & Portrait Booking — Yana Lozeva", description: "Book a personal portrait session in Sofia or contact Yana Lozeva about corporate portraits and team photography.", label: "Contact", h1: "Booking", intro: "Personal portraits are booked through Calendly. Company shoots begin with a short email to Yana.", personal: "Book a portrait", personalBody: "Personal portrait sessions are booked directly through Yana's Calendly.", bookingOption: "Portrait booking", company: "Company enquiries", fields: { name: "Name", company: "Company", email: "Email", message: "What do you have in mind?" }, action: "Plan a company shoot", direct: "Or email directly:" },
    giftVouchers: { title: "Photography Gift Vouchers in Sofia — Yana Lozeva", description: "Request a gift voucher for a portrait photography session with Yana Lozeva in Sofia.", label: "Get yours", h1: "Gift vouchers", intro: "A portrait session is a thoughtful present for your loved ones.", imageAlt: "Portrait photography gift voucher by Yana Lozeva", section: "Gift vouchers", emailLead: "Please write to", emailTail: " to request a voucher." },
    notFound: { title: "Page not found — Yana Lozeva", heading: "Page not found", body: "The page may have moved. Return to Yana's portrait photography or view the selected work.", home: "Home", work: "View work" }
  },
  bg: {
    locale: "bg_BG",
    nav: { work: "Работа", personal: "Лични портрети", personalShort: "Лични", companies: "За компании", companiesShort: "Компании", giftVouchers: "Подаръчни ваучери", instagram: "Instagram", book: "Запази сесия", bookCompanies: "Планирай сесия", bookVouchers: "Поръчай ваучер", language: "EN" },
    footer: { role: "Фотограф", location: "София, България", giftVouchers: "Подаръчни ваучери", email: "Имейл" },
    home: {
      title: "Яна Лозева — Портретен фотограф в София",
      description: "Портретен фотограф в София с естествен и редакционен подход към индивидуални, семейни, двойки и екипни портрети.",
      eyebrow: "Яна Лозева",
      h1: "Портретен фотограф, София",
      intro: ["Аз съм Яна и обичам да правя портрети. Снимам хора сами, с близките им и на работа.", "Работя спокойно и естествено, включително с тези, които невинаги се чувстват комфортно пред камера.", "Студиото ми е в София, но поемам ангажименти и в цяла Европа.", "Не е необходимо да сте подготвени да позирате. Аз ще ви помогна с това, за да остане преживяването леко, приятно и съобразено с нуждите ви."],
      servicesLabel: "Портретна фотография",
      personal: { label: "Лични портрети", title: "Индивидуални, двойки, семейства, деца", body: "Не е необходимо да сте подготвени да позирате. Аз ще ви помогна с това, за да остане преживяването леко, приятно и съобразено с нуждите ви.", action: "Запази сесия", gallery: "Примери за лични портрети" },
      corporate: { label: "За компании", title: "Професионални и екипни портрети", body: "Професионалните ви снимки могат да изглеждат добре, без да губите индивидуалност.", action: "Изпрати запитване", gallery: "Примери за корпоративни портрети" },
      allWork: "Виж всички фотографии",
      booking: { label: "Портретна сесия", title: "Изберете удобен час", body: "Личните сесии се запазват директно през Calendly. За екипни и корпоративни снимки ми пишете на {email}." }
    },
    work: { title: "Портретна фотография — Яна Лозева", description: "Подбрана лична и корпоративна портретна фотография от Яна Лозева — фотограф в София.", label: "Избрани фотографии", h1: "Портретна фотография", intro: "Лични и професионални портрети, заснети в София и в цяла България.", gallery: "Портретна фотография от Яна Лозева" },
    portraits: { title: "Лични и семейни портрети в София — Яна Лозева", description: "Портретна фотография в София за индивидуални портрети, двойки, семейства и деца, със спокоен и директен подход.", label: "Лични портрети", h1: "Хора, снимани истински", intro: "Портретната сесия може да бъде изненадващо лека и дори приятна.", quote: "„Въобще не беше страшно!“ — казват много от клиентите ми.", section: "Лични сесии", services: [{ title: "Индивидуални", body: "За хора, които искат да отбележат особен момент в живота си или просто да се видят по нов начин. В днешно време имаме хиляди снимки, но рядко такива, които остават следа." }, { title: "Двойки", body: "Деликатен поглед върху близостта, без специални пози и режисура." }, { title: "Семейства", body: "Топли и естествени портрети, с уважение към семейната динамика." }, { title: "Деца", body: "Децата като деца, без насилени усмивки." }], cta: { label: "Записване", title: "Искате свой портрет?", body: "Не е нужно да умеете да позирате. Яна ще ви насочи, без снимките да изглеждат нагласени.", action: "Запази сесия" } },
    companies: { title: "Корпоративни и бизнес портрети в София — Яна Лозева", description: "Корпоративни портрети, бизнес снимки и екипна фотография в София и България с последователен редакционен подход.", label: "За компании", h1: "Истински хора, ясна система", intro: "Професионалните ви снимки могат да изглеждат добре, без да губите индивидуалност.", offer: "Услуги", services: [{ title: "Служители", body: "Портрети в съгласуван визуален стил за екипи от всякакъв размер, създадени с внимание към компанията и хората, които я изграждат." }, { title: "Екипи", body: "Елегантни групови снимки в стила на индивидуалните." }, { title: "Бизнес портрети", body: "Строги, изчистени или по-неформални портрети за профили, сайтове и вътрешна комуникация." }, { title: "Работна среда", body: "Портрети там, където работите — в офиса, в кантората, на терен и др." }], process: "Процес", processIntro: "Общ визуален стил, който обединява екипа, но оставя пространство за индивидуалността на всеки.", steps: [{ label: "01 — Разговор", title: "План", body: "Обсъждаме броя на хората, визуалната посока, локацията и нуждите ви." }, { label: "02 — Снимки", title: "Заснемане", body: "Създавам подходящи условия във вашия офис или в моето студио и внимателно заснемам служителите." }, { label: "03 — Резултат", title: "Селекция", body: "Получавате подбрани и внимателно обработени снимки." }], cta: { label: "Снимки на екипи", title: "Искате снимки на екипа си?", body: "Моля, изпратете ми кратко описание на нуждите и размера на екипа. Ще ви отговоря с възможните варианти и оферта.", action: "Имейл до Яна", subject: "Запитване за корпоративна фотография" } },
    contact: { title: "Контакт и записване — Яна Лозева", description: "Запазете лична портретна сесия в София или изпратете запитване за корпоративни и екипни портрети.", label: "Контакт", h1: "Записване", intro: "Личните портрети се запазват през Calendly. Снимките за компании започват с кратък имейл до Яна.", personal: "Запази портретна сесия", personalBody: "Личните портретни сесии се запазват директно през Calendly.", bookingOption: "Портретна сесия", company: "Запитвания от компании", fields: { name: "Име", company: "Компания", email: "Имейл", message: "Какво имате предвид?" }, action: "Планирай снимки за компания", direct: "Или пишете директно:" },
    giftVouchers: { title: "Подаръчни ваучери за фотосесия в София — Яна Лозева", description: "Заявете подаръчен ваучер за портретна фотосесия с Яна Лозева в София.", label: "Подарете ваучер", h1: "Подаръчни ваучери", intro: "Ваучерът за портрет е страхотен подарък за всеки и най-вече за хора в особен момент от живота — сватба, годишнина, раздяла, юбилей. А понякога и просто така — за спомен или за малко повече самочувствие.", imageAlt: "Подаръчен ваучер за портретна фотосесия с Яна Лозева", section: "Подаръчни ваучери", emailLead: "Пишете ми на", emailTail: ", за да заявите своя ваучер." },
    notFound: { title: "Страницата не е намерена — Яна Лозева", heading: "Страницата не е намерена", body: "Възможно е страницата да е преместена. Върнете се към портретната фотография на Яна или разгледайте избраните фотографии.", home: "Начало", work: "Виж работа" }
  }
} as const;

export const getCopy = (lang: Language) => copy[lang];
export const otherLanguage = (lang: Language): Language => lang === "en" ? "bg" : "en";
