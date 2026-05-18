import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;