export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'vimeo';
  year: string;
  role: string;
  services: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'brand-film',
    eyebrow: 'Commercial',
    title: 'Brand Film',
    description:
      'Іміджевий ролик для бренду з акцентом на атмосферу, деталь і живу присутність людей у кадрі.',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2026',
    role: 'Creative direction, camera, edit',
    services: ['Pre-production', 'Shooting', 'Editing', 'Color'],
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  {
    id: 'music-video',
    eyebrow: 'Music video',
    title: 'After Dark Session',
    description:
      'Музичне відео з камерною постановкою, контрастним світлом і монтажем під ритм треку.',
    thumbnail:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2025',
    role: 'Director, DP, editor',
    services: ['Concept', 'Lighting', 'Shooting', 'Post-production'],
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85',
    ],
  },
  {
    id: 'documentary-short',
    eyebrow: 'Documentary',
    title: 'Small Cities, Big Stories',
    description:
      'Коротка документальна історія про людей, простори й роботу, яку помічаєш тільки зблизька.',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2025',
    role: 'Camera, field sound, edit',
    services: ['Research', 'Interview', 'Shooting', 'Sound design'],
    images: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85',
    ],
  },
];
