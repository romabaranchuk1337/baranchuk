export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'vimeo';
  year: string;
  client: string;
  role: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'fashion-film',
    title: 'Fashion Film',
    description:
      'A clean visual story built around movement, texture and a restrained editorial mood.',
    thumbnail:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2026',
    client: 'Editorial',
    role: 'Director / Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'porsche-inspired',
    title: 'Automotive Campaign',
    description:
      'A sharp commercial piece focused on pace, reflection, detail and road energy.',
    thumbnail:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2026',
    client: 'Automotive',
    role: 'Camera / Edit / Color',
    images: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'music-session',
    title: 'Live Session',
    description:
      'An intimate music video with low-key lighting, close detail and rhythm-led editing.',
    thumbnail:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2025',
    client: 'Artist',
    role: 'Director / DP / Edit',
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'studio-product',
    title: 'Studio Product',
    description:
      'A minimal product spot with clean compositions, macro details and controlled light.',
    thumbnail:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2025',
    client: 'Product',
    role: 'Camera / Lighting / Edit',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'travel-story',
    title: 'Travel Story',
    description:
      'A travel piece shaped around atmosphere, place, road movement and natural light.',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2025',
    client: 'Travel',
    role: 'Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'documentary-portrait',
    title: 'Documentary Portrait',
    description:
      'A short documentary portrait built from observation, interviews and honest texture.',
    thumbnail:
      'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2025',
    client: 'Documentary',
    role: 'Camera / Field Sound / Edit',
    images: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'restaurant-film',
    title: 'Restaurant Film',
    description:
      'A warm commercial film focused on craft, detail, service and evening atmosphere.',
    thumbnail:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2024',
    client: 'Hospitality',
    role: 'Director / Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'sports-profile',
    title: 'Athlete Profile',
    description:
      'A compact brand film mixing training, portraiture and a grounded documentary tone.',
    thumbnail:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2024',
    client: 'Sport',
    role: 'Camera / Edit / Sound',
    images: [
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'event-recap',
    title: 'Event Recap',
    description:
      'A fast recap edit built for social launch, with clean rhythm and wide coverage.',
    thumbnail:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2024',
    client: 'Event',
    role: 'Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'architecture-film',
    title: 'Architecture Film',
    description:
      'A quiet architectural visual study shaped by lines, texture, negative space and light.',
    thumbnail:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2024',
    client: 'Architecture',
    role: 'Camera / Edit / Color',
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'beauty-campaign',
    title: 'Beauty Campaign',
    description:
      'A soft beauty campaign with close framing, polished skin tones and precise pacing.',
    thumbnail:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2024',
    client: 'Beauty',
    role: 'Director / Lighting / Edit',
    images: [
      'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'urban-night',
    title: 'Urban Night',
    description:
      'A night sequence with city reflections, handheld movement and a darker cinematic tone.',
    thumbnail:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    year: '2023',
    client: 'Personal',
    role: 'Camera / Edit / Color',
    images: [
      'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=88',
    ],
  },
];
