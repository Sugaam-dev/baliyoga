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
import ScrollToTop from './components/shared/ScrollToTop';

import ProgramPage from './pages/Program/ProgramPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';

import Facilities from './pages/meditation/Facilities';
import TermsAndConditions from './pages/term&condition/term-condition';
import FounderPage from "./pages/founder/FounderPage";
import BaliLandingPage from "./pages/home/components/balipage";
import RishikeshLandingPage from "./pages/home/components/rishikeshpage";
import MysoreLandingPage from "./pages/home/components/mysorepage";
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
                    
                     <Route path='terms-and-conditions' element={<TermsAndConditions/>} />
                     <Route path="/founder" element={<FounderPage/>}/>
                     <Route path="/programs/bali" element={<BaliLandingPage />} />
                     <Route path="/programs/rishikesh" element={<RishikeshLandingPage />} />
                    
                     <Route path="/programs/mysore" element={<MysoreLandingPage />} />
                     <Route path=':category/:slug' element={<ProgramPage />} />
                    {/* <Route path='6-days-50-hour-multi-style-yoga-training-in-bali' element={<YogaTeacherTraining/>} /> */}
                    {/* <Route path='ytt/6-days-50hr-multi-style' element={<YogaTeacherTraining/>} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;