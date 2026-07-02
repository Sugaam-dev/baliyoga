import { Bali50HourData } from "./bali/ttc/multiStyle/Bali50HourData";
import { Bali100HoursData } from "./bali/ttc/multiStyle/Bali100HoursData";
import { Bali200HoursData } from "./bali/ttc/multiStyle/Bali200HoursData";
import { Bali300HoursData } from "./bali/ttc/multiStyle/Bali300HoursData";
import { Bali500HoursData } from "./bali/ttc/multiStyle/Bali500HoursData";
import { BaliKundali50HoursData } from "./bali/ttc/kundalini/BaliKundali50HoursData";
import { BaliKundali100HoursData } from "./bali/ttc/kundalini/BaliKundali100HoursData";
import { BaliKundali200HoursData } from "./bali/ttc/kundalini/BaliKundali200HoursData";
import { BaliKundali300HoursData } from "./bali/ttc/kundalini/BaliKundali300HoursData";
import { BaliKundali500HoursData } from "./bali/ttc/kundalini/BaliKundali500HoursData";
import { AcroYogaData } from "./bali/ttc/shortCourse/AcroYogaData";
import { AerialYogaData } from "./bali/ttc/shortCourse/AerialYogaData";
import { YinYogaData } from "./bali/ttc/shortCourse/YinYogaData";
import { PrenatalYogaData } from "./bali/ttc/shortCourse/PrenatalYogaData";
import { Bali100HourYogaTherapyAyurvedaData } from "./bali/ttc/specialization/Bali100HourYogaTherapyAyurvedaData";
import { BaliAyurvedicTreatmentTTCData } from "./bali/ttc/specialization/BaliAyurvedicTreatmentTTCData";
import { BaliAyurveda5HoursAbhyangamData } from "./bali/ttc/specialization/BaliAyurveda5HoursAbhyangamData";
import { SoundHealingData } from "./bali/ttc/specialization/SoundHealingData";

export const baliDataMap = {
  bali: {
    "ytt": {
      "6-days-50hr-multi-style": Bali50HourData,
      "10-days-100hr-multi-style": Bali100HoursData,
      "20-days-200hr-multi-style": Bali200HoursData,
      "300hr-multi-style-bali": Bali300HoursData,
      "500hr-multi-style-bali": Bali500HoursData,
    },
    "kundalini": {
      "6-days-50hr-kundalini": BaliKundali50HoursData,
      "100hr-kundalini-bali": BaliKundali100HoursData,
      "200hr-kundalini-bali": BaliKundali200HoursData,
      "300hr-kundalini-bali": BaliKundali300HoursData,
      "500hr-kundalini-bali": BaliKundali500HoursData,
    },
    "short-courses": {
      "acro-yoga-course": AcroYogaData,
      "aerial-yoga-course": AerialYogaData,
      "50hr-yin-yoga": YinYogaData,
      "85hr-prenatal-yoga": PrenatalYogaData,
    },
    "specialization": {
      "100hr-yoga-therapy-ayurveda": Bali100HourYogaTherapyAyurvedaData,
      "ayurvedic-treatment-bali": BaliAyurvedicTreatmentTTCData,
      "abhyangam-massage-training-bali": BaliAyurveda5HoursAbhyangamData,
      "vedic-sound-healing-level-1-2": SoundHealingData,
    }
  }
};
