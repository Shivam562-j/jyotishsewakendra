import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ComingSoon, ScrollToTop } from '../components';
import { AboutUs, Appointment, ChildAstrology, ContactUs, FutureAstrology, Gallery, Home, JanamKundali, KundaliVishleshan, MarriageAstrology, NewsAndPublications, OurProducts, OurVideo, Services, ThankYou, VastuShastra } from '../pages';
import Layout from '../Layout/Layout';
import NotFound from '../components/NotFound/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* <Route path='/' element={<ComingSoon />} /> */}
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path="/services/janam-kundali" element={<JanamKundali />} />
          <Route path="/services/kundali-vishleshan" element={<KundaliVishleshan />} />
          <Route path="/services/child-astrology" element={<ChildAstrology />} />
          <Route path="/services/future-astrology" element={<FutureAstrology />} />
          <Route path="/services/marriage-astrology" element={<MarriageAstrology />} />
          <Route path="/services/vastu-shastra" element={<VastuShastra />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/gallery/our-video' element={<OurVideo />} />
          <Route path='/gallery/our-products' element={<OurProducts />} />
          <Route path='/gallery/news-and-publications' element={<NewsAndPublications />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter