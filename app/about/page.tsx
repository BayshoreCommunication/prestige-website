import AboutUs from "@/components/about/AboutUs";
import AboutPrestige from "@/components/about/AboutPrestige";
import Stats from "@/components/about/Stats";
import OurDoctors from "@/components/about/OurDoctors";
import SimpleMap from "@/components/about/SimpleMap";
import WhyChoosePrestige from "@/components/home/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PRESTIGE Medical & Physical Therapy",
  description: "Learn more about Prestige Medical & Physical Therapy, our experienced medical staff, and our patient-centered care.",
  alternates: {
    canonical: "/about",
  },
};

const About = () => {
  return (
    <>
      <AboutUs />
      <AboutPrestige />
      <Stats />
      <OurDoctors />
      <WhyChoosePrestige />
      <SimpleMap />
    </>
  );
};

export default About;
