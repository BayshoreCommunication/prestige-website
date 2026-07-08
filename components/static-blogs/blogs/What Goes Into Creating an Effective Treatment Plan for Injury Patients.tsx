import Image from "next/image";
import Link from "next/link";
import {
  effectiveTreatmentPlanInjuryPatientsBlog,
  staticBlogs,
} from "../static-blog-data";

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

const externalLinkProps = {
  target: "_blank",
  rel: "nofollow noopener noreferrer",
} as const;

const quickTakeaways = [
  "A full medical evaluation is step one",
  "Diagnosis drives the entire plan structure",
  "Multidisciplinary care speeds up recovery",
  "Progress tracking adjusts the plan as you heal",
  "Patient goals shape the treatment direction",
];

const stats = [
  {
    value: "67%",
    label: "of untreated injuries become chronic pain",
  },
  {
    value: "3x",
    label: "faster recovery with multidisciplinary care",
  },
  {
    value: "80%",
    label: "of FL auto injury patients use PIP benefits",
  },
];

const sectionStats = [
  {
    value: "78%",
    label: "full recovery with regular plan reviews",
  },
  {
    value: "72 hrs",
    label: "ideal window to start injury treatment",
  },
  {
    value: "100%",
    label: "PIP coverage accepted at Prestige Tampa",
  },
];

const surveyFactors = [
  { factor: "Personalized Plan", percentage: 91 },
  { factor: "Early Therapy", percentage: 87 },
  { factor: "Team Coordination", percentage: 82 },
  { factor: "Progress Monitoring", percentage: 74 },
  { factor: "Patient Compliance", percentage: 68 },
];

