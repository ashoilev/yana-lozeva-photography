const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path = "/") => {
  if (path === "/") return `${baseUrl}/`;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

const imagePath = (file: string) => withBase(`/images/${file}`);

export const site = {
  name: "Yana Lozeva",
  businessName: "traits",
  location: "Sofia, Bulgaria",
  email: "Yana.lozeva@gmail.com",
  instagram: "https://www.instagram.com/traits.lozeva/",
  calendly: { url: "https://calendly.com/traits" }
};

export const logo = { src: imagePath("traits.jpg"), alt: "traits" };

export type PortfolioCategory = "personal" | "corporate";
export type PortfolioOrientation = "portrait" | "landscape" | "square";

export type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: PortfolioOrientation;
  category: PortfolioCategory;
  featured: boolean;
};

const personalFiles = [
  "_DSC0032s.jpg", "_DSC0044s.jpg", "_DSC0064s.jpg", "_DSC0179s.jpg",
  "_DSC0203sm.jpg", "_DSC0400sm.jpg", "_DSC0431s.jpg", "_DSC0467s.jpg",
  "_DSC04970s.jpg", "_DSC0537gsm.jpg", "_DSC0756s.jpg", "_DSC0891s.jpg",
  "_DSC0945s.jpg", "_DSC1021s.jpg", "_DSC1050sm.jpg", "_DSC1176с.jpg",
  "_DSC1447s.jpg", "_DSC1506s.jpg", "_DSC1536sm.jpg", "_DSC1558sm.jpg",
  "_DSC1688s.jpg", "_DSC1737s.jpg", "_DSC1766sm.jpg", "_DSC1830sm.jpg",
  "_DSC1903sm.jpg", "_DSC2036sm.jpg", "_DSC2105s.jpg", "_DSC2167s.jpg",
  "_DSC2277s.jpg", "_DSC2313.jpg", "_DSC2317s.jpg", "_DSC2403s.jpg",
  "_DSC2420.jpg", "_DSC2528bwс.jpg", "_DSC2593.jpg", "_DSC2754s.jpg",
  "_DSC2789sm.jpg", "_DSC2793с.jpg", "_DSC2850s.jpg", "_DSC2879с.jpg",
  "_DSC2958s.jpg", "_DSC3218s.jpg", "_DSC332s9.jpg", "_DSC3350s.jpg",
  "_DSC3436s.jpg", "_DSC3553sm.jpg", "_DSC3703s.jpg", "_DSC3909sm.jpg",
  "_DSC3911s.jpg", "_DSC3947с.jpg", "_DSC3952.jpg", "_DSC4050s.jpg",
  "_DSC4100s.jpg", "_DSC4140s.jpg", "_DSC4232.jpg", "_DSC4655s.jpg",
  "_DSC4678sm.jpg", "_DSC4686s.jpg", "_DSC4789s.jpg", "_DSC4796s.jpg",
  "_DSC4872.jpg", "_DSC4951s.jpg", "_DSC4962s.jpg", "_DSC4994s.jpg",
  "_DSC5023s.jpg", "_DSC5042sm.jpg", "_DSC5163s.jpg", "_DSC5203s.jpg",
  "_DSC5209sm.jpg", "_DSC5473gsm.jpg", "_DSC5484.jpg", "_DSC5530sm.jpg",
  "_DSC5532smg 2.jpg", "_DSC5637s.jpg", "_DSC5709s.jpg", "_DSC5718sm.jpg",
  "_DSC5729smg.jpg", "_DSC5796bws.jpg", "_DSC6002s.jpg", "_DSC6095s.jpg",
  "_DSC6303sm.jpg", "_DSC6313s.jpg", "_DSC6539sm.jpg", "_DSC6738s.jpg",
  "_DSC7114s.jpg", "_DSC7157s.jpg", "_DSC7194sm.jpg", "_DSC7240s.jpg",
  "_DSC7592sm.jpg", "_DSC7594.jpg", "_DSC7886с.jpg", "_DSC7978sm.jpg",
  "_DSC8073g.jpg", "_DSC8143g.jpg", "_DSC8185s.jpg", "_DSC8505s.jpg",
  "_DSC8598gsm.jpg", "_DSC8761s.jpg", "_DSC8925sm.jpg", "_DSC9053s.jpg",
  "_DSC9127s.jpg", "_DSC9276sm.jpg", "_DSC9373s.jpg", "_DSC9508s.jpg",
  "_DSC9520s.jpg", "_DSC9586s.jpg", "_DSC9604s.jpg", "_DSC9609s.jpg",
  "_DSC9633s.jpg", "_DSC9634с.jpg", "_DSC9789s.jpg", "_DSC9865s.jpg",
  "_DSC9917s.jpg", "_DSC9928s.jpg"
] as const;

const professionalFiles = [
  "DSC_0152s.jpg", "DSC_4892s.jpg", "DSC_5195s.jpg", "DSC_9557s.jpg",
  "DSC_9637s.jpg", "DSC_9780s.jpg", "_DSC0156s.jpg", "_DSC0835s.jpg",
  "_DSC1958s.jpg", "_DSC2078s.jpg", "_DSC2722s.jpg", "_DSC2746_1с.jpg",
  "_DSC2812sm.jpg", "_DSC2816s.jpg", "_DSC3296s.jpg", "_DSC3823см.jpg",
  "_DSC4081s.jpg", "_DSC4535S.jpg", "_DSC4875s.jpg", "_DSC5239s.jpg",
  "_DSC5559sm.jpg", "_DSC5976s.jpg", "_DSC6149s.jpg", "_DSC6438sm.jpg",
  "_DSC6601s.jpg", "_DSC6780s.jpg", "_DSC6836s.jpg", "_DSC6952с.jpg",
  "_DSC7064sm.jpg", "_DSC7458bws.jpg", "_DSC8331s.jpg", "_DSC9211s.jpg",
  "_DSC9246BWs.jpg", "_DSC9301s.jpg", "_DSC9958_1s.jpg"
] as const;

const dimensionsFor = (file: string): [number, number] => {
  if (file === "_DSC3553sm.jpg") return [1335, 2000];
  if (file === "_DSC4678sm.jpg") return [2000, 1335];
  return [1, 1];
};

const makeCollection = (
  files: readonly string[],
  folder: string,
  category: PortfolioCategory,
  label: string
): PortfolioImage[] => files.map((file, index) => {
  const [width, height] = dimensionsFor(file);
  const orientation = height > width ? "portrait" : width > height ? "landscape" : "square";

  return {
    id: `${category}-${index + 1}`,
    src: imagePath(`${folder}/${file}`),
    alt: `${label} by Yana Lozeva, image ${index + 1}.`,
    width,
    height,
    aspectRatio: width / height,
    orientation,
    category,
    featured: index < 8
  };
});

export const personalImages = makeCollection(personalFiles, "personal crop", "personal", "Personal portrait");
export const corporateImages = makeCollection(professionalFiles, "proff crop", "corporate", "Professional portrait");
export const portfolioImages = [...personalImages, ...corporateImages];
export const homepageImages = Array.from(
  { length: Math.max(personalImages.length, corporateImages.length) },
  (_, index) => [personalImages[index], corporateImages[index]]
).flat().filter((image): image is PortfolioImage => Boolean(image));
export const workImages = homepageImages;

export const images = {
  hero: personalImages[0],
  couple: personalImages[1],
  family: personalImages[2],
  companyPortrait: corporateImages[0],
  companyTeam: corporateImages[1]
};
