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

export const socialLinks = {
  productionInstagram: 'https://www.instagram.com/baranchuk.production/',
  personalInstagram: 'https://www.instagram.com/roma.baranchuk/',
  youtube: 'https://www.youtube.com/channel/UCCxXpqAD2MnVBhMAueVENIA',
};

export const focusAreas = [
  {
    title: 'Automotive films',
    text: 'Рух, дорога, звук мотора, зимове світло й деталі автомобіля без зайвої реклами.',
  },
  {
    title: 'Social cuts',
    text: 'Короткі вертикальні відео, reels, backstage і швидкі монтажі для Instagram.',
  },
  {
    title: 'Brand stories',
    text: 'Відео для людей, малого бізнесу й команд, де важливі атмосфера та чесний кадр.',
  },
  {
    title: 'Edit / color',
    text: 'Монтаж, ритм, базова кольорокорекція і фінальні формати для різних платформ.',
  },
];

export const projects: Project[] = [
  {
    id: 'porsche-911-winter-edition',
    title: 'Porsche 911. Winter Edition',
    description:
      'Зимовий automotive film з YouTube-каналу Roman Baranchuk: чистий рух, холодне світло, дорога й увага до деталей автомобіля.',
    thumbnail: 'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    client: 'Personal / Automotive',
    role: 'Camera / Edit / Color',
    images: [
      'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/sddefault.jpg',
      'https://i1.ytimg.com/vi/Hu1ydwTteVw/hqdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/mqdefault.jpg',
    ],
  },
  {
    id: 'automotive-night-drive',
    title: 'Automotive Night Drive',
    description:
      'Placeholder project for a car film: night streets, reflections, headlights and a controlled cinematic pace.',
    thumbnail:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    client: 'Automotive / Placeholder',
    role: 'Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'reels-for-brand',
    title: 'Reels for Brand',
    description:
      'Placeholder project for short social videos: fast rhythm, vertical-first thinking and clean product detail.',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    client: 'Social / Placeholder',
    role: 'Shoot / Edit / Social formats',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'local-business-story',
    title: 'Local Business Story',
    description:
      'Placeholder project for a small business profile: people, process, location and natural atmosphere.',
    thumbnail:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Business / Placeholder',
    role: 'Camera / Edit / Color',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'wedding-short-film',
    title: 'Wedding Short Film',
    description:
      'Placeholder project for an emotional event film: close details, quiet moments and a soft story arc.',
    thumbnail:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Event / Placeholder',
    role: 'Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'music-visual',
    title: 'Music Visual',
    description:
      'Placeholder project for an artist video: performance, mood, low-key light and edit on rhythm.',
    thumbnail:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Artist / Placeholder',
    role: 'Director / DP / Edit',
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'product-detail-film',
    title: 'Product Detail Film',
    description:
      'Placeholder project for product content: macro shots, controlled light and a premium minimal feel.',
    thumbnail:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Product / Placeholder',
    role: 'Lighting / Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'travel-recap',
    title: 'Travel Recap',
    description:
      'Placeholder project for a travel recap: road energy, wide frames, small moments and natural light.',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Travel / Placeholder',
    role: 'Camera / Edit',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'event-aftermovie',
    title: 'Event Aftermovie',
    description:
      'Placeholder project for an event recap: crowd, movement, details and fast social delivery.',
    thumbnail:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2024',
    client: 'Event / Placeholder',
    role: 'Camera / Edit / Social cutdowns',
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=88',
    ],
  },
];
