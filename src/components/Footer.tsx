import { useI18n } from '../i18n';
import { socialLinks } from '../data/projects';

const year = new Date().getFullYear();

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="site-footer__socials" aria-label="Social links">
        <a href={socialLinks.productionInstagram} target="_blank" rel="noopener noreferrer">
          Baranchuk Production
        </a>
        <a href={socialLinks.personalInstagram} target="_blank" rel="noopener noreferrer">
          {t.footer.roman}
        </a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
      <p>{t.footer.copyright(year)}</p>
    </footer>
  );
}
