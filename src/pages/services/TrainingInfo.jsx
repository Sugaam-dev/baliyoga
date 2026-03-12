import React from "react";
import yogaImg from "./images/image.jpg";

const TrainingInfo = () => {
  return (
    <section className="w-full bg-[#f7f4f2] py-16 px-6">
      
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">

          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            200 Hour Yoga Teacher Training in Bali | Yoga Alliance Certified
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-[1px] w-20 bg-[#d9b6a3]"></div>
            <span className="mx-4 text-[#d9b6a3] text-xl">🪷</span>
            <div className="h-[1px] w-20 bg-[#d9b6a3]"></div>
          </div>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Learn, Discover, Free Yourself and Fly
          </p>

        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="w-full">
            <img
              src={yogaImg}
              alt="Yoga Teacher Training"
              className="w-full h-auto rounded-md border border-[#d9b6a3]"
            />
          </div>

          {/* Text */}
          <div className="text-gray-700 space-y-5 text-sm md:text-base leading-relaxed">

            <p>
             Our 200 hour yoga teacher training in Bali course is designed to provide you a complete overall foundation in 
             traditional and modern yoga practices. Registered with the Yoga Alliance, our bali 200 hour yoga teacher training 
             follows the Yoga Alliance curriculum, which includes in-depth study of yoga asanas,
              alignment techniques, pranayama (breath control), meditation, anatomy, philosophy, and teaching methodology.
            </p>

            {/* <p>
              This includes in-depth study of yoga asanas, alignment
              techniques, pranayama (breath control), meditation, anatomy,
              philosophy, and teaching methodology.
            </p> */}

            <p>
              The 200hr yoga teacher training in Bali is guided by our experienced yoga teachers who will help you through 
              this comprehensive curriculum that includes both theoretical and practical aspects of yoga. Our 200 hour yoga ttc in Bali,
               ubud follows a structured approach of teaching, where you will learn and practice various styles of yoga,
               including Hatha, Vinyasa, and Yin, and develop teaching skills through practical experience.
            </p>

            <p>
              After completing the course, you will receive a 200 Hour Yoga Teacher Training certificate that is recognized by Yoga Alliance,
               which will allow you to teach yoga worldwide.
               This journey is not just about becoming a teacher it's a path of personal growth, clarity, and transformation.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TrainingInfo;