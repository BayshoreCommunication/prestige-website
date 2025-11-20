"use client";

import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import Link from "next/link";

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
               At Prestige Medical and Physical Therapy, we believe every patient deserves personalized, compassionate, and results driven care. Our team has supported thousands of individuals recovering from injuries, helping them return to a healthier, more active life. We focus on creating a seamless, patient centered experience that blends advanced medical techniques with hands on physical therapy to restore mobility, relieve pain, and enhance overall quality of life.</p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Our clinic operates as a true multidisciplinary center, uniting board certified medical doctors, licensed chiropractors, and certified physical therapists under one roof. This collaborative model ensures each patient receives a customized treatment plan tailored to their specific condition and goals. From acute pain management to comprehensive rehabilitation, we focus on treating the whole person, not just isolated symptoms.

                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
               We provide care for a wide range of conditions, including neck and back pain, joint discomfort, muscle soreness, numbness, headaches, and injuries resulting from accidents, workplace incidents, or sports activities. Through a combination of medical evaluation, physical therapy, chiropractic treatment, and advanced therapeutic technologies, we help patients recover safely, effectively, and efficiently.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                We also recognize that navigating an injury can be stressful physically, emotionally, and financially. That is why we support patients with Florida PIP insurance claims, offer same day appointments, and welcome walk ins, making the path to recovery as smooth as possible. Our team is committed to creating a welcoming environment where every patient feels heard, supported, and empowered throughout their healing journey.
                </p>
              </Reveal>
              
            </Stagger>
            <Reveal y={10} opacityFrom={0}>
                <Link
                  href="/contact"
                  className="bg-prestige-yellow text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
                >
                  Request Appointment
                </Link>
              </Reveal>
          </div>
        </div>
              
      </section>
    </section>
  );
}
