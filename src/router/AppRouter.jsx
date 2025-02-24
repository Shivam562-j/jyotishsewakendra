import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ComingSoon from '../components/ComingSoon';
import { AboutUs, Appointment, ContactUs, Gallery, Home, Services, ThankYou } from '../pages';

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

        </Routes>
    </Router>
  )
}

export default AppRouter