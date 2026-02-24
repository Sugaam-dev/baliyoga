import { Link } from "react-router-dom";
import graphimage from "./images/graphimage.png";
import {
  BookOpen,
  Target,
  FileText,
  Users,
  Building2,
  BarChart3,
  Brain,
  Eye,
  Presentation,
} from "lucide-react";

export default function SchoolsPage() {
  const judgedOnCards = [
    {
      icon: BookOpen,
      title: "Student Confidence",
      iconColor: "text-slate-400",
    },
    {
      icon: Target,
      title: "Competitive Readiness",
      iconColor: "text-slate-400",
    },
    {
      icon: FileText,
      title: "Career Clarity",
      iconColor: "text-slate-400",
    },
    {
      icon: Users,
      title: "Parent Trust",
      iconColor: "text-slate-400",
    },
    {
      icon: Building2,
      title: "Institutional Reputation",
      iconColor: "text-slate-400",
    },
  ];

  const foundationCards = [
    {
      title: "TEACHER ENABLEMENT",
      description: "Reducing load, enabling mentoring.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      titleColor: "text-slate-700",
      icon: Presentation,
    },
    {
      title: "PARENT TRANSPARENCY",
      description: "Structure, clarity, and outcome visibility",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      titleColor: "text-slate-700",
      icon: Eye,
    },
    {
      title: "SCHOOLS (K-12)",
      description: "Insight dashboards, outcome oversight.",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      titleColor: "text-slate-700",
      icon: Building2,
    },
    {
      title: "MANAGEMENT CONTROL",
      description: "Insight dashboards, outcome oversight.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      titleColor: "text-slate-700",
      icon: BarChart3,
    },
    {
      title: "PSYCHOMETRICS",
      description: "Insight dashboards, reading signals.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      titleColor: "text-slate-700",
      icon: Brain,
      isNew: true,
    },
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            For Schools
          </h1>
          <p className="text-lg text-slate-600">
            Driving outcomes, not outsourcing responsibility
          </p>
        </div>
      </section>

      {/* What Schools Are Judged On */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-12">
            What Schools Are Judged On
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {judgedOnCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow"
                >
                  <IconComponent
                    className={`${card.iconColor} mb-4`}
                    size={32}
                  />
                  <p className="text-center text-slate-700 font-medium text-sm">
                    {card.title}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-slate-600 text-lg">
            Results Matter. Ownership Matters More.
          </p>
        </div>
      </section>

      {/* Institution-Led Ecosystem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-12">
            Your Own Institution-Led Ecosystem
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-100 rounded-lg h-64 border border-slate-100 overflow-hidden">
              <img
                src={graphimage}
                alt="CMG Student Intelligence Graph"
                className="block w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-1 bg-blue-600 rounded-full shrink-0"></div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    In-house{" "}
                    <span className="font-bold">Boards, JEE, NEET, CUET</span>{" "}
                    readiness
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-1 bg-blue-600 rounded-full shrink-0"></div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    AI-powered academic intelligence{" "}
                    <span className="font-bold">(IBOOKGPT)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-1 bg-blue-600 rounded-full shrink-0"></div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    Psychometric assessments & mentoring support
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-1 bg-blue-600 rounded-full shrink-0"></div>
                <div>
                  <p className="text-slate-900 font-semibold">
                    Real-time visibility into outcomes & risk areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Ownership Foundation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-12">
            Outcome Ownership Foundation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {foundationCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col p-6 rounded-lg border-2 transition-all ${card.bgColor} ${card.borderColor} ${card.isNew ? "ring-2 ring-purple-400" : ""}`}
                >
                  <IconComponent className="text-slate-400 mb-4" size={28} />
                  <h3 className={`font-bold text-sm mb-3 ${card.titleColor}`}>
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 grow">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xl text-slate-700 font-semibold mb-8">
            The future of schools is outcome ownership.
          </p>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Partner with CMG →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
