import React from "react";
import campusImage from "./images/tattvacampus.png";
import graphimage from "./images/graphimage.png";

import {
  ChevronRight,
  CheckCircle2,
  BarChart3,
  ClipboardCheck,
  TrendingUp,
  Lightbulb,
  Microscope,
  Briefcase,
  ArrowRight,
  BookOpen,
  Layers,
  Brain,
  LineChart,
  Target,
} from "lucide-react";

export default function CollegeUniversityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            For Colleges & Universities
          </h1>
          <p className="mb-6 text-lg text-gray-600 sm:text-xl">
            Systems for Accreditation, Intelligence, and Career Outcomes
          </p>
        </div>
      </section>

      {/* Core Message Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Section title with divider lines */}
          <div className="my-6 flex items-center justify-center gap-6">
            <div className="h-px w-24 sm:w-24 lg:w-32 bg-gray-400" />
            <h2 className="text-lg font-medium tracking-widest text-gray-800">
              SYSTEMS, NOT SERVICES
            </h2>
            <div className="h-px w-24 sm:w-24 lg:w-32 bg-gray-400" />
          </div>

          {/* Subtitle */}
          <p className="mt-2 text-base text-gray-600 sm:text-lg">
            From enrollment to employment, powered by decision intelligence.
          </p>
        </div>
      </section>

      {/* Student Intelligence Systems Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="my-10 flex items-center justify-center gap-6">
            <div className="h-px w-32 sm:w-24 lg:w-32 bg-gray-300" />
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl">
              STUDENT INTELLIGENCE SYSTEMS
            </h2>
            <div className="h-px w-32 sm:w-24 lg:w-32 bg-gray-300" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* CMG System Card */}
            <div className="flex flex-col justify-center">
              <div className="rounded-lg border border-gray-300 bg-gray-50 p-0">
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={graphimage}
                    alt="CMG Student Intelligence Graph"
                    className="block w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  One-touch insights into student decision readiness
                </p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Low-visibility alerts for differentiated mentoring
                </p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Data signals on placement and employment probabilities
                </p>
              </div>

              <button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded">
                Explore Student Systems{" "}
                <ChevronRight className="ml-2 h-4 w-4 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TATTVA Campus Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="my-10 flex items-center justify-center gap-6">
            <div className="h-px w-32 sm:w-24 lg:w-32 bg-gray-300" />
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl">
              TATTVA CAMPUS
            </h2>
            <div className="h-px w-32 sm:w-24 lg:w-32 bg-gray-300" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Illustration Placeholder */}
            <div className="flex items-center justify-center rounded-lg border border-gray-100 overflow-hidden">
              <img
                src={campusImage}
                alt="Campus Lifecycle Platform"
                className="w-full max-w-full h-auto object-contain"
              />
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  End-to-end student lifecycle platform
                </p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Accreditation readiness and governance dashboards
                </p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Career intelligence linked to enrollment and placement rates
                </p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Institutional framework for academic quality and governance
                </p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  OBE, CO-PO-PSO alignment and accreditation readiness
                </p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 text-gray-600">■</div>
                <p className="text-gray-700">
                  Audit-ready systems for continuous compliance and improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K2C and Accreditation Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* K2C Column */}
            <div className="rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-gray-300" />
                <h3 className="text-center text-xl font-bold text-gray-900">
                  KNOWLEDGE TO CAREERS (K2C)
                </h3>
                <div className="h-px w-12 sm:w-16 md:w-20 bg-gray-300" />
              </div>

              {/* K2C Flow */}
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
                <div className="text-gray-700">
                  <BookOpen className="mx-auto mb-2 h-7 w-7 text-red-600" />
                  <p className="text-sm font-semibold">Knowledge</p>
                </div>

                <ArrowRight className="h-5 w-5 text-gray-400" />

                <div className="text-gray-700">
                  <Layers className="mx-auto mb-2 h-7 w-7 text-red-600" />
                  <p className="text-sm font-semibold">Capability</p>
                </div>

                <ArrowRight className="h-5 w-5 text-gray-400" />

                <div className="text-gray-700">
                  <Briefcase className="mx-auto mb-2 h-7 w-7 text-red-600" />
                  <p className="text-sm font-semibold">Career</p>
                </div>
              </div>

              {/* K2C Benefits */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex gap-3">
                  <div className="shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Integrated academic & career ecosystem from K-12 to
                    University to Careers
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Continuity of intelligence across critical transitions
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditation Column */}
            <div className="rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-gray-300" />
                <h3 className="text-center text-xl font-bold text-gray-900">
                  ACCREDITATION & GOVERNANCE
                </h3>
                <div className="h-px w-12 sm:w-16 md:w-20 bg-gray-300" />
              </div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {/* Accreditation Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 text-center">
                  <ClipboardCheck className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Accreditation Readiness
                  </h4>
                  <p className="text-xs text-gray-600">
                    Ensuring compliance and institutional quality
                  </p>
                </div>

                {/* Governance Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 text-center">
                  <BarChart3 className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Governance Dashboards
                  </h4>
                  <p className="text-xs text-gray-600">
                    Management visibility on outcomes & analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message Section */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Own Outcomes. Not Fight Fires.
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Institutions that drive intelligence across enrollment, learning,
            and careers lead the future.
          </p>
        </div>
      </section>

      {/* PSYCHOMETRICS */}
      <section className="border-b border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* PSYCHOMETRICS */}
            <div className="rounded-lg border border-gray-200 p-4 sm:p-6 md:p-8">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 sm:w-16 md:w-20 bg-gray-300" />
                <h3 className="text-center text-xl font-bold text-gray-900">
                  PSYCHOMETRICS
                </h3>
                <div className="h-px w-12 sm:w-16 md:w-20 bg-gray-300" />
              </div>

              {/* Psychometrics Flow */}
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
                <div className="text-gray-700">
                  <Brain className="mx-auto mb-2 h-7 w-7 text-blue-600" />
                  <p className="text-sm font-semibold">Aptitude Signals</p>
                </div>

                <ChevronRight className="h-5 w-5 text-gray-400" />

                <div className="text-gray-700">
                  <LineChart className="mx-auto mb-2 h-7 w-7 text-blue-600" />
                  <p className="text-sm font-semibold">Readiness Index</p>
                </div>

                <ChevronRight className="h-5 w-5 text-gray-400" />

                <div className="text-gray-700">
                  <Target className="mx-auto mb-2 h-7 w-7 text-blue-600" />
                  <p className="text-sm font-semibold">Guided Decisions</p>
                </div>
              </div>

              {/* PSYCHOMETRICS Benefits */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex gap-3">
                  <div className="shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Data-driven readiness signals that reveal aptitude,
                    stability, and decision confidence.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 text-gray-600">■</div>
                  <p className="text-sm text-gray-700">
                    Empowering institutions with early insights for mentoring,
                    placement, and career alignment.
                  </p>
                </div>
              </div>
            </div>

            {/* INCUBATOR */}
            <div className="rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
              <div className="mb-3 sm:mb-4 md:mb-6 flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
                <div className="h-px w-6 sm:w-10 md:w-16 bg-gray-300 flex-shrink-0" />
                <h3 className="text-center text-base sm:text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap px-1">
                  INCUBATORS
                </h3>
                  <div className="h-px w-6 sm:w-10 md:w-16 bg-gray-300 flex-shrink-0" />
              </div>

              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                {/* STUDDENT Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-3 sm:p-4 text-center">
                  <Lightbulb className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Student Startup Incubator
                  </h4>
                  <p className="text-xs text-gray-600">
                    Supporting student-led innovations through structured
                    mentoring, readiness evaluation, and funding pathways.
                  </p>
                </div>

                {/* FACULLTY Card */}
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-3 sm:p-4 text-center">
                  <Microscope className="mx-auto mb-3 h-8 w-8 text-gray-600" />
                  <h4 className="mb-2 font-semibold text-gray-900">
                    Faculty & Research Incubator
                  </h4>
                  <p className="text-xs text-gray-600">
                    Enabling faculty-driven research and ventures with
                    institutional backing, industry linkage, and grant-readiness
                    intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
