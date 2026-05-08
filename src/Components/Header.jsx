// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';
// // import logo from '../Footer/images/header.png';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
//   }, [isMenuOpen]);

//   const isActive = (path) => location.pathname === path;

//   // Shared Link styles to keep code clean
//   const navLinkStyles = (path) => `
//     relative block py-3 px-5 text-[1.3rem] font-medium tracking-tight transition-colors duration-300 rounded-lg
//     text-gray-700 hover:text-[#b4533c]
//     min-[969px]:after:content-[''] min-[969px]:after:absolute min-[969px]:after:bottom-2 min-[969px]:after:left-1/2 min-[969px]:after:-translate-x-1/2 min-[969px]:after:h-[2px] min-[969px]:after:bg-[#b4533c] min-[969px]:after:transition-transform min-[969px]:after:duration-300 min-[969px]:after:origin-center
//     ${isActive(path) 
//       ? 'text-[#b4533c] min-[969px]:after:w-[40%] min-[969px]:after:scale-x-100 max-[968px]:after:scale-x-100 font-semibold' 
//       : 'min-[969px]:after:w-[40%] min-[969px]:after:scale-x-0 hover:after:scale-x-100 max-[968px]:after:scale-x-0'
//     }
//     max-[968px]:w-full max-[968px]:px-4 max-[968px]:after:content-[''] max-[968px]:after:absolute max-[968px]:after:bottom-2 max-[968px]:after:left-4 max-[968px]:after:w-[35px] max-[968px]:after:h-[2px] max-[968px]:after:bg-[#b4533c] max-[968px]:after:origin-left
//   `;

//   return (
//     <header className="sticky top-0 w-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] z-[1000] transition-all duration-300 font-sans">
//       <nav className="p-0">
//         <div className="flex justify-between items-center max-w-[1400px] mx-auto py-[0.8rem] px-4 sm:px-10 gap-8 flex-wrap 
//                         min-[1025px]:max-[1280px]:px-6 min-[1025px]:max-[1280px]:gap-6
//                         min-[969px]:max-[1024px]:py-[10px] min-[969px]:max-[1024px]:px-6 min-[969px]:max-[1024px]:gap-4
//                         max-[968px]:py-[5px] max-[968px]:px-6
//                         max-[480px]:px-4">
          
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0 h-20 
//                        min-[1025px]:max-[1280px]:h-[70px] min-[969px]:max-[1024px]:h-[65px] max-[968px]:h-[60px] max-[480px]:h-20"
//             onClick={closeMenu}
//           >
//             {/* <img 
//               src="https://via.placeholder.com/220x100" // Replace with {logo}
//               alt="Company Logo" 
//               className="h-[100px] w-auto max-w-[220px] object-contain block align-middle
//                          min-[1025px]:max-[1280px]:h-[90px] min-[1025px]:max-[1280px]:max-w-[180px]
//                          min-[969px]:max-[1024px]:h-[85px] min-[969px]:max-[1024px]:max-w-[160px]
//                          max-[968px]:h-[75px] max-[968px]:max-w-[170px]
//                          max-[480px]:h-[80px] max-[480px]:max-w-[150px]"
//             /> */}
//             <img 
//                 src="/logo.png"
//                 alt="Company Logo" 
//                 className="h-[100px] w-auto max-w-[220px] object-contain block align-middle
//                           min-[1025px]:max-[1280px]:h-[90px] min-[1025px]:max-[1280px]:max-w-[180px]
//                           min-[969px]:max-[1024px]:h-[85px] min-[969px]:max-[1024px]:max-w-[160px]
//                           max-[968px]:h-[75px] max-[968px]:max-w-[170px]
//                           max-[480px]:h-[80px] max-[480px]:max-w-[150px]"
//               />

//           </Link>

