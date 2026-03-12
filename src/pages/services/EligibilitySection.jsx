import React from "react";
import yogaImg from "./images/yoga-in-bali.jpg";

const EligibilitySection = () => {
  return (
    <section
      className="w-full py-20 px-6 bg-[#f7efe9]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            What Are The Eligibility For 200 Hour Yoga Teacher Training In Bali
          </h2>

          {/* Divider */}
          <div className="flex justify-center items-center my-4">
            <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
            <span className="mx-3 text-[#d3a98c] text-xl">🪷</span>
            <div className="w-20 h-[1px] bg-[#d3a98c]"></div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* IMAGE */}
          <div className="w-full h-full">
            <img
                src={yogaImg}
                alt="Yoga in Bali"
                className="w-full h-full object-cover rounded-md shadow-md"
            />
            </div>

          {/* CONTENT */}
          <div className="text-gray-700">

            {/* WHO CAN JOIN */}
            <h3 className="text-[#b37a55] font-semibold mb-4 text-lg">
              Who can join this course?
            </h3>

            <ul className="space-y-3 text-sm leading-relaxed">

              <li className="flex gap-2">
                <span className="text-[#c3875a]">✿</span>
                Anyone who is willing to learn, whether you are new to yoga with no
                 previous experience, or you have been practicing it for some time all are welcome here in our yoga teacher training course.
              </li>

              <li className="flex gap-2">
                <span className="text-[#c3875a]">✿</span>
                Our 200 Hour Yoga Teacher Training Bali course is open to both national and international students. 
                Whether you're from Bali,
                 elsewhere in Indonesia, or any part of the world, you’re always welcome to join our yoga courses.
              </li>

              <li className="flex gap-2">
                <span className="text-[#c3875a]">✿</span>
                People aiming to become certified yoga teachers.
              </li>

              <li className="flex gap-2">
                <span className="text-[#c3875a]">✿</span>
                Don’t want to be a yoga teacher but desire to enhance your yoga practice and knowledge. 
                Then our 200 hour yoga teacher training in Bali, Indonesia could be the right option for you.
              </li>

            </ul>

            {/* PREPARATION */}
            <h3 className="text-[#b37a55] font-semibold mt-8 mb-3 text-lg">
              Preparation Tips Before You Begin Bali 200 Hour Yoga Teacher Training
            </h3>

            <p className="text-sm leading-relaxed mb-4">
              In order to prepare yourself for 200 Hour Yoga Teacher Training in Bali, Ubud there are a few things which 
              you can do including some basic pranayamas to ready your body and mind in advance. Continue with a regular 
              practice of yoga to build strength, flexibility, and endurance. Eat a healthy diet, drink plenty of water, 
              and receive enough rest. Keep performing breathing exercises to increase focus and calm your mind. Set a 
              personal goals and objectives for what you want out of the course. So, just go in with an open mind and some
               positive enthusiasm to learn and discover new things. Be open to making new friends, living a yogic lifestyle, 
              and progressing on this transformative journey that nourishes you physically, mentally, and spiritually.
            </p>

            <p className="text-sm leading-relaxed mb-4">
              Our Gurus are ready with all their heart and knowledge to guide you and support you to deepen your yoga practice
               and achieve your goals. Join the Bali 
              Yoga Retreats family and experience the endless joy of discovering your true self and this life transforming journey!
            </p>

            {/* <p className="text-sm leading-relaxed">
              Our Gurus are ready with all their heart and knowledge to guide
              you and support you to deepen your yoga practice and achieve
              your goals.
            </p> */}

          </div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;