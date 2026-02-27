export function CourseCard({ title, description, level, duration }) {
  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-blue-100 text-blue-700",
    Advanced: "bg-purple-100 text-purple-700",
    "All Levels": "bg-amber-100 text-amber-700",
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-stone-800">
          {title}
        </h3>

        <p className="text-stone-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      

      <div className="mt-6 space-y-4">
        {level && (
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${levelColors[level]}`}
          >
            {level}
          </span>
        )}

        {duration && (
          <p className="text-sm text-stone-500">
            Duration: {duration}
          </p>
        )}

        <button className="w-full mt-2 bg-[#b4533c] text-white py-2.5 rounded-full font-medium hover:bg-[#9e4633] transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}