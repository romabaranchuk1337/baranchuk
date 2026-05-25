import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'uk' | 'en';

type TranslationDictionary = {
  nav: {
    projects: string;
    about: string;
    homeAria: string;
    navigationAria: string;
    languageAria: string;
  };
  home: {
    projectsTitle: string;
    projectsAria: string;
    focusTitle: string;
    socialAria: string;
    youtubeLabel: string;
  };
  project: {
    notFound: string;
    back: string;
    client: string;
    role: string;
    frames: string;
    frameAlt: (title: string, index: number) => string;
  };
  about: {
    title: string;
    paragraphs: string[];
    instagramProduction: string;
    instagramPersonal: string;
    youtube: string;
  };
  footer: {
    roman: string;
    copyright: (year: number) => string;
  };
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
};

const languageStorageKey = 'baranchuk-language';
const defaultLanguage: Language = 'uk';

const translations: Record<Language, TranslationDictionary> = {
  uk: {
    nav: {
      projects: 'ПРОЄКТИ',
      about: 'ПРО МЕНЕ',
      homeAria: 'Головна Baranchuk Production',
      navigationAria: 'Головна навігація',
      languageAria: 'Перемикач мови',
    },
    home: {
      projectsTitle: 'ПРОЄКТИ',
      projectsAria: 'Вибрані проєкти',
      focusTitle: 'НАПРЯМИ.',
      socialAria: 'Соціальні профілі',
      youtubeLabel: 'YouTube / Роман Баранчук',
    },
    project: {
      notFound: 'Проєкт не знайдено',
      back: '← Назад до проєктів',
      client: 'Клієнт',
      role: 'Роль',
      frames: 'Кадри',
      frameAlt: (title, index) => `${title}: кадр ${index}`,
    },
    about: {
      title: 'ПРО МЕНЕ.',
      paragraphs: [
        'Роман Баранчук — відеограф і монтажер, який працює під Baranchuk Production. У фокусі — автомобільні відео, reels, бренд-історії, backstage і чистий монтаж для соцмереж.',
        'Його стиль хочеться тримати простим: без зайвого шуму, з увагою до руху, світла, дороги, людей у кадрі й деталей, які роблять відео живим.',
        'Сайт зберігає мінімалістичну структуру референса, але додає власний напрям Роми: automotive-настрій, короткі social cuts і прямий контакт через його публічні профілі.',
      ],
      instagramProduction: 'Instagram / Baranchuk Production',
      instagramPersonal: 'Instagram / Roma Baranchuk',
      youtube: 'YouTube / Роман Баранчук',
    },
    footer: {
      roman: 'Роман Баранчук',
      copyright: (year) => `© ${year} Roman Baranchuk. Усі права захищені.`,
    },
  },
  en: {
    nav: {
      projects: 'PROJECTS',
      about: 'ABOUT',
      homeAria: 'Baranchuk Production home',
      navigationAria: 'Primary navigation',
      languageAria: 'Language switcher',
    },
    home: {
      projectsTitle: 'PROJECTS',
      projectsAria: 'Selected projects',
      focusTitle: 'FOCUS.',
      socialAria: 'Social profiles',
      youtubeLabel: 'YouTube / Roman Baranchuk',
    },
    project: {
      notFound: 'Project not found',
      back: '← Back to projects',
      client: 'Client',
      role: 'Role',
      frames: 'Frames',
      frameAlt: (title, index) => `${title}: frame ${index}`,
    },
    about: {
      title: 'ABOUT.',
      paragraphs: [
        'Roman Baranchuk is a videographer and editor working under Baranchuk Production. His focus is automotive videos, reels, brand stories, backstage content, and clean edits for social platforms.',
        'His style stays intentionally simple: no unnecessary noise, just close attention to movement, light, the road, people in frame, and the details that make a video feel alive.',
        'The site keeps a minimal portfolio structure while adding Roma’s own direction: an automotive mood, short social cuts, and direct contact through his public profiles.',
      ],
      instagramProduction: 'Instagram / Baranchuk Production',
      instagramPersonal: 'Instagram / Roma Baranchuk',
      youtube: 'YouTube / Roman Baranchuk',
    },
    footer: {
      roman: 'Roman Baranchuk',
      copyright: (year) => `© ${year} Roman Baranchuk. All rights reserved.`,
    },
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  return storedLanguage === 'en' || storedLanguage === 'uk' ? storedLanguage : defaultLanguage;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(languageStorageKey, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }

  return context;
}
