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
                At Prestige Medical & Physical Therapy, we believe that every patient deserves personalized, compassionate care. Our dedicated team has helped thousands of patients recover from auto accidents and injury-related conditions, guiding them back to a healthy, active life. Our mission is to provide a seamless, patient-centered experience, combining the latest medical techniques with hands-on physical therapy to restore mobility, reduce pain, and improve overall quality of life.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Our clinic is a multi-disciplinary center, bringing together board-certified medical doctors, licensed chiropractors, and certified physical therapists. This collaborative approach ensures that every patient receives a customized treatment plan tailored to their specific needs. Whether it’s acute pain relief, rehabilitation after an accident, or long-term injury management, we focus on treating the whole person, not just the symptoms.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                We specialize in addressing conditions such as neck and back pain, joint discomfort, muscle soreness, numbness, headaches, and injuries caused by auto accidents, work incidents, or sports-related trauma. By combining medical evaluation, physical therapy, chiropractic care, and advanced therapeutic technologies, we help patients recover faster, safely, and effectively.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                At Prestige, we also understand that dealing with injuries can be stressful, both physically and financially. That’s why we offer support with Florida PIP insurance claims, same-day appointments, and walk-in availability, making it easier for patients to focus on healing. Our team is committed to creating a welcoming, supportive environment where every patient feels understood, valued, and empowered to take an active role in their recovery.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Your health, mobility, and well-being are our top priorities. At Prestige Medical & Physical Therapy, we don’t just treat injuries — we help patients reclaim their lives and return to the activities they love with confidence and strength. Your healing journey starts here, and we are dedicated to being your trusted partner every step of the way.
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
