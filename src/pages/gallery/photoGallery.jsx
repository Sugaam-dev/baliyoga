import PhotoCard from "./photoCard";

export default function PhotoGallery({ sections }) {
  return (
    <section className="py-20 bg-[#e6d6c3]/40">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {sections.map((section, index) => (
          <div key={index} className="space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.images.map((image, i) => (
                <PhotoCard key={i} image={image} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}