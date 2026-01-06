import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './ui/Button';
import { useContent } from '../context/ContentContext';

const Navbar: React.FC = () => {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', show: content.settings.sections.hero },
    { name: 'About', href: '#about', show: content.settings.sections.about },
    { name: 'Services', href: '#services', show: content.settings.sections.services },
    { name: 'Gallery', href: '#gallery', show: content.settings.sections.gallery },
    { name: 'Contact', href: '#contact', show: content.settings.sections.contact },
  ].filter(link => link.show);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-dark-900' : 'text-white'}`}>
              {content.companyName.split(' ')[0]}<span className="text-gold-500">{content.companyName.split(' ')[1] || ''}</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${isScrolled ? 'text-neutral-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            {content.settings.sections.booking && (
              <Button 
                size="sm" 
                variant={isScrolled ? "primary" : "white"}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-neutral-800 hover:text-gold-600 hover:bg-nude-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              {content.settings.sections.booking && (
                <Button fullWidth onClick={() => {
                  setIsOpen(false);
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Book Appointment
                </Button>
              )}
              <a 
                href={`tel:${content.contact.phone}`}
                className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-full text-neutral-700 font-medium hover:bg-gray-50"
              >
                <Phone size={18} className="mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
