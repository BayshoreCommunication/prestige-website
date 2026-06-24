import { MetadataRoute } from "next";
import GetAllPostData from "@/lib/GetPostData";
import { staticBlogs } from "@/components/static-blogs/static-blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.prestigemedpt.com";

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/blogs",
    "/location",
    "/testimonials",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/cookie",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Services Pages
  const services = [
    "physio-therapy",
    "digital-radiography",
    "individual-treatment-plans",
    "injury-rehabilitation",
    "constant-neck-and-back-pain",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3. Static Blogs Pages
  const staticBlogPages = staticBlogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // 4. Dynamic CMS Blogs Pages
  let cmsBlogPages: any[] = [];
  try {
    const blogPostData = await GetAllPostData();
    if (blogPostData && Array.isArray(blogPostData.data)) {
      cmsBlogPages = blogPostData.data
        .filter((blog: any) => blog.published === true && blog.slug)
        .map((blog: any) => ({
          url: `${baseUrl}/blogs/${blog.slug}`,
          lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(blog.createdAt || Date.now()),
          changeFrequency: "weekly" as const,
          priority: 0.6,
        }));
    }
  } catch (error) {
    console.error("Failed to fetch CMS posts for sitemap:", error);
  }

  return [...staticPages, ...services, ...staticBlogPages, ...cmsBlogPages];
}
