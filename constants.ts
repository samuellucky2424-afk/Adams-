import { AppContent } from './types';

export const INITIAL_CONTENT: AppContent = {
  companyName: "Splendour Vites Beauty (Unisex) Saloon",
  hero: {
    title: "Redefine Your Splendour",
    tagline: "Luxury Beauty & Grooming for Men & Women",
    description: "Experience premium care in a relaxing environment designed for both men and women.",
    bgImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    showRating: true
  },
  contact: {
    address: "Shop 1, Ebenezer Plaza, Sakponba Road, Alihame Rd, Opposite Bolero Junction, Agbor 321102, Delta",
    phone: "09061868772",
    phoneDisplay: "0906 186 8772",
    whatsapp: "2349061868772",
    email: "info@splendourvites.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.345678901234!2d6.2!3d6.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10439123456789ab%3A0x123456789abcdef0!2sAgbor%2C%20Delta!5e0!3m2!1sen!2sng!4v1234567890123"
  },
  theme: {
    primaryColor: '#CA8A04',
    secondaryColor: '#FDF8F6',
    textColor: '#0F0F0F'
  },
  settings: {
    sections: {
      hero: true,
      about: true,
      services: true,
      gallery: true,
      testimonials: true,
      booking: true,
      contact: true
    },
    seo: {
      title: "Splendour Vites Beauty (Unisex) Saloon",
      description: "Luxury Beauty & Grooming for Men & Women in Agbor, Delta State."
    }
  },
  services: [
    {
      id: "hair",
      title: "Hair Services",
      iconName: "Scissors",
      image: "https://images.unsplash.com/photo-1562322140-8a143e38fa05?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "Hairstyling", description: "Expert cuts and styling.", image: "" },
        { name: "Blow dry", description: "Professional blowouts.", image: "" },
        { name: "Balayage", description: "Hand-painted highlights.", image: "" },
        { name: "Hair extensions", description: "Premium quality hair extensions.", image: "" },
        { name: "Dreadlocks", description: "Maintenance and styling.", image: "" }
      ]
    },
    {
      id: "barbing",
      title: "Barbing Services",
      iconName: "UserCheck",
      image: "https://images.unsplash.com/photo-1503951914291-389651746c82?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "Barbing (Adults & Kids)", description: "Precision haircuts.", image: "" },
        { name: "Barbing & dye", description: "Haircut with dye.", image: "" },
        { name: "Shaving only", description: "Clean shave.", image: "" }
      ]
    },
    {
      id: "beauty",
      title: "Beauty & Skin",
      iconName: "Sparkles",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "Acne treatments", description: "Specialized facials.", image: "" },
        { name: "Eyebrow shaping", description: "Sculpting the perfect brow.", image: "" },
        { name: "Microblading", description: "Semi-permanent make-up.", image: "" }
      ]
    },
    {
      id: "nails",
      title: "Nails & Spa",
      iconName: "Gem",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "Acrylic nails", description: "Durable extensions.", image: "" },
        { name: "Manicure", description: "Nail shaping and care.", image: "" },
        { name: "Pedicure", description: "Relaxing foot soak.", image: "" }
      ]
    },
    {
      id: "waxing",
      title: "Waxing",
      iconName: "Zap",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "Body waxing", description: "Smooth skin hair removal.", image: "" },
        { name: "Brazilian waxing", description: "Complete hair removal.", image: "" }
      ]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Chioma E.",
      rating: 5,
      comment: "Absolutely loved my experience! The staff is so professional.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Emmanuel O.",
      rating: 4,
      comment: "Great haircut, very skilled barbers.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Sarah J.",
      rating: 5,
      comment: "Did my nails and lashes here. They look amazing!",
      date: "2 months ago"
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1595859703053-98e2e6044738?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1487412947132-23223f2696c1?auto=format&fit=crop&w=600&q=80",
  ]
};
