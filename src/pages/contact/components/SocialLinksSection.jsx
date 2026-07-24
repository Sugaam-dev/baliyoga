export default function SocialLinksSection() {
  return (
    <section className="py-12 md:py-8 md:py-10 bg-[#e6d6c3]/40">
      <div className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 text-center space-y-8">

        <h2 className="text-3xl font-medium">
          Follow Our Journey
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          <a href="#" className="text-[#b4533c] font-medium hover:underline">
            Instagram
          </a>

          <a href="#" className="text-[#b4533c] font-medium hover:underline">
            Facebook
          </a>

          <a href="#" className="text-[#b4533c] font-medium hover:underline">
            YouTube
          </a>

          <a href="#" className="text-[#b4533c] font-medium hover:underline">
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}
