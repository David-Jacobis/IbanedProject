import React from "react";
import "./Programacao.css";
import {
  EventCard,
  Reveal,
  ScrollProgress,
  Stagger,
} from "../../components/ui";
import { scheduleGuides, scheduleItems } from "../../data/siteContent";

const ProgramacaoPage = () => {
  return (
    <React.Fragment>
      <ScrollProgress />
      <main className="programacao-page">
        <section className="programacao-hero">
          <div className="page-shell programacao-shell">
            <Reveal className="section-heading">
              <span className="eyebrow">Programação</span>
              <h1>Encontros pensados para adoração, formação bíblica e comunhão.</h1>
              <p>
                Nossa agenda semanal busca ritmo, clareza e acolhimento para que
                novos visitantes e membros encontrem seu lugar com facilidade.
              </p>
            </Reveal>

            <Stagger className="programacao-guide-grid fluid-grid">
              {scheduleGuides.map((item) => (
                <Stagger.Item
                  as="article"
                  key={item.title}
                  className="programacao-guide surface-card"
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="programacao-list">
          <div className="page-shell">
            <Reveal className="section-heading">
              <span className="eyebrow">Nossos encontros</span>
              <h2>Toda semana, presencialmente e também online.</h2>
            </Reveal>

            <Stagger className="programacao-events">
              {scheduleItems.map((item) => (
                <Stagger.Item key={item.title} className="programacao-events__item">
                  <EventCard
                    title={item.title}
                    day={item.day}
                    location={item.location}
                    image={item.image}
                    ctaTo={null}
                  />
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ProgramacaoPage;
