import { useState } from "react";
import { ChevronLeft, ChevronRight ,Flower2, Leaf, Sparkles, Medal} from "lucide-react";

// Import images
import bali1 from "./images/bali1.jpg";
import bali2 from "./images/bali2.jpg";
import bali3 from "./images/bali3.jpg";
import bali4 from "./images/bali4.jpg";
import bali5 from "./images/bali5.jpg";
import bali6 from "./images/bali6.jpg";
import bali7 from "./images/bali7.jpg";

import centre1 from "./images/Yoga-Searcher-Uluwatu-Bali.jpg";
import centre2 from "./images/fivelements-2.jpg";
import centre3 from "./images/baliimage.jpg";
import centre4 from "./images/Prana-Yoga-Studio-Seminyak-Bali.jpg";



import gallery1 from "./images/bali-yoga-teacher-training-check-list-NAMASTSHAY.jpg";
import gallery2 from "./images/Yoga-session-at-the-Bali-Green-Retreat.jpg";
import gallery3 from "./images/yogagallery.jpg";
import gallery4 from "./images/alchemyyoga.jpg";
import gallery5 from "./images/yoga-teacher-training-bali.jpg";
import gallery6 from "./images/Ubud-Yoga-Photography-3-1.jpg";
import gallery7 from "./images/4-Days-Yoga-Retreat-In-Canggu-Bali.jpg";
import gallery8 from "./images/the-istana-1.jpg";
import gallery9 from "./images/shutterstock_314587241.jpg";
import gallery10 from "./images/baligallery.jpg";

import retreatImg from "./images/bali1.jpg"; // or use your exact retreat image

import HeroSection from "../../Components/Hero";
import Certifications from "./Certifications";
import FounderSection from "./FounderSection";
import AdditionalActivities from "./AdditionalActivities";
import BaliYogaCourses from "./BaliYogaCourses";
import BaliYogaProgramSection from "./BaliYogaProgramSection";
import BaliYogaKendraExperience from "./BaliYogaKendraExperience";
import BaliYogaOffers from "./BaliYogaOffers";
import Hero from "../../Components/Hero";

