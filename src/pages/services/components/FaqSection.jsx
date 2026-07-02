import React, { useState } from "react";
import faqImage from "../../../assets/images/services/yogaimage.jpg";

const faqs = [
  {
    question: "Can I teach yoga anywhere with a 200 hour yoga teacher certification?",
    answer:
      "Yes. At the successful completion of the 200 hour yoga teacher training course, you will get the basic skills required to start teaching yoga. You will also be eligible to register with the Yoga Alliance USA at the RYT-200 level, allowing you to teach globally in studios, retreat, gym and wellness space."
  },
  {
    question: "What experience do I need to enroll in 200 hour yoga teacher training Bali course?",
    answer:
      "This course is suitable for all levels including full beginners. However, we recommend practicing an initial course or basic yoga regularly before training to help you absorb teachings more effectively."
  },
  {
    question: "Do I need to bring my own yoga mat?",
    answer:
      "Yes, you have to bring your own yoga mat or you can buy from a nearby market."
  },
  {
    question: "How long does it take for 200 hour yoga teacher training in Bali to complete?",
    answer:
      "This Yoga Teacher training course is for 20 days, including your check-in, orientation function and checkout."
  },
  {
    question: "Will language be a problem during the yoga teacher training in Bali?",
    answer:
      "Not at all. All classes are conducted in English, and our teachers make sure every student clearly understands the lessons. We welcome students from around the world, creating a friendly and supportive international community."
  },
  {
    question: "Is it okay if I’m not very flexible or advanced in yoga?",
    answer:
      "Yes, flexibility and experience are not required! The course is designed to help you grow gradually, both physically and mentally. You’ll be surprised at how much progress you make by the end of the training."
  },
  {
    question: "What makes Bali Yoga Retreats different from other yoga schools?",
    answer:
      "At Bali Yoga Retreats, we focus not only on physical postures but also on deep inner growth. Our small class sizes, experienced teachers, and peaceful natural surroundings create a personal and transformative learning experience you’ll never forget."
  },
  {
    question: "Will there be exams or assessments during the course?",
    answer:
      "Yes, there will be both practical and written assessments. These help you understand how much you’ve learned and build your confidence to teach yoga effectively. Don’t worry — your teachers guide and support you through every step."
  },
  {
    question: "What happens if I miss a class during training?",
    answer:
      "We understand that unexpected things can happen. If you miss a class due to illness or an emergency, our team will help you make up the missed lessons so you don’t fall behind."
  },
  {
    question: "What kind of weather can I expect in Bali during the training?",
    answer:
      "Bali has warm, tropical weather all year round. Light clothing is perfect for practice, and you’ll enjoy beautiful mornings and peaceful evenings surrounded by nature."
  }
];

const FaqSection = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 bg-[#f7f4f2]">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#b37a55]">
            FAQs About 200 Hour Yoga Teacher Training Bali
          </h2>

          <div className="flex justify-center items-center mt-4">
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
            <span className="mx-3 text-[#d9b6a3] text-xl">🪷</span>
            <div className="w-20 h-[1px] bg-[#d9b6a3]"></div>
          </div>

          <p className="text-gray-600 mt-3 text-sm">
            Have Questions? We've Got You Covered!
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* FAQ LEFT */}
          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#e6c9b5] rounded-md overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left px-5 py-4 text-[#b37a55] font-medium hover:bg-[#faf6f3]"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#c3875a]">✦</span>
                    {faq.question}
                  </span>

                  <span className="text-xl">
                    {active === index ? "−" : "+"}
                  </span>
                </button>

                {active === index && (
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}

          </div>

          {/* IMAGE RIGHT */}
          <div className="w-full h-full">
            <img
              src={faqImage}
              alt="Yoga Training"
              className="w-full h-full object-cover rounded-md border border-[#e6c9b5]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default FaqSection;
