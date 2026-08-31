"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cookie consent on every page reload / visit
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={handleDecline}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[460px] bg-gradient-to-b from-[#1d273d] to-[#121929] border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 text-white"
          >
            {/* Main Content */}
            <p className="text-center text-slate-100 text-base sm:text-lg font-medium leading-relaxed mb-6">
              We use cookies to improve your experience and analyze site traffic. See our{" "}
              <Link
                href="/privacy"
                className="text-prestige-yellow hover:underline font-semibold transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleDecline}
                className="w-full py-3 px-6 rounded-xl text-white font-medium bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 text-center active:scale-95"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="w-full py-3 px-6 rounded-xl text-black font-bold bg-prestige-yellow hover:bg-[#e5bc05] transition-all duration-200 shadow-lg hover:shadow-yellow-500/20 text-center active:scale-95"
              >
                Accept
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
