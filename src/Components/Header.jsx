// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { Link, useLocation } from 'react-router-dom';

// // // // Mega Menu Content Map Data
// // // const MENU_CONTENT = {
// // //   ytt: {
// // //     title: "Yoga Teacher Training",
// // //     columns: [
// // //       {
// // //         category: "Multi-Style YTTC",
// // //         items: [
// // //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/ytt/6-days-50hr-multi-style" },
// // //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/ytt/10-days-100hr-multi-style" },
// // //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/ytt/20-days-200hr-multi-style" },
// // //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/ytt/300hr-multi-style-bali" },
// // //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/ytt/500hr-multi-style-bali" }
// // //         ]
// // //       },
// // //       {
// // //         category: "KUNDALINI YTTC",
// // //         items: [
// // //           { name: "6 Days 50 Hours Kundalini YTTC", link: "/ytt/6-days-50hr-kundalini" },
// // //           { name: "10 Days 100 Hours Kundalini YTTC", link: "/ytt/100hr-kundalini-bali" },
// // //           { name: "20 Days 200 Hours Kundalini YTTC", link: "/ytt/200hr-kundalini-bali" },
// // //           { name: "30 Days 300 Hours Kundalini YTTC", link: "/ytt/300hr-kundalini-bali" },
// // //           { name: "50 Days 500 Hours Kundalini YTTC", link: "/ytt/500hr-kundalini-bali" }
// // //         ]
// // //       },
// // //       {
// // //         category: "SHORT COURSES",
// // //         items: [
// // //           { name: "6 Days 50 Hours Yin Yoga Course", link: "/short-courses/50hr-yin-yoga" },
// // //           { name: "85-Hours Prenatal Yoga TTC in Bali", link: "/short-courses/85hr-prenatal-yoga" },
// // //           { name: "5 Days Aerial Yoga Course", link: "/short-courses/aerial-yoga-course" },
// // //           { name: "5 Days Acro Yoga Course", link: "/short-courses/acro-yoga-course" }
// // //         ]
// // //       },
// // //       {
// // //         category: "SPECIALIZATION",
// // //         items: [
// // //           { name: "Vedic Sound Healing Level 1 & 2", link: "/specialization/vedic-sound-healing-level-1-2" },
// // //           { name: "Bali 100 Hours Yoga Therapy Ayurveda", link: "/specialization/100hr-yoga-therapy-ayurveda" },
// // //           { name: "Ayurvedic Treatment In Bali", link: "/specialization/ayurvedic-treatment-bali" },
// // //           { name: "Abhyangam Massage Training Course In Bali", link: "/specialization/abhyangam-massage-training-bali" }
// // //         ]
// // //       }
// // //     ]
// // //   },
// // //   wellness: {
// // //     title: "Wellness Retreats",
// // //     columns: [
// // //       {
// // //         category: "Multi-Style YTTC",
// // //         items: [
// // //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// // //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// // //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// // //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// // //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// // //         ]
// // //       },
// // //       {
// // //         category: "Multi-Style YTTC",
// // //         items: [
// // //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// // //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// // //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// // //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// // //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// // //         ]
// // //       },
// // //       {
// // //         category: "Multi-Style YTTC",
// // //         items: [
// // //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// // //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// // //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// // //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// // //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// // //         ]
// // //       },
// // //       {
// // //         category: "Multi-Style YTTC",
// // //         items: [
// // //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// // //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// // //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// // //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// // //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// // //         ]
// // //       }
// // //     ]
// // //   },
// // // };

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [activeDropdown, setActiveDropdown] = useState(null); 
// // //   const [mobileExpandedSection, setMobileExpandedSection] = useState(null); 
  
// // //   const location = useLocation();
// // //   const navRef = useRef(null);

