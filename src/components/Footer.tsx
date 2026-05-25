import { socialLinks } from '../data/projects';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__socials" aria-label="Social links">
        <a href={socialLinks.productionInstagram} target="_blank" rel="noopener noreferrer">
          Baranchuk Production
        </a>
        <a href={socialLinks.personalInstagram} target="_blank" rel="noopener noreferrer">
          Роман Баранчук
        </a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
      <p>© {year} Roman Baranchuk. Всі права захищені.</p>
    </footer>
  );
}
