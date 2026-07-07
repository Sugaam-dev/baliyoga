import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Course from './pages/Course/Course';
import Gallery from './pages/Gallery/Gallery';
import Retreat from './pages/Retreat/Retreat';
import Contact from './pages/Contact/Contact';
import OnlinePage from './pages/Online/OnlinePage';
import ScrollToTop from './components/shared/ScrollToTop';

import ProgramPage from './pages/Program/ProgramPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';

import Facilities from './pages/Meditation/Facilities';
import TermsAndConditions from './pages/term&condition/term-condition';


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
                   <Route path='checkout' element={<CheckoutPage />} />
                    <Route path=':category/:slug' element={<ProgramPage />} />
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