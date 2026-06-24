import Testimonials from "@/components/testimonials/Testimonials";
import ClientFeedback from "@/components/testimonials/ClientFeedback";
import SimpleMap from "@/components/home/SimpleMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | PRESTIGE Medical & Physical Therapy",
  description: "Read patient reviews and testimonials about our medical, physical therapy, and chiropractic care in Tampa.",
  alternates: {
    canonical: "/testimonials",
  },
};

const Testimonial = () => {

  return (
    <>
        <Testimonials/>
        <ClientFeedback/>
        <SimpleMap/>
    </>
  );
};

export default Testimonial;