// // //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
// // //   const closeMenu = () => {
// // //     setIsMenuOpen(false);
// // //     setActiveDropdown(null);
// // //     setMobileExpandedSection(null);
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   };

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (navRef.current && !navRef.current.contains(event.target)) {
// // //         setActiveDropdown(null);
// // //       }
// // //     };
// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, []);

// // //   useEffect(() => {
// // //     document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
// // //   }, [isMenuOpen]);

// // //   const isActive = (path) => location.pathname.startsWith(path);

// // //   const navItems = [
// // //     { label: 'About', path: '/about' },
// // //     { label: 'Yoga Teacher Training', path: '/yoga-teacher-training', type: 'ytt' },
// // //     { label: 'Wellness Retreats', path: '/wellness-retreats', type: 'wellness' },
// // //     { label: 'Bali Activities', path: '/bali-activities' },
// // //     { label: 'Holiday Packages', path: '/holiday-packages' },
// // //     { label: 'Facilities', path: '/facilities' },
// // //     { label: 'Contact', path: '/contact' },
// // //   ];

// // //   return (
// // //     <header ref={navRef} className="sticky top-0 w-full bg-white shadow-md border-b border-gray-100 z-[1000]">
// // //       {/* Primary Navigation Layer */}
// // //       <nav className="w-full relative bg-white z-[1002]">
// // //         <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center gap-4 max-w-[1440px] min-[2000px]:max-w-[1920px]">
          
// // //           {/* Logo Container */}
// // //           <Link
// // //             to="/"
// // //             className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
// // //             onClick={closeMenu}
// // //           >
// // //             <img
// // //               src="/logo.png"
// // //               alt="Bali Yoga Kendra Logo"
// // //               className="h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain block max-w-[140px] sm:max-w-[180px] lg:max-w-[220px]"
// // //             />
// // //           </Link>

// // //           {/* Desktop Navigation Links */}
// // //           <ul className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-5 m-0 p-0 list-none" style={{ fontFamily: "'Caudex', serif" }}>
// // //             {navItems.map((item) => {
// // //               const hasDropdown = !!item.type;
// // //               const isCurrentActive = activeDropdown === item.type;

// // //               return (
// // //                 <li 
// // //                   key={item.label} 
// // //                   className="flex items-center relative py-2"
// // //                   onMouseEnter={() => hasDropdown && setActiveDropdown(item.type)}
// // //                 >
// // //                   {hasDropdown ? (
// // //                     <button
// // //                       onClick={() => setActiveDropdown(isCurrentActive ? null : item.type)}
// // //                       className={`flex items-center gap-1.5 px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
// // //                         isCurrentActive || isActive(item.path) ? 'text-[#b4533c]' : ''
// // //                       }`}
// // //                       style={{ paddingBlock: '8px' }}
// // //                     >
// // //                       {item.label}
// // //                       <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isCurrentActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                       </svg>
// // //                     </button>
// // //                   ) : (
// // //                     <Link
// // //                       to={item.path}
// // //                       className={`px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
// // //                         isActive(item.path) ? 'text-[#b4533c]' : ''
// // //                       }`}
// // //                       style={{ paddingBlock: '8px' }}
// // //                       onMouseEnter={() => setActiveDropdown(null)}
// // //                     >
// // //                       {item.label}
// // //                     </Link>
// // //                   )}
// // //                 </li>
// // //               );
// // //             })}
// // //           </ul>

// // //           {/* Desktop Action Button */}
// // //           <div className="flex items-center gap-4 shrink-0">
// // //             <a
// // //               href="#apply"
// // //               className="hidden sm:inline-block border border-[#3d4a3e] text-[#3d4a3e] hover:bg-[#3d4a3e] hover:text-white transition-all duration-200 px-5 py-2.5 text-xs tracking-[0.15em] font-semibold rounded-sm"
// // //               style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
// // //             >
// // //               APPLY NOW
// // //             </a>

// // //             {/* Hamburger Button */}
// // //             <button
// // //               className="flex lg:hidden flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1003] w-10 h-10 relative"
// // //               onClick={toggleMenu}
// // //               aria-label="Toggle menu"
// // //             >
// // //               <span className={`absolute w-6 h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'bg-[#b4533c] rotate-45 translate-y-0' : 'bg-gray-800 -translate-y-1.5'}`} />
// // //               <span className={`absolute w-6 h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 bg-gray-800'}`} />
// // //               <span className={`absolute w-6 h-[2px] rounded-full transition-all duration-300 ${isMenuOpen ? 'bg-[#b4533c] -rotate-45 translate-y-0' : 'bg-gray-800 translate-y-1.5'}`} />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Desktop Mega Menu */}
// // //         {activeDropdown && MENU_CONTENT[activeDropdown] && (
// // //           <div 
// // //             className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-[1001]"
// // //             onMouseLeave={() => setActiveDropdown(null)}
// // //           >
// // //             <div className="max-w-[1440px] mx-auto px-8 py-10">
// // //               <div className="flex flex-wrap justify-between gap-6 xl:gap-8">
// // //                 {MENU_CONTENT[activeDropdown].columns.map((col, idx) => (
// // //                   <div key={idx} className="flex flex-col space-y-4 flex-1 min-w-[220px] max-w-[340px]">
// // //                     <h4 
// // //                       className="text-[13px] font-bold tracking-wider text-gray-400 uppercase border-b border-gray-100 pb-2"
// // //                       style={{ fontFamily: "'Caudex', serif" }}
// // //                     >
// // //                       {col.category}
// // //                     </h4>
// // //                     <ul className="space-y-2.5 list-none p-0 m-0">
// // //                       {col.items.map((item, itemIdx) => (
// // //                         <li key={itemIdx}>
// // //                           <Link
// // //                             to={item.link}
// // //                             onClick={() => setActiveDropdown(null)}
// // //                             className="block text-[14px] leading-snug font-medium text-gray-600 hover:text-[#b4533c] hover:translate-x-0.5 transition-all duration-150 py-1"
// // //                           >
// // //                             {item.name}
// // //                           </Link>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </nav>

// // //       {/* Mobile Drawer Panel */}
// // //       <div className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl z-[1005] flex flex-col transition-transform duration-300 transform lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
// // //         {/* MODIFIED: Matching UI header layout with Logo and Styled Custom Close Box */}
// // //         <div className="p-4 flex items-center justify-between border-b border-gray-100">
// // //           <Link to="/" onClick={closeMenu} className="block shrink-0">
// // //             <img
// // //               src="/logo.png"
// // //               alt="Bali Yoga Kendra Logo"
// // //               className="h-14 w-auto object-contain"
// // //             />
// // //           </Link>
          
// // //           {/* Styled explicit orange border close box layout */}
// // //           <button 
// // //             onClick={closeMenu}
// // //             className="w-10 h-10 border-2 border-[#dca34b] rounded-md flex items-center justify-center p-1.5 transition-colors hover:bg-amber-50"
// // //             aria-label="Close menu"
// // //           >
// // //             <svg className="w-full h-full text-[#a44d37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
// // //               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// // //             </svg>
// // //           </button>
// // //         </div>
        
// // //         <div className="flex-1 overflow-y-auto px-4 py-4">
// // //           <ul className="space-y-2 list-none p-0 m-0" style={{ fontFamily: "'Caudex', serif" }}>
// // //             {navItems.map((item) => {
// // //               const isExpandable = !!item.type && !!MENU_CONTENT[item.type]; 
// // //               const isSectionOpen = mobileExpandedSection === item.type;

// // //               return (
// // //                 <li key={item.label} className="border-b border-gray-50 pb-2">
// // //                   {isExpandable ? (
// // //                     <div>
// // //                       <button
// // //                         onClick={() => setMobileExpandedSection(isSectionOpen ? null : item.type)}
// // //                         className="w-full flex justify-between items-center py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-left text-[15px]"
// // //                       >
// // //                         <span>{item.label}</span>
// // //                         <svg className={`w-4 h-4 transition-transform duration-200 ${isSectionOpen ? 'rotate-180 text-[#b4533c]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                         </svg>
// // //                       </button>
                      
// // //                       <div className={`overflow-hidden transition-all duration-300 max-h-0 ${isSectionOpen ? 'max-h-[1200px] mt-2' : ''}`}>
// // //                         <div className="pl-4 space-y-4 border-l-2 border-gray-100 ml-3">
// // //                           {MENU_CONTENT[item.type].columns.map((col, colIdx) => (
// // //                             <div key={colIdx} className="space-y-1">
// // //                               <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider block mb-1">{col.category}</span>
// // //                               {col.items.map((subItem, subIdx) => (
// // //                                 <Link
// // //                                   key={subIdx}
// // //                                   to={subItem.link}
// // //                                   onClick={closeMenu}
// // //                                   className="block py-1.5 px-2 text-[14px] text-gray-600 rounded hover:bg-gray-50"
// // //                                 >
// // //                                   {subItem.name}
// // //                                 </Link>
// // //                               ))}
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ) : (
// // //                     <Link
// // //                       to={item.path}
// // //                       onClick={closeMenu}
// // //                       className="block py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-[15px]"
// // //                     >
// // //                       {item.label}
// // //                     </Link>
// // //                   )}
// // //                 </li>
// // //               );
// // //             })}
// // //           </ul>
// // //         </div>

// // //         <div className="p-6 border-t border-gray-100">
// // //           <a href="#apply" onClick={closeMenu} className="block w-full text-center bg-[#3d4a3e] text-white py-3 font-semibold rounded-md shadow-md text-sm">
// // //             APPLY NOW
// // //           </a>
// // //         </div>
// // //       </div>

// // //       {/* Dimmed Background Overlay */}
// // //       {(isMenuOpen || activeDropdown) && (
// // //         <div 
// // //           className="fixed inset-0 bg-black/20 z-[999] transition-opacity duration-300"
// // //           onClick={closeMenu}
// // //         />
// // //       )}
// // //     </header>
// // //   );
// // // };

// // // export default Header;



// // import React, { useState, useEffect, useRef } from 'react';
// // import { Link, useLocation } from 'react-router-dom';

// // // Mega Menu Content Map Data
// // const MENU_CONTENT = {
// //   ytt: {
// //     title: "Yoga Teacher Training",
// //     columns: [
// //       {
// //         category: "Multi-Style YTTC",
// //         items: [
// //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/ytt/6-days-50hr-multi-style" },
// //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/ytt/10-days-100hr-multi-style" },
// //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/ytt/20-days-200hr-multi-style" },
// //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/ytt/300hr-multi-style-bali" },
// //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/ytt/500hr-multi-style-bali" }
// //         ]
// //       },
// //       {
// //         category: "KUNDALINI YTTC",
// //         items: [
// //           { name: "6 Days 50 Hours Kundalini YTTC", link: "/ytt/6-days-50hr-kundalini" },
// //           { name: "10 Days 100 Hours Kundalini YTTC", link: "/ytt/100hr-kundalini-bali" },
// //           { name: "20 Days 200 Hours Kundalini YTTC", link: "/ytt/200hr-kundalini-bali" },
// //           { name: "30 Days 300 Hours Kundalini YTTC", link: "/ytt/300hr-kundalini-bali" },
// //           { name: "50 Days 500 Hours Kundalini YTTC", link: "/ytt/500hr-kundalini-bali" }
// //         ]
// //       },
// //       {
// //         category: "SHORT COURSES",
// //         items: [
// //           { name: "6 Days 50 Hours Yin Yoga Course", link: "/short-courses/50hr-yin-yoga" },
// //           { name: "85-Hours Prenatal Yoga TTC in Bali", link: "/short-courses/85hr-prenatal-yoga" },
// //           { name: "5 Days Aerial Yoga Course", link: "/short-courses/aerial-yoga-course" },
// //           { name: "5 Days Acro Yoga Course", link: "/short-courses/acro-yoga-course" }
// //         ]
// //       },
// //       {
// //         category: "SPECIALIZATION",
// //         items: [
// //           { name: "Vedic Sound Healing Level 1 & 2", link: "/specialization/vedic-sound-healing-level-1-2" },
// //           { name: "Bali 100 Hours Yoga Therapy Ayurveda", link: "/specialization/100hr-yoga-therapy-ayurveda" },
// //           { name: "Ayurvedic Treatment In Bali", link: "/specialization/ayurvedic-treatment-bali" },
// //           { name: "Abhyangam Massage Training Course In Bali", link: "/specialization/abhyangam-massage-training-bali" }
// //         ]
// //       }
// //     ]
// //   },
// //   wellness: {
// //     title: "Wellness Retreats",
// //     columns: [
// //       {
// //         category: "Multi-Style YTTC",
// //         items: [
// //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// //         ]
// //       },
// //       {
// //         category: "Multi-Style YTTC",
// //         items: [
// //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// //         ]
// //       },
// //       {
// //         category: "Multi-Style YTTC",
// //         items: [
// //           { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// //           { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// //           { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// //           { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// //           { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// //         ]
// //       },
// //       // {
// //       //   category: "Multi-Style YTTC",
// //       //   items: [
// //       //     { name: "6 Days 50 Hours Multi-Style Yoga Course", link: "/wellness/6-days-50hr-multi-style" },
// //       //     { name: "10 Days 100 Hours Multi-Style Yoga Course", link: "/wellness/10-days-100hr-multi-style" },
// //       //     { name: "20 Days 200 Hours Multi-Style YTTC", link: "/wellness/20-days-200hr-multi-style" },
// //       //     { name: "26 Days 300 Hours Advanced Multi-Style YTTC", link: "/wellness/300hr-multi-style-bali" },
// //       //     { name: "56 Days 500 Hours Advanced Multi-Style YTTC", link: "/wellness/500hr-multi-style-bali" }
// //       //   ]
// //       // }
// //     ]
// //   },
// // };

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState(null); 
// //   const [mobileExpandedSection, setMobileExpandedSection] = useState(null); 
  
// //   const location = useLocation();
// //   const navRef = useRef(null);

// //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
// //   const closeMenu = () => {
// //     setIsMenuOpen(false);
// //     setActiveDropdown(null);
// //     setMobileExpandedSection(null);
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (navRef.current && !navRef.current.contains(event.target)) {
// //         setActiveDropdown(null);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   useEffect(() => {
// //     document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
// //   }, [isMenuOpen]);

// //   const isActive = (path) => location.pathname.startsWith(path);

// //   const navItems = [
// //     { label: 'About', path: '/about' },
// //     { label: 'Yoga Teacher Training', path: '/yoga-teacher-training', type: 'ytt' },
// //     { label: 'Wellness Retreats', path: '/wellness-retreats', type: 'wellness' },
// //     { label: 'Bali Activities', path: '/bali-activities' },
// //     { label: 'Holiday Packages', path: '/holiday-packages' },
// //     { label: 'Facilities', path: '/facilities' },
// //     { label: 'Contact', path: '/contact' },
// //   ];

// //   return (
// //     <header ref={navRef} className="sticky top-0 w-full bg-white shadow-md border-b border-gray-100 z-[1000]">
// //       {/* Primary Navigation Layer */}
// //       <nav className="w-full relative bg-white z-[1002]">
// //         <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center gap-4 max-w-[1440px] min-[2000px]:max-w-[1920px]">
          
// //           {/* Logo Container */}
// //           <Link
// //             to="/"
// //             className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
// //             onClick={closeMenu}
// //           >
// //             <img
// //               src="/logo.png"
// //               alt="Bali Yoga Kendra Logo"
// //               className="h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain block max-w-[140px] sm:max-w-[180px] lg:max-w-[220px]"
// //             />
// //           </Link>

// //           {/* Desktop Navigation Links */}
// //           <ul className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-5 m-0 p-0 list-none" style={{ fontFamily: "'Caudex', serif" }}>
// //             {navItems.map((item) => {
// //               const hasDropdown = !!item.type;
// //               const isCurrentActive = activeDropdown === item.type;

// //               return (
// //                 <li 
// //                   key={item.label} 
// //                   className="flex items-center relative py-2"
// //                   onMouseEnter={() => hasDropdown && setActiveDropdown(item.type)}
// //                 >
// //                   {hasDropdown ? (
// //                     <button
// //                       onClick={() => setActiveDropdown(isCurrentActive ? null : item.type)}
// //                       className={`flex items-center gap-1.5 px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
// //                         isCurrentActive || isActive(item.path) ? 'text-[#b4533c]' : ''
// //                       }`}
// //                       style={{ paddingBlock: '8px' }}
// //                     >
// //                       {item.label}
// //                       <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isCurrentActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                       </svg>
// //                     </button>
// //                   ) : (
// //                     <Link
// //                       to={item.path}
// //                       className={`px-2 xl:px-3 text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal tracking-tight transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-[#b4533c] ${
// //                         isActive(item.path) ? 'text-[#b4533c]' : ''
// //                       }`}
// //                       style={{ paddingBlock: '8px' }}
// //                       onMouseEnter={() => setActiveDropdown(null)}
// //                     >
// //                       {item.label}
// //                     </Link>
// //                   )}
// //                 </li>
// //               );
// //             })}
// //           </ul>

// //           {/* Desktop Action Button */}
// //           <div className="flex items-center gap-4 shrink-0">
// //             <a
// //               href="#apply"
// //               className="hidden sm:inline-block border border-[#3d4a3e] text-[#3d4a3e] hover:bg-[#3d4a3e] hover:text-white transition-all duration-200 px-5 py-2.5 text-xs tracking-[0.15em] font-semibold rounded-sm"
// //               style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
// //             >
// //               APPLY NOW
// //             </a>

// //             {/* Hamburger Button (Hides automatically when menu drawer opens to avoid dual layout crosses) */}
// //             <button
// //               className={`flex lg:hidden flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1003] w-10 h-10 relative transition-opacity duration-200 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
// //               onClick={toggleMenu}
// //               aria-label="Toggle menu"
// //             >
// //               <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 -translate-y-1.5" />
// //               <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 opacity-100" />
// //               <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 translate-y-1.5" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Desktop Mega Menu */}
// //         {activeDropdown && MENU_CONTENT[activeDropdown] && (
// //           <div 
// //             className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-[1001]"
// //             onMouseLeave={() => setActiveDropdown(null)}
// //           >
// //             <div className="max-w-[1440px] mx-auto px-8 py-10">
// //               <div className="flex flex-wrap justify-between gap-6 xl:gap-8">
// //                 {MENU_CONTENT[activeDropdown].columns.map((col, idx) => (
// //                   <div key={idx} className="flex flex-col space-y-4 flex-1 min-w-[220px] max-w-[340px]">
// //                     <h4 
// //                       className="text-[18px] font-bold tracking-wider text-yellow-400 uppercase border-b border-gray-100 pb-2"
// //                       style={{ fontFamily: "'Caudex', serif" }}
// //                     >
// //                       {col.category}
// //                     </h4>
// //                     <ul className="space-y-2.5 list-none p-0 m-0">
// //                       {col.items.map((item, itemIdx) => (
// //                         <li key={itemIdx}>
// //                           <Link
// //                             to={item.link}
// //                             onClick={() => setActiveDropdown(null)}
// //                             className="block text-[16px] leading-snug font-medium text-gray-600 hover:text-[#b4533c] hover:translate-x-0.5 transition-all duration-150 py-1"
// //                           >
// //                             {item.name}
// //                           </Link>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </nav>

// //       {/* Mobile Drawer Panel */}
// //       <div className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-2xl z-[1005] flex flex-col transition-transform duration-300 transform lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
// //         {/* Header Layout with Logo and Styled Custom Close Box */}
// //         <div className="p-4 flex items-center justify-between border-b border-gray-100 bg-white">
// //           <Link to="/" onClick={closeMenu} className="block shrink-0">
// //             <img
// //               src="/logo.png"
// //               alt="Bali Yoga Kendra Logo"
// //               className="h-14 w-auto object-contain"
// //             />
// //           </Link>
          
// //           {/* Styled explicit orange border close box layout */}
// //           <button 
// //             onClick={closeMenu}
// //             className="w-10 h-10 border-2 border-[#dca34b] rounded-md flex items-center justify-center p-1.5 transition-colors hover:bg-amber-50"
// //             aria-label="Close menu"
// //           >
// //             <svg className="w-full h-full text-[#a44d37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
// //               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// //             </svg>
// //           </button>
// //         </div>
        
// //         <div className="flex-1 overflow-y-auto px-4 py-4">
// //           <ul className="space-y-2 list-none p-0 m-0" style={{ fontFamily: "'Caudex', serif" }}>
// //             {navItems.map((item) => {
// //               const isExpandable = !!item.type && !!MENU_CONTENT[item.type]; 
// //               const isSectionOpen = mobileExpandedSection === item.type;

// //               return (
// //                 <li key={item.label} className="border-b border-gray-50 pb-2">
// //                   {isExpandable ? (
// //                     <div>
// //                       <button
// //                         onClick={() => setMobileExpandedSection(isSectionOpen ? null : item.type)}
// //                         className="w-full flex justify-between items-center py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-left text-[15px]"
// //                       >
// //                         <span>{item.label}</span>
// //                         <svg className={`w-4 h-4 transition-transform duration-200 ${isSectionOpen ? 'rotate-180 text-[#b4533c]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                         </svg>
// //                       </button>
                      
// //                       <div className={`overflow-hidden transition-all duration-300 max-h-0 ${isSectionOpen ? 'max-h-[1200px] mt-2' : ''}`}>
// //                         <div className="pl-4 space-y-4 border-l-2 border-gray-100 ml-3">
// //                           {MENU_CONTENT[item.type].columns.map((col, colIdx) => (
// //                             <div key={colIdx} className="space-y-1">
// //                               <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider block mb-1">{col.category}</span>
// //                               {col.items.map((subItem, subIdx) => (
// //                                 <Link
// //                                   key={subIdx}
// //                                   to={subItem.link}
// //                                   onClick={closeMenu}
// //                                   className="block py-1.5 px-2 text-[14px] text-gray-600 rounded hover:bg-gray-50"
// //                                 >
// //                                   {subItem.name}
// //                                 </Link>
// //                               ))}
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <Link
// //                       to={item.path}
// //                       onClick={closeMenu}
// //                       className="block py-3 px-3 text-gray-800 font-medium hover:bg-gray-50 rounded-lg text-[15px]"
// //                     >
// //                       {item.label}
// //                     </Link>
// //                   )}
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </div>

// //         <div className="p-6 border-t border-gray-100 bg-white">
// //           <a href="#apply" onClick={closeMenu} className="block w-full text-center bg-[#3d4a3e] text-white py-3 font-semibold rounded-md shadow-md text-sm">
// //             APPLY NOW
// //           </a>
// //         </div>
// //       </div>

// //       {/* Dimmed Background Overlay with premium Backdrop Blur Effect */}
// //       {(isMenuOpen || activeDropdown) && (
// //         <div 
// //           className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[999] transition-opacity duration-300"
// //           onClick={closeMenu}
// //         />
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;

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
//     <header ref={navRef} className="sticky top-0 w-full bg-white shadow-md border-b border-gray-100 z-[1000]" style={{ fontFamily: "'Inter', sans-serif" }}>
//       <nav className="w-full relative bg-white z-[1002]">
//         <div className="w-full mx-auto px-4 sm:px-6 xl:px-8 py-3 xl:py-4 flex justify-between items-center gap-2 xl:gap-4 max-w-[1440px] min-[2000px]:max-w-[1920px]">

//           {/* Logo */}
//           <Link
//             to="/"
//             className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
//             onClick={closeMenu}
//           >
//             <img
//               src="/logo.png"
//               alt="Bali Yoga Kendra Logo"
//               className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-24 2xl:h-28 w-auto object-contain block max-w-[120px] sm:max-w-[160px] lg:max-w-[200px]"
//             />
//           </Link>

//           {/* Desktop Nav — lg and above */}
//           <ul className="hidden lg:flex items-center justify-end flex-1 gap-1 lg:gap-2 xl:gap-3 2xl:gap-5 m-0 p-0 list-none">
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
//                       className={`flex items-center gap-1 px-1 lg:px-1.5 xl:px-2.5 text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] font-normal tracking-wide transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-black ${
//                         isCurrentActive || isActive(item.path) ? 'text-black font-semibold' : ''
//                       }`}
//                       style={{ paddingBlock: '8px' }}
//                     >
//                       {item.label}
//                       <svg className={`w-3 h-3 lg:w-3.5 lg:h-3.5 transition-transform duration-200 ${isCurrentActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       className={`px-1 lg:px-1.5 xl:px-2.5 text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] font-normal tracking-wide transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-black ${
//                         isActive(item.path) ? 'text-black font-semibold' : ''
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

//           {/* Right side: APPLY NOW + Hamburger */}
//           <div className="flex items-center gap-2 xl:gap-4 shrink-0">
//             <a
//               href="#apply"
//               className="hidden lg:inline-block border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 px-3 lg:px-4 xl:px-5 py-2 xl:py-2.5 text-xs tracking-[0.15em] font-semibold rounded-sm"
//             >
//               APPLY NOW
//             </a>

//             {/* Hamburger — below lg */}
//             <button
//               className={`flex lg:hidden flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1003] w-10 h-10 relative transition-opacity duration-200 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 -translate-y-1.5" />
//               <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 opacity-100" />
//               <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 translate-y-1.5" />
//             </button>
//           </div>
//         </div>

//         {/* Mega Menu Dropdown */}
//         {activeDropdown && MENU_CONTENT[activeDropdown] && (
//           <div
//             className="hidden lg:block absolute top-full left-0 w-full z-[1001]"
//             style={{ background: '#f8f5ef', borderTop: '2px solid #c3875a', boxShadow: '0 20px 60px rgba(30,58,47,0.13)' }}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <div className="max-w-[1440px] mx-auto px-10 py-10">
//               {/* Dropdown title */}
//               <p className="text-18 tracking-[0.25em] uppercase mb-7 font-medium" style={{ color: '#c3875a', fontFamily: "'Caudex', serif" }}>
//                 {MENU_CONTENT[activeDropdown].title}
//               </p>
//               <div className="flex flex-wrap justify-between gap-6 xl:gap-10">
//                 {MENU_CONTENT[activeDropdown].columns.map((col, idx) => (
//                   <div key={idx} className="flex flex-col space-y-3 flex-1 min-w-[180px] max-w-[320px]">
//                     <h4
//                       className="text-[16px] font-bold uppercase tracking-[0.2em] pb-2.5"
//                       style={{ color: '#1e3a2f', borderBottom: '1px solid #d4c9b8', fontFamily: "'Caudex', serif" }}
//                     >
//                       {col.category}
//                     </h4>
//                     <ul className="space-y-3 list-none p-0 m-0">
//                       {col.items.map((item, itemIdx) => (
//                         <li key={itemIdx}>
//                           <Link
//                             to={item.link}
//                             onClick={() => setActiveDropdown(null)}
//                             className="group block text-[16px] leading-snug py-0.5 transition-all duration-200"
//                             style={{ color: '#4a3728', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//                             onMouseEnter={e => e.currentTarget.style.color = '#c3875a'}
//                             onMouseLeave={e => e.currentTarget.style.color = '#4a3728'}
//                           >
//                             <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
//                               {item.name}
//                             </span>
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

//       {/* Mobile/Tablet Drawer Panel - below lg (1024px) */}
//       <div className={`fixed inset-y-0 left-0 w-full bg-white shadow-2xl z-[1005] flex flex-col transition-transform duration-300 transform lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
//         {/* Header Layout - matches main navbar height exactly */}
//         <div className="px-5 py-3 flex items-center justify-between shrink-0" style={{ background: '#fff', borderBottom: '2px solid #c3875a' }}>
//           <Link to="/" onClick={closeMenu} className="block shrink-0">
//             <img
//               src="/logo.png"
//               alt="Bali Yoga Kendra Logo"
//               className="h-12 sm:h-14 md:h-16 w-auto object-contain"
//             />
//           </Link>
          
//           <button 
//             onClick={closeMenu}
//             className="shrink-0 w-9 h-9 rounded-md flex items-center justify-center p-1.5 transition-colors duration-150"
//             style={{ border: '1px solid #d4c9b8', color: '#1e3a2f' }}
//             onMouseEnter={e => e.currentTarget.style.background = '#f0ebe2'}
//             onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//             aria-label="Close menu"
//           >
//             <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
        
//         <div className="flex-1 overflow-y-auto px-5 py-4" style={{ background: '#f8f5ef' }}>
//           <ul className="space-y-1 list-none p-0 m-0">
//             {navItems.map((item) => {
//               const isExpandable = !!item.type && !!MENU_CONTENT[item.type]; 
//               const isSectionOpen = mobileExpandedSection === item.type;

//               return (
//                 <li key={item.label} style={{ borderBottom: '1px solid #e6dccf' }}>
//                   {isExpandable ? (
//                     <div>
//                       <button
//                         onClick={() => setMobileExpandedSection(isSectionOpen ? null : item.type)}
//                         className="w-full flex justify-between items-center py-3.5 px-2 text-left text-[17px] transition-colors duration-150"
//                         style={{ color: isSectionOpen ? '#c3875a' : '#2f241c', fontFamily: "'Caudex', serif" }}
//                       >
//                         <span>{item.label}</span>
//                         <svg
//                           className={`w-4 h-4 transition-transform duration-200 ${isSectionOpen ? 'rotate-180' : ''}`}
//                           fill="none" stroke="currentColor" viewBox="0 0 24 24"
//                           style={{ color: isSectionOpen ? '#c3875a' : '#a08060' }}
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </button>
                      
//                       <div className={`overflow-hidden transition-all duration-300 max-h-0 ${isSectionOpen ? 'max-h-[1200px] mb-3' : ''}`}>
//                         <div className="pl-4 space-y-4 ml-2" style={{ borderLeft: '2px solid #c3875a' }}>
//                           {MENU_CONTENT[item.type].columns.map((col, colIdx) => (
//                             <div key={colIdx} className="space-y-1 pt-2">
//                               <span
//                                 className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-2"
//                                 style={{ color: '#1e3a2f', fontFamily: "'Caudex', serif" }}
//                               >
//                                 {col.category}
//                               </span>
//                               {col.items.map((subItem, subIdx) => (
//                                 <Link
//                                   key={subIdx}
//                                   to={subItem.link}
//                                   onClick={closeMenu}
//                                   className="block py-1.5 px-2 text-[15px] rounded transition-colors duration-150"
//                                   style={{ color: '#4a3728', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//                                   onMouseEnter={e => { e.currentTarget.style.color = '#c3875a'; e.currentTarget.style.background = '#f0ebe2'; }}
//                                   onMouseLeave={e => { e.currentTarget.style.color = '#4a3728'; e.currentTarget.style.background = 'transparent'; }}
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
//                       className="block py-3.5 px-2 text-[17px] transition-colors duration-150"
//                       style={{ color: '#2f241c', fontFamily: "'Caudex', serif" }}
//                       onMouseEnter={e => e.currentTarget.style.color = '#c3875a'}
//                       onMouseLeave={e => e.currentTarget.style.color = '#2f241c'}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className="p-5 bg-white" style={{ borderTop: '1px solid #e6dccf' }}>
//           <a
//             href="#apply"
//             onClick={closeMenu}
//             className="block w-full text-center py-3 text-sm font-semibold tracking-[0.15em] rounded transition-all duration-200"
//             style={{ background: '#1e3a2f', color: '#f8f5ef', fontFamily: "'Caudex', serif" }}
//           >
//             APPLY NOW
//           </a>
//         </div>
//       </div>

//       {/* Backdrop Overlay — mobile drawer only */}
//       {(isMenuOpen || activeDropdown) && (
//         <div 
//           className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999] transition-opacity duration-300"
//           onClick={closeMenu}
//         />
//       )}
//     </header>
//   );
// };

// export default Header;




import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Mega Menu Content Map Data (Content exactly as provided)
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

  // Prevent scrollbar from pushing content inward and creating a grey strip on the right
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.scrollbarGutter = 'stable';
    document.body.style.backgroundColor = '#ffffff';
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
      document.documentElement.style.scrollbarGutter = '';
    };
  }, []);

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
    <>
      {/*
       * FIX: The header is now `fixed` (not `sticky`).
       * `sticky` breaks when any ancestor has overflow:hidden/auto/scroll set,
       * which is common in React layouts — the header would scroll away with the page.
       * `fixed` always positions relative to the viewport, so it never moves.
       *
       * We also wrap everything in a Fragment so we can render the spacer <div>
       * below the header. This spacer is the same height as the header and pushes
       * page content down so it doesn't start hidden underneath the fixed header.
       */}

      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-100 z-[1000]"
        style={{
          fontFamily: "Poppins, BlackMango, Inter, system-ui, sans-serif",
          width: '100%',
        }}
      >
        <nav className="w-full relative bg-white z-[1002]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 py-3 xl:py-4 flex justify-between items-center gap-2 xl:gap-3 max-w-[1440px] min-[2000px]:max-w-[1920px]">

            {/* Logo */}
            <Link
              to="/"
              className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
              onClick={closeMenu}
            >
              <img
                src="/logo.png"
                alt="Bali Yoga Kendra Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-24 2xl:h-28 w-auto object-contain block max-w-[120px] sm:max-w-[160px] lg:max-w-[200px]"
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center justify-end flex-1 gap-0 lg:gap-1 xl:gap-2 2xl:gap-4 m-0 p-0 list-none">
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
                        className={`flex items-center gap-1 px-1 xl:px-2 text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] font-normal tracking-wide transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-black ${
                          isCurrentActive || isActive(item.path) ? 'text-black' : ''
                        }`}
                        style={{ paddingBlock: '8px' }}
                      >
                        {item.label}
                        <svg
                          className={`w-3 h-3 xl:w-3.5 xl:h-3.5 shrink-0 transition-transform duration-200 ${isCurrentActive ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`px-1 xl:px-2 text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] font-normal tracking-wide transition-colors duration-200 rounded-md whitespace-nowrap text-gray-800 hover:text-black ${
                          isActive(item.path) ? 'text-black' : ''
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

            {/* Right side: APPLY NOW + Hamburger */}
            <div className="flex items-center gap-2 xl:gap-4 shrink-0">
              <a
                href="#apply"
                className="hidden lg:inline-block border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 px-5 py-2.5 text-xs tracking-[0.15em] font-semibold rounded-sm"
              >
                APPLY NOW
              </a>

              {/* Hamburger — only visible on mobile */}
              <button
                className={`flex lg:hidden flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1003] w-10 h-10 relative ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                onClick={toggleMenu}
                aria-label="Open navigation menu"
              >
                <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 -translate-y-1.5" />
                <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 opacity-100" />
                <span className="absolute w-6 h-[2px] rounded-full bg-gray-800 translate-y-1.5" />
              </button>
            </div>
          </div>

          {/* DESKTOP MEGA MENU */}
          {activeDropdown && MENU_CONTENT[activeDropdown] && (
            <div
              className="hidden lg:block absolute top-full left-0 w-full z-[1001]"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div
                className="mx-auto w-[92%] max-w-[1200px] mt-2 rounded-lg overflow-hidden shadow-2xl"
                style={{ backgroundColor: '#182222' }}
              >
                <div className="px-10 py-12">
                  <div className="flex flex-wrap justify-between gap-10">
                    {MENU_CONTENT[activeDropdown].columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col flex-1 min-w-[200px]">
                        <h4
                          className="text-[16px] font-bold uppercase tracking-[0.05em] pb-4 mb-4 border-b border-gray-700"
                          style={{ color: '#e5a93b' }}
                        >
                          {col.category}
                        </h4>
                        <ul className="space-y-4 list-none p-0 m-0">
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.link}
                                onClick={() => setActiveDropdown(null)}
                                className="block text-[15px] font-normal transition-colors duration-200 uppercase tracking-wide leading-tight"
                                style={{ color: '#ffffff' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#e5a93b'}
                                onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
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
            </div>
          )}
        </nav>

        {/* MOBILE DRAWER */}
        <div
          className={`fixed inset-y-0 left-0 w-full z-[1005] flex flex-col transition-transform duration-300 transform lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ backgroundColor: '#182222' }}
        >
          {/* Drawer header */}
          <div
            className="px-5 py-3 flex items-center justify-between border-b-2 shrink-0"
            style={{ borderColor: '#e5a93b' }}
          >
            <Link to="/" onClick={closeMenu}>
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2"
              style={{ color: '#e5a93b' }}
              aria-label="Close navigation menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav list */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-0 list-none p-0 m-0">
              {navItems.map((item) => {
                const isExpandable = !!item.type && !!MENU_CONTENT[item.type];
                const isSectionOpen = mobileExpandedSection === item.type;

                return (
                  <li key={item.label} className="border-b" style={{ borderColor: 'rgba(229,169,59,0.2)' }}>
                    {isExpandable ? (
                      <div>
                        {/* Toggle button */}
                        <button
                          onClick={() => setMobileExpandedSection(isSectionOpen ? null : item.type)}
                          className="w-full flex justify-between items-center py-4 text-[17px] font-normal uppercase tracking-wide transition-colors duration-200"
                          style={{ color: isSectionOpen ? '#e5a93b' : '#ffffff' }}
                        >
                          <span>{item.label}</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-200 ${isSectionOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Expanded sub-menu */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${isSectionOpen ? 'max-h-[2000px] pb-4' : 'max-h-0'}`}
                        >
                          <div className="rounded-lg overflow-hidden" style={{ backgroundColor: '#0f1919' }}>
                            <div className="px-5 py-6 flex flex-col gap-6">
                              {MENU_CONTENT[item.type].columns.map((col, cIdx) => (
                                <div key={cIdx}>
                                  <h4
                                    className="text-[13px] font-bold uppercase tracking-[0.05em] pb-3 mb-3 border-b"
                                    style={{ color: '#e5a93b', borderColor: 'rgba(229,169,59,0.3)' }}
                                  >
                                    {col.category}
                                  </h4>
                                  <ul className="space-y-3 list-none p-0 m-0">
                                    {col.items.map((sub, sIdx) => (
                                      <li key={sIdx}>
                                        <Link
                                          to={sub.link}
                                          onClick={closeMenu}
                                          className="block text-[13px] font-normal uppercase tracking-wide leading-snug transition-colors duration-200"
                                          style={{ color: '#ffffff' }}
                                          onTouchStart={e => e.currentTarget.style.color = '#e5a93b'}
                                          onTouchEnd={e => {
                                            setTimeout(() => {
                                              if (e.currentTarget) e.currentTarget.style.color = '#ffffff';
                                            }, 300);
                                          }}
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className="block py-4 text-[17px] font-normal uppercase tracking-wide transition-colors duration-200"
                        style={{ color: '#ffffff' }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* APPLY NOW in mobile drawer */}
            <div className="mt-6 pb-6">
              <a
                href="#apply"
                onClick={closeMenu}
                className="block w-full text-center py-3 text-sm tracking-[0.15em] font-semibold border transition-all duration-200"
                style={{ borderColor: '#e5a93b', color: '#e5a93b' }}
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>

        {/* Mobile backdrop overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1004] lg:hidden"
            onClick={closeMenu}
          />
        )}
      </header>

      {/*
       * SPACER DIV — This is the key companion to `fixed` positioning.
       * A fixed element is removed from the normal document flow, so without
       * this spacer the first section of your page would be hidden underneath
       * the header. This div is invisible but reserves exactly the same vertical
       * space the header occupies:
       *   - Mobile  (~60px)  → pt-[60px]  (h-12 logo + py-3 padding)
       *   - Tablet  (~72px)  → sm:pt-[72px]
       *   - Desktop (~80px)  → lg:pt-[80px]
       *   - Large   (~96px)  → xl:pt-[96px]
       *
       * If you ever change the header height, update these values to match.
       */}
      <div className="w-full pt-[60px] sm:pt-[72px] lg:pt-[80px] xl:pt-[96px]" aria-hidden="true" />
    </>
  );
};

export default Header;