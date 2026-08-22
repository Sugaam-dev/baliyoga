import React, { useState, useEffect, useRef } from 'react';

// Importing local images from your project's images folder
import yogaAllianceLogo from "../../assets/images/home/yogaicon.webp"; 
import rys100 from "../../assets/images/home/100.webp";
import rys200 from "../../assets/images/home/200.webp";
import rys300 from "../../assets/images/home/300yy.webp";
import rys500 from "../../assets/images/home/yoga500.webp";
import yacep from "../../assets/images/home/YACEP.webp";

const TrustBanner = () => {
  const certificates = [
    { id: 1, name: 'Yoga Alliance', src: yogaAllianceLogo },
    { id: 2, name: 'RYS 100', src: rys100 },
    { id: 3, name: 'RYS 200', src: rys200 },
    { id: 4, name: 'RYS 300', src: rys300 },
    { id: 5, name: 'RYS 500', src: rys500 },
    { id: 6, name: 'YACEP', src: yacep },
  ];

  const bannerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [brokenImages, setBrokenImages] = useState({});
  
  // Counter states
  const [studentCount, setStudentCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0.0);

  // 1. Intersection Observer to trigger animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
          setStudentCount(0);
          setRatingCount(0.0);
        }
      },
      { threshold: 0.1 } 
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. requestAnimationFrame counting thread
  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp = null;
    const duration = 1500; // slightly longer for premium feel

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
      const easedProgress = easeOutQuad(progress);

      setStudentCount(Math.floor(easedProgress * 1000)); 
      setRatingCount(parseFloat((easedProgress * 4.9).toFixed(1)));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isIntersecting]);

  const handleImageError = (id) => {
    setBrokenImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div 
      ref={bannerRef} 
      className="w-full bg-white border-y border-stone-200/60 py-6 md:py-8 px-4 sm:px-6 md:px-12 selection:bg-[#a6734c]/10 selection:text-[#a6734c] overflow-hidden"
    >
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Left Side: Stats and Ratings (Fixed sizes and tabular-nums to prevent shifting) */}
        <div className="flex flex-row items-center justify-center lg:justify-start w-full lg:w-auto gap-6 sm:gap-10 md:gap-14">
          
          {/* Stat 1 */}
          <div className={`flex flex-col items-center text-center transition-all duration-700 delay-100 transform ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-1.5">
              Graduated Yogis
            </p>
            <div className="flex items-baseline justify-center">
              {/* min-w in character units (ch) keeps spacing fixed based on characters without wrapping */}
              <span className="min-w-[4.2ch] inline-block text-center tabular-nums text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-850">
                {studentCount.toLocaleString()}
              </span>
              <span className="text-xl sm:text-2xl font-semibold text-[#854417]">+</span>
            </div>
          </div>

          {/* Divider (Hidden on mobile) */}
          <div className={`hidden sm:block h-12 md:h-14 w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent transition-opacity duration-500 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} />

          {/* Stat 2 */}
          <div className={`flex flex-col items-center text-center transition-all duration-700 delay-200 transform ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-1.5">
              Top Tier Reviews
            </p>
            <div className="flex items-center justify-center gap-3">
              {/* min-w in character units (ch) keeps spacing fixed based on characters without wrapping */}
              <span className="min-w-[3.2ch] inline-block text-center tabular-nums text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-850">
                {ratingCount.toFixed(1)}
              </span>
              
              {/* Stars container with clean flex layout */}
              <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-stone-200/50 shadow-sm flex-shrink-0">
                {[...Array(5)].map((_, i) => {
                  // Calculate dynamic percentage fill for each star based on ratingCount
                  const fillPercent = Math.max(0, Math.min(1, ratingCount - i)) * 100;
                  
                  return (
                    <svg 
                      key={i} 
                      className="w-3.5 h-3.5 flex-shrink-0" 
                      viewBox="0 0 20 20"
                    >
                      <defs>
                        {/* Unique gradient id based on star index and current rating to force recalculation */}
                        <linearGradient id={`star-grad-${i}-${ratingCount}`}>
                          <stop offset={`${fillPercent}%`} stopColor="#f59e0b" />
                          <stop offset={`${fillPercent}%`} stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path 
                        fill={`url(#star-grad-${i}-${ratingCount})`} 
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                      />
                    </svg>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Certified Badges (Grid layout to prevent overflow on mobile) */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0">
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {certificates.map((cert, index) => {
              const delayClass = [
                'delay-150', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-700'
              ][index] || 'delay-100';

              return (
                <div 
                  key={cert.id} 
                  className={`h-9 sm:h-12 md:h-14 flex items-center justify-center transition-all duration-700 transform hover:-translate-y-1 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${delayClass}`}
                >
                  {brokenImages[cert.id] ? (
                    <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-white text-stone-600 px-3 py-1.5 border border-stone-200 rounded-md">
                      {cert.name}
                    </span>
                  ) : (
                    <img
                      src={cert.src}
                      alt={cert.name}
                      width="56"
                      height="56"
                      loading="lazy"
                      style={{ width: "56px", height: "56px", aspectRatio: "1 / 1", display: "inline-block" }}
                      className="w-14 h-14 aspect-square object-contain mix-blend-multiply opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer"
                      onError={() => handleImageError(cert.id)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustBanner;
