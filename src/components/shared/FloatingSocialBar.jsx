// import React from "react";
// import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

// const FloatingSocialBar = () => {
//   return (
//     <div className="
//       fixed right-2 top-1/2 -translate-y-1/2 
//       z-[999] flex flex-col items-center gap-3 
//       bg-[#f5f2eb] shadow-lg rounded-xl px-2 py-3
//       max-[768px]:right-1 max-[768px]:gap-2 max-[768px]:px-1 max-[768px]:py-2
//     ">
      
//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/your-number"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-green-600 hover:scale-110 transition"
//       >
//         <FaWhatsapp size={22} />
//       </a>

//       {/* Instagram */}
//       <a
//         href="https://instagram.com/your-id"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-pink-500 hover:scale-110 transition"
//       >
//         <FaInstagram size={22} />
//       </a>

//       {/* YouTube */}
//       <a
//         href="https://youtube.com/your-channel"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-red-600 hover:scale-110 transition"
//       >
//         <FaYoutube size={22} />
//       </a>

//       {/* Gmail */}
//       <a
//         href="mailto:your@email.com"
//         className="text-gray-700 hover:scale-110 transition"
//       >
//         <FaEnvelope size={20} />
//       </a>
//     </div>
//   );
// };

// export default FloatingSocialBar;



import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const FloatingSocialBar = () => {
  return (
    <div className="
      fixed right-3 top-[45%] -translate-y-1/2 
      z-[999] flex flex-col items-center gap-3 
      bg-[#f5f2eb] shadow-[0_4px_20px_rgba(0,0,0,0.15)]
      rounded-2xl px-2 py-3
      max-[768px]:right-1 max-[768px]:gap-2 max-[768px]:px-1 max-[768px]:py-2
    ">

      {/* WhatsApp */}
      <a
        href="https://wa.me/917483987568"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/your-id"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:scale-110 transition"
      >
        <FaInstagram size={22} />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/your-channel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:scale-110 transition"
      >
        <FaYoutube size={22} />
      </a>

      {/* Gmail */}
      <a
        href="mailto:your@email.com"
        className="text-gray-700 hover:scale-110 transition"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default FloatingSocialBar;