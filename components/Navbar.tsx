"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Location", href: "/location" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    console.log('Menu toggle clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white relative z-50">
      <div className="max-w-[1640px] mx-auto px-8 md:py-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              {/* Logo Image */}
              <div className="flex flex-col">
                <Image
                  src="/images/navbar/logo.png"
                  alt="PRESTIGE Medical & Physical Therapy Logo"
                  width={200}
                  height={46}
                  className="w-auto h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 max-w-[200px]"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${pathname === item.href
                  ? "bg-prestige-yellow text-black font-semibold"
                  : "text-white hover:text-prestige-yellow hover:bg-gray-800"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Emergency Call Button - Desktop */}
          <div className="hidden lg:flex">
            <Link
              href="/emergency"
              className="bg-prestige-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency Call</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-prestige-yellow focus:outline-none focus:text-prestige-yellow p-2"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg mt-2 mx-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${pathname === item.href
                    ? "bg-prestige-yellow text-black"
                    : "text-white hover:text-prestige-yellow hover:bg-gray-800"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Emergency Call Button - Mobile */}
              <Link
                href="/emergency"
                className="block bg-prestige-yellow text-black px-3 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center space-x-2 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Call</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
