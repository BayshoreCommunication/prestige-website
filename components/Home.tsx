"use client";

import Image from "next/image";

export default function HomeSection() {
    return (
        <section className="relative w-full bg-[url('/images/home/hero-bg.png')] bg-cover bg-center md:min-h-[80vh] xs:min-h-[650px] min-h-[660px] h-full">
            <div className="max-w-[1640px] mx-auto flex flex-col lg:flex-row items-center justify-between px-8   pt-16 lg:pt-24">

                {/* Left Content */}
                <div className="flex-1 text-left lg:max-w-xl">
                    <h1 className="text-[36px] md:text-[56px] font-bold leading-tight text-gray-900">
                        Strong today, <br /> Stronger tomorrow.
                    </h1>
                    <p className="mt-6 text-gray-700 text-base md:text-lg sm:max-w-xl">
                        We specialize in physical therapy for individuals recovering from auto accidents. Let our experienced team help you regain strength, restore mobility, and find lasting relief from pain.
                    </p>

                    {/* CTA Buttons */}
                    <div className=" mt-8 md:flex items-center gap-6">
                        <button className="bg-black text-prestige-yellow px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                            Request Appointment
                        </button>

                        <div className="flex items-center gap-2 cursor-pointer mt-2">
                            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-white"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className="text-gray-800 font-medium">Watch Video</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
            </div>

            {/* Appointment Banner */}
            <div className="absolute left-1/2 md:bottom-[-60px] bottom-[-30%] sm:bottom-[-20%] transform -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[80%]">
                {/* Header */}
                <div className="bg-prestige-yellow text-black px-6 py-3 rounded-t-xl font-bold text-lg flex items-center font-sansation">
                    <span className="mr-3">
                        <Image src="/images/home/icon.png" alt="calendar" width={20} height={20} />
                    </span>
                    Book an appointment today
                </div>

                {/* Form */}
                <div className="bg-[#151515] p-6 rounded-b-xl flex flex-col md:flex-row md:flex-wrap gap-4 border border-white/30">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full md:flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full md:flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full md:flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <select className="w-full md:flex-1 px-4 py-2 border border-gray-600 rounded bg-black text-white focus:outline-none">
                        <option>Select</option>
                        <option>Consultation</option>
                        <option>Follow-up</option>
                    </select>
                    <button className="w-full md:w-auto bg-prestige-yellow text-sm text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
                        Book Now
                    </button>
                </div>
            </div>


        </section>
    );
}
