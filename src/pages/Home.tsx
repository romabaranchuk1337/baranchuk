import { Link } from 'wouter';
import { useI18n } from '../i18n';
import { focusAreas, projects, socialLinks } from '../data/projects';

export function Home() {
  const { language, t } = useI18n();

  return (
    <main className="portfolio-page">
      <section className="portfolio-intro" aria-labelledby="projects-title">
        <p className="section-number">(001)</p>
        <h1 id="projects-title" className="stacked-title">
          <span>*</span>
          <span>{t.home.projectsTitle}</span>
          <span>.</span>
        </h1>
      </section>

      <section id="portfolio" className="portfolio-grid" aria-label={t.home.projectsAria}>
        {projects.map((project) => {
          const copy = project.copy[language];

          return (
            <Link key={project.id} href={`/project/${project.id}`} className="portfolio-item">
              <span className="portfolio-item__media">
                <img src={project.thumbnail} alt={copy.title} />
              </span>
              <span className="portfolio-item__title">{copy.title}</span>
            </Link>
          );
        })}
      </section>

      <section className="focus-section" aria-labelledby="focus-title">
        <div>
          <p className="section-number">(002)</p>
          <h2 id="focus-title">{t.home.focusTitle}</h2>
        </div>
        <div className="focus-grid">
          {focusAreas[language].map((item) => (
            <article key={item.title} className="focus-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="social-strip" aria-label={t.home.socialAria}>
        <a href={socialLinks.productionInstagram} target="_blank" rel="noopener noreferrer">
          @baranchuk.production
        </a>
        <a href={socialLinks.personalInstagram} target="_blank" rel="noopener noreferrer">
          @roma.baranchuk
        </a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          {t.home.youtubeLabel}
        </a>
      </section>
    </main>
  );
}
