import Image from "next/image";
import Link from "next/link";
import { clinicalSafetyBlog } from "../static-blog-data";

type BlogPostData = {
  data?: Array<{
    slug?: string;
    title?: string;
    published?: boolean;
    featuredImage?: {
      altText?: string;
      image?: {
        url?: string;
      };
    };
  }>;
};

const sections = [
  {
    number: "01",
    title: "Enhanced Patient Safety Through Low Radiation Digital X-Rays",
    body: [
      "Patient safety remains the most vital part of our mission. Many individuals express valid concerns about radiation exposure when they require diagnostic tests. Traditional film methods required a significant amount of radiation to create a visible image on a plastic sheet.",
    ],
    source:
      "Modern digital radiography systems can reduce radiation exposure compared with traditional film while still producing clinically useful images.",
    sourceLabel: "Food and Drug Administration",
    subsections: [
      {
        title: "Adherence to the ALARA Safety Standard",
        body: [
          "We follow the ALARA principle which stands for As Low As Reasonably Achievable. This is a global safety standard for radiation protection. Our team evaluates the necessity of every image before proceeding.",
          "We use specialized shielding and precise positioning to ensure only the target area receives exposure. By keeping your cumulative radiation levels low, we allow for safer follow-up tests if your recovery requires it.",
        ],
        points: [
          "Customized Shielding: Use of lead aprons to protect non-target organs.",
          "Precision Collimation: Focus of the beam strictly on the area of interest.",
          "Dose Monitoring: Constant tracking of exposure levels for every patient.",
        ],
      },
    ],
    points: [
      "Adherence to the ALARA safety standard",
      "Reduced need for duplicate scans",
      "Clear images that support confident clinical decisions",
    ],
  },
  {
    number: "02",
    title: "Advanced Diagnostic Accuracy with High-Resolution Imaging",
    body: [
      "Accuracy in the first few days after an injury can change the entire course of your rehabilitation. Electronic technology provides a level of clarity that was previously impossible to achieve.",
      "We can manipulate these high-resolution files in real-time. Our doctors can zoom into a specific area of a vertebrae or adjust the lighting of the image to find hidden issues. This precision ensures that we catch small problems before they become chronic conditions.",
    ],
    source:
      "The benefits of digital radiography can support better outcomes for patients with musculoskeletal pain.",
    sourceLabel: "BMC National Library of Medicine",
    subsections: [
      {
        title: "Superior Visual Contrast for Fracture Detection",
        body: [
          "Small fractures or joint misalignments often hide in traditional film shadows. Digital technology removes these obstacles. We use software to enhance the contrast of the bone against the soft tissue.",
          "This helps our clinicians identify hairline fractures that might otherwise go unnoticed. Finding these issues early prevents you from performing movements that could worsen the injury. Clarity is the first step toward a successful treatment plan.",
        ],
      },
      {
        title: "Faster Medical Results and Shorter Wait Times",
        body: [
          "Waiting for results can feel like an eternity when you are in pain. Traditional film required a darkroom and several minutes of processing time. Our computerized system displays your results on a monitor in seconds.",
          "We review the findings with you immediately. This speed allows us to explain your condition while you are still in the exam room. The true benefit lies in the ability to start your personalized physical therapy or medical treatment plan without any delay.",
        ],
      },
      {
        title: "Interactive Patient Education Through Visuals",
        body: [
          "Digital imaging allows us to show patients their scans, helping them understand their treatment and feel confident in their progress.",
        ],
      },
    ],
    points: [
      "Superior visual contrast for fracture detection",
      "Faster medical results and shorter wait times",
      "Interactive patient education through visuals",
    ],
  },
  {
    number: "03",
    title: "Efficient Multidisciplinary Care Coordination",
    body: [
      "The strength of Prestige Medical and Physical Therapy lies in our integrated approach. Your recovery might involve a medical physician, a chiropractor, and a physical therapist working together. Electronic diagnostic files act as the common language for all these professionals.",
      "Our internal network stores your images in a secure digital environment. Every specialist on your team can access these files from their own station.",
    ],
    source:
      "Health information technology supports patient security, care quality, and better coordination between providers.",
    sourceLabel: "National Academies Health IT and Patient Safety",
    subsections: [
      {
        title: "Clarified Communication Between Medical Specialists",
        body: [
          "Our digital system ensures all specialists have access to your images instantly, improving coordination, avoiding duplicate scans, and supporting a seamless treatment plan.",
        ],
      },
      {
        title: "Reducing Costs by Avoiding Duplicate Scans",
        body: [
          "Patients often feel burdened when they have to carry physical films from one office to another. These films can be lost or damaged easily. Our digital system allows us to share your records securely with outside specialists or insurance carriers if the need arises.",
          "This portability protects you from having to undergo the same scan multiple times. We follow the guidelines set by Centers for Medicare & Medicaid Services to ensure that your diagnostic journey is both efficient and cost-effective.",
        ],
        points: [
          "Digital Portability: Images shared via secure links or encrypted drives.",
          "Reduced Costs: Elimination of film fees and repetitive scan charges.",
          "Speed of Referral: Immediate data transfer to external specialists if required.",
        ],
      },
      {
        title: "Optimized Workflow for Integrated Treatment",
        body: [
          "Your physical therapist needs to know exactly which structures are compromised before they begin manual therapy. Digital technology provides this essential roadmap.",
          "Enhanced diagnostic accuracy ensures that your treatment plan is based on hard data rather than estimation. We work as one unit to ensure that every exercise you perform brings you closer to your goals.",
        ],
      },
    ],
    points: [
      "Clarified communication between medical specialists",
      "Lower costs by avoiding duplicate imaging",
      "Optimized workflow for integrated treatment",
    ],
  },
  {
    number: "04",
    title: "Personalized Physical Therapy and Rehabilitation Plans",
    body: [
      "Physical therapy is a science of movement and alignment. Our therapists use computerized results to build a roadmap for your rehabilitation. We do not rely on generalized exercises.",
      "Instead, we look at the specific geometry of your body. We measure the spacing between joints and the curvature of your spine with digital tools. This information helps us select the movements that will provide the most benefit without causing further irritation.",
    ],
    subsections: [
      {
        title: "Custom Protocols Based on Internal Anatomy",
        body: [
          "No two patients have the same internal structures. Some people have natural variations in their bone shape or joint spacing. Digital radiography allows us to see these nuances before we start your therapy.",
          "Using real-time image acquisition, we can make immediate adjustments to your care plan as new information becomes available.",
        ],
      },
      {
        title: "Tracking Progress with Digital Imaging Comparisons",
        body: [
          "True healing happens over time. We use periodic digital scans to track how your body responds to therapy. We can overlay an image from your first visit with a newer scan to see how your alignment has improved.",
          "This visual evidence provides a massive boost to your morale. It also allows us to refine your treatment plan based on hard data. Workflow efficiency in our clinic means you spend less time in the waiting room and more time focusing on these visible improvements.",
        ],
        points: [
          "Visual Validation: Side-by-side comparisons of joint spacing.",
          "Metric-Based Tracking: Measurement of bone density or spinal curvature changes.",
          "Motivational Support: Seeing physical proof of your internal recovery.",
        ],
      },
    ],
    points: [
      "Custom protocols based on internal anatomy",
      "Progress tracking through digital imaging comparisons",
      "Treatment planning that connects diagnosis with therapy goals",
    ],
  },
];

