import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const { content } = useContent();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!content.settings.sections.gallery) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === 0 ? content.gallery.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === content.gallery.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-gold-600 font-bold uppercase tracking-wider text-sm mb-2">Our Work</h4>
          <h2 className="font-serif text-4xl font-bold text-dark-900 mb-4">Gallery</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our collection of styles and premium services. Click on any image to view it in full screen.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {content.gallery.map((src, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md break-inside-avoid"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>

            <div className="relative max-w-5xl max-h-[85vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <img 
                src={content.gallery[selectedImage]} 
                alt="Fullscreen gallery" 
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center text-white/70 text-sm">
                Image {selectedImage + 1} of {content.gallery.length}
              </div>
            </div>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>
            
            {/* Mobile Nav */}
            <div className="absolute bottom-10 flex gap-10 md:hidden">
              <button 
                className="p-3 rounded-full bg-white/10 text-white"
                onClick={handlePrev}
              >
                <ChevronLeft size={30} />
              </button>
              <button 
                className="p-3 rounded-full bg-white/10 text-white"
                onClick={handleNext}
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
