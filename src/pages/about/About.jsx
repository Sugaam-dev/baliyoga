
import React, { useEffect, useState } from "react";

// HERO + SECTION IMAGES
import storyImg from "./images/home-hero.jpg";
import philosophyImg from "./images/Yoga-Teacher.jpg";
import lifestyleImg from "./images/jbz00ii9peh5jqjjyna2.jpg";
import ourImg from "./images/about.jpg";

// TEACHER IMAGES (USE YOUR REAL FILE NAMES)
import teacher1 from "./images/SrinathSir.jpeg";
import teacher2 from "./images/Sahana.jpeg";
import teacher3 from "./images/RaviSir.jpeg";
import teacher4 from "./images/Minu.jpeg";
import teacher5 from "./images/Hrishanth.jpeg";
import teacher6 from "./images/Charanya.jpeg";
import teacher7 from "./images/vinayaksir.jpeg";
import teacher8 from "./images/Anulasha.png";
import teacher9 from "./images/ranjan_sir.jpg";


// TESTIMONIAL IMAGES
import test1 from "./images/test1.jpg";
import test2 from "./images/test2.jpg";
import test3 from "./images/test3.jpg";
import test4 from "./images/test4.jpeg";
import test5 from "./images/test5.jpg";
import test from "./images/test.jpg";

