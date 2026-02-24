
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why CMG?
          </h1>
          <p className="text-xl text-gray-600">
            Owning Outcomes for a Smarter Future
          </p>
        </div>
      </section>

      {/* The Silent Failure Section */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-700 text-sm font-semibold tracking-widest mb-8">
            THE SILENT FAILURE OF EDUCATION
          </h2>
          
          {/* Icons Flow */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <div className="text-4xl">📚</div>
            <div className="text-gray-400">→</div>
            <div className="text-4xl">✏️</div>
            <div className="text-gray-400">→</div>
            <div className="text-4xl">⚙️</div>
            <div className="text-gray-400">→</div>
            <div className="text-4xl">📊</div>
          </div>

          {/* Description Text */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Despite effort from students, teachers, and parents, most education systems remain fragmented and reactive.
            </p>
          </div>

          {/* Second Quote */}
          <div className="max-w-3xl mx-auto text-center border-t border-b border-gray-200 py-8">
            <p className="text-gray-700 text-lg">
              Marks, exams, careers, and institutions operate like isolated islands.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Belief Section */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-700 text-sm font-semibold tracking-widest mb-8">
            OUR CORE BELIEF
          </h2>

          <div className="max-w-2xl mx-auto mb-6">
            <p className="text-center text-gray-700 text-lg mb-6">
              CMG is built on a simple, crucial belief:
            </p>

            <div className="border-2 border-blue-600 bg-blue-50 p-8 rounded-lg">
              <p className="text-center text-gray-900 font-semibold text-lg mb-3">
                Education does not fail due to lack of effort.
              </p>
              <p className="text-center text-gray-700">
                It fails due to lack of <span className="font-semibold">integration</span>, <span className="font-semibold">visibility</span>, and decision <span className="font-semibold">intelligence</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-700 text-sm font-semibold tracking-widest mb-8">
            WHAT WE DON'T DO
          </h2>

          <p className="text-center text-gray-700 text-lg mb-12">
            CMG is built on a simple, crucial belief:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border-2 border-gray-300 rounded-lg p-8 text-center">
              <div className="text-5xl text-gray-400 mb-4">✕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Shortcuts & noise
              </h3>
              <p className="text-gray-700">
                We don't believe in pushing students into predefined career paths or quick-fix test prep.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-gray-300 rounded-lg p-8 text-center">
              <div className="text-5xl text-gray-400 mb-4">✕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Unbounded coaching
              </h3>
              <p className="text-gray-700">
                We don't run external coaching. Our work is institution-owned.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-gray-300 rounded-lg p-8 text-center">
              <div className="text-5xl text-gray-400 mb-4">✕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                One-size fits all
              </h3>
              <p className="text-gray-700">
                We don't treat every student the same. Guidance is personalized, data-backed, and psychology-aware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-700 text-sm font-semibold tracking-widest mb-8">
            OUR APPROACH
          </h2>

          <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Data-Backed
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Psychology-Aware
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Institution-Led
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Outcome-Focused
            </button>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              We design systems that connect academic, psychological, and career outcomes, while compounding value over time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
