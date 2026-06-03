// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// // Mega Menu Content Map Data
// const MENU_CONTENT = {
//   ytt: {
//     title: "Yoga Teacher Training",
//     columns: [
//       {
//         category: "Multi-Style YTTC",
//         items: [
//           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/ytt/6-days-50hr-multi-style" },
//           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/ytt/10-days-100hr-multi-style" },
//           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/ytt/20-days-200hr-multi-style" },
//           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/ytt/300hr-multi-style-bali" },
//           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/ytt/500hr-multi-style-bali" }
//         ]
//       },
//       {
//         category: "KUNDALINI YTTC",
//         items: [
//           { name: "6 Days 50 Hours Kundalini YTTC", link: "/ytt/6-days-50hr-kundalini" },
//           { name: "10 Days 100 Hours Kundalini YTTC", link: "/ytt/100hr-kundalini-bali" },
//           { name: "20 Days 200 Hours Kundalini YTTC", link: "/ytt/200hr-kundalini-bali" },
//           { name: "30 Days 300 Hours Kundalini YTTC", link: "/ytt/300hr-kundalini-bali" },
//           { name: "50 Days 500 Hours Kundalini YTTC", link: "/ytt/500hr-kundalini-bali" }
//         ]
//       },
//       {
//         category: "SHORT COURSES",
//         items: [
//           { name: "6 Days 50 Hours Yin Yoga Course", link: "/short-courses/50hr-yin-yoga" },
//           { name: "85-Hours Prenatal Yoga TTC in Bali", link: "/short-courses/85hr-prenatal-yoga" },
//           { name: "5 Days Aerial Yoga Course", link: "/short-courses/aerial-yoga-course" },
//           { name: "5 Days Acro Yoga Course", link: "/short-courses/acro-yoga-course" }
//         ]
//       },
//       {
//         category: "SPECIALIZATION",
//         items: [
//           { name: "Vedic Sound Healing Level 1 & 2", link: "/specialization/vedic-sound-healing-level-1-2" },
//           { name: "Bali 100 Hours Yoga Therapy Ayurveda", link: "/specialization/100hr-yoga-therapy-ayurveda" },
//           { name: "Ayurvedic Treatment In Bali", link: "/specialization/ayurvedic-treatment-bali" },
//           { name: "Abhyangam Massage Training Course In Bali", link: "/specialization/abhyangam-massage-training-bali" }
//         ]
//       }
//     ]
//   },
//   wellness: {
//     title: "Wellness Retreats",
//     columns: [
//       {
//         category: "Multi-Style YTTC",
//         items: [
//           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
//           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
//           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
//           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
//           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
//         ]
//       },
//       {
//         category: "Multi-Style YTTC",
//         items: [
//           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
//           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
//           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
//           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
//           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
//         ]
//       },
//       {
//         category: "Multi-Style YTTC",
//         items: [
//           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
//           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
//           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
//           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
//           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
//         ]
//       },
//       {
//         category: "Multi-Style YTTC",
//         items: [
//           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
//           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
//           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
//           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
//           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
//         ]
//       }
//     ]
//   },
// };

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null); 
//   const [mobileExpandedSection, setMobileExpandedSection] = useState(null); 
  
//   const location = useLocation();
//   const navRef = useRef(null);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     setActiveDropdown(null);
//     setMobileExpandedSection(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
//   }, [isMenuOpen]);

//   const isActive = (path) => location.pathname.startsWith(path);

//   const navItems = [
//     { label: 'About', path: '/about' },
//     { label: 'Yoga Teacher Training', path: '/yoga-teacher-training', type: 'ytt' },
//     { label: 'Wellness Retreats', path: '/wellness-retreats', type: 'wellness' },
//     { label: 'Bali Activities', path: '/bali-activities' },
//     { label: 'Holiday Packages', path: '/holiday-packages' },
//     { label: 'Facilities', path: '/facilities' },
//     { label: 'Contact', path: '/contact' },
//   ];

