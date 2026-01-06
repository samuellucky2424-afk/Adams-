import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Testimonials: React.FC = () => {
  const { content } = useContent();
  if (!content.settings.sections.testimonials) return null;

  return (
    <section className="py-20 bg-nude-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-gold-600 font-bold uppercase tracking-wider text-sm mb-2">Testimonials</h4>
          <h2 className="font-serif text-4xl font-bold text-dark-900">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.testimonials.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 text-gold-500">
                <Quote size={32} className="opacity-20 text-black mb-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < review.rating ? "currentColor" : "none"} 
                      className={i < review.rating ? "text-gold-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed min-h-[60px]">"{review.comment}"</p>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <h5 className="font-bold text-dark-900">{review.name}</h5>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
