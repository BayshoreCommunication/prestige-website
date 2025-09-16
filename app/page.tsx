
import HomeSection from "@/components/Home";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Offer from "@/components/Offer";
import WeCanHelp from "@/components/WeCanHelp";
import WhyChoose from "@/components/WhyChoose";
import OurTechnologies from "@/components/OurTechnologies";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import SimpleMap from "@/components/SimpleMap";

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
      <Blogs/>
      <SimpleMap/>
      <Footer/>
    </>
  )
}
