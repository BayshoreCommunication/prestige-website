import Image from "next/image";
import Link from "next/link";
import {
  professionalPhysicalTherapyComplexInjuryCasesBlog,
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
  "Structured rehab targets root causes and does not stop at symptoms.",
  "Multi-disciplinary care can combine PT, chiropractic, and medical oversight.",
  "Early intervention can significantly reduce recovery time.",
  "Florida PIP insurance covers many accident-related physical therapy sessions.",
  "Missing Florida's 14-day PIP window can eliminate coverage eligibility.",
];

const heroStats = [
  {
    value: "38%",
    label: "Faster recovery with multi-disciplinary PT",
  },
  {
    value: "65%",
    label: "Skipped-PT patients reporting chronic pain symptoms",
  },
  {
    value: "72 hrs",
    label: "Optimal window to start PT after injury",
  },
];

const pipStats = [
  {
    value: "$10K",
    label: "Florida PIP coverage for accident injuries",
  },
  {
    value: "14 Days",
    label: "To seek treatment for PIP eligibility",
  },
  {
    value: "7/7 Days",
    label: "Prestige team available for support",
  },
];

const recoveryRows = [
  {
    approach: "Professional PT (Multi-Disciplinary)",
    rate: 85,
  },
  {
    approach: "Single-Provider PT",
    rate: 55,
  },
  {
    approach: "Self-Treatment at Home",
    rate: 30,
  },
  {
    approach: "No Rehabilitation",
    rate: 10,
  },
];

const treatmentTimeline = [
  {
    label: "Day 1 to 3",
    text: "Initial evaluation, imaging, and pain management.",
  },
  {
    label: "Day 4 to 7",
    text: "Begin manual therapy and controlled movement.",
  },
  {
    label: "Week 2 to 4",
    text: "Progressive neuromuscular education and retraining.",
  },
  {
    label: "Week 4 and beyond",
    text: "Function restoration and discharge planning.",
  },
];

