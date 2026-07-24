import bali3 from "../../../assets/images/home/bali3.jpg";

export default function RetreatsHero() {
  return (
    <section className="relative py-8 md:py-10 md:py-10 md:py-12 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bali3}
          alt="Bali Retreat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Retreats & Transformational Experiences
        </h1>

        <p className="text-lg text-stone-100">
          Step away from daily life and immerse yourself in yoga,
          healing practices, and authentic Bali experiences.
        </p>
      </div>
      
    </section>
  );
}