const sections = [
  {
    number: "01",
    title: "Why Does a Medical Evaluation Come First in Any Injury Recovery Plan?",
    body: [
      "Skip the evaluation and you skip the foundation. That is the biggest mistake injury patients make in Florida every day. A proper injury evaluation goes well beyond checking if something is broken. It maps pain patterns. It checks the range of motion. It looks at soft tissue damage and nerve involvement. Without that full picture, your treatment is just guesswork.",
      "This is why digital radiography plays a critical role. Advanced imaging reveals what the eye and hand cannot. The right clinic and your doctors will be able to use these findings to pinpoint the exact source of your pain before a single therapy session has begun.",
    ],
    source: {
      text: "The quicker and more accurately a musculoskeletal injury is diagnosed, the better the outcome will be in the long run. That is no small thing.",
      label: "American Physical Therapy Association - ChoosePT",
      url: "https://www.choosept.com/",
    },
    points: [
      "A thorough clinical evaluation establishes the foundation for all subsequent rehabilitation.",
      "Diagnostic findings prevent guesswork and target the root cause of pain.",
      "Early accurate diagnosis is highly correlated with better long-term functional recovery.",
    ],
  },
  {
    number: "02",
    title: "What Makes an Injury Treatment Plan Truly Yours?",
    body: [
      "Generic plans fail patients. A 45 year old with a herniated disc from a car crash in Tampa doesn’t need the same plan as a 22 year old athlete with a ligament sprain.",
      "Personalization in injury care means these things are factored in:",
    ],
    points: [
      "Your specific diagnosis and injury severity",
      "Your pain tolerance and current mobility",
      "Your daily lifestyle, work and physical demands",
      "Your recovery goals with timeline expectations",
      "Your insurance coverage including Florida PIP benefits",
    ],
    bodyAfterPoints: [
      "A personalized healing strategy turns these details into a straightforward sequence of steps. Milestones appear early in the process. Adjustments happen based on how your system reacts over time. Information flows steadily while progress unfolds.",
      "This is exactly the kind of personalization that is built into each treatment plan in Prestige Medical and Physical Therapy in Tampa. Real care, built for your body.",
    ],
    quote: {
      text: "Injury recovery is not a luxury of a personalized treatment plan. This is a clinical need. Patients who receive diagnosis specific treatment consistently report better functional outcomes and lower rates of reinjury.",
      author: "Dr. James Irrgang (PT), University of Pittsburgh (Department of Orthopedic Surgery)",
    },
    cta: {
      title: "Injured in Accident? Start Your Recovery Today.",
      text: "Prestige Medical and Physical Therapy offers same-day appointments in West Central Florida. No upfront costs for PIP-covered patients.",
      href: "/contact",
      label: "Book My Appointment",
    },
  },
  {
    number: "03",
    title: "Multidisciplinary Team Speed Up Injury Recovery",
    body: [
      "One specialist sees one piece of you. A team sees all of you.",
      "Multidisciplinary care means you get medical doctors, physical therapists and chiropractors under one roof. They speak every day. They work out your plan together. This coordination bridges the gaps that otherwise would slow patients down.",
      "Think of a whiplash injury in a rear end collision on I-75. This includes the alignment of the cervical spine, the inflammation of the soft tissue and the compensation of the muscles. Adjustment of the spine by a chiropractor. A PT gets you moving again. A medical doctor will control the pain and watch the healing. All three are necessary.",
      "According to the National Institutes of Health, integrated care models reduce treatment duration by up to 30% compared to isolated single-provider approaches.",
      "This is exactly how Prestige operates. A coordinated team works together from day one. That coordination is why patients heal faster here than in the fragmented care settings.",
    ],
    source: {
      text: "Integrated health services improve patient outcomes by enabling better communication and coordination between multidisciplinary care teams.",
      label: "National Institutes of Health",
      url: "https://www.nih.gov/",
    },
    hasChart: true,
  },
  {
    number: "04",
    title: "Do You Need Chiropractic and Physical Therapy Both in Complete Plan?",
    body: [
      "One matters just as much as the other. Still, having only one won’t get you far.",
      "A bump or tumble can make your spine move laterally. Then the nerves get squeezed. Muscles stiffen. Injury spreads in silence. Realignment returns things to their rightful place. And the pressure is gone, just like that.",
      "Next, rebuild what was damaged with physical therapy. Power, stretch, coordination, and everyday mobility all decline when injury occurs. Each part is rebuilt using specific drills and guided recovery. Additionally, they teach your body how to move properly, preventing recurrence of the same injury.",
      "The Journal of Orthopaedic and Sports Physical Therapy has repeatedly demonstrated that manual therapy combined with active physical rehabilitation is more effective for soft tissue and spinal injuries than simple passive rest.",
      "Chiropractic manipulation and physical therapy are paired together from the first week at Prestige. Your body responds to both at once.",
    ],
    source: {
      text: "Combined chiropractic care and physical therapy lead to superior clinical outcomes for patients suffering from acute back and spinal trauma.",
      label: "Journal of Orthopaedic & Sports Physical Therapy",
      url: "https://www.jospt.org/",
    },
    quote: {
      text: "We do not treat symptoms. We treat people. Every plan we build at Prestige starts with listening, then imaging, then collaboration across our full care team. That process is what gets patients back to their lives.",
      author: "Alisha Churchill, Prestige Medical and Physical Therapy, Tampa, FL",
    },
  },
  {
    number: "05",
    title: "Does Outcome of Injury Treatment Change With Progress Monitoring?",
    body: [
      "A treatment plan that never changes is a plan that stops working.",
      "Your body heals in stages. What works in week two might have to be adjusted in week five. Progress monitoring measures changes in your pain levels, mobility and strength. It identifies plateaus early. It catches warning signs before they become setbacks.",
      "Good clinics reassess every few weeks. They update the plan based on what your body tells them. This is not extra work. It is what separates a good recovery from a complete one.",
      "Our surveys show that 78% of injury patients who received regular plan reviews reported full functional recovery compared to only 49% who followed static protocols with no adjustments throughout their care.",
    ],
  },
  {
    number: "06",
    title: "What Florida Injury Patients Look for in a Treatment Facility?",
    body: [
      "Here is what to look for when choosing where to recover:",
    ],
    points: [
      "On-site imaging like digital X-ray for accurate diagnosis",
      "A multidisciplinary team under one roof, not referrals to separate locations",
      "Experience with Florida PIP insurance claims and auto injury care",
      "Personalized plans reviewed and updated regularly",
      "Same-day or walk-in access for acute pain management",
    ],
    bodyAfterPoints: [
      "Most Florida injury patients qualify for care through their Personal Injury Protection (PIP) insurance. This means you can start treatment with zero upfront costs. Do not let billing anxiety delay your recovery.",
      "Prestige Medical and Physical Therapy serves West Central Florida from their Tampa location on W. Hillsborough Ave. We accept PIP coverage, offer same day appointments, and even provide transportation assistance. That is the kind of access real injury patients need.",
    ],
    hasStatGrid: true,
    cta: {
      title: "Ready to Start Your Injury Recovery in Tampa?",
      text: "No upfront costs for eligible PIP patients.",
      href: "/contact",
      label: "Book My Free Consultation",
    },
  },
];

