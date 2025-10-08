import Image from "next/image";
import Link from "next/link"

// Types for blog entries
type BlogEntry = { title: string; image: string; content: string };

// All blog details — you can expand or fetch these later from a CMS or JSON
const blogData: Record<string, BlogEntry> = {
  "digital-radiography": {
    title: "Digital Radiography is Good for Health",
    image: "/images/blogspage/latestblogs/img1.png",
    content: `
Digital radiography uses advanced imaging to produce clearer, faster results while minimizing radiation exposure.  
It provides doctors with immediate access to high-quality images that help in faster diagnosis and treatment planning.

Our clinic uses cutting-edge digital systems that ensure accurate, comfortable, and efficient imaging for every patient.
    `,
  },
  "laser-therapy-system": {
    title: "Laser Therapy System Save Lives: Here’s Why",
    image: "/images/blogspage/latestblogs/img2.png",
    content: `
Laser therapy accelerates tissue repair and reduces pain by stimulating cellular activity.  
This innovative, non-invasive treatment helps patients heal faster and manage chronic conditions safely.

At Prestige, we combine advanced laser systems with personalized care to ensure long-term recovery and comfort.
    `,
  },
  "whole-body-vibration": {
    title: "Top Reasons for Whole-Body Vibration",
    image: "/images/blogspage/latestblogs/img3.png",
    content: `
Whole-body vibration therapy is a proven method to improve circulation, boost muscle strength, and support rehabilitation.  
It enhances recovery after injury and helps prevent muscle atrophy for patients of all ages.

Our vibration therapy sessions are designed to improve flexibility, balance, and long-term physical well-being.
    `,
  },
  "spinal-decompression": {
    title: "Spinal Decompression Machines",
    image: "/images/blogspage/latestblogs/img4.png",
    content: `
Spinal decompression gently stretches the spine to relieve pressure on discs and nerves.  
It’s highly effective for treating chronic back pain and herniated discs without the need for surgery.

We use state-of-the-art decompression systems that ensure your comfort and promote sustainable spinal health.
    `,
  },
  "digital-radiography-2": {
    title: "Digital Radiography is Good for Health (Part 2)",
    image: "/images/blogspage/latestblogs/img5.png",
    content: `
Digital radiography Part 2 explores advanced imaging methods that enhance diagnostic precision and patient experience.  
Our goal is to provide faster, safer, and more reliable imaging results for better healthcare outcomes.
    `,
  },
  "laser-therapy-2": {
    title: "Laser Therapy System Save Lives: Advanced Benefits",
    image: "/images/blogspage/latestblogs/img6.png",
    content: `
Advanced laser therapy improves healing, reduces inflammation, and increases mobility.  
Our expert team customizes treatment for each patient’s recovery needs.
    `,
  },
  "whole-body-vibration-2": {
    title: "Top Benefits of Whole-Body Vibration Therapy",
    image: "/images/blogspage/latestblogs/img7.png",
    content: `
Discover how vibration therapy promotes blood flow, strengthens muscles, and boosts metabolism.  
A perfect complementary treatment for injury rehabilitation and active lifestyles.
    `,
  },
  "spinal-decompression-2": {
    title: "Spinal Decompression — Advanced Techniques",
    image: "/images/blogspage/latestblogs/img8.png",
    content: `
Advanced spinal decompression uses targeted traction to realign vertebrae and restore mobility.  
This approach reduces chronic pain and enhances overall spinal health.
    `,
  },
  "digital-radiography-3": {
    title: "Digital Radiography — Technology for Better Imaging",
    image: "/images/blogspage/latestblogs/img9.png",
    content: `
Our latest digital systems capture ultra-high-resolution images instantly.  
This ensures accurate diagnostics, minimal wait times, and maximum patient comfort.
    `,
  },
  "laser-therapy-3": {
    title: "Laser Therapy: Safe, Effective, and Painless",
    image: "/images/blogspage/latestblogs/img10.png",
    content: `
Laser therapy is completely painless, non-invasive, and scientifically proven to aid recovery.  
We use it to treat a variety of chronic and acute conditions safely.
    `,
  },
  "whole-body-vibration-3": {
    title: "Whole-Body Vibration and Strength Recovery",
    image: "/images/blogspage/latestblogs/img11.png",
    content: `
Whole-body vibration improves muscle tone, balance, and coordination.  
It’s ideal for athletes, seniors, and patients recovering from injuries.
    `,
  },
  "spinal-decompression-3": {
    title: "Spinal Decompression Machines for Lasting Relief",
    image: "/images/blogspage/latestblogs/img12.png",
    content: `
Our decompression systems help patients regain strength and flexibility by gently stretching the spine.  
We focus on long-term recovery and pain management with proven results.
    `,
  },
};

export default function BlogDetails({ params }: { params: { slug: string } }) {
  const blog = blogData[params.slug];

  if (!blog) {
    return (
      <div className="max-w-[1640px] mx-auto px-8 py-16 text-center text-white">
        <h2 className="text-2xl font-bold">Blog not found</h2>
      </div>
    );
  }
  const otherServices = [
    { title: "Multi-Disciplinary Care", desc: "Offers digital X-rays, physical therapy, chiropractic care, trigger point injections, and more.", image: "/images/blogspage/latestblogs/img5.png" },
    { title: "Laser Therapy", desc: "Reduce inflammation, accelerate healing, and relieve chronic pain safely.", image: "/images/blogspage/latestblogs/img6.png" },
    { title: "Spinal Decompression", desc: "Non-surgical traction therapy for back pain and disc issues.", image: "/images/blogspage/latestblogs/img8.png" },
    { title: "Whole-Body Vibration", desc: "Enhance mobility, posture, and balance through vibration therapy.", image: "/images/blogspage/latestblogs/img7.png" },
    { title: "Digital Radiography", desc: "Advanced digital imaging for accurate diagnosis and minimal radiation.", image: "/images/blogspage/latestblogs/img1.png" },
  ];
  return (
    
    <main>
        <section className="relative px-8 w-full  mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/blogspage/latestblogs/bg.png"
          alt="Blogs page Background"
          width={1000}
          height={800}
          className="object-cover object-top  w-full h-full z-10"
          priority
        />
        <div className="absolute inset-0 bg-prestige-yellow/10 pointer-events-none z-10"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col justify-center items-start min-h-[300px] md:min-h-[400px] text-white space-y-4 max-w-[1640px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-black">Blog Details</h1>
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
    <section className="bg-prestige-black text-white min-h-screen">
      <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ===== Left Content ===== */}
        <div className="lg:col-span-2">
          {/* Image */}
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1000}
              height={800}
              className="object-contain  object-center w-full h-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            {blog.title}
          </h1>

          {/* Content */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            {blog.content.split("\n").map(
              (para, idx) =>
                para.trim() && <p key={idx} className="text-sm md:text-base">{para}</p>
            )}
          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-prestige-yellow text-black font-semibold px-5 py-3 rounded-md hover:bg-yellow-400 transition">
              Request Appointment
            </button>
          </div>
        </div>

        {/* ===== Right Sidebar ===== */}
        <aside className="space-y-4 bg-[#111] p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4 text-white">Other Services</h2>

          <div className="flex flex-col space-y-3 max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {otherServices.map((service, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition ${
                  blog.title.includes(service.title)
                    ? "bg-prestige-yellow text-black"
                    : "bg-[#1a1a1a] hover:bg-gray-800"
                }`}
              >
                <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </section>
    </main>
  );
}
