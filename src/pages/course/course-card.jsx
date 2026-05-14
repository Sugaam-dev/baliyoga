// import { useNavigate } from "react-router-dom";
// export function CourseCard({ title, description, level, duration }) {
//   const navigate = useNavigate();
//   const levelColors = {
//     Beginner: "bg-green-100 text-green-700",
//     Intermediate: "bg-blue-100 text-blue-700",
//     Advanced: "bg-purple-100 text-purple-700",
//     "All Levels": "bg-amber-100 text-amber-700",
//   };

//   return (
//     <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between h-full">
//       <div className="space-y-4">
//         <h3 className="text-xl font-semibold text-stone-800">
//           {title}
//         </h3>

//         <p className="text-stone-600 text-sm leading-relaxed">
//           {description}
//         </p>
//       </div>

      

//       <div className="mt-6 space-y-4">
//         {level && (
//           <span
//             className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${levelColors[level]}`}
//           >
//             {level}
//           </span>
//         )}

//         {duration && (
//           <p className="text-sm text-stone-500">
//             Duration: {duration}
//           </p>
//         )}

//         <button  onClick={() => navigate("/200-hour-yoga-teacher-training-in-bali")} className="w-full mt-2 bg-[#b4533c] text-white py-2.5 rounded-full font-medium hover:bg-[#9e4633] transition">
         
//           Enroll Now
//         </button>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";

export function CourseCard({
  title,
  description,
  level,
  duration,
}) {
  const navigate = useNavigate();

  const levelColors = {
    Beginner:
      "bg-[#5f7a63]/20 text-[#cfe3d0] border border-[#6f8c73]/30",

    Intermediate:
      "bg-[#6f8c73]/20 text-[#d7e6d5] border border-[#7d9b81]/30",

    Advanced:
      "bg-[#7d5b45]/20 text-[#f0ddd0] border border-[#9b745a]/30",

    "All Levels":
      "bg-[#8b684f]/20 text-[#f5e2d2] border border-[#a77f61]/30",
  };

  return (
    <div
      className="
        relative
        h-full
        rounded-[30px]
        overflow-hidden

        bg-gradient-to-br
        from-[#314236]/95
        via-[#2a372e]/95
        to-[#4a382d]/95

        backdrop-blur-xl

        border
        border-[#607462]/20

        shadow-[0_10px_40px_rgba(0,0,0,0.30)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]
      "
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[180px]

          bg-gradient-to-b
          from-[#7a9b78]/10
          to-transparent

          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          p-6
          sm:p-7
          xl:p-8

          flex
          flex-col
          justify-between

          h-full
        "
      >
        {/* TOP */}
        <div>
          {/* LEVEL */}
          {level && (
            <span
              className={`
                inline-flex
                items-center
                px-4
                py-1.5
                rounded-full
                text-xs
                tracking-wide
                font-medium
                mb-6
                backdrop-blur-md
                ${levelColors[level]}
              `}
            >
              {level}
            </span>
          )}

          {/* TITLE */}
          <h3
            className="
              text-2xl
              xl:text-[28px]
              leading-tight
              font-light
              text-[#f6efe7]
            "
          >
            {title}
          </h3>

          {/* DIVIDER */}
          <div
            className="
              w-16
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-[#769170]
              to-[#b7855b]
              mt-5
              mb-5
            "
          />

          {/* DESCRIPTION */}
          <p
            className="
              text-[#d7c7b8]
              text-sm
              sm:text-base
              leading-7
            "
          >
            {description}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-8">
          {/* DURATION */}
          {duration && (
            <div
              className="
                flex
                items-center
                justify-between

                border-t
                border-[#5b6c5d]/20

                pt-5
                mb-6
              "
            >
              <span className="text-[#98ad95] text-sm tracking-wide">
                Duration
              </span>

              <span className="text-[#f1e8df] font-medium">
                {duration}
              </span>
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={() =>
              navigate(
                "/200-hour-yoga-teacher-training-in-bali"
              )
            }
            className="
              relative
              overflow-hidden
              w-full

              rounded-full

              bg-gradient-to-r
              from-[#769170]
              via-[#6b8667]
              to-[#9b745a]

              px-6
              py-3.5

              text-white
              font-medium
              tracking-wide

              transition-all
              duration-500

              hover:scale-[1.02]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
            "
          >
            <span className="relative z-10">
              Enroll Now
            </span>

            {/* BUTTON SHINE */}
            <div
              className="
                absolute
                inset-0

                translate-x-[-100%]
                hover:translate-x-[100%]

                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent

                transition-transform
                duration-1000
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
}