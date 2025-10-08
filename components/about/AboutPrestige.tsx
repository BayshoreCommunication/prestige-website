"use client";

import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";

export default function AboutPrestige() {
  return (
    <section className="bg-prestige-black">
      <section className="max-w-[1640px] mx-auto px-8 md:pb-8 py-8 ">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 xl:mt-[90px] lg:mt-[270px] mt-0">
                  About <span className="text-prestige-yellow">Prestige</span>
                </h2>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-4 font-montserrat">
                At Prestige, we recognize that auto accident injuries bring significant stress to you and your loved ones. Our multidisciplinary team—comprising Board-Certified Medical Doctors (M.D.s), Doctors of Osteopathic Medicine (D.O.s), and Chiropractors (D.C.s)—collaborates closely to design a personalized treatment plan tailored precisely to your unique injury and recovery needs.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Auto accidents often result in back or neck pain, numbness in the arms or legs, joint or muscle discomfort, as well as stress, anxiety, and headaches. At Prestige, our thorough medical evaluations and personalized consultations allow us to accurately diagnose and effectively treat these conditions. We also collaborate closely with primary care physicians throughout the Tampa Bay area to ensure comprehensive, coordinated care.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                At Prestige, we recognize that auto accident injuries bring significant stress to you and your loved ones. Our multidisciplinary team—comprising Board-Certified Medical Doctors (M.D.s), Doctors of Osteopathic Medicine (D.O.s), and Chiropractors (D.C.s)—collaborates closely to design a personalized treatment plan tailored precisely to your unique injury and recovery needs.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Auto accidents often result in back or neck pain, numbness in the arms or legs, joint or muscle discomfort, as well as stress, anxiety, and headaches. At Prestige, our thorough medical evaluations and personalized consultations allow us to accurately diagnose and effectively treat these conditions. We also collaborate closely with primary care physicians throughout the Tampa Bay area to ensure comprehensive, coordinated care.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Auto accidents often result in back or neck pain, numbness in the arms or legs, joint or muscle discomfort, as well as stress, anxiety, and headaches. At Prestige, our thorough medical evaluations and personalized consultations allow us to accurately diagnose and effectively treat these conditions. We also collaborate closely with primary care physicians throughout the Tampa Bay area to ensure comprehensive, coordinated care.
                </p>
              </Reveal>
              
            </Stagger>
          </div>
        </div>
        <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Auto accidents often result in back or neck pain, numbness in the arms or legs, joint or muscle discomfort, as well as stress, anxiety, and headaches. At Prestige, our thorough medical evaluations and personalized consultations allow us to accurately diagnose and effectively treat these conditions. We also collaborate closely with primary care physicians throughout the Tampa Bay area to ensure comprehensive, coordinated care.
                </p>
              </Reveal>
              <Reveal y={10} opacityFrom={0}>
                <button className="bg-prestige-yellow text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                Request Appointment
                </button>
              </Reveal>
      </section>
    </section>
  );
}
