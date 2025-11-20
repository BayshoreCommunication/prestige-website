import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import Image from "next/image";
import Link from "next/link";

export default function WeCanHelp() {
  const services = [
    {
      title: "Chiropractic Manipulation",
      slug: "Chiropractic Manipulation",
      desc: "We provide targeted chiropractic adjustments that help restore alignment, reduce nerve and muscle pressure, and support overall healing and mobility.",
      icon: (
        <Image
          src="/images/canhelp/img1.png"
          alt="Physio Therapy"
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Digital Radiography",
      slug: "digital-radiography",
      desc: "Our clinicians use advanced imaging to accurately assess your condition and create a treatment plan tailored to your needs.",
      icon: (
        <Image
          src="/images/canhelp/img2.png"
          alt="Digital Radiography"
          width={60}
          height={60}
          className="w-[60px] h-[60px] opacity-70"
        />
      ),
    },
    {
      title: "Individual Treatment Plans",
      slug: "individual-treatment-plans",
      desc: "Every patient receives a personalized care plan based on their symptoms, recovery goals, and medical evaluation.",
      icon: (
        <Image
          src="/images/canhelp/img3.png"
          alt="Individual Treatment Plans"
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Injury Rehabilitation",
      slug: "injury-rehabilitation",
      desc: "Our guided exercise and stretching programs help restore strength, flexibility, and full range of motion.",
      icon: (
        <Image
          src="/images/canhelp/img4.png"
          alt="Injury Rehabilitation"
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Physical Therapy (P.T.)",
      slug: "Physical Therapy (P.T.)",
      desc: "Our physical therapy programs focus on restoring strength, mobility, and function through targeted exercises and guided treatment techniques.",
      icon: (
        <Image
          src="/images/canhelp/img5.png"
          alt="Physical Therapy"
          width={60}
          height={60}
          className="w-[60px] h-[60px]"
        />
      ),
    },
    {
      title: "Neck and Back Pain Relief",
      slug: "Neck and Back Pain Relief",
      desc: "Chiropractic adjustments help reduce nerve and muscle pressure, supporting relief from spinal discomfort and everyday strain.",
      icon: (
        <Image
          src="/images/canhelp/img6.png"
          alt="Constant neck and back pain?"
          width={60}
          height={60}
        />
      ),
    },
  ];

  return (
    <section className="bg-prestige-black bg-black/80 bg-cover bg-center ">
      <div className="max-w-[1640px] mx-auto px-8 md:py-16 py-8">
        <div className="text-center mb-12">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How We Can <span className="text-prestige-yellow">Help</span>{" "}
                You
              </h2>
            </Reveal>
            {/* <Reveal tag="p" y={12} opacityFrom={0.08}>
              <p className="mt-4 text-white max-w-2xl mx-auto text-sm md:text-base">
                The physicians and staff at prestige understand that being
                injured in an auto accident can be extremely stressful for you
                and your family.
              </p>
            </Reveal> */}
          </Stagger>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Stagger>
            {services.map((item, i) => (
              <Reveal key={i} y={16} opacityFrom={0}>
                <div className="h-full">
                  <div className="flex flex-col justify-between h-full rounded-xl p-6 bg-white text-black hover:shadow-md hover:bg-[#323232] hover:text-white transition hover:border-none group">
                    <div className="flex flex-col gap-4">
                      <div className="text-3xl transition duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200 ">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <Link
                      href={`/services/${item.slug}`}
                      className="mt-4 px-4 py-2 rounded-full text-sm font-medium bg-black text-white group-hover:bg-prestige-yellow duration-300 w-fit inline-block"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
