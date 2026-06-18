import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaUserTie,
  FaWhatsapp,
  FaPassport,
  FaCreditCard,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

// IMPORT YOUR IMAGES
import bgImg from "../assets/guide.jpg";
import guideImg from "../assets/mountain.jpg";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden font-sans tracking-wide">
      
      {/* ===================== CTA SECTION ===================== */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1e3a2f]/75 backdrop-blur-sm" />

        <div className="relative z-10 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] 2xl:max-w-[1800px] flex flex-col lg:flex-row justify-between items-center gap-10 xl:gap-16">
            
            {/* LEFT TEXT */}
            <div className="text-white text-center lg:text-left max-w-xl">
              
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-300 font-semibold mb-4">
                Need Help?
              </p>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
                Have Questions?
                <span className="block text-orange-300 mt-2">
                  We’re Just a Message Away
                </span>
              </h3>

              <p className="text-sm sm:text-base text-gray-200 mt-5 leading-relaxed">
                Connect with our team anytime for guidance about yoga teacher
                training, accommodation, travel assistance, and course details.
              </p>

              <button className="mt-7 bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 transition-all duration-300 px-7 py-3 rounded-full text-white font-medium shadow-xl">
                Chat on WhatsApp
              </button>

              <p className="text-sm mt-4 text-gray-300">
                Usually replies within a few minutes
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-7 w-full lg:w-auto">
              
              {/* CARD 1 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center text-white hover:-translate-y-2 transition-all duration-300">
                <div className="text-orange-300 text-3xl mb-3 flex justify-center">
                  <FaUserTie />
                </div>

                <p className="text-sm leading-relaxed">
                  Personal Guidance <br /> From Experts
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center text-white hover:-translate-y-2 transition-all duration-300">
                <div className="text-orange-300 text-3xl mb-3 flex justify-center">
                  <FaWhatsapp />
                </div>

                <p className="text-sm leading-relaxed">
                  Fast WhatsApp <br /> Support
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center text-white hover:-translate-y-2 transition-all duration-300">
                <div className="text-orange-300 text-3xl mb-3 flex justify-center">
                  <FaPassport />
                </div>

                <p className="text-sm leading-relaxed">
                  Visa & Travel <br /> Assistance
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center text-white hover:-translate-y-2 transition-all duration-300">
                <div className="text-orange-300 text-3xl mb-3 flex justify-center">
                  <FaCreditCard />
                </div>

                <p className="text-sm leading-relaxed">
                  Flexible Payment <br /> Options
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== FREE GUIDE ===================== */}
      {/* ===================== FREE GUIDE ===================== */}
<div className="bg-[#f5f1ea] py-14 sm:py-16 px-4">
  <div className="mx-auto w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] 2xl:max-w-[1800px] bg-[#f8f5ef]/90 backdrop-blur-md border border-[#e6dccf] rounded-[32px] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 flex flex-col xl:flex-row items-start xl:items-center gap-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

    {/* IMAGE */}
    <div className="w-full flex justify-center xl:w-auto">
      <img
        src={guideImg}
        alt="Guide"
        className="w-24 sm:w-28 md:w-32 rotate-[-8deg] rounded-xl shadow-2xl"
      />
    </div>

    {/* TEXT */}
    <div className="w-full xl:flex-1 text-center xl:text-left">
      
      <p className="text-xs sm:text-sm text-orange-500 font-semibold tracking-[0.25em] uppercase">
        Free Guide
      </p>

      <h3 className="text-[#2f241c] font-serif text-3xl sm:text-4xl leading-tight mt-3">
        Bali vs Rishikesh vs Mysore
      </h3>

      <p className="text-base sm:text-lg text-gray-600 mt-4">
        Which Yoga TTC is Right for You?
      </p>

      <p className="text-sm sm:text-base text-gray-500 mt-4 leading-relaxed max-w-2xl mx-auto xl:mx-0">
        Download our detailed comparison guide and discover which yoga
        destination perfectly matches your lifestyle, goals, and journey.
      </p>
    </div>

    {/* FORM */}
    <form className="w-full xl:w-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

      {/* NAME */}
      <input
        type="text"
        placeholder="Your Name"
        className="w-full min-w-0 px-5 py-3 rounded-full border border-[#e0d6c8] bg-white text-sm outline-none focus:ring-2 focus:ring-orange-300 transition"
      />

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Email Address"
        className="w-full min-w-0 px-5 py-3 rounded-full border border-[#e0d6c8] bg-white text-sm outline-none focus:ring-2 focus:ring-orange-300 transition"
      />

      {/* WHATSAPP */}
      <input
        type="text"
        placeholder="WhatsApp Number"
        className="w-full min-w-0 px-5 py-3 rounded-full border border-[#e0d6c8] bg-white text-sm outline-none focus:ring-2 focus:ring-orange-300 transition"
      />

      {/* BUTTON */}
      <button className="w-full xl:w-auto bg-gradient-to-r from-[#2f4f3e] to-[#264536] hover:scale-[1.02] transition-all duration-300 text-white px-7 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
        Send Me the Guide
      </button>

    </form>
  </div>
