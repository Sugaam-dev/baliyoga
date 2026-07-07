import React from "react";

// Section Components
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import Philosophy from "./components/Philosophy";
import Teachers from "./components/Teachers";
import Lifestyle from "./components/Lifestyle";
import Testimonials from "./components/Testimonials";

// HERO + SECTION IMAGES
import storyImg from "../../assets/images/about/home-hero.jpg";
import philosophyImg from "../../assets/images/about/Yoga-Teacher.jpg";
import lifestyleImg from "../../assets/images/about/jbz00ii9peh5jqjjyna2.jpg";
import ourImg from "../../assets/images/about/about.jpg";

// TEACHER IMAGES
import teacher1 from "../../assets/images/about/SrinathSir.jpeg";
import teacher2 from "../../assets/images/about/Sahana.jpeg";
import teacher3 from "../../assets/images/about/RaviSir.jpeg";
import teacher4 from "../../assets/images/about/Minu.jpeg";
import teacher5 from "../../assets/images/about/Hrishanth.jpeg";
import teacher6 from "../../assets/images/about/Charanya.jpeg";
import teacher7 from "../../assets/images/about/vinayaksir.jpeg";
import teacher8 from "../../assets/images/about/Anulasha.png";
import teacher9 from "../../assets/images/about/ranjan_sir.jpg";

// TESTIMONIAL IMAGES
import test1 from "../../assets/images/about/test1.jpg";
import test2 from "../../assets/images/about/test2.jpg";
import test3 from "../../assets/images/about/test3.jpg";
import test4 from "../../assets/images/about/test4.jpeg";
import test5 from "../../assets/images/about/test5.jpg";
import test from "../../assets/images/about/test.jpg";

export default function About() {
  const teachers = [
    {
      name: "SRINATHA SIR",
      title: "Founder & Director Yoga With Srinatha",
      image: teacher1,
      description:
        "Dr. Srinatha is the Founder and Director of Yoga With Srinatha, with 30+ years of experience in the field of yoga education and practice. He is a senior teacher of Hatha Yoga, Iyengar Yoga, and Ashtanga Yoga."
    },
    {
      name: "SAHANA P R",
      title: "Yin Yoga, Prenatal & Postnatal Yoga, and Anatomy Teacher",
      image: teacher2,
      description:
        "Sahana P R is a dedicated yoga teacher and educator specializing in Yin Yoga, Prenatal and Postnatal Yoga, and Applied Yoga Anatomy."
    },
    {
      name: "RAVI PRABHAKAR",
      title: "Student Accommodation Manager | Methodology, Anatomy & Physiology Teacher",
      image: teacher3,
      description:
        "Ravi Prabhakar is an experienced Methodology, Anatomy, and Physiology teacher with 15+ years of experience."
    },
    {
      name: "MINU SAJJI",
      title: "Pranayama & Assistant Yoga Teacher",
      image: teacher4,
      description:
        "Minu Sajji is a dedicated Pranayama teacher and Assistant Teacher at Yoga With Srinatha."
    },
    {
      name: "HRISHANTH",
      title: "Yoga Therapy & Ashtanga Yoga Teacher",
      image: teacher5,
      description:
        "Hrishanth is a skilled Yoga Therapy teacher and an experienced instructor in Ashtanga Yoga."
    },
    {
      name: "CHARANYA",
      title: "Ayurveda, Philosophy & Pranayama Teacher",
      image: teacher6,
      description:
        "Charanya is a dedicated teacher of Ayurveda, Yoga Philosophy, and Pranayama."
    },
    {
      name: "VINAYAKA HONNAVAR",
      title: "Yoga Philosophy, Meditation & Sound Healing Teacher",
      image: teacher7,
      description:
        "Vinayaka Honnavar is a dedicated teacher of Yoga Philosophy, Meditation, and Sound Healing."
    },
    {
      name: "ANULASHA RAM",
      title: "Social Media & Marketing Team Head | Graphic Designer",
      image: teacher8,
      description:
        "Anulasha Ram is the Social Media and Marketing Team Head at Yoga With Srinatha."
    },
    {
      name: "YOGI RANJAN",
      title: "Yoga Guru",
      image: teacher9,
      description:
        "Yogi Ranjan is a highly experienced yoga teacher and practitioner."
    }
  ];

  const testimonials = [
    {
      image: test1,
      name: "Anna, Germany",
      text: "Bali Yoga Kendra transformed my life."
    },
    {
      image: test2,
      name: "Lucas, Brazil",
      text: "Authentic teachings and peaceful energy."
    },
    {
      image: test3,
      name: "Sophie, France",
      text: "A true spiritual sanctuary."
    },
    {
      image: test4,
      name: "Daniel, USA",
      text: "Unforgettable journey."
    },
    {
      image: test5,
      name: "Maya, Australia",
      text: "Deep philosophical wisdom."
    },
    {
      image: test,
      name: "Kenji, Japan",
      text: "Clarity and strength found here."
    }
  ];

  return (
    <div className="bg-[#f8f5f0] text-gray-800 overflow-x-hidden scroll-smooth">
      <AboutHero storyImg={storyImg} />
      <OurStory ourImg={ourImg} />
      <Philosophy philosophyImg={philosophyImg} />
      <Teachers teachers={teachers} />
      <Lifestyle lifestyleImg={lifestyleImg} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
