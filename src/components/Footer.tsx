import { socialLinks } from '../data/projects';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.25" cy="6.75" r="1" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M21.15 7.18a3.12 3.12 0 0 0-2.2-2.2C17.02 4.45 12 4.45 12 4.45s-5.02 0-6.95.53a3.12 3.12 0 0 0-2.2 2.2A32.4 32.4 0 0 0 2.33 12a32.4 32.4 0 0 0 .52 4.82 3.12 3.12 0 0 0 2.2 2.2c1.93.53 6.95.53 6.95.53s5.02 0 6.95-.53a3.12 3.12 0 0 0 2.2-2.2 32.4 32.4 0 0 0 .52-4.82 32.4 32.4 0 0 0-.52-4.82Z" />
      <path d="m10 15.28 5.23-3.28L10 8.72v6.56Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__socials" aria-label="Social links">
        <a
          className="social-icon"
          href={socialLinks.personalInstagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @roma.baranchuk"
        >
          <InstagramIcon />
        </a>
        <a
          className="social-icon"
          href={socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <YouTubeIcon />
        </a>
      </div>
    </footer>
  );
}
