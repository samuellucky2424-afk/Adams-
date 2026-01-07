import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-dark-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
               Splendour Vites Enterprises
            </h3>
            <p className="text-gray-500 text-sm max-w-xs mb-4">{content.hero.tagline}</p>
            <p className="text-gray-400 text-xs italic">Like and follow our pages on Facebook, Instagram, YouTube, and TikTok!</p>
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
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gold-500 transition-colors"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Splendour Vites Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