</div>

      {/* ===================== MAIN FOOTER ===================== */}
      <div className="relative bg-gradient-to-r from-[#1b3328] via-[#234637] to-[#1b3328] text-white py-14 sm:py-16 lg:py-20 px-4 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] 2xl:max-w-[1800px] grid gap-12 md:grid-cols-2 lg:grid-cols-4 xl:gap-16">

          {/* LOGO */}
          <div>
            <img
              src="/logo.png"
              alt="Bali Yoga"
              className="w-36 mb-5"
            />

            <h2 className="font-serif text-2xl tracking-wide">
              BALI YOGA
            </h2>

            <p className="text-xs tracking-[0.3em] text-gray-300 mt-2 uppercase">
              Teacher Training
            </p>

            <p className="text-sm text-gray-300 leading-relaxed mt-5 max-w-sm">
              Transform your life through authentic yoga teachings, mindful
              experiences, and spiritual growth in the world's most beautiful
              yoga destinations.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-lg mb-5 tracking-wide">
              QUICK LINKS
            </h4>

            <ul className="text-sm text-gray-300 space-y-4">
              <li className="hover:text-orange-300 transition cursor-pointer">
                TTC Programs
              </li>

              <li className="hover:text-orange-300 transition cursor-pointer">
                Retreats
              </li>

              <li className="hover:text-orange-300 transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-orange-300 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold text-lg mb-5 tracking-wide">
              RESOURCES
            </h4>

            <ul className="text-sm text-gray-300 space-y-4">
              <li className="hover:text-orange-300 transition cursor-pointer">
                Blog
              </li>

              <li className="hover:text-orange-300 transition cursor-pointer">
                FAQ
              </li>

              <li className="hover:text-orange-300 transition cursor-pointer">
                Student Reviews
              </li>

              <li className="hover:text-orange-300 transition cursor-pointer">
                Yoga Alliance
              </li>

              <li className="hover:text-orange-300 transition cursor-pointer">
                Sitemap
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-lg mb-5 tracking-wide">
              CONNECT
            </h4>

            <div className="space-y-3 text-sm text-gray-300">
              <p>info@baliyoga.com</p>
              <p>+91 98765 43210</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-3 mt-6">

              <FaInstagram className="cursor-pointer h-10 w-10 p-2.5 rounded-full bg-white/10 hover:bg-orange-400 transition duration-300" />

              <FaFacebookF className="cursor-pointer h-10 w-10 p-2.5 rounded-full bg-white/10 hover:bg-orange-400 transition duration-300" />

              <FaTwitter className="cursor-pointer h-10 w-10 p-2.5 rounded-full bg-white/10 hover:bg-orange-400 transition duration-300" />

              <FaYoutube className="cursor-pointer h-10 w-10 p-2.5 rounded-full bg-white/10 hover:bg-orange-400 transition duration-300" />

              <MdEmail className="cursor-pointer h-10 w-10 p-2.5 rounded-full bg-white/10 hover:bg-orange-400 transition duration-300" />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="relative z-10 text-center text-xs sm:text-sm text-gray-400 mt-14 border-t border-white/10 pt-6">
          © 2026 Bali Yoga. All rights reserved.uuu
        </div>
        <div className="relative z-10 text-center text-xs sm:text-sm text-gray-400 mt-2">
          <Link
            to="/terms-and-conditions"
            className="text-orange-400 hover:text-orange-300 transition duration-300 underline"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;