//           {/* Navigation Menu */}
//           <ul className={`
//             flex list-none m-0 p-0 items-center flex-1 justify-center gap-4
//             min-[1025px]:max-[1280px]:gap-2 min-[969px]:max-[1024px]:gap-[0.3rem]
//             max-[968px]:fixed max-[968px]:top-0 max-[968px]:flex-col max-[968px]:bg-white max-[968px]:w-full max-[968px]:max-w-[320px] max-[968px]:h-screen max-[968px]:pt-20 max-[968px]:px-6 max-[968px]:pb-8 max-[968px]:shadow-[4px_0_20px_rgba(0,0,0,0.15)] max-[968px]:transition-[left] max-[968px]:duration-400 max-[968px]:ease-[cubic-bezier(0.4,0,0.2,1)] max-[968px]:z-[1001] max-[968px]:overflow-y-auto max-[968px]:items-start max-[968px]:justify-start max-[968px]:gap-[0.3rem]
//             max-[480px]:max-w-[260px]
//             ${isMenuOpen ? 'max-[968px]:left-0' : 'max-[968px]:-left-full'}
//           `}>
//             {[ 'About', 'Course', 'Online','Gallery' , 'Meditation' ,'Retreat','Contact'].map((item) => (
//               <li key={item} className="relative w-full min-[969px]:w-auto">
//                 <Link 
//                   to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
//                   className={navLinkStyles(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
//                   onClick={closeMenu}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}

//             {/* Mobile Contact Section */}
//             {/* <li className="hidden max-[968px]:block border-t border-gray-200 mt-8 pt-8 w-full">
//               <div className="flex items-center gap-[0.6rem] py-[0.9rem] px-4 text-gray-700 text-[0.95rem] font-medium mb-6 bg-[#b4533c]/[0.06] rounded-lg border-l-4 border-[#b4533c]">
//                 <MapPin size={18} className="text-[#b4533c] shrink-0" />
//                 <span>Bengaluru, India</span>
//               </div>
//               <div className="flex gap-4 justify-center px-4 flex-wrap">
//                 {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
//                   <a key={idx} href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-700 border-2 border-gray-200 transition-all active:bg-[#b4533c] active:text-white active:border-[#b4533c] active:scale-95 sm:hover:bg-[#b4533c] sm:hover:text-white sm:hover:border-[#b4533c] sm:hover:scale-105 sm:hover:shadow-[0_4px_12px_rgba(15,76,129,0.3)]">
//                     <Icon size={18} />
//                   </a>
//                 ))}
//               </div>
//             </li> */}
//           </ul>
// {/* Right Side (Book Now + Hamburger) */}
// <div className="flex items-center gap-4 shrink-0">

//   {/* Book Now */}
//   <a
//     href="#"
//     className="border border-[#3d4a3e] text-[#3d4a3e] hover:bg-[#3d4a3e] hover:text-[#f5f2eb] transition-colors duration-200 px-5 py-2 text-xs tracking-[0.18em] font-medium hidden sm:inline-block"
//     style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
//   >
//     APPLY NOW
//   </a>

//   {/* Mobile Book Button */}
//   <a
//     href="#"
//     className="sm:hidden border border-[#3d4a3e] text-[#3d4a3e] px-3 py-1 text-[11px]"
//   >
//     APPLY NOW
//   </a>

//   {/* Hamburger */}
//   {/* <button
//     className="max-[968px]:flex hidden flex-col justify-center items-center w-9 h-9 gap-1.5"
//     onClick={toggleMenu}
//   >
//     <span className={`block h-px w-6 bg-[#3d4a3e] transition-all ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
//     <span className={`block h-px w-6 bg-[#3d4a3e] ${isMenuOpen ? "opacity-0" : ""}`} />
//     <span className={`block h-px w-6 bg-[#3d4a3e] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
//   </button> */}

// </div>
//           {/* Desktop Right Side */}
//           {/* <div className="flex items-center gap-6 shrink-0 max-[968px]:hidden min-[969px]:max-[1024px]:gap-4">
//             <div className="flex items-center gap-[0.4rem] text-gray-700 text-[0.9rem] font-medium">
//               <MapPin className="text-[#b4533c]" size={18} />
//               <span className="whitespace-nowrap min-[969px]:max-[1024px]:hidden">Bengaluru, India</span>
//             </div>
//             <div className="flex gap-[0.6rem] items-center min-[969px]:max-[1024px]:gap-2">
//               {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
//                 <a key={idx} href="#" className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-[#b4533c] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_4px_12px_rgba(15,76,129,0.3)] min-[969px]:max-[1024px]:w-[30px] min-[969px]:max-[1024px]:h-[30px] min-[1025px]:max-[1280px]:w-8 min-[1025px]:max-[1280px]:h-8">
//                   <Icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </div> */}

