
import Blogs from "@/components/blogs/Blogs";
import LatestBlogs from "@/components/blogs/LatestBlogs";
import SimpleMap from "@/components/home/SimpleMap";
import GetAllPostData from "@/lib/GetPostData";


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