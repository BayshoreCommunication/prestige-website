"use client";

import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };

    if (isVideoOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <section className="bg-black pb-60 md:p-0 ">
      <div className="relative w-full bg-[url('/images/home/hero-bg.png')] bg-cover bg-center min-h-[70vh] lg:min-h-[70vh] ">
        <div className="max-w-[1640px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-10 lg:pt-24">
          {/* Left Content */}
          <div className="flex-1 text-left lg:max-w-xl">
            <Stagger>
              <Reveal tag="h1" y={18} opacityFrom={0}>
                <h1 className="text-[36px] md:text-[56px] font-bold leading-tight text-gray-900">
                  Strong today, <br /> Stronger tomorrow.
                </h1>
              </Reveal>
              <Reveal tag="p" y={14} opacityFrom={0.06}>
                <p className="mt-6 text-gray-700 text-base md:text-lg sm:max-w-xl">
                  We have specialized in treating the victims of auto accidents
                  since 2001. Let our team of dedicated medical professionals
                  help you find relief from your pain and suffering.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal y={12} opacityFrom={0}>
                <div className=" mt-8 flex flex-col md:flex-row items-start  gap-6">
                  <Link
                    href="/contact"
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                  >
                    Request Appointment
                  </Link>

                  <div className="flex items-center gap-2 cursor-pointer" onClick={openVideo}>
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">
                      Watch Video
                    </span>
                  </div>
                </div>
              </Reveal>
            </Stagger>
          </div>

          {/* Right Image */}
        </div>

        {/* Appointment Banner */}
        {/* position: absolute;
      z-index: 50;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) */}

        <div className="absolute left-1/2 top-[75%] lg:top-[90%] lg:bottom-[-60px] transform -translate-x-1/2 w-[90%]">
          <div className="bg-prestige-yellow text-black px-6 py-3 rounded-t-xl font-bold text-lg flex items-center">
            <span className="mr-3">
              <Image
                src="/images/home/icon.png"
                alt="calendar"
                width={20}
                height={20}
              />
            </span>{" "}
            Book an appointment today
          </div>

          {/* Form */}
          <div className="bg-[#151515] p-6 rounded-b-xl flex flex-col lg:flex-row items-center gap-4 border border-white/30">
            <input
              type="text"
              placeholder="Name"
              className="w-full  flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full  flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full  flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <select className="w-full  flex-1 px-4 py-2 border border-gray-600 rounded bg-black text-white focus:outline-none">
              <option>Select</option>
              <option>Consultation</option>
              <option>Follow-up</option>
            </select>
            <button className="bg-prestige-yellow text-sm text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube Video */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="PRESTIGE Medical & Physical Therapy Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
