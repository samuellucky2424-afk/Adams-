import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle } from 'lucide-react';
import Button from './ui/Button';
import { useContent } from '../context/ContentContext';

interface BookingProps {
  prefilledService?: string;
}

const Booking: React.FC<BookingProps> = ({ prefilledService }) => {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  if (!content.settings.sections.booking) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, date, time } = formData;
    
    const message = `Hello, I would like to book an appointment.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Time:* ${time}`;
    
    window.open(`https://wa.me/${content.contact.whatsapp}?text=${message}`, '_blank');
  };

  // Flatten services for the dropdown
  const allServices = content.services.flatMap(cat => cat.services.map(s => s.name));

  return (
    <section id="booking" className="py-24 bg-dark-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 text-white">
            <h4 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-2">Engage with Us</h4>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Experience Excellence Across Our Brands</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Explore our premium products and specialized services. Fill out the form below to connect with us or schedule a session, and we will redirect you to WhatsApp for personalized assistance.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center space-x-4">
                 <div className="bg-white/10 p-3 rounded-full text-gold-500">
                   <Clock size={24} />
                 </div>
                 <div>
                   <p className="font-bold">Business Hours</p>
                   <p className="text-sm text-gray-400">Mon - Sat: 8:00am to 9:00pm</p>
                   <p className="text-sm text-gray-400">Sundays: 2:00pm to 8:00pm</p>
                 </div>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="bg-white/10 p-3 rounded-full text-gold-500">
                   <CheckCircle size={24} />
                 </div>
                 <div>
                   <p className="font-bold">Confirmation</p>
                   <p className="text-sm text-gray-400">Instant confirmation via WhatsApp</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-dark-900 mb-6 text-center">Book Your Session</h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute top-3.5 left-4 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute top-3.5 left-4 text-gray-400" size={18} />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    required
                    value={formData.phone}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <select 
                    name="service" 
                    required
                    className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all appearance-none"
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <option value="" disabled>Select Service</option>
                    {allServices.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute top-3.5 left-4 text-gray-400" size={18} />
                    <input 
                      type="date" 
                      name="date" 
                      required
                      value={formData.date}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute top-3.5 left-4 text-gray-400" size={18} />
                    <input 
                      type="time" 
                      name="time" 
                      required
                      value={formData.time}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button fullWidth type="submit" size="lg" className="mt-4">
                  Connect via WhatsApp
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting, you agree to our service terms and policies.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
