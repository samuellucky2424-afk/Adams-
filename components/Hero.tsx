import React from 'react';
import { Star, MessageCircle, Calendar } from 'lucide-react';
import Button from './ui/Button';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero, companyName, contact } = content;

  if (!content.settings.sections.hero) return null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contact.whatsapp}`, '_blank');
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero.bgImage} 
          alt="SPLENDOUR VITES LTD" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 sm:from-black/70 sm:to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center sm:text-left pt-20 pb-12 sm:py-20">
        <div className="max-w-3xl">
          {/* Rating */}
          {hero.showRating && (
            <div className="flex items-center justify-center sm:justify-start space-x-1 mb-4 sm:mb-6 animate-fade-in-up">
              <div className="flex text-gold-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="sm:w-5 sm:h-5" fill={s <= 4 ? "currentColor" : "none"} strokeWidth={s > 4 ? 2 : 0} />
                ))}
              </div>
              <span className="text-white/90 text-xs sm:text-sm font-medium ml-2">4.8 (120+ Reviews)</span>
            </div>
          )}

          {/* Main Headings */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight whitespace-pre-wrap">
            {hero.title}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-2 font-light tracking-wide">
            {hero.tagline}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0">
            {hero.description}
          </p>

          {/* Open Status & POS badge */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-black/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <span className="text-white text-xs sm:text-sm">Open Today: <span className="ml-1 text-[10px] sm:text-xs md:text-sm">{new Date().getDay() === 0 ? '2:00 PM - 8:00 PM' : '8:00 AM - 9:00 PM'}</span></span>
            </div>
            {content.contact.posAvailable && (
              <button 
                onClick={() => document.getElementById('units')?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex items-center bg-gold-600 hover:bg-gold-500 transition-colors backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold-400/30 cursor-pointer shadow-lg group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white group-hover:scale-110 transition-transform sm:w-4 sm:h-4"><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M3 10h18"/></svg>
                <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">POS Services</span>
              </button>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
            <Button size="lg" className="w-full xs:w-auto text-sm sm:text-base" onClick={scrollToBooking}>
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Connect with Us
            </Button>
            <Button size="lg" variant="outline" className="w-full xs:w-auto text-sm sm:text-base border-white text-white hover:bg-white hover:text-black hover:border-white" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
