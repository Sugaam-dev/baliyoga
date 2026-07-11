import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Globe, Award, ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/shared/ScrollReveal";
import SectionHeading from "../../components/shared/SectionHeading";
import introImg from "../../assets/images/home/yoga-teacher-training-bali.jpg";

const stats = [
  { number: "15+", label: "Years of Teaching" },
  { number: "5000+", label: "Students Trained" },
  { number: "12+", label: "Countries Reached" },
  { number: "4.9★", label: "Average Rating" },
];

const pillars = [
  {
    icon: <Leaf className="w-5 h-5 text-[#c38b5f]" />,
    title: "Rooted in Tradition",
    desc: "Our curriculum flows from ancient Hatha, Ashtanga, Iyengar, and Yoga Philosophy lineages, blending timeless wisdom with modern teaching methods.",
  },
  {
    icon: <Award className="w-5 h-5 text-[#c38b5f]" />,
    title: "Yoga Alliance Certified",
    desc: "Every program is fully accredited — 100, 200, 300 & 500 Hour Yoga Teacher Training — recognised worldwide for professional teaching.",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#c38b5f]" />,
    title: "Global Community",
    desc: "Students from around the globe join our retreats, meditation programs, and wellness experiences rooted in the heart of Bali.",
  },
];

const BYKIntroduction = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200/50">
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-[#c38b5f]/6 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#1c2e24]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">

        <ScrollReveal>
          <SectionHeading
            title="Welcome to"
            highlight="Bali Yoga Kendra"
            subtitle="A leading Yoga Alliance Certified yoga school in Bali, Indonesia — dedicated to authentic yogic wisdom, holistic wellness, and transformational learning."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-8 md:mt-10">

          {/* LEFT: Image */}
          <div className="lg:col-span-5 relative w-full max-w-md lg:max-w-none mx-auto">
            <ScrollReveal>
              <div className="border border-stone-200/60 p-2.5 rounded-[36px]">
                <div className="relative h-[420px] sm:h-[500px] lg:h-[540px] w-full rounded-[28px] overflow-hidden shadow-lg bg-[#efe7da] isolate">
                  <img
                    src={introImg}
                    alt="Bali Yoga Kendra — yoga teacher training"
                    className="w-full h-full object-cover object-center transform transition duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md">
                    <div className="w-9 h-9 rounded-full bg-[#1c2e24] flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-4 h-4 text-[#c38b5f]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Est. 2009</p>
                      <p className="text-sm font-semibold text-stone-800 font-serif leading-snug">Ubud, Bali — The Yoga Capital</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <ScrollReveal delay={0.1}>
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c38b5f] mb-3 inline-block">
                Our Story ✦
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 tracking-tight leading-tight mb-4">
                A Journey Toward <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#c38b5f] to-[#a6734c] bg-clip-text text-transparent">
                  Self-Awareness & Transformation
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-5">
                Nestled amidst the serene landscapes and spiritual energy of Bali, we offer
                world-class Yoga Teacher Training Courses (TTC), yoga retreats, meditation
                programs, and wellness experiences for students from around the globe.
              </p>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-5">
                With a team of experienced and internationally certified yoga teachers, we
                provide comprehensive programs suitable for beginners, aspiring yoga teachers,
                and advanced practitioners alike — including{" "}
                <span className="font-semibold text-stone-800">100</span>,{" "}
                <span className="font-semibold text-stone-800">200</span>,{" "}
                <span className="font-semibold text-stone-800">300</span>, and{" "}
                <span className="font-semibold text-stone-800">500 Hour</span> Yoga Teacher
                Training designed to deepen your practice and equip you to teach professionally.
              </p>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
                Beyond teacher training, we offer daily yoga classes, meditation sessions,
                pranayama workshops, sound healing, and spiritual immersion programs — rooted in
                Hatha, Ashtanga, and Iyengar Yoga, Yoga Philosophy, and Mindfulness — blending
                ancient wisdom with modern teaching methodologies.
              </p>
            </ScrollReveal>

            {/* Three pillars */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-4 mb-10">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white border border-stone-200/40 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#faf8f5] border border-stone-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-stone-900 text-sm font-bold mb-1">{pillar.title}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA buttons */}
            <ScrollReveal delay={0.25}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/founder"
                  className="bg-[#1c2e24] hover:bg-stone-800 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 text-center no-underline flex items-center justify-center gap-2 group"
                >
                  Discover Our Story
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/course"
                  className="border border-[#c38b5f] text-[#c38b5f] hover:bg-[#c38b5f] hover:text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 text-center no-underline"
                >
                  Explore Programs
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats strip */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 md:mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-stone-200/40 rounded-2xl p-5 text-center shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1c2e24] to-[#c38b5f] bg-clip-text text-transparent font-serif">
                  {stat.number}
                </h3>
                <p className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default BYKIntroduction;