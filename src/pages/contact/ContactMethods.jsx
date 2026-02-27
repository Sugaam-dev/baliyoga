export default function ContactMethods() {
  return (
    <section className="py-24 bg-[#e6d6c3]/40">
      <div className="max-w-6xl mx-auto px-6 space-y-10 text-center">

        <h2 className="text-3xl font-medium">
          WhatsApp / Call
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="https://wa.me/1234567890"
            className="bg-[#b4533c] text-white px-8 py-3 rounded-full hover:bg-[#9e4633] transition"
          >
            Chat on WhatsApp
          </a>

          <a
            href="tel:+1234567890"
            className="border border-[#b4533c] text-[#b4533c] px-8 py-3 rounded-full hover:bg-[#b4533c]/10 transition"
          >
            Call Us
          </a>

        </div>

        <div className="text-stone-600 text-sm">
          Business Hours: Monday – Sunday | 8:00 AM – 7:00 PM  
          <br />
          For urgent matters, please contact us via WhatsApp.
        </div>

      </div>
    </section>
  );
}