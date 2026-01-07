import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';

interface ServicesProps {
  onBookService?: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const { content, getIcon } = useContent();
  const [activeCategory, setActiveCategory] = useState<string>('');

  // Set initial active category when services load
  useEffect(() => {
    if (content.services.length > 0 && !activeCategory) {
      setActiveCategory(content.services[0].id);
    }
  }, [content.services, activeCategory]);

  if (!content.settings.sections.services) return null;

  const activeData = content.services.find(cat => cat.id === activeCategory) || content.services[0];
  const ActiveIcon = activeData ? getIcon(activeData.iconName) : Sparkles;
  const isHairCategory = activeData?.id === 'hair';

  return (
    <section id="services" className="py-20 bg-nude-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-gold-600 font-bold uppercase tracking-wider text-sm mb-2">Our Menu</h4>
          <h2 className="font-serif text-4xl font-bold text-dark-900 mb-4">Premium Services</h2>
          <p className="text-neutral-600">Explore our wide range of beauty and grooming treatments designed to help you shine.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm p-2 sticky top-24 z-20">
              {content.services.map((category) => {
                const Icon = getIcon(category.iconName);
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gold-600 text-white shadow-md scale-105' 
                        : 'text-neutral-600 hover:bg-nude-100 hover:translate-x-2'
                    }`}
                  >
                    <div className="flex items-center">
                      <Icon size={20} className={`mr-3 ${isActive ? 'text-white' : 'text-gold-600'}`} />
                      <span className="font-medium">{category.title}</span>
                    </div>
                    {isActive && <ChevronRight size={16} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Cards Grid/Carousel */}
          <div className="w-full lg:w-3/4">
            <div className="mb-8 flex items-end justify-between">
               <div>
                 <h3 className="text-3xl font-serif text-dark-900 font-bold mb-2">{activeData?.title}</h3>
                 <p className="text-neutral-500">
                   {isHairCategory ? "Swipe to explore our premium hair care menu." : "Select a service to view details or book directly."}
                 </p>
               </div>
               <div className="hidden md:block text-gold-200">
                  <ActiveIcon size={48} strokeWidth={1} />
               </div>
            </div>
            
            {isHairCategory ? (
              <div className="relative group">
                <div className="flex overflow-x-auto gap-4 pb-6 no-scrollbar snap-x snap-mandatory scroll-smooth">
                  {activeData?.services.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="min-w-[280px] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1rem)] snap-start group bg-white p-6 rounded-xl border border-transparent hover:border-gold-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden"
                    >
                      {/* Decorative faint background icon */}
                      <div className="absolute -right-4 -bottom-4 text-nude-100 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 rotate-12 pointer-events-none">
                         <ActiveIcon size={80} />
                      </div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-3">
                            <h4 className="font-serif font-bold text-lg text-dark-900 group-hover:text-gold-600 transition-colors pr-4">{service.name}</h4>
                            <div className="w-7 h-7 rounded-full bg-nude-50 flex items-center justify-center text-gold-500 group-hover:bg-gold-600 group-hover:text-white transition-colors duration-300 shrink-0">
                               <ArrowRight size={12} />
                            </div>
                        </div>
                        
                        <p className="text-neutral-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-2">{service.description}</p>
                        
                        <button 
                          onClick={() => onBookService?.(service.name)}
                          className="w-full py-2.5 rounded-lg border border-gold-200 text-gold-700 font-medium text-xs hover:bg-gold-600 hover:text-white hover:border-gold-600 transition-all duration-300 flex items-center justify-center bg-white/50 backdrop-blur-sm"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Horizontal Indicators for Hair Services */}
                <div className="flex justify-center gap-1.5 mt-2">
                  {activeData?.services.map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold-200 group-hover:bg-gold-400 transition-colors"></div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeData?.services.map((service, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white p-6 rounded-xl border border-transparent hover:border-gold-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden"
                  >
                    {/* Decorative faint background icon */}
                    <div className="absolute -right-4 -bottom-4 text-nude-100 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 rotate-12 pointer-events-none">
                       <ActiveIcon size={100} />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3">
                          <h4 className="font-serif font-bold text-xl text-dark-900 group-hover:text-gold-600 transition-colors pr-4">{service.name}</h4>
                          <div className="w-8 h-8 rounded-full bg-nude-50 flex items-center justify-center text-gold-500 group-hover:bg-gold-600 group-hover:text-white transition-colors duration-300 shrink-0">
                             <ArrowRight size={14} />
                          </div>
                      </div>
                      
                      <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                      
                      <button 
                        onClick={() => onBookService?.(service.name)}
                        className="w-full py-3 rounded-lg border border-gold-200 text-gold-700 font-medium text-sm hover:bg-gold-600 hover:text-white hover:border-gold-600 transition-all duration-300 flex items-center justify-center bg-white/50 backdrop-blur-sm"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* General CTA for Category */}
            <div className="mt-12 p-8 bg-dark-900 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left relative overflow-hidden">
              <div className="relative z-10 mb-6 md:mb-0 max-w-md">
                <h5 className="font-serif font-bold text-2xl mb-2 text-gold-400">Need Guidance?</h5>
                <p className="text-gray-400">Our specialists are here to recommend the perfect treatment for your needs.</p>
              </div>
              <div className="relative z-10">
                 <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                    className="px-8 py-3 bg-gold-600 text-white rounded-full font-bold shadow-md hover:bg-gold-500 transition-colors"
                  >
                    Contact Us
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