const sections = [
  {
    number: "01",
    title: "Most Complex Injuries Need Physical Therapy Help",
    body: [
      "A sprained ankle and a torn ligament can never be treated as the same problem. Neither can a minor fender bender and a high-impact collision. Complex injuries involve multiple tissue types, nerve pathways, and joint systems working against each other during healing.",
      "Generic stretches and online tutorials miss this entirely. A licensed physical therapist evaluates the specific damage, maps what is inflamed, identifies what is weak, and studies the movement patterns your body has adopted to compensate.",
      "That compensation is often where chronic pain starts. Florida sees a high rate of auto accident injuries every year, and many patients walk away thinking they are fine. Soft tissue damage is sneaky. Without professional physical therapy, those injuries can compound over weeks and months.",
    ],
    source: {
      text: "ChoosePT, an American Physical Therapy Association resource, describes physical therapists as movement experts who help people manage pain, improve mobility, and recover from injuries.",
      label: "American Physical Therapy Association - ChoosePT",
      url: "https://www.choosept.com/",
    },
    points: [
      "A licensed evaluation connects pain symptoms with the underlying movement problem.",
      "Structured rehab helps rebuild strength without adding new strain.",
      "Professional supervision helps catch compensation patterns before they become chronic.",
    ],
  },
  {
    number: "02",
    title:
      "How Does a Multi-Disciplinary Approach Speed Recovery After a Florida Injury?",
    body: [
      "Single-provider care has real limits. A chiropractor alone cannot address muscle atrophy. A physical therapist alone cannot diagnose what an X-ray would catch. But combine both under one roof with a medical doctor overseeing it all, and recovery timelines can drop sharply.",
      "Coordination matters most in the first weeks. Inflammation is high. Movement is limited. The body is most responsive to guided treatment. Miss that window and you may be trying to catch up for months.",
      "Most people never get the kind of care studies recommend unless they are at a clinic built specifically for injuries. Prestige Medical & Physical Therapy brings medical oversight, chiropractic care, diagnostic support, and physical therapy into one connected plan.",
    ],
    insight:
      "Survey Insight: Patients receiving multi-disciplinary care after complex injuries recovered up to 38% faster than patients treated by a single provider.",
    source: {
      text: "The National Institutes of Health supports biomedical research that improves health, including research connected to rehabilitation, injury recovery, and coordinated care.",
      label: "National Institutes of Health",
      url: "https://www.nih.gov/",
    },
    points: [
      "Medical oversight helps confirm that the right structures are being treated.",
      "Chiropractic and physical therapy can support alignment, mobility, and strength together.",
      "One coordinated plan reduces confusion and keeps recovery moving.",
    ],
    table: true,
  },
  {
    number: "03",
    title:
      "What Happens to Florida Patients Who Skip Professional Rehab After a Serious Injury?",
    body: [
      "Pain returns. Usually worse. Many people hurt in accidents across Florida skip expert rehab because the first few days feel manageable. Weeks pass with minor discomfort, and then movement gets harder, stiffness grows, and aches seem to appear out of nowhere.",
      "Without supervised rehab, your muscles compensate around the injury. That leads to misalignment, overuse in healthy joints, and eventually secondary injuries. A back injury left unaddressed can become a hip problem. Headaches that linger may begin after a crash injures the neck.",
      "Florida PIP coverage exists for a reason. Patients should use that treatment window before the first 14 days run out, especially after an auto accident, fall, or traumatic soft tissue injury.",
    ],
    insight:
      "Survey Insight: 65% of patients who skip professional physical therapy after a complex injury report chronic pain symptoms within six months.",
    source: {
      text: "Florida Statute 627.736 outlines personal injury protection benefits, including the 14-day initial services and care requirement for motor vehicle accident injuries.",
      label: "Florida Legislature - PIP Statute",
      url: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html",
    },
    points: [
      "Untreated soft tissue injuries may look minor while compensation patterns build.",
      "Delayed care can make insurance documentation harder.",
      "Early evaluation gives your care team a clear baseline for treatment.",
    ],
    cta: {
      title: "Injured in Tampa, FL? Do Not Wait.",
      text: "Same day appointments are available. Florida PIP is accepted. Eligible patients may qualify for zero upfront cost care.",
      href: "/contact",
      label: "Request Your Appointment Now",
    },
  },
  {
    number: "04",
    title:
      "Clinical Physical Therapy Differs From General Fitness or Home Exercises",
    body: [
      "A gym trainer improves fitness. A physical therapist repairs function. They are not the same job and they do not produce the same outcome.",
      "Most of the time, a licensed physical therapist steps in when injuries become complicated. Clinical tests help spot what is going wrong inside the body. Instead of general exercise routines, therapists rely on hands-on techniques to reset movement and restore function.",
      "Tools like laser therapy, therapeutic ultrasound, and spinal decompression may appear during recovery phases. These medical devices are different from workout machines because injury recovery needs precision, timing, and clinical judgment.",
    ],
    source: {
      text: "Cleveland Clinic explains that physical therapy can help people recover after injury or surgery, manage movement-related symptoms, and improve strength, flexibility, and mobility.",
      label: "Cleveland Clinic",
      url: "https://my.clevelandclinic.org/health/treatments/physical-therapy",
    },
    points: [
      "Clinical testing guides the treatment plan.",
      "Hands-on techniques support safer movement retraining.",
      "Specialized equipment targets tissue healing, pain relief, and decompression goals.",
    ],
    quote:
      "Supervised physical rehabilitation after complex injury is not optional. It is the difference between recovery and long-term deterioration.",
    quoteBy: "Dr. Julie Fritz, PT and Researcher, University of Utah",
  },
  {
    number: "05",
    title:
      "When Should Florida Accident Victims Start Physical Therapy Treatment?",
    body: [
      "Within 72 hours if possible. Within 14 days at the absolute latest. Florida law requires accident victims to seek medical treatment within 14 days to qualify for PIP benefits.",
      "Beyond the legal deadline, there is a biological one too. The inflammatory window after injury is when tissue is most responsive to guided healing.",
      "Starting professional physical therapy early does not just speed recovery. It documents the injury properly. That documentation matters for insurance claims and, in some cases, legal proceedings in Florida courts.",
    ],
    source: {
      text: "Florida's PIP statute includes a 14-day treatment requirement and describes eligible follow-up services, including physical therapy under qualifying referral and supervision rules.",
      label: "Florida Legislature - Required PIP Benefits",
      url: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html",
    },
    points: [
      "Early treatment builds a clearer medical record.",
      "Prompt therapy helps control inflammation before stiffness takes over.",
      "Same day appointments and walk-ins can keep patients inside the PIP window.",
    ],
    timeline: true,
    statGrid: true,
    cta: {
      title: "Start Before the Window Closes",
      text: "Prestige Medical & Physical Therapy offers same day appointments and walk-ins at our Tampa location, with Florida PIP support for eligible patients.",
      href: "/contact",
      label: "Contact Our Team Now",
    },
  },
  {
    number: "06",
    title:
      "What Makes a Dedicated Injury Clinic Better Than a General Outpatient PT Clinic?",
    body: [
      "Specialization wins for complex cases. A general outpatient PT clinic may handle post-surgical knee recoveries, aging-related joint issues, pediatric mobility problems, and auto accident injuries all in the same week. Their protocols are broad by necessity.",
      "That can be fine for straightforward cases. It is not ideal for complex ones. A dedicated injury clinic focuses specifically on accident-related and trauma-related recovery. The team trains for it. The equipment is selected for it. The treatment plans are built around it.",
      "Prestige also handles the paperwork. PIP claims, insurance coordination, and transportation assistance are not extras. They are part of the recovery experience that helps patients stay consistent with treatment.",
    ],
    points: [
      "Care starts from your imaging, pain pattern, and recovery goals.",
      "Medical and administrative support reduces stress during recovery.",
      "Better adherence gives patients a stronger chance of getting back to normal function.",
    ],
    quote:
      "When someone comes to us after a complex injury, we are not starting from a template. We are starting from their specific imaging, their specific pain pattern, and their specific recovery goals.",
    quoteBy: "Prestige Medical & Physical Therapy, Tampa, FL",
  },
];

