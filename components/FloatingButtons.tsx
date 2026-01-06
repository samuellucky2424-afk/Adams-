import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const FloatingButtons: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      {content.settings.sections.contact && (
        <a
          href={`tel:${content.contact.phone}`}
          className="bg-white text-dark-900 p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all border border-gray-200 md:hidden flex items-center justify-center"
          aria-label="Call Us"
        >
          <Phone size={24} className="fill-current" />
        </a>
      )}
      
      <a
        href={`https://wa.me/${content.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20b858] transition-all flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingButtons;
