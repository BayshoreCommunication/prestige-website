import Image from "next/image";

export default function WeCanHelp() {
  const services = [
    {
      title: "Physio Therapy",
      desc: "We specialize in auto accident care, providing treatment options designed to relieve your pain and support your recovery beyond the accident.",
      icon: <Image src="/images/canhelp/img1.png" alt="Physio Therapy" width={60} height={60} className="w-[60px] h-[60px]" />,
    },
    {
      title: "Digital Radiography",
      desc: "Our physicians will thoroughly diagnose and assess your injury or condition to develop the most effective treatment plan for you.",
      icon: <Image src="/images/canhelp/img2.png" alt="Digital Radiography" width={60} height={60} className="w-[60px] h-[60px]" />,
    },
    {
      title: "Individual Treatment Plans",
      desc: "Trauma from auto injuries may take days or weeks to appear, making prompt treatment essential for your recovery.",
      icon: <Image src="/images/canhelp/img3.png" alt="Individual Treatment Plans" width={60} height={60} className="w-[60px] h-[60px]" />,
    },
    {
      title: "Injury Rehabilitation",
      desc: "Our targeted exercise and stretching programs are designed to enhance flexibility and strength, helping you regain full range of motion and independence.",
      icon: <Image src="/images/canhelp/img4.png" alt="Injury Rehabilitation" width={60} height={60} className="w-[60px] h-[60px]" />,
    },
    {
      title: "Physical Therapy",
      desc: "Hydrotherapy combines water, heat, and massage to create a soothing, relaxing treatment that helps relieve pain.",
      icon: <Image src="/images/canhelp/img5.png" alt="Physical Therapy" width={60} height={60} className="w-[60px] h-[60px]" />,
    },
    {
      title: "Constant neck and back pain?",
      desc: "Chiropractic adjustments alleviate pressure on nerves and muscles, addressing the root cause of spinal and whiplash injuries.",
      icon: <Image src="/images/canhelp/img6.png" alt="Constant neck and back pain?" width={60} height={60} />,
    },
  ];

  return (
    <section
      className="bg-[url('/images/canhelp/can-help-bg.png')] bg-black/80 bg-cover bg-center"
    >
      <div className="max-w-[1640px] mx-auto px-8 md:py-16 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How We Can <span className="text-prestige-yellow">Help</span> You
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto text-sm md:text-base">
            At Prestige, our physicians and staff recognize the significant emotional and physical burden an auto accident injury can impose on you and your loved ones.
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
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm">{item.desc}</p>
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
