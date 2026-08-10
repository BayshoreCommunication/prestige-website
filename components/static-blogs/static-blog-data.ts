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
  metaTitle: "The Truth About Digital Radiography Safety & Care",
  metaDescription:
    "How does digital radiography improve multidisciplinary care? Examine the safety benefits, radiation standards, and high-resolution diagnostic impact here.",
  canonical:
    "https://www.prestigemedpt.com/blogs/clinical-and-safety-benefits",
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

export const effectiveTreatmentPlanInjuryPatientsBlog: StaticBlog = {
  slug: "effective-treatment-plan-injury-patients",
  title:
    "What Goes Into Creating an Effective Treatment Plan for Injury Patients",
  cardTitle:
    "What Goes Into Creating an Effective Treatment Plan for Injury Patients",
  imageTitle: "What Goes Into Creating an Effective Treatment Plan for Injury Patients",
  description:
    "Professional physical therapy graphic illustrating the development of an effective treatment plan for injury patients. The image features a licensed physical therapist evaluating a patient's knee injury to create a personalized rehabilitation program based on medical assessment, pain management, therapeutic exercises, mobility goals, and functional recovery. It highlights the importance of customized care plans that promote faster healing, reduce pain, restore strength, and improve long-term physical function.",
  shortDescription:
    "Learn how a personalized treatment plan combines expert evaluation, targeted therapy, pain management, and rehabilitation strategies to help injury patients recover safely.",
  caption:
    "Learn how a personalized treatment plan combines expert evaluation, targeted therapy, pain management, and rehabilitation strategies to help injury patients recover safely, restore mobility, and achieve lasting results.",
  image:
    "/images/static-blogs/effective-treatment-plan-injury-patients.webp",
  alt: "Physical therapist assessing a patient's knee injury while creating a personalized treatment plan for pain relief, rehabilitation, mobility restoration, and recovery after injury.",
  category: "Injury Recovery",
  published: true,
  createdAt: "2026-07-08",
  metaTitle: "Best Effective Injury Plans for Florida Injury Patients",
  metaDescription:
    "Don't make the #1 mistake injury patients make. See how this Tampa team cuts recovery times by 30% using a hidden clinical method.",
  canonical:
    "https://www.prestigemedpt.com/blogs/effective-treatment-plan-injury-patients",
};

export const bestSleepingPositionsNeckBackPainBlog: StaticBlog = {
  slug: "best-sleeping-positions-neck-back-pain",
  title: "Best Sleeping Positions for Neck and Back Pain",
  cardTitle: "Best Sleeping Positions for Neck and Back Pain",
  imageTitle: "Best Sleeping Positions for Neck and Back Pain",
  description:
    "Educational physical therapy graphic explaining sleeping positions that may help support spinal alignment and comfort for people experiencing neck or back pain. The image compares side sleeping, back sleeping, and stomach sleeping, highlighting pillow support, spinal alignment, reduced strain, better sleep, and recovery.",
  shortDescription:
    "The way you sleep can affect how your neck and back feel. Learn which sleeping positions may support better spinal alignment, comfort, and restful sleep.",
  caption:
    "The way you sleep can affect how your neck and back feel. Learn which sleeping positions may support better spinal alignment, comfort, and restful sleep.",
  image:
    "/images/static-blogs/best-sleeping-positions-neck-back-pain.webp",
  alt: "Educational graphic showing recommended sleeping positions for neck and back pain, including side sleeping, back sleeping, and avoiding stomach sleeping.",
  category: "Spine Health & Sleep",
  published: true,
  createdAt: "2026-08-10",
  metaTitle: "We Ranked The Best Sleeping Position For Back & Neck Pain",
  metaDescription:
    "Back sleeping with a knee pillow is best for alignment. But if you are doing this one common position, you are secretly breaking your spine every night.",
  canonical:
    "https://www.prestigemedpt.com/blogs/best-sleeping-positions-neck-back-pain",
};

export const staticBlogs: StaticBlog[] = [
  bestSleepingPositionsNeckBackPainBlog,
  professionalPhysicalTherapyComplexInjuryCasesBlog,
  clinicalSafetyBlog,
  effectiveTreatmentPlanInjuryPatientsBlog,
];


