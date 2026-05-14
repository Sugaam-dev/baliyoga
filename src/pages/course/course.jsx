// import { HeroSection } from './hero-section';
// import { CourseSection } from './course-section';
// import { CTASection } from './cta-section';

// export const metadata = {
//   title: 'Yoga Courses | Transform Your Practice',
//   description: 'Explore our comprehensive yoga courses including Hatha, Iyengar, Ashtanga & Vinyasa, and Teacher Training Programs.',
// };

// const hathaCourses = [
//   {
//     id: 'hatha-beginner',
//     title: "Beginner's Hatha Yoga",
//     description: 'Learn foundational hatha yoga principles and poses. Perfect for those new to yoga practice and looking to build a strong foundation.',
//     level: 'Beginner',
//     duration: '8 weeks',
//   },
//   {
//     id: 'hatha-intermediate',
//     title: 'Intermediate Hatha Yoga',
//     description: 'Deepen your practice with advanced poses, pranayama techniques, and meditation. For students with previous yoga experience.',
//     level: 'Intermediate',
//     duration: '10 weeks',
//   },
//   {
//     id: 'hatha-daily',
//     title: 'Daily Drop-In Classes',
//     description: 'Join our flexible drop-in hatha classes. Attend whenever it fits your schedule without long-term commitment.',
//     level: 'All Levels',
//     duration: 'Ongoing',
//   },
// ];

// const iyengarCourses = [
//   {
//     id: 'iyengar-foundation',
//     title: 'Foundation Iyengar Classes',
//     description: 'Master alignment principles using props and modifications. Ideal for building strength and proper body alignment.',
//     level: 'Beginner',
//     duration: '12 weeks',
//   },
//   {
//     id: 'iyengar-alignment',
//     title: 'Alignment & Props Based Practice',
//     description: 'Explore detailed alignment work with blocks, straps, and belts. Perfect for therapeutic applications and injury prevention.',
//     level: 'Intermediate',
//     duration: '10 weeks',
//   },
//   {
//     id: 'iyengar-advanced',
//     title: 'Advanced Iyengar Intensives',
//     description: 'Deep dive into complex sequences and advanced poses. For experienced practitioners seeking mastery of alignment.',
//     level: 'Advanced',
//     duration: '8 weeks',
//   },
// ];

// const ashtangaCourses = [
//   {
//     id: 'ashtanga-led',
//     title: 'Led Ashtanga Classes',
//     description: 'Experience the flowing sequences of Ashtanga Vinyasa with teacher guidance. Build strength, flexibility, and focus.',
//     level: 'All Levels',
//     duration: 'Ongoing',
//   },
//   {
//     id: 'ashtanga-mysore',
//     title: 'Mysore Style Practice',
//     description: 'Self-paced practice in a group setting. The traditional way to learn Ashtanga with individualized attention.',
//     level: 'All Levels',
//     duration: 'Ongoing',
//   },
//   {
//     id: 'vinyasa-dynamic',
//     title: 'Dynamic Vinyasa Flow',
//     description: 'Creative flow sequences that synchronize breath with movement. Great for cardio, strength, and mental clarity.',
//     level: 'Intermediate',
//     duration: '8 weeks',
//   },
// ];

// const ttc200Courses = [
//   {
//     id: 'ttc-200-hatha',
//     title: '200 Hours - Hatha Focus',
//     description: 'Comprehensive yoga teacher training grounded in traditional hatha yoga philosophy and practice.',
//     level: 'All Levels',
//     duration: '6 months',
//   },
//   {
//     id: 'ttc-200-iyengar',
//     title: '200 Hours - Iyengar Focus',
//     description: 'In-depth training in alignment-based Iyengar yoga method for precise and therapeutic teaching.',
//     level: 'All Levels',
//     duration: '6 months',
//   },
//   {
//     id: 'ttc-200-ashtanga',
//     title: '200 Hours - Ashtanga Vinyasa Focus',
//     description: 'Master the Ashtanga Vinyasa system with its dynamic sequences and spiritual foundations.',
//     level: 'All Levels',
//     duration: '6 months',
//   },
//   {
//     id: 'ttc-200-multi',
//     title: '200 Hours - Multi-Style',
//     description: 'Balanced training across multiple yoga styles for well-rounded teaching expertise.',
//     level: 'All Levels',
//     duration: '6 months',
//   },
// ];

