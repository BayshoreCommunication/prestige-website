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
                At Prestige Medical & Physical Therapy, we believe every patient deserves compassionate, personalized care. Our team has helped thousands recover from auto accidents and injury-related conditions, guiding them back to a healthy and active life. We are committed to providing a seamless, patient-focused experience by combining advanced medical techniques with hands-on physical therapy to reduce pain, restore mobility, and improve overall quality of life.

                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                Our clinic operates as a multidisciplinary center, bringing together board-certified medical doctors, licensed chiropractors, and certified physical therapists. This collaborative model allows us to create individualized treatment plans tailored to each patient’s condition and recovery goals. Whether you need immediate pain relief, post-accident rehabilitation, or long-term injury management, we treat the whole person, not just the symptoms.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                  
                We specialize in conditions such as neck and back pain, joint discomfort, muscle soreness, numbness, headaches, and injuries resulting from auto collisions, workplace incidents, or sports-related trauma. Through medical evaluation, physical therapy, chiropractic care, and advanced therapeutic modalities, we help patients recover safely, effectively, and with confidence.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                  
                We know injuries can be stressful physically and financially, which is why we support Florida PIP insurance claims and offer same-day appointments and walk-ins to ensure fast access to care. Our environment is designed to feel supportive and welcoming, where patients feel valued, understood, and empowered throughout their recovery.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-300 mb-6 font-montserrat">
                  
                Your health, mobility, and well-being are our highest priorities. At Prestige Medical & Physical Therapy, we don’t just treat injuries. We help people reclaim their lives and return to the activities they love. Your recovery starts here, and we are committed to walking with you every step of the way.
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
