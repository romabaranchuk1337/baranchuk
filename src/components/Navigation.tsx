import { Link, useLocation } from 'wouter';
import { useI18n, type Language } from '../i18n';

const languageOptions: Array<{ language: Language; label: string }> = [
  { language: 'uk', label: 'UA' },
  { language: 'en', label: 'EN' },
];

export function Navigation() {
  const [location] = useLocation();
  const { language, setLanguage, t } = useI18n();

  const navItems = [
    { href: '/', label: t.nav.projects, match: '/' },
    { href: '/about', label: t.nav.about, match: '/about' },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-title" aria-label={t.nav.homeAria}>
          BARANCHUK ROMAN
        </Link>

        <div className="site-actions">
          <nav className="site-nav" aria-label={t.nav.navigationAria}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={location === item.match ? 'site-nav__link active' : 'site-nav__link'}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="language-switcher" aria-label={t.nav.languageAria}>
            {languageOptions.map((option) => (
              <button
                key={option.language}
                type="button"
                className={
                  language === option.language
                    ? 'language-switcher__button active'
                    : 'language-switcher__button'
                }
                aria-pressed={language === option.language}
                disabled={language === option.language}
                onClick={() => setLanguage(option.language)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
