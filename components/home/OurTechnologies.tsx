"use client";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const technologies = [
  {
    image: "/images/ourtechnologies/tech1.png",
    title: "Whole-Body Vibration Platform",
    description:
      "Covered by Florida’s PIP benefits, we handle your auto insurance claims with zero upfront costs.",
  },
  {
    image: "/images/ourtechnologies/tech2.png",
    title: "Strength & Conditioning Equipment",
    description:
      "Our team helps manage your auto insurance claims under Florida’s PIP benefits, so you pay nothing upfront.",
  },
  {
    image: "/images/ourtechnologies/tech3.png",
    title: "Ultrasound Unit",
    description:
      "We provide expert assistance with auto insurance claims, ensuring coverage through Florida’s PIP benefits with no upfront fees.",
  },
  {
    image: "/images/ourtechnologies/tech4.png",
    title: "Laser Therapy System",
    description:
      "We assist with auto insurance claims covered by Florida’s PIP benefits, with no upfront costs to you.",
  },
  {
    image: "/images/ourtechnologies/tech5.png",
    title: "Spinal Decompression Machines",
    description:
      "We simplify the auto insurance claims process for you, leveraging Florida’s PIP benefits with no initial payments required.",
  },
  {
    image: "/images/ourtechnologies/tech6.png",
    title: "Therapeutic Ultrasound Devices",
    description:
      "Get help navigating your auto insurance claims covered by Florida’s PIP benefits without any upfront expenses.",
  },
  {
    image: "/images/ourtechnologies/tech7.png",
    title: "Spinal Decompression Machines",
    description:
      "With Florida’s PIP benefits, we assist you in filing auto insurance claims without any out-of-pocket costs.",
  },
  {
    image: "/images/ourtechnologies/tech8.png",
    title: "Digital X-Ray Machines",
    description:
      "We work with your auto insurance claims under Florida’s PIP coverage to ensure you receive care with no upfront charges.",
  },
];

export default function Technologies() {
  return (
    <section className="bg-[#151515]">
      <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
        <div className="text-center mb-10">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-prestige-yellow">Our</span> Technologies
              </h2>
            </Reveal>
            <Reveal tag="p" y={12} opacityFrom={0.08}>
              <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                The physicians and staff at prestige understand that being
                injured in an auto accident can be extremely stressful for you
                and your family.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className=" overflow-hidden ">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  width={500}
                  height={300}
                  className="w-full  object-cover"
                />
                <div className="pt-5">
                  <h3 className="text-lg font-semibold text-white">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {tech.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
