import PhotoCard from "./PhotoCard";

export default function PhotoGallery({ sections }) {
  return (
    <section className="py-10 md:py-12 bg-[#e6d6c3]/40">
      <div className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 space-y-16">
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
