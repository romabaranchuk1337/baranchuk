import { Link, useParams } from 'wouter';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return (
      <main className="simple-page">
        <div className="simple-page__inner">
          <p className="section-number">(404)</p>
          <h1>Проєкт не знайдено</h1>
          <Link href="/" className="text-link">
            Назад до проєктів
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-page">
      <article className="project-page__inner">
        <Link href="/" className="back-link">
          ← Назад до проєктів
        </Link>

        <header className="project-header">
          <p className="section-number">({project.year})</p>
          <h1>{project.title}</h1>
          <div className="project-meta">
            <p>{project.description}</p>
            <dl>
              <div>
                <dt>Клієнт</dt>
                <dd>{project.client}</dd>
              </div>
              <div>
                <dt>Роль</dt>
                <dd>{project.role}</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="video-frame">
          <iframe
            src={project.videoUrl}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <section className="frames-section" aria-labelledby="frames-title">
          <h2 id="frames-title">Кадри</h2>
          <div className="frames-grid">
            {project.images.map((image, index) => (
              <img key={image} src={image} alt={`${project.title}: кадр ${index + 1}`} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
