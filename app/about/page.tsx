"use client";
import AboutUs from "@/components/about/AboutUs";
import AboutPrestige from "@/components/about/AboutPrestige";
import Stats from "@/components/about/Stats";
import OurDoctors from "@/components/about/OurDoctors";
import SimpleMap from "@/components/about/SimpleMap";
import WhyChoosePrestige from "@/components/home/WhyChoose";

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
