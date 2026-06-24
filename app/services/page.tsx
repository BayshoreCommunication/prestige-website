import Services from "@/components/services/Services";
import WeCanHelp from "@/components/services/WeCanHelp";

import SimpleMap from "@/components/services/SimpleMap";
import WhyChoosePrestige from "@/components/home/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | PRESTIGE Medical & Physical Therapy",
  description: "Explore our range of treatments including physical therapy, chiropractic care, diagnostic imaging, and customized rehabilitation plans.",
  alternates: {
    canonical: "/services",
  },
};

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
