"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const technologies = [
    {
        image: "/images/ourtechnologies/tech1.png",
        title: "Whole-Body Vibration Platform",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
    },
    {
        image: "/images/ourtechnologies/tech2.png",
        title: "Strength & Conditioning Equipment",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida.",
    },
    {
        image: "/images/ourtechnologies/tech3.png",
        title: "Ultrasound Unit",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida.",
    },
    {
        image: "/images/ourtechnologies/tech4.png",
        title: "Laser Therapy System",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
    },
    {
        image: "/images/ourtechnologies/tech5.png",
        title: "Spinal Decompression Machines",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
    },
    {
        image: "/images/ourtechnologies/tech6.png",
        title: "Therapeutic Ultrasound Devices",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida.",
    },
    {
        image: "/images/ourtechnologies/tech7.png",
        title: "Spinal Decompression Machines",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida.",
    },
    {
        image: "/images/ourtechnologies/tech8.png",
        title: "Digital X-Ray Machines",
        description:
            "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
    },
];

export default function Technologies() {
    return (
        <section className="bg-[#151515]">
            <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        <span className="text-prestige-yellow">Our</span> Technologies
                    </h2>
                    <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                        The physicians and staff at prestige understand that being injured in
                        an auto accident can be extremely stressful for you and your family.
                    </p>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
                            <div className="bg-[#111] rounded-2xl overflow-hidden shadow-lg h-full">
                                <Image
                                    src={tech.image}
                                    alt={tech.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-white">
                                        {tech.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2">{tech.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </section>
    );
}
