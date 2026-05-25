import { Link } from 'wouter';
import { useI18n } from '../i18n';
import { socialLinks } from '../data/projects';

export function About() {
  const { t } = useI18n();

  return (
    <main className="about-page">
      <div className="about-page__inner">
        <Link href="/" className="back-link">
          {t.project.back}
        </Link>

        <section className="about-layout">
          <div>
            <p className="section-number">(003)</p>
            <h1>{t.about.title}</h1>
          </div>

          <div className="about-copy">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="contact-list">
              <a href={socialLinks.productionInstagram} target="_blank" rel="noopener noreferrer">
                {t.about.instagramProduction}
              </a>
              <a href={socialLinks.personalInstagram} target="_blank" rel="noopener noreferrer">
                {t.about.instagramPersonal}
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                {t.about.youtube}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
