"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function Contact() {
  return (
    <section className="relative px-8 w-full  mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="images/contactpage/contact/bg.png"
          alt="About Us Background"
          width={1000}
          height={800}
          className="object-cover object-center brightness-60 w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-prestige-yellow/10 pointer-events-none z-10"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col justify-center items-start min-h-[300px] md:min-h-[400px] text-white space-y-4 max-w-[1640px] mx-auto">
      <Reveal y={20} opacityFrom={0}>
        <p className="text-3xl md:text-5xl font-bold text-black">Contact Us</p>
        </Reveal>
        <div className="flex items-center space-x-2 bg-prestige-yellow px-3 py-1 rounded-full">
          <Link
            href="/"
            className=" text-black px-3 py-1 rounded font-semibold transition hover:underline"
          >
            Home
          </Link>
          <span className="text-black">/</span>
          <Link
            href="/contact"
            className="text-black hover:underline font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

