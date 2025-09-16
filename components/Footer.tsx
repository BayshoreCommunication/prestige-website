import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaPhone, FaFax, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            className="relative bg-cover bg-center text-gray-300 bg-black/50"
            style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }} // 🔹 replace with your background image
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 max-w-[1640px] mx-auto px-8 py-8 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left - Logo & Description */}
                <div>
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/images/footer/logo.png"
                            alt="Prestige Logo"
                            width={200}
                            height={70}
                        />
                        
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                        The physicians and staff at Hess Spinal and Medical Centers
                        understand that being injured in an auto accident can be extremely
                        stressful for you and your family.
                    </p>
                    <p className="mt-3 text-sm font-semibold text-white">
                        Hours: 8:30am - 7:00pm
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-5 text-xl">
                        <a href="#" className="hover:text-yellow-400">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaYoutube />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-yellow-400">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Middle - Resources */}
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
                            <li><a href="#" className="hover:text-yellow-400">Technology</a></li>
                            <li><a href="#" className="hover:text-yellow-400">Blogs</a></li>
                            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-400">Disclaimers</a></li>
                            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-yellow-400">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right - Contact */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start space-x-2">
                            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                            <span>
                                8313 W. Hillsborough Ave. Suite 330 <br />
                                Tampa, FL 33615
                            </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaPhone className="text-yellow-400" />
                            <span>(813) 243-2500</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaFax className="text-yellow-400" />
                            <span>(813) 243-2502</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
                <p>
                    © <span className="text-yellow-400">Prestige</span> 2025. All rights reserved PRESTIGE Medical & Physical Therapy.
                </p>
                <p className="mt-1">
                    Design & Development{" "}
                    <a href="#" className="text-yellow-400 hover:underline">
                        Bayshore Communication
                    </a>
                </p>
            </div>
        </footer>
    );
}
