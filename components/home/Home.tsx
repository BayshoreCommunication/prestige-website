"use client";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const titles = ["Injured?", "Hurt?", "In Pain?", "We Can Help."];

export default function HomeSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  // Typing effect states
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    if (index < titles.length) {
      if (!reverse && subIndex === titles[index].length) {
        setTimeout(() => setReverse(true), 1200);
        return;
      }

      if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % titles.length);
        return;
      }

      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        },
        reverse ? 80 : 160
      );

      return () => clearTimeout(timeout);
    }

    return () => clearTimeout(timeout2);
  }, [subIndex, index, reverse]);

  // ESC handler for video
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeVideo();
    };

    if (isVideoOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  return (
    <section className="bg-black pb-60 md:p-0">
      <div className="relative w-full bg-[url('/images/home/bg.png')] md:bg-[url('/images/home/hero-bg.png')] bg-cover bg-center min-h-[70vh] lg:min-h-[70vh]">
        <div className="max-w-[1640px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-10 lg:pt-24">
          {/* Left Content */}
          <div className="flex-1 text-left lg:max-w-xl">
            <Stagger>
              <Reveal tag="h1" y={18} opacityFrom={0}>
                <h1 className="text-[36px] md:text-[56px] font-bold leading-tight text-gray-900 inline-block pb-1">
                  {titles[index].substring(0, subIndex)}
                  <span
                    className={`${
                      blink ? "opacity-100" : "opacity-0"
                    } transition-opacity`}
                  >
                    |
                  </span>
                </h1>
              </Reveal>

              <Reveal tag="p" y={14} opacityFrom={0.06}>
                <p className="mt-6 text-black text-base md:text-lg sm:max-w-xl">
                  Experience a multi-disciplinary team approach that unites
                  doctors, chiropractors, and physical therapists to support
                  your recovery from every angle.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal y={12} opacityFrom={0}>
                <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
                  <Link
                    href="/contact"
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                  >
                    Request Appointment
                  </Link>
                </div>
              </Reveal>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
