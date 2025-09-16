"use client";

import Image from "next/image";

export default function HomeSection() {
    return (
        <section className="relative w-full bg-[url('/images/home/hero-bg.png')] bg-cover bg-center min-h-[80vh]">
            <div className="max-w-[1640px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-16 lg:pt-24">

                {/* Left Content */}
                <div className="flex-1 text-left lg:max-w-xl">
                    <h1 className="text-[36px] md:text-[56px] font-bold leading-tight text-gray-900">
                        Strong today, <br /> Stronger tomorrow.
                    </h1>
                    <p className="mt-6 text-gray-700 text-base md:text-lg sm:max-w-xl">
                        We have specialized in treating the victims of auto accidents since
                        2001. Let our team of dedicated medical professionals help you find
                        relief from your pain and suffering.
                    </p>

                    {/* CTA Buttons */}
                    <div className=" mt-8 md:flex hidden items-center gap-6">
                        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                            Request Appointment
                        </button>

                        <div className="flex items-center gap-2 cursor-pointer">
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
            <div className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2 w-[90%] sm:w-[80%]">
                <div className="bg-prestige-yellow text-black px-6 py-3 rounded-t-xl font-bold text-lg flex items-center">
                    <span className="mr-3"><Image src="/images/home/icon.png" alt="calendar" width={20} height={20} /></span> Book an appointment today
                </div>

                {/* Form */}
                <div className="bg-[#151515] p-6 rounded-b-xl flex flex-col md:flex-row items-center gap-4 border border-white/30">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-600 rounded bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <select className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-600 rounded bg-black text-white focus:outline-none">
                        <option>Select</option>
                        <option>Consultation</option>
                        <option>Follow-up</option>
                    </select>
                    <button className="bg-prestige-yellow text-sm text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
}