//           {/* Hamburger Button */}
//           <button
//             className={`hidden max-[968px]:flex flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1002] relative w-10 h-10 max-[480px]:w-9 max-[480px]:h-9 group`}
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <span className={`w-[26px] max-[480px]:w-6 h-[2.5px] bg-black rounded-full absolute transition-all duration-300 group-hover:bg-[#b4533c] ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45 bg-[#b4533c]' : 'top-3'}`}></span>
//             <span className={`w-[26px] max-[480px]:w-6 h-[2.5px] bg-black rounded-full absolute transition-all duration-300 group-hover:bg-[#b4533c] ${isMenuOpen ? 'opacity-0 w-0' : 'top-1/2 -translate-y-1/2'}`}></span>
//             <span className={`w-[26px] max-[480px]:w-6 h-[2.5px] bg-black rounded-full absolute transition-all duration-300 group-hover:bg-[#b4533c] ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45 bg-[#b4533c]' : 'bottom-3'}`}></span>
//           </button>
//         </div>
//       </nav>

//       {/* Overlay */}
//       <div 
//         className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[999] transition-opacity duration-300 ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}`} 
//         onClick={closeMenu}
//       ></div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinkStyles = (path) => `
    relative block py-2 px-3
    text-[0.95rem]

    min-[1400px]:text-[1.7rem]
    min-[2200px]:text-[2.5rem]

    min-[969px]:max-[1100px]:text-[1.1rem]
    min-[969px]:max-[1100px]:px-2

    font-medium tracking-tight
    transition-colors duration-300
    rounded-lg
    whitespace-nowrap

    text-gray-700 hover:text-[#b4533c]

    min-[969px]:after:content-['']
    min-[969px]:after:absolute
    min-[969px]:after:bottom-1
    min-[969px]:after:left-1/2
    min-[969px]:after:-translate-x-1/2
    min-[969px]:after:h-[2px]
    min-[969px]:after:bg-[#b4533c]
    min-[969px]:after:transition-transform
    min-[969px]:after:duration-300
    min-[969px]:after:origin-center

    ${
      isActive(path)
        ? 'text-[#b4533c] font-semibold min-[969px]:after:w-[40%] min-[969px]:after:scale-x-100'
        : 'min-[969px]:after:w-[40%] min-[969px]:after:scale-x-0 hover:after:scale-x-100'
    }

    max-[968px]:w-full
    max-[968px]:px-4
    max-[968px]:py-3
    max-[968px]:text-[1rem]
  `;

  return (
    <header className="sticky top-0 w-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] z-[1000] transition-all duration-300 font-sans">
      <nav className="w-full">
        <div
          className="
            flex justify-between items-center
            w-full mx-auto
            px-4 sm:px-6 lg:px-8
            py-3
            gap-4
            flex-nowrap

            max-w-[100%]

            min-[1600px]:max-w-[1700px]
            min-[1900px]:max-w-[2000px]
            min-[2200px]:max-w-[2300px]
            min-[2400px]:max-w-[2500px]

            min-[969px]:max-[1100px]:gap-2
            min-[969px]:max-[1100px]:px-4

            max-[968px]:py-2
            max-[968px]:px-5

            max-[480px]:px-4
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="
              relative z-[1002]
              flex items-center
              transition-transform duration-300
              hover:scale-105
              shrink-0

              h-[72px]

              min-[969px]:max-[1100px]:h-[60px]

              min-[1600px]:h-[90px]
              min-[2200px]:h-[110px]

              max-[968px]:h-[58px]
              max-[480px]:h-[52px]
            "
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Company Logo"
              className="
                h-[90px]
                w-auto
                object-contain
                block

                max-w-[220px]

                min-[969px]:max-[1100px]:h-[70px]
                min-[969px]:max-[1100px]:max-w-[150px]

                min-[1600px]:h-[110px]
                min-[1600px]:max-w-[260px]

                min-[2200px]:h-[130px]
                min-[2200px]:max-w-[320px]

                max-[968px]:h-[70px]
                max-[968px]:max-w-[160px]

                max-[480px]:h-[58px]
                max-[480px]:max-w-[130px]
              "
            />
          </Link>

          {/* Navigation */}
          <ul
            className={`
              flex list-none items-center justify-center
              flex-1
              gap-2
              m-0 p-0

              min-[1101px]:gap-10
              min-[1400px]:gap-10
              min-[2200px]:gap-20

              min-[969px]:max-[1100px]:gap-[20px]

              max-[968px]:fixed
              max-[968px]:top-0
              max-[968px]:left-0
              max-[968px]:flex-col
              max-[968px]:bg-white
              max-[968px]:w-full
              max-[968px]:max-w-[320px]
              max-[968px]:h-screen
              max-[968px]:pt-24
              max-[968px]:px-6
              max-[968px]:pb-8
              max-[968px]:shadow-[4px_0_20px_rgba(0,0,0,0.15)]
              max-[968px]:transition-all
              max-[968px]:duration-300
              max-[968px]:z-[1001]
              max-[968px]:overflow-y-auto
              max-[968px]:items-start
              max-[968px]:justify-start

              ${
                isMenuOpen
                  ? 'max-[968px]:translate-x-0'
                  : 'max-[968px]:-translate-x-full'
              }
            `}
          >
            {[
              'About',
              'Course',
              'Online',
              'Gallery',
              'Meditation',
              'Retreat',
              'Contact',
            ].map((item) => (
              <li
                key={item}
                className="relative w-full min-[969px]:w-auto"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={navLinkStyles(`/${item.toLowerCase()}`)}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div
            className="
              flex items-center
              gap-3
              shrink-0

              min-[969px]:max-[1100px]:gap-2
            "
          >
            {/* Desktop Button */}
            <a
              href="#"
              className="
                border border-[#3d4a3e]
                text-[#3d4a3e]
                hover:bg-[#3d4a3e]
                hover:text-[#f5f2eb]
                transition-colors duration-200

                px-4 py-2
                text-[11px]
                tracking-[0.15em]
                font-medium
                whitespace-nowrap

                hidden sm:inline-block

                min-[2500px]:px-10
                min-[2500px]:py-5
                min-[2500px]:text-[18px]
                min-[2500px]:tracking-[0.2em]
              "
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              }}
            >
              APPLY NOW
            </a>

            {/* Mobile Button */}
            <a
              href="#"
              className="
                sm:hidden
                border border-[#3d4a3e]
                text-[#3d4a3e]
                px-3 py-1
                text-[11px]
              "
            >
              APPLY NOW
            </a>

            {/* Hamburger — fixed smooth animation */}
            <button
              className="
                hidden max-[968px]:flex
                flex-col justify-center items-center
                bg-transparent border-none
                cursor-pointer
                p-2
                z-[1002]
                relative
                w-10 h-10
              "
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {/* Top bar */}
              <span
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: '2.5px',
                  borderRadius: '9999px',
                  backgroundColor: isMenuOpen ? '#b4533c' : '#000',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  transform: isMenuOpen
                    ? 'translateY(0px) rotate(45deg)'
                    : 'translateY(-8px) rotate(0deg)',
                }}
              />

              {/* Middle bar */}
              <span
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: '2.5px',
                  borderRadius: '9999px',
                  backgroundColor: isMenuOpen ? '#b4533c' : '#000',
                  transition: 'opacity 0.3s ease, background-color 0.3s ease',
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />

              {/* Bottom bar */}
              <span
                style={{
                  position: 'absolute',
                  width: '26px',
                  height: '2.5px',
                  borderRadius: '9999px',
                  backgroundColor: isMenuOpen ? '#b4533c' : '#000',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  transform: isMenuOpen
                    ? 'translateY(0px) rotate(-45deg)'
                    : 'translateY(8px) rotate(0deg)',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0
          bg-black/60
          backdrop-blur-[2px]
          z-[999]
          transition-opacity duration-300

          ${
            isMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
        onClick={closeMenu}
      />
    </header>
  );
};

export default Header;