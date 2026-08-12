// Central site configuration. Replace placeholder values with real data.
export const site = {
  name: 'Abasiofon Sendan',
  role: 'Backend Engineer',
  status: 'Open to work',
  email: 'hello@example.com', // TODO: replace with real email
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
      period: '2021 — Present',
      courses: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Computer Networks',
        'Database Systems',
        'Computer Architecture',
        'Object-Oriented Programming',
        'Digital Logic Design',
        'Microprocessors',
      ],
    },
  ],
  experience: [
    {
      role: 'Backend Engineer',
      company: 'Acme Corp', // TODO: replace with real employer
      period: '2023 — Present',
      summary: 'Owner of the webhook delivery service and the API layer.',
      highlights: [
        'Shipped eventbridge, a webhook delivery API in Go',
        'Cut failed webhook deliveries from 6% to under 0.5%',
        'Introduced an outbox pattern across services',
      ],
    },
    {
      role: 'Backend Engineer',
      company: 'Startly', // TODO: replace with real employer
      period: '2021 — 2023',
      summary: 'Built APIs and background jobs for a SaaS product.',
      highlights: [
        'Designed a Redis-backed rate limiter that survived a 40x traffic spike',
        'Migrated in-memory state to Redis',
        'Kept the API integration suite green across every release',
      ],
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      year: '2024',
      url: '#', // TODO: replace with credential link
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      year: '2023',
      url: '#', // TODO: replace with credential link
    },
  ],
  bannerHeight: 'Open to new backend projects',
}
