import React from 'react'
import { Footer, Header } from '../components'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../pages/Components/Banner';
import { bannerData } from '../utils/constant';
import TestimonialSlider from '../pages/Components/Testimonials';
import Cta from '../pages/Components/Cta';

const Layout = () => {
  const location = useLocation();
  const isShowReview = ['/', '/home', '/about-us', '/services', '/gallery', '/gallery/our-video', '/gallery/our-products'];

  const isShowCta = ['/', '/home', '/about-us', '/services', "/services/janam-kundali", "/services/kundali-vishleshan", "/services/child-astrology", "/services/future-astrology", "/services/marriage-astrology", "/services/vastu-shastra", '/gallery', '/gallery/our-video', '/gallery/our-products'];

  const isShowBanner = ['/about-us', '/services', "/services/janam-kundali", "/services/kundali-vishleshan", "/services/child-astrology", "/services/future-astrology", "/services/marriage-astrology", "/services/vastu-shastra", '/gallery', '/gallery/our-video', '/gallery/our-products', '/gallery/news-and-publications', '/appointment', '/contact-us', '/thank-you'];

  return (
    <> 
      <Header />
      {isShowBanner?.includes(location?.pathname) && bannerData[location.pathname] && (
        <Banner {...bannerData[location.pathname]} />
      )}
      <Outlet />

      {isShowReview?.includes(location?.pathname) && <TestimonialSlider /> }

      {isShowCta?.includes(location?.pathname) && <Cta /> }
      
      <Footer />
    </>
  )
}

export default Layout;