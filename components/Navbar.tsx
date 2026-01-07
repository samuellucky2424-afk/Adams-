import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';
import { useContent } from '../context/ContentContext';

const Navbar: React.FC = () => {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUnitsOpen, setIsUnitsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/', type: 'link' },
    { name: 'About', href: isHomePage ? '#about' : '/#about', type: 'link' },
    { name: 'Our Units', type: 'dropdown' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', type: 'link' },
  ];

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className={`font-serif text-2xl font-bold tracking-tight ${(isScrolled || !isHomePage) ? 'text-dark-900' : 'text-white'}`}>
              Splendour<span className="text-gold-500">Vites</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              link.type === 'dropdown' ? (
                <div key={link.name} className="relative group">
                  <button
                    onMouseEnter={() => setIsUnitsOpen(true)}
                    onClick={() => setIsUnitsOpen(!isUnitsOpen)}
                    className={`flex items-center text-sm font-medium transition-colors hover:text-gold-500 ${(isScrolled || !isHomePage) ? 'text-neutral-700' : 'text-white/90'}`}
                  >
                    {link.name} <ChevronDown size={16} className="ml-1" />
                  </button>
                  {isUnitsOpen && (
                    <div 
                      onMouseLeave={() => setIsUnitsOpen(false)}
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl py-2 mt-2 border border-gray-100"
                    >
                      {content.units.map((unit) => (
                        <Link
                          key={unit.id}
                          to={`/unit/${unit.id}`}
                          onClick={() => setIsUnitsOpen(false)}
                          className="block px-4 py-3 text-sm text-neutral-700 hover:bg-gold-50 hover:text-gold-600"
                        >
                          {unit.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                link.href?.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-gold-500 ${(isScrolled || !isHomePage) ? 'text-neutral-700' : 'text-white/90'}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href!}
                    className={`text-sm font-medium transition-colors hover:text-gold-500 ${(isScrolled || !isHomePage) ? 'text-neutral-700' : 'text-white/90'}`}
                  >
                    {link.name}
                  </Link>
                )
              )
            ))}
            {content.settings.sections.booking && (
              <Button 
                size="sm" 
                variant={(isScrolled || !isHomePage) ? "primary" : "white"}
                onClick={() => isHomePage ? document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }) : window.location.href = '/#booking'}
              >
                Book Now
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${(isScrolled || !isHomePage) ? 'text-neutral-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] z-50 bg-white shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              link.type === 'dropdown' ? (
                <div key={link.name} className="space-y-1">
                  <div className="px-3 py-3 text-base font-bold text-neutral-800">Our Units</div>
                  {content.units.map((unit) => (
                    <Link
                      key={unit.id}
                      to={`/unit/${unit.id}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-2 text-sm text-neutral-600 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
                    >
                      {unit.name}
                    </Link>
                  ))}
                </div>
              ) : (
                link.href?.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-neutral-800 hover:text-gold-600 hover:bg-nude-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href!}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-neutral-800 hover:text-gold-600 hover:bg-nude-50 rounded-lg"
                  >
                    {link.name}
                  </Link>
                )
              )
            ))}
            <div className="pt-4 flex flex-col gap-3">
              {content.settings.sections.booking && (
                <Button fullWidth onClick={() => {
                  setIsOpen(false);
                  isHomePage ? document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }) : window.location.href = '/#booking';
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
