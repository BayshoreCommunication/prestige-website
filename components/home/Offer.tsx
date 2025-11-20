import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";

export default function Offer() {
  const offerings = [
    {
      title: "Multi-Disciplinary Care",
      desc: "A coordinated team of physicians, chiropractors, and physical therapists providing personalized treatment for your recovery.",
      icon: (
        <Image
          src="/images/offer/img1.png"
          alt="Multi-Disciplinary Care"
          width={24}
          height={24}
          className="w-[60px] h-auto"
        />
      ),
    },
    {
      title: "Care without Upfront Costs",
      desc: "Begin care immediately through eligible insurance benefits with no payment required at the start.",
      icon: (
        <Image
          src="/images/offer/img2.png"
          alt="Multi-Disciplinary Care"
          width={24}
          height={24}
          className="w-[60px] h-auto"
        />
      ),
    },
    {
      title: "Convenient & Compassionate Service",
      desc: "Same-day visits and walk-ins available across our multiple West Central Florida locations.",
      icon: (
        <Image
          src="/images/offer/img3.png"
          alt="Multi-Disciplinary Care"
          width={24}
          height={24}
          className="w-[60px] h-auto"
        />
      ),
    },
    {
      title: "Transportation Available",
      desc: "Transportation services available for all medical appointments.",
      icon: (
        <Image
          src="/images/offer/img4.png"
          alt="Multi-Disciplinary Care"
          width={24}
          height={24}
          className="w-[60px] h-auto"
        />
      ),
    },
    {
      title: "24/7 Personal Help",
      desc: "Our team is available around the clock to support your needs and schedule.",
      icon: (
        <Image
          src="/images/offer/img5.png"
          alt="Multi-Disciplinary Care"
          width={24}
          height={24}
          className="w-[60px] h-auto"
        />
      ),
    },
    {
      title: "Same-Day Appointments",
      desc: "Fast access to care for patients experiencing pain or requiring prompt attention.",
      icon: (
        <Image
          src="/images/offer/img6.png"
          alt="Multi-Disciplinary Care"
          width={24}
          height={24}
          className="w-[60px] h-auto"
        />
      ),
    },
  ];

  return (
    <section className="bg-prestige-black">
      <section className="max-w-[1640px] mx-auto px-8 md:py-16 py-8">
        <div className="text-center mb-12">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our <span className="text-prestige-yellow">Key</span> Offerings
              </h2>
            </Reveal>
            <Reveal tag="p" y={12} opacityFrom={0.08}>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                At Prestige, our physicians and staff recognize that an injury can place significant stress on you and your family, and we are here to support you.
              </p>
            </Reveal>
          </Stagger>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Stagger>
            {offerings.map((item, i) => (
              <Reveal key={i} y={16} opacityFrom={0}>
                <div className="flex items-start gap-4 bg-white  rounded-xl p-6  transition">
                  <div className="">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>
    </section>
  );
}
