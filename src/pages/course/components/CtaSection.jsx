import React, { useState } from "react";
import { submitToWeb3Forms } from "../../../utils/web3forms";
import { CheckCircle2 } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setError("");

    try {
      const res = await submitToWeb3Forms(
        { email },
        "Course Page Inquiry - Bali Yoga Kendra",
        "cta"
      );
      if (res.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        setError(res.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#18231c] text-[#f5eee6] py-14 sm:py-16 md:py-20">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top left subtle circle */}
        <div
          className="
            absolute
            -top-24
            -left-24

            h-[320px]
            w-[320px]

            rounded-full
            bg-[#769170]/10

            blur-[120px]
          "
        />

        {/* Bottom right warm glow */}
        <div
          className="
            absolute
            -bottom-28
            -right-28

            h-[360px]
            w-[360px]

            rounded-full
            bg-[#9b745a]/15

            blur-[140px]
          "
        />

        {/* Center ambient glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2

            -translate-x-1/2
            -translate-y-1/2

            h-[420px]
            w-[520px]

            rounded-full
            bg-[#50664d]/10

            blur-[160px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            overflow-hidden

            rounded-[32px]

            border
            border-[#617364]/20

            bg-gradient-to-b
            from-[#222e25]/90
            to-[#1a251e]/95

            p-8
            sm:p-12
            md:p-16

            text-center

            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
          "
        >
          {/* TOP TAG */}
          <div className="inline-flex items-center justify-center">
            <span
              className="
                rounded-full
                border
                border-[#769170]/30

                bg-[#769170]/10

                px-4
                py-1.5

                text-xs
                sm:text-sm

                font-medium
                tracking-wider
                uppercase

                text-[#b8d1b3]
              "
            >
              Start Your Transformation
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2
            className="
              mt-6

              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl

              font-normal
              tracking-tight
              text-white
            "
          >
            Ready to Begin Your <br />
            <span className="italic text-[#d6b097]">Yoga Journey</span> in
            Bali?
          </h2>

          {/* SUBTEXT */}
          <p
            className="
              mx-auto
              mt-6

              max-w-2xl

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

          {/* FORM / SUCCESS MESSAGE */}
          {isSubmitted ? (
            <div className="mt-10 p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 max-w-xl mx-auto flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <p className="text-emerald-200 text-sm sm:text-base font-medium">
                Thank you! We've received your request and will email you course information shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
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
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                disabled={isSubmitting}
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
                  disabled:opacity-70
                  cursor-pointer
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Get Course Information"}
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
          )}

          {error && (
            <p className="mt-3 text-red-400 text-xs">{error}</p>
          )}

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
