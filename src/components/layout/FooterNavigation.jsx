import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterNavigation = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#1b3328] via-[#234637] to-[#1b3328] text-white py-8 md:py-10 sm:py-8 md:py-10 lg:py-10 md:py-12 px-4 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[95%] sm:max-w-[92%] lg:max-w-[90%] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] grid gap-12 md:grid-cols-2 lg:grid-cols-4 xl:gap-16">
        
        {/* LOGO */}
        <div>
          <img
            src="/logo.webp"
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
          <h3 className="font-semibold text-lg mb-5 tracking-wide text-white font-serif">
            QUICK LINKS
          </h3>

          <ul className="text-sm text-stone-200 space-y-4 list-none p-0 m-0">
            <li>
              <Link to="/yoga-teacher-training" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Yoga Teacher Training (TTC)
              </Link>
            </li>
            <li>
              <Link to="/wellness-retreats" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Wellness Retreats
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Contact &amp; Admissions
              </Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold text-lg mb-5 tracking-wide text-white font-serif">
            RESOURCES
          </h3>

          <ul className="text-sm text-stone-200 space-y-4 list-none p-0 m-0">
            <li>
              <Link to="/about" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Our Story &amp; Philosophy
              </Link>
            </li>
            <li>
              <Link to="/bali-activities" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Bali Excursions &amp; Activities
              </Link>
            </li>
            <li>
              <Link to="/founder" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Meet Our Founder
              </Link>
            </li>
            <li>
              <Link to="/yoga-teacher-training" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Yoga Alliance Certification
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="text-stone-200 hover:text-orange-300 transition-colors no-underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-lg mb-5 tracking-wide text-white font-serif">
            CONNECT
          </h3>

          <div className="space-y-3 text-sm text-stone-200">
            <p>
              <a href="mailto:info@baliyoga.com" className="text-stone-200 hover:text-orange-300 transition-colors no-underline" aria-label="Send email to info@baliyoga.com">
                info@baliyoga.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/917483987568" target="_blank" rel="noopener noreferrer" className="text-stone-200 hover:text-orange-300 transition-colors no-underline" aria-label="WhatsApp phone support">
                +91 74839 87568
              </a>
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Bali Yoga Kendra on Instagram"
              className="flex items-center justify-center h-10 w-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-orange-400 hover:text-white transition duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Bali Yoga Kendra on Facebook"
              className="flex items-center justify-center h-10 w-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-orange-400 hover:text-white transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Bali Yoga Kendra on Twitter"
              className="flex items-center justify-center h-10 w-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-orange-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Bali Yoga Kendra on YouTube"
              className="flex items-center justify-center h-10 w-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-orange-400 hover:text-white transition duration-300"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="mailto:info@baliyoga.com"
              aria-label="Send email to Bali Yoga Kendra"
              className="flex items-center justify-center h-10 w-10 p-2.5 rounded-full bg-white/10 text-white hover:bg-orange-400 hover:text-white transition duration-300"
            >
              <MdEmail size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="relative z-10 text-center text-xs sm:text-sm text-stone-300 mt-14 border-t border-white/10 pt-6">
        © 2026 Bali Yoga Kendra. All rights reserved.
      </div>
      <div className="relative z-10 text-center text-xs sm:text-sm text-stone-300 mt-2">
        <Link
          to="/terms-and-conditions"
          className="text-orange-300 hover:text-orange-200 transition duration-300 underline"
        >
          Terms and Conditions
        </Link>
      </div>

    </div>
  );
};

export default FooterNavigation;
