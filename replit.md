# Splendour Vites Beauty Saloon

## Overview
A React-based website for Splendour Vites Beauty (Unisex) Saloon. This is a frontend-only single-page application built with React, TypeScript, and Vite.

## Tech Stack
- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 6.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM 6.x
- **Icons**: Lucide React

## Project Structure
```
├── components/         # React components
│   ├── ui/            # UI components (Button)
│   ├── About.tsx
│   ├── Booking.tsx
│   ├── Contact.tsx
│   ├── FloatingButtons.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── context/           # React context providers
│   └── ContentContext.tsx
├── pages/             # Page components
│   ├── Admin.tsx
│   └── Login.tsx
├── App.tsx            # Main app component
├── constants.ts       # App constants
├── index.html         # Entry HTML
├── index.tsx          # App entry point
├── types.ts           # TypeScript types
└── vite.config.ts     # Vite configuration
```

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to create production build in `dist/` folder

## Environment Variables
- `GEMINI_API_KEY` (optional): API key for Gemini integration

## Deployment
Configured for static deployment with built files served from `dist/` directory.
