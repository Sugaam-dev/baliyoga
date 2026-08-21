import img100 from "../../../assets/images/home/yoga-teacher-training-bali.webp";
import img200 from "../../../assets/images/home/Ubud-Yoga-Photography-3-1.webp";
import img300 from "../../../assets/images/home/bali-yoga-teacher-training-check-list-NAMASTSHAY.webp";
import img500 from "../../../assets/images/home/Yoga-session-at-the-Bali-Green-Retreat.webp";
import { PROGRAM_PRICES } from "../../../data/bali/programPrices";

export const programs = [
  {
    id: 1,
    hours: "100",
    title: "100 Hour Yoga Teacher Training Bali",
    desc: "Perfect for beginners seeking a strong foundation in yoga practice and philosophy.",
    link: "/programs/bali/100hr",
    price: PROGRAM_PRICES.multiStyle["100hr"],
    img: img100,
  },
  {
    id: 2,
    hours: "200",
    title: "200 Hour Yoga Teacher Training Bali",
    desc: "Our most popular Yoga Alliance Certified Teacher Training Program, designed to prepare students for professional yoga teaching and personal transformation.",
    link: "/programs/bali/200hr",
    price: PROGRAM_PRICES.multiStyle["200hr"],
    img: img200,
  },
  {
    id: 3,
    hours: "300",
    title: "300 Hour Yoga Teacher Training Bali",
    desc: "Advanced training for certified yoga teachers seeking to expand their expertise, confidence, and teaching skills.",
    link: "/programs/bali/300hr",
    price: PROGRAM_PRICES.multiStyle["300hr"],
    img: img300,
  },
  {
    id: 4,
    hours: "500",
    title: "500 Hour Yoga Teacher Training Bali",
    desc: "A comprehensive pathway combining foundational and advanced training into one immersive certification experience.",
    link: "/programs/bali/500hr",
    price: PROGRAM_PRICES.multiStyle["500hr"],
    img: img500,
  },
];

