"use client";

import { useEffect, useState } from "react";
import { FaCalendarAlt, FaBriefcaseMedical, FaHeadset } from "react-icons/fa";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4">
            <FaCalendarAlt className="text-prestige-yellow text-4xl" />
            <div>
              <h3 className="text-prestige-yellow text-2xl font-bold">{years}+</h3>
              <p className="text-gray-300 text-sm">
                Combined Excellency of Years
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4">
            <FaBriefcaseMedical className="text-prestige-yellow text-4xl" />
            <div>
              <h3 className="text-prestige-yellow text-2xl font-bold">{satisfaction}%</h3>
              <p className="text-gray-300 text-sm">Satisfaction</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4">
            <MdMedicalServices className="text-prestige-yellow text-4xl" />
            <div>
              <h3 className="text-prestige-yellow text-2xl font-bold">{technologies}+</h3>
              <p className="text-gray-300 text-sm">Technologies Available</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1e1e1e] rounded-xl p-8 flex items-center gap-4">
            <FaHeadset className="text-prestige-yellow text-4xl" />
            <div>
              <h3 className="text-prestige-yellow text-2xl font-bold">{availability}/7</h3>
              <p className="text-gray-300 text-sm">Availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
