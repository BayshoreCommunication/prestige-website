"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";

export default function ContactForm() {
  return (
    <main className="bg-black text-white">
      <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16 space-y-10">
        {/* ===== Top Info Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Address */}
          <Reveal y={30} opacityFrom={0}>
            <div className="h-full flex flex-col bg-[#151515] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm flex-1">
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaMapMarkerAlt /> Address:
                  </p>
                  <p className="text-gray-300">
                    8313 W. Hillsborough Ave. Suite 330
                    <br />
                    Tampa, FL 33615
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaPhoneAlt /> Phone:
                  </p>
                  <p className="text-gray-300">
                    (813) 243-2500 – Main <br />
                    (813) 243-2502 – Fax
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Email */}
          <Reveal y={35} opacityFrom={0}>
            <div className="h-full flex flex-col bg-[#151515] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                Email Information
              </h3>
              <div className="space-y-3 text-sm flex-1">
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaEnvelope /> Email:
                  </p>
                  <p className="text-gray-300">info@hessspinalcenters.com</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaEnvelope /> Billing & Medical Records:
                  </p>
                  <p className="text-gray-300">
                    medicalrecords@hessspinalcenters.com
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Working Hours */}
          <Reveal y={40} opacityFrom={0}>
            <div className="h-full flex flex-col bg-[#151515] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                Working Hours
              </h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm flex-1">
                <p>
                  <span className="font-semibold">Mon</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold">Fri</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold">Tue</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Sat</span>{" "}
                  CLOSED
                </p>
                <p>
                  <span className="font-semibold">Wed</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Sun</span>{" "}
                  CLOSED
                </p>
                <p>
                  <span className="font-semibold">Thu</span> 08:30 AM – 7:00 PM
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="bg-[#151515] p-8 rounded-xl">
          <h3 className="text-xl font-semibold border-b border-gray-700 pb-3 mb-6">
            Contact Information
          </h3>

          <form className="space-y-6">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
              />
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
              />
            </div>

            {/* Message Box */}
            <textarea
              rows={4}
              placeholder="Write your message"
              className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
            ></textarea>

            {/* Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-prestige-yellow text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
