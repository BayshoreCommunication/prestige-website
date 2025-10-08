"use client";
import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type ClientFeedbackItem = {
  name: string;
  role: string;
  img: string;
  feedback: string;
};

const feedbacks: ClientFeedbackItem[] = [
  {
    name: "Illés Éva",
    role: "FrontDesk Manager",
    img: "/images/testimonialspage/clientfeedback/img1.png",
    feedback:
      "From the moment I walked into Prestige, I felt truly cared for. The team took time to explain my treatment, and I saw real improvement after just a few sessions!",
  },
  {
    name: "Farhas Ágnes",
    role: "Recruitment",
    img: "/images/testimonialspage/clientfeedback/img2.png",
    feedback:
      "I was in a car crash and had severe back pain. Prestige’s professional physical therapy sessions made all the difference—I can sit in class again, drive, and move without constant pain.",
  },
  {
    name: "Vincze Niholett",
    role: "Housekeeper",
    img: "/images/testimonialspage/clientfeedback/img3.png",
    feedback:
      "The doctors and staff were so kind and helpful when dealing with my neck pain and treatment. I wasn’t an easy physical patient and the therapists were professional. Highly recommend!",
  },
  {
    name: "Katona Beatrix",
    role: "Bookkeeper",
    img: "/images/testimonialspage/clientfeedback/img4.png",
    feedback:
      "Prestige helped me recover after a knee injury. The physical therapists were amazing—they tailored each exercise until I could gradually push my limits and gain mobility again.",
  },
  {
    name: "Sipos Veronika",
    role: "Patrol Officer",
    img: "/images/testimonialspage/clientfeedback/img5.png",
    feedback:
      "No quick solutions but real, deliberate adjustments. I felt stronger every week, and my back pain disappeared faster than expected.",
  },
  {
    name: "Surány Izabella",
    role: "Host",
    img: "/images/testimonialspage/clientfeedback/img6.png",
    feedback:
      "Same-day appointments when I needed it most. The care was objective. The doctors and therapists worked together and I could feel the difference immediately.",
  },
  {
    name: "Fülöp Kata",
    role: "Inspector",
    img: "/images/testimonialspage/clientfeedback/img7.png",
    feedback:
      "Clean facility, modern equipment, very knowledgeable staff. My back and shoulder pain decreased week after week and gave me newfound energy to return to recovery at home.",
  },
  {
    name: "Soós Annamária",
    role: "General Manager",
    img: "/images/testimonialspage/clientfeedback/img8.png",
    feedback:
      "I had numbness and tingling in my arm after the accident. Prestige’s therapy sessions were clear, focused, and worked miracles. So grateful for the entire team!",
  },
  {
    name: "Kiss Laura",
    role: "CFO",
    img: "/images/testimonialspage/clientfeedback/img9.png",
    feedback:
      "They truly care. Every time I came in feeling discouraged, they kept me motivated, encouraged me, and pushed me past my limits. I’m much more flexible and confident now.",
  },
];

export default function ClientFeedback() {
  const [selected, setSelected] = useState<ClientFeedbackItem | null>(null);

  return (
    <main className="bg-prestige-black">
      <section className="max-w-[1640px] px-8 py-8 md:py-16 mx-auto text-center">
      {/* ===== Header ===== */}
      <div className="mb-12">
      <Reveal y={20} opacityFrom={0}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          The <span className="text-prestige-yellow">Feedback</span> From Our Clients
        </h2>
        </Reveal>
        <Reveal y={30} opacityFrom={0}>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          Real stories from patients who found relief, recovery, and renewed confidence with Prestige.
        </p>
        </Reveal>
      </div>

      {/* ===== Feedback Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stagger>
        {feedbacks.map((client, i) => (
          <Reveal y={40} opacityFrom={0}>
          <div
            key={i}
            onClick={() => setSelected(client)}
            className="bg-white text-black rounded-lg p-6 text-left shadow-md hover:bg-[#323232] hover:text-white transition duration-300 cursor-pointer group"
          >
            {/* Profile */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={client.img} alt={client.name} width={1000} height={800} className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">{client.name}</h3>
                <p className="text-sm text-gray-500 group-hover:text-white">{client.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex space-x-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Feedback Text */}
            <p className="text-sm text-gray-700 group-hover:text-white mb-6 line-clamp-3">
              {client.feedback}
            </p>

            {/* Learn More Button */}
            <button className="bg-prestige-black text-prestige-yellow group-hover:bg-prestige-yellow group-hover:text-prestige-black text-black  px-4 py-2 rounded-full transition">
              Learn More
            </button>
          </div>
          </Reveal>
        ))}
        
        </Stagger>
        
      </div>

      {/* ===== Modal ===== */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white text-black max-w-lg w-full rounded-xl shadow-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={selected.img} alt={selected.name} width={1000} height={800} className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{selected.name}</h3>
                <p className="text-sm text-gray-600">{selected.role}</p>
              </div>
            </div>
            <div className="flex space-x-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">{selected.feedback}</p>
          </div>
        </div>
      )}
    </section>
    </main>
  );
}
