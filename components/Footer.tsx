import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-dark-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-gold-500 shadow-lg mb-4 bg-dark-900">
              <img 
                src="/logo.jpg" 
                alt="Splendour Vites Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2 text-center md:text-left">
               {content.companyName}
            </h3>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">{content.hero.tagline}</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
              <Twitter size={24} />
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
