export default function RetreatSection({ title, description, items, bg }) {
  return (
    <section className={`py-20 ${bg === "white" ? "bg-white" : "bg-[#e6d6c3]/40"}`}>
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 md:w-1/2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
                <button className="bg-[#b4533c] text-white px-6 py-2 rounded-full hover:bg-[#9e4633] transition">
                  Explore Retreat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
