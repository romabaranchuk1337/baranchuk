import { Link } from 'wouter';

export function About() {
  return (
    <main className="about-page">
      <div className="about-page__inner">
        <Link href="/" className="back-link">
          ← Back to Projects
        </Link>

        <section className="about-layout">
          <div>
            <p className="section-number">(002)</p>
            <h1>ABOUT.</h1>
          </div>

          <div className="about-copy">
            <p>
              Roman Baranchuk is a videographer and filmmaker working with commercial videos,
              music visuals, documentary stories and post-production.
            </p>
            <p>
              The work is built around clean composition, natural rhythm and a simple idea:
              make every project feel direct, visual and easy to watch.
            </p>

            <div className="contact-list">
              <a href="mailto:contact@example.com">contact@example.com</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
