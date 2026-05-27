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
  personalInstagram: 'https://www.instagram.com/roma.baranchuk/',
  youtube: 'https://www.youtube.com/channel/UCCxXpqAD2MnVBhMAueVENIA',
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
          "A real automotive film from the Roman Baranchuk YouTube channel: clean movement, cold light, the road, and attention to the car's details.",
        client: 'Personal project / automotive',
        role: 'Camera / editing / color',
      },
    },
  },
];
