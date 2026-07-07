/**
 * Navigation link data for the header mega-menu.
 * Slugs here MUST match the keys in baliDataMap.js exactly.
 */

export const PROGRAM_LINKS = {
  bali: {
    // ─── Multi-Style YTT ─────────────────────────────────────────────────────
    ytt: [
      { label: "6 Days 50Hr Multi-Style",  path: "6-days-50hr-multi-style" },
      { label: "10 Days 100Hr Multi-Style", path: "10-days-100hr-multi-style" },
      { label: "20 Days 200Hr Multi-Style", path: "20-days-200hr-multi-style" },
      { label: "300Hr Multi-Style",         path: "300hr-multi-style-bali" },
      { label: "500Hr Multi-Style",         path: "500hr-multi-style-bali" },
    ],

    // ─── Kundalini YTT ───────────────────────────────────────────────────────
    kundalini: [
      { label: "6 Days 50Hr Kundalini",  path: "6-days-50hr-kundalini" },
      { label: "100Hr Kundalini",        path: "100hr-kundalini-bali" },
      { label: "200Hr Kundalini",        path: "200hr-kundalini-bali" },
      { label: "300Hr Kundalini",        path: "300hr-kundalini-bali" },
      { label: "500Hr Kundalini",        path: "500hr-kundalini-bali" },
    ],

    // ─── Short Courses ────────────────────────────────────────────────────────
    "short-courses": [
      { label: "Acro Yoga Course",     path: "acro-yoga-course" },
      { label: "Aerial Yoga Course",   path: "aerial-yoga-course" },
      { label: "50Hr Yin Yoga",        path: "50hr-yin-yoga" },
      { label: "85Hr Prenatal Yoga",   path: "85hr-prenatal-yoga" },
    ],

    // ─── Specialization ───────────────────────────────────────────────────────
    specialization: [
      { label: "100Hr Yoga Therapy & Ayurveda",    path: "100hr-yoga-therapy-ayurveda" },
      { label: "Ayurvedic Treatment TTC",          path: "ayurvedic-treatment-bali" },
      { label: "Abhyangam Massage Training",       path: "abhyangam-massage-training-bali" },
      { label: "Vedic Sound Healing Level 1 & 2",  path: "vedic-sound-healing-level-1-2" },
    ],
  },
};

export const RETREAT_LINKS = {
  bali: [
    { label: "Yoga Retreat Bali",          path: "yoga-retreat-bali" },
    { label: "Meditation Retreat",         path: "meditation-retreat-bali" },
    { label: "Sound Healing Retreat",      path: "sound-healing-retreat-bali" },
    { label: "Wellness & Detox Retreat",   path: "wellness-detox-retreat-bali" },
  ],
};

/**
 * Builds a full URL path: /category/slug
 */
export const buildPath = (category, slug) => `/${category}/${slug}`;
