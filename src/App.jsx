import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import ScrollToTop from './components/shared/ScrollToTop';

const About = React.lazy(() => import('./pages/about/About'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const ProgramPage = React.lazy(() => import('./pages/Program/ProgramPage'));
const CheckoutPage = React.lazy(() => import('./pages/Checkout/CheckoutPage'));
const TermsAndConditions = React.lazy(() => import('./pages/term&condition/term-condition'));
const FounderPage = React.lazy(() => import('./pages/founder/FounderPage'));
const LocationLandingPage = React.lazy(() => import('./pages/programsCard/LocationLandingPage'));
const BaliActivitiesPage = React.lazy(() => import('./pages/activities/BaliActivitiesPage'));
const BaliActivityDetailPage = React.lazy(() => import('./pages/activities/BaliActivityDetailPage'));

import { fetchAndApplyDynamicPrices } from './utils/dynamicPrices';

function ProgramPageWrapper() {
  const { pathname } = useLocation();
  return <ProgramPage key={pathname.toLowerCase()} />;
}

function LocationLandingPageWrapper() {
  const { pathname } = useLocation();
  return <LocationLandingPage key={pathname.toLowerCase()} />;
}

function App() {
  useEffect(() => {
    fetchAndApplyDynamicPrices();
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
                   <Route path='about' element={<About/>} />
                   <Route path='contact' element={<Contact/>} /> 
                   <Route path='checkout' element={<CheckoutPage />} />
                   <Route path='bali-activities' element={<BaliActivitiesPage />} />
                   <Route path='bali-activities/:slug' element={<BaliActivityDetailPage />} />
                    
                     <Route path='terms-and-conditions' element={<TermsAndConditions/>} />
                     <Route path="/founder" element={<FounderPage/>}/>
                     <Route path="/programs/:location" element={<LocationLandingPageWrapper />} />
                      <Route path="/programs/:location/:course" element={<ProgramPageWrapper />} />
                      <Route path="/retreats/:location/:course" element={<ProgramPageWrapper />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;