// const ttc300Courses = [
//   {
//     id: 'ttc-300-advanced',
//     title: '300 Hours Advanced Teacher Training',
//     description: 'Expand your teaching knowledge with advanced techniques, philosophy, and specialized methodologies. Prerequisite: 200-hour training.',
//     level: 'Advanced',
//     duration: '4 months',
//   },
// ];

// const specializedCourses = [
//   {
//     id: 'yacep-pranayama',
//     title: 'Pranayama Specialization',
//     description: 'Master breathing techniques and their therapeutic applications. YACEP approved continuing education.',
//     level: 'Intermediate',
//     duration: '4 weeks',
//   },
//   {
//     id: 'yacep-anatomy',
//     title: 'Yoga Anatomy Workshop',
//     description: 'Deep understanding of human anatomy for yoga teachers. Learn to modify poses safely and effectively.',
//     level: 'Intermediate',
//     duration: '3 weeks',
//   },
//   {
//     id: 'yacep-sequencing',
//     title: 'Advanced Sequencing Module',
//     description: 'Learn to design intelligent sequences that progressively build toward specific goals.',
//     level: 'Intermediate',
//     duration: '4 weeks',
//   },
// ];

// export default function CoursesPage() {
//   return (
//     <main className="w-full">
//       <HeroSection />

//       <CourseSection
//         title="Hatha Yoga"
//         subtitle="Traditional yoga practice emphasizing gentle alignment and sustained poses"
//         courses={hathaCourses}
//         bg="white"
//       />

//       <CourseSection
//         title="Iyengar Yoga"
//         subtitle="Precision-based practice using props and alignment principles"
//         courses={iyengarCourses}
//         bg="beige"
//         decoration="leaf"
//       />

//       <CourseSection
//         title="Ashtanga & Vinyasa"
//         subtitle="Dynamic flowing practices synchronizing breath with movement"
//         courses={ashtangaCourses}
//         bg="white"
//         decoration="mandala"
//       />

//       <CourseSection
//         title="200-Hour Teacher Training Programs"
//         subtitle="Comprehensive foundations for yoga teaching across multiple styles"
//         courses={ttc200Courses}
//         bg="beige"
//         decoration="leaf"
//       />

//       <CourseSection
//         title="Advanced Teacher Training"
//         subtitle="Specialized continuing education for experienced yoga teachers"
//         courses={ttc300Courses}
//         bg="white"
//         decoration="mandala"
//       />

//       <CourseSection
//         title="Specialized Workshops & Modules"
//         subtitle="YACEP approved continuing education in specific yoga disciplines"
//         courses={specializedCourses}
//         bg="beige"
//         decoration="leaf"
//       />

//       <CTASection />
//     </main>
//   );
// }


import { HeroSection } from "./hero-section";
import { CourseSection } from "./course-section";
import { CTASection } from "./cta-section";

export const metadata = {
  title: "Yoga Courses | Transform Your Practice",
  description:
    "Explore our comprehensive yoga courses including Hatha, Iyengar, Ashtanga & Vinyasa, and Teacher Training Programs.",
};

const hathaCourses = [
  {
    id: "hatha-beginner",
    title: "Beginner's Hatha Yoga",
    description:
      "Learn foundational hatha yoga principles and poses. Perfect for those new to yoga practice and looking to build a strong foundation.",
    level: "Beginner",
    duration: "8 weeks",
  },
  {
    id: "hatha-intermediate",
    title: "Intermediate Hatha Yoga",
    description:
      "Deepen your practice with advanced poses, pranayama techniques, and meditation.",
    level: "Intermediate",
    duration: "10 weeks",
  },
  {
    id: "hatha-daily",
    title: "Daily Drop-In Classes",
    description:
      "Flexible drop-in classes for students wanting consistency without long-term commitment.",
    level: "All Levels",
    duration: "Ongoing",
  },
];

