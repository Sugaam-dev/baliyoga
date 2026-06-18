import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import Course from './pages/course/course';
import Gallery from './pages/gallery/gallery';
import Retreat from './pages/retreat/retreat';
import Contact from './pages/contact/Contact';
import OnlinePage from './pages/online/OnlinePage';
// import MeditationPage from './pages/meditation/Facilities';
import Service from './pages/services/Service';
import YogaTeacherTrainingPage from './pages/YogaTeacherTraining/YogaTeacherTrainingPage';
import { Bali50HourData } from './pages/YogaTeacherTraining/data/Bali50HourData';
import { Bali100HoursData } from './pages/YogaTeacherTraining/data/Bali100HoursData';
import { Bali200HoursData } from './pages/YogaTeacherTraining/data/Bali200HoursData';
import { Bali300HoursData } from './pages/YogaTeacherTraining/data/Bali300HoursData';
import { Bali500HoursData } from './pages/YogaTeacherTraining/data/Bali500HoursData';
import { BaliKundali50HoursData } from './pages/YogaTeacherTraining/data/BaliKundali50HoursData';
import { BaliKundali100HoursData } from './pages/YogaTeacherTraining/data/BaliKundali100HoursData';
import { BaliKundali200HoursData } from './pages/YogaTeacherTraining/data/BaliKundali200HoursData';
import { BaliKundali300HoursData } from './pages/YogaTeacherTraining/data/BaliKundali300HoursData';
import { BaliKundali500HoursData } from './pages/YogaTeacherTraining/data/BaliKundali500HoursData';
import { AcroYogaData } from './pages/YogaTeacherTraining/data/AcroYogaData';
import { AerialYogaData } from './pages/YogaTeacherTraining/data/AerialYogaData';
import { YinYogaData } from './pages/YogaTeacherTraining/data/YinYogaData';
import { PrenatalYogaData } from './pages/YogaTeacherTraining/data/PrenatalYogaData';
import { Bali100HourYogaTherapyAyurvedaData } from './pages/YogaTeacherTraining/data/Bali100HourYogaTherapyAyurvedaData';
import { BaliAyurvedicTreatmentTTCData } from './pages/YogaTeacherTraining/data/BaliAyurvedicTreatmentTTCData';
import { BaliAyurveda5HoursAbhyangamData } from './pages/YogaTeacherTraining/data/BaliAyurveda5HoursAbhyangamData';
import { SoundHealingData } from './pages/YogaTeacherTraining/data/SoundHealingData';

import Facilities from './pages/meditation/Facilities';
import TermsAndConditions from './pages/term&condition/term-condition';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
                   <Route path='about' element={<About/>} />
                   <Route path='course' element={<Course/>} />
                   <Route path='gallery' element={<Gallery/>} />
                   <Route path='retreat'  element={<Retreat/>} />
                   <Route path='online' element={<OnlinePage/>} />
                   <Route path='facilities' element={<Facilities/>} />                    
                   <Route path='contact' element={<Contact/>} /> 
                    <Route path='200-hour-yoga-teacher-training-in-bali' element={<Service/>} /> 
                    <Route path='ytt/6-days-50hr-multi-style' element={<YogaTeacherTrainingPage data={Bali50HourData} />} />
                    <Route path='ytt/10-days-100hr-multi-style' element={<YogaTeacherTrainingPage data={Bali100HoursData} />} />
                    <Route path='ytt/20-days-200hr-multi-style' element={<YogaTeacherTrainingPage data={Bali200HoursData} />} />
                    <Route path='ytt/300hr-multi-style-bali' element={<YogaTeacherTrainingPage data={Bali300HoursData} />} />
                    <Route path='ytt/500hr-multi-style-bali' element={<YogaTeacherTrainingPage data={Bali500HoursData} />} />
                    <Route path='ytt/6-days-50hr-kundalini' element={<YogaTeacherTrainingPage data={BaliKundali50HoursData} />} />
                    <Route path='ytt/100hr-kundalini-bali' element={<YogaTeacherTrainingPage data={BaliKundali100HoursData} />} />
                    <Route path='ytt/200hr-kundalini-bali' element={<YogaTeacherTrainingPage data={BaliKundali200HoursData} />} />
                    <Route path='ytt/300hr-kundalini-bali' element={<YogaTeacherTrainingPage data={BaliKundali300HoursData} />} />
                    <Route path='ytt/500hr-kundalini-bali' element={<YogaTeacherTrainingPage data={BaliKundali500HoursData} />} />
                    <Route path='short-courses/acro-yoga-course' element={<YogaTeacherTrainingPage data={AcroYogaData} />} />
                    <Route path='short-courses/aerial-yoga-course' element={<YogaTeacherTrainingPage data={AerialYogaData} />} />
                    <Route path='short-courses/50hr-yin-yoga' element={<YogaTeacherTrainingPage data={YinYogaData} />} />
                    <Route path='short-courses/85hr-prenatal-yoga' element={<YogaTeacherTrainingPage data={PrenatalYogaData} />} />
                    <Route path='specialization/100hr-yoga-therapy-ayurveda' element={<YogaTeacherTrainingPage data={Bali100HourYogaTherapyAyurvedaData} />} />
                    <Route path='specialization/ayurvedic-treatment-bali' element={<YogaTeacherTrainingPage data={BaliAyurvedicTreatmentTTCData} />} />
                    <Route path='specialization/abhyangam-massage-training-bali' element={<YogaTeacherTrainingPage data={BaliAyurveda5HoursAbhyangamData} />} />
                    <Route path='specialization/vedic-sound-healing-level-1-2' element={<YogaTeacherTrainingPage data={SoundHealingData} />} />
                     <Route path='terms-and-conditions' element={<TermsAndConditions/>} />
                    {/* <Route path='6-days-50-hour-multi-style-yoga-training-in-bali' element={<YogaTeacherTraining/>} /> */}
                    {/* <Route path='ytt/6-days-50hr-multi-style' element={<YogaTeacherTraining/>} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;