export default function VideoCard({ video }) {
  return (
    <div className="space-y-4">
      <div className="aspect-video rounded-2xl overflow-hidden shadow-sm">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <h3 className="text-lg font-medium text-center">
        {video.title}
      </h3>
    </div>
  );
}