//   return (
//     <header ref={navRef} className="sticky top-0 w-full bg-white shadow-md border-b border-gray-100 z-[1000]">
//       {/* Primary Navigation Layer */}
//       <nav className="w-full relative bg-white z-[1002]">
//         <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center gap-4 max-w-[1440px] min-[2000px]:max-w-[1920px]">
          
//           {/* Logo Container */}
//           <Link
//             to="/"
//             className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
//             onClick={closeMenu}
//           >
//             <img
//               src="/logo.png"
//               alt="Bali Yoga Kendra Logo"
//               className="h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain block max-w-[140px] sm:max-w-[180px] lg:max-w-[220px]"
//             />
//           </Link>

//           {/* Desktop Navigation Links */}
//           <ul className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-5 m-0 p-0 list-none" style={{ fontFamily: "'Caudex', serif" }}>
//             {navItems.map((item) => {
//               const hasDropdown = !!item.type;
//               const isCurrentActive = activeDropdown === item.type;

//               return (
//                 <li 
//                   key={item.label} 
//                   className="flex items-center relative py-2"
//                   onMouseEnter={() => hasDropdown && setActiveDropdown(item.type)}
//                 >
//                   {hasDropdown ? (
//                     <button
//                       onClick={() => setActiveDropdown(isCurrentActive ? null : item.type)}
//                       className={`flex items-center gap-1.5 px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
//                         isCurrentActive || isActive(item.path) ? 'text-[#b4533c]' : ''
//                       }`}
//                       style={{ paddingBlock: '8px' }}
//                     >
//                       {item.label}
//                       <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isCurrentActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       className={`px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
//                         isActive(item.path) ? 'text-[#b4533c]' : ''
//                       }`}
//                       style={{ paddingBlock: '8px' }}
//                       onMouseEnter={() => setActiveDropdown(null)}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Desktop Action Button */}
//           <div className="flex items-center gap-4 shrink-0">
//             <a
//               href="#apply"
//               className="hidden sm:inline-block border border-[#3d4a3e] text-[#3d4a3e] hover:bg-[#3d4a3e] hover:text-white transition-all duration-200 px-5 py-2.5 text-xs tracking-[0.15em] font-semibold rounded-sm"
//               style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
//             >
//               APPLY NOW
//             </a>

//             {/* Hamburger Button */}
//             <button
//               className="flex lg:hidden flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1003] w-10 h-10 relative"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               <span className={`absolute w-6 h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'bg-[#b4533c] rotate-45 translate-y-0' : 'bg-gray-800 -translate-y-1.5'}`} />
//               <span className={`absolute w-6 h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 bg-gray-800'}`} />
//               <span className={`absolute w-6 h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'bg-[#b4533c] -rotate-45 translate-y-0' : 'bg-gray-800 translate-y-1.5'}`} />
//             </button>
//           </div>
//         </div>

//         {/* Desktop Mega Menu */}
//         {activeDropdown && MENU_CONTENT[activeDropdown] && (
//           <div 
//             className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-[1001]"
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <div className="max-w-[1440px] mx-auto px-8 py-10">
//               <div className="flex flex-wrap justify-between gap-6 xl:gap-8">
//                 {MENU_CONTENT[activeDropdown].columns.map((col, idx) => (
//                   <div key={idx} className="flex flex-col space-y-4 flex-1 min-w-[220px] max-w-[340px]">
//                     <h4 
//                       className="text-[13px] font-bold tracking-wider text-gray-400 uppercase border-b border-gray-100 pb-2"
//                       style={{ fontFamily: "'Caudex', serif" }}
//                     >
//                       {col.category}
//                     </h4>
//                     <ul className="space-y-2.5 list-none p-0 m-0">
//                       {col.items.map((item, itemIdx) => (
//                         <li key={itemIdx}>
//                           <Link
//                             to={item.link}
//                             onClick={() => setActiveDropdown(null)}
//                             className="block text-[14px] leading-snug font-medium text-gray-600 hover:text-[#b4533c] hover:translate-x-0.5 transition-all duration-150 py-1"
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Mobile Drawer Panel */}
//       <div className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl z-[1005] flex flex-col transition-transform duration-300 transform lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
//         {/* MODIFIED: Matching UI header layout with Logo and Styled Custom Close Box */}
//         <div className="p-4 flex items-center justify-between border-b border-gray-100">
//           <Link to="/" onClick={closeMenu} className="block shrink-0">
//             <img
//               src="/logo.png"
//               alt="Bali Yoga Kendra Logo"
//               className="h-14 w-auto object-contain"
//             />
//           </Link>
          
