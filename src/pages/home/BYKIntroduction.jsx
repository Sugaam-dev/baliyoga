import React from "react";
import ScrollReveal from "../../components/shared/ScrollReveal";

const BYKIntroduction = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200/50">
      {/* Ambient background accents */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#c38b5f]/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#1c2e24]/6 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-5 sm:px-10 lg:px-20 py-8 md:py-10 md:py-10 md:py-12 lg:py-12 md:py-8 md:py-10">

        {/* Heading */}
        <ScrollReveal>
          <h2 className="text-center font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-stone-900">
            Welcome To{" "}
            <span className="font-semibold text-stone-900">Bali Yoga Kendra</span>
            <br className="hidden sm:block" />
            <span className="italic font-normal text-[#c38b5f]">
              Rooted in Tradition, Rising in Wellness
            </span>
          </h2>

          <p className="mt-5 text-center text-stone-500 text-base sm:text-lg max-w-2xl mx-auto">
            Experience authentic yoga, meditation &amp; holistic living with
            expert guidance
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-7 mb-10 lg:mb-14">
            <span className="h-px w-14 sm:w-20 bg-[#c38b5f]/40" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#c38b5f]" />
            <span className="h-px w-14 sm:w-20 bg-[#c38b5f]/40" />
          </div>
        </ScrollReveal>

        {/* Body copy - full width, no cards, no side gaps */}
        <ScrollReveal delay={0.1}>
          <div className="text-stone-600 text-base sm:text-lg leading-relaxed space-y-5">
            <p>
              Welcome to Bali Yoga Kendra, a leading Yoga Alliance Certified
              yoga school in Bali, Indonesia, dedicated to empowering
              individuals through authentic yogic wisdom, holistic wellness,
              and transformational learning experiences. Nestled amidst the
              serene landscapes and spiritual energy of Bali, we offer
              world-class Yoga Teacher Training Courses (TTC), yoga retreats,
              meditation programs, and wellness experiences for students from
              around the globe.
            </p>

            <p>
              With a team of experienced and internationally certified yoga
              teachers, Bali Yoga Kendra provides comprehensive programs
              suitable for beginners, aspiring yoga teachers, and advanced
              practitioners alike. Our offerings include{" "}
              <span className="font-semibold text-stone-800">100 Hour</span>,{" "}
              <span className="font-semibold text-stone-800">200 Hour</span>,{" "}
              <span className="font-semibold text-stone-800">300 Hour</span>,
              and{" "}
              <span className="font-semibold text-stone-800">500 Hour</span>{" "}
              Yoga Teacher Training in Bali, designed to deepen your practice
              while equipping you with the knowledge and confidence to teach
              professionally.
            </p>

            <p>
              Beyond teacher training, we offer daily yoga classes, meditation
              sessions, pranayama workshops, sound healing experiences, yoga
              retreats, and spiritual immersion programs that support
              physical health, mental clarity, emotional balance, and inner
              growth. Rooted in the traditional teachings of Hatha Yoga,
              Ashtanga Yoga, Iyengar Yoga, Yoga Philosophy, and Mindfulness,
              our courses provide a balanced blend of ancient wisdom and
              modern teaching methodologies.
            </p>

            <p>
              At Bali Yoga Kendra, we believe yoga is not merely a physical
              practice but a transformative journey toward self-awareness,
              conscious living, and holistic well-being. Whether you seek
              personal growth, professional certification, stress relief, or
              a life-changing retreat experience in Bali, our nurturing
              community and authentic teachings provide the ideal environment
              for your journey. Join Bali Yoga Kendra and experience the true
              essence of yoga in the heart of Bali — a destination renowned
              worldwide for spiritual awakening, wellness retreats, and
              conscious living.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default BYKIntroduction;