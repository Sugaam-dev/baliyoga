import React from "react";

// ================= IMAGES =================
import heroImg from "./images/sunset-meditation.jpg";
import guidedImg from "./images/sunset-meditation.jpg";
import pranayamaImg from "./images/meditation.jpg";
import nidraImg from "./images/meditation.jpg";
import silentImg from "./images/hero.jpg";
import mindfulnessImg from "./images/hero.jpg";

export default function MeditationPage() {
  return (
    <div className="bg-[#f8f5f0] text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 text-white">

        {/* Background Image */}
        <img
          src={heroImg}
          alt="Meditation Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Heading */}
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-semibold text-center px-4">
          Meditation & Mindfulness
        </h1>

      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Discover Inner Stillness
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At Bali Yoga Kendra, Meditation & Mindfulness are the heart of inner
          transformation. Through ancient yogic techniques and guided
          awareness practices, we help you cultivate clarity, emotional
          balance, and deep relaxation.
        </p>
      </section>


      {/* ================= GUIDED MEDITATION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-4">
          <img
            src={guidedImg}
            alt="Guided Meditation Classes"
            className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Guided Meditation Classes
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Experience structured meditation sessions led by experienced
            teachers. These classes help calm the mind, enhance focus, and
            deepen awareness through breath, visualization, and mantra-based
            practices.
          </p>
        </div>

      </section>


      {/* ================= PRANAYAMA ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Pranayama & Breathwork
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Harness the power of breath to energize the body and calm the
              nervous system. Our pranayama sessions teach classical breathing
              techniques to improve lung capacity, mental clarity, and
              emotional stability.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-4">
            <img
              src={pranayamaImg}
              alt="Pranayama & Breathwork"
              className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>


      {/* ================= YOGA NIDRA ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-4">
          <img
            src={nidraImg}
            alt="Yoga Nidra"
            className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Yoga Nidra (Yogic Sleep)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Enter a state between wakefulness and sleep where profound healing
            happens. Yoga Nidra promotes deep relaxation, stress relief, and
            subconscious transformation.
          </p>
        </div>

      </section>


      {/* ================= SILENT RETREATS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Silent Retreats
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Immerse yourself in silence and reconnect with your inner self.
              Our silent retreats provide a peaceful sanctuary for deep
              reflection, meditation, and spiritual growth.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-4">
            <img
              src={silentImg}
              alt="Silent Retreats"
              className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>


      {/* ================= MINDFULNESS PRACTICES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-4">
          <img
            src={mindfulnessImg}
            alt="Mindfulness Practices"
            className="w-full h-auto object-contain transform group-hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Mindfulness Practices
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Cultivate presence in daily life through mindful awareness
            techniques. These practices encourage conscious breathing,
            emotional regulation, and inner peace beyond the meditation mat.
          </p>
        </div>

      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#efe7dc] py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Begin Your Meditation Journey
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Join Bali Yoga Kendra and experience the transformative power of
          Meditation & Mindfulness in the serene energy of Bali.
        </p>
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Explore Programs
        </button>
      </section>

    </div>
  );
}