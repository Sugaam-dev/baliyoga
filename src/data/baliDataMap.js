// ─── Multi-Style YTT ────────────────────────────────────────────────────────
import { courseData as MultiStyle50hr }  from "./bali/ttc/multiStyle/6-days-50hr-multi-style";
import { courseData as MultiStyle100hr } from "./bali/ttc/multiStyle/10-days-100hr-multi-style";
import { courseData as MultiStyle200hr } from "./bali/ttc/multiStyle/20-days-200hr-multi-style";
import { courseData as MultiStyle300hr } from "./bali/ttc/multiStyle/300hr-multi-style-bali";
import { courseData as MultiStyle500hr } from "./bali/ttc/multiStyle/500hr-multi-style-bali";

// ─── Kundalini YTT ──────────────────────────────────────────────────────────
import { courseData as Kundalini50hr }  from "./bali/ttc/kundalini/6-days-50hr-kundalini";
import { courseData as Kundalini100hr } from "./bali/ttc/kundalini/100hr-kundalini-bali";
import { courseData as Kundalini200hr } from "./bali/ttc/kundalini/200hr-kundalini-bali";
import { courseData as Kundalini300hr } from "./bali/ttc/kundalini/300hr-kundalini-bali";
import { courseData as Kundalini500hr } from "./bali/ttc/kundalini/500hr-kundalini-bali";

// ─── Short Courses ──────────────────────────────────────────────────────────
import { courseData as AcroYoga }    from "./bali/ttc/shortCourse/acro-yoga-course";
import { courseData as AerialYoga }  from "./bali/ttc/shortCourse/aerial-yoga-course";
import { courseData as YinYoga }     from "./bali/ttc/shortCourse/50hr-yin-yoga";
import { courseData as PrenatalYoga } from "./bali/ttc/shortCourse/85hr-prenatal-yoga";

// ─── Specialization ─────────────────────────────────────────────────────────
import { courseData as YogaTherapy }     from "./bali/ttc/specialization/100hr-yoga-therapy-ayurveda";
import { courseData as AyurvedicTTC }    from "./bali/ttc/specialization/ayurvedic-treatment-bali";
import { courseData as Abhyangam }       from "./bali/ttc/specialization/abhyangam-massage-training-bali";
import { courseData as SoundHealing }    from "./bali/ttc/specialization/vedic-sound-healing-level-1-2";

/**
 * Central course data registry.
 * URL structure: /:category/:slug  →  baliDataMap.bali[category][slug]
 */
export const baliDataMap = {
  bali: {
    // Route category: "ytt"
    ytt: {
      "6-days-50hr-multi-style":   MultiStyle50hr,
      "10-days-100hr-multi-style": MultiStyle100hr,
      "20-days-200hr-multi-style": MultiStyle200hr,
      "300hr-multi-style-bali":    MultiStyle300hr,
      "500hr-multi-style-bali":    MultiStyle500hr,
    },

    // Route category: "kundalini"
    kundalini: {
      "6-days-50hr-kundalini":  Kundalini50hr,
      "100hr-kundalini-bali":   Kundalini100hr,
      "200hr-kundalini-bali":   Kundalini200hr,
      "300hr-kundalini-bali":   Kundalini300hr,
      "500hr-kundalini-bali":   Kundalini500hr,
    },

    // Route category: "short-courses"
    "short-courses": {
      "acro-yoga-course":   AcroYoga,
      "aerial-yoga-course": AerialYoga,
      "50hr-yin-yoga":      YinYoga,
      "85hr-prenatal-yoga": PrenatalYoga,
    },

    // Route category: "specialization"
    specialization: {
      "100hr-yoga-therapy-ayurveda":       YogaTherapy,
      "ayurvedic-treatment-bali":          AyurvedicTTC,
      "abhyangam-massage-training-bali":   Abhyangam,
      "vedic-sound-healing-level-1-2":     SoundHealing,
    },
  },
};
