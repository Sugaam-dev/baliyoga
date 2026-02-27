import bali2 from "../home/images/bali2.jpg";

export default function GalleryHero() {
  return (
    <section className="relative py-32 text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bali2}
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Moments from Our Yoga Journey
        </h1>

        <p className="text-lg text-stone-100">
          Discover campus life, immersive retreats, and inspiring
          classroom experiences captured in stillness.
        </p>
      </div>
      
    </section>
  );
}