import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import GetAllPostData from "@/lib/GetPostData";

const css = `
  h1, h2, p, br, nav {
   padding-top: 10px;
   padding-bottom: 10px;
   line-height: normal;
 }
 
 h1, h2 {
   font-style: blog;
 }
 
 h1 {
   font-size: 40px;
 }
 
 h2 {
   font-size: 25px;
 }
 
 p {
   font-size: 17px;
   padding-top: 6px;
   padding-bottom: 6px;
 }
 
 ul {
   list-style-type: disc;
 }
 
 `;

function extractTextFromHtml(htmlString: string) {
  // Use regex to strip HTML tags and extract plain text
  const plainText = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  return plainText;
}

function truncateText(text: string, wordLimit: number) {
  const words = text.split(/\s+/);
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}

//Social Blog Share

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs: any) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  const rawDescription = blogDetails?.body || "";
  const plainTextDescription = extractTextFromHtml(rawDescription);
  const shortDescription = truncateText(plainTextDescription, 120);

  return {
    title: blogDetails?.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails?.title,
      description: shortDescription,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://hessspinalandmedicalcenters-website.vercel.app/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "melamedlawpllc.com",
    },
  };
}

// Main Code

const page = async ({ params }: { params: { slug: string } }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.filter(
    (blogs: any) => blogs.slug === params.slug
  );

  const postDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // console.log("check data", blogDetails);

  return (
    <main>
      {/* BreadcrumbSection */}
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
      {/* BreadcrumbSection */}

      <style>{css}</style>

      <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3 max-w-[1640px] mx-auto">
        {blogDetails?.map((blogs: any, index: number) => (
          <div key={index} className="col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                {blogs?.category || "Blog Post"}
              </p>
              {/* <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                {postDate(blogs?.createdAt)}
              </p> */}
            </div>

            <Image
              width={1000}
              height={300}
              src={blogs?.featuredImage?.image?.url}
              alt={blogs?.featuredImage?.altText}
              className="w-full h-auto bg-center bg-cover rounded-2xl"
            />
            <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
              {postDate(blogs?.createdAt)}
            </p>
            <h2
              className={`mb-0 md:mb-4 text-2xl md:text-4xl font-bold tracking-normal text-left text-[#1B2639] my-8`}
            >
              {blogs?.title}
            </h2>
            <div className="mt-2 text-md text-black">{parse(blogs?.body)}</div>
          </div>
        ))}

        <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden  p-3 rounded-lg">
          <h2 className="font-medium text-4xl text-black border-b-2 border-gray-500 pb-4 mb-6">
            Recent Blogs
          </h2>
          {blogPostData?.data
            ?.filter((pub: any, no: number) => pub.published === true)
            ?.map((blogs: any, index: number) => (
              <Link
                className="flex items-start gap-2 ps-3 py-3 drop-shadow-lg bg-white my-3"
                key={index}
                href={`/blog/${blogs?.slug}`}
              >
                <Image
                  width={180}
                  height={180}
                  src={blogs?.featuredImage?.image?.url}
                  alt={blogs?.featuredImage?.altText}
                  className="w-[100px] h-auto bg-center bg-cover"
                />
                <div>
                  <div className="text-md font-bold text-black text-left line-clamp-2">
                    {blogs?.title}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
};

export default page;
