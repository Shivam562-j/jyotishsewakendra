import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ComingSoon from '../components/ComingSoon';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ComingSoon />} />
        </Routes>
    </Router>
  )
}

export default AppRouter