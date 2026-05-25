import { Link } from 'wouter';
import { projects } from '../data/projects';

export function Home() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-intro" aria-labelledby="projects-title">
        <p className="section-number">(001)</p>
        <h1 id="projects-title">* PROJECTS.</h1>
      </section>

      <section className="portfolio-grid" aria-label="Selected projects">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`} className="portfolio-item">
            <span className="portfolio-item__media">
              <img src={project.thumbnail} alt={project.title} />
            </span>
            <span className="portfolio-item__title">{project.title}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
