import React, { useState } from "react";
import { ArrowLeft, Award, Globe, Heart, Star, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/shared/ScrollReveal";
import founderImg from "../../assets/images/home/ranjan_sir.webp";
import baliTemple from "../../assets/images/home/bali2.webp";
import certificate1 from "../../assets/images/certificates/certificate1.webp";
import certificate2 from "../../assets/images/certificates/certificate2.webp";
import certificate3 from "../../assets/images/certificates/certificate3.webp";
import certificate4 from "../../assets/images/certificates/certificate4.webp";

const credentials = [
  "E-RYT 500 — Yoga Alliance Registered Senior Teacher",
  "YACEP — Continuing Education Provider",
  "Master in Yoga & Conscious Meditation",
  "Specialist in Pranayama & Breathwork Healing",
  "Certified Yin Yoga & Restorative Yoga Teacher",
  "Trained in Vedantic Philosophy & Sanskrit Chanting",
];

const highlights = [
  { icon: <Users className="w-5 h-5 text-[#c38b5f]" />, number: "5000+", label: "Students Trained" },
  { icon: <Globe className="w-5 h-5 text-[#c38b5f]" />, number: "12+", label: "Countries Reached" },
  { icon: <Star className="w-5 h-5 text-[#c38b5f]" />, number: "15+", label: "Years of Teaching" },
  { icon: <Award className="w-5 h-5 text-[#c38b5f]" />, number: "4.9★", label: "Average Rating" },
];

const journeySections = [
  {
    icon: <BookOpen className="w-5 h-5 text-[#c38b5f]" />,
    title: "The Early Years — A Seeker's Path",
    body: `Born into a family deeply rooted in spiritual traditions in Rishikesh, India, Yogi Ranjan's 
    journey with yoga began not as a career choice, but as an intimate personal calling. From a young age, 
    he was drawn to the stillness found beneath the noise of the world — spending hours in meditation by 
    the banks of the Ganga, absorbing the wisdom of the sadhus and Swamis who walked those sacred banks.
    
    His formal study of Hatha and Ashtanga yoga began at the age of 16 under the guidance of revered 
    masters in Rishikesh. For nearly a decade, he immersed himself in daily sadhana — asana, pranayama, 
    mantra, and deep philosophical study — building the unshakeable foundation that would shape everything 
    that came after.`,
  },
  {
    icon: <Globe className="w-5 h-5 text-[#c38b5f]" />,
    title: "From Rishikesh to Bali — A School is Born",
    body: `After years of studying and teaching across India, Nepal, and Southeast Asia, Yogi Ranjan was 
    drawn to Bali — a land that vibrated with the same spiritual frequency he had known in Rishikesh. 
    The Balinese philosophy of Tri Hita Karana (harmony between humans, nature, and the divine) resonated 
    deeply with his yogic worldview.
    
    In 2009, he founded Bali Yoga Kendra in Ubud with a clear mission: to create a school where ancient 
    wisdom could be transmitted in its truest form, free from commercialisation, in a setting that 
    naturally supported deep inner work. What began with a small group of dedicated students quickly 
    grew into one of Bali's most respected yoga teacher training centres.`,
  },
  {
    icon: <Heart className="w-5 h-5 text-[#c38b5f]" />,
    title: "Teaching Philosophy — Yoga as a Way of Life",
    body: `For Yogi Ranjan, yoga is not a fitness trend or a series of impressive postures — it is a 
    complete science of living. His teaching philosophy rests on three pillars: Svadhyaya (self-study), 
    Ahimsa (non-violence in thought, word, and action), and Tapas (disciplined inner fire).
    
    In his classes and trainings, he weaves asana with breathwork, philosophy, meditation, and mantra — 
    ensuring that every student leaves not just with a better body, but with a transformed perspective. 
    He is known for his rare ability to make the most profound yogic concepts accessible, practical, 
    and immediately applicable to everyday life.`,
  },
  {
    icon: <Users className="w-5 h-5 text-[#c38b5f]" />,
    title: "A Global Family of Practitioners",
    body: `Over 15 years and 5,000 students trained later, Yogi Ranjan's greatest source of pride is 
    the living, breathing global community that has grown from Bali Yoga Kendra's programs. Alumni from 
    over 12 countries now teach in studios, hospitals, schools, and retreat centres worldwide — each 
    carrying a thread of the authentic lineage they received.
    
    "My role is not to make you dependent on a teacher," he often says in trainings. "My role is to 
    help you become your own guru." This spirit of empowerment is at the heart of every BYK programme 
    — and it is what brings students back, year after year, to deepen their practice and their lives.`,
  },
];

const certificates = [
  {
    image: certificate1,
    title: "Certificate 1",
  },
  {
    image: certificate2,
    title: "Certificate 2",
  },
  {
    image: certificate3,
    title: "Certificate 3",
  },
  {
    image: certificate4,
    title: "Certificate 4",
  },
];

const FounderPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen antialiased">

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[340px] sm:h-[400px] md:h-[460px] overflow-hidden">
        <img
          src={baliTemple}
          alt="Bali Yoga Kendra"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/50 to-stone-950/80" />



        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal>
            <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-[#c38b5f] mb-4 inline-block">
              The Heart Behind BYK ✦
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
              Yogi Ranjan
            </h1>
            <p className="mt-3 text-stone-300 text-sm sm:text-base tracking-widest uppercase font-semibold">
              Founder &amp; Head Teacher — Bali Yoga Kendra
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN CONTENT: full-width, minimal side gap ── */}
      <div className="w-full max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-6 md:px-12 py-10 md:py-12 flex flex-col gap-8">

        {/* ── TOP ROW: Name/Photo | Certifications | Stats (vertical stack) — matches sketch ── */}
        <ScrollReveal>
          <div className="bg-white border border-stone-200/40 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-stone-900 font-serif text-2xl sm:text-3xl font-semibold mb-6">
              Dr. Yogi Ranjan
            </h2>
             <p className="text-[#a6734c] text-xs font-bold uppercase tracking-widest">
    Founder &amp; Lead Yoga Teacher — Bali Yoga Kendra
  </p>
            <div className="h-px w-full bg-stone-100 mb-6" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Photo — large, left side */}
              <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto flex-shrink-0">
                <div className="border border-stone-200/60 p-2.5 rounded-[36px]">
                  <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full rounded-[28px] overflow-hidden shadow-lg bg-[#efe7da]">
                    <img
                      src={founderImg}
                      alt="Yogi Ranjan"
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Right side: Certifications (2-col grid) on top, Stats (2x2 grid) below */}
              <div className="lg:col-span-7 flex flex-col gap-6 w-full">

                <div className="flex-1 flex flex-col">
                  <h3 className="text-stone-900 font-serif text-base font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#c38b5f]" />
                    Certifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {credentials.map((cred, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[#c38b5f] text-xs mt-1 flex-shrink-0">✦</span>
                        <p className="text-sm text-stone-600 leading-snug">{cred}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#faf8f5] border border-stone-200/40 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0">{h.icon}</div>
                        <div className="flex flex-col leading-tight">
                          <span className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-r from-[#1c2e24] to-[#c38b5f] bg-clip-text text-transparent">
                            {h.number}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                            {h.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

                {/* ── CERTIFICATES ── */}
        <ScrollReveal>
          <section className="bg-white border border-stone-200/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">

            {/* Heading */}
            <div className="text-center mb-7">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-[#c38b5f]" />

                <h2 className="text-stone-900 font-serif text-2xl sm:text-3xl font-semibold">
                  Certificates
                </h2>
              </div>

              <p className="text-stone-500 text-sm">
                Click on any certificate to view it in full size
              </p>
            </div>

            {/* Certificate Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

              {certificates.map((certificate, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCertificate(certificate.image)}
                  className="group cursor-pointer"
                >
                  <div
                    className="
                      bg-[#faf8f5]
                      border border-stone-200/60
                      rounded-2xl
                      p-2
                      overflow-hidden
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:shadow-lg
                    "
                  >
                    <div className="relative w-full h-[150px] sm:h-[190px] md:h-[220px] lg:h-[240px] bg-white rounded-xl overflow-hidden">

                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="
                          w-full
                          h-full
                          object-contain
                          p-2
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      {/* Hover Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-stone-900/0
                          group-hover:bg-stone-900/20
                          transition-all
                          duration-300
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <span
                          className="
                            opacity-0
                            group-hover:opacity-100
                            bg-white
                            text-stone-800
                            px-4
                            py-2
                            rounded-full
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            shadow-md
                            transition-all
                            duration-300
                          "
                        >
                          View
                        </span>
                      </div>

                    </div>
                  </div>

                  <p className="text-center text-xs sm:text-sm text-stone-600 font-medium mt-3">
                    {certificate.title}
                  </p>
                </div>
              ))}

            </div>

          </section>
        </ScrollReveal>


        {/* ── CERTIFICATE ZOOM MODAL ── */}
        {selectedCertificate && (
          <div
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/85
              flex
              items-center
              justify-center
              p-4
              sm:p-8
            "
            onClick={() => setSelectedCertificate(null)}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="
                absolute
                top-4
                right-5
                sm:top-6
                sm:right-8
                w-10
                h-10
                rounded-full
                bg-white/10
                hover:bg-white/20
                text-white
                text-3xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                z-[10000]
              "
              aria-label="Close certificate"
            >
              ×
            </button>

            {/* Certificate Image */}
            <div
              className="
                relative
                max-w-[95vw]
                max-h-[92vh]
                flex
                items-center
                justify-center
              "
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCertificate}
                alt="Certificate enlarged"
                className="
                  max-w-[95vw]
                  max-h-[90vh]
                  w-auto
                  h-auto
                  object-contain
                  bg-white
                  p-2
                  sm:p-3
                  rounded-lg
                  shadow-2xl
                "
              />
            </div>

          </div>
        )}


        {/* Full bio — wide, minimal side margin */}
        <ScrollReveal>
          <div className="bg-white border border-stone-200/40 rounded-3xl p-7 sm:p-10 shadow-sm flex flex-col gap-4">
            <p className="text-stone-600 text-base leading-relaxed">
              Dr. Yogi Ranjan is an internationally respected Yoga Teacher, Spiritual Healer, Meditation Guide, 
              and Yog Acharya with over a decade of dedicated experience in the fields of traditional yoga, 
              mindfulness, meditation, and holistic wellness. As the Founder of Bali Yoga Kendra, he is committed 
              to preserving and sharing the authentic teachings of yogic science through Yoga Alliance Certified 
              Teacher Training Programs, yoga retreats, and transformational wellness experiences.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              Holding a Doctorate degree and a deep passion for spiritual growth, Dr. Yogi Ranjan has devoted his 
              life to exploring the profound wisdom of ancient yogic traditions. His spiritual journey has taken 
              him across the sacred landscapes of India, including the Himalayas, Rishikesh, Varanasi, and other 
              renowned pilgrimage destinations, where he studied under revered gurus, Himalayan masters, and 
              traditional yoga practitioners. These experiences have enriched his understanding of Yoga Philosophy, 
              Meditation, Pranayama, Kundalini Energy, and Conscious Living.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              A devoted follower of Lord Shiva and an alumnus of the Isha Foundation, Dr. Yogi Ranjan combines 
              ancient yogic wisdom with modern teaching methodologies to create life-changing learning experiences 
              for students from around the world. His teaching style integrates the core principles of Hatha Yoga, 
              Raja Yoga, Kundalini Yoga, Breathwork, Meditation, Mindfulness, and Spiritual Healing, helping 
              practitioners achieve physical vitality, mental clarity, emotional balance, and inner transformation.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              Over the years, Dr. Yogi Ranjan has trained and mentored hundreds of yoga practitioners, wellness 
              seekers, and aspiring yoga teachers through 200 Hour Yoga Teacher Training, 300 Hour Yoga Teacher 
              Training, Meditation Teacher Training, and Yoga Retreat Programs in Bali and internationally. His 
              teachings extend far beyond physical postures, emphasizing self-awareness, breath mastery, energy 
              alignment, and spiritual awakening.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              Known for his compassionate guidance, authentic approach, and deep spiritual insight, Dr. Yogi Ranjan 
              inspires students to embrace yoga as a complete lifestyle and a path toward self-realization. Through 
              Bali Yoga Kendra, he continues to empower individuals worldwide to discover inner peace, holistic 
              well-being, and a deeper connection with their true nature.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              Whether you are seeking professional yoga certification, personal transformation, spiritual growth, 
              or a deeper understanding of authentic yoga, Dr. Yogi Ranjan offers a powerful and inspiring pathway 
              rooted in tradition, wisdom, and experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Intro quote */}
        <ScrollReveal>
          <blockquote className="border-l-4 border-[#c38b5f] pl-6 py-2">
            <p className="text-stone-700 text-lg sm:text-xl font-serif italic leading-relaxed">
              "Yoga is not something you do — it is something you become. My greatest teaching is 
              to help each student remember what they have always been."
            </p>
            <footer className="mt-3 text-[#a6734c] text-xs font-bold uppercase tracking-widest">
              — Yogi Ranjan
            </footer>
          </blockquote>
        </ScrollReveal>

        {/* Story sections — full width, minimal side gap */}
        {journeySections.map((section, index) => (
          <ScrollReveal key={index} delay={0.1 * (index + 1)}>
            <div className="bg-white border border-stone-200/40 rounded-3xl p-7 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#faf8f5] border border-stone-200/50 flex items-center justify-center flex-shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-stone-900 font-serif text-xl sm:text-2xl font-semibold leading-snug">
                  {section.title}
                </h2>
              </div>
              <div className="h-px w-full bg-stone-100 mb-5" />
              {section.body.split("\n\n").map((para, pi) => (
                <p key={pi} className="text-stone-600 text-base leading-relaxed mb-4 last:mb-0">
                  {para.trim()}
                </p>
              ))}
            </div>
          </ScrollReveal>
        ))}

        {/* Bottom CTA */}
        <ScrollReveal delay={0.5}>
          <div className="bg-[#1c2e24] rounded-3xl p-8 text-center shadow-lg">
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3 inline-block">
              Train With The Founder ✦
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-3">
              Begin Your Own Journey
            </h3>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-7 max-w-lg mx-auto">
              Join Yogi Ranjan and the BYK faculty for a life-changing yoga teacher training or 
              retreat in the heart of Ubud, Bali.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/course"
                className="bg-[#c38b5f] hover:bg-[#a6734c] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 no-underline"
              >
                View All Programs
              </Link>
              <Link
                to="/contact"
                className="border border-stone-500 text-stone-300 hover:border-white hover:text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 no-underline"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default FounderPage;