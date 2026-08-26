// Central site configuration. Replace placeholder values with real data.
export const site = {
  name: 'Abasiofon Sendan',
  role: 'Backend Engineer',
  status: 'Open to work',
  email: 'abasiofon135@gmail.com', // TODO: replace with real email
  resumeUrl: '/resume.pdf', // TODO: add resume file to public/ or replace path
  calUrl: 'https://cal.com/example/30min', // TODO: replace with real booking link
  url: 'https://your-domain.com', // TODO: set the real production domain (idighekere.dev was only a design reference)
  description: 'Backend engineer. I design APIs and ship systems that hold up under load.',
  metrics: [
    { value: '5+', label: 'years building backend systems' },
    { value: '10+', label: 'projects shipped' },
    { value: '2', label: 'products at scale' },
  ],
  stack: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'SQLite', 'Supabase'],
  socials: [
    { label: 'GitHub', url: 'https://github.com/abasiofon-sendan' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abasiofon-sendan' },
    { label: 'X', url: 'https://x.com/abasiofonsendan' },
    { label: 'Telegram', url: 'https://t.me/abasiofonsendan' },
  ],
  education: [
    {
      degree: 'B.Eng. Computer Engineering', // TODO: confirm exact program title
      school: 'University of Uyo', // TODO: replace with real school
      period: '2023 — Present',
      courses: [
        'Web Technology',
        'Operating Systems',
        'Artificial Intelligence',
        'Data Analysis',
        'Computer organization & Architecture',
        
      ],
    },
  ],
  experience: [
    {
      role: 'Backend Engineer',
      company: 'Kauchy',
      period: 'January 2026 — Present', // TODO: confirm dates
      summary: 'Backend for a social commerce platform for student vendors.',
      stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Django Channels', 'Paystack'],
      highlights: [
        'Kept vendor balances accurate through duplicate and delayed Paystack webhooks by making escrow crediting idempotent and transaction-safe — no double-credits',
        'Stopped overselling and price-tampering on "Buy Now" checkouts by freezing order state (locked prices, quantities, vendors) across the external payment redirect',
        'Eliminated race conditions in multi-vendor checkout with a unified pipeline that settled wallet and card payments atomically',
        'Isolated payment and wallet logic from social features across modular Django apps, so financial code could change without touching the feed or chat',
      ],
    },
    {
      role: 'Backend Developer (Contract)',
      company: 'Agrovest',
      period: 'January 2024 — July 2025', // TODO: confirm contract dates
      summary: 'Django backend for an agriculture investment platform.',
      stack: ['Python', 'Django', 'REST APIs', 'NoSQL'],
      highlights: [
        'Optimized transaction processing, improving speed by 20%',
        'Kept the platform easy to extend as it grew by structuring the Python/Django REST API into modular, decoupled components',
        'Sped up retrieval of investment-cycle and returns data by optimizing the underlying NoSQL databases',
        'Cut manual admin work 70% by digitizing investor and farm data',
      ],
    },
  ],
  certifications: [
    {
      name: 'Enyata × Interswitch Hackathon',
      issuer: 'Enyata × Interswitch', // TODO: confirm issuing organiser
      year: '2025', // TODO: confirm year
      url: '#', // TODO: replace with credential link
      image: '/projects/certifications/enyata-interswitch-hackathon.jpg',
      imageAlt: 'Enyata × Interswitch Hackathon certificate',
      description: 'Certificate of participation in the Enyata × Interswitch hackathon.',
      tags: ['Hackathon'],
    },
    {
      name: 'Nomba Certified', // TODO: confirm exact certificate title
      issuer: 'Nomba',
      year: '2026',
      url: '#', // TODO: replace with credential link (ref: X5PYS1)
      image: '/projects/certifications/nomba-certified.png',
      imageAlt: 'Nomba certification',
      description: 'Completed the Nomba certification program.',
      tags: ['Fintech'],
    },
    {
      name: 'Queen Arit Circle Hackathon',
      issuer: 'Queen Arit Circle', // TODO: confirm issuing organiser
      year: '2025', // TODO: confirm year
      url: '#', // TODO: replace with credential link
      image: '/projects/certifications/queen-arit-circle-hackathon.jpg',
      imageAlt: 'Queen Arit Circle Hackathon certificate',
      description: 'Certificate of participation in the Queen Arit Circle hackathon.',
      tags: ['Hackathon'],
    },
  ],
  bannerHeight: 'Open to new backend projects',
}
