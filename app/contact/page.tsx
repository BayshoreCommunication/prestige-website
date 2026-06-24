import Contact from "@/components/contact/Contact";
import ContactForm from "@/components/contact/ContactForm";
import SimpleMap from "@/components/home/SimpleMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PRESTIGE Medical & Physical Therapy",
  description: "Get in touch with Prestige Medical & Physical Therapy in Tampa, FL. Call, email, or fill out our form to schedule an appointment.",
  alternates: {
    canonical: "/contact",
  },
};

const About = () => {

  return (
    <>
        <Contact/>
        <ContactForm/>
        <SimpleMap />
    </>
  );
};

export default About;