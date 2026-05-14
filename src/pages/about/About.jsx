
// import React, { useEffect, useState } from "react";

// // HERO + SECTION IMAGES
// import storyImg from "./images/home-hero.jpg";
// import philosophyImg from "./images/Yoga-Teacher.jpg";
// import lifestyleImg from "./images/jbz00ii9peh5jqjjyna2.jpg";
// import ourImg from "./images/about.jpg";

// // TEACHER IMAGES (USE YOUR REAL FILE NAMES)
// import teacher1 from "./images/SrinathSir.jpeg";
// import teacher2 from "./images/Sahana.jpeg";
// import teacher3 from "./images/RaviSir.jpeg";
// import teacher4 from "./images/Minu.jpeg";
// import teacher5 from "./images/Hrishanth.jpeg";
// import teacher6 from "./images/Charanya.jpeg";
// import teacher7 from "./images/vinayaksir.jpeg";
// import teacher8 from "./images/Anulasha.png";
// import teacher9 from "./images/ranjan_sir.jpg";


// // TESTIMONIAL IMAGES
// import test1 from "./images/test1.jpg";
// import test2 from "./images/test2.jpg";
// import test3 from "./images/test3.jpg";
// import test4 from "./images/test4.jpeg";
// import test5 from "./images/test5.jpg";
// import test from "./images/test.jpg";

// export default function About() {

//   // ===============================
//   // TEACHERS DATA
//   // ===============================
//   const teachers = [
//     {
//       name: "SRINATHA SIR",
//       title: "Founder & Director Yoga With Srinatha",
//       image: teacher1,
//       description: "Dr. Srinatha is the Founder and Director of Yoga With Srinatha, with 30+ years of experience in the field of yoga education and practice. He is a senior teacher of Hatha Yoga, Iyengar Yoga, and Ashtanga Yoga, widely respected for his depth of knowledge, precision, and commitment to authentic yogic traditions."
//     },
//     {
//       name: "SAHANA P R",
//       title: "Yin Yoga, Prenatal & Postnatal Yoga, and Anatomy Teacher",
//       image: teacher2,
//       description: "Sahana P R is a dedicated yoga teacher and educator specializing in Yin Yoga, Prenatal and Postnatal Yoga, and Applied Yoga Anatomy. With a strong foundation in traditional yogic principles and modern anatomical understanding, she offers a safe, mindful, and compassionate approach to teaching."
//     },
//     {
//       name: "RAVI PRABHAKAR",
//       title: "Student Accommodation Manager | Methodology, Anatomy & Physiology Teacher",
//       image: teacher3,
//       description: "Ravi Prabhakar is an experienced Methodology, Anatomy, and Physiology teacher with 15+ years of experience, and a skilled practitioner of Hatha Yoga, Ashtanga Yoga, and Iyengar Yoga. He supports students with a clear, structured, and practical understanding of yoga practice, bridging traditional methodology with modern anatomical and physiological knowledge to ensure safe and confident practice."
//     },
//     {
//       name: "MINU SAJJI",
//       title: "Pranayama & Assistant Yoga Teacher",
//       image: teacher4,
//       description: "Minu Sajji is a dedicated Pranayama teacher and Assistant Teacher at Yoga With Srinatha, specializing in Chair Yoga, Wheel Yoga, and Hatha Yoga. With a compassionate and student-centered approach, she supports practitioners in developing strength, flexibility, and mindfulness while emphasizing safe and effective practice."
//     },
//     {
//       name: "HRISHANTH ",
//       title: "Yoga Therapy & Ashtanga Yoga Teacher",
//       image: teacher5,
//       description: "Hrishanth is a skilled Yoga Therapy teacher and an experienced instructor in Ashtanga Yoga as well as Integrative Yoga Massage workshops at Yoga With Srinatha. He specializes in using yoga as a therapeutic tool to support physical, mental, and emotional wellbeing, helping students restore balance and vitality in their daily lives."
//     },
//     {
//       name: "CHARANYA",
//       title: "Ayurveda, Philosophy & Pranayama Teacher",
//       image: teacher6,
//       description: "Charanya is a dedicated teacher of Ayurveda, Yoga Philosophy, and Pranayama at Yoga With Srinatha, guiding students in the holistic integration of mind, body, and breath. Her teaching focuses on connecting traditional yogic wisdom with practical, everyday applications, helping students cultivate balance, clarity, and wellbeing."
//     },
//     {
//       name: "VINAYAKA HONNAVAR",
//       title: "Yoga Philosophy, Meditation & Sound Healing Teacher",
//       image: teacher7,
//       description: "Vinayaka Honnavar is a dedicated teacher of Yoga Philosophy, Meditation, and Sound Healing, deeply rooted in the traditional wisdom of yoga and mindful living. His teachings are inspired by classical yogic texts and contemplative practices, offering students a meaningful path toward self-understanding, inner balance, and holistic wellbeing."
//     },
//     {
//       name: "ANULASHA RAM",
//       title: "Social Media & Marketing Team Head | Graphic Designer, Web Developer, and Admin",
//       image: teacher8,
//       description: "Anulasha Ram is the Social Media and Marketing Team Head at Yoga With Srinatha, overseeing all aspects of the institute’s online presence. She manages social media platforms, handles student inquiries, and ensures effective communication across digital channels."
//     },
//     {
//       name: "YOGI RANJAN",
//       title: "Yoga Guru",
//       image: teacher9,
//       description: "Yogi Ranjan is a highly experienced yoga teacher and practitioner, with over 10 years of deep-rooted experience in the field of yoga, meditation, and spiritual exploration. His journey is marked by dedication, discipline, and a profound connection to the ancient yogic traditions of India."
//     }
   

