import RetreatsHero from "./retreatsHero.jsx";
import RetreatSection from "./retreatSection";
import RetreatCard from "./retreatCard";
import GuestWorkshopSection from "./guestWorkshopSection";

// Bali images
import bali1 from "../home/images/bali1.jpg";
import bali2 from "../home/images/bali2.jpg";
import bali3 from "../home/images/bali3.jpg";

// Yoga assets
import yoga0 from "../../assets/yoga0.jpg";
import yoga1 from "../../assets/yoga1.jpg";

export default function Retreat() {
  const baliRetreats = [
    {
      title: "Ubud Jungle Retreat",
      description: "Immersive retreat surrounded by lush jungle and sacred stillness.",
      image: bali1,
    },
    {
      title: "Beachfront Bali Retreat",
      description: "Oceanfront sunrise practices and sunset meditations.",
      image: bali2,
    },
    {
      title: "Holistic Immersion Retreat",
      description: "Yoga, breathwork, philosophy, and community living experience.",
      image: bali3,
    },
  ];

  const weekendIntensives = [
    {
    title: "Advanced Asana Intensive",
    image: yoga0,
    description:
      "Refine complex postures and elevate your technical precision with guided expert instruction.",
  },
  {
    title: "Breathwork & Pranayama Immersion",
    image: yoga1,
    description:
      "Explore advanced breathing techniques to enhance vitality and mental clarity.",
  },
  {
    title: "Yoga Philosophy & Alignment Lab",
    image: bali1,
    description:
      "Dive into classical teachings and modern alignment insights in a focused weekend format.",
  },
  ];

  const detoxPrograms = [
    { title: "Ayurvedic Detox Retreat", image: bali2, description: "A rejuvenating program combining yoga, cleansing diets, and herbal therapies." },
    { title: "Gut Reset Program", image: yoga0, description: "A 3-day program focused on digestive health and gut healing." },
    { title: "Silent Meditation Retreat", image: bali3, description: "A transformative silent retreat to deepen your meditation practice." },
  ];

  const ayurvedaWorkshops = [
    { title: "Ayurvedic Cooking Workshop", image: yoga1, description: "Learn to prepare nourishing Ayurvedic meals tailored to your dosha." },
    { title: "Dinacharya Lifestyle Training", image: bali1, description: "Learn the daily practices of Ayurveda for optimal health and well-being." },
    { title: "Seasonal Cleansing Program", image: bali2, description: "A guided program to cleanse and reset your body with seasonal Ayurvedic practices." },
  ];

  return (
    <main className="bg-stone-50 text-stone-800">
      <RetreatsHero />

      <RetreatSection
        title="Yoga & Wellness Retreats"
        description="Experience transformative retreats in the heart of Bali."
        items={baliRetreats}
        bg="white"
      />

      <section className="py-20 bg-[#e6d6c3]/40">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            Weekend Intensives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {weekendIntensives.map((item, i) => (
              <RetreatCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            Detox & Healing Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {detoxPrograms.map((item, i) => (
              <RetreatCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#e6d6c3]/40">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl font-semibold text-center">
            Ayurveda & Lifestyle Workshops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ayurvedaWorkshops.map((item, i) => (
              <RetreatCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <GuestWorkshopSection />
    </main>
  );
}