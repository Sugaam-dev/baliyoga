// export function CTASection() {
//   return (
//     <section className="w-full py-12 md:py-10 md:py-12 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
//             Ready to Begin Your Yoga Journey?
//           </h2>
//           <p className="text-lg text-muted-foreground text-balance">
//             Join our community of practitioners and find the perfect course for your practice level and goals.
//           </p>

//           <form className="space-y-4 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
//             >
//               Get Course Information
//             </button>
//           </form>

//           <p className="text-sm text-muted-foreground">
//             We'll send you information about our courses and special offers. No spam, ever.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



export function CTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-10 md:py-12
        sm:py-12 md:py-8 md:py-10
        lg:py-28
        xl:py-8 md:py-10 md:py-10 md:py-12

        bg-gradient-to-br
        from-[#1f2a24]
        via-[#2c3b31]
        to-[#4b392d]
      "
    >
      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[350px]

          bg-[#769170]/20
          blur-[140px]

          rounded-full
          pointer-events-none
        "
      />

      {/* BOTTOM GLOW */}
      <div
        className="
          absolute
          bottom-0
          right-0

          w-[500px]
          h-[300px]

          bg-[#9b745a]/20
          blur-[120px]

          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10

          max-w-[1500px]
          mx-auto

          px-5
          sm:px-6
          md:px-10
          xl:px-16
          2xl:px-24
        "
      >
        <div
          className="
            max-w-4xl
            mx-auto

            rounded-[36px]

            border
            border-[#5d705f]/30

            bg-[#314236]/70
            backdrop-blur-2xl

            shadow-[0_20px_80px_rgba(0,0,0,0.35)]

            px-6
            sm:px-10
            lg:px-16

            py-8 md:py-10
            sm:py-8 md:py-10
            lg:py-10 md:py-12

            text-center
          "
        >
          {/* SMALL LABEL */}
          <p
            className="
              uppercase
              tracking-[6px]

              text-[#98ad95]

              text-xs
              sm:text-sm

              mb-6
            "
          >
            Begin Your Journey
          </p>

          {/* HEADING */}
          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl

              font-light
              leading-[1.1]

              text-[#f6efe7]
            "
          >
            Ready To Transform
            <span className="block italic text-[#b88a62]">
              Your Practice?
            </span>
          </h2>

          {/* DIVIDER */}
          <div
            className="
              w-24
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

          {/* DESCRIPTION */}
          <p
            className="
              max-w-2xl
              mx-auto

              text-[#d8c8bb]

              text-base
              sm:text-lg
              xl:text-xl

              leading-8
              sm:leading-9
            "
          >
            Join our global yoga community and experience authentic
            teachings designed to elevate your body, mind, and spirit
            through immersive Bali-inspired learning.
          </p>

          {/* FORM */}
          <form
            className="
              mt-10

              max-w-2xl
              mx-auto

              flex
              flex-col
              sm:flex-row

              gap-4
            "
          >
            {/* INPUT */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1

                h-[58px]

                rounded-full

                border
                border-[#617364]/30

                bg-[#243127]/80

                px-6

                text-[#f5eee6]
                placeholder:text-[#97aa94]

                outline-none

                backdrop-blur-xl

                transition-all
                duration-300

                focus:border-[#769170]
                focus:ring-2
                focus:ring-[#769170]/30
              "
              required
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="
                relative
                overflow-hidden

                h-[58px]

                rounded-full

                px-8
                sm:px-10

                bg-gradient-to-r
                from-[#769170]
                via-[#698464]
                to-[#9b745a]

                text-white
                font-medium
                tracking-wide

                transition-all
                duration-500

                hover:scale-[1.02]
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]
              "
            >
              <span className="relative z-10">
                Get Course Information
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
          </form>

          {/* FOOTNOTE */}
          <p
            className="
              mt-6

              text-sm
              leading-7

              text-[#9fb19c]
            "
          >
            Receive course updates, retreat information, and exclusive
            wellness insights. No spam — only mindful communication.
          </p>
        </div>
      </div>
    </section>
  );
}
