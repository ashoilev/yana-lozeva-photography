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
  calendly: {
    url: "https://calendly.com/traits"
  }
};

export const logo = {
  src: imagePath("traits.jpg"),
  alt: "traits"
};

export type PortfolioCategory = "personal" | "corporate";
export type PortfolioOrientation = "portrait" | "landscape";

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

export const portfolioImages: PortfolioImage[] = [
  {
    id: "yana-portrait-1369",
    src: imagePath("_DSC1369s.jpg"),
    alt: "Black-and-white vertical portrait with a quiet direct expression.",
    width: 1333,
    height: 2000,
    aspectRatio: 1333 / 2000,
    orientation: "portrait",
    category: "personal",
    featured: true
  },
  {
    id: "yana-portrait-2816",
    src: imagePath("_DSC2816s.jpg"),
    alt: "Black-and-white portrait in soft daylight.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "personal",
    featured: true
  },
  {
    id: "yana-portrait-0082",
    src: imagePath("_DSC0082s.jpg"),
    alt: "Editorial black-and-white portrait with relaxed posture.",
    width: 2000,
    height: 1333,
    aspectRatio: 2000 / 1333,
    orientation: "landscape",
    category: "personal",
    featured: true
  },
  {
    id: "yana-portrait-3517",
    src: imagePath("_DSC3517sm.jpg"),
    alt: "Black-and-white portrait photographed with natural light.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "personal",
    featured: true
  },
  {
    id: "yana-portrait-5042",
    src: imagePath("_DSC5042sm.jpg"),
    alt: "Intimate black-and-white portrait of people together.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "personal",
    featured: true
  },
  {
    id: "yana-work-1447",
    src: imagePath("_DSC1447s.jpg"),
    alt: "Black-and-white portrait with an editorial workplace feeling.",
    width: 2000,
    height: 1333,
    aspectRatio: 2000 / 1333,
    orientation: "landscape",
    category: "corporate",
    featured: true
  },
  {
    id: "yana-work-6539",
    src: imagePath("_DSC6539sm.jpg"),
    alt: "Human editorial portrait for company use.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "corporate",
    featured: true
  },
  {
    id: "yana-portrait-0779",
    src: imagePath("_DSC0779s.jpg"),
    alt: "Vertical black-and-white portrait with calm presence.",
    width: 1335,
    height: 2000,
    aspectRatio: 1335 / 2000,
    orientation: "portrait",
    category: "personal",
    featured: true
  },
  {
    id: "yana-work-04970",
    src: imagePath("_DSC04970s.jpg"),
    alt: "Black-and-white portrait for a professional context.",
    width: 2000,
    height: 1333,
    aspectRatio: 2000 / 1333,
    orientation: "landscape",
    category: "corporate",
    featured: true
  },
  {
    id: "yana-portrait-7157",
    src: imagePath("_DSC7157s.jpg"),
    alt: "Quiet black-and-white portrait in an intimate setting.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "personal",
    featured: false
  },
  {
    id: "yana-work-4686",
    src: imagePath("_DSC4686s.jpg"),
    alt: "Editorial portrait with restrained composition.",
    width: 2000,
    height: 1429,
    aspectRatio: 2000 / 1429,
    orientation: "landscape",
    category: "corporate",
    featured: false
  },
  {
    id: "yana-portrait-0431",
    src: imagePath("_DSC0431s.jpg"),
    alt: "Black-and-white personal portrait with natural expression.",
    width: 2000,
    height: 1334,
    aspectRatio: 2000 / 1334,
    orientation: "landscape",
    category: "personal",
    featured: false
  },
  {
    id: "yana-work-0831",
    src: imagePath("_DSC0831s.jpg"),
    alt: "Editorial portrait suitable for company profiles.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "corporate",
    featured: false
  },
  {
    id: "yana-portrait-1021",
    src: imagePath("_DSC1021s.jpg"),
    alt: "Relaxed black-and-white portrait with soft contrast.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "personal",
    featured: false
  },
  {
    id: "yana-work-5023",
    src: imagePath("_DSC5023s.jpg"),
    alt: "Human company portrait in black and white.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "corporate",
    featured: false
  },
  {
    id: "yana-work-5976",
    src: imagePath("_DSC5976s.jpg"),
    alt: "Minimal editorial portrait for professional use.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "corporate",
    featured: false
  },
  {
    id: "yana-work-5530",
    src: imagePath("_DSC5530sm.jpg"),
    alt: "Black-and-white portrait with a calm work-context tone.",
    width: 2000,
    height: 1335,
    aspectRatio: 2000 / 1335,
    orientation: "landscape",
    category: "corporate",
    featured: false
  },
  {
    id: "yana-portrait-7594",
    src: imagePath("_DSC7594.jpg"),
    alt: "Vertical editorial portrait in black and white.",
    width: 1335,
    height: 2000,
    aspectRatio: 1335 / 2000,
    orientation: "portrait",
    category: "personal",
    featured: false
  }
];