const faqs = [
  {
    question: "Is it normal to feel sore after a PT session?",
    answer:
      "You may notice stiffness or tired muscles for one to two days while your body adapts. Treatment should not sharply increase pain or make existing discomfort worse. Tell your therapist if symptoms feel unusual.",
  },
  {
    question: "What should I wear for my first appointment?",
    answer:
      "Wear flexible clothing and supportive shoes. Your therapist may need to observe movement, test range of motion, and access the painful area during the assessment.",
  },
  {
    question:
      "What injuries get the most benefit from professional physical therapy?",
    answer:
      "Auto accident injuries, sports-related trauma, back and neck injuries, slips and falls, and soft tissue injuries often benefit from professional physical therapy and structured rehabilitation.",
  },
  {
    question: "Will I see the same physical therapist each visit?",
    answer:
      "Most patients work with a consistent care team. Your usual therapist may change if scheduling or coverage needs require it, but your treatment plan remains documented and coordinated.",
  },
];

const articleUrl = professionalPhysicalTherapyComplexInjuryCasesBlog.canonical;
const articleImageUrl = `https://www.prestigemedpt.com${professionalPhysicalTherapyComplexInjuryCasesBlog.image}`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: professionalPhysicalTherapyComplexInjuryCasesBlog.title,
    description:
      professionalPhysicalTherapyComplexInjuryCasesBlog.metaDescription,
    image: articleImageUrl,
    datePublished: professionalPhysicalTherapyComplexInjuryCasesBlog.createdAt,
    dateModified: professionalPhysicalTherapyComplexInjuryCasesBlog.createdAt,
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