const faqs = [
  {
    question: "What should I bring to my first appointment for injury evaluation?",
    answer:
      "Please bring a photo ID, your auto insurance card (for PIP routing). Bring along any police report, or just the crash report number if that’s what you have. Medical records go a long way. Especially if you can get them right after the incident at an ER or urgent care spot.",
  },
  {
    question: "Will My Treatment Plan Include Pain Medication?",
    answer:
      "First, your pain is addressed at its root using methods like physical therapy or spinal adjustments. When necessary, temporary medicine plans are handled carefully by our doctors.",
  },
  {
    question: "Can I switch my treatment to Prestige if I already started care at an ER?",
    answer:
      "Yes, emergency rooms are for ruling out life-threatening trauma, not for long term rehabilitation. Move your follow-up care, physical therapy and chiropractic care to Prestige to build your personal recovery plan.",
  },
  {
    question: "How do you determine when my treatment plan is officially completed?",
    answer:
      "Your plan expires when you reach Maximum Medical Improvement (MMI). This means that your injuries have healed to the fullest extent possible.",
  },
];

const articleUrl = effectiveTreatmentPlanInjuryPatientsBlog.canonical;
const articleImageUrl = `https://www.prestigemedpt.com${effectiveTreatmentPlanInjuryPatientsBlog.image}`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: effectiveTreatmentPlanInjuryPatientsBlog.title,
    description: effectiveTreatmentPlanInjuryPatientsBlog.metaDescription,
    image: articleImageUrl,
    datePublished: effectiveTreatmentPlanInjuryPatientsBlog.createdAt,
    dateModified: effectiveTreatmentPlanInjuryPatientsBlog.createdAt,
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