const quickTakeaways = [
  "Digital x-rays have lower radiation than traditional film.",
  "ALARA standard ensures every scan uses the lowest dose reasonably achievable.",
  "High-resolution imaging detects hairline fractures that film shadows can hide.",
  "Every specialist on your care team accesses your images instantly and securely.",
  "Physical therapy plans are built around the specific geometry of your own body.",
  "Side-by-side scan comparisons confirm and track real progress over time.",
];

const stats = [
  {
    value: "80-90%",
    label: "Radiation Reduction vs. Film (FDA)",
  },
  {
    value: "Seconds",
    label: "Time to Display Your Digital Results",
  },
  {
    value: "4",
    label: "Specialists Can Access Your Images Simultaneously",
  },
];

const faqs = [
  {
    question: "How often should I get digital X-rays during rehabilitation?",
    answer:
      "The frequency of scans depends on your injury and treatment plan. Your care team orders X-rays only when necessary, balancing diagnostic insight with patient safety.",
  },
  {
    question: "Are digital X-rays safe during pregnancy?",
    answer:
      "Digital radiography uses very low radiation, and protective shielding can be applied to ensure safety for both mother and baby. Your clinician will guide timing and precautions if imaging is needed.",
  },
  {
    question: "Will insurance cover digital imaging at Prestige Medical?",
    answer:
      "Most insurance plans cover digital X-rays. Our staff can verify your coverage and provide documentation to minimize out-of-pocket costs.",
  },
];

