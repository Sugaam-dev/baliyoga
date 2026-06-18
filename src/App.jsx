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
import YogaTeacherTraining from './pages/YogaTeacherTraining/YogaTeacherTraining';
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
                     <Route path='terms-and-conditions' element={<TermsAndConditions/>} />
                    <Route path='6-days-50-hour-multi-style-yoga-training-in-bali' element={<YogaTeacherTraining/>} />
                    <Route path='ytt/6-days-50hr-multi-style' element={<YogaTeacherTraining/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;