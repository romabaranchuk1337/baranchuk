const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Baranchuk Productions</p>
          <p className="footer-copy">Відеоісторії для брендів, артистів і команд.</p>
        </div>

        <div className="footer-links" aria-label="Контакти">
          <a href="mailto:contact@example.com">Email</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Baranchuk Productions. Всі права захищені.</p>
      </div>
    </footer>
  );
}
