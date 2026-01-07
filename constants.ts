import { AppContent } from './types';

export const INITIAL_CONTENT: AppContent = {
  companyName: "Splendour Vites Enterprises",
  units: [
    {
      id: 'saloon',
      name: 'Splendour Vites Beauty (Unisex) Saloon',
      tagline: 'Excellence in Hair & Beauty Care',
      description: 'Experience premium styling and grooming at our state-of-the-art unisex salon. We combine modern techniques with professional care to give you the perfect look.\n\nOur salon offers a wide range of services including professional hairstyling, barbing, beauty treatments, and more. We pride ourselves on our hygiene standards and the use of premium products for all our clients.',
      image: '/gallery/img1.jpg',
      services: ['Professional Hairstyling', 'Barbing (Adults & Kids)', 'Wig & Frontal Installation', 'Manicure & Pedicure', 'Facial & Acne Treatment', 'Eyebrow Shaping & Microblading', 'Dreadlocks Maintenance', 'Bridal Styling'],
      hours: 'Mon-Sat: 8:00 AM - 9:00 PM, Sun: 2:00 PM - 8:00 PM'
    },
    {
      id: 'water',
      name: 'Splendour Vites Table Water',
      tagline: 'Pure. Clean. Refreshing.',
      description: 'Our table water is produced under the highest standards of hygiene and quality assurance. We ensure that every drop is purified for your health and vitality.\n\nWe use advanced purification technologies and follow strict quality control protocols to ensure our water is safe for consumption. Our production facility is regularly inspected to maintain top hygiene standards.',
      image: '/table-water.jpg',
      services: ['Multi-stage Purification', 'Quality Assurance Testing', 'Wholesale Distribution', 'Retail Sales', 'Multiple Packaging Sizes'],
    },
    {
      id: 'hair-products',
      name: 'Splendour Vites Hair Products & Production',
      tagline: 'Professional Hair Care Solutions',
      description: 'We manufacture premium hair products designed for all hair types. Our formulas are crafted to promote growth, shine, and overall hair health.\n\nOur research and development team focuses on creating products that are safe, effective, and tailored to the needs of our diverse clientele. We use natural ingredients where possible to ensure your hair gets the best care.',
      image: '/hair-products.jpg',
      services: ['Hair Growth Oils', 'Intensive Conditioning Treatments', 'Professional Grade Shampoos', 'Styling Gels & Pomades', 'Hair Maintenance Kits'],
    },
    {
      id: 'pharmacy',
      name: 'Splendour Vites Pharmacies & Store',
      tagline: 'Your Health, Our Priority',
      description: 'Providing quality pharmaceutical products and health essentials. We focus on trust, safety, and the wellness of our community.\n\nOur pharmacy is stocked with authentic medications and health supplements. We have qualified professionals available to provide expert consultation and guidance for your health needs.',
      image: '/pharmacy.jpg',
      services: ['Prescription Medications', 'Over-the-counter Medicines', 'Health & Wellness Supplements', 'Personal Care Products', 'Expert Health Consultation'],
    }
  ],
  hero: {
    title: "Excellence in Diverse Business Solutions",
    tagline: "Quality Without Compromise",
    description: "A conglomerate of premium brands committed to quality, health, and beauty. Discover our range of specialized services across multiple sectors.",
    bgImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    showRating: true
  },
  contact: {
    address: "Shop 1, Ebenezer Plaza, Sakponba Road, Alihame Rd, Opposite Bolero Junction, Agbor 321102, Delta",
    phone: "08136544434",
    phoneDisplay: "+234 813 654 4434",
    whatsapp: "2349061868772",
    email: "splendourvites@gmail.com",
    mapUrl: "",
    facebook: "https://www.facebook.com/share/19Jzw6pR7X/",
    instagram: "https://www.instagram.com/splendour_vites?igsh=MWh4aW52aHowNzMwMw==",
    twitter: "https://youtube.com/@splendourvites?si=nBtfoZVReKSDlUVG",
    openingHours: {
      monSat: "8:00 AM – 9:00 PM",
      sun: "2:00 PM – 8:00 PM"
    },
    posAvailable: true
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
        { name: "Dreadlocks & Maintenance", description: "Complete care for your locks.", image: "" },
        { name: "Braids of all styles", description: "From box braids to cornrows.", image: "" },
        { name: "Tinting & Dyes", description: "Professional hair coloring.", image: "" },
        { name: "Frontal installations", description: "Flawless wig and frontal fixing.", image: "" }
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
        { name: "Microblading", description: "Semi-permanent make-up.", image: "" },
        { name: "Fixing of eye lashes", description: "Professional lash extension.", image: "" }
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
        { name: "Pedicure", description: "Relaxing foot soak.", image: "" },
        { name: "Nails design & care", description: "Artistic nail designs.", image: "" }
      ]
    },
    {
      id: "products",
      title: "Hair Products",
      iconName: "ShoppingBag",
      image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "Production of hair products", description: "In-house manufactured premium products.", image: "" },
        { name: "Sales of hair products", description: "Retail of top beauty brands.", image: "" }
      ]
    },
    {
      id: "entertainment",
      title: "In-House Entertainment",
      iconName: "Gamepad2",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "PlayStation (PS4 & PS5)", description: "Enjoy latest games while you wait.", image: "" },
        { name: "Snooker", description: "Classic snooker table for your leisure.", image: "" }
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
    },
    {
      id: "pos",
      title: "POS & Financial",
      iconName: "CreditCard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      services: [
        { name: "POS Services Available", description: "Withdrawals and transfers available at our counter.", image: "" },
        { name: "We Accept POS Payments", description: "Pay for any salon service easily with your card.", image: "" }
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
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
    "/gallery/img16.jpg",
    "/gallery/img17.jpg",
    "/gallery/img18.jpg",
    "/gallery/img19.jpg",
    "/gallery/img20.jpg"
  ]
};
