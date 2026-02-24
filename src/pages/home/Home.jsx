import { ChevronRight } from "lucide-react";

import schoolImage from "./images/school-building.jpg";
import universityImage from "./images/university-building.jpg";
import studentsImage from "./images/students-parents.jpg";
import teacherImage from "./images/teacher-faculty.jpg";
import HeroSection from "../../components/Hero";

const cardsData = [
  {
    id: 1,
    title: "Schools (K-12)",
    image: schoolImage,
    points: [
      "Outcome ownership",
      "Teacher enablement",
      "Parent trust",
      "Student readiness",
    ],
    buttonText: "Explore Schools",
    buttonColor: "bg-[#0066FF] text-white border border-[#ddd]",
  },
  {
    id: 2,
    title: "Colleges & Universities",
    image: universityImage,
    points: [
      "Student intelligence",
      "Accreditation readiness",
      "Governance dashboards",
      "Career outcomes",
    ],
    buttonText: "Explore Universities",
    buttonColor: "bg-[#0066FF] text-white border border-[#ddd]",
  },
  {
    id: 3,
    title: "Students",
    image: studentsImage,
    points: [
      "Clarity & confidence",
      "Psychometric insights",
      "Academic readiness",
      "Visibility without pressure",
    ],
    buttonText: "Explore Schools",
    buttonColor: "bg-[#0066FF] text-white border border-[#ddd]",
  },
  {
    id: 4,
    title: "Parents",
    image: teacherImage,
    titleColor: "text-[#8B0000]",
    points: [
      "Reduced academic load",
      "AI-supported mentoring",
      "Learning gap visibility",
      "Outcome alignment",
    ],
    buttonText: "Explore Teachers & Faculty",
    buttonColor: "bg-[#0066FF] text-white",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f5]">
      <HeroSection/>
      {/* Hero Section */}
      <section className="flex min-h-[50vh] items-center justify-center bg-[#f8f5f5] px-4 py-16">
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#333] md:text-4xl lg:text-5xl">
            Education does not fail due to{" "}
            <span className="text-[#8B0000]">lack</span> of effort.
          </h1>
          <p className="mt-6 text-lg text-[#666] md:text-xl">
            It fails due to lack of integration, visibility, and decision
            intelligence.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section
        className="px-4 py-16"
        style={{
          background:
            "linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 50%, #e0f2fe 100%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
            >
              {/* Card Image */}
              <div className="mb-4 flex justify-center">
                <div className="h-32 w-40 overflow-hidden rounded-lg">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Card Title */}
              <h3
                className={`mb-4 flex items-center gap-1 text-xl font-semibold ${card.titleColor || "text-[#333]"}`}
              >
                {card.title}
                <ChevronRight className="h-5 w-5" />
              </h3>

              {/* Card Points */}
              <ul className="mb-6 space-y-2">
                {card.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#555]">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#999]" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Card Button */}
              <button
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${card.buttonColor}`}
              >
                {card.buttonText}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* THE FUTURE Section */}
      <section className="bg-[#f8f5f5] px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-xl font-semibold tracking-widest text-[#333]">
            THE FUTURE
          </h2>
          <p className="text-lg text-[#555] md:text-xl">
            The future of education is systems and decisions, not just coaching.
          </p>
          <p className="mt-4 text-lg text-[#555] md:text-xl">
            Institutions that own outcomes will lead.
          </p>
        </div>
      </section>
    </main>
  );
}
