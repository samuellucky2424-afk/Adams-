import { AppContent } from './types';

export const INITIAL_CONTENT: AppContent = {
  companyName: "Splendour Vites Enterprises",
  units: [
    {
      id: 'saloon',
      name: 'Splendour Vites Beauty (Unisex) Saloon',
      tagline: 'Splendour Vites Enterprises',
      description: 'Step into a world of elite grooming and aesthetic perfection at Splendour Vites Beauty (Unisex) Saloon. As a cornerstone of Splendour Vites Enterprises, we redefine beauty standards through a fusion of sophisticated artistry and state-of-the-art techniques. Our sanctuary of style is dedicated to crafting bespoke looks that empower your confidence and reflect your unique personality.\n\nWe specialize in high-end hairstyling, precision barbing for all ages, and advanced beauty treatments including professional wig installations and medical-grade facial care. At Splendour Vites, your wellness is our priority—experience luxury in an environment built on uncompromising hygiene and premium professional products.',
      image: '/gallery/img1.jpg',
      additionalImages: ['/saloon-banner.jpg', '/saloon-logo-alt.jpg'],
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
    title: "Premium Quality. Exceptional Service. Diverse Solutions.",
    tagline: "Splendour Vites Enterprises",
    description: "Splendour Vites Enterprises is your trusted partner for premium beauty, health, and lifestyle products. We are committed to excellence across all our specialized business units.",
    bgImage: "/hero-1.jpg",
    showRating: true
  },
  about: {
    title: "About Splendour Vites Enterprises",
    description: "Splendour Vites Enterprises is a diversified conglomerate dedicated to delivering excellence across multiple industries. From our flagship Unisex Salon providing premium grooming to our high-standard Table Water production, Hair Product manufacturing, and community-focused Pharmacies, we prioritize quality, trust, and customer satisfaction in everything we do. Our mission is to enhance lives through professional services and premium products that meet the highest standards of safety and hygiene.",
    image: "/hero-2.jpg",
  },
  contact: {
    address: "Shop 1, Opposite Bolero Club, Alihame Rd, Agbor 321102, Delta, Nigeria",
    phone: "+2349061868772",
    phoneDisplay: "+234 906 186 8772",
    whatsapp: "2349061868772",
    email: "splendourvites@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.418423406259!2d6.188448974530084!3d6.251433726002622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043916962f92965%3A0xe5304024840e74f8!2sAlihame%20Rd%2C%20Agbor%2C%20Delta!5e0!3m2!1sen!2sng!4v1715100000000!5m2!1sen!2sng",
    facebook: "https://www.facebook.com/share/19Jzw6pR7X/",
    instagram: "https://www.instagram.com/splendour_vites?igsh=MWh4aW52aHowNzMwMw==",
    twitter: "https://youtube.com/@splendourvites?si=nBtfoZVReKSDlUVG",
    openingHours: {
      monSat: "8:00am to 9:00pm",
      sun: "2:00pm to 8:00pm"
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
      title: "Splendour Vites Enterprises",
      description: "Premium beauty, health, and lifestyle solutions in Agbor, Delta State."
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