//   ];

//   // ===============================
//   // TESTIMONIALS DATA
//   // ===============================
//   const testimonials = [
//     { image: test1, name: "Anna, Germany", text: "Bali Yoga Kendra transformed my life." },
//     { image: test2, name: "Lucas, Brazil", text: "Authentic teachings and peaceful energy." },
//     { image: test3, name: "Sophie, France", text: "A true spiritual sanctuary." },
//     { image: test4, name: "Daniel, USA", text: "Unforgettable journey." },
//     { image: test5, name: "Maya, Australia", text: "Deep philosophical wisdom." },
//     { image: test, name: "Kenji, Japan", text: "Clarity and strength found here." }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ===============================
//   // RESPONSIVE AUTO SLIDER
//   // ===============================
//   useEffect(() => {
//     const getVisibleCount = () => (window.innerWidth >= 768 ? 3 : 1);

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => {
//         const visible = getVisibleCount();
//         const maxIndex = testimonials.length - visible;

//         if (prev >= maxIndex) return 0;
//         return prev + 1;
//       });
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div className="bg-[#f8f5f0] text-gray-800 overflow-hidden">
//       {/* ================= HERO ================= */}

//       <section className="relative py-32 text-white">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <img
//             src={storyImg}
//             alt="About Bali Yoga Kendra"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/30"></div>
//         </div>

//         {/* Content */}
//         <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
//           <h1 className="text-4xl md:text-5xl font-semibold">
//             About Bali Yoga Kendra
//           </h1>

//           <p className="text-lg text-stone-100">
//             Rooted in tradition and guided by mindful living, we offer authentic
//             yoga experiences that nurture body, mind, and spirit.
//           </p>
//         </div>
//       </section>


//       {/* ================= OUR STORY ================= */}
//       <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
//         <div className="overflow-hidden rounded-2xl">
//           <img
//             src={ourImg}
//             alt="Our Story"
//             className="w-full rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
//           />
//         </div>

//         <div>
//           <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
//           <p className="leading-relaxed text-lg">
//             Bali Yoga Kendra was created as a sacred space where ancient yogic
//             wisdom meets the serene spiritual energy of Bali.
//           </p>
//           <p className="mt-4 leading-relaxed">
//             Here, yoga is not just a physical practice — it is a way of life.
//           </p>
//         </div>
//       </section>

//       {/* ================= PHILOSOPHY ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-3xl font-semibold mb-6">The Philosophy</h2>
//             <p className="leading-relaxed text-lg">
//               Rooted in traditional Hatha Yoga, breath awareness, meditation,
//               and yogic lifestyle principles.
//             </p>
//             <ul className="mt-6 space-y-3 text-gray-700">
//               <li>• Classical Hatha Yoga</li>
//               <li>• Pranayama & Meditation</li>
//               <li>• Yogic Ethics</li>
//               <li>• Holistic Lifestyle Living</li>
//             </ul>
//           </div>

//           <div className="overflow-hidden rounded-2xl">
//             <img
//               src={philosophyImg}
//               alt="Philosophy"
//               className="w-full rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= TEACHERS ================= */}
//       <section className="max-w-6xl mx-auto px-6 py-20">
//         <h2 className="text-3xl font-semibold text-center mb-12">
//           Meet Our Teachers
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {teachers.map((teacher, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-md p-6 text-center"
//             >
//               <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-4">
//                 <img
//                   src={teacher.image}
//                   alt={teacher.name}
//                   className="w-40 h-40 object-cover rounded-full transition-all duration-500 hover:scale-110 hover:shadow-xl cursor-pointer"
//                 />
//               </div>

//               <h3 className="text-xl font-semibold">{teacher.name}</h3>
//               {teacher.title && (
//                   <p className="text-[#b4533c] text-sm font-medium mt-1">
//                     {teacher.title}
//                   </p>
//                 )}
//               <p className="text-gray-600 mt-2">{teacher.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= LIFESTYLE ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
//           <div className="overflow-hidden rounded-2xl">
//             <img
//               src={lifestyleImg}
//               alt="Lifestyle"
//               className="w-full rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
//             />
//           </div>

//           <div>
//             <h2 className="text-3xl font-semibold mb-6">Bali Yoga Lifestyle</h2>
//             <p className="leading-relaxed text-lg">
//               From sunrise meditation to nourishing vegetarian meals, students
//               immerse themselves in conscious living.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= TESTIMONIALS ================= */}
//       <section className="py-20 bg-[#f3eee7] overflow-hidden">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-center mb-12">
//             Student Testimonials
//           </h2>

//           <div className="relative overflow-hidden">
//             <div
//               className="flex transition-transform duration-[2000ms] ease-in-out"
//               style={{
//                 transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`,
//               }}
//             >
//               {testimonials.map((item, index) => (
//                 <div key={index} className="px-4 w-full md:w-1/3 flex-shrink-0">
//                   <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-full">
//                     <div className="overflow-hidden rounded-xl">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-full h-64 object-cover rounded-xl mb-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
//                       />
//                     </div>

//                     <p className="italic text-lg text-gray-700">
//                       "{item.text}"
//                     </p>
//                     <p className="mt-4 font-semibold text-[#b4533c]">
//                       – {item.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";

// HERO + SECTION IMAGES
import storyImg from "./images/home-hero.jpg";
import philosophyImg from "./images/Yoga-Teacher.jpg";
import lifestyleImg from "./images/jbz00ii9peh5jqjjyna2.jpg";
import ourImg from "./images/about.jpg";

// TEACHER IMAGES
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
import test1 from "./images/test3.jpg";
import test2 from "./images/test2.jpg";
import test3 from "./images/test3.jpg";
import test4 from "./images/test2.jpg";
import test5 from "./images/test3.jpg";
import test from "./images/test2.jpg";

export default function About() {
  const teachers = [
    {
      name: "SRINATHA SIR",
      title: "Founder & Director",
      image: teacher1,
      description:
        "30+ years of authentic yoga teaching rooted in Hatha, Iyengar, and Ashtanga traditions.",
    },
    {
      name: "SAHANA P R",
      title: "Yin & Anatomy Teacher",
      image: teacher2,
      description:
        "Specializing in Yin Yoga, prenatal care, anatomy, and mindful movement.",
    },
    {
      name: "RAVI PRABHAKAR",
      title: "Methodology Teacher",
      image: teacher3,
      description:
        "Experienced educator blending traditional yoga methodology with modern anatomy.",
    },
    {
      name: "MINU SAJJI",
      title: "Pranayama Teacher",
      image: teacher4,
      description:
        "Guiding students through breathwork, chair yoga, and mindful practices.",
    },
    {
      name: "HRISHANTH",
      title: "Yoga Therapy Teacher",
      image: teacher5,
      description:
        "Focused on therapeutic yoga and healing through movement and awareness.",
    },
    {
      name: "CHARANYA",
      title: "Philosophy Teacher",
      image: teacher6,
      description:
        "Connecting Ayurveda, pranayama, and yogic philosophy with daily life.",
    },
    {
      name: "VINAYAKA",
      title: "Meditation Teacher",
      image: teacher7,
      description:
        "Sharing meditation, sound healing, and spiritual transformation.",
    },
    {
      name: "ANULASHA",
      title: "Creative Head",
      image: teacher8,
      description:
        "Managing branding, student communication, and digital experiences.",
    },
    {
      name: "YOGI RANJAN",
      title: "Yoga Guru",
      image: teacher9,
      description:
        "Dedicated to ancient yogic traditions and inner spiritual growth.",
    },
  ];

  const testimonials = [
    {
      image: test1,
      name: "Anna, Germany",
      text: "Life-changing experience.",
    },
    {
      image: test2,
      name: "Lucas, Brazil",
      text: "Peaceful and authentic.",
    },
    {
      image: test3,
      name: "Sophie, France",
      text: "Beautiful spiritual energy.",
    },
    {
      image: test4,
      name: "Daniel, USA",
      text: "A truly unforgettable journey.",
    },
    {
      image: test5,
      name: "Maya, Australia",
      text: "Deeply transformative retreat.",
    },
    {
      image: test,
      name: "Kenji, Japan",
      text: "Found balance and clarity.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const visibleCards = window.innerWidth >= 1024 ? 3 : 1;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - visibleCards;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-[#f6f1e8] text-[#2e241d] overflow-x-hidden">
      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={storyImg}
            alt="Bali Yoga Kendra"
            className="
              w-full
              h-full
              object-cover
              object-center
              xl:object-contain
              2xl:object-contain
              bg-black
            "
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 2xl:px-24 w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[6px] text-[#d9b38c] mb-6 text-sm">
              Sacred Yoga Experience
            </p>

            <h1 className="text-5xl md:text-7xl leading-tight font-light text-white">
              Discover Inner Peace
              <span className="block italic text-[#d9b38c]">
                In The Heart Of Bali
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl">
              Immerse yourself in authentic yoga traditions, tropical serenity,
              and a soulful journey designed to transform your body, mind, and
              spirit.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-[#b07d52] hover:bg-[#946543] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-xl">
                Explore Programs
              </button>

              <button className="border border-white/40 backdrop-blur-md hover:bg-white/10 text-white px-8 py-4 rounded-full transition-all duration-300">
                Meet Teachers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="max-w-[1600px] mx-auto px-6 lg:px-16 2xl:px-24 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group overflow-hidden flex items-center justify-center">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c89b72] to-[#f1d4b5] rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>

            <img
              src={ourImg}
              alt="Our Story"
              className="
                relative
                rounded-[40px]
                shadow-2xl
                w-full
                h-auto
                max-h-[700px]
                object-contain
                bg-[#efe5d7]
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[5px] text-[#b07d52] text-sm mb-4">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight mb-8">
              A Sanctuary For
              <span className="block italic text-[#a06a42]">
                Authentic Yoga Living
              </span>
            </h2>

            <p className="text-lg leading-9 text-[#5b4a3f]">
              Bali Yoga Kendra was created as a sacred destination where ancient
              yogic wisdom meets the healing energy of Bali. Every experience is
              thoughtfully designed to help students reconnect with themselves
              through mindful living, movement, breath, and spiritual awareness.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                <h3 className="text-3xl font-semibold text-[#a06a42]">
                  15+
                </h3>

                <p className="mt-2 text-sm text-[#5b4a3f]">
                  Years Of Teaching Experience
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                <h3 className="text-3xl font-semibold text-[#a06a42]">
                  5000+
                </h3>

                <p className="mt-2 text-sm text-[#5b4a3f]">
                  Students Guided Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}

      <section className="relative py-24 bg-[#efe5d7]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 2xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="uppercase tracking-[5px] text-[#b07d52] text-sm mb-4">
                Philosophy
              </p>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight mb-8">
                Ancient Wisdom
                <span className="block italic text-[#a06a42]">
                  For Modern Living
                </span>
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[#5b4a3f]">
                <p>• Classical Hatha Yoga</p>
                <p>• Breathwork & Meditation</p>
                <p>• Yogic Ethics & Awareness</p>
                <p>• Holistic Wellness Practices</p>
                <p>• Spiritual Growth & Balance</p>
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden flex items-center justify-center">
              <img
                src={philosophyImg}
                alt="Philosophy"
                className="
                  rounded-[40px]
                  shadow-2xl
                  w-full
                  h-auto
                  max-h-[700px]
                  object-contain
                  bg-[#f6f1e8]
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEACHERS ================= */}

      <section className="max-w-[1600px] mx-auto px-6 lg:px-16 2xl:px-24 py-28">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="uppercase tracking-[5px] text-[#b07d52] text-sm mb-4">
            Our Teachers
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            Meet The Souls Behind
            <span className="block italic text-[#a06a42]">
              Your Transformation
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {teachers.map((teacher, i) => (
            <div
              key={i}
              className="
                group
                bg-white/60
                backdrop-blur-xl
                rounded-[35px]
                overflow-hidden
                shadow-xl
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="bg-[#f6f1e8] p-4 flex items-center justify-center">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="
                    w-full
                    h-auto
                    object-contain
                    rounded-[25px]
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold">
                  {teacher.name}
                </h3>

                <p className="text-[#a06a42] mt-2 text-sm tracking-wide">
                  {teacher.title}
                </p>

                <p className="text-[#5b4a3f] leading-7 mt-5">
                  {teacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIFESTYLE ================= */}

      <section className="relative py-28">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={lifestyleImg}
            alt="Lifestyle"
            className="
              w-full
              h-full
              object-cover
              object-center
              xl:object-contain
              2xl:object-contain
              bg-black
            "
          />

          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-[5px] text-[#d9b38c] mb-5 text-sm">
            Bali Lifestyle
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            Live Slowly,
            <span className="block italic text-[#d9b38c]">
              Breathe Deeply
            </span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-stone-200 leading-9">
            From sunrise meditation and tropical nature to nourishing
            vegetarian meals and mindful community living — every moment is
            designed to restore balance and awaken inner peace.
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

<section className="py-28 bg-[#efe5d7] overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-6 lg:px-16 2xl:px-24">
    <div className="text-center mb-16">
      <p className="uppercase tracking-[5px] text-[#b07d52] text-sm mb-4">
        Testimonials
      </p>

      <h2 className="text-4xl md:text-6xl font-light leading-tight">
        Stories Of
        <span className="block italic text-[#a06a42]">
          Transformation
        </span>
      </h2>
    </div>

    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-[1500ms] ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex *
            (100 / (window.innerWidth >= 1024 ? 3 : 1))
          }%)`,
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 px-4 flex-shrink-0"
          >
            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[35px]
                overflow-hidden
                shadow-2xl
                h-full
                flex
                flex-col
              "
            >
              {/* Image */}
              <div
                className="
                  bg-[#f6f1e8]
                  p-4
                  h-[260px]
                  sm:h-[300px]
                  md:h-[320px]
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-full
                    object-contain
                    rounded-[25px]
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8 text-center flex-1 flex flex-col justify-center">
                <div className="flex justify-center gap-1 text-[#d4a373] mb-4">
                  ★★★★★
                </div>

                <p className="italic text-lg text-[#5b4a3f] leading-8">
                  "{item.text}"
                </p>

                <p className="mt-6 text-[#a06a42] font-semibold tracking-wide">
                  {item.name}
                </p>
              </div>
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