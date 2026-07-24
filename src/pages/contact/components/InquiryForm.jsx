export default function InquiryForm() {
  return (
    <section className="py-12 md:py-8 md:py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6 space-y-10">

        <h2 className="text-3xl font-medium text-center">
          Send Us an Inquiry
        </h2>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4533c]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4533c]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4533c]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Subject</label>
            <select className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4533c]">
              <option>Course Inquiry</option>
              <option>Retreat Booking</option>
              <option>Workshop Details</option>
              <option>General Question</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4533c]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#b4533c] text-white py-3 rounded-full hover:bg-[#9e4633] transition"
          >
            Submit Inquiry
          </button>

        </form>
      </div>
    </section>
  );
}
