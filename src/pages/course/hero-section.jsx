import bali1 from "../home/images/bali1.jpg";

export function HeroSection() {
  return (
    <section className="relative py-32 text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bali1}
          alt="Yoga Courses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Deepen Your Practice Through Authentic Yoga
        </h1>

        <p className="text-lg text-stone-100">
          Explore structured yoga courses designed for every level —
          from foundational learning to advanced teacher training.
        </p>

        
      </div>
      
    </section>
  );
}