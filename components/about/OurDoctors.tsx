"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

// Example doctor data — replace images and info as needed
const doctors = [

  // Doctor 1
  {
    name: "Alisha Churchill, DPT",
    role: "Physical Therapist",
    img: "/images/aboutpage/ourdoctors/alisha.png",
    social: {
      instagram: "#",
      youtube: "#",
      facebook: "#",
      twitter: "#",
    },
  },

  // Doctor 2
  {
    name: "Hector Sanchez Pereira",
    role: "Nurse Practitioner",
    img: "/images/aboutpage/ourdoctors/doc4.png",
    social: {
      instagram: "#",
      youtube: "#",
      facebook: "#",
      twitter: "#",
    },
  },

  // Doctor 3
  {
    name: "Dr. Ernest D Buzzella, DC",
    role: "Chiropractor",
    img: "/images/aboutpage/ourdoctors/doc3.png",
    social: {
      instagram: "#",
      youtube: "#",
      facebook: "#",
      twitter: "#",
    },
  },

  // // Doctor 4
  // {
  //   name: "Craig Horner",
  //   role: "Medical Transport Nurse",
  //   img: "/images/aboutpage/ourdoctors/doc4.png",
  //   social: {
  //     instagram: "#",
  //     youtube: "#",
  //     facebook: "#",
  //     twitter: "#",
  //   },
  // },

  // // Doctor 5
  // {
  //   name: "Elliott Weinger",
  //   role: "Oral Surgeon",
  //   img: "/images/aboutpage/ourdoctors/doc5.png",
  //   social: {
  //     instagram: "#",
  //     youtube: "#",
  //     facebook: "#",
  //     twitter: "#",
  //   },
  // },

  // // Doctor 6
  // {
  //   name: "Charles Mael",
  //   role: "Family Medicine Physician",
  //   img: "/images/aboutpage/ourdoctors/doc6.png",
  //   social: {
  //     instagram: "#",
  //     youtube: "#",
  //     facebook: "#",
  //     twitter: "#",
  //   },
  // },

  // // Doctor 7
  // {
  //   name: "Anthony Spataro",
  //   role: "Diagnostic Medical Sonographer",
  //   img: "/images/aboutpage/ourdoctors/doc7.png",
  //   social: {
  //     instagram: "#",
  //     youtube: "#",
  //     facebook: "#",
  //     twitter: "#",
  //   },
  // },

  // // Doctor 8
  // {
  //   name: "Barry Kraushaar",
  //   role: "Medical Transport Coordinator",
  //   img: "/images/aboutpage/ourdoctors/doc8.png",
  //   social: {
  //     instagram: "#",
  //     youtube: "#",
  //     facebook: "#",
  //     twitter: "#",
  //   },
  // },
];

export default function OurDoctors() {
  return (
    <main className="bg-prestige-black">
        <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Our <span className="text-prestige-yellow">Doctors</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          The physicians and staff at Hess Spinal and Medical Centers understand
          that being injured in an auto accident can be extremely stressful for
          you and your family.
        </p>
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="bg-[#151515] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <Reveal y={40} opacityFrom={0}>
            <div className="relative w-full h-auto">
              <Image
                src={doc.img}
                alt={doc.name}
                width={1000}    
                height={800}
                className="object-cover"
              />
            </div>
            <div className="p-4 text-left">
              <h3 className="text-white font-semibold text-lg">
                {doc.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{doc.role}</p>

              {/* Social Links */}
              {/* <div className="flex space-x-4 text-gray-400">
                <Link
                  href={doc.social.instagram}
                  className="hover:text-prestige-yellow transition"
                  
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={doc.social.youtube}
                  className="hover:text-prestige-yellow transition"
                  
                >
                  <FaYoutube />
                </Link>
                <Link
                  href={doc.social.facebook}
                  className="hover:text-prestige-yellow transition"
                  
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href={doc.social.twitter}
                  className="hover:text-prestige-yellow transition"
                  
                >
                  <FaTwitter />
                </Link>
              </div> */}
            </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}
