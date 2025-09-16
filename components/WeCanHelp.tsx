import Image from "next/image";

export default function WeCanHelp() {
    const services = [
      {
        title: "Physio Therapy",
        desc: "We focus on auto accident care and treatment options that will help ease your pain and deal with life after an auto accident.",
        icon: <Image src="/images/canhelp/img1.png" alt="Physio Therapy" width={60} height={60} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Digital Radiography",
        desc: "Our physicians will diagnose and evaluate your injury or condition to determine the type of treatment that is most appropriate.",
        icon: <Image src="/images/canhelp/img2.png" alt="Digital Radiography" width={60} height={60} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Individual Treatment Plans",
        desc: "Trauma associated with auto injuries can take days or weeks to manifest, that’s why it’s important to get treatment ASAP!",
        icon: <Image src="/images/canhelp/img3.png" alt="Individual Treatment Plans" width={60} height={60} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Injury Rehabilitation",
        desc: "Our exercise and stretching routines will build flexibility and strength, so you can fully restore your maximum range of motion and independence.",
        icon: <Image src="/images/canhelp/img4.png" alt="Injury Rehabilitation" width={60} height={60} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Physical Therapy",
        desc: "Hydrotherapy uses the combination of water, heat and massage to provide a comforting and relaxing experience, relieving pain.",
        icon: <Image src="/images/canhelp/img5.png" alt="Physical Therapy" width={60} height={60} className="w-[60px] h-[60px]" />,
      },
      {
        title: "Constant neck and back pain?",
        desc: "Chiropractic adjustments relieve pressure on the nerves and muscles, and treat the underlying spinal or whiplash injury.",
        icon: <Image src="/images/canhelp/img6.png" alt="Constant neck and back pain?" width={60} height={60} />,
      },
    ];
  
    return (
      <section
        className="bg-[url('/images/canhelp/can-help-bg.png')] bg-cover bg-center"
      >
        <div className="max-w-[1640px] mx-auto px-8 md:py-16 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              How We Can <span className="text-yellow-500">Help</span> You
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
              The physicians and staff at prestige understand that being injured in an auto accident can be extremely
              stressful for you and your family.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border bg-white text-black border-gray-200 shadow hover:shadow-md hover:bg-[#323232] hover:text-white transition"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold hover:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <button className="mt-4 px-4 py-2 rounded-full text-sm font-medium bg-black text-white hover:bg-prestige-yellow w-fit">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  