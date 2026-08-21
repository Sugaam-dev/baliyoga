import React from "react";
import ScrollReveal from "../../../components/shared/ScrollReveal";
import ranjanImg from "../../../assets/images/about/ranjan_sir.jpg";

export default function OurStory({ ourImg }) {
  return (
    <section className="bg-[#FAF8F5] py-8 sm:py-10 md:py-12 border-b border-stone-200/50">
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Welcome block */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
            <div className="lg:col-span-5">
              <div className="border border-stone-200/60 p-2.5 rounded-[36px]">
                <div className="relative h-[360px] sm:h-[440px] w-full rounded-[28px] overflow-hidden shadow-lg bg-[#efe7da]">
                  <img src={ourImg} alt="Welcome to Bali Yoga Kendra" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#854417] mb-3 inline-block">Welcome to Bali Yoga Kendra ✦</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 leading-tight mb-6">
                Welcome to <span className="text-[#854417]">Bali Yoga Kendra</span>
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-4">
                Bali Yoga Kendra is a premier Yoga Alliance Certified Yoga School in Bali, Indonesia, offering authentic Yoga Teacher Training Courses, Meditation Retreats, Wellness Programs, and Spiritual Immersion Experiences for students from around the world. Situated amidst the breathtaking beauty and sacred energy of Bali, our school provides a transformative environment where individuals can deepen their yoga practice, become certified yoga teachers, and embark on a journey of self-discovery.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                Whether you are looking for a 200 Hour Yoga Teacher Training in Bali, an advanced 300 Hour Yoga Teacher Training, a comprehensive 500 Hour Yoga Certification Program, or a rejuvenating Yoga Retreat in Bali, Bali Yoga Kendra offers world-class education rooted in traditional yogic wisdom and modern teaching excellence.
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                Our mission is to help students experience yoga as a complete lifestyle—one that cultivates physical health, mental clarity, emotional balance, spiritual growth, and conscious living.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Inspiration / Founder vision block */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#854417] mb-3 inline-block">
                The Inspiration Behind Bali Yoga Kendra ✦
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 leading-tight mb-6">
                Every great yoga school <span className="text-[#854417]">begins with a vision.</span>
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                Bali Yoga Kendra was founded by Dr. Yogi Ranjan, a highly respected Yoga Teacher, Spiritual Healer, Meditation Practitioner, and Yog Acharya whose life has been dedicated to exploring the profound depths of yogic science and spiritual transformation.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                With more than a decade of experience in Yoga, Meditation, Pranayama, Mindfulness, and Holistic Wellness, Dr. Yogi Ranjan has devoted his life to understanding and sharing the timeless teachings of authentic yoga. His journey began not with the desire to teach, but with a deep inner calling to understand the true purpose of life, consciousness, and human potential.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-4">
                This quest led him across India's most sacred spiritual destinations, including the Himalayas, Rishikesh, Varanasi, and numerous pilgrimage sites where yoga has been practiced for thousands of years. Under the guidance of Himalayan masters, revered gurus, and experienced spiritual teachers, he immersed himself in the study of Hatha Yoga, Raja Yoga, Kundalini Yoga, Meditation, Breathwork, Yoga Philosophy, and Self-Realization.
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                Inspired by his experiences and the transformative power of yoga, he established Bali Yoga Kendra to create a global learning community where authentic yoga education and spiritual growth could flourish.
              </p>
            </div>

            {/* Founder image + bio caption */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="border border-stone-200/60 p-2.5 rounded-[36px]">
                <div className="relative h-[360px] sm:h-[440px] w-full rounded-[28px] overflow-hidden shadow-lg bg-[#efe7da]">
                  <img src={ranjanImg} alt="Dr. Yogi Ranjan - Founder" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
                </div>
              </div>
              {/* Bio below image */}
              <div className="mt-4 px-1">
                <h3 className="text-stone-900 font-serif text-lg font-semibold">Dr. Yogi Ranjan</h3>
                <p className="text-[#854417] text-xs font-bold uppercase tracking-wider mt-0.5 mb-2">Founder & Head Teacher, Bali Yoga Kendra</p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  E-RYT 500 · YACEP · Master in Yoga & Conscious Meditation · Specialist in Pranayama, Breathwork & Vedantic Philosophy.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