//           {/* Styled explicit orange border close box layout */}
//           <button 
//             onClick={closeMenu}
//             className="w-10 h-10 border-2 border-[#dca34b] rounded-md flex items-center justify-center p-1.5 transition-colors hover:bg-amber-50"
//             aria-label="Close menu"
//           >
//             <svg className="w-full h-full text-[#a44d37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
        
//         <div className="flex-1 overflow-y-auto px-4 py-4">
//           <ul className="space-y-2 list-none p-0 m-0" style={{ fontFamily: "'Caudex', serif" }}>
//             {navItems.map((item) => {
//               const isExpandable = !!item.type && !!MENU_CONTENT[item.type]; 
//               const isSectionOpen = mobileExpandedSection === item.type;

//               return (
//                 <li key={item.label} className="border-b border-gray-50 pb-2">
//                   {isExpandable ? (
//                     <div>
//                       <button
//                         onClick={() => setMobileExpandedSection(isSectionOpen ? null : item.type)}
//                         className="w-full flex justify-between items-center py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-left text-[15px]"
//                       >
//                         <span>{item.label}</span>
//                         <svg className={`w-4 h-4 transition-transform duration-200 ${isSectionOpen ? 'rotate-180 text-[#b4533c]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </button>
                      
//                       <div className={`overflow-hidden transition-all duration-300 max-h-0 ${isSectionOpen ? 'max-h-[1200px] mt-2' : ''}`}>
//                         <div className="pl-4 space-y-4 border-l-2 border-gray-100 ml-3">
//                           {MENU_CONTENT[item.type].columns.map((col, colIdx) => (
//                             <div key={colIdx} className="space-y-1">
//                               <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider block mb-1">{col.category}</span>
//                               {col.items.map((subItem, subIdx) => (
//                                 <Link
//                                   key={subIdx}
//                                   to={subItem.link}
//                                   onClick={closeMenu}
//                                   className="block py-1.5 px-2 text-[14px] text-gray-600 rounded hover:bg-gray-50"
//                                 >
//                                   {subItem.name}
//                                 </Link>
//                               ))}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       onClick={closeMenu}
//                       className="block py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-[15px]"
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className="p-6 border-t border-gray-100">
//           <a href="#apply" onClick={closeMenu} className="block w-full text-center bg-[#3d4a3e] text-white py-3 font-semibold rounded-md shadow-md text-sm">
//             APPLY NOW
//           </a>
//         </div>
//       </div>

