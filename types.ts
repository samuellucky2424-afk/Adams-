import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  name: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string; // Changed from LucideIcon component to string name for storage
  services: ServiceItem[];
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  mapUrl: string;
  email: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  openingHours?: {
    monSat: string;
    sun: string;
  };
  posAvailable?: boolean;
}

export interface HeroSection {
  title: string;
  tagline: string;
  description: string;
  bgImage: string;
  showRating: boolean;
}

export interface ThemeSettings {
  primaryColor: string; // Hex for Gold-600
  secondaryColor: string; // Hex for Nude-50
  textColor: string; // Hex for Dark-900
}

export interface SiteSettings {
  sections: {
    hero: boolean;
    about: boolean;
    services: boolean;
    gallery: boolean;
    testimonials: boolean;
    booking: boolean;
    contact: boolean;
  };
  seo: {
    title: string;
    description: string;
  };
}

export interface AppContent {
  companyName: string;
  hero: HeroSection;
  contact: ContactInfo;
  services: ServiceCategory[];
  testimonials: Review[];
  gallery: string[];
  theme: ThemeSettings;
  settings: SiteSettings;
}
