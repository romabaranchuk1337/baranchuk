import { Link } from 'wouter';
import { useI18n } from '../i18n';
import { projects } from '../data/projects';

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
    </main>
  );
}