//       {/* Dimmed Background Overlay */}
//       {(isMenuOpen || activeDropdown) && (
//         <div 
//           className="fixed inset-0 bg-black/20 z-[999] transition-opacity duration-300"
//           onClick={closeMenu}
//         />
//       )}
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Mega Menu Content Map Data
const MENU_CONTENT = {
  ytt: {
    title: "Yoga Teacher Training",
    columns: [
      {
        category: "Multi-Style YTTC",
        items: [
          { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/ytt/6-days-50hr-multi-style" },
          { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/ytt/10-days-100hr-multi-style" },
          { name: "20 Days 200 Hours Multi-Style YTTC", link: "/ytt/20-days-200hr-multi-style" },
          { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/ytt/300hr-multi-style-bali" },
          { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/ytt/500hr-multi-style-bali" }
        ]
      },
      {
        category: "KUNDALINI YTTC",
        items: [
          { name: "6 Days 50 Hours Kundalini YTTC", link: "/ytt/6-days-50hr-kundalini" },
          { name: "10 Days 100 Hours Kundalini YTTC", link: "/ytt/100hr-kundalini-bali" },
          { name: "20 Days 200 Hours Kundalini YTTC", link: "/ytt/200hr-kundalini-bali" },
          { name: "30 Days 300 Hours Kundalini YTTC", link: "/ytt/300hr-kundalini-bali" },
          { name: "50 Days 500 Hours Kundalini YTTC", link: "/ytt/500hr-kundalini-bali" }
        ]
      },
      {
        category: "SHORT COURSES",
        items: [
          { name: "6 Days 50 Hours Yin Yoga Course", link: "/short-courses/50hr-yin-yoga" },
          { name: "85-Hours Prenatal Yoga TTC in Bali", link: "/short-courses/85hr-prenatal-yoga" },
          { name: "5 Days Aerial Yoga Course", link: "/short-courses/aerial-yoga-course" },
          { name: "5 Days Acro Yoga Course", link: "/short-courses/acro-yoga-course" }
        ]
      },
      {
        category: "SPECIALIZATION",
        items: [
          { name: "Vedic Sound Healing Level 1 & 2", link: "/specialization/vedic-sound-healing-level-1-2" },
          { name: "Bali 100 Hours Yoga Therapy Ayurveda", link: "/specialization/100hr-yoga-therapy-ayurveda" },
          { name: "Ayurvedic Treatment In Bali", link: "/specialization/ayurvedic-treatment-bali" },
          { name: "Abhyangam Massage Training Course In Bali", link: "/specialization/abhyangam-massage-training-bali" }
        ]
      }
    ]
  },
  wellness: {
    title: "Wellness Retreats",
    columns: [
      {
        category: "Multi-Style YTTC",
        items: [
          { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
          { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
          { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
          { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
          { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
        ]
      },
      {
        category: "Multi-Style YTTC",
        items: [
          { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
          { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
          { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
          { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
          { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
        ]
      },
      {
        category: "Multi-Style YTTC",
        items: [
          { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
          { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
          { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
          { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
          { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
        ]
      },
      {
        category: "Multi-Style YTTC",
        items: [
          { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
          { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
          { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
          { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
          { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
        ]
      }
    ]
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null); 
  
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname.startsWith(path);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Yoga Teacher Training', path: '/yoga-teacher-training', type: 'ytt' },
    { label: 'Wellness Retreats', path: '/wellness-retreats', type: 'wellness' },
    { label: 'Bali Activities', path: '/bali-activities' },
    { label: 'Holiday Packages', path: '/holiday-packages' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header ref={navRef} className="sticky top-0 w-full bg-white shadow-md border-b border-gray-100 z-[1000]">
      {/* Primary Navigation Layer */}
      <nav className="w-full relative bg-white z-[1002]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center gap-4 max-w-[1440px] min-[2000px]:max-w-[1920px]">
          
          {/* Logo Container */}
          <Link
            to="/"
            className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Bali Yoga Kendra Logo"
              className="h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain block max-w-[140px] sm:max-w-[180px] lg:max-w-[220px]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-5 m-0 p-0 list-none" style={{ fontFamily: "'Caudex', serif" }}>
            {navItems.map((item) => {
              const hasDropdown = !!item.type;
              const isCurrentActive = activeDropdown === item.type;

              return (
                <li 
                  key={item.label} 
                  className="flex items-center relative py-2"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.type)}
                >
                  {hasDropdown ? (
                    <button
                      onClick={() => setActiveDropdown(isCurrentActive ? null : item.type)}
                      className={`flex items-center gap-1.5 px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
                        isCurrentActive || isActive(item.path) ? 'text-[#b4533c]' : ''
                      }`}
                      style={{ paddingBlock: '8px' }}
                    >
                      {item.label}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isCurrentActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
                        isActive(item.path) ? 'text-[#b4533c]' : ''
                      }`}
                      style={{ paddingBlock: '8px' }}
                      onMouseEnter={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Action Button */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#apply"
              className="hidden sm:inline-block border border-[#3d4a3e] text-[#3d4a3e] hover:bg-[#3d4a3e] hover:text-white transition-all duration-200 px-5 py-2.5 text-xs tracking-[0.15em] font-semibold rounded-sm"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              APPLY NOW
            </a>

            {/* Hamburger Button (Hides automatically when menu drawer opens to avoid dual layout crosses) */}
            <button
              className={`flex lg:hidden flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1003] w-10 h-10 relative transition-opacity duration-200 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 -translate-y-1.5" />
              <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 opacity-100" />
              <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 translate-y-1.5" />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        {activeDropdown && MENU_CONTENT[activeDropdown] && (
          <div 
            className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-[1001]"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-[1440px] mx-auto px-8 py-10">
              <div className="flex flex-wrap justify-between gap-6 xl:gap-8">
                {MENU_CONTENT[activeDropdown].columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col space-y-4 flex-1 min-w-[220px] max-w-[340px]">
                    <h4 
                      className="text-[13px] font-bold tracking-wider text-gray-400 uppercase border-b border-gray-100 pb-2"
                      style={{ fontFamily: "'Caudex', serif" }}
                    >
                      {col.category}
                    </h4>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            to={item.link}
                            onClick={() => setActiveDropdown(null)}
                            className="block text-[14px] leading-snug font-medium text-gray-600 hover:text-[#b4533c] hover:translate-x-0.5 transition-all duration-150 py-1"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer Panel */}
      <div className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl z-[1005] flex flex-col transition-transform duration-300 transform lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header Layout with Logo and Styled Custom Close Box */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100 bg-white">
          <Link to="/" onClick={closeMenu} className="block shrink-0">
            <img
              src="/logo.png"
              alt="Bali Yoga Kendra Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          
          {/* Styled explicit orange border close box layout */}
          <button 
            onClick={closeMenu}
            className="w-10 h-10 border-2 border-[#dca34b] rounded-md flex items-center justify-center p-1.5 transition-colors hover:bg-amber-50"
            aria-label="Close menu"
          >
            <svg className="w-full h-full text-[#a44d37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-2 list-none p-0 m-0" style={{ fontFamily: "'Caudex', serif" }}>
            {navItems.map((item) => {
              const isExpandable = !!item.type && !!MENU_CONTENT[item.type]; 
              const isSectionOpen = mobileExpandedSection === item.type;

              return (
                <li key={item.label} className="border-b border-gray-50 pb-2">
                  {isExpandable ? (
                    <div>
                      <button
                        onClick={() => setMobileExpandedSection(isSectionOpen ? null : item.type)}
                        className="w-full flex justify-between items-center py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-left text-[15px]"
                      >
                        <span>{item.label}</span>
                        <svg className={`w-4 h-4 transition-transform duration-200 ${isSectionOpen ? 'rotate-180 text-[#b4533c]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 max-h-0 ${isSectionOpen ? 'max-h-[1200px] mt-2' : ''}`}>
                        <div className="pl-4 space-y-4 border-l-2 border-gray-100 ml-3">
                          {MENU_CONTENT[item.type].columns.map((col, colIdx) => (
                            <div key={colIdx} className="space-y-1">
                              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider block mb-1">{col.category}</span>
                              {col.items.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  to={subItem.link}
                                  onClick={closeMenu}
                                  className="block py-1.5 px-2 text-[14px] text-gray-600 rounded hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="block py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-[15px]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-6 border-t border-gray-100 bg-white">
          <a href="#apply" onClick={closeMenu} className="block w-full text-center bg-[#3d4a3e] text-white py-3 font-semibold rounded-md shadow-md text-sm">
            APPLY NOW
          </a>
        </div>
      </div>

      {/* Dimmed Background Overlay with premium Backdrop Blur Effect */}
      {(isMenuOpen || activeDropdown) && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[999] transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;