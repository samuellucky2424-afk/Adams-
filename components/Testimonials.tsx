import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Testimonials: React.FC = () => {
  const { content } = useContent();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds for "slow motion" feel
    return () => clearInterval(timer);
  }, [activeIndex]);

  if (!content.settings.sections.testimonials) return null;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % content.testimonials.length);
      setIsAnimating(false);
    }, 500); // Fade duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + content.testimonials.length) % content.testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const current = content.testimonials[activeIndex];

  return (
    <section className="py-24 bg-dark-900 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-2">Testimonials</h4>
          <h2 className="font-serif text-4xl font-bold text-white">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          {/* Main Slider */}
          <div className={`transition-opacity duration-1000 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative">
              <Quote size={80} className="absolute -top-6 -left-6 text-gold-500/20 pointer-events-none" />
              
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-8 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={i < current.rating ? "#CA8A04" : "none"} 
                      className={i < current.rating ? "text-gold-500" : "text-gray-600"}
                    />
                  ))}
                </div>

                <p className="text-white text-xl md:text-2xl font-serif italic leading-relaxed mb-10 min-h-[120px]">
                  "{current.comment}"
                </p>

                <div className="flex flex-col items-center">
                  <h5 className="font-bold text-white text-xl mb-1">{current.name}</h5>
                  <span className="text-gold-500 text-sm tracking-widest uppercase">{current.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-hover:scale-110" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-hover:scale-110" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {content.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(i);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`transition-all duration-500 rounded-full ${
                  activeIndex === i ? 'w-10 bg-gold-500 h-2' : 'w-2 bg-gray-600 h-2'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
