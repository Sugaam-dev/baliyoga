import React, { useState, useEffect, useRef } from "react";

/**
 * MobileCarousel - A responsive wrapper component.
 * Renders a swipeable, auto-scrolling carousel on mobile/tablet screens (< md)
 * with a seamless forward-infinite loop, falling back to a grid layout on desktop (>= md).
 */
const MobileCarousel = ({ items, renderItem, className = "", gridClass = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!items || items.length === 0) return null;

  // Append a clone of the first item to the end for a seamless forward loop transition
  const displayItems = items.length > 1 ? [...items, items[0]] : items;

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 4500); // Transition every 4.5s
    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  // Hook to handle reset when reaching the cloned element at the end
  useEffect(() => {
    if (items.length <= 1) return;
    if (activeIndex === displayItems.length - 1) {
      // Once translation to clone completes (500ms), snap back to real index 0 without animation
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, displayItems.length, items.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (items.length <= 1) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) {
      // Swipe left -> Next slide
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    } else if (diff < -40) {
      // Swipe right -> Previous slide
      setIsTransitioning(true);
      if (activeIndex === 0) {
        // Snap instantly to the end clone, then transition back to items.length - 1
        setIsTransitioning(false);
        setActiveIndex(items.length);
        const timer = setTimeout(() => {
          setIsTransitioning(true);
          setActiveIndex(items.length - 1);
        }, 20);
        return () => clearTimeout(timer);
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    }
    const resumeTimer = setTimeout(() => setIsPaused(false), 2000);
    return () => clearTimeout(resumeTimer);
  };

  const goToSlide = (idx) => {
    setIsTransitioning(true);
    setActiveIndex(idx);
  };

  // Map active index to dot highlights (the clone maps to dot index 0)
  const activeDotIndex = activeIndex % items.length;

  return (
    <div className={className}>
      {/* Mobile/Tablet view: Autoplay Carousel with seamless wrap-around */}
      <div
        className="block md:hidden relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: isTransitioning ? "transform 500ms ease-out" : "none",
          }}
        >
          {displayItems.map((item, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-1">
              {renderItem(item, idx % items.length)}
            </div>
          ))}
        </div>

        {/* Indicator dots */}
        {items.length > 1 && (
          <div className="flex justify-center items-center gap-1.5 mt-5">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`p-2 flex items-center justify-center cursor-pointer border-0 bg-transparent min-w-[24px] min-h-[24px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A2456]`}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    activeDotIndex === idx ? "w-6 bg-[#1A2456]" : "w-1.5 bg-stone-300"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop view: Standard grid */}
      <div className={`hidden md:grid ${gridClass}`}>
        {items.map((item, idx) => renderItem(item, idx))}
      </div>
    </div>
  );
};

export default MobileCarousel;
