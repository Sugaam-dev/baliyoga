import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import Course from './pages/course/course';
import Gallery from './pages/gallery/gallery';
import Retreat from './pages/retreat/retreat';
// import Collegeanduniversitypage from './pages/collegeuniversity/Collegeanduniversitypage';
// import StudentsAndParents from './pages/studentsandparents/StudentsAndParents';
import Contact from './pages/contact/Contact';
import OnlinePage from './pages/online/OnlinePage';
import MeditationPage from './pages/meditation/MeditationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
                   <Route path='about' element={<About/>} />

                   {/* <Route path='course' element={<Course/>} />
                   <Route path='gallery' element={<Gallery/>} />
                   <Route path='retreat'  element={<Retreat/>} /> */}
                   {/* <Route path='school' element={<School/>} />
                   <Route path='College&University' element={<Collegeanduniversitypage/>} />
                    <Route path='students&parents' element={<StudentsAndParents/>} /> */}

                    <Route path='online' element={<OnlinePage/>} />
                    <Route path='meditation' element={<MeditationPage/>} />
                     {/*<Route path='students&parents' element={<StudentsAndParents/>} /> */}

                    <Route path='contact' element={<Contact/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
