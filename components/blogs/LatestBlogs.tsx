"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    slug: "brand-positioning-what-space-will-you-own-in-your-customers-mind-during-your-business-transformation", //digital-radiography
    title: "Digital Radiography is Good for Health",
    desc: "Experience compassionate care tailored to your needs. Our team is dedicated to providing effective treatment in a caring environment.",
    image: "/images/blogspage/latestblogs/img1.png",
  },
  {
    slug: "laser-therapy-system",
    title: "Laser Therapy System Save Lives: Here’s Why",
    desc: "We prioritize your well-being with personalized care designed to promote healing and comfort every step of the way.",
    image: "/images/blogspage/latestblogs/img2.png",
  },
  {
    slug: "whole-body-vibration",
    title: "Top Reasons for Whole-Body Vibration",
    desc: "Committed to your recovery, our team delivers expert treatment in a welcoming and supportive setting.",
    image: "/images/blogspage/latestblogs/img3.png",
  },
  {
    slug: "spinal-decompression",
    title: "Spinal Decompression Machines",
    desc: "Your health is our focus — providing extensive, effective care to help you regain strength and confidence.",
    image: "/images/blogspage/latestblogs/img4.png",
  },
  {
    slug: "digital-radiography-2",
    title: "Digital Radiography is Good for Health (Part 2)",
    desc: "Digital imaging reduces radiation exposure and delivers faster, more accurate diagnostics for better care.",
    image: "/images/blogspage/latestblogs/img5.png",
  },
  {
    slug: "laser-therapy-2",
    title: "Laser Therapy System Save Lives: Advanced Benefits",
    desc: "Our laser therapy treatments help reduce inflammation, accelerate tissue repair, and enhance your overall recovery.",
    image: "/images/blogspage/latestblogs/img6.png",
  },
  {
    slug: "whole-body-vibration-2",
    title: "Top Benefits of Whole-Body Vibration Therapy",
    desc: "Discover how vibration therapy can improve circulation, increase bone density, and support a healthy lifestyle.",
    image: "/images/blogspage/latestblogs/img7.png",
  },
  {
    slug: "spinal-decompression-2",
    title: "Spinal Decompression — Advanced Techniques",
    desc: "Our decompression machines gently stretch the spine, relieving pressure on discs and nerves to ease chronic pain.",
    image: "/images/blogspage/latestblogs/img8.png",
  },
  {
    slug: "digital-radiography-3",
    title: "Digital Radiography — Technology for Better Imaging",
    desc: "Our advanced digital systems capture high-quality images instantly, improving diagnosis and patient comfort.",
    image: "/images/blogspage/latestblogs/img9.png",
  },
  {
    slug: "laser-therapy-3",
    title: "Laser Therapy: Safe, Effective, and Painless",
    desc: "Laser therapy helps patients recover faster and manage chronic pain without invasive procedures.",
    image: "/images/blogspage/latestblogs/img10.png",
  },
  {
    slug: "whole-body-vibration-3",
    title: "Whole-Body Vibration and Strength Recovery",
    desc: "Boost muscle recovery, reduce soreness, and improve flexibility through scientifically backed vibration sessions.",
    image: "/images/blogspage/latestblogs/img11.png",
  },
  {
    slug: "spinal-decompression-3",
    title: "Spinal Decompression Machines for Lasting Relief",
    desc: "Using state-of-the-art decompression therapy, we provide lasting results for those suffering from spinal injuries.",
    image: "/images/blogspage/latestblogs/img12.png",
  },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="bg-prestige-black">
      <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
        {/* ===== Header ===== */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Latest <span className="text-prestige-yellow">Blogs</span>
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            The physicians and staff at Prestige understand that being injured
            in an auto accident can be extremely stressful for you and your
            family.
          </p>
        </div>

        {/* ===== Blog Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {selectedBlogs.map((blog, index) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={index}
              className="group bg-[#111] border border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-6"
            >
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-prestige-yellow transition">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.desc}
                </p>
                <span className="text-prestige-yellow font-medium text-sm hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ===== Pagination ===== */}
        <div className="flex justify-center mt-12 space-x-2">
          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border border-gray-600 text-sm transition ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed text-gray-500"
                : "text-white hover:bg-prestige-yellow hover:text-black"
            }`}
          >
            ‹
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-md text-sm font-semibold transition ${
                currentPage === i + 1
                  ? "bg-prestige-yellow text-black"
                  : "bg-white border border-gray-600 text-black hover:bg-prestige-yellow hover:text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border border-gray-600 text-sm transition ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed text-gray-500"
                : "text-white hover:bg-prestige-yellow hover:text-black"
            }`}
          >
            ›
          </button>
        </div>
      </section>
    </main>
  );
}
