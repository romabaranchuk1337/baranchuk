import { Link } from 'wouter';

const processSteps = [
  'Знайомство з задачею, референсами й ціллю відео.',
  'Підготовка сценарної структури, локацій, кадрів і знімального плану.',
  'Зйомка, монтаж, колір, звук і фінальні формати для потрібних платформ.',
];

export function About() {
  return (
    <main className="about-page">
      <div className="about-shell">
        <Link href="/" className="back-link">
          ← Назад до проєктів
        </Link>

        <section className="about-hero">
          <div>
            <p className="section-kicker">(003) About</p>
            <h1>Роман Баранчук</h1>
          </div>
          <p>
            Відеограф і режисер, який допомагає брендам, артистам і командам перетворювати
            ідею на живу візуальну історію. Працюю з комерційними роликами, музичними
            відео, документальними форматами та постпродакшном.
          </p>
        </section>

        <section className="about-grid">
          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=1200&q=85"
              alt="Портрет відеографа за роботою"
            />
          </div>

          <div className="about-copy">
            <h2>Підхід</h2>
            <p>
              Для мене сильне відео починається не з техніки, а з точного відчуття людини,
              продукту або моменту. Камера, світло й монтаж мають працювати на одну думку:
              зробити історію зрозумілою, красивою і такою, що запамʼятовується.
            </p>

            <div className="process-list">
              {processSteps.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div>
            <p className="section-kicker">(Contact)</p>
            <h2>Готові зняти наступну історію?</h2>
          </div>
          <div className="contact-actions">
            <a href="mailto:contact@example.com" className="button-primary">
              contact@example.com
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="button-secondary">
              Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
