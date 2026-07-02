// src/data/locations.js
// Single source of truth for all program links and retreats, matching Ombreathe's dynamic design.

export const LOCATIONS = [
  { slug: "bali", label: "Bali" }
];

export const PROGRAM_LINKS = {
  bali: {
    ytt: [
      { path: "6-days-50hr-multi-style", label: "6 Days 50 Hours Multi-Style Yoga Course" },
      { path: "10-days-100hr-multi-style", label: "10 Days 100 Hours Multi-Style Yoga Course" },
      { path: "20-days-200hr-multi-style", label: "20 Days 200 Hours Multi-Style YTTC" },
      { path: "300hr-multi-style-bali", label: "26 Days 300 Hours Advanced Multi-Style YTTC" },
      { path: "500hr-multi-style-bali", label: "56 Days 500 Hours Advanced Multi-Style YTTC" }
    ],
    kundalini: [
      { path: "6-days-50hr-kundalini", label: "6 Days 50 Hours Kundalini YTTC" },
      { path: "100hr-kundalini-bali", label: "10 Days 100 Hours Kundalini YTTC" },
      { path: "200hr-kundalini-bali", label: "20 Days 200 Hours Kundalini YTTC" },
      { path: "300hr-kundalini-bali", label: "30 Days 300 Hours Kundalini YTTC" },
      { path: "500hr-kundalini-bali", label: "50 Days 500 Hours Kundalini YTTC" }
    ],
    "short-courses": [
      { path: "50hr-yin-yoga", label: "6 Days 50 Hours Yin Yoga Course" },
      { path: "85hr-prenatal-yoga", label: "85-Hours Prenatal Yoga TTC in Bali" },
      { path: "aerial-yoga-course", label: "5 Days Aerial Yoga Course" },
      { path: "acro-yoga-course", label: "5 Days Acro Yoga Course" }
    ],
    specialization: [
      { path: "vedic-sound-healing-level-1-2", label: "Vedic Sound Healing Level 1 & 2" },
      { path: "100hr-yoga-therapy-ayurveda", label: "Bali 100 Hours Yoga Therapy Ayurveda" },
      { path: "ayurvedic-treatment-bali", label: "Ayurvedic Treatment In Bali" },
      { path: "abhyangam-massage-training-bali", label: "Abhyangam Massage Training Course In Bali" }
    ]
  }
};

export const RETREAT_LINKS = {
  bali: [
    { path: "6-days-50hr-multi-style", label: "6 Days 50 Hours Multi-Style Yoga Course" },
    { path: "10-days-100hr-multi-style", label: "10 Days 100 Hours Multi-Style Yoga Course" },
    { path: "20-days-200hr-multi-style", label: "20 Days 200 Hours Multi-Style YTTC" },
    { path: "300hr-multi-style-bali", label: "26 Days 300 Hours Advanced Multi-Style YTTC" },
    { path: "500hr-multi-style-bali", label: "56 Days 500 Hours Advanced Multi-Style YTTC" }
  ]
};

// Category path builder - directly builds path based on category key
export const buildPath = (category, slug) => {
  let catPrefix = category;
  if (category === "retreats") catPrefix = "wellness";
  return `/${catPrefix}/${slug}`;
};
