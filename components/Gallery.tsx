import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';

const Gallery: React.FC = () => {
  const { content } = useContent();
  const [activeGroup, setActiveGroup] = useState(0);

  // Group images into 4 groups
  const groupSize = Math.ceil(content.gallery.length / 4);
  const groups = [
    content.gallery.slice(0, groupSize),
    content.gallery.slice(groupSize, groupSize * 2),
    content.gallery.slice(groupSize * 2, groupSize * 3),
    content.gallery.slice(groupSize * 3)
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % 4);
    }, 5000); // Change group every 5 seconds
    return () => clearInterval(timer);
  }, []);

  if (!content.settings.sections.gallery) return null;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-dark-900 mb-4">Our Gallery</h2>
          <p className="text-neutral-600">A glimpse into our world of beauty and style.</p>
          
          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActiveGroup(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeGroup === i ? 'bg-gold-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Show group ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] overflow-hidden rounded-3xl shadow-2xl bg-nude-50">
          {groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4 transition-all duration-1000 transform ${
                activeGroup === groupIndex 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-full scale-95 pointer-events-none'
              }`}
            >
              {group.map((src, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-xl shadow-md ${
                    index % 3 === 0 ? 'md:col-span-2 md:row-span-2 h-[200px] sm:h-[300px] md:h-auto' : 'h-[100px] sm:h-[150px] md:h-auto'
                  }`}
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${groupIndex * groupSize + index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs md:text-base font-serif tracking-wider border border-white px-2 py-1 md:px-4 md:py-2">SPLENDOUR VITES</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
