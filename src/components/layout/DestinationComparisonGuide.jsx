import React, { useState } from "react";
import guideImg from "../../assets/mountain.webp";
import { submitToWeb3Forms } from "../../utils/web3forms";
import { CheckCircle2 } from "lucide-react";

const DestinationComparisonGuide = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitting(true);
    setError("");

    try {
      const res = await submitToWeb3Forms(
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        "Download Destination Guide - Bali vs Rishikesh vs Mysore",
        "guide"
      );

      if (res.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
      } else {
        setError(res.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF8F5] py-6 md:py-10 px-4 border-b border-stone-200/50">
      <div className="mx-auto w-full max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] bg-[#FAF8F5]/90 backdrop-blur-md border border-[#e6dccf] rounded-[32px] px-6 sm:px-8 lg:px-12 py-8 sm:py-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
        
        {/* RESPONSIVE GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: IMAGE + TEXT (Spans 7/12 on large screens) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            
            {/* Image Container with rotation decoration */}
            <div className="flex-shrink-0">
              <img
                src={guideImg}
                alt="Free Guide comparison book"
                className="w-24 sm:w-28 md:w-32 rotate-[-8deg] rounded-2xl shadow-2xl border border-stone-200/30"
                loading="lazy"
              />
            </div>

            {/* Content Details */}
            <div className="flex-grow">
              <span className="text-[10px] sm:text-xs text-[#854417] font-bold tracking-[0.2em] uppercase">
                Free Destination Guide ✦
              </span>

              <h3 className="text-[#2f241c] font-serif text-2xl sm:text-3xl font-bold leading-tight mt-2.5">
                Bali vs Rishikesh vs Mysore
              </h3>

              <p className="text-[#7A3B0F] text-sm sm:text-base font-semibold mt-1">
                Which Yoga TTC is Right for You?
              </p>

              <p className="text-stone-600 text-xs sm:text-sm mt-3.5 leading-relaxed max-w-xl mx-auto sm:mx-0">
                Download our detailed comparison guide and discover which yoga
                destination perfectly matches your training goals, budget, and spiritual journey.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: SIGNUP FORM (Spans 5/12 on large screens) */}
          <div className="lg:col-span-5 w-full">
            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                <h4 className="font-bold text-emerald-900 text-base">Guide is on its way!</h4>
                <p className="text-emerald-700 text-xs sm:text-sm">
                  We've sent the comparison guide to your email and WhatsApp. Happy planning!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full">
                
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="w-full px-5 py-3 rounded-full border border-[#e0d6c8] bg-white text-sm text-stone-800 placeholder-stone-400 outline-none focus:ring-2 focus:ring-[#854417] transition-all duration-300 shadow-sm"
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="w-full px-5 py-3 rounded-full border border-[#e0d6c8] bg-white text-sm text-stone-800 placeholder-stone-400 outline-none focus:ring-2 focus:ring-[#854417] transition-all duration-300 shadow-sm"
                  required
                />

                {/* WhatsApp */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  aria-label="WhatsApp Number"
                  className="w-full px-5 py-3 rounded-full border border-[#e0d6c8] bg-white text-sm text-stone-800 placeholder-stone-400 outline-none focus:ring-2 focus:ring-[#854417] transition-all duration-300 shadow-sm"
                  required
                />

                {error && (
                  <p className="text-red-600 text-xs text-center">{error}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1c2e24] hover:bg-[#121f18] text-white py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Sending Guide...</span>
                    </>
                  ) : (
                    <span>Send Me the Guide</span>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default DestinationComparisonGuide;
