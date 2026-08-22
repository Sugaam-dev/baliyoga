import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, BookOpen, MessageSquare, MapPin, ChevronDown } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import { submitToWeb3Forms } from "../../../utils/web3forms";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "bali",
    subject: "Yoga Teacher Training (200 / 300 / 500 Hour YTT)",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);

  const locations = [
    { value: "bali", label: "Bali, Indonesia" },
    { value: "rishikesh", label: "Rishikesh, India" },
    { value: "mysuru", label: "Mysuru, India" }
  ];

  const subjects = [
    "Yoga Teacher Training (200 / 300 / 500 Hour YTT)",
    "Kundalini Yoga Teacher Training",
    "Wellness & Sound Healing Retreats",
    "Short Yoga Courses & Workshops",
    "Accommodation & Facility Questions",
    "General Question"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newErrors = {};
    if (formData.phone) {
      const cleanPhone = formData.phone.trim();
      const digitsOnly = cleanPhone.replace(/\D/g, "");
      if (digitsOnly.length > 3) {
        if (!isValidPhoneNumber(cleanPhone)) {
          newErrors.phone = "Please enter a valid phone number for this country.";
        }
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await submitToWeb3Forms(
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          subject: formData.subject,
          message: formData.message,
        },
        `Bali Yoga Kendra Inquiry - ${formData.subject}`
      );

      if (res.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(res.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to submit. Please try again or message on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-14 md:py-20 bg-stone-50 border-t border-stone-100">
      <style>{`
        /* Remove default borders and backgrounds from react-international-phone */
        .react-international-phone-input-container {
          border: none !important;
          background: transparent !important;
          width: 100% !important;
        }
        .react-international-phone-country-selector-button {
          border: none !important;
          background: transparent !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }
        .react-international-phone-input {
          border: none !important;
          background: transparent !important;
          width: 100% !important;
          outline: none !important;
        }
        .react-international-phone-country-selector-dropdown {
          z-index: 50 !important;
          border-radius: 12px !important;
          border: 1px solid #e7e5e4 !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
          padding: 6px 0 !important;
          background-color: white !important;
        }
        .react-international-phone-country-selector-dropdown__list-item {
          padding: 10px 16px !important;
          font-family: inherit !important;
          font-size: 14px !important;
          color: #44403c !important;
        }
        .react-international-phone-country-selector-dropdown__list-item:hover {
          background-color: #f5f5f4 !important;
        }
      `}</style>
      <div className="max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10">
        
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-stone-100">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#854417]">
              Admissions & Enrollment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#182222]">
              Send Us an Inquiry
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-serif italic max-w-lg mx-auto">
              Fill out the form below to receive detailed course curriculums, batch availability, and retreat pricing.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 px-6 bg-[#854417]/5 rounded-2xl border border-[#854417]/20 space-y-4">
              <div className="w-16 h-16 bg-[#854417] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#182222]">
                Thank You, {formData.name}!
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Your inquiry has been received successfully. Our admissions counselor will contact you via email or WhatsApp within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="inline-block mt-4 text-xs font-bold tracking-wider text-[#854417] uppercase hover:underline cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Full Name <span className="text-[#c38b5f]">*</span>
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c38b5f] transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Email Address <span className="text-[#c38b5f]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c38b5f] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    WhatsApp / Phone Number
                  </label>
                  <div className="relative">
                    <div className="flex items-center w-full bg-stone-50 border border-stone-200 rounded-xl focus-within:bg-white focus-within:ring-2 focus-within:ring-[#c38b5f] focus-within:border-transparent transition-all">
                      <PhoneInput
                        defaultCountry="in"
                        value={formData.phone}
                        onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                        className="w-full flex"
                        inputClassName="w-full pl-3 pr-4 py-3.5 text-sm font-medium text-stone-800 bg-transparent outline-none border-0"
                        countrySelectorStyleProps={{
                          buttonClassName: "bg-transparent border-0 hover:bg-stone-100/50 transition-all p-3.5 flex items-center justify-center min-w-[56px] h-full rounded-l-xl cursor-pointer"
                        }}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Location of Interest */}
              <div className="space-y-2 relative">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Location Of Interest
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-stone-400 absolute left-4 top-3.5 pointer-events-none z-20" />
                  
                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLocationDropdownOpen(!isLocationDropdownOpen);
                      setIsSubjectDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-[#182222] hover:bg-stone-100/50 transition-all text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c38b5f] relative z-10"
                  >
                    <span>
                      {locations.find((l) => l.value === formData.location)?.label || "Select Location"}
                    </span>
                    <ChevronDown size={16} className={`text-stone-500 transition-transform duration-250 ${isLocationDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Overlay to close dropdown when clicking outside */}
                  {isLocationDropdownOpen && (
                    <div className="fixed inset-0 z-10" onClick={() => setIsLocationDropdownOpen(false)} />
                  )}

                  {/* Dropdown Options */}
                  {isLocationDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200/80 rounded-xl shadow-xl z-30 overflow-hidden py-1.5 animate-fadeIn">
                      {locations.map((loc) => (
                        <button
                          key={loc.value}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, location: loc.value }));
                            setIsLocationDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-left hover:bg-stone-50 cursor-pointer ${
                            formData.location === loc.value ? "bg-[#c38b5f]/5 text-[#c38b5f] font-bold" : "text-stone-700 font-medium"
                          }`}
                        >
                          <span>{loc.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Subject Selector */}
              <div className="space-y-2 relative">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Program Of Interest
                </label>
                <div className="relative">
                  <BookOpen className="w-5 h-5 text-stone-400 absolute left-4 top-3.5 pointer-events-none z-20" />
                  
                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubjectDropdownOpen(!isSubjectDropdownOpen);
                      setIsLocationDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-[#182222] hover:bg-stone-100/50 transition-all text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c38b5f] relative z-10"
                  >
                    <span className="truncate mr-2">
                      {formData.subject}
                    </span>
                    <ChevronDown size={16} className={`text-stone-500 flex-shrink-0 transition-transform duration-250 ${isSubjectDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Overlay to close dropdown when clicking outside */}
                  {isSubjectDropdownOpen && (
                    <div className="fixed inset-0 z-10" onClick={() => setIsSubjectDropdownOpen(false)} />
                  )}

                  {/* Dropdown Options */}
                  {isSubjectDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200/80 rounded-xl shadow-xl z-30 overflow-hidden py-1.5 max-h-60 overflow-y-auto animate-fadeIn">
                      {subjects.map((sub, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, subject: sub }));
                            setIsSubjectDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-left hover:bg-stone-50 cursor-pointer ${
                            formData.subject === sub ? "bg-[#c38b5f]/5 text-[#c38b5f] font-bold" : "text-stone-700 font-medium"
                          }`}
                        >
                          <span>{sub}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Your Message / Queries <span className="text-[#c38b5f]">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your yoga background, target dates, or specific questions..."
                    className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c38b5f] transition-all"
                  ></textarea>
                </div>
              </div>

              {submitError && (
                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold text-center">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#854417] text-white py-4 rounded-xl font-extrabold text-xs tracking-[0.15em] uppercase hover:bg-[#6e3712] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
