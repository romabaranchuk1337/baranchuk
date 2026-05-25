import type { Language } from '../i18n';

export interface ProjectCopy {
  title: string;
  description: string;
  client: string;
  role: string;
}

export interface Project {
  id: string;
  thumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'vimeo';
  year: string;
  images: string[];
  copy: Record<Language, ProjectCopy>;
}

export const socialLinks = {
  productionInstagram: 'https://www.instagram.com/baranchuk.production/',
  personalInstagram: 'https://www.instagram.com/roma.baranchuk/',
  youtube: 'https://www.youtube.com/channel/UCCxXpqAD2MnVBhMAueVENIA',
};

export const focusAreas: Record<Language, Array<{ title: string; text: string }>> = {
  uk: [
    {
      title: 'Автомобільні відео',
      text: 'Рух, дорога, звук мотора, зимове світло й деталі автомобіля без зайвої реклами.',
    },
    {
      title: 'Reels / короткі відео',
      text: 'Короткі вертикальні відео, backstage і швидкі монтажі для Instagram та інших соцмереж.',
    },
    {
      title: 'Бренд-історії',
      text: 'Відео для людей, малого бізнесу й команд, де важливі атмосфера та чесний кадр.',
    },
    {
      title: 'Монтаж / колір',
      text: 'Ритм, базова кольорокорекція і фінальні формати для різних платформ.',
    },
  ],
  en: [
    {
      title: 'Automotive videos',
      text: 'Movement, the road, engine sound, winter light, and car details without unnecessary advertising gloss.',
    },
    {
      title: 'Reels / short videos',
      text: 'Short vertical videos, backstage cuts, and fast edits for Instagram and other social platforms.',
    },
    {
      title: 'Brand stories',
      text: 'Videos for people, small businesses, and teams where atmosphere and an honest frame matter.',
    },
    {
      title: 'Editing / color',
      text: 'Rhythm, basic color correction, and final formats prepared for different platforms.',
    },
  ],
};

export const projects: Project[] = [
  {
    id: 'porsche-911-winter-edition',
    thumbnail: 'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    images: [
      'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/sddefault.jpg',
      'https://i1.ytimg.com/vi/Hu1ydwTteVw/hqdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/mqdefault.jpg',
    ],
    copy: {
      uk: {
        title: 'Porsche 911. Зимова версія',
        description:
          'Реальний automotive film з YouTube-каналу Roman Baranchuk: чистий рух, холодне світло, дорога й увага до деталей автомобіля.',
        client: 'Власний проєкт / automotive',
        role: 'Камера / монтаж / колір',
      },
      en: {
        title: 'Porsche 911. Winter edition',
        description:
          'A real automotive film from the Roman Baranchuk YouTube channel: clean movement, cold light, the road, and attention to the car’s details.',
        client: 'Personal project / automotive',
        role: 'Camera / editing / color',
      },
    },
  },
  {
    id: 'automotive-night-drive',
    thumbnail:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Нічний automotive film',
        description:
          'Муляж проєкту для майбутнього автомобільного відео: нічне місто, відблиски, фари й спокійний кінематографічний темп.',
        client: 'Automotive / муляж',
        role: 'Камера / монтаж',
      },
      en: {
        title: 'Night automotive film',
        description:
          'A concept project for a future automotive video: night city streets, reflections, headlights, and a calm cinematic tempo.',
        client: 'Automotive / concept',
        role: 'Camera / editing',
      },
    },
  },
  {
    id: 'reels-for-brand',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Reels для бренду',
        description:
          'Муляж проєкту для коротких social-відео: швидкий ритм, вертикальні формати й чисті деталі продукту.',
        client: 'Social / муляж',
        role: 'Зйомка / монтаж / формати для соцмереж',
      },
      en: {
        title: 'Reels for a brand',
        description:
          'A concept project for short social videos: fast rhythm, vertical formats, and clean product details.',
        client: 'Social / concept',
        role: 'Shooting / editing / social formats',
      },
    },
  },
  {
    id: 'local-business-story',
    thumbnail:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Історія локального бізнесу',
        description:
          'Муляж бренд-історії для малого бізнесу: люди, процес, простір і природна атмосфера.',
        client: 'Бізнес / муляж',
        role: 'Камера / монтаж / колір',
      },
      en: {
        title: 'Local business story',
        description:
          'A concept brand story for a small business: people, process, space, and a natural atmosphere.',
        client: 'Business / concept',
        role: 'Camera / editing / color',
      },
    },
  },
  {
    id: 'wedding-short-film',
    thumbnail:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Весільний short film',
        description:
          'Муляж емоційного event-відео: деталі, тихі моменти й м’яка історія дня.',
        client: 'Подія / муляж',
        role: 'Камера / монтаж',
      },
      en: {
        title: 'Wedding short film',
        description:
          'A concept for an emotional event video: details, quiet moments, and a soft story of the day.',
        client: 'Event / concept',
        role: 'Camera / editing',
      },
    },
  },
  {
    id: 'music-visual',
    thumbnail:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Музичний visual',
        description:
          'Муляж відео для артиста: перформанс, настрій, контрастне світло й монтаж у ритм.',
        client: 'Артист / муляж',
        role: 'Режисура / камера / монтаж',
      },
      en: {
        title: 'Music visual',
        description:
          'A concept video for an artist: performance, mood, contrast light, and rhythm-driven editing.',
        client: 'Artist / concept',
        role: 'Direction / camera / editing',
      },
    },
  },
  {
    id: 'product-detail-film',
    thumbnail:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Предметне відео',
        description:
          'Муляж продуктового відео: макро, контрольоване світло й преміальний мінімалістичний настрій.',
        client: 'Продукт / муляж',
        role: 'Світло / камера / монтаж',
      },
      en: {
        title: 'Product detail film',
        description:
          'A concept product video: macro shots, controlled light, and a premium minimalist mood.',
        client: 'Product / concept',
        role: 'Lighting / camera / editing',
      },
    },
  },
  {
    id: 'travel-recap',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Відео з подорожі',
        description:
          'Муляж travel-відео: дорога, широкі кадри, маленькі моменти й природне світло.',
        client: 'Подорож / муляж',
        role: 'Камера / монтаж',
      },
      en: {
        title: 'Travel recap',
        description:
          'A concept travel video: the road, wide frames, small moments, and natural light.',
        client: 'Travel / concept',
        role: 'Camera / editing',
      },
    },
  },
  {
    id: 'event-aftermovie',
    thumbnail:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2024',
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=88',
    ],
    copy: {
      uk: {
        title: 'Відео з події',
        description:
          'Муляж aftermovie для події: люди, рух, деталі й швидка доставка для соцмереж.',
        client: 'Подія / муляж',
        role: 'Камера / монтаж / короткі версії для соцмереж',
      },
      en: {
        title: 'Event aftermovie',
        description:
          'A concept aftermovie for an event: people, movement, details, and fast delivery for social platforms.',
        client: 'Event / concept',
        role: 'Camera / editing / short social versions',
      },
    },
  },
];
