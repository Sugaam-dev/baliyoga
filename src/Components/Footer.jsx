// import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#e6d6c3] text-black">
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="mb-8 grid gap-8 md:grid-cols-3 md:items-start">
//           {/* Left Section - Logo and Tagline */}
//           <div className="flex flex-col items-start">
//             <h3 className="mb-2 text-xl font-bold tracking-wide">BALI YOGA</h3>
//             <p className="text-sm font-light opacity-90">
//               Strengthening Education Systems
//             </p>
//           </div>

//           {/* Center Section - Navigation Links */}
//           <div className="flex flex-col items-center justify-start md:items-center">
//             <nav className="flex flex-wrap justify-center gap-6 text-sm">
//               <a href="/about" className="transition-opacity hover:opacity-80">
//                 About
//               </a>
//               <span className="text-black/50">|</span>
//               <a
//                 href="/school"
//                 className="transition-opacity hover:opacity-80"
//               >
//                 Course
//               </a>
//               <span className="text-black/50">|</span>
//               <a
//                 href="/College&University"
//                 className="transition-opacity hover:opacity-80"
//               >
//                 Online
//               </a>
//               <span className="text-black/50">|</span>
//               <a
//                 href="/contact"
//                 className="transition-opacity hover:opacity-80"
//               >
//                 Gallery
//               </a>
//               <span className="text-black/50">|</span>
//               <a
//                 href="/contact"
//                 className="transition-opacity hover:opacity-80"
//               >
//                 Meditation
//               </a>
//               <span className="text-black/50">|</span>
//               <a
//                 href="/contact"
//                 className="transition-opacity hover:opacity-80"
//               >
//                 Retreat
//               </a>
//               <span className="text-black/50">|</span>
//               <a
//                 href="/contact"
//                 className="transition-opacity hover:opacity-80"
//               >
//                 Contact
//               </a>
//             </nav>
//           </div>
// {/* Home', 'About', 'Course', 'Online','Gallery' , 'Meditation' ,'Retreat','Contact */}
//           {/* Right Section - Copyright and Social Icons */}
//           <div className="flex flex-col items-start md:items-end">
//             <p className="mb-4 text-sm opacity-90">© BALIYOGA</p>
//             <div className="flex gap-4">
//               <a
//                 href="https://linkedin.com"
//                 className="transition-opacity hover:opacity-80"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedinIn size={20} />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 className="transition-opacity hover:opacity-80"
//                 aria-label="Twitter"
//               >
//                 <FaTwitter size={20} />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 className="transition-opacity hover:opacity-80"
//                 aria-label="Facebook"
//               >
//                 <FaFacebookF size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Divider */}
//         <div className="border-t border-black/20"></div>
//         <p className="mt-4 text-center text-xs text-black/80">
//           Developed by{" "}
//           <a
//             href="https://www.pmrgsolution.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-medium underline hover:text-black"
//           >
//             PMRG Solution
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaUserTie, FaWhatsapp, FaPassport, FaCreditCard  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// IMPORT YOUR IMAGES
import bgImg from "../assets/guide.jpg";
import guideImg from "../assets/mountain.jpg";

import img1 from "../assets/hill.jpg";
import img2 from "../assets/hill1.jpg";
import img3 from "../assets/hill2.jpg";
import img4 from "../assets/hill3.jpg";

