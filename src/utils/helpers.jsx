import React from 'react';

// Brand Logos in premium monochrome SVG formats (to avoid missing assets and keep site fully functional)
export const BrandLogos = {
  walmart: () => (
    <svg className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="10" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" letterSpacing="1px">WALMART</text>
    </svg>
  ),
  netflix: () => (
    <svg className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="10" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="#E50914" letterSpacing="1px">NETFLIX</text>
    </svg>
  ),
  invision: () => (
    <svg className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="10" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" letterSpacing="1px">INVISION</text>
    </svg>
  ),
  yahoo: () => (
    <svg className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="10" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" fill="#6001d2" letterSpacing="1px">YAHOO!</text>
    </svg>
  ),
  amazon: () => (
    <svg className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="10" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="18" letterSpacing="1px">AMAZON</text>
    </svg>
  ),
  monday: () => (
    <svg className="h-8 dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="5" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="16" letterSpacing="1.5px">monday.com</text>
    </svg>
  ),
  logitech: () => (
    <svg className="h-8 dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="5" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="16" letterSpacing="1.5px">logitech</text>
    </svg>
  ),
  slack: () => (
    <svg className="h-8 dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="5" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="16" letterSpacing="1.5px"># slack</text>
    </svg>
  ),
  dropbox: () => (
    <svg className="h-8 dark:invert" viewBox="0 0 120 30" fill="currentColor">
      <text x="5" y="22" fontFamily="sans-serif" fontWeight="bold" fontSize="16" letterSpacing="1.5px">Dropbox</text>
    </svg>
  )
};

// Services List
export const ServicesList = [
  {
    id: 1,
    title: 'Data and analytics',
    category: 'analytics',
    description: 'We help you process and visualize big data to make smarter business operations.',
    image: '/images/demo-it-business-03.jpg',
    badge: 'analytics',
    path: '/services/details'
  },
  {
    id: 2,
    title: 'Finance consulting',
    category: 'finance',
    description: 'We structure tailored investment roadmaps and corporate funding options.',
    image: '/images/demo-it-business-04.jpg',
    badge: 'finance',
    path: '/services/details'
  },
  {
    id: 3,
    title: 'Tech innovation',
    category: 'technology',
    description: 'We integrate bleeding-edge technology to scale up business infrastructure.',
    image: '/images/demo-it-business-05.jpg',
    badge: 'analytics',
    path: '/services/details'
  },
  {
    id: 4,
    title: 'Digital commerce',
    category: 'digital',
    description: 'We design high-converting e-commerce web applications and digital funnels.',
    image: '/images/demo-it-business-06.jpg',
    badge: 'digital',
    path: '/services/details'
  },
  {
    id: 5,
    title: 'Cloud computing',
    category: 'cloud',
    description: 'We migrate massive architectures safely to Amazon Web Services and GCP.',
    image: '/images/demo-it-business-services-06.jpg',
    badge: 'digital',
    path: '/services/details'
  }
];

// Diverse Industries
export const IndustriesList = [
  { name: 'Publishing', icon: 'line-icon-Microphone-4' },
  { name: 'Finance', icon: 'line-icon-Basket-Coins' },
  { name: 'Sciences', icon: 'line-icon-Bee' },
  { name: 'Consultant', icon: 'line-icon-Management' },
  { name: 'Food', icon: 'line-icon-French-Fries' },
  { name: 'Travel', icon: 'line-icon-Road-3' },
  { name: 'Dairy', icon: 'line-icon-Cow' },
  { name: 'Jewellery', icon: 'line-icon-Diamond' },
  { name: 'Energy', icon: 'line-icon-Drop' },
  { name: 'Farming', icon: 'line-icon-Environmental-3' },
  { name: 'Industries', icon: 'line-icon-Gear' },
  { name: 'Events', icon: 'line-icon-Environmental-3' }
];

// Portfolio Projects (Case Studies)
export const PortfolioProjects = [
  {
    id: 1,
    title: 'Tailoring',
    category: 'branding',
    subCategory: 'selected digital',
    image: '/images/demo-it-business-portfolio-01.jpg',
    path: '/portfolio/details'
  },
  {
    id: 2,
    title: 'Spanio',
    category: 'design',
    subCategory: 'web branding',
    image: '/images/demo-it-business-portfolio-02.jpg',
    path: '/portfolio/details'
  },
  {
    id: 3,
    title: 'Herbal',
    category: 'branding',
    subCategory: 'web branding',
    image: '/images/demo-it-business-portfolio-03.jpg',
    path: '/portfolio/details'
  },
  {
    id: 4,
    title: 'Cropo',
    category: 'brochure',
    subCategory: 'selected digital',
    image: '/images/demo-it-business-portfolio-04.jpg',
    path: '/portfolio/details'
  },
  {
    id: 5,
    title: 'Violator',
    category: 'design',
    subCategory: 'selected branding',
    image: '/images/demo-it-business-portfolio-05.jpg',
    path: '/portfolio/details'
  },
  {
    id: 6,
    title: 'Pixflow',
    category: 'digital',
    subCategory: 'digital web',
    image: '/images/demo-it-business-portfolio-06.jpg',
    path: '/portfolio/details'
  }
];

// Testimonials Data
export const TestimonialsList = [
  {
    id: 1,
    name: 'Herman miller',
    company: 'Monday',
    logo: BrandLogos.monday,
    quote: 'Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.',
    avatar: '/images/demo-it-business-testimonials-01.png'
  },
  {
    id: 2,
    name: 'Leonel mooney',
    company: 'Logitech',
    logo: BrandLogos.logitech,
    quote: 'Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.',
    avatar: '/images/demo-it-business-testimonials-02.png'
  },
  {
    id: 3,
    name: 'Matthew taylor',
    company: 'Invision',
    logo: BrandLogos.invision,
    quote: 'Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.',
    avatar: '/images/demo-it-business-testimonials-03.png'
  }
];

// Blog Posts Data
export const BlogPostsList = [
  {
    id: 1,
    title: 'Build your business standard with our creative ideas',
    category: 'business',
    date: '12 January 2024',
    author: 'Admin',
    image: '/images/demo-it-business-03.jpg',
    description: 'We believe in a tailored business mindset and providing modern custom corporate strategies.',
    path: '/blog/details'
  },
  {
    id: 2,
    title: 'Definitive guide to make your startup highly profitable',
    category: 'finance',
    date: '18 January 2024',
    author: 'Consulting Team',
    image: '/images/demo-it-business-04.jpg',
    description: 'Understand operational optimizations and financial workflows that drive immediate cost reductions.',
    path: '/blog/details'
  },
  {
    id: 3,
    title: 'How technology innovations can streamline communication',
    category: 'technology',
    date: '25 January 2024',
    author: 'Innovator',
    image: '/images/demo-it-business-05.jpg',
    description: 'From cloud integrations to automated pipelines, discover how modern stacks boost developer speeds.',
    path: '/blog/details'
  }
];
