const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__socials" aria-label="Social links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          Instagram
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          YouTube
        </a>
        <a href="mailto:contact@example.com">Contact Roman</a>
      </div>
      <p>Copyright © {year} Roman Baranchuk. All Rights Reserved.</p>
    </footer>
  );
}
