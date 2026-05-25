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
];

export const projects: Project[] = [
  {
    id: 'porsche-911-winter-edition',
    title: 'Porsche 911. Зимова версія',
    description:
      'Реальний automotive film з YouTube-каналу Roman Baranchuk: чистий рух, холодне світло, дорога й увага до деталей автомобіля.',
    thumbnail: 'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    client: 'Власний проєкт / automotive',
    role: 'Камера / монтаж / колір',
    images: [
      'https://i.ytimg.com/vi/Hu1ydwTteVw/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/sddefault.jpg',
      'https://i1.ytimg.com/vi/Hu1ydwTteVw/hqdefault.jpg',
      'https://i.ytimg.com/vi/Hu1ydwTteVw/mqdefault.jpg',
    ],
  },
  {
    id: 'automotive-night-drive',
    title: 'Нічний automotive film',
    description:
      'Муляж проєкту для майбутнього автомобільного відео: нічне місто, відблиски, фари й спокійний кінематографічний темп.',
    thumbnail:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    client: 'Automotive / муляж',
    role: 'Камера / монтаж',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'reels-for-brand',
    title: 'Reels для бренду',
    description:
      'Муляж проєкту для коротких social-відео: швидкий ритм, вертикальні формати й чисті деталі продукту.',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2026',
    client: 'Social / муляж',
    role: 'Зйомка / монтаж / формати для соцмереж',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'local-business-story',
    title: 'Історія локального бізнесу',
    description:
      'Муляж бренд-історії для малого бізнесу: люди, процес, простір і природна атмосфера.',
    thumbnail:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Бізнес / муляж',
    role: 'Камера / монтаж / колір',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'wedding-short-film',
    title: 'Весільний short film',
    description:
      'Муляж емоційного event-відео: деталі, тихі моменти й м’яка історія дня.',
    thumbnail:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Подія / муляж',
    role: 'Камера / монтаж',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'music-visual',
    title: 'Музичний visual',
    description:
      'Муляж відео для артиста: перформанс, настрій, контрастне світло й монтаж у ритм.',
    thumbnail:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Артист / муляж',
    role: 'Режисура / камера / монтаж',
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'product-detail-film',
    title: 'Предметне відео',
    description:
      'Муляж продуктового відео: макро, контрольоване світло й преміальний мінімалістичний настрій.',
    thumbnail:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Продукт / муляж',
    role: 'Світло / камера / монтаж',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'travel-recap',
    title: 'Відео з подорожі',
    description:
      'Муляж travel-відео: дорога, широкі кадри, маленькі моменти й природне світло.',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2025',
    client: 'Подорож / муляж',
    role: 'Камера / монтаж',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=88',
    ],
  },
  {
    id: 'event-aftermovie',
    title: 'Відео з події',
    description:
      'Муляж aftermovie для події: люди, рух, деталі й швидка доставка для соцмереж.',
    thumbnail:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=88',
    videoUrl: 'https://www.youtube.com/embed/Hu1ydwTteVw',
    videoType: 'youtube',
    year: '2024',
    client: 'Подія / муляж',
    role: 'Камера / монтаж / короткі версії для соцмереж',
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=88',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=88',
    ],
  },
];
