import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import School from './pages/schools/Schoolpage';
import Collegeanduniversitypage from './pages/collegeuniversity/Collegeanduniversitypage';
import StudentsAndParents from './pages/studentsandparents/StudentsAndParents';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
                   <Route path='about' element={<About/>} />
                   <Route path='school' element={<School/>} />
                   <Route path='College&University' element={<Collegeanduniversitypage/>} />
                    <Route path='students&parents' element={<StudentsAndParents/>} />
                    <Route path='contact' element={<Contact/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
