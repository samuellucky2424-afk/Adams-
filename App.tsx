import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Admin
import Admin from './pages/Admin';
import Login from './pages/Login';

// Protected Route Wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Main Website Layout
const PublicSite = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setTimeout(() => {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <div className="relative font-sans text-neutral-800 antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onBookService={handleBookService} />
        <Gallery />
        <Testimonials />
        <Booking prefilledService={selectedService} />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

function App() {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicSite />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;