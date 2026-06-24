
import Blogs from "@/components/blogs/Blogs";
import LatestBlogs from "@/components/blogs/LatestBlogs";
import SimpleMap from "@/components/home/SimpleMap";
import GetAllPostData from "@/lib/GetPostData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | PRESTIGE Medical & Physical Therapy",
  description: "Read our latest articles on physical therapy, chiropractic care, health wellness tips, and recovery strategies.",
  alternates: {
    canonical: "/blogs",
  },
};

const About = async () => {
  const blogPostData = await GetAllPostData();
  // console.log("blogPostData", blogPostData);
  return (
    <>
        <Blogs/>
        <LatestBlogs blogPostData={blogPostData}/>
        <SimpleMap />
    </>
  );
};

export default About;