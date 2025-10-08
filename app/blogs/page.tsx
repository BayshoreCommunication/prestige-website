"use client";
import Blogs from "@/components/blogs/Blogs";
import LatestBlogs from "@/components/blogs/LatestBlogs";
import SimpleMap from "@/components/home/SimpleMap";


const About = () => {

  return (
    <>
        <Blogs/>
        {/* <LatestBlogs/> */}
        <SimpleMap />
    </>
  );
};

export default About;