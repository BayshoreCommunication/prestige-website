import Image from "next/image";

export default function Offer() {
    const offerings = [
        {
            title: "Multi-Disciplinary Care",
            desc: "Offers digital X-rays, physical therapy, chiropractic care, trigger point injections, and medical evaluations at each location.",
            icon: <Image src="/images/offer/img1.png" alt="Multi-Disciplinary Care" width={24} height={24} className="md:w-[100px] md:h-[80px] w-[120px] h-[60px]"/>,
        },
        {
            title: "Care without Upfront Costs",
            desc: "Assistance with auto insurance claims, covered under PIP benefits in Florida with no upfront costs.",
            icon: <Image src="/images/offer/img2.png" alt="Multi-Disciplinary Care" width={24} height={24} className="md:w-[100px] md:h-[80px] w-[120px] h-[60px]"/>,
        },
        {
            title: "Convenient & Compassionate Service",
            desc: "Same-day appointments and walk-ins with 18 locations across West Central Florida.",
            icon: <Image src="/images/offer/img3.png" alt="Multi-Disciplinary Care" width={24} height={24} className="md:w-[100px] md:h-[80px] w-[120px] h-[60px]"/>,
        },
        {
            title: "Transportation Available",
            desc: "Transportation services for medical appointments.",
            icon: <Image src="/images/offer/img4.png" alt="Multi-Disciplinary Care" width={24} height={24} className="md:w-[100px] md:h-[80px] w-[120px] h-[60px]"/>,
        },
        {
            title: "24/7 Personal Help",
            desc: "Operators available 24/7/365, with extended office hours for convenience.",
            icon: <Image src="/images/offer/img5.png" alt="Multi-Disciplinary Care" width={24} height={24} className="md:w-[100px] md:h-[80px] w-[120px] h-[60px]"/>,
        },
        {
            title: "Same-Day Appointments",
            desc: "Prompt scheduling for those in pain or needing urgent care.",
            icon: <Image src="/images/offer/img6.png" alt="Multi-Disciplinary Care" width={24} height={24} className="md:w-[100px] md:h-[80px] w-[120px] h-[60px]"/>,
        },
    ];

    return (
        <section className="bg-prestige-black">
            <section className="max-w-[1640px] mx-auto px-8 md:py-16 py-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Our <span className="text-prestige-yellow">Key</span> Offerings
                    </h2>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                        The physicians and staff at prestige understand that being injured in an auto accident can be extremely
                        stressful for you and your family.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offerings.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-white  rounded-xl p-6  transition"
                        >
                            <div className="">{item.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}
