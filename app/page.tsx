import About from "@/components/home/About";
import Blogs from "@/components/home/Blogs";
import HomeSection from "@/components/home/Home";
import Offer from "@/components/home/Offer";
import OurTechnologies from "@/components/home/OurTechnologies";
import SimpleMap from "@/components/home/SimpleMap";
import Stats from "@/components/home/Stats";
import WeCanHelp from "@/components/home/WeCanHelp";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <Stats />
      <Offer />
      <WeCanHelp />
      <WhyChoose />
      <OurTechnologies />
      <Blogs />
      <SimpleMap />
    </>
  );
}
