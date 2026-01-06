import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { ContentProvider, useContent } from './context/ContentContext';
import UnitPage from './pages/UnitPage';
import Button from './components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const { content } = useContent();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setTimeout(() => {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative font-sans text-neutral-800 antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        
        {/* Business Units Section */}
        <section id="units" className="py-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Units / Our Products</h2>
              <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
            </div>
            
            <div className="relative group">
              {/* Navigation Buttons */}
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-100 hover:bg-gold-500 hover:text-white transition-all -left-4 opacity-0 group-hover:opacity-100 group-hover:left-2"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-100 hover:bg-gold-500 hover:text-white transition-all -right-4 opacity-0 group-hover:opacity-100 group-hover:right-2"
              >
                <ChevronRight size={24} />
              </button>

              <div 
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
                style={ { scrollbarWidth: 'none', msOverflowStyle: 'none' } }
              >
                {content.units.map((unit) => (
                  <div 
                    key={unit.id} 
                    className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col snap-start"
                  >
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