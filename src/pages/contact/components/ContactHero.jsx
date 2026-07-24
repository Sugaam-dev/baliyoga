import bali1 from "../../../assets/images/home/bali1.jpg";

export default function ContactHero() {
  return (
    <section className="relative py-8 md:py-10 md:py-10 md:py-12 text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bali1}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Connect With Us
        </h1>

        <p className="text-lg text-stone-100">
          We are here to support your journey. Reach out for course details,
          retreat inquiries, or personalized guidance.
        </p>
      </div>

      {/* Bottom fade */}
      
    </section>
  );
}
