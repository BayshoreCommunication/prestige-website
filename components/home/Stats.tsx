"use client";

import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import { useEffect, useState } from "react";
import { FaBriefcaseMedical, FaCalendarAlt, FaHeadset } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";

export default function Stats() {
  // counters state
  const [years, setYears] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [availability, setAvailability] = useState(0);

  useEffect(() => {
    // Generic counter function
    const animateCounter = (setter: any, target: number, speed: number) => {
      let start = 0;
      const increment = Math.ceil(target / (speed / 16)); // smooth
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setter(start);
      }, 16);
    };

    animateCounter(setYears, 27, 2000); // 27 years in 2s
    animateCounter(setSatisfaction, 98, 2000); // 98% in 2s
    animateCounter(setTechnologies, 16, 2000); // 16+ in 2s
    animateCounter(setAvailability, 24, 2000); // 24/7 in 2s
  }, []);

  return (
    <section className="bg-[#151515]">
      <div className="max-w-[1640px] mx-auto px-8 md:py-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <Stagger>
            {/* Card 1 */}
            <Reveal y={16} opacityFrom={0}>
              <div className="h-full">
                <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4 h-full min-h-[140px]">
                  <FaCalendarAlt className="text-prestige-yellow text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-prestige-yellow text-2xl font-bold">
                      {years}+
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Combined Excellency of Years
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal y={16} opacityFrom={0}>
              <div className="h-full">
                <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4 h-full min-h-[140px]">
                  <FaBriefcaseMedical className="text-prestige-yellow text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-prestige-yellow text-2xl font-bold">
                      {satisfaction}%
                    </h3>
                    <p className="text-gray-300 text-sm">Satisfaction</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal y={16} opacityFrom={0}>
              <div className="h-full">
                <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4 h-full min-h-[140px]">
                  <MdMedicalServices className="text-prestige-yellow text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-prestige-yellow text-2xl font-bold">
                      {technologies}+
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Technologies Available
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal y={16} opacityFrom={0}>
              <div className="h-full">
                <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4 h-full min-h-[140px]">
                  <FaHeadset className="text-prestige-yellow text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-prestige-yellow text-2xl font-bold">
                      {availability}/7
                    </h3>
                    <p className="text-gray-300 text-sm">Availability</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