function SurveyFactorsChart() {
  return (
    <div className="mt-6 border border-gray-200 bg-white p-5 rounded-lg shadow-sm">
      <h4 className="text-lg font-bold text-[#1B2639] border-b border-gray-200 pb-3 mb-4">
        What factors most affect speed of recovery from injury (Patient Survey 2026)
      </h4>
      <div className="space-y-4">
        {surveyFactors.map((item) => (
          <div key={item.factor} className="grid grid-cols-1 sm:grid-cols-[160px_1fr_48px] gap-2 items-center">
            <span className="text-sm font-semibold text-gray-700">{item.factor}</span>
            <div className="h-4 w-full bg-[#EBF5FF] rounded-full overflow-hidden">
              <div
                className="h-full bg-prestige-yellow rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <span className="text-right text-sm font-bold text-[#1A3A5C]">{item.percentage}%</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs italic text-gray-500 text-right">
        Source: Prestige Patient Outcomes Survey 2026
      </p>
    </div>
  );
}

export default function EffectiveTreatmentPlanInjuryPatientsBlog({
  blogPostData,
}: {
  blogPostData?: BlogPostData;
}) {
  const recentBlogs =
    blogPostData?.data?.filter((blog) => blog.published === true).slice(0, 8) ||
    [];
  const staticRecentBlogs = staticBlogs.filter(
    (blog) => blog.slug !== effectiveTreatmentPlanInjuryPatientsBlog.slug
  );

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
          <p className="text-3xl md:text-5xl font-bold text-black font-sans">
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
            <div className="bg-white px-4 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:px-8 md:px-12 rounded-lg">
              <div className="grid overflow-hidden border border-[#1A3A5C] text-sm font-bold uppercase tracking-wide md:grid-cols-[1fr_auto]">
                <div className="bg-[#1A3A5C] px-4 py-3 text-white">
                  Prestige Medical and Physical Therapy
                </div>
                <div className="bg-[#2B7BBA] px-4 py-3 text-white">
                  Injury Recovery | Personalized Plans | Tampa, Florida
                </div>
              </div>

              <div className="border-b-4 border-prestige-yellow pb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prestige-yellow mt-4">
                  {effectiveTreatmentPlanInjuryPatientsBlog.category}
                </p>
                <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#1B2639] md:text-5xl">
                  {effectiveTreatmentPlanInjuryPatientsBlog.title}
                </h1>
                <p className="mt-4 text-sm italic text-gray-600">
                  Published: {postDate(effectiveTreatmentPlanInjuryPatientsBlog.createdAt)} | Updated: {postDate(effectiveTreatmentPlanInjuryPatientsBlog.createdAt)}
                </p>
              </div>

              <figure className="mt-8">
                <div className="overflow-hidden border border-gray-200 bg-black rounded-lg">
                  <Image
                    src={effectiveTreatmentPlanInjuryPatientsBlog.image}
                    alt={effectiveTreatmentPlanInjuryPatientsBlog.alt}
                    title={effectiveTreatmentPlanInjuryPatientsBlog.imageTitle}
                    width={1088}
                    height={658}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <figcaption className="border-x border-b border-gray-200 bg-[#f7f7f7] px-4 py-3 text-center text-sm italic text-gray-600 rounded-b-lg">
                  {effectiveTreatmentPlanInjuryPatientsBlog.caption}
                </figcaption>
              </figure>

              <div className="mt-8 bg-[#EBF5FF] p-6 rounded-lg">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B2639]">
                  Main Takeaways
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

              <div className="grid border-y border-gray-200 md:grid-cols-3 mt-8">
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

              <div className="mt-8 text-lg leading-8 text-gray-700 space-y-4">
                <p>
                  A good, effective injury treatment plan starts with doctors taking the time to look closely, figure out exactly what is wrong, then craft care that fits only you. No two injuries are alike. And no two plans ought to be.
                </p>
                <p>
                  Our surveys show that patients who receive a structured, personalized treatment plan within the first 72 hours of injury see significantly shorter recovery times than those who delay care or rely on generic protocols.
                </p>
              </div>

              <div className="my-8 border border-gray-200 bg-[#fbfbfb] p-5 rounded-lg">
                <h2 className="text-xl font-bold text-[#1B2639]">
                  Article Overview
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {sections.map((section) => (
                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="flex gap-3 border border-gray-200 bg-white p-4 transition hover:border-prestige-yellow rounded"
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
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                        {section.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                          {section.title}
                        </h2>

                        <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                          {section.body.map((paragraph, index) => (
                            <p key={`${section.number}-body-${index}`}>
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {section.points && (
                          <ul className="mt-5 grid gap-3 text-base text-gray-800">
                            {section.points.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-prestige-yellow" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.bodyAfterPoints && (
                          <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                            {section.bodyAfterPoints.map((paragraph, index) => (
                              <p key={`${section.number}-body-after-${index}`}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.source && (
                          <div className="my-5 bg-[#EBF5FF] p-5 rounded-lg border-l-4 border-[#2B7BBA]">
                            <p className="text-base italic leading-7 text-[#1B2639]">
                              {section.source.text}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-[#2B7BBA]">
                              Source:{" "}
                              <a
                                href={section.source.url}
                                {...externalLinkProps}
                                className="underline underline-offset-4 font-bold text-[#1A3A5C] hover:text-prestige-yellow transition"
                              >
                                {section.source.label}
                              </a>
                            </p>
                          </div>
                        )}

                        {section.hasChart && <SurveyFactorsChart />}

                        {section.quote && (
                          <blockquote className="mt-6 border-l-4 border-[#2B7BBA] bg-[#f7f7f7] p-5 rounded-r-lg">
                            <p className="text-lg font-semibold italic leading-8 text-[#1B2639]">
                              &ldquo;{section.quote.text}&rdquo;
                            </p>
                            <footer className="mt-3 text-sm font-bold text-gray-600">
                              - {section.quote.author}
                            </footer>
                          </blockquote>
                        )}

                        {section.hasStatGrid && (
                          <div className="grid border-y border-gray-200 md:grid-cols-3 mt-6">
                            {sectionStats.map((stat) => (
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
                        )}

                        {section.cta && (
                          <div className="mt-6 bg-[#1B2639] p-6 text-white rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold text-prestige-yellow">
                              {section.cta.title}
                            </h3>
                            <p className="mt-3 text-base leading-8 text-gray-100">
                              {section.cta.text}
                            </p>
                            <Link
                              href={section.cta.href}
                              className="mt-5 inline-flex bg-prestige-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#f0c900] rounded"
                            >
                              {section.cta.label}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-10 border-t-4 border-[#2B7BBA] pt-6">
                <h2 className="text-3xl font-bold text-[#1B2639]">
                  Frequently Asked Questions (FAQ)
                </h2>
                
                <div className="mt-6 space-y-5">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="bg-[#f7f7f7] p-5 rounded-lg border border-gray-100 shadow-sm">
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

              <div className="mt-8 bg-[#1B2639] p-6 text-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-prestige-yellow">
                  Start Your Journey to Pain-Free Living with Prestige Medical & Physical Therapy
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-100">
                  Do not let pain or uncertainty hold you back from the life you deserve. Prestige Medical and Physical Therapy combines world-class medical expertise with the latest in digital diagnostic technology to put you on the fastest path to recovery.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-100">
                  Whether you are dealing with a recent injury or a chronic condition, our multidisciplinary team is here to provide the precise, safe, and compassionate care you need.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex bg-prestige-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#f0c900] rounded"
                >
                  Book Your Free Consultation Today
                </Link>
              </div>

              <div className="mt-8 bg-[#EBF5FF] p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-[#1B2639]">
                  Contact Prestige Medical and Physical Therapy Today
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  Ready to book your appointment or have a question for our team? Reach out to us through the details below.
                </p>
                <dl className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-base text-gray-800">
                  <div>
                    <dt className="font-bold text-[#1A3A5C]">Website:</dt>
                    <dd className="underline">www.prestigemedpt.com</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#1A3A5C]">Phone:</dt>
                    <dd>(813) 243-2500</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#1A3A5C]">Address:</dt>
                    <dd>
                      2313 W. Hillsborough Ave. Suite 330, Tampa, FL 33615
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 border border-gray-200 p-5 rounded-lg bg-[#fafafa]">
                <p className="text-sm italic leading-6 text-gray-600">
                  Disclaimer: The information provided in this article is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the counsel of Prestige Medical & Physical Therapy regarding any medical condition or injury.
                </p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 max-h-[1000px] overflow-y-auto overflow-x-hidden rounded-lg p-3">
              <h2 className="mb-6 border-b-2 border-gray-500 pb-4 text-3xl font-medium text-black md:text-4xl font-sans">
                Recent Blogs
              </h2>

              <Link
                className="my-3 flex items-start gap-3 bg-white p-3 drop-shadow-lg rounded border border-l-4 border-l-prestige-yellow"
                href={`/blogs/${effectiveTreatmentPlanInjuryPatientsBlog.slug}`}
              >
                <Image
                  width={180}
                  height={180}
                  src={effectiveTreatmentPlanInjuryPatientsBlog.image}
                  alt={effectiveTreatmentPlanInjuryPatientsBlog.alt}
                  className="h-[76px] w-[100px] object-cover rounded"
                />
                <div className="text-left flex-1 min-w-0">
                  <div className="line-clamp-2 text-sm font-bold text-black">
                    {effectiveTreatmentPlanInjuryPatientsBlog.cardTitle}
                  </div>
                  <p className="line-clamp-2 text-xs text-gray-600 mt-1">
                    {effectiveTreatmentPlanInjuryPatientsBlog.shortDescription}
                  </p>
                </div>
              </Link>

              {staticRecentBlogs.map((blog) => (
                <Link
                  className="my-3 flex items-start gap-3 bg-white p-3 drop-shadow-lg rounded hover:border-prestige-yellow border border-transparent transition"
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                >
                  <Image
                    width={180}
                    height={180}
                    src={blog.image}
                    alt={blog.alt}
                    className="h-[76px] w-[100px] object-cover rounded"
                  />
                  <div className="text-left flex-1 min-w-0">
                    <div className="line-clamp-2 text-sm font-bold text-black">
                      {blog.cardTitle}
                    </div>
                    <p className="line-clamp-2 text-xs text-gray-600 mt-1">
                      {blog.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}

              {recentBlogs.map((blog, index) => (
                <Link
                  className="my-3 flex items-start gap-3 bg-white p-3 drop-shadow-lg rounded hover:border-prestige-yellow border border-transparent transition"
                  key={`${blog.slug}-${index}`}
                  href={`/blogs/${blog.slug}`}
                >
                  <Image
                    width={180}
                    height={180}
                    src={
                      blog.featuredImage?.image?.url ||
                      "/images/placeholder.png"
                    }
                    alt={blog.featuredImage?.altText || blog.title || "Blog"}
                    className="h-[76px] w-[100px] object-cover rounded"
                  />
                  <div className="text-left flex-1 min-w-0">
                    <div className="line-clamp-2 text-sm font-bold text-black">
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
