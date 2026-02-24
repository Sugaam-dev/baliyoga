import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';
// import logo from '../Footer/images/header.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  // Shared Link styles to keep code clean
  const navLinkStyles = (path) => `
    relative block py-3 px-5 text-[1.1rem] font-medium tracking-tight transition-colors duration-300 rounded-lg
    text-gray-700 hover:text-[#0F4C81]
    min-[969px]:after:content-[''] min-[969px]:after:absolute min-[969px]:after:bottom-2 min-[969px]:after:left-1/2 min-[969px]:after:-translate-x-1/2 min-[969px]:after:h-[2px] min-[969px]:after:bg-[#0F4C81] min-[969px]:after:transition-transform min-[969px]:after:duration-300 min-[969px]:after:origin-center
    ${isActive(path) 
      ? 'text-[#0F4C81] min-[969px]:after:w-[40%] min-[969px]:after:scale-x-100 max-[968px]:after:scale-x-100 font-semibold' 
      : 'min-[969px]:after:w-[40%] min-[969px]:after:scale-x-0 hover:after:scale-x-100 max-[968px]:after:scale-x-0'
    }
    max-[968px]:w-full max-[968px]:px-4 max-[968px]:after:content-[''] max-[968px]:after:absolute max-[968px]:after:bottom-2 max-[968px]:after:left-4 max-[968px]:after:w-[35px] max-[968px]:after:h-[2px] max-[968px]:after:bg-[#0F4C81] max-[968px]:after:origin-left
  `;

  return (
    <header className="sticky top-0 w-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] z-[1000] transition-all duration-300 font-sans">
      <nav className="p-0">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto py-[0.8rem] px-4 sm:px-10 gap-8 flex-wrap 
                        min-[1025px]:max-[1280px]:px-6 min-[1025px]:max-[1280px]:gap-6
                        min-[969px]:max-[1024px]:py-[10px] min-[969px]:max-[1024px]:px-6 min-[969px]:max-[1024px]:gap-4
                        max-[968px]:py-[5px] max-[968px]:px-6
                        max-[480px]:px-4">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0 h-20 
                       min-[1025px]:max-[1280px]:h-[70px] min-[969px]:max-[1024px]:h-[65px] max-[968px]:h-[60px] max-[480px]:h-20"
            onClick={closeMenu}
          >
            {/* <img 
              src="https://via.placeholder.com/220x100" // Replace with {logo}
              alt="Company Logo" 
              className="h-[100px] w-auto max-w-[220px] object-contain block align-middle
                         min-[1025px]:max-[1280px]:h-[90px] min-[1025px]:max-[1280px]:max-w-[180px]
                         min-[969px]:max-[1024px]:h-[85px] min-[969px]:max-[1024px]:max-w-[160px]
                         max-[968px]:h-[75px] max-[968px]:max-w-[170px]
                         max-[480px]:h-[80px] max-[480px]:max-w-[150px]"
            /> */}
            <img 
                src="/logo.png"
                alt="Company Logo" 
                className="h-[100px] w-auto max-w-[220px] object-contain block align-middle
                          min-[1025px]:max-[1280px]:h-[90px] min-[1025px]:max-[1280px]:max-w-[180px]
                          min-[969px]:max-[1024px]:h-[85px] min-[969px]:max-[1024px]:max-w-[160px]
                          max-[968px]:h-[75px] max-[968px]:max-w-[170px]
                          max-[480px]:h-[80px] max-[480px]:max-w-[150px]"
              />

          </Link>

          {/* Navigation Menu */}
          <ul className={`
            flex list-none m-0 p-0 items-center flex-1 justify-center gap-4
            min-[1025px]:max-[1280px]:gap-2 min-[969px]:max-[1024px]:gap-[0.3rem]
            max-[968px]:fixed max-[968px]:top-0 max-[968px]:flex-col max-[968px]:bg-white max-[968px]:w-full max-[968px]:max-w-[320px] max-[968px]:h-screen max-[968px]:pt-20 max-[968px]:px-6 max-[968px]:pb-8 max-[968px]:shadow-[4px_0_20px_rgba(0,0,0,0.15)] max-[968px]:transition-[left] max-[968px]:duration-400 max-[968px]:ease-[cubic-bezier(0.4,0,0.2,1)] max-[968px]:z-[1001] max-[968px]:overflow-y-auto max-[968px]:items-start max-[968px]:justify-start max-[968px]:gap-[0.3rem]
            max-[480px]:max-w-[260px]
            ${isMenuOpen ? 'max-[968px]:left-0' : 'max-[968px]:-left-full'}
          `}>
            {['Home', 'About', 'School', 'Students&Parents','College&University','Contact'].map((item) => (
              <li key={item} className="relative w-full min-[969px]:w-auto">
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={navLinkStyles(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* Mobile Contact Section */}
            {/* <li className="hidden max-[968px]:block border-t border-gray-200 mt-8 pt-8 w-full">
              <div className="flex items-center gap-[0.6rem] py-[0.9rem] px-4 text-gray-700 text-[0.95rem] font-medium mb-6 bg-[#0F4C81]/[0.06] rounded-lg border-l-4 border-[#0F4C81]">
                <MapPin size={18} className="text-[#0F4C81] shrink-0" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex gap-4 justify-center px-4 flex-wrap">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-700 border-2 border-gray-200 transition-all active:bg-[#0F4C81] active:text-white active:border-[#0F4C81] active:scale-95 sm:hover:bg-[#0F4C81] sm:hover:text-white sm:hover:border-[#0F4C81] sm:hover:scale-105 sm:hover:shadow-[0_4px_12px_rgba(15,76,129,0.3)]">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </li> */}
          </ul>

          {/* Desktop Right Side */}
          {/* <div className="flex items-center gap-6 shrink-0 max-[968px]:hidden min-[969px]:max-[1024px]:gap-4">
            <div className="flex items-center gap-[0.4rem] text-gray-700 text-[0.9rem] font-medium">
              <MapPin className="text-[#0F4C81]" size={18} />
              <span className="whitespace-nowrap min-[969px]:max-[1024px]:hidden">Bengaluru, India</span>
            </div>
            <div className="flex gap-[0.6rem] items-center min-[969px]:max-[1024px]:gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-[#0F4C81] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_4px_12px_rgba(15,76,129,0.3)] min-[969px]:max-[1024px]:w-[30px] min-[969px]:max-[1024px]:h-[30px] min-[1025px]:max-[1280px]:w-8 min-[1025px]:max-[1280px]:h-8">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div> */}

          {/* Hamburger Button */}
          <button
            className={`hidden max-[968px]:flex flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1002] relative w-10 h-10 max-[480px]:w-9 max-[480px]:h-9 group`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-[26px] max-[480px]:w-6 h-[2.5px] bg-black rounded-full absolute transition-all duration-300 group-hover:bg-[#0F4C81] ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45 bg-[#0F4C81]' : 'top-3'}`}></span>
            <span className={`w-[26px] max-[480px]:w-6 h-[2.5px] bg-black rounded-full absolute transition-all duration-300 group-hover:bg-[#0F4C81] ${isMenuOpen ? 'opacity-0 w-0' : 'top-1/2 -translate-y-1/2'}`}></span>
            <span className={`w-[26px] max-[480px]:w-6 h-[2.5px] bg-black rounded-full absolute transition-all duration-300 group-hover:bg-[#0F4C81] ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45 bg-[#0F4C81]' : 'bottom-3'}`}></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[999] transition-opacity duration-300 ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}`} 
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;