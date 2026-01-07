import React from 'react';
import { ShieldCheck, Users, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();
  if (!content.settings.sections.about) return null;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              <img 
                src={content.about.image} 
                alt="Splendour Vites Enterprises" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-gold-600 font-bold uppercase tracking-wider text-sm mb-2">About Us</h4>
            <h2 className="font-serif text-4xl font-bold text-dark-900 mb-6">{content.about.title}</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6 whitespace-pre-wrap">
              {content.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="p-3 bg-nude-100 rounded-lg text-gold-600 mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-dark-900">Unisex Salon</h5>
                  <p className="text-sm text-neutral-500">Specialized services for everyone.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-nude-100 rounded-lg text-gold-600 mr-4">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-dark-900">Top Hygiene</h5>
                  <p className="text-sm text-neutral-500">Sterilized tools and clean environment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-nude-100 rounded-lg text-gold-600 mr-4">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-dark-900">Expert Stylists</h5>
                  <p className="text-sm text-neutral-500">Experienced professionals at your service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