const iyengarCourses = [
  {
    id: "iyengar-foundation",
    title: "Foundation Iyengar Classes",
    description:
      "Master alignment principles using props and modifications.",
    level: "Beginner",
    duration: "12 weeks",
  },
  {
    id: "iyengar-alignment",
    title: "Alignment & Props Based Practice",
    description:
      "Detailed alignment work with blocks, straps, and therapeutic applications.",
    level: "Intermediate",
    duration: "10 weeks",
  },
  {
    id: "iyengar-advanced",
    title: "Advanced Iyengar Intensives",
    description:
      "Complex sequences and advanced postures for experienced practitioners.",
    level: "Advanced",
    duration: "8 weeks",
  },
];

const ashtangaCourses = [
  {
    id: "ashtanga-led",
    title: "Led Ashtanga Classes",
    description:
      "Experience flowing sequences that build strength, focus, and discipline.",
    level: "All Levels",
    duration: "Ongoing",
  },
  {
    id: "ashtanga-mysore",
    title: "Mysore Style Practice",
    description:
      "Traditional self-paced practice with individualized teacher guidance.",
    level: "All Levels",
    duration: "Ongoing",
  },
  {
    id: "vinyasa-dynamic",
    title: "Dynamic Vinyasa Flow",
    description:
      "Creative movement sequences synchronized with mindful breathwork.",
    level: "Intermediate",
    duration: "8 weeks",
  },
];

const ttc200Courses = [
  {
    id: "ttc-200-hatha",
    title: "200 Hours - Hatha Focus",
    description:
      "Traditional yoga teacher training rooted in authentic yogic philosophy.",
    level: "All Levels",
    duration: "6 months",
  },
  {
    id: "ttc-200-iyengar",
    title: "200 Hours - Iyengar Focus",
    description:
      "Alignment-based teacher training for therapeutic and precise teaching.",
    level: "All Levels",
    duration: "6 months",
  },
  {
    id: "ttc-200-ashtanga",
    title: "200 Hours - Ashtanga Vinyasa Focus",
    description:
      "Master dynamic Ashtanga sequences and yogic discipline.",
    level: "All Levels",
    duration: "6 months",
  },
  {
    id: "ttc-200-multi",
    title: "200 Hours - Multi-Style",
    description:
      "Balanced training across multiple yoga traditions and methodologies.",
    level: "All Levels",
    duration: "6 months",
  },
];

const ttc300Courses = [
  {
    id: "ttc-300-advanced",
    title: "300 Hours Advanced Teacher Training",
    description:
      "Expand your teaching knowledge with advanced techniques and specialization.",
    level: "Advanced",
    duration: "4 months",
  },
];

const specializedCourses = [
  {
    id: "yacep-pranayama",
    title: "Pranayama Specialization",
    description:
      "Master advanced breathing techniques and energetic practices.",
    level: "Intermediate",
    duration: "4 weeks",
  },
  {
    id: "yacep-anatomy",
    title: "Yoga Anatomy Workshop",
    description:
      "Deep understanding of anatomy for safe and intelligent teaching.",
    level: "Intermediate",
    duration: "3 weeks",
  },
  {
    id: "yacep-sequencing",
    title: "Advanced Sequencing Module",
    description:
      "Learn intelligent sequencing methods for transformational classes.",
    level: "Intermediate",
    duration: "4 weeks",
  },
];

