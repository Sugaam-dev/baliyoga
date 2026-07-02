import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import room from "../../../assets/images/services/room.jpg";
import room1 from "../../../assets/images/services/room1.jpg";
import room2 from "../../../assets/images/services/room2.jpg";
import room3 from "../../../assets/images/services/room3.jpg";
import room4 from "../../../assets/images/services/room4.jpg";
import room5 from "../../../assets/images/services/room5.jpg";

/* FOOD IMAGES */
import food1 from "../../../assets/images/services/yoga-bali-yoga-school.jpg";
import food2 from "../../../assets/images/services/yoga-bali-yoga.jpg";
import food3 from "../../../assets/images/services/yoga-bali.jpg";

const FoodAccommodation = () => {
  return (
    // <section className="w-full py-20 bg-[#f7f4f2] px-6">
    <section  id="rooms" className="scroll-mt-32 w-full py-20 bg-[#ffffff] px-6">
        
      

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            Food & Accommodation For 200 Hour Yoga TTC In Bali
          </h2>
        </div>

        {/* FOOD CAROUSEL */}
        <div className="mb-16">     

  <p className="text-gray-500 text-sm mb-2">
    Vegetarian – Vegan – Gluten free
  </p>

  <h3 className="text-2xl font-semibold text-[#b37a55] mb-4">
    Healthy Food
  </h3>

  <p className="text-gray-600 text-sm leading-relaxed ">
    We serve delicious vegetarian food. According to the needs of our students
    we also serve gluten free and vegan food. However, if you have any specific
    conditions such as food allergies etc., we will be happy to prepare special
    food for you. Our food is prepared in a loving and spiritual manner to ensure
    most benefit from the food. Fresh ingredients, organic vegetables and fruit
    are used wherever possible. 3 meals are served a day, breakfast, lunch and
    dinner. The food menu is prepared through taking into consideration a balanced
    nutritional diet.
  </p>

<div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            <SwiperSlide>
              <img src={food1} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={food2} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={food3} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={food1} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={food2} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={food3} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

          </Swiper>
          </div>
           {/* FOOD DETAILS SECTION */}

<div className="mt-8 text-gray-700 text-sm leading-relaxed ">

  {/* DESCRIPTION */}
  <p className="mb-4">
    Bali Yoga Retreats (BYR) mainly focuses on the sattvic diet that is prepared
    to support your yoga practice, helps in improving digestion, cleanses the
    body and keeps your mind calm and focused. Students will enjoy the most
    tasty and healthy meals in Bali Yoga Retreats. Our kitchen team is guided
    by the Ashram and they know how to prepare food with spiritual feelings.
    We serve mostly vegetarian dishes.
  </p>

  <p className="mb-4">
    But with the requirement of the students we also provide:
  </p>

  {/* LIST */}
  <ul className="space-y-2 mb-6">

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span> Vegan
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span> Gluten free
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span> Vegetarian
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span> Lactose free
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span> Fruits
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span> Salad
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span> Ayurvedic khichdi
    </li>

  </ul>

  {/* WE PROVIDE */}
  <h4 className="text-[#b37a55] font-semibold mb-3">
    We provide:
  </h4>

  <ul className="space-y-2 mb-6">

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span>
      Breakfast (9:00 am to 10:00 am)
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span>
      Lunch (1:00 pm to 2:00 pm)
    </li>

    <li className="flex items-center gap-2">
      <span className="text-[#c3875a]">✿</span>
      Dinner (7:00 pm to 8:00 pm)
    </li>

  </ul>

  {/* NOTE BOX */}
  <div className="bg-[#ead5c8] border-l-4 border-[#c3875a] text-[#b37a55] p-4 flex items-start gap-2 text-sm">
    <span className="text-lg">☞</span>
    <p>
      <strong>Note:</strong> During Sundays, we serve only breakfast.
      You can enjoy lunch and dinner outdoors from amazing local restaurants
      and get to know more about Bali food culture.
    </p>
  </div>

</div>

        </div>

        {/* ACCOMMODATION CAROUSEL */}
        <div>

              <div className="mt-20   ">

      {/* SUBTITLE WITH LINE */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-[2px] bg-[#d3b8a6]"></div>

        <p className="text-gray-500 text-lg">
          Your Heavenly Home
        </p>
      </div>

      {/* MAIN TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#b37a55] mb-6">
        Comfortable Accommodation
      </h2>

      {/* PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-4">
        At Bali Yoga Retreats, we offer comfortable and peaceful accommodations
        to make your stay relaxing. Our rooms are designed to provide a calm
        environment, perfect for rest and meditation. You can enjoy our clean
        and hygienic rooms, where you can recharge your body and mind after a
        day of yoga and workshops. Every detail is arranged in keeping student’s
        comfort and safety in mind so your stay will feel like a home to you.
        Proper ventilation in the room is available so that you can enjoy the
        fresh air all the time.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Many types of accommodation (Air Conditioner Room) are available at our
        yoga school, from single rooms to shared rooms. You can choose the rooms
        according to your requirement.
      </p>

    </div>

      <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >

            <SwiperSlide>
              <img src={room} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={room1} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={room2} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={room3} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={room4} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={room5} className="w-full h-64 object-cover rounded-lg" />
            </SwiperSlide>

          </Swiper>
            </div>
            <div className=" mt-16 text-gray-700">

                {/* MAIN TITLE */}
                <h3 className="text-2xl font-semibold text-[#b37a55] mb-4">
                    Stay and facilities
                </h3>

                {/* SUBTITLE */}
                <p className="font-semibold mb-3">
                    If you need to leave early:
                </p>

                {/* BULLET LIST */}
                <ul className="space-y-2 mb-8 text-sm">

                    <li className="flex gap-2">
                    <span className="text-[#c3875a]">✿</span>
                    Students who have an emergency and need to leave before their
                    course ends, if it’s one or two days as we can arrange to complete
                    the full course requirements in time.
                    </li>

                    <li className="flex gap-2">
                    <span className="text-[#c3875a]">✿</span>
                    If a student needs to leave earlier than one or two days they
                    will have to complete the course online. Then the certificate
                    will be sent after passing the examination.
                    </li>

                    <li className="flex gap-2">
                    <span className="text-[#c3875a]">✿</span>
                    No refund available for students who leave early without
                    completing the course.
                    </li>

                </ul>

                {/* FREE DAY */}
                <h4 className="text-[#b37a55] font-semibold mb-2">
                    Free Day
                </h4>

                <p className="text-sm leading-relaxed mb-6">
                    Sunday is free day and we have excursion tours arranged which are
                    part of the full program. All are included in your course fees.
                    On Sundays you will receive only breakfast and you can enjoy your
                    lunch and dinner outside in the many beautiful cafes & restaurants.
                </p>

                {/* ACCOMMODATION */}
                <h4 className="text-[#b37a55] font-semibold mb-2">
                    Accommodation
                </h4>

                <p className="text-sm leading-relaxed mb-6">
                    We offer a range of accommodation options designed for your comfort
                    and peace of mind. Our modern, cozy rooms create a warm and relaxing
                    space where you can feel at home, unwind, and focus on your yoga journey.
                </p>

                {/* FACILITIES */}
                <h4 className="text-[#b37a55] font-semibold mb-2">
                    Facilities
                </h4>

                <p className="text-sm leading-relaxed">
                    At Bali Yoga Retreats, we provide everything you need for a
                    comfortable stay. Enjoy clean, airy rooms, spacious yoga halls,
                    free Wi-Fi, and peaceful garden areas. With fresh drinking water,
                    24-hour electricity, and regular housekeeping, your experience
                    remains relaxed and worry-free.
                </p>

                </div>

        </div>

      </div>

    </section>
  );
};

export default FoodAccommodation;
