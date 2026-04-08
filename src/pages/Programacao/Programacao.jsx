import React from "react";
import "./Programacao.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ScrollProgress } from "../../components/ui";
import { scheduleGuides, scheduleItems } from "../../data/siteContent";

const ProgramacaoPage = () => {
  return (
    <React.Fragment>
      <ScrollProgress />
      <main className="programacao-page">
        <section className="programacao-hero">
          <div className="page-shell programacao-shell">
            <div className="section-heading">
              <span className="eyebrow">Programação</span>
              <h1>Encontros pensados para adoração, formação bíblica e comunhão.</h1>
              <p>
                Nossa agenda semanal busca ritmo, clareza e acolhimento para que
                novos visitantes e membros encontrem seu lugar com facilidade.
              </p>
            </div>

            <div className="programacao-guide-grid">
              {scheduleGuides.map((item) => (
                <article key={item.title} className="programacao-guide surface-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="programacao-list">
          <div className="page-shell programacao-shell">
            {scheduleItems.map((item) => (
              <article key={item.title} className="programacao-card surface-card">
                <div className="programacao-card-text">
                  <h3>{item.title.toUpperCase()}</h3>
                  <p>
                    <FontAwesomeIcon icon={faClock} /> {item.day}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} /> {item.location}
                  </p>
                </div>

                <div className="programacao-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ProgramacaoPage;
