import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ComingSoon from '../components/ComingSoon';
import Home from '../pages/Home/Home';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ComingSoon />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </Router>
  )
}

export default AppRouter