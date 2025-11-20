
import Image from "next/image";
import Link from "next/link";
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
            Prestige Medical & Physical Therapy is committed to supporting you and your family through the challenges of injury and recovery.
          </p>
          <div>
            <p className="mt-3 text-sm text-white">
            Hours of Operation
          </p><p className="mt-3 text-sm  text-white">
            Tuesday: 8:30 AM – 1:00 PM / 2:30 PM – 7:00 PM
          </p><p className="mt-3 text-sm  text-white">
            Thursday: 8:30 AM – 1:00 PM / 2:30 PM – 7:00 PM
          </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5 text-xl">
            <a
              href="https://www.instagram.com/prestigephysical"
              className="hover:text-prestige-yellow"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@PrestigePhysicalTherapy"
              className="hover:text-prestige-yellow"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/PrestigeMedicalPhysicalTherapy/"
              className="hover:text-prestige-yellow"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Middle - Resources */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-prestige-yellow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-prestige-yellow">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link href="testimonials" className="hover:text-prestige-yellow">
                  Testimonials
                </Link>
              </li> */}
              <li>
                <Link href="/blogs" className="hover:text-prestige-yellow">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-prestige-yellow">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="hover:text-prestige-yellow">
                  Disclaimers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-prestige-yellow">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-prestige-yellow">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie" className="hover:text-prestige-yellow">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-prestige-yellow mt-1" />
              <span>
                8313 W. Hillsborough Ave. Suite 330 <br />
                Tampa, FL 33615
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-prestige-yellow" />
              <span>(813) 243-2500</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaFax className="text-prestige-yellow" />
              <span>(813) 243-2502</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1640px] mx-auto px-8 lg:px-0 gap-2  z-20 relative flex flex-col lg:flex-row justify-between border-t border-gray-700 mt-10 py-6 text-center text-base text-gray-400 ">
        <p>
          © <span className="text-prestige-yellow">Prestige</span> 2025. All
          rights reserved PRESTIGE Medical & Physical Therapy.
        </p>
        <p className="mt-1">
          Design & Development{" "}
          <Link
            href="https://www.bayshorecommunication.com/"
            target="_blank"
            className="text-prestige-yellow hover:underline"
          >
            Bayshore Communication
          </Link>
        </p>
      </div>
    </footer>
  );
}