function RecoveryRateTable() {
  return (
    <div className="mt-6 overflow-x-auto border border-gray-200">
      <table className="w-full min-w-[620px] text-left text-sm">
        <caption className="bg-[#1A3A5C] px-4 py-3 text-left text-base font-bold text-white">
          Recovery Success Rate by Rehab Approach
        </caption>
        <thead className="bg-[#EBF5FF] text-[#1B2639]">
          <tr>
            <th scope="col" className="px-4 py-3">
              Rehab Approach
            </th>
            <th scope="col" className="px-4 py-3">
              Recovery Success Rate
            </th>
            <th scope="col" className="px-4 py-3">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {recoveryRows.map((row) => (
            <tr key={row.approach} className="border-t border-gray-200">
              <td className="px-4 py-4 font-semibold text-[#1B2639]">
                {row.approach}
              </td>
              <td className="px-4 py-4">
                <div className="h-3 w-full bg-[#d9eaf8]">
                  <div
                    className="h-3 bg-prestige-yellow"
                    style={{ width: `${row.rate}%` }}
                  />
                </div>
              </td>
              <td className="px-4 py-4 text-lg font-bold text-[#1A3A5C]">
                {row.rate}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-gray-200 bg-[#fbfbfb] px-4 py-3 text-sm italic text-gray-600">
        Source: Internal patient outcome and published rehabilitation research.
      </p>
    </div>
  );
}

export default function ProfessionalPhysicalTherapyComplexInjuryCasesBlog({
  blogPostData,
}: {
  blogPostData?: BlogPostData;
}) {
  const recentBlogs =
    blogPostData?.data?.filter((blog) => blog.published === true).slice(0, 8) ||
    [];
  const staticRecentBlogs = staticBlogs.filter(
    (blog) =>
      blog.slug !== professionalPhysicalTherapyComplexInjuryCasesBlog.slug
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
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Blog Details
          </h1>
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
                  Complex Injuries | Auto Accident Rehab | Tampa, Florida
                </div>
              </div>

              <div className="border-b-4 border-prestige-yellow pb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prestige-yellow">
                  {professionalPhysicalTherapyComplexInjuryCasesBlog.category}
                </p>
                <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#1B2639] md:text-5xl">
                  {professionalPhysicalTherapyComplexInjuryCasesBlog.title}
                </h1>
                <p className="mt-4 text-sm italic text-gray-600">
                  {postDate(
                    professionalPhysicalTherapyComplexInjuryCasesBlog.createdAt
                  )}
                </p>
              </div>

              <figure className="mt-8">
                <div className="overflow-hidden border border-gray-200 bg-black">
                  <Image
                    src={professionalPhysicalTherapyComplexInjuryCasesBlog.image}
                    alt={professionalPhysicalTherapyComplexInjuryCasesBlog.alt}
                    title={
                      professionalPhysicalTherapyComplexInjuryCasesBlog.imageTitle
                    }
                    width={1088}
                    height={658}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <figcaption className="border-x border-b border-gray-200 bg-[#f7f7f7] px-4 py-3 text-center text-sm italic text-gray-600">
                  {professionalPhysicalTherapyComplexInjuryCasesBlog.caption}
                </figcaption>
              </figure>

              <div className="mt-8 bg-[#EBF5FF] p-6">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B2639]">
                  Key Points
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
                {heroStats.map((stat) => (
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
                Complex injuries do not heal on their own. Healing moves faster
                when it is guided by trained hands. Where movement broke down,
                careful exercises rebuild strength instead of adding strain.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Without that support, small problems grow harder to fix over
                time. Professional physical therapy gives patients a safer path
                back to motion, strength, pain control, and long-term mobility.
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
                      <div className="min-w-0">
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

                        {section.insight && (
                          <div className="my-5 border-l-4 border-[#2B7BBA] bg-[#EBF5FF] p-5">
                            <p className="text-base font-semibold leading-7 text-[#1B2639]">
                              {section.insight}
                            </p>
                          </div>
                        )}

                        {section.source && (
                          <div className="my-5 bg-[#EBF5FF] p-5">
                            <p className="text-base italic leading-7 text-[#1B2639]">
                              {section.source.text}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-[#2B7BBA]">
                              Source:{" "}
                              <a
                                href={section.source.url}
                                {...externalLinkProps}
                                className="underline underline-offset-4"
                              >
                                {section.source.label}
                              </a>
                            </p>
                          </div>
                        )}

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

                        {section.table && <RecoveryRateTable />}

                        {section.timeline && (
                          <div className="mt-6">
                            <h3 className="text-xl font-bold text-[#1B2639]">
                              Early Treatment Timeline
                            </h3>
                            <ol className="mt-4 grid gap-4 md:grid-cols-2">
                              {treatmentTimeline.map((item) => (
                                <li
                                  key={item.label}
                                  className="border border-gray-200 bg-[#fbfbfb] p-4"
                                >
                                  <p className="text-sm font-bold uppercase tracking-wide text-[#2B7BBA]">
                                    {item.label}
                                  </p>
                                  <p className="mt-2 text-base leading-7 text-gray-700">
                                    {item.text}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {section.statGrid && (
                          <div className="mt-6 grid border-y border-gray-200 md:grid-cols-3">
                            {pipStats.map((stat) => (
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

                        {section.quote && (
                          <blockquote className="mt-6 border-l-4 border-[#2B7BBA] bg-[#f7f7f7] p-5">
                            <p className="text-lg font-semibold italic leading-8 text-[#1B2639]">
                              <q>{section.quote}</q>
                            </p>
                            <footer className="mt-3 text-sm font-bold text-gray-600">
                              - {section.quoteBy}
                            </footer>
                          </blockquote>
                        )}

                        {section.cta && (
                          <div className="mt-6 bg-[#1B2639] p-6 text-white">
                            <h3 className="text-2xl font-bold">
                              {section.cta.title}
                            </h3>
                            <p className="mt-3 text-base leading-8 text-gray-100">
                              {section.cta.text}
                            </p>
                            <Link
                              href={section.cta.href}
                              className="mt-5 inline-flex bg-prestige-yellow px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#f0c900]"
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
                  Questions People Usually Ask Us
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                  People Also Ask About Professional Physical Therapy
                </p>
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
                  Start Your Recovery at Prestige Medical & Physical Therapy
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-100">
                  Tampa&apos;s dedicated injury clinic has a
                  multi-disciplinary team ready for you. Professional physical
                  therapy helps patients recover from complex injuries through
                  personalized treatment plans, pain management, rehabilitation
                  exercises, and early intervention.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex bg-prestige-yellow px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#f0c900]"
                >
                  Book Your Free Consultation Today
                </Link>
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
                <p className="text-sm italic leading-6 text-gray-600">
                  This article provides general information and does not
                  constitute medical advice, legal advice, or insurance advice.
                  Please contact Prestige Medical and Physical Therapy for
                  personalized diagnosis, treatment, and claim-related guidance.
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
                href={`/blogs/${professionalPhysicalTherapyComplexInjuryCasesBlog.slug}`}
              >
                <Image
                  width={180}
                  height={180}
                  src={professionalPhysicalTherapyComplexInjuryCasesBlog.image}
                  alt={professionalPhysicalTherapyComplexInjuryCasesBlog.alt}
                  className="h-[76px] w-[100px] object-cover"
                />
                <div className="text-left">
                  <div className="line-clamp-2 text-md font-bold text-black">
                    {professionalPhysicalTherapyComplexInjuryCasesBlog.cardTitle}
                  </div>
                  <p className="line-clamp-2 text-sm text-gray-600">
                    {
                      professionalPhysicalTherapyComplexInjuryCasesBlog.shortDescription
                    }
                  </p>
                </div>
              </Link>

              {staticRecentBlogs.map((blog) => (
                <Link
                  className="my-3 flex items-start gap-3 bg-white p-3 drop-shadow-lg"
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                >
                  <Image
                    width={180}
                    height={180}
                    src={blog.image}
                    alt={blog.alt}
                    className="h-[76px] w-[100px] object-cover"
                  />
                  <div className="text-left">
                    <div className="line-clamp-2 text-md font-bold text-black">
                      {blog.cardTitle}
                    </div>
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {blog.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}

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
                      professionalPhysicalTherapyComplexInjuryCasesBlog.image
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
