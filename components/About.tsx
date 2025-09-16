"use client";

import Image from "next/image";

export default function About() {
    return (
        <section className="bg-prestige-black">
            <section className="max-w-[1640px] mx-auto px-8 md:pt-32 md:pb-8 py-8 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Images */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Tall Image */}
                        <div className="row-span-2">
                            <Image
                                src="/images/about/left.png"
                                alt="Patient treatment"
                                width={370}
                                height={690}
                                className="rounded-2xl w-full h-[400px] md:h-[680px] object-cover"
                            />
                        </div>

                        {/* Top Small Image */}
                        <Image
                            src="/images/about/right-1.png"
                            alt="X-ray scan"
                            width={280}
                            height={340}
                            className="rounded-2xl w-full h-[190px] md:h-[330px] object-cover"
                        />

                        {/* Bottom Small Image */}
                        <Image
                            src="/images/about/right-2.png"
                            alt="Consultation"
                            width={280}
                            height={340}
                            className="rounded-2xl w-full h-[185px] md:h-[325px] object-cover"
                        />
                    </div>

                    {/* Right - Text Content */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-yellow-400">Prestige</span>
                        </h2>
                        <p className="text-gray-300 mb-4">
                            The physicians and staff at prestige understand that being injured in
                            an auto accident can be extremely stressful for you and your family.
                            Our multi-disciplinary team of Board Certified Medical Doctors
                            (M.D.’s), Board Certified Doctors of Osteopathic Medicine (D.O.’s)
                            and Board Certified Chiropractor (D.C.’s) will tailor an individual
                            treatment plan for your specific injury needs.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Auto accidents can cause back or neck pain, soreness, numbness in
                            the arms or legs, joint or muscle pain, stress, anxiety, or
                            headaches. Through our individual medical evaluations and
                            consultations, prestige will identify and help alleviate these
                            conditions. Prestige work closely with primary care physicians in
                            the Tampa Bay area.
                        </p>

                        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
                            Discover More
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}
