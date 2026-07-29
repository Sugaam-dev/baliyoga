import React from "react";
import { MapPin, Navigation, Compass, Sparkles } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-14 md:py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Map Container (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 relative group h-[380px] sm:h-[460px] lg:h-[500px]">
            <iframe
              title="Bali Yoga Kendra Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.471649363066!2d115.2600!3d-8.5069!2m3!1f0!0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d7589d8f8d5%3A0x6b9d62d08a5c4e0!2sUbud%2C%20Gianyar%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              className="w-full h-full border-0 transition-all duration-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-[#182222] text-white px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 shadow-md">
              <MapPin className="w-4 h-4 text-[#e5a93b]" />
              <span>Ubud, Bali, Indonesia</span>
            </div>
          </div>

          {/* Location Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c38b5f]">
                Spiritual Location
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#182222]">
                Location & Directions
              </h2>
            </div>

            <p className="text-stone-600 text-base leading-relaxed">
              Nestled amidst the serene rice terraces and spiritual energy of Ubud, Bali Yoga Kendra provides the ultimate sanctuary for your yoga & meditation practice.
            </p>

            {/* Address Details Card */}
            <div className="space-y-4 bg-stone-50 rounded-2xl p-6 border border-stone-200/60">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#c38b5f]/10 text-[#c38b5f] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#182222]">Sacred Sanctuary Address</h4>
                  <p className="text-sm text-stone-600 font-medium">
                    Jalan Nyuh Kuning, Ubud, Gianyar Regency, Bali 80571, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-200/60">
                <div className="w-10 h-10 rounded-xl bg-[#c38b5f]/10 text-[#c38b5f] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#182222]">Landmark Nearby</h4>
                  <p className="text-sm text-stone-600 font-medium">
                    5-minute walk from Sacred Monkey Forest Sanctuary, Ubud Cultural Center.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Ubud,Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#c38b5f] text-white px-7 py-3.5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-[#b0784c] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
