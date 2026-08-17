import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone,MapPin, BookOpen, MessageSquare } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    subject: "Yoga Teacher Training (YTT)",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email ||!formData.location|| !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-14 md:py-20 bg-stone-50 border-t border-stone-100">
      <div className="max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10">
        
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-stone-100">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c38b5f]">
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
            <div className="text-center py-12 px-6 bg-[#c38b5f]/5 rounded-2xl border border-[#c38b5f]/20 space-y-4">
              <div className="w-16 h-16 bg-[#c38b5f] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#182222]">
                Thank You, {formData.name}!
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto">
                Your inquiry has been received successfully. Our admissions counselor will contact you via email or WhatsApp within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-block mt-4 text-xs font-bold tracking-wider text-[#c38b5f] uppercase hover:underline"
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
                    <Phone className="w-5 h-5 text-stone-400 absolute left-4 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c38b5f] transition-all"
                    />
                  </div>
                </div>
              </div>
              
             {/* Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                 Location
                </label>
                <div className="relative">
                  <MapPin className="w-5 h-5 text-stone-400 absolute left-4 top-3.5 pointer-events-none" />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c38b5f] transition-all appearance-none cursor-pointer"
                  >
                    <option>Bali</option>
                    <option>Rishikesh</option>
                    <option>Mysuru</option>
                    <option>Changmai</option>
                  </select>
                </div>
              </div>    


              {/* Subject Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Program Of Interest
                </label>
                <div className="relative">
                  <BookOpen className="w-5 h-5 text-stone-400 absolute left-4 top-3.5 pointer-events-none" />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium text-stone-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c38b5f] transition-all appearance-none cursor-pointer"
                  >
                    <option>Yoga Teacher Training (200 / 300 / 500 Hour YTT)</option>
                    <option>Kundalini Yoga Teacher Training</option>
                    <option>Wellness & Sound Healing Retreats</option>
                    <option>Short Yoga Courses & Workshops</option>
                    <option>Accommodation & Facility Questions</option>
                    <option>General Question</option>
                  </select>
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#c38b5f] text-white py-4 rounded-xl font-extrabold text-xs tracking-[0.15em] uppercase hover:bg-[#b0784c] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
