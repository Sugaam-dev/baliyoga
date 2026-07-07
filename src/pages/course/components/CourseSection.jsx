// import { CourseCard } from "./CourseCard";
// import Leaf from "../../../assets/leaf.svg";
// import Mandala from "../../../assets/mandala.svg";

// export function CourseSection({ title, subtitle, courses, bg, decoration }) {
//   return (
//     <section
//       className={`relative overflow-hidden py-20 ${
//         bg === "beige" ? "bg-[#e6d6c3]/40" : "bg-white"
//       }`}
//     >
//       {/* Decorative Leaf */}
//       {decoration === "leaf" && (
//         <img
//           src={Leaf}
//           alt=""
//           className="hidden xl:block absolute left-0 top-10 h-[600px] text-stone-300 opacity-10 pointer-events-none"
//         />
//       )}

//       {/* Decorative Mandala */}
//       {decoration === "mandala" && (
//         <img
//           src={Mandala}
//           alt=""
//           className="hidden xl:block absolute -right-32 top-0 h-[500px] text-stone-300 opacity-10 pointer-events-none"
//         />
//       )}

//       <div className="relative max-w-6xl mx-auto px-6 space-y-12">
//         <div className="text-center space-y-4">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             {title}
//           </h2>
//           <p className="text-stone-600 max-w-2xl mx-auto">
//             {subtitle}
//           </p>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course) => (
//             <CourseCard key={course.id} {...course} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { CourseCard } from "./CourseCard";
import Leaf from "../../../assets/leaf.svg";
import Mandala from "../../../assets/mandala.svg";

export function CourseSection({
  title,
  subtitle,
  courses,
  bg,
  decoration,
}) {
  return (
    <section
      className={`
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
        ${
          bg === "beige"
            ? "bg-gradient-to-br from-[#1f2a24] via-[#2f3d33] to-[#4d3a2f]"
            : "bg-gradient-to-br from-[#243127] via-[#314236] to-[#5a4334]"
        }
      `}
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[300px]
          bg-[#6f8a6d]/20
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      {/* LEAF DECORATION */}
      {decoration === "leaf" && (
        <img
          src={Leaf}
          alt=""
          className="
            hidden
            xl:block
            absolute
            -left-16
            top-20
            h-[520px]
            opacity-[0.05]
            pointer-events-none
            select-none
          "
        />
      )}

      {/* MANDALA DECORATION */}
      {decoration === "mandala" && (
        <img
          src={Mandala}
          alt=""
          className="
            hidden
            xl:block
            absolute
            -right-24
            top-10
            h-[500px]
            opacity-[0.05]
            pointer-events-none
            rotate-12
            select-none
          "
        />
      )}

      <div
        className="
          relative
          z-10
          max-w-[1700px]
          mx-auto
          px-5
          sm:px-6
          md:px-10
          xl:px-16
          2xl:px-24
        "
      >
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <p
            className="
              uppercase
              tracking-[6px]
              text-[#9db29a]
              text-xs
              sm:text-sm
              mb-5
            "
          >
            Sacred Learning Path
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl
              2xl:text-7xl
              font-light
              leading-[1.15]
              text-[#f4ede4]
            "
          >
            {title}
          </h2>

          <div
            className="
              w-24
              h-[2px]
              bg-gradient-to-r
              from-[#7d9b77]
              to-[#b3845a]
              mx-auto
              mt-8
              mb-8
              rounded-full
            "
          />

          <p
            className="
              text-[#d5c8bc]
              text-base
              sm:text-lg
              xl:text-xl
              leading-8
              max-w-3xl
              mx-auto
            "
          >
            {subtitle}
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            gap-6
            sm:gap-8
            lg:gap-10
            xl:gap-12

            sm:grid-cols-2
            xl:grid-cols-3

            items-stretch
          "
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="
                group
                h-full
              "
            >
              <div
                className="
                  h-full
                  rounded-[30px]

                  bg-[#314236]/80
                  backdrop-blur-xl

                  border
                  border-[#5d705f]/40

                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]

                  transition-all
                  duration-500

                  group-hover:-translate-y-2
                  group-hover:bg-[#384b3f]
                  group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
              >
                <CourseCard {...course} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM GLOW */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[300px]
          bg-[#8b5f3c]/20
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />
    </section>
  );
}
