import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-dark-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
               {content.companyName}
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">{content.hero.tagline}</p>
          </div>

          <div className="flex space-x-6">
            <a 
              href={content.contact.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gold-500 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={content.contact.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gold-500 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href={content.contact.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gold-500 transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {content.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
