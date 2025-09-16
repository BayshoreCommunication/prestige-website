import Image from "next/image";

export default function WhyChoosePrestige() {
    const leftItems = [
      {
        title: "Comprehensive Care in One Location",
        desc: "Access multiple medical services without extra appointments.",
        icon: <Image src="/images/whychoose/img1.png" alt="Comprehensive Care in One Location" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Immediate Treatment, No Upfront Costs",
        desc: "PIP coverage allows accident victims to receive care without payment delays.",
        icon: <Image src="/images/whychoose/img2.png" alt="Immediate Treatment, No Upfront Costs" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Expert Injury Care with Insurance Assistance",
        desc: "Get treatment while we handle your auto insurance claims.",
        icon: <Image src="/images/whychoose/img3.png" alt="Expert Injury Care with Insurance Assistance" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
      {
        title: "No Financial Barriers to Recovery",
        desc: "Receive necessary medical attention without out-of-pocket expenses.",
        icon: <Image src="/images/whychoose/img4.png" alt="No Financial Barriers to Recovery" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
    ];
  
    const rightItems = [
      {
        title: "Hassle-Free Accident Injury Treatment",
        desc: "Covered under Florida’s PIP benefits—no upfront costs required.",
        icon: <Image src="/images/whychoose/img5.png" alt="Hassle-Free Accident Injury Treatment" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Seamless Insurance Claim Support",
        desc: "We assist with claims, ensuring stress-free medical care.",
        icon: <Image src="/images/whychoose/img6.png" alt="Seamless Insurance Claim Support" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Compassionate Care, Zero Upfront Costs",
        desc: "Focus on healing while we manage your coverage.",
        icon: <Image src="/images/whychoose/img7.png" alt="Compassionate Care, Zero Upfront Costs" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Dedicated Auto Injury Treatment Team",
        desc: "Professional medical support tailored for accident recovery.",
        icon: <Image src="/images/whychoose/img8.png" alt="Dedicated Auto Injury Treatment Team" width={70} height={70} className="w-[60px] h-[60px]" />,
      },
    ];
  
    return (
      <section className="bg-prestige-black">
        <div className="max-w-[1640px] mx-auto px-8 md:py-16 py-8 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why choose <span className="text-yellow-500">Prestige</span>?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              The physicians and staff at prestige understand that being injured in an auto accident can be extremely
              stressful for you and your family.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              {leftItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Middle Image */}
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/whychoose/before.png"
                  alt="Before and After"
                  className="w-full object-cover"
                />
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-6">
              {rightItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  