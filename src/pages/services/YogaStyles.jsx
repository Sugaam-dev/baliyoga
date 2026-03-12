import React from "react";

const styles = [
  {
    title: "Hatha Yoga",
    desc: "Learn a slow, gentle style of yoga with deep stretching. Hatha yoga contributes to developing flexibility, balance and body awareness.",
    icon: "🧘",
  },
  {
    title: "Anatomy and Alignment",
    desc: "Reduce the high risk of injury and learn proper alignment and poses and correct posture. This information is really crucial to learn for the safety of students as there are lots of complex yoga postures which might lead to injury.",
    icon: "🧍",
  },
  {
    title: "Vinyasa Yoga",
    desc: "Concentrate on the fluidity of sequences linking breath to movement. Vinyasa improves strength, balance and coordination while improving cardio skills.",
    icon: "🏃",
  },
  {
    title: "Meditation",
    desc: "Experience the art of stillness through guided meditation practices that calm the mind and awaken inner awareness. Meditation helps you cultivate focus, emotional balance, and a deeper connection with your true self—an essential skill for every aspiring yoga teacher.",
    icon: "🧘‍♂️",
  },
  {
    title: "Ashtanga Yoga",
    desc: "Examine the 8 limbs of yoga, Asana, ethical practices & self-discipline. Ashtanga makes you more advanced in your practice, both physically and mentally.",
    icon: "🪷",
  },
  {
    title: "Yoga Philosophy",
    desc: "Dive into the timeless teachings of yoga beyond the mat. Learn about the Yoga Sutras of Patanjali, the eight limbs of yoga, and the spiritual principles that guide a yogic lifestyle. This wisdom will inspire not only your practice but also how you live and teach yoga in daily life.",
    icon: "📜",
  },
];

const YogaStyles = () => {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            Discover the Yoga Styles You Will Learn
          </h2>

          {/* Divider */}
          <div className="flex justify-center items-center my-4">
            <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
            <span className="mx-3 text-[#d3a98c] text-xl">🪷</span>
            <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
          </div>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
            During your Yoga Teacher Training in Bali, you’ll explore a diverse range of traditional and modern yoga styles
             designed to strengthen your practice and teaching foundation.
             Each style brings unique benefits, helping you cultivate balance, awareness, and inner harmony.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {styles.map((item, index) => (
            <div key={index} className="flex items-start gap-5">

              {/* ICON */}
              <div className="min-w-[70px] h-[70px] flex items-center justify-center rounded-full bg-[#efe3da] text-[#b37a55] text-2xl">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-[#b37a55] font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default YogaStyles;