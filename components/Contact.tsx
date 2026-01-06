import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Contact: React.FC = () => {
  const { content } = useContent();
  if (!content.settings.sections.contact) return null;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-gold-600 font-bold uppercase tracking-wider text-sm mb-2">Visit Us</h4>
          <h2 className="font-serif text-4xl font-bold text-dark-900">Contact & Location</h2>
        </div>

        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden">
          {/* Info Side */}
          <div className="w-full lg:w-1/3 bg-dark-900 text-white p-10 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold mb-8 text-gold-500">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold mb-1">Address</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{content.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-gold-500 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold mb-1">Phone</h5>
                  <a href={`tel:${content.contact.phone}`} className="text-gray-300 text-sm hover:text-white block">
                    {content.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-gold-500 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold mb-1">Email</h5>
                  <a href={`mailto:${content.contact.email}`} className="text-gray-300 text-sm hover:text-white block">
                    {content.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-gold-500 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold mb-1">Business Hours</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li className="flex justify-between w-64"><span>Mon - Sat:</span> <span>8:00 AM - 9:00 PM</span></li>
                    <li className="flex justify-between w-64"><span>Sunday:</span> <span>2:00 PM - 8:00 PM</span></li>
                  </ul>
                </div>
              </div>

              {content.contact.posAvailable && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center bg-gold-600/20 text-gold-400 px-4 py-3 rounded-xl border border-gold-600/30">
                    <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center text-white mr-3 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M3 10h18"/></svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm">POS Services Available</h5>
                      <p className="text-xs text-gray-300">We Accept POS Payments</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-2/3 h-80 lg:h-auto bg-gray-200">
            <iframe
              src={content.contact.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
