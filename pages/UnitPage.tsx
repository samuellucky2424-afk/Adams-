import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import { ArrowLeft, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';

const UnitPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { content } = useContent();
  
  const unit = content.units.find(u => u.id === id);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Unit Not Found</h1>
          <Link to="/" className="text-gold-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${content.contact.whatsapp}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={unit.image} 
            alt={unit.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/" className="inline-flex items-center text-gold-400 mb-6 hover:text-gold-300 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">{unit.name}</h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto">{unit.tagline}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 font-serif">About {unit.name}</h2>
              <div className="prose prose-lg text-gray-600 mb-12">
                <p className="whitespace-pre-wrap">{unit.description}</p>
              </div>

              {unit.services && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 font-serif">Our Services & Products</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {unit.services.map((service, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {unit.additionalImages && unit.additionalImages.length > 0 && (
                <div className="mt-12 overflow-hidden">
                  <h3 className="text-2xl font-bold mb-6 font-serif">Branded Gallery</h3>
                  <div className="relative group">
                    <div 
                      className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
                      style={ {
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                      } }
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.animationPlayState = 'paused';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.animationPlayState = 'running';
                      }}
                    >
                      <div className="flex gap-6 animate-scroll-slow">
                        {[...unit.additionalImages, ...unit.additionalImages].map((img, index) => (
                          <div 
                            key={index} 
                            className="min-w-[280px] sm:min-w-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 snap-center transition-all duration-1000 hover:scale-105"
                          >
                            <img 
                              src={img} 
                              alt={`${unit.name} Design ${index + 1}`} 
                              className="w-full h-auto object-cover aspect-video" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold mb-6 font-serif">Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="text-gold-600 mr-4 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Opening Hours</p>
                      <p className="text-gray-600">{unit.hours || content.contact.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="text-gold-600 mr-4 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">{content.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-gold-600 mr-4 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">{content.contact.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button fullWidth onClick={handleWhatsApp}>
                    <MessageCircle className="mr-2" size={18} />
                    Chat on WhatsApp
                  </Button>
                  <Button fullWidth variant="outline" onClick={() => window.open(`tel:${content.contact.phone}`)}>
                    <Phone className="mr-2" size={18} />
                    Call Us Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnitPage;