import React from 'react';
import { useContent } from '../context/ContentContext';

const Gallery: React.FC = () => {
  const { content } = useContent();
  if (!content.settings.sections.gallery) return null;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-dark-900 mb-4">Our Gallery</h2>
          <p className="text-neutral-600">A glimpse into our world of beauty and style.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content.gallery.map((src, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl shadow-md ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-wider border border-white px-4 py-2">SPLENDOUR VITES</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
