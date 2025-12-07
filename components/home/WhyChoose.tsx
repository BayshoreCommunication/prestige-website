import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";

export default function WhyChoosePrestige() {
  const leftItems = [
    {
      title: "Comprehensive Care in One Location",
      desc: "Access multiple medical services under one roof. No unnecessary referrals or extra appointments.",
      icon: (
        <Image
          src="/images/whychoose/img1.png"
          alt="Comprehensive Care in One Location"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Immediate Treatment with No Upfront Costs",
      desc: "PIP benefits allow accident patients to begin care without payment delays.",
      icon: (
        <Image
          src="/images/whychoose/img2.png"
          alt="Immediate Treatment, No Upfront Costs"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Expert Injury Care with Insurance Support",
      desc: "Receive treatment while we assist with managing your auto insurance claims.",
      icon: (
        <Image
          src="/images/whychoose/img3.png"
          alt="Expert Injury Care with Insurance Assistance"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "No Financial Barriers to Recovery",
      desc: "Get the medical care you need with no out-of-pocket cost for eligible coverage.",
      icon: (
        <Image
          src="/images/whychoose/img4.png"
          alt="No Financial Barriers to Recovery"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
  ];

  const rightItems = [
    {
      title: "Hassle-Free Accident Injury Treatment",
      desc: "Covered by Florida PIP benefits so you can start care quickly and without upfront fees.",
      icon: (
        <Image
          src="/images/whychoose/img5.png"
          alt="Hassle-Free Accident Injury Treatment"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Seamless Insurance Claim Support",
      desc: "We manage the paperwork and claims process to ensure a smooth, stress-free experience.",
      icon: (
        <Image
          src="/images/whychoose/img6.png"
          alt="Seamless Insurance Claim Support"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Compassionate Care at Every Step",
      desc: "Focus fully on healing while we handle benefit verification and coverage processing.",
      icon: (
        <Image
          src="/images/whychoose/img7.png"
          alt="Compassionate Care, Zero Upfront Costs"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "A Dedicated Injury-Care Team",
      desc: "A clinical team specializing in accident-related injuries, rehabilitation, and recovery support.",
      icon: (
        <Image
          src="/images/whychoose/img8.png"
          alt="Dedicated Auto Injury Treatment Team"
          width={70}
          height={70}
          className="w-[60px] h-[60px]"
        />
      ),
    },
  ];

  return (
    <section className="bg-prestige-black">
      <div className="max-w-[1640px] mx-auto px-8 md:py-16 py-8 text-white">
        <div className="text-center mb-12">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why choose{" "}
                <span className="text-prestige-yellow">Prestige</span>?
              </h2>
            </Reveal>
            <Reveal tag="p" y={12} opacityFrom={0.08}>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              At Prestige Medical & Physical Therapy, we combine medical expertise with compassionate care to deliver complete recovery solutions.

              </p>
            </Reveal>
          </Stagger>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <Stagger>
              {leftItems.map((item, i) => (
                <Reveal key={i} y={16} opacityFrom={0}>
                  <div className="flex gap-4">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>

          {/* Middle Image */}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/whychoose/before.png"
                alt="Before and After"
                width={1000}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Stagger>
              {rightItems.map((item, i) => (
                <Reveal key={i} y={16} opacityFrom={0}>
                  <div className="flex gap-4">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
