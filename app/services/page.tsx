"use client";
import Services from "@/components/services/Services";
import WeCanHelp from "@/components/services/WeCanHelp";

import SimpleMap from "@/components/services/SimpleMap";
import WhyChoosePrestige from "@/components/home/WhyChoose";

const About = () => {
  return (
    <>
      <Services />
      <WeCanHelp />
      
      <WhyChoosePrestige />
      <SimpleMap />
    </>
  );
};

export default About;
