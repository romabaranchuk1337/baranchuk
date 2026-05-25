import { Link } from 'wouter';
import { projects } from '../data/projects';

const capabilities = ['Commercials', 'Music videos', 'Documentary', 'Editing', 'Color', 'Sound'];

export function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85"
            alt=""
          />
        </div>

        <div className="hero-content">
          <p className="section-kicker">(001) Video production</p>
          <h1>Baranchuk Productions</h1>
          <p className="hero-copy">
            Знімаємо комерційні ролики, музичні відео й документальні історії з чистою
            режисурою, уважною камерою та монтажем, який тримає ритм.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Дивитись роботи
            </a>
            <Link href="/about" className="button-secondary">
              Контакти
            </Link>
          </div>
        </div>
      </section>

      <section className="capabilities-band" aria-label="Напрями роботи">
        <div className="marquee-row">
          {capabilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <p className="section-kicker">(002) Selected work</p>
          <h2>Проєкти</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`} className="project-card">
              <div className="project-image">
                <img src={project.thumbnail} alt={project.title} />
                <span className="project-eyebrow">{project.eyebrow}</span>
              </div>
              <div className="project-card-body">
                <div>
                  <p className="project-meta">{project.year} / {project.role}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
