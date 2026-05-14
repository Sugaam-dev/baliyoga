// import bali1 from "../home/images/bali1.jpg";

// export function HeroSection() {
//   return (
//     <section className="relative py-32 text-white">
      
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={bali1}
//           alt="Yoga Courses"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Content */}
//       <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
//         <h1 className="text-4xl md:text-5xl font-semibold">
//           Deepen Your Practice Through Authentic Yoga
//         </h1>

//         <p className="text-lg text-stone-100">
//           Explore structured yoga courses designed for every level —
//           from foundational learning to advanced teacher training.
//         </p>

        
//       </div>
      
//     </section>
//   );
// }



import bali1 from "../home/images/bali1.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bali1}
          alt="Yoga Courses"
          className="
            w-full
            h-full
            object-cover
            object-center
            scale-105
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"></div>

        {/* Soft Bottom Fade */}
        {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f6f1e8] to-transparent"></div> */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d6a77a]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ffffff]/10 blur-[140px] rounded-full"></div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1700px]
          mx-auto
          px-6
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-24
          2xl:px-32
        "
      >
        <div className="max-w-4xl">

          {/* Small Label */}
          <p
            className="
              uppercase
              tracking-[6px]
              text-[#d6a77a]
              text-xs
              sm:text-sm
              mb-6
            "
          >
            Bali Inspired Yoga Journey
          </p>

          {/* Heading */}
          <h1
            className="
              font-light
              leading-[1.1]
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              2xl:text-[92px]
            "
          >
            Deepen Your
            <span className="block italic text-[#d6a77a]">
              Yoga Practice
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              text-base
              sm:text-lg
              md:text-xl
              leading-8
              text-stone-200
              max-w-2xl
            "
          >
            Explore immersive yoga programs crafted to nourish the body,
            calm the mind, and awaken inner transformation — from beginner
            foundations to advanced teacher training in a serene Bali-inspired atmosphere.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button
              className="
                px-8
                py-4
                rounded-full
                bg-[#b07d52]
                hover:bg-[#9b6842]
                transition-all
                duration-300
                shadow-2xl
                text-white
                font-medium
                hover:scale-105
              "
            >
              Explore Courses
            </button>

            <button
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/30
                bg-white/5
                backdrop-blur-md
                hover:bg-white/10
                transition-all
                duration-300
                text-white
                hover:scale-105
              "
            >
              View Retreats
            </button>
          </div>

          {/* Stats */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              gap-6
              mt-14
            "
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">
              <h3 className="text-3xl font-semibold text-[#d6a77a]">
                5000+
              </h3>
              <p className="text-sm text-stone-300 mt-2">
                Students Trained
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md">
              <h3 className="text-3xl font-semibold text-[#d6a77a]">
                15+
              </h3>
              <p className="text-sm text-stone-300 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md col-span-2 sm:col-span-1">
              <h3 className="text-3xl font-semibold text-[#d6a77a]">
                Bali
              </h3>
              <p className="text-sm text-stone-300 mt-2">
                Inspired Experience
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}