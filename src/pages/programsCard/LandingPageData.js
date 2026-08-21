import { PROGRAM_PRICES } from "../../data/bali/programPrices";
import { PROGRAM_PRICES_RISHIKESH } from "../../data/rishikesh/programPricesRishikesh";
import { PROGRAM_PRICES_MYSORE } from "../../data/mysore/programPricesMysore";

import baliHero from "../../assets/images/home/bali1.webp";
import rishikeshHero from "../../assets/images/home/bali2.webp";
import mysoreHero from "../../assets/images/home/bali3.webp"; // Fallback to bali3.jpg as per WhereToTrain.jsx

export const LANDING_PROGRAM_CATEGORIES = [
  { id: "ytt", icon: "🧘", label: "Multi-Style YTTC" },
  { id: "kundalini", icon: "🔥", label: "Kundalini YTTC" },
  { id: "short-courses", icon: "🌿", label: "Short Courses" },
  { id: "specialization", icon: "🎵", label: "Specialization & Retreats" }
];

export const LANDING_LOCATION_DATA = {
  bali: {
    tagline: "Island of the Gods",
    headline: "Transform in Bali",
    subheadline: "Where ancient wisdom meets tropical paradise",
    description: "Nestled among sacred rice terraces and whispering temples, our Bali programs offer the most immersive yoga teacher training experience in Southeast Asia. Train with master teachers, live in harmony with nature, and return home forever changed.",
    heroImage: baliHero,
    theme: {
      bgAccent: "bg-emerald-700",
      textAccent: "text-emerald-800",
      textAccentMuted: "text-emerald-600",
      hoverBgAccent: "hover:bg-emerald-800",
      bgLight: "bg-emerald-50",
      borderAccent: "border-emerald-700",
      borderHover: "hover:border-emerald-300",
      ctaGradient: "from-emerald-950 via-emerald-900 to-stone-900",
      taglineText: "text-emerald-300",
      dotBg: "bg-emerald-400",
      dividerAccent: "via-emerald-300",
    },
    highlights: [
      { icon: "🌾", label: "Sacred Rice Terraces", desc: "Train steps away from Ubud's emerald terraces and jungle rivers." },
      { icon: "🛕", label: "Temple Culture", desc: "Daily life woven with Hindu-Balinese ritual, offerings & ceremony." },
      { icon: "☀️", label: "Year-Round Warmth", desc: "Tropical climate means outdoor practice every single day." },
      { icon: "🧘", label: "Holistic Curriculum", desc: "Ayurveda, sound healing & meditation alongside asana training." }
    ],
    facts: ["Yoga Alliance Certified", "Small Batch Classes (max 12)", "Airport Transfers Included", "24/7 Support"],
    programsByCategoryId: {
      ytt: [
        { name: "6 Days 50hr Multi-Style YTTC", duration: "6 Days", price: PROGRAM_PRICES.multiStyle["50hr"], slug: "50hr", badge: "UBUD STAY", hours: "50", certification: "YACEP" },
        { name: "10 Days 100hr Multi-Style YTTC", duration: "10 Days", price: PROGRAM_PRICES.multiStyle["100hr"], slug: "100hr", badge: "ISLAND IMMERSION", hours: "100", certification: "Yoga Alliance" },
        { name: "20 Days 200hr Multi-Style YTTC", duration: "20 Days", price: PROGRAM_PRICES.multiStyle["200hr"], slug: "200hr", badge: "BEST VALUE", hours: "200", certification: "RYT-200" },
        { name: "300hr Multi-Style YTTC", duration: "26 Days", price: PROGRAM_PRICES.multiStyle["300hr"], slug: "300hr", badge: "DEEP PRACTICE", hours: "300", certification: "RYT-300" },
        { name: "500hr Multi-Style YTTC", duration: "56 Days", price: PROGRAM_PRICES.multiStyle["500hr"], slug: "500hr", badge: "ULTIMATE MASTERY", hours: "500", certification: "RYT-500" }
      ],
      kundalini: [
        { name: "6 Days 50hr Kundalini YTTC", duration: "6 Days", price: PROGRAM_PRICES.kundalini["50hr"], slug: "kundalini50hr", badge: "ENERGY FLOW", hours: "50", certification: "YACEP" },
        { name: "100hr Kundalini YTTC", duration: "10 Days", price: PROGRAM_PRICES.kundalini["100hr"], slug: "kundalini100hr", badge: "PRANA PATH", hours: "100", certification: "Yoga Alliance" },
        { name: "200hr Kundalini YTTC", duration: "20 Days", price: PROGRAM_PRICES.kundalini["200hr"], slug: "kundalini200hr", badge: "DEEP AWAKENING", hours: "200", certification: "RYT-200" },
        { name: "300hr Kundalini YTTC", duration: "28 Days", price: PROGRAM_PRICES.kundalini["300hr"], slug: "kundalini300hr", badge: "TEACHER PATH", hours: "300", certification: "RYT-300" },
        { name: "500hr Kundalini YTTC", duration: "56 Days", price: PROGRAM_PRICES.kundalini["500hr"], slug: "kundalini500hr", badge: "COMPLETE MASTERY", hours: "500", certification: "RYT-500" }
      ],
      "short-courses": [
        { name: "Acro Yoga Course", duration: "5 Days", price: PROGRAM_PRICES.shortcourses.acroyoga, slug: "acroyoga", badge: "PLAYFUL FLOW", hours: "50", certification: "YACEP" },
        { name: "Aerial Yoga Course", duration: "5 Days", price: PROGRAM_PRICES.shortcourses.aerialyoga, slug: "aerialyoga", badge: "SILK SUSPENSION", hours: "50", certification: "YACEP" },
        { name: "50Hr Yin Yoga", duration: "6 Days", price: PROGRAM_PRICES.shortcourses.yinyoga, slug: "yinyoga", badge: "RESTORATIVE", hours: "50", certification: "Yoga Alliance" },
        { name: "85Hr Prenatal Yoga", duration: "8 Days", price: PROGRAM_PRICES.shortcourses.prenatalyoga, slug: "prenatalyoga", badge: "SPECIALIZED CARE", hours: "85", certification: "RPYT" }
      ],
      specialization: [
        { name: "100Hr Yoga Therapy & Ayurveda", duration: "10 Days", price: PROGRAM_PRICES.specializations.Bali100HourYogaTherapyAyurvedaData, slug: "100houryogatherapyayurve", badge: "ANCIENT HEALING", hours: "100", certification: "Yoga Alliance" },
        { name: "Ayurvedic Treatment TTC", duration: "6 Days", price: PROGRAM_PRICES.specializations.BaliAyurvedicTreatmentTTCData, slug: "ayurvedictreatmentttc", badge: "TREATMENT PATH", hours: "50", certification: "Yoga Alliance" },
        { name: "Abhyangam Massage Training", duration: "1 Day", price: PROGRAM_PRICES.specializations.BaliAyurveda5HoursAbhyangamData, slug: "ayurveda5hoursabhyangam", badge: "SPA BODYWORK", hours: "5", certification: "YACEP" },
        { name: "Vedic Sound Healing Level 1 & 2", duration: "4 Days", price: PROGRAM_PRICES.specializations.soundhealing, slug: "soundhealing", badge: "TIBETAN BOWLS", hours: "50", certification: "YACEP" }
      ]
    }
  },
  rishikesh: {
    tagline: "Yoga Capital of the World",
    headline: "Discover Rishikesh",
    subheadline: "Where the holy Ganges meets the Himalayas",
    description: "Perched on the banks of the sacred Ganges, beneath the eternal Himalayas — Rishikesh is where yoga was born for the world. Every breath here carries centuries of practice and devotion.",
    heroImage: rishikeshHero,
    theme: {
      bgAccent: "bg-orange-600",
      textAccent: "text-orange-700",
      textAccentMuted: "text-orange-500",
      hoverBgAccent: "hover:bg-orange-700",
      bgLight: "bg-orange-50",
      borderAccent: "border-orange-600",
      borderHover: "hover:border-emerald-300",
      ctaGradient: "from-orange-950 via-orange-900 to-stone-900",
      taglineText: "text-orange-300",
      dotBg: "bg-orange-400",
      dividerAccent: "via-orange-300",
    },
    highlights: [
      { icon: "🏔️", label: "Himalayan Air", desc: "Practice in the crisp morning energy of the lower Himalayas." },
      { icon: "🌊", label: "Holy Ganges", desc: "Daily meditation and ceremonies on the banks of the sacred river." },
      { icon: "🕉️", label: "Spiritual Cradle", desc: "Immerse in a town entirely dedicated to yoga and inner search." },
      { icon: "🍲", label: "Pure Vegetarian", desc: "Nourishing, pure sattvic meals prepared fresh daily." }
    ],
    facts: ["Yoga Alliance Certified", "Ganges Beach Yoga", "Ashram Life Experience", "Himalayan Temple Trek"],
    programsByCategoryId: {
      ytt: [
        { name: "10 Days 100hr Hatha & Vinyasa Course", duration: "10 Days", price: PROGRAM_PRICES_RISHIKESH.multiStyle["100hr"], slug: "100hr", badge: "GANGES SHALA", hours: "100", certification: "Yoga Alliance" },
        { name: "20 Days 200hr Holy Ganges Multi-Style YTTC", duration: "20 Days", price: PROGRAM_PRICES_RISHIKESH.multiStyle["200hr"], slug: "200hr", badge: "HOLY WATER", hours: "200", certification: "RYT-200" },
        { name: "26 Days 300hr Advanced Multi-Style YTTC", duration: "26 Days", price: PROGRAM_PRICES_RISHIKESH.multiStyle["300hr"], slug: "300hr", badge: "ADVANCED SHALA", hours: "300", certification: "RYT-300" },
        { name: "56 Days 500hr Master Multi-Style Training", duration: "56 Days", price: PROGRAM_PRICES_RISHIKESH.multiStyle["500hr"], slug: "500hr", badge: "ULTIMATE GURU", hours: "500", certification: "RYT-500" }
      ],
      kundalini: [
        { name: "6 Days 50hr Kundalini Awakening", duration: "6 Days", price: PROGRAM_PRICES_RISHIKESH.kundalini["50hr"], slug: "kundalini50hr", badge: "SHAKTI ENERGY", hours: "50", certification: "Yoga Alliance" },
        { name: "10 Days 100hr Shaktipat Kundalini", duration: "10 Days", price: PROGRAM_PRICES_RISHIKESH.kundalini["100hr"], slug: "kundalini100hr", badge: "SHAKTIPAT", hours: "100", certification: "Yoga Alliance" },
        { name: "20 Days 200hr Authentic Kundalini YTTC", duration: "20 Days", price: PROGRAM_PRICES_RISHIKESH.kundalini["200hr"], slug: "kundalini200hr", badge: "POPULAR", hours: "200", certification: "RYT-200" },
        { name: "26 Days 300hr Advanced Kundalini YTTC", duration: "26 Days", price: PROGRAM_PRICES_RISHIKESH.kundalini["300hr"], slug: "kundalini300hr", badge: "ADVANCED PATH", hours: "300", certification: "RYT-300" },
        { name: "500hr Kundalini YTTC", duration: "45 Days", price: PROGRAM_PRICES_RISHIKESH.kundalini["500hr"], slug: "kundalini500hr", badge: "MASTER PATH", hours: "500", certification: "RYT-500" }
      ],
      "short-courses": [
        { name: "85Hr Prenatal Yoga", duration: "6 Days", price: PROGRAM_PRICES_RISHIKESH.shortcourses["prenatalyoga"], slug: "rishikeshprenatalyoga", badge: "SPECIALIZED CARE", hours: "50", certification: "Yoga Alliance" },
        { name: "6 Nights Yin Yoga", duration: "6 Days", price: PROGRAM_PRICES_RISHIKESH.shortcourses["yinyoga"], slug: "rishikesh6nightsyinyoga", badge: "RESTORATIVE", hours: "50", certification: "Yoga Alliance" },
        { name: "50 Hour Yoga Nidra", duration: "5 Days", price: PROGRAM_PRICES_RISHIKESH.shortcourses["nidra"], slug: "rishikesh50houryoganidra", badge: "STILLNESS", hours: "50", certification: "Yoga Alliance" }
      ],
      specialization: [
        { name: "2 Days Ayurvedic Nutrition", duration: "2 Days", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh2DaysAyurvedicNutritionData"], slug: "rishikesh2daysayurvedicnutrition", badge: "HEALTH", hours: "N/A", certification: "YACEP" },
        { name: "Master Level Sound Healing", duration: "4 Days", price: PROGRAM_PRICES_RISHIKESH.specializations["RishikeshSoundHealingData"], slug: "rishikeshsoundhealing", badge: "SOUND VIBRATION", hours: "50", certification: "YACEP" },
        { name: "Ayurveda Therapist Diploma", duration: "10 Days", price: PROGRAM_PRICES_RISHIKESH.specializations["RishikeshAyurvedaTherapistDiplomaData"], slug: "rishikeshayurvedatherapistdiploma", badge: "DIPLOMA", hours: "N/A", certification: "YACEP" },
        { name: "18 Days Yoga Therapy & Wellness", duration: "18 Days", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh18DaysYogaTherapyWellnessData"], slug: "rishikesh18daysyogatherapywellness", badge: "HOLISTIC", hours: "N/A", certification: "RYT-200" },
        { name: "200 Hour Multi-Style with Ayurveda Massage", duration: "20 Days", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData"], slug: "rishikesh200hourmultistylekundaliniayurvedamassage", badge: "POPULAR", hours: "200", certification: "RYT-200" },
        { name: "10 Days Panchakarma Therapy", duration: "10 Days", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh10DaysPanchakarmaData"], slug: "rishikesh10dayspanchakarma", badge: "DETOX", hours: "N/A", certification: "YACEP" }
      ]
    }
  },
  mysuru: {
    tagline: "Ashtanga Yoga Capital",
    headline: "Discover Mysore",
    subheadline: "Home of Ashtanga Vinyasa and royal heritage",
    description: "Home of Ashtanga Vinyasa, Mysore blends royal heritage with disciplined practice — where generations of teachers have trained under the lineage of Sri K. Pattabhi Jois.",
    heroImage: mysoreHero,
    theme: {
      bgAccent: "bg-purple-700",
      textAccent: "text-purple-800",
      textAccentMuted: "text-purple-600",
      hoverBgAccent: "hover:bg-purple-800",
      bgLight: "bg-purple-50",
      borderAccent: "border-purple-700",
      borderHover: "hover:border-emerald-300",
      ctaGradient: "from-purple-950 via-purple-900 to-stone-900",
      taglineText: "text-amber-300",
      dotBg: "bg-amber-400",
      dividerAccent: "via-amber-300",
    },
    highlights: [
      { icon: "🕉️", label: "Ashtanga Lineage", desc: "Train in the tradition of Sri K. Pattabhi Jois, direct from Mysore." },
      { icon: "🏰", label: "Royal Heritage", desc: "A city of palaces, silk & sandalwood, steeped in South Indian culture." },
      { icon: "🧘", label: "Disciplined Practice", desc: "Structured Mysore-style self-practice under close teacher guidance." },
      { icon: "🌸", label: "Peaceful Setting", desc: "Quiet residential neighborhoods ideal for focused daily training." }
    ],
    facts: ["Yoga Alliance Certified", "Royal Heritage Tour", "Lineage Shala Study", "Sandalwood Massage"],
    programsByCategoryId: {
      ytt: [
        { name: "200hr Ashtanga and Hatha YTTC", duration: "20 Days", price: PROGRAM_PRICES_MYSORE.multiStyle["200hrAshtanga"], slug: "200hr", badge: "LINEAGE SHALA", hours: "200", certification: "RYT-200" },
        { name: "200hr Multi-Style YTTC", duration: "20 Days", price: PROGRAM_PRICES_MYSORE.multiStyle["200hrMultistyle"], slug: "200hrmultistyle", badge: "VARIETY", hours: "200", certification: "RYT-200" },
        { name: "300hr Multi-Style YTTC", duration: "26 Days", price: PROGRAM_PRICES_MYSORE.multiStyle["300hr"], slug: "300hr", badge: "ADVANCED SHALA", hours: "300", certification: "RYT-300" },
        { name: "500hr Multi-Style YTTC", duration: "56 Days", price: PROGRAM_PRICES_MYSORE.multiStyle["500hr"], slug: "500hr", badge: "ULTIMATE MASTERY", hours: "500", certification: "RYT-500" },
        { name: "21-Day Ashtanga YTTC", duration: "21 Days", price: PROGRAM_PRICES_MYSORE.multiStyle["21DayAshtanga"], slug: "mysore21dayashtanga", badge: "TRADITION", hours: "N/A", certification: "RYT-200" },
        { name: "21-Day Hatha YTTC", duration: "21 Days", price: PROGRAM_PRICES_MYSORE.multiStyle["21DayHatha"], slug: "mysore21dayhatha", badge: "CLASSIC HATHA", hours: "N/A", certification: "RYT-200" }
      ],
      "short-courses": [
        { name: "50hr Yin Yoga", duration: "6 Days", price: PROGRAM_PRICES_MYSORE.shortcourses["yinyoga"], slug: "mysore50houryinyoga", badge: "RESTORATIVE", hours: "50", certification: "Yoga Alliance" },
        { name: "50hr Aerial Yoga", duration: "5 Days", price: PROGRAM_PRICES_MYSORE.shortcourses["aerialyoga"], slug: "mysore50houraerialyoga", badge: "SUSPENSION", hours: "50", certification: "YACEP" },
        { name: "Prenatal Postnatal Yoga YTTC", duration: "6 Days", price: PROGRAM_PRICES_MYSORE.shortcourses["prenatalyoga"], slug: "mysoreprenatalyoga", badge: "SPECIALIZED CARE", hours: "N/A", certification: "RPYT" },
        { name: "Yoga Therapy YTTC", duration: "7 Days", price: PROGRAM_PRICES_MYSORE.shortcourses["yogatherapy"], slug: "mysore7dayyogatherapy", badge: "THERAPEUTIC", hours: "50", certification: "YACEP" }
      ],
      specialization: [
        { name: "Sound Healing Course", duration: "3 Days", price: PROGRAM_PRICES_MYSORE.specializations["MysoreSingingBowlSoundHealingData"], slug: "mysoresingingbowlsoundhealing", badge: "HEALING", hours: "50", certification: "YACEP" },
        { name: "7 Day Chair Yoga YTTC", duration: "7 Days", price: PROGRAM_PRICES_MYSORE.specializations["Mysore7DayChairYogaData"], slug: "mysore7daychairyoga", badge: "ACCESSIBILITY", hours: "50", certification: "YACEP" },
        { name: "7 Day Wheel Yoga YTTC", duration: "7 Days", price: PROGRAM_PRICES_MYSORE.specializations["Mysore7DayWheelYogaData"], slug: "mysore7daywheelyoga", badge: "PROP SUPPORT", hours: "50", certification: "YACEP" }
      ]
    }
  }
};
