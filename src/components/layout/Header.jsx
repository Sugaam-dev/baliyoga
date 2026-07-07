import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { PROGRAM_LINKS, RETREAT_LINKS, buildPath } from '../../data/locations';

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

  const isNavItemActive = (item) => {
    if (item.path !== '/' && location.pathname.startsWith(item.path)) return true;
    if (location.pathname === item.path) return true;

    if (item.type && MENU_CONTENT[item.type]) {
      return MENU_CONTENT[item.type].columns.some(col => 
        col.items.some(subItem => location.pathname.startsWith(subItem.link))
      );
    }
    return false;
  };

  // Dynamic mega-menu contents built from the central locations mapping
  const MENU_CONTENT = {
    ytt: {
      title: "Yoga Teacher Training",
      columns: [
        { category: "Multi-Style YTTC", items: PROGRAM_LINKS.bali.ytt.map(item => ({ name: item.label, link: buildPath("ytt", item.path) })) },
        { category: "KUNDALINI YTTC", items: PROGRAM_LINKS.bali.kundalini.map(item => ({ name: item.label, link: buildPath("kundalini", item.path) })) },
        { category: "SHORT COURSES", items: PROGRAM_LINKS.bali["short-courses"].map(item => ({ name: item.label, link: buildPath("short-courses", item.path) })) },
        { category: "SPECIALIZATION", items: PROGRAM_LINKS.bali.specialization.map(item => ({ name: item.label, link: buildPath("specialization", item.path) })) },
      ]
    },
    wellness: {
      title: "Wellness Retreats",
      columns: [
        { category: "Yoga Retreats", items: RETREAT_LINKS.bali.map(item => ({ name: item.label, link: buildPath("retreats", item.path) })) },
        { category: "Meditation & Sound", items: RETREAT_LINKS.bali.map(item => ({ name: item.label, link: buildPath("retreats", item.path) })) },
      ]
    }
  };

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
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-100 z-[1000]"
        style={{
          fontFamily: "Poppins, BlackMango, Inter, system-ui, sans-serif",
          width: '100%',
        }}
      >
        <nav className="w-full relative bg-white z-[1002]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 py-1.5 xl:py-2 flex justify-between items-center gap-2 xl:gap-3 max-w-[1440px] min-[2000px]:max-w-[1920px]">

            {/* Logo */}
            <Link
              to="/"
              className="relative z-[1002] flex items-center transition-transform duration-300 hover:scale-105 shrink-0"
              onClick={closeMenu}
            >
              <img
                src="/logo.png"
                alt="Bali Yoga Kendra Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-auto object-contain block max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]"
              />
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center justify-end flex-1 gap-1 xl:gap-3 2xl:gap-5 m-0 p-0 list-none">
              {navItems.map((item) => {
                const hasDropdown = !!item.type;
                const isCurrentActive = activeDropdown === item.type;
                const isLinkActive = isNavItemActive(item);
                const isParentHighlighted = isLinkActive || (hasDropdown && isCurrentActive);
                
                return (
                  <li
                    key={item.label}
                    className="flex items-center relative py-2 group"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item.type)}
                  >
                    {hasDropdown ? (
                      <button
                        onClick={() => setActiveDropdown(isCurrentActive ? null : item.type)}
                        className={`flex items-center gap-1.5 px-2 text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-wide transition-colors duration-300 rounded-md whitespace-nowrap cursor-pointer ${
                          isParentHighlighted ? 'text-[#c38b5f]' : 'text-stone-600 hover:text-[#c38b5f]'
                        }`}
                        style={{ paddingBlock: '8px' }}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${isCurrentActive || isLinkActive ? 'rotate-180 text-[#c38b5f]' : 'text-stone-500 group-hover:text-[#c38b5f]'}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`relative flex items-center px-2 text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] font-medium tracking-wide transition-colors duration-300 rounded-md whitespace-nowrap ${
                          isLinkActive ? 'text-[#c38b5f]' : 'text-stone-600 hover:text-[#c38b5f]'
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

            {/* Right side Actions */}
            <div className="flex items-center gap-2 xl:gap-4 shrink-0">
              <a
                href="#apply"
                className="hidden lg:inline-block border border-[#c38b5f] text-[#c38b5f] hover:bg-[#c38b5f] hover:text-white transition-all duration-300 px-5 py-2.5 text-xs tracking-[0.15em] font-bold rounded-full shadow-sm hover:shadow-md"
              >
                APPLY NOW
              </a>

              {/* Hamburger Mobile Icon */}
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

          {/* DESKTOP MEGA MENU CARD */}
          {activeDropdown && MENU_CONTENT[activeDropdown] && (
            <div
              className="hidden lg:block absolute top-full left-0 w-full z-[1001]"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* FIXED FIXED: Pure card ki width ab dynamic columns ke hisab se set hogi, taaki right side blank na rahe! */}
              <div
                className="mx-auto mt-2 rounded-lg overflow-hidden shadow-2xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#182222',
                  width: '95%',
                  maxWidth: 
                    MENU_CONTENT[activeDropdown].columns.length === 2 ? '640px' :
                    MENU_CONTENT[activeDropdown].columns.length === 3 ? '900px' : '1200px'
                }}
              >
                <div className="px-6 py-10 xl:px-10 xl:py-12">
                  <div 
                    className={`grid ${
                      MENU_CONTENT[activeDropdown].columns.length === 2 ? 'grid-cols-2' :
                      MENU_CONTENT[activeDropdown].columns.length === 3 ? 'grid-cols-3' : 'grid-cols-4'
                    } gap-x-8 xl:gap-x-12 gap-y-8`}
                  >
                    {MENU_CONTENT[activeDropdown].columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col min-w-0">
                        <h4
                          className="text-[14px] xl:text-[16px] font-bold uppercase tracking-[0.05em] pb-3 mb-3 border-b border-gray-700"
                          style={{ color: '#e5a93b' }}
                        >
                          {col.category}
                        </h4>
                        <ul className="space-y-3.5 list-none p-0 m-0">
                          {col.items.map((sub, itemIdx) => {
                            const isSubActive = location.pathname === sub.link;
                            return (
                              <li key={itemIdx}>
                                <Link
                                  to={sub.link}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`block text-[13px] xl:text-[14px] font-normal transition-colors duration-200 uppercase tracking-wide leading-tight ${
                                    isSubActive ? 'text-[#e5a93b] font-semibold' : 'text-white hover:text-[#e5a93b]'
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* MOBILE DRAWER RESPONSE */}
        <div
          className={`fixed inset-y-0 left-0 w-full z-[1005] flex flex-col transition-transform duration-300 transform lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ backgroundColor: '#182222' }}
        >
          {/* Drawer Header */}
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

          {/* Mobile Scroll Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-0 list-none p-0 m-0">
              {navItems.map((item) => {
                const isExpandable = !!item.type && !!MENU_CONTENT[item.type];
                const isSectionOpen = mobileExpandedSection === item.type;
                const isParentActive = isNavItemActive(item);

                return (
                  <li key={item.label} className="border-b" style={{ borderColor: 'rgba(229,169,59,0.2)' }}>
                    {isExpandable ? (
                      <div>
                        <button
                          onClick={() => setMobileExpandedSection(isSectionOpen ? null : item.type)}
                          className="w-full flex justify-between items-center py-4 text-[17px] font-normal uppercase tracking-wide transition-colors duration-200"
                          style={{ color: isParentActive ? '#e5a93b' : isSectionOpen ? '#e5a93b' : '#ffffff' }}
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
                                    {col.items.map((sub, sIdx) => {
                                      const isSubActive = location.pathname === sub.link;
                                      return (
                                        <li key={sIdx}>
                                          <Link
                                            to={sub.link}
                                            onClick={closeMenu}
                                            className={`block text-[13px] font-normal uppercase tracking-wide leading-snug transition-colors duration-200 ${
                                              isSubActive ? 'text-[#e5a93b] font-semibold' : 'text-white'
                                            }`}
                                          >
                                            {sub.name}
                                          </Link>
                                        </li>
                                      );
                                    })}
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
                        style={{ color: isParentActive ? '#e5a93b' : '#ffffff' }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

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

        {/* Mobile Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1004] lg:hidden"
            onClick={closeMenu}
          />
        )}
      </header>

      {/* Header Layout Spacer */}
      <div className="w-full pt-[52px] sm:pt-[60px] lg:pt-[80px] xl:pt-[96px]" aria-hidden="true" />
    </>
  );
};

export default Header;