"use client";

import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-prestige-black">
      <section className="max-w-[1640px] mx-auto px-8 md:pt-32 md:pb-8 py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <Reveal y={20} opacityFrom={0}>
            <div className="grid grid-cols-2 gap-6">
              {/* Tall Image */}
              <div className="row-span-2">
                <Image
                  src="/images/about/left.png"
                  alt="Patient treatment"
                  width={370}
                  height={690}
                  className="rounded-2xl w-full h-[400px] md:h-[680px] object-cover"
                />
              </div>

              {/* Top Small Image */}
              <Image
                src="/images/about/right-1.png"
                alt="X-ray scan"
                width={280}
                height={340}
                className="rounded-2xl w-full h-[190px] md:h-[330px] object-cover"
              />

              {/* Bottom Small Image */}
              <Image
                src="/images/about/right-2.png"
                alt="Consultation"
                width={280}
                height={340}
                className="rounded-2xl w-full h-[185px] md:h-[325px] object-cover"
              />
            </div>
          </Reveal>

          {/* Right - Text Content */}
          <div className="text-white">
            <Stagger>
              <Reveal tag="h2" y={16} opacityFrom={0}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About <span className="text-prestige-yellow">Prestige</span>
                </h2>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-4 font-montserrat">
                  The physicians and staff at Prestige understand that experiencing an injury can be stressful for you and your family. Our multi disciplinary team of Board Certified Medical Doctors, Doctors of Osteopathic Medicine, Doctors of Chiropractic, and licensed Physical Therapists creates individualized treatment plans tailored to your specific needs.

                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                  Injuries may lead to back or neck pain, muscle soreness, numbness in the arms or legs, joint discomfort, tension, or headaches. Through thorough medical evaluations and consultations, Prestige identifies the source of these symptoms and provides targeted care to help you feel and function better.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                  
                Prestige also works closely with primary care physicians throughout the Tampa Bay area to ensure seamless communication and continuity of care.
                </p>
              </Reveal>
              <Reveal y={10} opacityFrom={0}>
                <Link
                  href="/about"
                  className="bg-prestige-yellow text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
                >
                  Discover More
                </Link>
              </Reveal>
            </Stagger>
          </div>
        </div>
      </section>
    </section>
  );
}
