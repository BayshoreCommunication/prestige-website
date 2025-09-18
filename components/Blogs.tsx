import Image from "next/image";

const blogs = [
  {
    image: "/images/blogs/Link.png",
    title: "Digital Radiography is good for health",
    description:
      "Phasellus sit amet odio ex. Pellentesque id enim sed lectus consectetur consequat faucibus vel augue.",
    link: "#",
  },
  {
    image: "/images/blogs/Link (1).png",
    title: "Laser Therapy System Save Lives: Here’s Why",
    description:
      "Curabitur sit amet nunc erat. Integer id enim sed lectus efficitur faucibus vel augue vitae.",
    link: "#",
  },
  {
    image: "/images/blogs/Link (2).png",
    title: "Top Reasons for Whole-Body Vibration",
    description:
      "Vivamus sit amet odio nunc. Pellentesque id enim sed lectus congue consequat, faucibus vel augue.",
    link: "#",
  },
  {
    image: "/images/blogs/Link (3).png",
    title: "Spinal Decompression Machines",
    description:
      "Nullam sit amet odio ex. Pellentesque id enim sed lectus, consequat faucibus vel augue semper.",
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
