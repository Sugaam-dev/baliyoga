export default function RetreatCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white group flex flex-col">
      
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">
          {item.title}
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed flex-grow">
          {item.description ||
            "An immersive experience designed to deepen your practice and reconnect you with balance, clarity, and vitality."}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="bg-[#b4533c] text-white px-4 py-2 rounded-full text-sm hover:bg-[#9e4633] transition">
            Book Now
          </button>

          <button className="border border-[#b4533c] text-[#b4533c] px-4 py-2 rounded-full text-sm hover:bg-[#b4533c]/10 transition">
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
}