type ArchiveTuple = [file: string, width: number, height: number];

const archiveSelection: ArchiveTuple[] = [
  ["_DSC0025s.jpg", 2000, 1335],
  ["_DSC0032s.jpg", 1334, 2000],
  ["_DSC0064s.jpg", 2000, 1335],
  ["_DSC0100s.jpg", 2000, 1335],
  ["_DSC0122s.jpg", 2000, 1335],
  ["_DSC0156s.jpg", 2000, 1335],
  ["_DSC0203sm.jpg", 2000, 1335],
  ["_DSC0319s.jpg", 2000, 1428],
  ["_DSC0400sm.jpg", 2000, 1333],
  ["_DSC0467s.jpg", 2000, 1335],
  ["_DSC0500s.jpg", 2000, 1333],
  ["_DSC0537gsm.jpg", 1333, 2000],
  ["_DSC0756s.jpg", 2000, 1335],
  ["_DSC0834с.jpg", 1335, 2000],
  ["_DSC0891s.jpg", 2000, 1335],
  ["_DSC0943sm.jpg", 2000, 1335],
  ["_DSC1038s.jpg", 2000, 1333],
  ["_DSC1118gsm.jpg", 2000, 1335],
  ["_DSC1176с.jpg", 2000, 1333],
  ["_DSC1208с.jpg", 2000, 1333],
  ["_DSC1436s.jpg", 2000, 1335],
  ["_DSC1477s.jpg", 2000, 1333],
  ["_DSC1536sm.jpg", 2000, 1335],
  ["_DSC1616s.jpg", 2000, 1333],
  ["_DSC1688s.jpg", 2000, 1335],
  ["_DSC1766sm.jpg", 1335, 2000],
  ["_DSC1830sm.jpg", 2000, 1335],
  ["_DSC1958s.jpg", 2000, 1333],
  ["_DSC2036sm.jpg", 2000, 1333],
  ["_DSC2105s.jpg", 2000, 1335],
  ["_DSC2167s.jpg", 2000, 1333],
  ["_DSC2277s.jpg", 1335, 2000],
  ["_DSC2313.jpg", 2200, 1468],
  ["_DSC2393s.jpg", 2000, 1333],
  ["_DSC2420.jpg", 1600, 1068],
  ["_DSC2528bwс.jpg", 2000, 1333],
  ["_DSC2603sm.jpg", 2000, 1335],
  ["_DSC2722s.jpg", 1335, 2000],
  ["_DSC2746_1с.jpg", 2000, 1333],
  ["_DSC2789sm.jpg", 2000, 1335],
  ["_DSC2850s.jpg", 2000, 1333],
  ["_DSC2958s.jpg", 2000, 1333],
  ["_DSC3205s.jpg", 2000, 1333]
];

const archiveImages: PortfolioImage[] = archiveSelection.map(([file, width, height], index) => ({
  id: `yana-archive-${index + 1}`,
  src: imagePath(file),
  alt: `Portrait from Yana Lozeva's photography archive, image ${index + 1}.`,
  width,
  height,
  aspectRatio: width / height,
  orientation: height > width ? "portrait" : "landscape",
  category: index % 5 === 0 ? "corporate" : "personal",
  featured: false
}));

export const homepageImages = [
  ...portfolioImages.filter((image) => image.featured),
  ...archiveImages.slice(0, 18)
];
export const personalImages = portfolioImages.filter((image) => image.category === "personal");
export const corporateImages = portfolioImages.filter((image) => image.category === "corporate");
export const workImages = [...portfolioImages, ...archiveImages];

export const images = {
  hero: portfolioImages[0],
  couple: portfolioImages[1],
  family: portfolioImages[2],
  companyPortrait: portfolioImages[5],
  companyTeam: portfolioImages[6]
};