const Footer = () => {
  return (
    <footer className="w-full font-sans tracking-wide">

      {/* ===================== CTA SECTION ===================== */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-[#1e3a2f]/80 backdrop-blur-md py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">

            {/* LEFT TEXT */}
            <div className="text-white text-center lg:text-left max-w-md">
              <h3 className="text-2xl md:text-3xl font-serif leading-snug">
                Have Questions? <br /> We’re Just a Message Away
              </h3>

              <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full mt-4 transition">
                Chat on WhatsApp
              </button>

              <p className="text-sm mt-3 text-gray-200">
                Our team typically replies in a few minutes
              </p>
            </div>

            {/* FEATURES */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">

  {/* 1 */}
  <div className="flex flex-col items-center">
    <div className="text-orange-400 text-2xl mb-2">
      <FaUserTie />
    </div>
    <p className="text-xs leading-relaxed">
      Personal Guidance <br /> From Our Experts
    </p>
  </div>

  {/* 2 */}
  <div className="flex flex-col items-center">
    <div className="text-orange-400 text-2xl mb-2">
      <FaWhatsapp />
    </div>
    <p className="text-xs leading-relaxed">
      Quick Response <br /> On WhatsApp
    </p>
  </div>

  {/* 3 */}
  <div className="flex flex-col items-center">
    <div className="text-orange-400 text-2xl mb-2">
      <FaPassport />
    </div>
    <p className="text-xs leading-relaxed">
      Help With Visa <br /> & Travel
    </p>
  </div>

  {/* 4 */}
  <div className="flex flex-col items-center">
    <div className="text-orange-400 text-2xl mb-2">
      <FaCreditCard />
    </div>
    <p className="text-xs leading-relaxed">
      Flexible Payment <br /> Options
    </p>
  </div>

</div>

          </div>
        </div>
      </div>

      {/* ===================== FREE GUIDE ===================== */}
      <div className="bg-[#f5f1ea] py-10 px-4">
        <div className="max-w-7xl mx-auto bg-[#f8f5ef] border border-[#e6dccf] rounded-2xl px-6 py-6 flex flex-col lg:flex-row items-center gap-6 shadow-sm">

          {/* IMAGE */}
          <img
            src={guideImg}
            alt="Guide"
            className="w-24 rotate-[-8deg] shadow-lg"
          />

          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs text-orange-500 font-semibold tracking-widest">
              FREE GUIDE
            </p>

            <h3 className="text-[#3b2a1f] font-serif text-xl">
              Bali vs Rishikesh vs Mysore
            </h3>

            <p className="text-sm text-gray-500">
              Which Yoga TTC is Right for You?
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Get a detailed comparison guide to help you choose the perfect destination.
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-full border border-[#e0d6c8] text-sm w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-full border border-[#e0d6c8] text-sm w-full"
            />

            <input
              type="text"
              placeholder="WhatsApp Number"
              className="px-4 py-2 rounded-full border border-[#e0d6c8] text-sm w-full"
            />

            <button className="bg-[#2f4f3e] hover:bg-[#264536] text-white px-5 py-2 rounded-full text-sm whitespace-nowrap transition">
              Send Me the Guide
            </button>

          </form>

        </div>
      </div>

      {/* ===================== MAIN FOOTER ===================== */}
      {/* ===================== MAIN FOOTER ===================== */}
<div className="bg-gradient-to-r from-[#1e3a2f] via-[#254a3a] to-[#1e3a2f] text-white py-12 px-4">

  <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">

    {/* LOGO + TEXT */}
    <div className="bg-gradient-to-r from-[#423939]">
      <img
        src="/logo.png"
        alt="Bali Yoga"
        className="w-36 mb-4"
      />
 <div>
    <h2 className="font-serif text-lg tracking-wide leading-none">
      BALI YOGA
    </h2>

    <p className="text-[10px] tracking-[0.2em] text-gray-300 mt-1">
      TEACHER TRAINING
    </p>
  </div>
      <p className="text-sm text-gray-300 leading-relaxed">
        Transform your life. Inspire the world.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="font-semibold mb-3 tracking-wide">QUICK LINKS</h4>
      <ul className="text-sm text-gray-300 space-y-2">
        <li className="hover:text-orange-400 cursor-pointer">TTC Programs</li>
        <li className="hover:text-orange-400 cursor-pointer">Retreats</li>
        <li className="hover:text-orange-400 cursor-pointer">About Us</li>
        <li className="hover:text-orange-400 cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* RESOURCES */}
    <div>
      <h4 className="font-semibold mb-3 tracking-wide">RESOURCES</h4>
      <ul className="text-sm text-gray-300 space-y-2">
        <li className="hover:text-orange-400 cursor-pointer">Blog</li>
        <li className="hover:text-orange-400 cursor-pointer">FAQ</li>
        <li className="hover:text-orange-400 cursor-pointer">Student Reviews</li>
        <li className="hover:text-orange-400 cursor-pointer">Yoga Alliance</li>
        <li className="hover:text-orange-400 cursor-pointer">Sitemap</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="font-semibold mb-3 tracking-wide">CONNECT</h4>

      <p className="text-sm text-gray-300 mb-2">
        info@baliyoga.com
      </p>

      <p className="text-sm text-gray-300">
        +91 98765 43210
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 mt-4 text-lg">

              <FaInstagram className="cursor-pointer hover:text-orange-400 transition" />
              <FaFacebookF className="cursor-pointer hover:text-orange-400 transition" />
              <FaTwitter className="cursor-pointer hover:text-orange-400 transition" />
              <FaYoutube className="cursor-pointer hover:text-orange-400 transition" />
              <MdEmail className="cursor-pointer hover:text-orange-400 transition" />

            </div>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="text-center text-xs text-gray-400 mt-10 border-t border-white/10 pt-6">
    © 2026 Bali Yoga . All rights reserved.
  </div>

</div>

      {/* FLOATING WHATSAPP */}
      {/* <a
        href="#"
        className="fixed bottom-5 right-5 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
      >
        💬
      </a> */}

    </footer>
  );
};

export default Footer;