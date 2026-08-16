import Image from "next/image";
import Link from "next/link";
import {
  bestSleepingPositionsNeckBackPainBlog,
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
  "Back sleeping spreads weight evenly across the bed.",
  "It promotes the curve of your spine.",
  "Side sleeping works fine with a pillow between the knees.",
  "Stomach sleeping twists the neck for hours straight.",
  "Pillow height matters as much as the position itself.",
  "A medium firm mattress provides better spinal alignment.",
];

const stats = [
  {
    value: "53%",
    label: "of US adults report chronic pain in at least one body area",
  },
  {
    value: "50-88%",
    label: "of chronic pain sufferers also deal with poor sleep",
  },
  {
    value: "3",
    label: "spinal curves that need support every single night",
  },
];

const positionTable = [
  {
    position: "Back, knee pillow",
    spineEffect: "Neutral alignment",
    verdict: "Best overall",
  },
  {
    position: "Side, knee pillow",
    spineEffect: "Mostly neutral",
    verdict: "Strong second choice",
  },
  {
    position: "Side, tight curl",
    spineEffect: "Restricts breathing",
    verdict: "Loosen the curl",
  },
  {
    position: "Stomach",
    spineEffect: "Forces neck rotation",
    verdict: "Avoid if possible",
  },
];

const quickFixChecklist = [
  "Pick back sleeping as the default starting position.",
  "Sleep flat on your back. Let a cushion hold up your knees.",
  "Choose one supportive pillow. Keep things aligned.",
  "Choose a medium firm support instead of a soft mattress.",
  "Give any change two full weeks before judging it.",
];

const faqs = [
  {
    question: "How many pillows do I sleep on?",
    answer:
      "One supportive pillow on top is usually better than two. Stacking pushes the neck into an odd angle.",
  },
  {
    question: "Can a body pillow help with back pain?",
    answer:
      "Yes. It gives side sleepers steady support for knees and hips.",
  },
  {
    question: "Is it bad to switch positions during the night?",
    answer:
      "Not at all. Shifting is normal and often a sign of self-correction.",
  },
  {
    question: "Does sleeping on the floor help spine alignment?",
    answer:
      "Usually not. Hard surfaces create pressure points rather than support natural curves.",
  },
  {
    question: "What firmness of pillow is best for neck pain?",
    answer:
      "Firm enough to hold shape all night. Soft enough to contour the neck's curve.",
  },
  {
    question: "How to stop rolling onto stomach while sleeping?",
    answer:
      "Training yourself takes a few weeks. Try using a tennis ball clipped to the front of your shirt, or use a heavy body pillow on your side to create a physical barrier.",
  },
];

