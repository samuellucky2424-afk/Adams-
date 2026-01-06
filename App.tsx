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

import UnitPage from './pages/UnitPage';

// Main Website Layout
const PublicSite = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const { content } = useContent();

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
        
        {/* Business Units Section */}
        <section id="units" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Units / Our Products</h2>
              <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.units.map((unit) => (
                <div key={unit.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={unit.image} alt={unit.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold font-serif mb-2">{unit.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">{unit.tagline}</p>
                    <Link to={`/unit/${unit.id}`}>
                      <Button fullWidth variant="outline">View Details</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
          <Route path="/unit/:id" element={<UnitPage />} />
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