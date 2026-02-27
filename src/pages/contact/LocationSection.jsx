export default function LocationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            className="w-full h-[350px] md:h-[450px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Address Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-medium">
            Location & Directions
          </h2>

          <p className="text-stone-600">
            Bali Yoga Kendra  
            Ubud, Bali, Indonesia  
            Near Sacred Monkey Forest Sanctuary
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b4533c] text-white px-6 py-3 rounded-full hover:bg-[#9e4633] transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}