import { Link } from 'wouter';
import { socialLinks } from '../data/projects';

export function About() {
  return (
    <main className="about-page">
      <div className="about-page__inner">
        <Link href="/" className="back-link">
          ← Back to Projects
        </Link>

        <section className="about-layout">
          <div>
            <p className="section-number">(003)</p>
            <h1>ABOUT.</h1>
          </div>

          <div className="about-copy">
            <p>
              Роман Баранчук — відеограф і монтажер, який працює під Baranchuk Production.
              У фокусі — автомобільні відео, reels, бренд-історії, backstage і чистий
              монтаж для соцмереж.
            </p>
            <p>
              Його стиль хочеться тримати простим: без зайвого шуму, з увагою до руху,
              світла, дороги, людей у кадрі й деталей, які роблять відео живим.
            </p>
            <p>
              Сайт зберігає мінімалістичну структуру референса, але додає власний напрям
              Роми: automotive-настрій, короткі social cuts і прямий контакт через його
              публічні профілі.
            </p>

            <div className="contact-list">
              <a href={socialLinks.productionInstagram} target="_blank" rel="noopener noreferrer">
                Instagram / Baranchuk Production
              </a>
              <a href={socialLinks.personalInstagram} target="_blank" rel="noopener noreferrer">
                Instagram / Roma Baranchuk
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                YouTube / Roman Baranchuk
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