const galleryImages = [
  {
    id: 1,
    image: bali1,
    title: "Yoga Practice",
    description: "Experience mindful movement and breath awareness.",
  },
  {
    id: 2,
    image: bali2,
    title: "Wellness & Healing",
    description: "Holistic therapies for body and soul.",
  },
  {
    id: 3,
    image: bali3,
    title: "Workshops & Events",
    description: "Join transformative learning sessions.",
  },
  {
    id: 4,
    image: bali4,
    title: "Spiritual Growth",
    description: "Deepen your inner connection.",
  },
  {
    id: 5,
    image: bali5,
    title: "Meditation Retreat",
    description: "Find peace in serene surroundings.",
  },
  {
    id: 6,
    image: bali6,
    title: "Community Connection",
    description: "Grow together in supportive community.",
  },
  {
    id: 7,
    image: bali7,
    title: "Learning Spaces",
    description: "Inspiring spaces for transformation.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const visibleImages = 3;
  const visibleImages = window.innerWidth < 768 ? 1 : 3;
  const maxIndex = galleryImages.length - visibleImages;

  // const handleNext = () => {
  //   if (currentIndex < maxIndex) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

 const handleNext = () => {
  setCurrentIndex((prev) =>
    prev >= maxIndex ? 0 : prev + 1
  );
};

  // const handlePrev = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };
  const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev <= 0 ? maxIndex : prev - 1
  );
};

  return (
    <main className="bg-[#f8f5f5]">
      <Hero />
      <BaliYogaCourses/>
      <AdditionalActivities/>
      <BaliYogaKendraExperience/>
      <Certifications/>
      <BaliYogaProgramSection/>
      <BaliYogaOffers/>
      <FounderSection/>

     {/* EXPERIENCE BALI YOGA SECTION */}
<section className="bg-[#fdfaf7] py-16 md:py-20 xl:py-24 overflow-hidden">

  {/* ULTRA WIDE WRAPPER */}
  <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">

    {/* SECTION HEADER */}
    <div className="max-w-5xl mx-auto text-center mb-14 xl:mb-20">

      {/* SMALL TITLE */}
      <p className="uppercase tracking-[4px] text-sm text-[#d97706] font-semibold mb-4">
        Bali Yoga Kendra
      </p>

      {/* HEADING */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          xl:text-6xl
          2xl:text-7xl
          font-serif
          font-semibold
          leading-tight
          text-[#234b2c]
        "
      >
        Experience the Essence of Bali Yoga
      </h2>

      {/* DECORATION */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="w-14 h-[2px] bg-[#d97706]"></div>

        <span className="text-[#d97706] text-xl">
          ❦
        </span>

        <div className="w-14 h-[2px] bg-[#234b2c]"></div>
      </div>

      {/* SUBTEXT */}
      <p
        className="
          mt-7
          text-gray-600
          max-w-3xl
          mx-auto
          text-sm
          md:text-base
          xl:text-lg
          leading-7
          xl:leading-8
        "
      >
        Explore inspiring yoga practices, retreats, workshops, and mindful
        experiences designed to deepen your connection with body, mind, and spirit.
      </p>
    </div>

    {/* SLIDER WRAPPER */}
    <div className="max-w-[1800px] mx-auto relative">

      {/* LEFT ARROW */}
      <button
        onClick={handlePrev}
        className="
          absolute
          left-2
          sm:left-4
          xl:-left-7
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-[#d97706]
          p-3
          xl:p-4
          shadow-xl
          hover:bg-[#b4533c]
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <ChevronLeft className="text-white w-5 h-5 xl:w-6 xl:h-6" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={handleNext}
        className="
          absolute
          right-2
          sm:right-4
          xl:-right-7
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-[#d97706]
          p-3
          xl:p-4
          shadow-xl
          hover:bg-[#b4533c]
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <ChevronRight className="text-white w-5 h-5 xl:w-6 xl:h-6" />
      </button>

      {/* SLIDER */}
      <div className="overflow-hidden rounded-[30px]">

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
          }}
        >
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="
                w-full
                md:w-1/2
                xl:w-1/3
                flex-shrink-0
                px-3
                xl:px-4
              "
            >
              {/* CARD */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  xl:rounded-[34px]
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[420px]
                    sm:h-[500px]
                    xl:h-[600px]
                    2xl:h-[700px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    xl:p-8
                    text-white
                  "
                >

                  {/* CATEGORY */}
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-white/20
                      backdrop-blur-md
                      px-4
                      py-2
                      text-xs
                      uppercase
                      tracking-[3px]
                      font-semibold
                      text-white
                      mb-4
                    "
                  >
                    Bali Yoga Experience
                  </span>

                  {/* TITLE */}
                  <h3
                    className="
                      text-2xl
                      xl:text-3xl
                      2xl:text-4xl
                      font-serif
                      font-semibold
                      leading-snug
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      text-sm
                      xl:text-base
                      text-gray-200
                      leading-7
                      max-w-xl
                    "
                  >
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <button
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/30
                      bg-white/10
                      backdrop-blur-md
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      uppercase
                      tracking-wide
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#d97706]
                      hover:border-[#d97706]
                      hover:gap-3
                    "
                  >
                    Explore Experience

                    <span className="text-lg">
                      →
                    </span>
                  </button>
                </div>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#234b2c] to-[#d97706] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

       {/* ======================================================== */}

       {/* BALI YOGA RETREATS SECTION */}
<section className="bg-[#f6f1ed] py-16 md:py-20 xl:py-24 overflow-hidden">

  {/* ULTRA WIDE WRAPPER */}
  <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">

    <div className="max-w-[1800px] mx-auto">

      {/* HEADING */}
      <div className="text-center max-w-5xl mx-auto">

        {/* SMALL TITLE */}
        <p className="uppercase tracking-[4px] text-sm text-[#d97706] font-semibold mb-4">
          Bali Yoga Kendra
        </p>

        {/* MAIN TITLE */}
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            xl:text-6xl
            2xl:text-7xl
            font-serif
            font-semibold
            leading-tight
            text-[#234b2c]
          "
        >
          Bali Yoga Retreats (BYR): Teacher Training, Workshops and Retreats
        </h2>

        {/* DECORATION */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="w-14 h-[2px] bg-[#d97706]"></div>

          <span className="text-[#d97706] text-xl">
            ❦
          </span>

          <div className="w-14 h-[2px] bg-[#234b2c]"></div>
        </div>

        {/* SUB TEXT */}
        <p
          className="
            mt-7
            text-gray-600
            max-w-4xl
            mx-auto
            text-sm
            md:text-base
            xl:text-lg
            leading-7
            xl:leading-8
          "
        >
          Go on a life-changing yoga adventure in Bali. Learn to become a
          teacher, join transformational workshops, or relax on deeply healing
          retreats surrounded by tropical serenity and mindful living.
        </p>
      </div>

      {/* CARDS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-8
          xl:gap-10
          2xl:gap-12
          mt-16
          xl:mt-20
        "
      >

        {/* CARD 1 */}
        <div
          className="
            group
            bg-white
            rounded-[28px]
            p-8
            xl:p-10
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-2
            border
            border-[#eadfce]
            text-center
            relative
            overflow-hidden
          "
        >
          {/* BG EFFECT */}
          <div
            className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              rounded-full
              bg-[#d97706]/5
              transition-all
              duration-500
              group-hover:scale-150
            "
          ></div>

          {/* ICON */}
          <div
            className="
              relative
              w-24
              h-24
              rounded-full
              border-2
              border-[#d97706]
              flex
              items-center
              justify-center
              mx-auto
              mb-7
              bg-[#fffaf5]
              shadow-md
              transition-all
              duration-500
              group-hover:bg-[#d97706]
            "
          >
            <Flower2
              size={38}
              className="text-[#d97706] group-hover:text-white transition-all duration-500"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              text-[#234b2c]
              font-serif
              font-semibold
              text-2xl
              xl:text-3xl
              leading-snug
              group-hover:text-[#d97706]
              transition-all
              duration-300
            "
          >
            12 Types of Yoga Courses
          </h3>

          {/* TEXT */}
          <p
            className="
              text-gray-600
              mt-5
              text-sm
              md:text-base
              leading-7
              xl:leading-8
            "
          >
            Our extensive yoga teacher training courses in Bali inspire deeper
            learning and self-discovery, including Multistyle Yoga, Kundalini
            Yoga, and transformative short-term programs.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="
            group
            bg-white
            rounded-[28px]
            p-8
            xl:p-10
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-2
            border
            border-[#eadfce]
            text-center
            relative
            overflow-hidden
          "
        >
          {/* BG EFFECT */}
          <div
            className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              rounded-full
              bg-[#234b2c]/5
              transition-all
              duration-500
              group-hover:scale-150
            "
          ></div>

          {/* ICON */}
          <div
            className="
              relative
              w-24
              h-24
              rounded-full
              border-2
              border-[#234b2c]
              flex
              items-center
              justify-center
              mx-auto
              mb-7
              bg-[#f7faf7]
              shadow-md
              transition-all
              duration-500
              group-hover:bg-[#234b2c]
            "
          >
            <Leaf
              size={38}
              className="text-[#234b2c] group-hover:text-white transition-all duration-500"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              text-[#234b2c]
              font-serif
              font-semibold
              text-2xl
              xl:text-3xl
              leading-snug
            "
          >
            5 Days Yoga Retreat
          </h3>

          {/* TEXT */}
          <p
            className="
              text-gray-600
              mt-5
              text-sm
              md:text-base
              leading-7
              xl:leading-8
            "
          >
            This 5-day retreat offers space to relax, heal, and reconnect with
            yourself through yoga, meditation, mindfulness, and inner peace.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="
            group
            bg-white
            rounded-[28px]
            p-8
            xl:p-10
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-2
            border
            border-[#eadfce]
            text-center
            relative
            overflow-hidden
          "
        >
          {/* BG EFFECT */}
          <div
            className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              rounded-full
              bg-[#d97706]/5
              transition-all
              duration-500
              group-hover:scale-150
            "
          ></div>

          {/* ICON */}
          <div
            className="
              relative
              w-24
              h-24
              rounded-full
              border-2
              border-[#d97706]
              flex
              items-center
              justify-center
              mx-auto
              mb-7
              bg-[#fffaf5]
              shadow-md
              transition-all
              duration-500
              group-hover:bg-[#d97706]
            "
          >
            <Sparkles
              size={38}
              className="text-[#d97706] group-hover:text-white transition-all duration-500"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              text-[#234b2c]
              font-serif
              font-semibold
              text-2xl
              xl:text-3xl
              leading-snug
            "
          >
            14 Workshops
          </h3>

          {/* TEXT */}
          <p
            className="
              text-gray-600
              mt-5
              text-sm
              md:text-base
              leading-7
              xl:leading-8
            "
          >
            Join workshops that awaken your energy and elevate your life through
            Meditation, Yoga Nidra, Sound Healing, breathwork, and conscious practices.
          </p>
        </div>

        {/* CARD 4 */}
        <div
          className="
            group
            bg-white
            rounded-[28px]
            p-8
            xl:p-10
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-2
            border
            border-[#eadfce]
            text-center
            relative
            overflow-hidden
          "
        >
          {/* BG EFFECT */}
          <div
            className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              rounded-full
              bg-[#234b2c]/5
              transition-all
              duration-500
              group-hover:scale-150
            "
          ></div>

          {/* ICON */}
          <div
            className="
              relative
              w-24
              h-24
              rounded-full
              border-2
              border-[#234b2c]
              flex
              items-center
              justify-center
              mx-auto
              mb-7
              bg-[#f7faf7]
              shadow-md
              transition-all
              duration-500
              group-hover:bg-[#234b2c]
            "
          >
            <Medal
              size={38}
              className="text-[#234b2c] group-hover:text-white transition-all duration-500"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              text-[#234b2c]
              font-serif
              font-semibold
              text-2xl
              xl:text-3xl
              leading-snug
            "
          >
            11+ Years of Experience
          </h3>

          {/* TEXT */}
          <p
            className="
              text-gray-600
              mt-5
              text-sm
              md:text-base
              leading-7
              xl:leading-8
            "
          >
            With over 11 years of yoga teaching experience in Bali since 2015,
            we continue sharing authentic yogic wisdom and transformational guidance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
       {/* ======================================================= */}


            {/* BALI YOGA CENTRE SECTION */}
<section className="bg-[#f3f3f3] py-16 md:py-20 xl:py-24 overflow-hidden">

  {/* ULTRA WIDE WRAPPER */}
  <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">

    <div className="max-w-[1800px] mx-auto">

      {/* SECTION HEADER */}
      <div className="text-center max-w-5xl mx-auto mb-16 xl:mb-24">

        {/* SMALL TITLE */}
        <p className="uppercase tracking-[4px] text-sm text-[#d97706] font-semibold mb-4">
          Bali Yoga Kendra
        </p>

        {/* HEADING */}
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            xl:text-6xl
            2xl:text-7xl
            font-serif
            font-semibold
            leading-tight
            text-[#234b2c]
          "
        >
          WHAT’S HAPPENING AT THE BALI YOGA CENTRE
        </h2>

        {/* DECORATION */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="w-14 h-[2px] bg-[#d97706]"></div>

          <span className="text-[#d97706] text-xl">
            ❦
          </span>

          <div className="w-14 h-[2px] bg-[#234b2c]"></div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-7 text-gray-600 text-sm md:text-base xl:text-lg leading-7 xl:leading-8 max-w-3xl mx-auto">
          Explore mindful experiences, holistic wellness spaces, yoga events,
          healing therapies, nourishing food, and conscious lifestyle offerings
          at Bali Yoga Kendra.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-2
          gap-10
          xl:gap-14
          2xl:gap-16
        "
      >

        {[
          {
            img: centre1,
            title: "Yoga Classes & Events",
            desc: "Daily classes, retreats, workshops, yoga holidays and transformational teacher trainings.",
          },
          {
            img: centre2,
            title: "Cafe & Lounge",
            desc: "A peaceful and mindful place to enjoy delicious healthy meals and relax after class.",
          },
          {
            img: centre3,
            title: "Lifestyle Shop",
            desc: "Explore yoga clothing, handmade jewelry, wellness products, snacks and mindful essentials.",
          },
          {
            img: centre4,
            title: "Beauty / Body Work",
            desc: "Natural facials, therapeutic massage and healing body treatments for yogis.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="
              group
              bg-white
              rounded-[28px]
              overflow-hidden
              shadow-md
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >
            {/* IMAGE WRAPPER */}
            <div className="relative overflow-hidden">

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-[280px]
                  sm:h-[340px]
                  xl:h-[420px]
                  2xl:h-[500px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#234b2c]/60
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              ></div>

              {/* FLOATING ICON */}
              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  w-14
                  h-14
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  text-[#d97706]
                  text-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                  translate-y-4
                "
              >
                🪷
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 xl:p-9 text-center">

              {/* TITLE */}
              <h3
                className="
                  text-[#234b2c]
                  text-xl
                  md:text-2xl
                  xl:text-3xl
                  font-serif
                  font-semibold
                  leading-snug
                  group-hover:text-[#d97706]
                  transition-all
                  duration-300
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-4
                  text-gray-600
                  text-sm
                  md:text-base
                  xl:text-lg
                  leading-7
                  xl:leading-8
                  max-w-xl
                  mx-auto
                "
              >
                {item.desc}
              </p>

              {/* BUTTON */}
              <button
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-[#234b2c]
                  hover:text-[#d97706]
                  font-semibold
                  text-sm
                  uppercase
                  tracking-wide
                  transition-all
                  duration-300
                  group-hover:gap-3
                "
              >
                Discover More

                <span className="text-lg">
                  →
                </span>
              </button>
            </div>

            {/* BOTTOM LINE */}
            <div className="h-1 w-0 bg-gradient-to-r from-[#234b2c] to-[#d97706] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>





{/* RETREAT SECTION */}
<section className="bg-gradient-to-b from-[#eadccc] to-[#e6d6c3] py-16 md:py-20 xl:py-24 overflow-hidden">
  
  {/* ULTRA WIDE WRAPPER */}
  <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">

    {/* MAIN GRID */}
    <div className="max-w-[1800px] mx-auto grid items-center gap-14 xl:gap-20 lg:grid-cols-2">

      {/* LEFT CONTENT */}
      <div className="relative z-10">

        {/* BACKGROUND DECORATION */}
        <div
          className="
            absolute
            -left-24
            -top-20
            w-[320px]
            h-[320px]
            rounded-full
            border
            border-[#b4533c]/20
            opacity-40
            hidden
            lg:block
          "
        ></div>

        <div
          className="
            absolute
            -left-10
            top-10
            w-[220px]
            h-[220px]
            rounded-full
            border
            border-[#b4533c]/10
            opacity-40
            hidden
            lg:block
          "
        ></div>

        {/* SMALL TITLE */}
        <p className="uppercase tracking-[4px] text-sm text-[#b4533c] font-semibold mb-5">
          Bali Yoga Kendra
        </p>

        {/* MAIN TITLE */}
        <h2
          className="
            relative
            text-4xl
            sm:text-5xl
            xl:text-6xl
            2xl:text-7xl
            font-serif
            font-bold
            leading-tight
            text-[#b4533c]
          "
        >
          OUR RETREATS
        </h2>

        {/* DECORATION */}
        <div className="flex items-center gap-3 mt-6">
          <div className="w-16 h-[2px] bg-[#b4533c]"></div>

          <span className="text-[#b4533c] text-xl">
            ❦
          </span>

          <div className="w-16 h-[2px] bg-[#234b2c]"></div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-8 text-gray-700 text-sm md:text-base xl:text-lg leading-7 xl:leading-8 max-w-2xl">
          Experience transformational retreats surrounded by Bali’s healing
          energy, tropical nature, yoga philosophy, meditation, and soulful
          community living designed for complete rejuvenation.
        </p>

        {/* RETREAT LINKS */}
        <div className="mt-10 space-y-5 max-w-lg">

          {/* ITEM */}
          <div
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white/70
              backdrop-blur-sm
              px-6
              py-5
              shadow-md
              border
              border-white/50
              cursor-pointer
              hover:bg-[#b4533c]
              transition-all
              duration-500
            "
          >
            <div>
              <h3 className="text-lg xl:text-xl font-semibold text-[#234b2c] group-hover:text-white transition duration-300">
                Signature Retreats
              </h3>

              <p className="text-sm text-gray-600 mt-1 group-hover:text-white/80 transition duration-300">
                Deep healing, yoga & wellness immersion
              </p>
            </div>

            <span
              className="
                text-3xl
                text-[#b4533c]
                group-hover:text-white
                transition-all
                duration-300
                group-hover:translate-x-1
              "
            >
              ›
            </span>
          </div>

          {/* ITEM */}
          <div
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              bg-white/70
              backdrop-blur-sm
              px-6
              py-5
              shadow-md
              border
              border-white/50
              cursor-pointer
              hover:bg-[#234b2c]
              transition-all
              duration-500
            "
          >
            <div>
              <h3 className="text-lg xl:text-xl font-semibold text-[#234b2c] group-hover:text-white transition duration-300">
                Yogi’s Garden
              </h3>

              <p className="text-sm text-gray-600 mt-1 group-hover:text-white/80 transition duration-300">
                Nature inspired mindful retreat experience
              </p>
            </div>

            <span
              className="
                text-3xl
                text-[#234b2c]
                group-hover:text-white
                transition-all
                duration-300
                group-hover:translate-x-1
              "
            >
              ›
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#b4533c]
            bg-transparent
            px-8
            py-4
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-[#b4533c]
            transition-all
            duration-500
            hover:bg-[#b4533c]
            hover:text-white
            hover:gap-4
            shadow-md
          "
        >
          ALL RETREATS

          <span className="text-lg">
            →
          </span>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end">

        {/* IMAGE BG EFFECT */}
        <div
          className="
            absolute
            -bottom-8
            -right-8
            w-full
            h-full
            rounded-[40px]
            bg-[#234b2c]/10
            hidden
            lg:block
          "
        ></div>

        {/* IMAGE */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            xl:rounded-[40px]
            shadow-2xl
            group
            w-full
            max-w-xl
            2xl:max-w-2xl
          "
        >
          <img
            src={retreatImg}
            alt="Retreat"
            className="
              w-full
              h-[420px]
              sm:h-[500px]
              xl:h-[650px]
              2xl:h-[760px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-transparent
            "
          ></div>

          {/* FLOATING CARD */}
          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              bg-white/90
              backdrop-blur-md
              rounded-2xl
              p-5
              shadow-xl
            "
          >
            <p className="uppercase tracking-[3px] text-xs text-[#b4533c] font-semibold mb-2">
              Transform Your Journey
            </p>

            <h3 className="text-[#234b2c] text-xl font-serif font-semibold">
              Retreat Into Nature & Inner Peace
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-[#ffffff] py-16 md:py-20 xl:py-24 overflow-hidden">
  
  {/* ULTRA WIDE WRAPPER */}
  <div className="mx-auto w-full max-w-[1920px] 2xl:max-w-[2200px] px-4 sm:px-6 lg:px-8 xl:px-10">

    <div className="max-w-[1800px] mx-auto">

      {/* HEADER ROW */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[4px] text-sm text-[#d97706] font-semibold mb-4">
            Bali Yoga Kendra
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl
              2xl:text-7xl
              font-serif
              font-semibold
              leading-tight
              text-[#234b2c]
            "
          >
            Discover the Bali Yoga Kendra Gallery
          </h2>

          <div className="flex items-center gap-3 mt-5">
            <div className="w-14 h-[2px] bg-[#d97706]"></div>

            <span className="text-[#d97706] text-xl">
              ❦
            </span>

            <div className="w-14 h-[2px] bg-[#234b2c]"></div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        {/* <div className="max-w-xl">
          <p className="text-gray-600 text-sm md:text-base xl:text-lg leading-7 xl:leading-8">
            Explore moments of mindfulness, healing, yoga practice,
            nature immersion, and transformational experiences from
            Bali Yoga Kendra.
          </p>
        </div> */}
      </div>

      {/* GALLERY GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-5
          gap-5
          xl:gap-7
          2xl:gap-8
        "
      >
        {[
          gallery1,
          gallery2,
          gallery3,
          gallery4,
          gallery5,
          gallery6,
          gallery7,
          gallery8,
          gallery9,
          gallery10,
        ].map((img, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              xl:rounded-[28px]
              shadow-md
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >
            {/* IMAGE */}
            <img
              src={img}
              alt="Yoga Gallery"
              className="
                w-full
                h-[280px]
                sm:h-[300px]
                lg:h-[320px]
                2xl:h-[380px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#234b2c]/70
                via-transparent
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            ></div>

            {/* HOVER ICON */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            >
             
            </div>

            {/* BOTTOM LINE */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#234b2c] to-[#d97706] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </main>
  );
}