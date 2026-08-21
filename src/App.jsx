import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import ScrollToTop from './components/shared/ScrollToTop';

const About = React.lazy(() => import('./pages/about/About'));
const Course = React.lazy(() => import('./pages/course/course'));
const Gallery = React.lazy(() => import('./pages/gallery/gallery'));
const Retreat = React.lazy(() => import('./pages/retreat/retreat'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const OnlinePage = React.lazy(() => import('./pages/online/OnlinePage'));
const ProgramPage = React.lazy(() => import('./pages/Program/ProgramPage'));
const CheckoutPage = React.lazy(() => import('./pages/Checkout/CheckoutPage'));
const Facilities = React.lazy(() => import('./pages/meditation/Facilities'));
const TermsAndConditions = React.lazy(() => import('./pages/term&condition/term-condition'));
const FounderPage = React.lazy(() => import('./pages/founder/FounderPage'));
const LocationLandingPage = React.lazy(() => import('./pages/programsCard/LocationLandingPage'));
const BaliActivitiesPage = React.lazy(() => import('./pages/activities/BaliActivitiesPage'));
const BaliActivityDetailPage = React.lazy(() => import('./pages/activities/BaliActivityDetailPage'));

function ProgramPageWrapper() {
  const { pathname } = useLocation();
  return <ProgramPage key={pathname.toLowerCase()} />;
}

function LocationLandingPageWrapper() {
  const { pathname } = useLocation();
  return <LocationLandingPage key={pathname.toLowerCase()} />;
}

function App() {
  const [pricesUpdated, setPricesUpdated] = useState(0);

  useEffect(() => {
    const runFetch = () => {
      import("./utils/dynamicPrices").then((m) => {
        m.fetchAndApplyDynamicPrices().then((success) => {
          if (success) {
            setPricesUpdated((prev) => prev + 1);
          }
        });
      });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(runFetch, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(runFetch, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes key={pricesUpdated}>
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
                   <Route path='holiday-packages' element={<Retreat />} />
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