const sections = [
  {
    number: "01",
    title: "Sleep Position Deeply Affect Neck and Back Pain",
    body: [
      "Look, your spine is a truly marvelous piece of engineering. It holds three distinct, natural curves:",
    ],
    curves: [
      "1. Your neck",
      "2. Your mid-back",
      "3. And your lower back.",
    ],
    bodyAfterCurves: [
      "Now, you spend eight long hours in a bad position, and you're actively fighting against all three of 'em. Down here, that fierce Florida heat keeps folks active deep into the evening. You’ve got pickleball at eight o'clock at night. You’ve got folks running just after sunset. And then, it's straight to bed with zero thought given to posture.",
      "However, those muscles worked hard all day long and they need real, honest rest. A bad position keeps 'em tense when they ought to be relaxing. Those spinal discs stay compressed, instead of opening up and decompressing the way nature intended.",
      "Then the morning comes, and you start out stiff. Across the weeks, that stiffness builds. And before you know, it turns into something a whole lot harder to shake. Think about the math here. A bad night happens once; no big deal, we move on. But a bad position repeated for months on end? That turns into chronic tension. The muscles, they actually learn the wrong pattern.",
    ],
    cdcText:
      "This is exactly why posture during sleep gets overlooked. Daytime posture gets blamed first. Desk setup, driving position, phone neck. All real factors. The ",
    cdcLabel: "CDC",
    cdcUrl: "https://www.cdc.gov/",
    cdcSuffix: " links poor sleep to a long list of health risks beyond just pain.",
  },
  {
    number: "02",
    title: "Best Sleeping Position for Your Lower Back Pain",
    body: [
      "Back sleeping wins this race, and I tell you, it isn't even close. Lying flat spreads your weight across your widest possible surface. No twist. No lean. Just good, even support.",
    ],
    mayoText:
      "But you have to add one little move. Slide a pillow right under your knees. The ",
    mayoLabel: "Mayo Clinic",
    mayoUrl: "https://www.mayoclinic.org/",
    mayoSuffix:
      " backs this exact setup for easing lower back strain. It protects the lumbar curve too. Now, people skip this step quite often. Then they wonder why back sleeping never felt right to them. A rolled-up towel under the waist helps out as well, especially if you've got a more pronounced lower curve.",
    cta: {
      title: "Still Waking Up Stiff?",
      text: "Prestige Medical & Physical Therapy treats neck and back pain at the source.",
      href: "/contact",
      label: "Request an appointment →",
    },
    bodyAfterCta: [
      "Side sleeping is your solid backup option. Just pull your knees up slightly. Place a pillow between 'em. That keeps your hips, your pelvis, and your spine all in one beautiful line. Without that knee pillow, your top leg drops forward. That rotation pulls the lower spine out of alignment slowly, bit by bit.",
      "Curled up tight in a fetal position causes its own trouble. It restricts breathing and limits spinal mobility overnight. A looser side position, knees softly bent, works far better than a tight curl.",
    ],
  },
  {
    number: "03",
    title: "And the Best Sleeping Position for Neck Pain",
    body: [
      "Pillow height decides this one. Not position alone.",
    ],
    ncoaText:
      "Back sleepers need a pillow that supports the natural curve. A pillow too high tilts the chin forward. One that’s too flat lets the head tip back. Side sleepers, now, they need more loft than they think. The gap between your shoulder and your head runs pretty wide. Pillow research from ",
    ncoaLabel: "NCOA",
    ncoaUrl: "https://www.ncoa.org/",
    ncoaSuffix: " confirms higher loft pillows suit side sleepers best.",
    bodyAfterNcoa: [
      "Stomach sleeping breaks the rule, no matter what kind of fancy pillow you've got. Breathing facedown means you have to rotate your head far to one side. That forces an extreme, unnatural rotation for the entire night.",
      "There is no real fix for that one. Switch the position instead. A simple test works for most people. Lie down and check the mirror. Head and spine should sit in one straight line. Any obvious tilt means the pillow needs adjusting.",
    ],
    hasTable: true,
  },
  {
    number: "04",
    title: "Is Stomach Sleeping Really Bad for the Spine?",
    body: [
      "Yes, sir, it is. Stomach sleeping flattens out the lower back's natural curve. It overextends the spine at the exact same time. It sounds a bit confusing; however, it’s true. The pelvis tips forward and the lumbar spine arches awkwardly. So, the neck stays twisted all night long.",
      "Now, people who sleep facedown often say absolutely nothing else feels comfortable to them. And I get it. I really do. Old habits run deep. But Research on sleep duration and musculoskeletal pain shows shifting stance might ease things, yes, even if you have always slept on your belly.",
      "The fix doesn’t have to be instant. Use a thin pillow, or skip it entirely. Slide a flatter pillow under the hips instead. That reduces the arch right away. Then work toward side sleeping over a few weeks. Cold turkey rarely works for stomach sleepers.",
      "Gradualism works much better. A pillow hugged against the chest can ease the transition. It gives the arms and shoulders something to anchor to. Many stomach sleepers find that small comfort makes the switch stick.",
    ],
  },
  {
    number: "05",
    title: "What Our Patients Tell Us About Sleep and Recovery",
    body: [
      "Patients walking in after car accidents rarely mention sleep first. They talk about the crash. The pain. Sleep comes up later, usually around week two. That is when stiffness has nowhere left to hide.",
      "Our surveys show a clear pattern here. Patients who adjust their sleep setup early recover faster. Pillow placement matters as much as treatment itself.",
      "This connects to what Prestige Medical & Physical Therapy treats every week. Auto injuries do not heal on their own schedule. They heal through daytime treatment and nighttime recovery, working together. Florida sees its share of fender benders and rear end collisions. Whiplash patients walk through clinic doors across Tampa every week. Sleep position becomes part of the recovery conversation fast.",
    ],
    quote: {
      text: "Patients always ask what they can do at home. Sleep position is one of the easiest fixes. It costs nothing. It works fast when patients stick with it.",
      author: "Alisha Churchill, DPT, Physical Therapist at Prestige Medical & Physical Therapy",
    },
  },
  {
    number: "06",
    title: "Can Firmness of Mattress Change Spine Alignment?",
    body: [
      "It does and the data usually backs it up. Too soft mattresses sink your hips down much lower than your shoulders. That twists the spine completely out of line.",
    ],
    mattressPoints: [
      "1. A mattress too hard pushes back against your curves. It should support them instead.",
      "2. Medium to firm is the most comfortable for many adults. They support pressure points such as the hips and shoulders. It still holds the spine level.",
      "3. Florida humidity plays a role here too. Memory foam can trap heat overnight. A hybrid mattress often wins for year-round comfort.",
      "4. Mattress shopping should not be arbitrary. Back pain that follows you to chiropractic visits needs a hard look.",
    ],
    bodyAfterMattressPoints: [
      "Those sleeping on their side will need better comfort and cushioning where you lay on your shoulders, as well as where you rest hips. Those resting on their back require a slightly firmer mattress, where the spinal cord remains straight while you are resting.",
    ],
  },
  {
    number: "07",
    title: "How Long to Relieve Sleep Posture Discomfort?",
    body: [
      "Faster than most people expect, honestly. Small corrections at night often show results fast. The body adapts quickly once pressure points ease up.",
      "Pain built up over months needs more than pillow changes. You could benefit from a chiropractic adjustment and targeted physiotherapy to treat that issue. Adjusting your spine correctly during the day will have a positive effect on your spine during the night too.",
    ],
    painFoundationText:
      "Chronic pain and poor sleep feed each other constantly. More than 50% of people living with persistent pain struggle to sleep night after night, according to figures collected by the ",
    painFoundationLabel: "U.S. Pain Foundation",
    painFoundationUrl: "https://www.uspainfoundation.org/",
    painFoundationSuffix:
      ". This connection shouldn’t sit on the sidelines. Breaking that cycle starts small. Fix the pillow. Fix the position. Then build from there with proper treatment if pain lingers. Most patients see the biggest shift once both pieces work together.",
    hasChecklist: true,
    bodyAfterChecklist: [
      "A few small habit changes tonight beat months of stiffness later. The body responds fast when it finally gets proper support. Start with the pillow and mattress, then request an appointment if pain sticks around.",
    ],
    cta: {
      title: "Ready to Sleep and Move Without Pain?",
      text: "Prestige Medical & Physical Therapy is here for your full recovery, day and night.",
      href: "/contact",
      label: "Book your visit today →",
    },
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
          "name": "Best Sleeping Positions for Neck and Back Pain",
          "item":
            "https://www.prestigemedpt.com/blogs/best-sleeping-positions-neck-back-pain",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.prestigemedpt.com/blogs/best-sleeping-positions-neck-back-pain",
      },
      "headline": "Best Sleeping Positions for Neck and Back Pain",
      "name": "We Ranked The Best Sleeping Position For Back & Neck Pain",
      "description":
        "Back sleeping with a knee pillow is best for alignment. But if you are doing this one common position, you are secretly breaking your spine every night.",
      "url":
        "https://www.prestigemedpt.com/blogs/best-sleeping-positions-neck-back-pain",
      "image":
        "https://www.prestigemedpt.com/images/static-blogs/best-sleeping-positions-neck-back-pain.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.prestigemedpt.com/blogs",
      },
      "about": {
        "@type": "Thing",
        "name": "Sleeping Positions for Neck and Back Pain",
        "description":
          "An overview of sleeping positions, pillow support, mattress firmness, and sleep posture considerations that may help support spinal alignment and comfort for people with neck and back pain.",
      },
      "keywords": [
        "best sleeping positions for neck and back pain",
        "sleeping positions for back pain",
        "sleeping positions for neck pain",
        "best sleeping position for lower back pain",
        "sleep posture for back pain",
        "sleep posture for neck pain",
        "pillow position for back pain",
        "pillow position for neck pain",
        "mattress firmness for back pain",
        "stomach sleeping back pain",
        "Tampa neck and back pain treatment",
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
      "datePublished": "2026-08-10",
      "dateModified": "2026-08-10",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many pillows do I sleep on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "One supportive pillow on top is usually better than two. Stacking pushes the neck into an odd angle.",
          },
        },
        {
          "@type": "Question",
          "name": "Can a body pillow help with back pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. It gives side sleepers steady support for knees and hips.",
          },
        },
        {
          "@type": "Question",
          "name": "Is it bad to switch positions during the night?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Not at all. Shifting is normal and often a sign of self-correction.",
          },
        },
        {
          "@type": "Question",
          "name": "Does sleeping on the floor help spine alignment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Usually not. Hard surfaces create pressure points rather than support natural curves.",
          },
        },
        {
          "@type": "Question",
          "name": "What firmness of pillow is best for neck pain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Firm enough to hold shape all night. Soft enough to contour the neck's curve.",
          },
        },
        {
          "@type": "Question",
          "name": "How to stop rolling onto stomach while sleeping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Training yourself takes a few weeks. Try using a tennis ball clipped to the front of your shirt, or use a heavy body pillow on your side to create a physical barrier.",
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

export default function BestSleepingPositionsNeckBackPainBlog({
  blogPostData,
}: {
  blogPostData?: BlogPostData;
}) {
  const recentBlogs =
    blogPostData?.data?.filter((blog) => blog.published === true).slice(0, 8) ||
    [];
  const staticRecentBlogs = staticBlogs.filter(
    (blog) => blog.slug !== bestSleepingPositionsNeckBackPainBlog.slug
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
                  Spine Health & Sleep | Physical Therapy | Tampa, Florida
                </div>
              </div>

              <div className="border-b-4 border-prestige-yellow pb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prestige-yellow mt-4">
                  {bestSleepingPositionsNeckBackPainBlog.category}
                </p>
                <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#1B2639] md:text-5xl">
                  {bestSleepingPositionsNeckBackPainBlog.title}
                </h1>
                <p className="mt-4 text-sm italic text-gray-600">
                  Published: {postDate(bestSleepingPositionsNeckBackPainBlog.createdAt)} | Updated: {postDate(bestSleepingPositionsNeckBackPainBlog.createdAt)}
                </p>
              </div>

              <figure className="mt-8">
                <div className="overflow-hidden border border-gray-200 bg-black rounded-lg">
                  <Image
                    src={bestSleepingPositionsNeckBackPainBlog.image}
                    alt={bestSleepingPositionsNeckBackPainBlog.alt}
                    title={bestSleepingPositionsNeckBackPainBlog.imageTitle}
                    width={1088}
                    height={658}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <figcaption className="border-x border-b border-gray-200 bg-[#f7f7f7] px-4 py-3 text-center text-sm italic text-gray-600 rounded-b-lg">
                  {bestSleepingPositionsNeckBackPainBlog.caption}
                </figcaption>
              </figure>

              <div className="mt-8 bg-[#EBF5FF] p-6 rounded-lg">
                <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1B2639]">
                  Key Takeaways
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
                  If you lie flat on your back with a good honest pillow under your knees, you are as good to yourself as you can be. It holds your spine up straight as an arrow all night long. Side sleeper? Well, that comes in a close second, that is, if you’ve got a trusty pillow between your knees. But sleeping on your stomach, now that’s a different story. It only serves to twist your neck up like a pretzel, hour after hour. In my opinion you’d do best to stay away from that one.
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

                        {section.curves && (
                          <ul className="mt-4 space-y-2 text-base font-semibold text-[#1A3A5C] pl-4">
                            {section.curves.map((curve) => (
                              <li key={curve}>{curve}</li>
                            ))}
                          </ul>
                        )}

                        {section.bodyAfterCurves && (
                          <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                            {section.bodyAfterCurves.map((paragraph, index) => (
                              <p key={`${section.number}-body-after-curves-${index}`}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.cdcText && (
                          <p className="mt-4 text-base leading-8 text-gray-700">
                            {section.cdcText}
                            <a
                              href={section.cdcUrl}
                              {...externalLinkProps}
                              className="underline underline-offset-4 font-bold text-[#2B7BBA] hover:text-prestige-yellow transition"
                            >
                              {section.cdcLabel}
                            </a>
                            {section.cdcSuffix}
                          </p>
                        )}

                        {section.mayoText && (
                          <p className="mt-4 text-base leading-8 text-gray-700">
                            {section.mayoText}
                            <a
                              href={section.mayoUrl}
                              {...externalLinkProps}
                              className="underline underline-offset-4 font-bold text-[#2B7BBA] hover:text-prestige-yellow transition"
                            >
                              {section.mayoLabel}
                            </a>
                            {section.mayoSuffix}
                          </p>
                        )}

                        {section.bodyAfterCta && (
                          <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                            {section.bodyAfterCta.map((paragraph, index) => (
                              <p key={`${section.number}-body-after-cta-${index}`}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.ncoaText && (
                          <p className="mt-4 text-base leading-8 text-gray-700">
                            {section.ncoaText}
                            <a
                              href={section.ncoaUrl}
                              {...externalLinkProps}
                              className="underline underline-offset-4 font-bold text-[#2B7BBA] hover:text-prestige-yellow transition"
                            >
                              {section.ncoaLabel}
                            </a>
                            {section.ncoaSuffix}
                          </p>
                        )}

                        {section.bodyAfterNcoa && (
                          <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                            {section.bodyAfterNcoa.map((paragraph, index) => (
                              <p key={`${section.number}-body-after-ncoa-${index}`}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.hasTable && (
                          <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
                            <table className="w-full text-left text-sm text-gray-700">
                              <thead className="bg-[#1A3A5C] text-xs uppercase text-white">
                                <tr>
                                  <th scope="col" className="px-6 py-3 font-bold">
                                    Position
                                  </th>
                                  <th scope="col" className="px-6 py-3 font-bold">
                                    Spine Effect
                                  </th>
                                  <th scope="col" className="px-6 py-3 font-bold">
                                    Verdict
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-white">
                                {positionTable.map((row) => (
                                  <tr key={row.position} className="hover:bg-[#EBF5FF]/50 transition">
                                    <td className="px-6 py-4 font-semibold text-[#1B2639]">
                                      {row.position}
                                    </td>
                                    <td className="px-6 py-4">{row.spineEffect}</td>
                                    <td className="px-6 py-4 font-semibold text-[#2B7BBA]">
                                      {row.verdict}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {section.quote && (
                          <blockquote className="mt-6 border-l-4 border-[#2B7BBA] bg-[#f7f7f7] p-5 rounded-r-lg">
                            <p className="text-lg font-semibold italic leading-8 text-[#1B2639]">
                              &ldquo;{section.quote.text}&rdquo;
                            </p>
                            <footer className="mt-3 text-sm font-bold text-gray-600">
                              — {section.quote.author}
                            </footer>
                          </blockquote>
                        )}

                        {section.mattressPoints && (
                          <div className="mt-4 space-y-3 pl-2">
                            {section.mattressPoints.map((point) => (
                              <p key={point} className="text-base leading-8 text-gray-700 font-medium">
                                {point}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.bodyAfterMattressPoints && (
                          <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                            {section.bodyAfterMattressPoints.map((paragraph, index) => (
                              <p key={`${section.number}-body-after-mattress-${index}`}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.painFoundationText && (
                          <p className="mt-4 text-base leading-8 text-gray-700">
                            {section.painFoundationText}
                            <a
                              href={section.painFoundationUrl}
                              {...externalLinkProps}
                              className="underline underline-offset-4 font-bold text-[#2B7BBA] hover:text-prestige-yellow transition"
                            >
                              {section.painFoundationLabel}
                            </a>
                            {section.painFoundationSuffix}
                          </p>
                        )}

                        {section.hasChecklist && (
                          <div className="mt-6 bg-[#EBF5FF] p-6 rounded-lg border border-[#2B7BBA]/20">
                            <h3 className="text-xl font-bold uppercase tracking-wide text-[#1B2639]">
                              Tonight&apos;s Quick Fix Checklist
                            </h3>
                            <ul className="mt-4 grid gap-3 text-base text-gray-800">
                              {quickFixChecklist.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-prestige-yellow" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {section.bodyAfterChecklist && (
                          <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                            {section.bodyAfterChecklist.map((paragraph, index) => (
                              <p key={`${section.number}-body-after-checklist-${index}`}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.cta && (
                          <div className="mt-6 bg-[#1B2639] p-6 text-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-prestige-yellow">
                              {section.cta.title}
                            </h2>
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
                  FAQ
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
                  Ready to Sleep and Move Without Pain?
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-100">
                  Prestige Medical & Physical Therapy is here for your full recovery, day and night.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex bg-prestige-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#f0c900] rounded"
                >
                  Book your visit today →
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
                  Disclaimer: This article is provided for general information only and does not constitute medical advice. Individual results from any treatment vary based on skin condition, severity, and overall health. Schedule a consultation to determine the right treatment plan for your specific case.
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
                href={`/blogs/${bestSleepingPositionsNeckBackPainBlog.slug}`}
              >
                <Image
                  width={180}
                  height={180}
                  src={bestSleepingPositionsNeckBackPainBlog.image}
                  alt={bestSleepingPositionsNeckBackPainBlog.alt}
                  className="h-[76px] w-[100px] object-cover rounded"
                />
                <div className="text-left flex-1 min-w-0">
                  <div className="line-clamp-2 text-sm font-bold text-black">
                    {bestSleepingPositionsNeckBackPainBlog.cardTitle}
                  </div>
                  <p className="line-clamp-2 text-xs text-gray-600 mt-1">
                    {bestSleepingPositionsNeckBackPainBlog.shortDescription}
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
