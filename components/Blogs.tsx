import Image from "next/image";

const blogs = [
  {
    image: "/images/blogs/img1.png",
    title: "Digital Radiography is good for health",
    description:
      "Experience compassionate care tailored to your needs. Our team is dedicated to providing effective treatment in a comfortable and supportive environment.",
    link: "#",
  },
  {
    image: "/images/blogs/img2.png",
    title: "Laser Therapy System Save Lives: Here’s Why",
    description:
      "We prioritize your well-being with personalized care designed to promote healing and comfort every step of the way.",
    link: "#",
  },
  {
    image: "/images/blogs/img3.png",
    title: "Top Reasons for Whole-Body Vibration",
    description:
      "Committed to your recovery, our team delivers expert treatment in a welcoming and supportive setting.",
    link: "#",
  },
  {
    image: "/images/blogs/img4.png",
    title: "Spinal Decompression Machines",
    description:
      "Your health is our focus — providing attentive, effective care to help you regain strength and confidence.",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section className="bg-prestige-black">
      <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest <span className="text-prestige-yellow">Blogs</span>
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            The physicians and staff at prestige understand that being injured
            in an auto accident can be extremely stressful for you and your
            family.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#111]  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />

              {/* Blog Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-prestige-yellow font-semibold text-sm mt-3 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