export default function About() {

  // ===============================
  // TEACHERS DATA
  // ===============================
  const teachers = [
    {
      name: "SRINATHA SIR",
      title: "Founder & Director Yoga With Srinatha",
      image: teacher1,
      description: "Dr. Srinatha is the Founder and Director of Yoga With Srinatha, with 30+ years of experience in the field of yoga education and practice. He is a senior teacher of Hatha Yoga, Iyengar Yoga, and Ashtanga Yoga, widely respected for his depth of knowledge, precision, and commitment to authentic yogic traditions."
    },
    {
      name: "SAHANA P R",
      title: "Yin Yoga, Prenatal & Postnatal Yoga, and Anatomy Teacher",
      image: teacher2,
      description: "Sahana P R is a dedicated yoga teacher and educator specializing in Yin Yoga, Prenatal and Postnatal Yoga, and Applied Yoga Anatomy. With a strong foundation in traditional yogic principles and modern anatomical understanding, she offers a safe, mindful, and compassionate approach to teaching."
    },
    {
      name: "RAVI PRABHAKAR",
      title: "Student Accommodation Manager | Methodology, Anatomy & Physiology Teacher",
      image: teacher3,
      description: "Ravi Prabhakar is an experienced Methodology, Anatomy, and Physiology teacher with 15+ years of experience, and a skilled practitioner of Hatha Yoga, Ashtanga Yoga, and Iyengar Yoga. He supports students with a clear, structured, and practical understanding of yoga practice, bridging traditional methodology with modern anatomical and physiological knowledge to ensure safe and confident practice."
    },
    {
      name: "MINU SAJJI",
      title: "Pranayama & Assistant Yoga Teacher",
      image: teacher4,
      description: "Minu Sajji is a dedicated Pranayama teacher and Assistant Teacher at Yoga With Srinatha, specializing in Chair Yoga, Wheel Yoga, and Hatha Yoga. With a compassionate and student-centered approach, she supports practitioners in developing strength, flexibility, and mindfulness while emphasizing safe and effective practice."
    },
    {
      name: "HRISHANTH ",
      title: "Yoga Therapy & Ashtanga Yoga Teacher",
      image: teacher5,
      description: "Hrishanth is a skilled Yoga Therapy teacher and an experienced instructor in Ashtanga Yoga as well as Integrative Yoga Massage workshops at Yoga With Srinatha. He specializes in using yoga as a therapeutic tool to support physical, mental, and emotional wellbeing, helping students restore balance and vitality in their daily lives."
    },
    {
      name: "CHARANYA",
      title: "Ayurveda, Philosophy & Pranayama Teacher",
      image: teacher6,
      description: "Charanya is a dedicated teacher of Ayurveda, Yoga Philosophy, and Pranayama at Yoga With Srinatha, guiding students in the holistic integration of mind, body, and breath. Her teaching focuses on connecting traditional yogic wisdom with practical, everyday applications, helping students cultivate balance, clarity, and wellbeing."
    },
    {
      name: "VINAYAKA HONNAVAR",
      title: "Yoga Philosophy, Meditation & Sound Healing Teacher",
      image: teacher7,
      description: "Vinayaka Honnavar is a dedicated teacher of Yoga Philosophy, Meditation, and Sound Healing, deeply rooted in the traditional wisdom of yoga and mindful living. His teachings are inspired by classical yogic texts and contemplative practices, offering students a meaningful path toward self-understanding, inner balance, and holistic wellbeing."
    },
    {
      name: "ANULASHA RAM",
      title: "Social Media & Marketing Team Head | Graphic Designer, Web Developer, and Admin",
      image: teacher8,
      description: "Anulasha Ram is the Social Media and Marketing Team Head at Yoga With Srinatha, overseeing all aspects of the institute’s online presence. She manages social media platforms, handles student inquiries, and ensures effective communication across digital channels."
    },
    {
      name: "YOGI RANJAN",
      title: "Yoga Guru",
      image: teacher9,
      description: "Yogi Ranjan is a highly experienced yoga teacher and practitioner, with over 10 years of deep-rooted experience in the field of yoga, meditation, and spiritual exploration. His journey is marked by dedication, discipline, and a profound connection to the ancient yogic traditions of India."
    }
   

  ];

  // ===============================
  // TESTIMONIALS DATA
  // ===============================
  const testimonials = [
    { image: test1, name: "Anna, Germany", text: "Bali Yoga Kendra transformed my life." },
    { image: test2, name: "Lucas, Brazil", text: "Authentic teachings and peaceful energy." },
    { image: test3, name: "Sophie, France", text: "A true spiritual sanctuary." },
    { image: test4, name: "Daniel, USA", text: "Unforgettable journey." },
    { image: test5, name: "Maya, Australia", text: "Deep philosophical wisdom." },
    { image: test, name: "Kenji, Japan", text: "Clarity and strength found here." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ===============================
  // RESPONSIVE AUTO SLIDER
  // ===============================
  useEffect(() => {
    const getVisibleCount = () => (window.innerWidth >= 768 ? 3 : 1);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const visible = getVisibleCount();
        const maxIndex = testimonials.length - visible;

        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-[#f8f5f0] text-gray-800 overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="relative py-32 text-white">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={storyImg}
            alt="About Bali Yoga Kendra"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            About Bali Yoga Kendra
          </h1>

          <p className="text-lg text-stone-100">
            Rooted in tradition and guided by mindful living, we offer authentic
            yoga experiences that nurture body, mind, and spirit.
          </p>
        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={ourImg}
            alt="Our Story"
            className="w-full rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="leading-relaxed text-lg">
            Bali Yoga Kendra was created as a sacred space where ancient yogic
            wisdom meets the serene spiritual energy of Bali.
          </p>
          <p className="mt-4 leading-relaxed">
            Here, yoga is not just a physical practice — it is a way of life.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">The Philosophy</h2>
            <p className="leading-relaxed text-lg">
              Rooted in traditional Hatha Yoga, breath awareness, meditation,
              and yogic lifestyle principles.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Classical Hatha Yoga</li>
              <li>• Pranayama & Meditation</li>
              <li>• Yogic Ethics</li>
              <li>• Holistic Lifestyle Living</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={philosophyImg}
              alt="Philosophy"
              className="w-full rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* ================= TEACHERS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Meet Our Teachers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-4">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-40 h-40 object-cover rounded-full transition-all duration-500 hover:scale-110 hover:shadow-xl cursor-pointer"
                />
              </div>

              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              {teacher.title && (
                  <p className="text-[#b4533c] text-sm font-medium mt-1">
                    {teacher.title}
                  </p>
                )}
              <p className="text-gray-600 mt-2">{teacher.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIFESTYLE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={lifestyleImg}
              alt="Lifestyle"
              className="w-full rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Bali Yoga Lifestyle</h2>
            <p className="leading-relaxed text-lg">
              From sunrise meditation to nourishing vegetarian meals, students
              immerse themselves in conscious living.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-[#f3eee7] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Student Testimonials
          </h2>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-[2000ms] ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div key={index} className="px-4 w-full md:w-1/3 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-full">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover rounded-xl mb-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                      />
                    </div>

                    <p className="italic text-lg text-gray-700">
                      "{item.text}"
                    </p>
                    <p className="mt-4 font-semibold text-[#b4533c]">
                      – {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}