const articleUrl = clinicalSafetyBlog.canonical;
const articleImageUrl = `https://www.prestigemedpt.com${clinicalSafetyBlog.image}`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: clinicalSafetyBlog.title,
    description: clinicalSafetyBlog.metaDescription,
    image: articleImageUrl,
    datePublished: clinicalSafetyBlog.createdAt,
    dateModified: clinicalSafetyBlog.createdAt,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "Prestige Medical & Physical Therapy",
    },
    publisher: {
      "@type": "Organization",
      name: "Prestige Medical & Physical Therapy",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

const postDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function ClinicalAndSafetyBenefitsBlog({
  blogPostData,
}: {
  blogPostData?: BlogPostData;
}) {
  const recentBlogs =
    blogPostData?.data?.filter((blog) => blog.published === true).slice(0, 8) ||
    [];

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative px-8 w-full mx-auto">
        <div className="absolute inset-0">
          <Image
            src="/images/blogspage/latestblogs/bg.png"
            alt="Blogs page Background"
            width={1000}
            height={800}
            className="object-cover object-top w-full h-full z-10"
            priority
          />
          <div className="absolute inset-0 bg-prestige-yellow/10 pointer-events-none z-10" />
        </div>

        <div className="relative z-20 flex flex-col justify-center items-start min-h-[300px] md:min-h-[400px] text-white space-y-4 max-w-[1640px] mx-auto">
          <p className="text-3xl md:text-5xl font-bold text-black">
            Blog Details
          </p>
          <div className="flex items-center space-x-2 bg-prestige-yellow px-3 py-1 rounded-full">
            <Link
              href="/"
              className="text-black px-3 py-1 rounded font-semibold transition hover:underline"
            >
              Home
            </Link>
            <span className="text-black">/</span>
            <Link
              href="/blogs"
              className="text-black hover:underline font-semibold transition"
            >
              Blog Details
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1640px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="bg-white px-4 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:px-8 md:px-12">
              <div className="grid overflow-hidden border border-[#1A3A5C] text-sm font-bold uppercase tracking-wide md:grid-cols-[1fr_auto]">
                <div className="bg-[#1A3A5C] px-4 py-3 text-white">
                  Prestige Medical and Physical Therapy
                </div>
                <div className="bg-[#2B7BBA] px-4 py-3 text-white">
                  Digital Radiography | Multidisciplinary Care | Tampa, Florida
                </div>
              </div>

              <div className="border-b-4 border-prestige-yellow pb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prestige-yellow">
                  {clinicalSafetyBlog.category}
                </p>
                <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#1B2639] md:text-5xl">
                  {clinicalSafetyBlog.title}
                </h1>
                <p className="mt-4 text-sm italic text-gray-600">
                  {postDate(clinicalSafetyBlog.createdAt)}
                </p>
              </div>

              <figure className="mt-8">
                <div className="overflow-hidden border border-gray-200 bg-black">
                  <Image
                    src={clinicalSafetyBlog.image}
                    alt={clinicalSafetyBlog.alt}
                    title={clinicalSafetyBlog.imageTitle}
                    width={1088}
                    height={658}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <figcaption className="border-x border-b border-gray-200 bg-[#f7f7f7] px-4 py-3 text-center text-sm italic text-gray-600">
                  {clinicalSafetyBlog.caption}
                </figcaption>
              </figure>

              <div className="mt-8 bg-[#EBF5FF] p-6">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B2639]">
                  Quick Takeaways
                </h2>
                <ul className="mt-4 grid gap-3 text-base text-gray-800">
                  {quickTakeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2B7BBA]" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid border-y border-gray-200 md:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-gray-200 p-5 text-center md:border-r last:md:border-r-0"
                  >
                    <div className="text-3xl font-bold text-[#1A3A5C]">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg leading-8 text-gray-700">
                The journey toward physical recovery often begins with a single
                question about what is happening inside the body. Prestige
                Medical and Physical Therapy understands that uncertainty
                creates a heavy emotional burden for our patients.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Our priority involves providing clear answers while maintaining
                the highest standards of protection. We focus on the clinical
                and safety benefits of digital radiography in multidisciplinary
                care to ensure your recovery starts on firm ground.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                This modern technology allows our team to visualize your health
                with incredible detail. It bridges the gap between different
                medical specialists to provide a seamless experience.
              </p>

              <div className="my-8 border border-gray-200 bg-[#fbfbfb] p-5">
                <h2 className="text-xl font-bold text-[#1B2639]">
                  Article Overview
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {sections.map((section) => (
                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="flex gap-3 border border-gray-200 bg-white p-4 transition hover:border-prestige-yellow"
                    >
                      <span className="font-bold text-prestige-yellow">
                        {section.number}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-[#1B2639]">
                        {section.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {sections.map((section) => (
                  <section
                    key={section.number}
                    id={`section-${section.number}`}
                    className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black">
                        {section.number}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold leading-snug text-[#1B2639]">
                          {section.title}
                        </h3>
                        <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                          {section.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        {section.source && (
                          <div className="my-5 bg-[#EBF5FF] p-5">
                            <p className="text-base italic leading-7 text-[#1B2639]">
                              {section.source}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-[#2B7BBA]">
                              Source: {section.sourceLabel}
                            </p>
                          </div>
                        )}
                        <ul className="mt-5 grid gap-3 text-base text-gray-800">
                          {section.points.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-prestige-yellow" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 space-y-6">
                          {section.subsections.map((subsection) => (
                            <div key={subsection.title}>
                              <h4 className="text-xl font-bold text-[#1B2639]">
                                {subsection.title}
                              </h4>
                              <div className="mt-3 space-y-3 text-base leading-8 text-gray-700">
                                {subsection.body.map((paragraph) => (
                                  <p key={paragraph}>{paragraph}</p>
                                ))}
                              </div>
                              {subsection.points && (
                                <ul className="mt-4 grid gap-3 text-base text-gray-800">
                                  {subsection.points.map((point) => (
                                    <li key={point} className="flex gap-3">
                                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2B7BBA]" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-10 border-t-4 border-[#2B7BBA] pt-6">
                <h2 className="text-3xl font-bold text-[#1B2639]">
                  Frequently Asked Questions
                </h2>
                
                <div className="mt-6 space-y-5">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="bg-[#f7f7f7] p-5">
                      <h3 className="text-xl font-bold text-[#1B2639]">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-[#1B2639] p-6 text-white">
                <h2 className="text-2xl font-bold">
                  Start Your Journey to Pain-Free Living with Prestige Medical &
                  Physical Therapy
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-100">
                  Do not let pain or uncertainty hold you back from the life you
                  deserve. Prestige Medical and Physical Therapy combines
                  world-class medical expertise with the latest in digital
                  diagnostic technology to put you on the fastest path to
                  recovery.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-100">
                  Whether you are dealing with a recent injury or a chronic
                  condition, our multidisciplinary team is here to provide the
                  precise, safe, and compassionate care you need.
                </p>
              </div>

              <div className="mt-8 bg-[#EBF5FF] p-6">
                <h2 className="text-2xl font-bold text-[#1B2639]">
                  Contact Prestige Medical and Physical Therapy Today
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  Ready to book your appointment or have a question for our
                  team? Reach out to us through the details below.
                </p>
                <dl className="mt-5 grid gap-3 text-base text-gray-800">
                  <div>
                    <dt className="font-bold">Website:</dt>
                    <dd>www.prestigemedpt.com</dd>
                  </div>
                  <div>
                    <dt className="font-bold">Phone:</dt>
                    <dd>(813) 243-2500</dd>
                  </div>
                  <div>
                    <dt className="font-bold">Address:</dt>
                    <dd>
                      2313 W. Hillsborough Ave. Suite 330, Tampa, FL 33615
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 border border-gray-200 p-5">
                <p className="mt-4 text-sm italic leading-6 text-gray-600">
                  This article provides general information and does not
                  constitute medical advice. Please contact Prestige Medical and
                  Physical Therapy for personalized diagnosis and treatment.
                </p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 max-h-[1000px] overflow-y-auto overflow-x-hidden rounded-lg p-3">
              <h2 className="mb-6 border-b-2 border-gray-500 pb-4 text-3xl font-medium text-black md:text-4xl">
                Recent Blogs
              </h2>

              <Link
                className="my-3 flex items-start gap-3 bg-white p-3 drop-shadow-lg"
                href={`/blogs/${clinicalSafetyBlog.slug}`}
              >
                <Image
                  width={180}
                  height={180}
                  src={clinicalSafetyBlog.image}
                  alt={clinicalSafetyBlog.alt}
                  className="h-[76px] w-[100px] object-cover"
                />
                <div className="text-left">
                  <div className="line-clamp-2 text-md font-bold text-black">
                    {clinicalSafetyBlog.cardTitle}
                  </div>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {clinicalSafetyBlog.shortDescription}
                  </p>
                </div>
              </Link>

              {recentBlogs.map((blog, index) => (
                <Link
                  className="my-3 flex items-start gap-3 bg-white p-3 drop-shadow-lg"
                  key={`${blog.slug}-${index}`}
                  href={`/blogs/${blog.slug}`}
                >
                  <Image
                    width={180}
                    height={180}
                    src={
                      blog.featuredImage?.image?.url ||
                      "/images/static-blogs/digital-radiography-multidisciplinary-care-benefits.webp"
                    }
                    alt={blog.featuredImage?.altText || blog.title || "Blog"}
                    className="h-[76px] w-[100px] object-cover"
                  />
                  <div>
                    <div className="line-clamp-2 text-md font-bold text-black text-left">
                      {blog.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
