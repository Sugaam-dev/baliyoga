import bali1 from "../../../assets/images/home/bali1.jpg";

export default function GuestWorkshopSection() {
  return (
    <section className="py-12 md:py-8 md:py-10 bg-white">
      <div className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 space-y-12">
        <h2 className="text-3xl font-semibold text-center">
          Guest Teacher Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={bali1}
              alt="Guest Teacher"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              International Masterclass Series
            </h3>
            <p className="text-stone-600">
              Join internationally renowned yoga teachers for limited-seat,
              immersive masterclasses designed to deepen your practice.
            </p>

            <div className="text-sm text-stone-500">
              Upcoming Date: October 2026
            </div>

            <button className="bg-[#b4533c] text-white px-6 py-3 rounded-full hover:bg-[#9e4633] transition">
              Reserve Your Seat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
