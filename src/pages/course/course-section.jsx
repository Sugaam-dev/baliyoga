import { CourseCard } from "./course-card";
import Leaf from "../../assets/leaf.svg";
import Mandala from "../../assets/mandala.svg";

export function CourseSection({ title, subtitle, courses, bg, decoration }) {
  return (
    <section
      className={`relative overflow-hidden py-20 ${
        bg === "beige" ? "bg-[#e6d6c3]/40" : "bg-white"
      }`}
    >
      {/* Decorative Leaf */}
      {decoration === "leaf" && (
        <img
          src={Leaf}
          alt=""
          className="hidden xl:block absolute left-0 top-10 h-[600px] text-stone-300 opacity-10 pointer-events-none"
        />
      )}

      {/* Decorative Mandala */}
      {decoration === "mandala" && (
        <img
          src={Mandala}
          alt=""
          className="hidden xl:block absolute -right-32 top-0 h-[500px] text-stone-300 opacity-10 pointer-events-none"
        />
      )}

      <div className="relative max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {title}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}