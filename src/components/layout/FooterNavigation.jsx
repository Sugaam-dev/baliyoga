import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterNavigation = () => {
  return (
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
        © 2026 Bali Yoga. All rights reserved.
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
  );
};

export default FooterNavigation;
