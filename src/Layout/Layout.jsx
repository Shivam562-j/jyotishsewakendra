import React from 'react'
import { Footer, Header } from '../components'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../pages/Components/Banner';
import { bannerData } from '../utils/constant';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {(location.pathname !== "/" || location.pathname !== "/home") && bannerData[location.pathname] && (
        <Banner {...bannerData[location.pathname]} />
      )}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;