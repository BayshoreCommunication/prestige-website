export type StaticBlog = {
  slug: string;
  title: string;
  cardTitle: string;
  imageTitle: string;
  description: string;
  shortDescription: string;
  caption: string;
  image: string;
  alt: string;
  category: string;
  published: boolean;
  createdAt: string;
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
};

export const clinicalSafetyBlog: StaticBlog = {
  slug: "clinical-and-safety-benefits",
  title:
    "Clinical and Safety Benefits of Digital Radiography in Multidisciplinary Care",
  cardTitle:
    "Clinical and Safety Benefits of Digital Radiography in Multidisciplinary Care",
  imageTitle: "Digital Radiography in Multidisciplinary Patient Care",
  description:
    "Healthcare professionals analyzing digital X-ray imaging and spinal scans with a patient to improve diagnostic accuracy, treatment planning, and collaborative multidisciplinary care.",
  shortDescription:
    "How digital radiography supports safer imaging, faster diagnosis, care coordination, and personalized rehabilitation planning.",
  caption:
    "Therapy and medical teams using digital radiography to support accurate diagnosis and patient treatment planning.",
  image:
    "/images/static-blogs/digital-radiography-multidisciplinary-care-benefits.webp",
  alt: "Medical therapy team reviewing digital radiography scans with a patient during a multidisciplinary care consultation",
  category: "Digital Radiography",
  published: true,
  createdAt: "2026-05-11",
};

export const professionalPhysicalTherapyComplexInjuryCasesBlog: StaticBlog = {
  slug: "the-difference-professional-physical-therapy-makes-in-complex-injury-cases",
  title:
    "The Difference Professional Physical Therapy Makes in Complex Injury Cases",
  cardTitle: "Is Physical Therapy Better for Complex Injuries?",
  metaTitle: "Is Physical Therapy Better for Complex Injuries?",
  metaDescription:
    "Find out why professional physical therapy is essential for complex injuries. And how Florida patients recover faster with multi disciplinary care from Prestige.",
  canonical:
    "https://www.prestigemedpt.com/blogs/the-difference-professional-physical-therapy-makes-in-complex-injury-cases",
  imageTitle: "The Impact of Professional Physical Therapy on Complex Injuries",
  description:
    "Healthcare and rehabilitation graphic highlighting the benefits of professional physical therapy for complex injury cases. The image emphasizes faster recovery, chronic pain prevention, multidisciplinary treatment approaches, auto accident rehabilitation, Florida PIP-related care, and early intervention strategies that support improved patient outcomes and long-term mobility.",
  shortDescription:
    "Why professional physical therapy, early intervention, and multi-disciplinary care matter for complex injury recovery in Florida.",
  caption:
    "Professional physical therapy helps patients recover from complex injuries through personalized treatment plans, pain management, rehabilitation exercises, and early intervention for better outcomes.",
  image:
    "/images/static-blogs/professional-physical-therapy-complex-injury-cases.webp",
  alt: "Physical therapist assisting a patient with rehabilitation exercises for recovery from a complex injury and chronic pain management.",
  category: "Physical Therapy",
  published: true,
  createdAt: "2026-06-11",
};

export const staticBlogs: StaticBlog[] = [
  professionalPhysicalTherapyComplexInjuryCasesBlog,
  clinicalSafetyBlog,
];
