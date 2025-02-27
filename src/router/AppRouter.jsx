import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ComingSoon } from '../components';
import { AboutUs, Appointment, ChildAstrology, ContactUs, FutureAstrology, Gallery, Home, JanamKundali, KundaliVishleshan, MarriageAstrology, Services, ThankYou, VastuShastra } from '../pages';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ComingSoon />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/janam-kundali' element={<JanamKundali />} />
        <Route path='/kundali-vishleshan' element={<KundaliVishleshan />} />
        <Route path='/child-astrology' element={<ChildAstrology />} />
        <Route path='/future-astrology' element={<FutureAstrology />} />
        <Route path='/marriage-astrology' element={<MarriageAstrology />} />
        <Route path='/vastu-shastra' element={<VastuShastra />} />
      
      </Routes>
    </Router>
  )
}

export default AppRouter