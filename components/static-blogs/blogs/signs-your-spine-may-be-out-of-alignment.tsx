import Image from "next/image";
import Link from "next/link";
import {
  signsYourSpineMayBeOutOfAlignmentBlog,
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

const keyPoints = [
  "Headaches starting at the base of your skull often point right back to the upper neck and not just regular stress.",
  "Uneven shoulders or a pelvis that tilts differently or one leg looking a bit shorter when you sit down all point to a structural imbalance.",
  "Tingling or numbness or a shooting pain in your arm or leg is a big clue that a shifted bone is pressing on a nerve.",
  "Leaning your head forward to look at your phone or computer can force your neck to hold up an extra 27 to 60 pounds of weight.",
  "Getting bumped from behind or the side on I-4 or I-275 can throw your spine out of the way even if you don’t see a single scratch.",
];

const stats = [
  {
    value: "80%",
    label: "of people experience back pain at some point in their life, per the American Chiropractic Association",
  },
  {
    value: "362,063",
    label: "motor vehicle crashes recorded across Florida in 2025, per FLHSMV",
  },
  {
    value: "60 lb",
    label: "of added cervical spine force at just 60 degrees of forward head tilt",
  },
];

const physicalSigns = [
  {
    number: "1",
    title: "Headaches Starting at the Base of Your Skull",
    text: "A headache that begins right at the back of your head and travels toward your temples often starts in your upper neck. This happens a whole lot after hours at a desk or staring at a phone. It’s a cervicogenic issue and needs a different kind of help than your standard tension headache.",
  },
  {
    number: "2",
    title: "One Shoulder or Hip Sits Higher",
    text: "Look in a mirror before doing anything else. If your posture is undoubtedly off to one side or another, your shoulders are uneven and waist is crooked; that means one side of your spine is doing more work than the other. Just stretching rarely fixes this because the joint itself has not moved back.",
  },
  {
    number: "3",
    title: "Reduced Neck Range of Motion",
    text: "Tightness when checking a blind spot, or a repeated click in the same spot when you rotate your neck, is a mechanical signal worth paying attention to, not just a sign of getting older.",
  },
  {
    number: "4",
    title: "Tingling or Shooting Pain Down an Leg or Arm",
    text: "When a bone presses on a nerve root, the irritation often extends along the path of the affected nerve. It might go to your hand or your foot or anywhere in between. This is one of the clearest signs that you have a structural problem and not just a tight muscle.",
  },
  {
    number: "5",
    title: "That Fatigue Even Sleep Doesn't Heal",
    text: "Your spine is always on guard to protect your spinal cord. That cord sends signals all over your body. Persistent nerve interference keeps your body in a constant state of mild stress. That shows up as a deep fatigue that a solid 8 hours of sleep just can’t cure.",
  },
  {
    number: "6",
    title: "Uneven Wear on Your Shoe Soles",
    text: "Take a look at the bottom of your shoes. If one heel is wearing out much faster than the other you are likely walking differently to make up for an imbalance in your pelvis or lower back. Most folks never even think to check this.",
  },
  {
    number: "7",
    title: "You Get Sick More Often Than Usual",
    text: "Your nervous system and your immune system talk to each other a lot more than you might think. Chronic nerve trouble can slow down those immune signals. That is part of the reason some folks seem to catch every single bug going around.",
  },
  {
    number: "8",
    title: "Posture That Takes Constant Effort",
    text: "If sitting up straight requires ongoing focus and shoulders round forward the moment you stop thinking about it, the muscles supporting your spine are compensating for structure, not weakness. Willpower will not fix a mechanical problem.",
  },
  {
    number: "9",
    title: "Pain From Car Accident",
    text: "Whiplash commonly causes damage to the neck and mid back without any bruising. The issue is that the symptoms can develop long after the accident. This means that getting an evaluation after the incident is indispensable no matter how minor it may seem.",
  },
];

const postureStrainData = [
  { angle: "0°", weight: "12 lb", width: "20%" },
  { angle: "15°", weight: "27 lb", width: "45%" },
  { angle: "30°", weight: "40 lb", width: "66%" },
  { angle: "45°", weight: "49 lb", width: "81%" },
  { angle: "60°", weight: "60 lb", width: "100%" },
];

const evaluationSteps = [
  {
    step: "Postural Assessment",
    involves: "Visual and measured check of shoulder, hip, and spinal alignment",
    importance: "Identifies asymmetry before it becomes painful",
  },
  {
    step: "Range of Motion Testing",
    involves: "Neck, mid back, and low back mobility checked against normal benchmarks",
    importance: "Pinpoints exactly which segment is restricted",
  },
  {
    step: "Neurological Screening",
    involves: "Reflexes, strength, and sensation checked along nerve pathways",
    importance: "Confirms whether nerve pressure is present",
  },
  {
    step: "Digital Radiography",
    involves: "On site imaging when clinically indicated",
    importance: "Rules out fracture or structural damage before adjustment",
  },
  {
    step: "Individualized Treatment Plan",
    involves: "Chiropractic adjustment paired with physical therapy as needed",
    importance: "Addresses both the joint and the surrounding muscle imbalance",
  },
];

const faqs = [
  {
    question: "Can a misaligned spine correct itself ?",
    answer:
      "Rarely. It may require manipulation to realign it since the muscles around the area have adapted to it.",
  },
  {
    question: "How long does it take to see results ?",
    answer:
      "Most people feel better after the first adjustment, but if you have had one misaligned for a while there may be multiple visits required.",
  },
  {
    question: "Can it be adjusted after a car accident?",
    answer:
      "Yes. It's recommended that you see a licensed chiropractic professional who will most likely make sure you don't have any fractures before trying any adjustments.",
  },
];

const sections = [
  {
    number: "01",
    title: "What Spinal Misalignment Means for Us",
  },
  {
    number: "02",
    title: "9 Physical Signs Your Spine May Be Out of Alignment",
  },
  {
    number: "03",
    title: "Florida Drivers Face Extra Spinal Risk",
  },
  {
    number: "04",
    title: "How Misalignment Progresses Without Treatment",
  },
  {
    number: "05",
    title: "What a Spinal Alignment Evaluation Involves",
  },
  {
    number: "06",
    title: "Multidisciplinary Approach Always Works Better",
  },
  {
    number: "07",
    title: "What We See in Tampa Bay Patients",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.prestigemedpt.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.prestigemedpt.com/blogs",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Signs Your Spine May Be Out of Alignment",
          "item":
            "https://www.prestigemedpt.com/blogs/signs-your-spine-may-be-out-of-alignment",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.prestigemedpt.com/blogs/signs-your-spine-may-be-out-of-alignment",
      },
      "headline": "Signs Your Spine May Be Out of Alignment",
      "name": "9 Clear Signs Your Spine Is Misaligned in Tampa",
      "description":
        "Headaches, unbalanced shoulders and numbness mean your spine is completely out of alignment. Check sign number 6 before your posture causes permanent damage.",
      "url":
        "https://www.prestigemedpt.com/blogs/signs-your-spine-may-be-out-of-alignment",
      "image":
        "https://www.prestigemedpt.com/images/static-blogs/signs-your-spine-may-be-out-of-alignment-guide.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.prestigemedpt.com/blogs",
      },
      "about": {
        "@type": "Thing",
        "name": "Spinal Misalignment Signs and Treatment",
        "description":
          "Detailed guide on recognizing physical signs of spinal misalignment, posture strain, auto accident injuries, evaluation steps, and multidisciplinary care in Tampa.",
      },
      "keywords": [
        "signs your spine is out of alignment",
        "spinal misalignment symptoms",
        "cervicogenic headache Tampa",
        "uneven shoulders back pain",
        "whiplash spine evaluation Tampa",
        "chiropractic alignment Tampa",
        "physical therapy spine health",
      ],
      "author": {
        "@type": "Organization",
        "name": "Prestige Medical & Physical Therapy",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Prestige Medical & Physical Therapy",
        "url": "https://www.prestigemedpt.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.prestigemedpt.com/images/navbar/logo.png",
        },
      },
      "datePublished": "2026-09-08",
      "dateModified": "2026-09-08",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a misaligned spine correct itself ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Rarely. It may require manipulation to realign it since the muscles around the area have adapted to it.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most people feel better after the first adjustment, but if you have had one misaligned for a while there may be multiple visits required.",
          },
        },
        {
          "@type": "Question",
          "name": "Can it be adjusted after a car accident?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. It's recommended that you see a licensed chiropractic professional who will most likely make sure you don't have any fractures before trying any adjustments.",
          },
        },
      ],
    },
  ],
};

const postDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function SignsYourSpineMayBeOutOfAlignmentBlog({
  blogPostData,
}: {
  blogPostData?: BlogPostData;
}) {
  const recentBlogs =
    blogPostData?.data?.filter((blog) => blog.published === true).slice(0, 8) ||
    [];
  const staticRecentBlogs = staticBlogs.filter(
    (blog) => blog.slug !== signsYourSpineMayBeOutOfAlignmentBlog.slug
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
                  Spine Health | Physical Therapy | Tampa, Florida
                </div>
              </div>

              <div className="border-b-4 border-prestige-yellow pb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prestige-yellow mt-4">
                  {signsYourSpineMayBeOutOfAlignmentBlog.category}
                </p>
                <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#1B2639] md:text-5xl">
                  {signsYourSpineMayBeOutOfAlignmentBlog.title}
                </h1>
                <p className="mt-4 text-sm italic text-gray-600">
                  Published: {postDate(signsYourSpineMayBeOutOfAlignmentBlog.createdAt)} | Updated: {postDate(signsYourSpineMayBeOutOfAlignmentBlog.createdAt)}
                </p>
              </div>

              <figure className="mt-8">
                <div className="overflow-hidden border border-gray-200 bg-black rounded-lg">
                  <Image
                    src={signsYourSpineMayBeOutOfAlignmentBlog.image}
                    alt={signsYourSpineMayBeOutOfAlignmentBlog.alt}
                    title={signsYourSpineMayBeOutOfAlignmentBlog.imageTitle}
                    width={1088}
                    height={658}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <figcaption className="border-x border-b border-gray-200 bg-[#f7f7f7] px-4 py-3 text-center text-sm italic text-gray-600 rounded-b-lg">
                  {signsYourSpineMayBeOutOfAlignmentBlog.caption}
                </figcaption>
              </figure>

              <div className="mt-8 bg-[#EBF5FF] p-6 rounded-lg">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B2639]">
                  Key Points
                </h2>
                <ul className="mt-4 grid gap-3 text-base text-gray-800">
                  {keyPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2B7BBA]" />
                      <span>{point}</span>
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
                  A misaligned spine&apos;s symptoms show up as recurring headaches, stiffness on one side, uneven shoulders and tingling in the arms or legs. Also, fatigue that sleep can’t often fix, obviously. These little clues mean one or more of your vertebrae decided to wander off their natural place. Now they are pressing on nerves and muscles that don’t appreciate the intrusion.
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
                {/* Section 01 */}
                <section
                  id="section-01"
                  className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                      01
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                        What Spinal Misalignment Means for Us
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                        <p>
                          Your spine is a brilliant stack of 33 bones. They are separated by little shock absorbing discs. Nerve roots branch out from every single level. When one of these bones moves just a little ways out of place, it results in what the chiropractic industry calls a subluxation. In the real world it can pinch a nerve or restrict your blood flow. It can also throw off how every single joint above and below it moves. Suppose you were trying to drive a car with the steering wheel pulling hard to the left.
                        </p>
                        <ul className="mt-4 list-disc pl-6 space-y-2">
                          <li>
                            You can look up{" "}
                            <a
                              href="https://www.nccih.nih.gov/health/spinal-manipulation-what-you-need-to-know"
                              {...externalLinkProps}
                              className="underline underline-offset-4 font-bold text-[#2B7BBA] hover:text-prestige-yellow transition"
                            >
                              the NCCIH fact sheet on spinal manipulation
                            </a>{" "}
                            for current research on effectiveness and safety.
                          </li>
                        </ul>
                        <p>
                          The cervical spine, your neck, misaligns from screen time and whiplash. The thoracic spine, your mid back, shifts from slouched sitting. The lumbar spine, your low back, absorbs lifting, twisting, and long drives on Florida highways. Each region produces a different symptom fingerprint.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 02 */}
                <section
                  id="section-02"
                  className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                      02
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                        9 Physical Signs Your Spine May Be Out of Alignment
                      </h2>
                      <div className="mt-4 text-base leading-8 text-gray-700">
                        <p>
                          These patterns show up again and again in patients before they ever get an X-ray. None guarantees misalignment alone. Two or three together are worth taking seriously.
                        </p>
                      </div>

                      <div className="mt-6 space-y-6">
                        {physicalSigns.map((sign) => (
                          <div key={sign.number} className="bg-[#fbfbfb] p-5 rounded-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-[#1B2639] flex items-center gap-2">
                              <span className="text-[#2B7BBA]">{sign.number}.</span>
                              <span>{sign.title}</span>
                            </h3>
                            <p className="mt-3 text-base leading-8 text-gray-700">
                              {sign.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 bg-[#1B2639] p-6 text-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-prestige-yellow">
                          Not Sure If Your Spine Is Out of Alignment?
                        </h3>
                        <p className="mt-3 text-base leading-8 text-gray-100">
                          Prestige Medical & Physical Therapy offers same day and walk in evaluations at their Tampa location, with Florida PIP claims support for accident related cases.
                        </p>
                        <Link
                          href="/contact"
                          className="mt-5 inline-flex bg-prestige-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#f0c900] rounded"
                        >
                          Request an Appointment →
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 03 */}
                <section
                  id="section-03"
                  className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                      03
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                        Florida Drivers Face Extra Spinal Risk
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                        <p>
                          Florida logged 362,063 motor vehicle crashes in 2025 according to FLHSMV, with more than 235,964 resulting in injury, roughly 992 crashes every day. Many are low speed rear end and intersection collisions, exactly the kind that produce whiplash rather than headline making wrecks.
                        </p>
                        <p>
                          Tampa&apos;s mix of tourist traffic, aggressive merging on I 275, and sudden summer downpours creates ideal conditions for the kind of impact that jars the cervical spine out of position. Whiplash often does not hurt immediately, since adrenaline masks pain for the first 24 to 72 hours, which is why drivers wave off a minor sounding accident only to develop stiffness days later.
                        </p>
                        <ul className="mt-4 list-disc pl-6 space-y-2">
                          <li>
                            Reference{" "}
                            <a
                              href="https://www.flhsmv.gov/resources/crash-facts-statistics/"
                              {...externalLinkProps}
                              className="underline underline-offset-4 font-bold text-[#2B7BBA] hover:text-prestige-yellow transition"
                            >
                              FLHSMV&apos;s statewide crash data
                            </a>{" "}
                            for the full breakdown of Florida traffic crash statistics.
                          </li>
                        </ul>
                        <p>
                          Car accidents get the attention, but daily posture does more cumulative damage. Forward head posture research shows cervical spine load increases roughly one pound for every degree the head tilts forward. The range graph below shows how fast that adds up.
                        </p>
                      </div>

                      {/* Posture Strain Table / Graphic */}
                      <div className="mt-6 border border-gray-200 rounded-lg p-6 bg-[#f7f9fc]">
                        <h3 className="text-xl font-bold text-[#1B2639] mb-4">
                          Cervical Spine Force vs. Head Tilt Angle
                        </h3>
                        <div className="space-y-4">
                          {postureStrainData.map((item) => (
                            <div key={item.angle} className="flex items-center gap-4">
                              <span className="w-12 text-sm font-bold text-[#1A3A5C] text-right">
                                {item.angle}
                              </span>
                              <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden relative">
                                <div
                                  className="bg-[#2B7BBA] h-full rounded-full transition-all duration-500"
                                  style={{ width: item.width }}
                                />
                              </div>
                              <span className="w-16 text-sm font-bold text-[#1B2639]">
                                {item.weight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 space-y-4 text-base leading-8 text-gray-700">
                        <p>
                          A head weighing 10 to 12 pounds in neutral posture can place up to 60 pounds of effective strain on the neck at a 60 degree tilt, the angle most people unconsciously hold while texting. Multiply that by several hours a day and the cervical spine has every reason to drift out of alignment.
                        </p>
                        <ul className="mt-4 list-disc pl-6 space-y-2">
                          <li>
                            See{" "}
                            <a
                              href="https://www.spine-health.com/conditions/neck-pain/forward-head-postures-effect-cervical-spine"
                              {...externalLinkProps}
                              className="underline underline-offset-4 font-bold text-[#2B7BBA] hover:text-prestige-yellow transition"
                            >
                              Spine-health&apos;s overview of forward head posture
                            </a>{" "}
                            for how sustained flexion accelerates disc and joint stress.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 04 */}
                <section
                  id="section-04"
                  className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                      04
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                        How Misalignment Progresses Without Treatment
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                        <p>
                          Spinal misalignment rarely stays at one stage. Left alone, mechanical stress compounds, and mild stiffness can escalate into a pattern that is harder to reverse. The progression goes from a tiny shift you don’t notice to serious damage in other parts of your body.
                        </p>
                      </div>

                      <div className="mt-6 bg-[#EBF5FF] p-6 rounded-lg border-l-4 border-[#2B7BBA]">
                        <p className="text-lg font-semibold text-[#1B2639] italic">
                          &ldquo;Waiting until the pain becomes unbearable is just a bad plan. An early stage problem responds much faster to correction than a spine that has spent years trying to compensate.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 05 */}
                <section
                  id="section-05"
                  className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                      05
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                        What a Spinal Alignment Evaluation Involves
                      </h2>

                      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-700">
                          <thead className="bg-[#1A3A5C] text-xs uppercase text-white">
                            <tr>
                              <th scope="col" className="px-6 py-3 font-bold">
                                Step
                              </th>
                              <th scope="col" className="px-6 py-3 font-bold">
                                What It Involves
                              </th>
                              <th scope="col" className="px-6 py-3 font-bold">
                                Why It&apos;s So Important
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {evaluationSteps.map((row) => (
                              <tr
                                key={row.step}
                                className="hover:bg-[#EBF5FF]/50 transition"
                              >
                                <td className="px-6 py-4 font-semibold text-[#1B2639]">
                                  {row.step}
                                </td>
                                <td className="px-6 py-4">{row.involves}</td>
                                <td className="px-6 py-4 font-semibold text-[#2B7BBA]">
                                  {row.importance}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 06 */}
                <section
                  id="section-06"
                  className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                      06
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                        Multidisciplinary Approach Always Works Better
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                        <p>
                          Chiropractic adjustment corrects the joint. Physical therapy retrains the muscles around it so the correction holds. Correcting misalignments with only one is equivalent to adjusting a door hinge but rarely checking if the door opens squarely. Prestige Medical & Physical Therapy offers medical doctors, chiropractors, and physical therapists all under one roof so they can collaborate on a single treatment, instead of making patients go back and forth between different clinics.
                        </p>
                        <p>
                          This matters even more for accident cases. Florida&apos;s no fault system routes many claims through PIP coverage, and a clinic that documents misalignment properly from the first visit makes that process considerably less painful, in every sense of the word.
                        </p>
                      </div>

                      <blockquote className="mt-6 border-l-4 border-[#2B7BBA] bg-[#f7f7f7] p-5 rounded-r-lg">
                        <p className="text-lg font-semibold italic leading-8 text-[#1B2639]">
                          &ldquo;Patients almost never connect a stiff neck in March to a fender bender from December. By the time they come in, the body has been quietly rerouting around the problem for months, which is exactly why we start every new patient with a full postural and neurological evaluation instead of guessing.&rdquo;
                        </p>
                        <footer className="mt-3 text-sm font-bold text-gray-600">
                          — Dr. Ernest D. Buzzella, DC | Chiropractor, Prestige Medical & Physical Therapy, Tampa FL
                        </footer>
                      </blockquote>

                      <div className="mt-6 space-y-3 pl-2">
                        <p className="text-base leading-8 text-gray-700 font-medium">
                          • See how the clinic structures care on the{" "}
                          <Link
                            href="/services/constant-neck-and-back-pain"
                            className="font-bold text-[#2B7BBA] underline underline-offset-4 hover:text-prestige-yellow transition"
                          >
                            Chiropractic Manipulation services page
                          </Link>
                          .
                        </p>
                        <p className="text-base leading-8 text-gray-700 font-medium">
                          • Full evaluations including{" "}
                          <Link
                            href="/services/digital-radiography"
                            className="font-bold text-[#2B7BBA] underline underline-offset-4 hover:text-prestige-yellow transition"
                          >
                            digital radiography
                          </Link>
                          , are available right there on the office.
                        </p>
                        <p className="text-base leading-8 text-gray-700 font-medium">
                          • Patients recovering from accidents can review{" "}
                          <Link
                            href="/services/injury-rehabilitation"
                            className="font-bold text-[#2B7BBA] underline underline-offset-4 hover:text-prestige-yellow transition"
                          >
                            injury rehabilitation programs
                          </Link>{" "}
                          built specifically around timelines for recovery following a collision.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 07 */}
                <section
                  id="section-07"
                  className="border-l-4 border-prestige-yellow bg-white py-2 pl-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-prestige-yellow text-lg font-bold text-black rounded-sm">
                      07
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold leading-snug text-[#1B2639]">
                        What We See in Tampa Bay Patients
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                        <p>
                          Our surveys of new patients at Prestige Medical & Physical Therapy show that most had experienced one or more of the nine warning signs above for six months or more before coming in for an evaluation. In fact, many people suffer from one or more of these symptoms for years, believing them to be normal accompaniments of getting older or working at a demanding job.
                        </p>
                        <p>
                          Desk workers across Hillsborough and Pinellas counties report the cervicogenic headache pattern most frequently, while patients referred through auto accident claims more often present with combined cervical and thoracic misalignment from whiplash.
                        </p>
                      </div>

                      <div className="mt-8 bg-[#1B2639] p-6 text-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-prestige-yellow">
                          Ready to Find Out What&apos;s Really Going On With Your Spine?
                        </h3>
                        <p className="mt-3 text-base leading-8 text-gray-100">
                          Prestige Medical & Physical Therapy is here for your full recovery, day and night.
                        </p>
                        <Link
                          href="/contact"
                          className="mt-5 inline-flex bg-prestige-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#f0c900] rounded"
                        >
                          Book Your Evaluation Today →
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* FAQ Section */}
              <div className="mt-10 border-t-4 border-[#2B7BBA] pt-6">
                <h2 className="text-3xl font-bold text-[#1B2639]">
                  FAQ
                </h2>
                <div className="mt-6 space-y-5">
                  {faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-[#f7f7f7] p-5 rounded-lg border border-gray-100 shadow-sm"
                    >
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

              {/* Contact Information Box */}
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

              {/* Disclaimer */}
              <div className="mt-8 border border-gray-200 p-5 rounded-lg bg-[#fafafa]">
                <p className="text-sm italic leading-6 text-gray-600">
                  Disclaimer: This article is solely for general educational purposes. It should not be used as a substitute of professional medical advice. Please consult our professional medical evaluation or chiropractic physician in the case of new, serious, or persisting symptoms.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 max-h-[1000px] overflow-y-auto overflow-x-hidden rounded-lg p-3">
              <h2 className="mb-6 border-b-2 border-gray-500 pb-4 text-3xl font-medium text-black md:text-4xl font-sans">
                Recent Blogs
              </h2>

              <Link
                className="my-3 flex items-start gap-3 bg-white p-3 drop-shadow-lg rounded border border-l-4 border-l-prestige-yellow"
                href={`/blogs/${signsYourSpineMayBeOutOfAlignmentBlog.slug}`}
              >
                <Image
                  width={180}
                  height={180}
                  src={signsYourSpineMayBeOutOfAlignmentBlog.image}
                  alt={signsYourSpineMayBeOutOfAlignmentBlog.alt}
                  className="h-[76px] w-[100px] object-cover rounded"
                />
                <div className="text-left flex-1 min-w-0">
                  <div className="line-clamp-2 text-sm font-bold text-black">
                    {signsYourSpineMayBeOutOfAlignmentBlog.cardTitle}
                  </div>
                  <p className="line-clamp-2 text-xs text-gray-600 mt-1">
                    {signsYourSpineMayBeOutOfAlignmentBlog.shortDescription}
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

