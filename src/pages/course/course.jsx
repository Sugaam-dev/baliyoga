import { HeroSection } from './hero-section';
import { CourseSection } from './course-section';
import { CTASection } from './cta-section';

export const metadata = {
  title: 'Yoga Courses | Transform Your Practice',
  description: 'Explore our comprehensive yoga courses including Hatha, Iyengar, Ashtanga & Vinyasa, and Teacher Training Programs.',
};

const hathaCourses = [
  {
    id: 'hatha-beginner',
    title: "Beginner's Hatha Yoga",
    description: 'Learn foundational hatha yoga principles and poses. Perfect for those new to yoga practice and looking to build a strong foundation.',
    level: 'Beginner',
    duration: '8 weeks',
  },
  {
    id: 'hatha-intermediate',
    title: 'Intermediate Hatha Yoga',
    description: 'Deepen your practice with advanced poses, pranayama techniques, and meditation. For students with previous yoga experience.',
    level: 'Intermediate',
    duration: '10 weeks',
  },
  {
    id: 'hatha-daily',
    title: 'Daily Drop-In Classes',
    description: 'Join our flexible drop-in hatha classes. Attend whenever it fits your schedule without long-term commitment.',
    level: 'All Levels',
    duration: 'Ongoing',
  },
];

const iyengarCourses = [
  {
    id: 'iyengar-foundation',
    title: 'Foundation Iyengar Classes',
    description: 'Master alignment principles using props and modifications. Ideal for building strength and proper body alignment.',
    level: 'Beginner',
    duration: '12 weeks',
  },
  {
    id: 'iyengar-alignment',
    title: 'Alignment & Props Based Practice',
    description: 'Explore detailed alignment work with blocks, straps, and belts. Perfect for therapeutic applications and injury prevention.',
    level: 'Intermediate',
    duration: '10 weeks',
  },
  {
    id: 'iyengar-advanced',
    title: 'Advanced Iyengar Intensives',
    description: 'Deep dive into complex sequences and advanced poses. For experienced practitioners seeking mastery of alignment.',
    level: 'Advanced',
    duration: '8 weeks',
  },
];

const ashtangaCourses = [
  {
    id: 'ashtanga-led',
    title: 'Led Ashtanga Classes',
    description: 'Experience the flowing sequences of Ashtanga Vinyasa with teacher guidance. Build strength, flexibility, and focus.',
    level: 'All Levels',
    duration: 'Ongoing',
  },
  {
    id: 'ashtanga-mysore',
    title: 'Mysore Style Practice',
    description: 'Self-paced practice in a group setting. The traditional way to learn Ashtanga with individualized attention.',
    level: 'All Levels',
    duration: 'Ongoing',
  },
  {
    id: 'vinyasa-dynamic',
    title: 'Dynamic Vinyasa Flow',
    description: 'Creative flow sequences that synchronize breath with movement. Great for cardio, strength, and mental clarity.',
    level: 'Intermediate',
    duration: '8 weeks',
  },
];

const ttc200Courses = [
  {
    id: 'ttc-200-hatha',
    title: '200 Hours - Hatha Focus',
    description: 'Comprehensive yoga teacher training grounded in traditional hatha yoga philosophy and practice.',
    level: 'All Levels',
    duration: '6 months',
  },
  {
    id: 'ttc-200-iyengar',
    title: '200 Hours - Iyengar Focus',
    description: 'In-depth training in alignment-based Iyengar yoga method for precise and therapeutic teaching.',
    level: 'All Levels',
    duration: '6 months',
  },
  {
    id: 'ttc-200-ashtanga',
    title: '200 Hours - Ashtanga Vinyasa Focus',
    description: 'Master the Ashtanga Vinyasa system with its dynamic sequences and spiritual foundations.',
    level: 'All Levels',
    duration: '6 months',
  },
  {
    id: 'ttc-200-multi',
    title: '200 Hours - Multi-Style',
    description: 'Balanced training across multiple yoga styles for well-rounded teaching expertise.',
    level: 'All Levels',
    duration: '6 months',
  },
];

const ttc300Courses = [
  {
    id: 'ttc-300-advanced',
    title: '300 Hours Advanced Teacher Training',
    description: 'Expand your teaching knowledge with advanced techniques, philosophy, and specialized methodologies. Prerequisite: 200-hour training.',
    level: 'Advanced',
    duration: '4 months',
  },
];

const specializedCourses = [
  {
    id: 'yacep-pranayama',
    title: 'Pranayama Specialization',
    description: 'Master breathing techniques and their therapeutic applications. YACEP approved continuing education.',
    level: 'Intermediate',
    duration: '4 weeks',
  },
  {
    id: 'yacep-anatomy',
    title: 'Yoga Anatomy Workshop',
    description: 'Deep understanding of human anatomy for yoga teachers. Learn to modify poses safely and effectively.',
    level: 'Intermediate',
    duration: '3 weeks',
  },
  {
    id: 'yacep-sequencing',
    title: 'Advanced Sequencing Module',
    description: 'Learn to design intelligent sequences that progressively build toward specific goals.',
    level: 'Intermediate',
    duration: '4 weeks',
  },
];

export default function CoursesPage() {
  return (
    <main className="w-full">
      <HeroSection />

      <CourseSection
        title="Hatha Yoga"
        subtitle="Traditional yoga practice emphasizing gentle alignment and sustained poses"
        courses={hathaCourses}
        bg="white"
      />

      <CourseSection
        title="Iyengar Yoga"
        subtitle="Precision-based practice using props and alignment principles"
        courses={iyengarCourses}
        bg="beige"
        decoration="leaf"
      />

      <CourseSection
        title="Ashtanga & Vinyasa"
        subtitle="Dynamic flowing practices synchronizing breath with movement"
        courses={ashtangaCourses}
        bg="white"
        decoration="mandala"
      />

      <CourseSection
        title="200-Hour Teacher Training Programs"
        subtitle="Comprehensive foundations for yoga teaching across multiple styles"
        courses={ttc200Courses}
        bg="beige"
        decoration="leaf"
      />

      <CourseSection
        title="Advanced Teacher Training"
        subtitle="Specialized continuing education for experienced yoga teachers"
        courses={ttc300Courses}
        bg="white"
        decoration="mandala"
      />

      <CourseSection
        title="Specialized Workshops & Modules"
        subtitle="YACEP approved continuing education in specific yoga disciplines"
        courses={specializedCourses}
        bg="beige"
        decoration="leaf"
      />

      <CTASection />
    </main>
  );
}
