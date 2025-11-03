"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";
import { useState } from "react";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const [emailForm, setEmailForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) errors.name = "Name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.subject) errors.subject = "Subject is required!";
    if (!values.message) errors.message = "Message is required!";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_l7596kx", // ✅ Replace with your EmailJS service ID
        "template_47wd6ii", // ✅ Replace with your EmailJS template ID
        emailForm,
        "TG6Dy_0EG2qOMaOgZ" // ✅ Replace with your EmailJS public key
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.error("Email error:", err);
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: "Something went wrong! Please try again.",
          });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-white">
      <section className="max-w-[1640px] mx-auto px-8 py-8 md:py-16 space-y-10">
        {/* ===== Top Info Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Address */}
          <Reveal y={30} opacityFrom={0}>
            <div className="h-full flex flex-col bg-[#151515] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm flex-1">
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaMapMarkerAlt /> Address:
                  </p>
                  <p className="text-gray-300">
                    8313 W. Hillsborough Ave. Suite 330
                    <br />
                    Tampa, FL 33615
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaPhoneAlt /> Phone:
                  </p>
                  <p className="text-gray-300">
                    (813) 243-2500 – Main <br />
                    (813) 243-2502 – Fax
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Email */}
          <Reveal y={35} opacityFrom={0}>
            <div className="h-full flex flex-col bg-[#151515] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                Email Information
              </h3>
              <div className="space-y-3 text-sm flex-1">
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaEnvelope /> Email:
                  </p>
                  <p className="text-gray-300">prestigemedlmarketing@gmail.com</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-prestige-yellow font-medium">
                    <FaEnvelope /> Billing & Medical Records:
                  </p>
                  <p className="text-gray-300">
                    medicalrecords@hessspinalcenters.com
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Working Hours */}
          <Reveal y={40} opacityFrom={0}>
            <div className="h-full flex flex-col bg-[#151515] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">
                Working Hours
              </h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm flex-1">
                <p>
                  <span className="font-semibold">Mon</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold">Fri</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold">Tue</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Sat</span>{" "}
                  CLOSED
                </p>
                <p>
                  <span className="font-semibold">Wed</span> 08:30 AM – 7:00 PM
                </p>
                <p>
                  <span className="font-semibold text-gray-400">Sun</span>{" "}
                  CLOSED
                </p>
                <p>
                  <span className="font-semibold">Thu</span> 08:30 AM – 7:00 PM
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ===== Contact Form ===== */}
        <Reveal y={50} opacityFrom={0}>
          <div className="bg-[#151515] p-8 rounded-xl">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-3 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    value={emailForm.name}
                    onChange={(e) =>
                      setEmailForm({ ...emailForm, name: e.target.value })
                    }
                    placeholder="Your Name"
                    className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md 
                    px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
                  />
                  {formErrors.name && (
                    <span className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    value={emailForm.email}
                    onChange={(e) =>
                      setEmailForm({ ...emailForm, email: e.target.value })
                    }
                    placeholder="Your Email"
                    className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md 
                    px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="phone"
                    value={emailForm.phone}
                    onChange={(e) =>
                      setEmailForm({ ...emailForm, phone: e.target.value })
                    }
                    placeholder="Phone Number"
                    className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md 
                    px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
                  />
                  {formErrors.phone && (
                    <span className="text-red-500 text-sm mt-1">
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name="subject"
                    value={emailForm.subject}
                    onChange={(e) =>
                      setEmailForm({ ...emailForm, subject: e.target.value })
                    }
                    placeholder="Your Subject"
                    className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md 
                    px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
                  />
                  {formErrors.subject && (
                    <span className="text-red-500 text-sm mt-1">
                      {formErrors.subject}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <textarea
                  rows={4}
                  name="message"
                  value={emailForm.message}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, message: e.target.value })
                  }
                  placeholder="Write your message"
                  className="w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-md 
                  px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-prestige-yellow"
                />
                {formErrors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-prestige-yellow text-black font-semibold px-8 py-3 rounded-full transition ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-yellow-400"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
