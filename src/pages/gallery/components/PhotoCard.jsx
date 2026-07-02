export default function PhotoCard({ image }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end">
        <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition">
          <p className="text-sm font-medium border-l-4 border-[#b4533c] pl-3">
            {image.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
