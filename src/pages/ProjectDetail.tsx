import { Link, useParams } from 'wouter';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return (
      <main className="not-found-page">
        <div className="not-found-card">
          <p className="section-kicker">(404)</p>
          <h1>Проєкт не знайдено</h1>
          <Link href="/" className="button-primary">
            Повернутись до проєктів
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <div className="detail-shell">
        <Link href="/" className="back-link">
          ← Назад до проєктів
        </Link>

        <header className="detail-header">
          <div>
            <p className="section-kicker">{project.eyebrow} / {project.year}</p>
            <h1>{project.title}</h1>
          </div>
          <p>{project.description}</p>
        </header>

        <section className="project-stats" aria-label="Деталі проєкту">
          <div>
            <span>Роль</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Сервіси</span>
            <strong>{project.services.join(', ')}</strong>
          </div>
        </section>

        <section className="video-section" aria-label="Відео проєкту">
          <div className="video-container">
            <iframe
              src={project.videoUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-heading compact">
            <p className="section-kicker">(Frames)</p>
            <h2>Кадри з проєкту</h2>
          </div>
          <div className="image-gallery">
            {project.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title}: кадр ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