export default function CoursesPage() {
  return (
  <main className="relative overflow-hidden bg-[#1e2822] text-[#f5eee6]">

    {/* GLOBAL BACKGROUND GLOWS */}
    <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#49614f]/20 blur-[160px] rounded-full" />

    <div className="absolute top-[30%] right-0 w-[700px] h-[700px] bg-[#7a5638]/20 blur-[180px] rounded-full" />

    <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-[#314236]/20 blur-[150px] rounded-full" />

    {/* HERO */}
    <HeroSection />

    {/* INTRO SECTION */}
    <section className="relative z-10 py-20 sm:py-24 lg:py-28 px-6">
      <div className="max-w-[1200px] mx-auto text-center">

        <p
          className="
            uppercase
            tracking-[7px]
            text-[#98ad95]
            text-xs
            sm:text-sm
            mb-6
          "
        >
          Sacred Learning Journey
        </p>

        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            xl:text-7xl
            2xl:text-8xl
            font-light
            leading-[1.1]
            text-[#f6efe7]
          "
        >
          Discover Authentic
          <span className="block italic text-[#b88a62]">
            Yoga Education
          </span>
        </h1>

        <div
          className="
            w-28
            h-[2px]
            bg-gradient-to-r
            from-[#769170]
            to-[#b7855b]
            mx-auto
            mt-8
            mb-8
            rounded-full
          "
        />

        <p
          className="
            max-w-3xl
            mx-auto
            text-[#d7c7b8]
            text-base
            sm:text-lg
            md:text-xl
            leading-8
            sm:leading-9
          "
        >
          Immerse yourself in ancient yogic traditions blended with
          modern teaching methodologies in a serene Bali-inspired
          learning experience designed for deep personal transformation.
        </p>
      </div>
    </section>

    {/* COURSE SECTIONS */}
    <div
      className="
        relative
        z-10
        space-y-10
        md:space-y-14
        xl:space-y-20
        pb-10
      "
    >

      {/* HATHA */}
      <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
        <div
          className="
            rounded-[32px]
            overflow-hidden
            border border-[#445448]/40
            bg-[#26342b]/70
            backdrop-blur-xl
            shadow-[0_10px_60px_rgba(0,0,0,0.35)]
          "
        >
          <CourseSection
            title="Hatha Yoga"
            subtitle="Traditional yoga practice emphasizing gentle alignment and sustained poses"
            courses={hathaCourses}
            bg="white"
          />
        </div>
      </div>

      {/* IYENGAR */}
      <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
        <div
          className="
            rounded-[32px]
            overflow-hidden
            border border-[#5f4b3d]/40
            bg-[#3a2d25]/70
            backdrop-blur-xl
            shadow-[0_10px_60px_rgba(0,0,0,0.35)]
          "
        >
          <CourseSection
            title="Iyengar Yoga"
            subtitle="Precision-based practice using props and alignment principles"
            courses={iyengarCourses}
            bg="beige"
            decoration="leaf"
          />
        </div>
      </div>

      {/* ASHTANGA */}
      <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
        <div
          className="
            rounded-[32px]
            overflow-hidden
            border border-[#445448]/40
            bg-[#26342b]/70
            backdrop-blur-xl
            shadow-[0_10px_60px_rgba(0,0,0,0.35)]
          "
        >
          <CourseSection
            title="Ashtanga & Vinyasa"
            subtitle="Dynamic flowing practices synchronizing breath with movement"
            courses={ashtangaCourses}
            bg="white"
            decoration="mandala"
          />
        </div>
      </div>

      {/* TTC 200 */}
      <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
        <div
          className="
            rounded-[32px]
            overflow-hidden
            border border-[#5f4b3d]/40
            bg-[#3a2d25]/70
            backdrop-blur-xl
            shadow-[0_10px_60px_rgba(0,0,0,0.35)]
          "
        >
          <CourseSection
            title="200-Hour Teacher Training Programs"
            subtitle="Comprehensive foundations for yoga teaching across multiple styles"
            courses={ttc200Courses}
            bg="beige"
            decoration="leaf"
          />
        </div>
      </div>

      {/* ADVANCED */}
      <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
        <div
          className="
            rounded-[32px]
            overflow-hidden
            border border-[#445448]/40
            bg-[#26342b]/70
            backdrop-blur-xl
            shadow-[0_10px_60px_rgba(0,0,0,0.35)]
          "
        >
          <CourseSection
            title="Advanced Teacher Training"
            subtitle="Specialized continuing education for experienced yoga teachers"
            courses={ttc300Courses}
            bg="white"
            decoration="mandala"
          />
        </div>
      </div>

      {/* SPECIALIZED */}
      <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
        <div
          className="
            rounded-[32px]
            overflow-hidden
            border border-[#5f4b3d]/40
            bg-[#3a2d25]/70
            backdrop-blur-xl
            shadow-[0_10px_60px_rgba(0,0,0,0.35)]
          "
        >
          <CourseSection
            title="Specialized Workshops & Modules"
            subtitle="YACEP approved continuing education in specific yoga disciplines"
            courses={specializedCourses}
            bg="beige"
            decoration="leaf"
          />
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="relative z-10 mt-10 md:mt-20">
      <CTASection />
    </div>
  </main>
);
  // return (
  //   <main className="relative overflow-hidden bg-[#f6f1e7] text-[#2f241d]">

  //     {/* Background Gradients */}
  //     <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#55705a]/10 blur-[140px] rounded-full" />
  //     <div className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-[#9c6b3f]/10 blur-[160px] rounded-full" />

  //     {/* HERO */}
  //     <HeroSection />

  //     {/* CONTENT WRAPPER */}
  //     <div className="relative z-10">

  //       {/* INTRO TEXT */}
  //       <section className="py-20 md:py-28 px-6">
  //         <div className="max-w-[1100px] mx-auto text-center">
  //           <p className="uppercase tracking-[6px] text-[#7a8b72] text-sm mb-5">
  //             Sacred Learning Journey
  //           </p>

  //           <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light leading-[1.15]">
  //             Discover Authentic
  //             <span className="block italic text-[#8a5d37]">
  //               Yoga Education
  //             </span>
  //           </h1>

  //           <p className="mt-8 text-base sm:text-lg md:text-xl leading-8 text-[#5f5146] max-w-3xl mx-auto">
  //             Immerse yourself in ancient yogic traditions blended with modern
  //             teaching methodologies in a serene Bali-inspired learning
  //             experience designed for transformation.
  //           </p>
  //         </div>
  //       </section>

  //       {/* COURSES */}
  //       <div className="space-y-8 md:space-y-12 xl:space-y-20">

  //         <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
  //           <div className="rounded-[32px] overflow-hidden bg-white/60 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.06)]">
  //             <CourseSection
  //               title="Hatha Yoga"
  //               subtitle="Traditional yoga practice emphasizing gentle alignment and sustained poses"
  //               courses={hathaCourses}
  //               bg="white"
  //             />
  //           </div>
  //         </div>

  //         <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
  //           <div className="rounded-[32px] overflow-hidden bg-[#edf0ea] shadow-[0_10px_60px_rgba(0,0,0,0.05)]">
  //             <CourseSection
  //               title="Iyengar Yoga"
  //               subtitle="Precision-based practice using props and alignment principles"
  //               courses={iyengarCourses}
  //               bg="beige"
  //               decoration="leaf"
  //             />
  //           </div>
  //         </div>

  //         <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
  //           <div className="rounded-[32px] overflow-hidden bg-white/60 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.06)]">
  //             <CourseSection
  //               title="Ashtanga & Vinyasa"
  //               subtitle="Dynamic flowing practices synchronizing breath with movement"
  //               courses={ashtangaCourses}
  //               bg="white"
  //               decoration="mandala"
  //             />
  //           </div>
  //         </div>

  //         <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
  //           <div className="rounded-[32px] overflow-hidden bg-[#edf0ea] shadow-[0_10px_60px_rgba(0,0,0,0.05)]">
  //             <CourseSection
  //               title="200-Hour Teacher Training Programs"
  //               subtitle="Comprehensive foundations for yoga teaching across multiple styles"
  //               courses={ttc200Courses}
  //               bg="beige"
  //               decoration="leaf"
  //             />
  //           </div>
  //         </div>

  //         <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24">
  //           <div className="rounded-[32px] overflow-hidden bg-white/60 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.06)]">
  //             <CourseSection
  //               title="Advanced Teacher Training"
  //               subtitle="Specialized continuing education for experienced yoga teachers"
  //               courses={ttc300Courses}
  //               bg="white"
  //               decoration="mandala"
  //             />
  //           </div>
  //         </div>

  //         <div className="px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-24 pb-10">
  //           <div className="rounded-[32px] overflow-hidden bg-[#edf0ea] shadow-[0_10px_60px_rgba(0,0,0,0.05)]">
  //             <CourseSection
  //               title="Specialized Workshops & Modules"
  //               subtitle="YACEP approved continuing education in specific yoga disciplines"
  //               courses={specializedCourses}
  //               bg="beige"
  //               decoration="leaf"
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       {/* CTA */}
  //       <div className="mt-10 md:mt-20">
  //         <CTASection />
  //       </div>
  //     </div>
  //   </main>
  // );
}
