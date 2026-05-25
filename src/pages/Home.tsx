import { Link } from 'wouter';
import { focusAreas, projects, socialLinks } from '../data/projects';

export function Home() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-intro" aria-labelledby="projects-title">
        <p className="section-number">(001)</p>
        <h1 id="projects-title">* ПРОЄКТИ.</h1>
      </section>

      <section className="portfolio-grid" aria-label="Вибрані проєкти">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`} className="portfolio-item">
            <span className="portfolio-item__media">
              <img src={project.thumbnail} alt={project.title} />
            </span>
            <span className="portfolio-item__title">{project.title}</span>
          </Link>
        ))}
      </section>

      <section className="focus-section" aria-labelledby="focus-title">
        <div>
          <p className="section-number">(002)</p>
          <h2 id="focus-title">НАПРЯМИ.</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((item) => (
            <article key={item.title} className="focus-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="social-strip" aria-label="Соціальні профілі">
        <a href={socialLinks.productionInstagram} target="_blank" rel="noopener noreferrer">
          @baranchuk.production
        </a>
        <a href={socialLinks.personalInstagram} target="_blank" rel="noopener noreferrer">
          @roma.baranchuk
        </a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          YouTube / Roman Baranchuk
        </a>
      </section>
    </main>
  );
}
