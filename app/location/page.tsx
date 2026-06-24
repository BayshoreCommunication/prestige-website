import Location from "@/components/location/Location";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | PRESTIGE Medical & Physical Therapy",
  description: "Find our office location in Tampa, FL. Prestige Medical & Physical Therapy is located at 2313 W. Hillsborough Ave. Suite 330.",
  alternates: {
    canonical: "/location",
  },
};

const About = () => {

  return (
    <>
        <Location/>
    </>
  );
};

export default About;