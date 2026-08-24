import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, CheckCircle, ShieldCheck, ExternalLink, Calendar, Compass, ShieldAlert } from "lucide-react";
import { activitiesData } from "../../data/bali/activities";
import { fetchAndApplyDynamicPrices } from "../../utils/dynamicPrices";

export default function BaliActivityDetailPage() {
  const { slug } = useParams();
  const [, setTick] = useState(0);

  useEffect(() => {
    fetchAndApplyDynamicPrices().then(success => {
      if (success) setTick(prev => prev + 1);
    });
  }, [slug]);
  
  // Find matching activity
  const activity = activitiesData.find(act => act.slug === slug);

  // Scroll to top on page load or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Fallback if not found
  if (!activity) {
    return (
      <main className="bg-[#FAF8F5] min-h-screen flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md shadow-xl border border-stone-200/50 text-center space-y-6">
          <h2 className="text-3xl font-serif text-[#1A2456]">Activity Not Found</h2>
          <p className="text-stone-600 text-sm">
            We couldn't find the activity you're looking for. It may have been moved or renamed.
          </p>
          <Link
            to="/bali-activities"
            className="inline-flex items-center justify-center bg-[#c38b5f] text-white font-bold py-3 px-6 rounded-full hover:bg-[#1A2456] transition-all duration-300 gap-2 cursor-pointer shadow-sm hover:shadow-md"
          >
            Back to Activities
          </Link>
        </div>
      </main>
    );
  }

  // Gallery state
  const [activeImage, setActiveImage] = useState(activity.images[0]);

  // Update active image if activity changes
  useEffect(() => {
    if (activity && activity.images.length > 0) {
      setActiveImage(activity.images[0]);
    }
  }, [activity]);

  return (
    <main className="bg-[#FAF8F5] min-h-screen text-stone-850 pb-24 font-sans">
      {/* 1. Stunning Cover Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[350px] sm:min-h-[450px] md:min-h-[520px] bg-stone-900 overflow-hidden">
        {/* Background Image */}
        <img
          src={activeImage}
          alt={activity.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Elegant Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#182222] via-[#182222]/40 to-transparent" />
        
        {/* Overlaid Title and Info */}
        <div className="absolute bottom-0 left-0 right-0 py-8 md:py-14 px-6 md:px-12 z-10">
          <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[#C8A96A] text-xs font-bold tracking-[0.25em] uppercase bg-white/10 border border-white/20 backdrop-blur-md py-1.5 px-4 rounded-full">
              <Compass size={12} className="text-[#C8A96A]" />
              Sacred Bali Excursion
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white leading-tight drop-shadow-md">
              {activity.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-stone-200">
              <div className="flex items-center gap-1.5">
                <MapPin size={15} className="text-[#C8A96A]" />
                <span className="text-stone-200">{activity.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content Grid Split Layout */}
      <section className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-6 md:px-12 mt-10 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Media Gallery, Overview, Highlights, Inclusions */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview / Description Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/40 shadow-sm space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A2456] border-b border-stone-100 pb-4.5 font-bold">
                Experience Overview
              </h2>
              <p className="text-stone-650 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {activity.longDesc}
              </p>
            </div>

            {/* Highlights Grid Card */}
            {activity.highlights && activity.highlights.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/40 shadow-sm space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1A2456] border-b border-stone-100 pb-4.5 font-bold">
                  Highlights
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {activity.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3.5 items-start text-sm text-stone-600 leading-relaxed">
                      <CheckCircle size={19} className="text-[#c38b5f] flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-stone-750">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Photo Gallery Grid */}
            {activity.images.length > 1 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/40 shadow-sm space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1A2456] border-b border-stone-100 pb-4.5 font-bold">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {activity.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 cursor-pointer transition-all ${
                        activeImage === img ? "border-[#c38b5f] scale-95 shadow-md" : "border-transparent opacity-80 hover:opacity-100 hover:scale-[1.02]"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions Card */}
            {activity.inclusions && activity.inclusions.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/40 shadow-sm space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1A2456] border-b border-stone-100 pb-4.5 font-bold">
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {activity.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex gap-4 items-start text-sm text-stone-600">
                      <ShieldCheck size={20} className="text-[#7BAF8A] flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-stone-750">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Book Tickets & Price Sidebar Card */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-xl lg:sticky lg:top-[120px] z-20 space-y-6 text-center group">
            
            {/* Price Details */}
            <div className="space-y-2">
              <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.15em] block">
                Activity Price
              </span>
              <div className="flex items-baseline justify-center gap-1.5">
                {activity.price ? (
                  <>
                    <span className="text-4xl font-extrabold text-[#1A2456] font-serif">
                      {typeof activity.price === "string" && (activity.price.startsWith("₹") || activity.price.startsWith("$"))
                        ? activity.price
                        : `${activity.currency === "USD" ? "$" : "₹"}${typeof activity.price === "number" ? activity.price.toLocaleString() : activity.price}`}
                    </span>
                    <span className="text-stone-500 text-xs font-semibold">/ person</span>
                  </>
                ) : (
                  <span className="text-3xl font-extrabold text-[#7BAF8A] font-serif">
                    Included / Free
                  </span>
                )}
              </div>
            </div>

            {/* Key Ticket Details */}
            <div className="border-t border-b border-stone-100/80 py-5.5 space-y-4 text-left text-sm text-stone-600 font-medium">
              <div className="flex justify-between items-start gap-4">
                <span>Scheduling</span>
                <span className="font-extrabold text-[#c38b5f] text-right">Contact for dates</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span>Booking Method</span>
                <span className="font-extrabold text-stone-850 text-right">Inquire & reserve</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span>Cancellation</span>
                <span className="font-extrabold text-stone-850 text-right">Flexible changes</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span>Excursion Type</span>
                <span className="font-extrabold text-stone-850 text-right">Private / Small Group</span>
              </div>
            </div>

            {/* Navigate to Contact button */}
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center bg-[#c38b5f] text-white font-extrabold py-4 px-6 rounded-full hover:bg-[#1A2456] transition-all duration-300 gap-2 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contact Us to Book</span>
              <ExternalLink size={15} />
            </Link>

            {/* Security Trust Notice */}
            <div className="flex items-center justify-center gap-2 text-stone-400 text-xs font-semibold">
              <ShieldCheck size={14} className="text-[#7BAF8A]" />
              <span>Bali Yoga Kendra Certified Partner</span>
            </div>
            
            <p className="text-[11px] text-stone-400 leading-relaxed max-w-[240px] mx-auto">
              Please contact our training coordination desk to book your dates and check availability.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
