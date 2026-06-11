import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import Link from "next/link";
import GetAllPostData from "@/lib/GetPostData";
import { staticBlogs } from "@/components/static-blogs/static-blog-data";

function extractTextFromHtml(htmlString: string): string {
  const plainText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  return plainText;
}

export default async function Blogs() {
  const blogPostData = await GetAllPostData();
  const publishedBlogs =
    [
      ...staticBlogs,
      ...(blogPostData?.data?.filter((blog: any) => blog.published === true) ||
        []),
    ].slice(0, 4);
  return (
    <section className="bg-prestige-black">
      <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        {/* Section Title */}
        <div className="text-center mb-10">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Latest <span className="text-prestige-yellow">Blogs</span>
              </h2>
            </Reveal>
            <Reveal tag="p" y={12} opacityFrom={0.08}>
              <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
              Stay updated with expert insights, treatment tips, and real patient-focused guidance designed to help you understand your care and progress with confidence.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {publishedBlogs.length > 0 ? (
            <Stagger>
              {publishedBlogs.map((blog: any, index: number) => {
                const description =
                  blog.shortDescription ||
                  blog.description ||
                  (blog.body
                  ? extractTextFromHtml(blog.body).slice(0, 100) + "..."
                    : "Read more about this blog post.");

                return (
                  <Reveal key={blog.slug || index} y={16} opacityFrom={0}>
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 block"
                    >
                      {/* Blog Image */}
                      <Image
                        src={
                          blog.image ||
                          blog?.featuredImage?.image?.url ||
                          "/images/placeholder.png"
                        }
                        alt={
                          blog.alt ||
                          blog?.featuredImage?.altText ||
                          blog.title ||
                          "Blog image"
                        }
                        width={400}
                        height={250}
                        className="w-full aspect-[544/329] object-cover"
                      />

                      {/* Blog Content */}
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-white">
                          {blog.cardTitle || blog.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2">
                          {description}
                        </p>
                        <span className="text-prestige-yellow font-semibold text-sm mt-3 inline-block hover:underline">
                          Read More
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </Stagger>
          ) : (
            <div className="col-span-full text-center py-8 text-gray-400">
              No blogs available at the moment.
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
