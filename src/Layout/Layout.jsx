import React from 'react'
import { Footer, Header } from '../components'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../pages/Components/Banner';
import { bannerData } from '../utils/constant';
import TestimonialSlider from '../pages/Components/Testimonials';
import Cta from '../pages/Components/Cta';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {(location.pathname !== "/" || location.pathname !== "/home") && bannerData[location.pathname] && (
        <Banner {...bannerData[location.pathname]} />
      )}
      <Outlet />

      {location.pathname !== "/" &&
        <>
          <TestimonialSlider />
          <Cta />
        </>
      }
      <Footer />
    </>
  )
}

export default Layout;