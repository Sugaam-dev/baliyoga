import VideoCard from "./videoCard";

export default function VideoGallery({ sections }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {sections.map((section, index) => (
          <div key={index} className="space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.videos.map((video, i) => (
                <VideoCard key={i} video={video} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}