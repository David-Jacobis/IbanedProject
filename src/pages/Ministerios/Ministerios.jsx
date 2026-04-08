import React from "react";
import "./Ministerios.css";
import { GridCard } from "../../components/ui";
import {
  ministryFlow,
  ministryHighlights,
  ministryItems,
} from "../../data/siteContent";
import { ScrollProgress } from "../../components/ui";

function MinisteriosPage() {
  return (
    <main className="ministerios-page">
      <ScrollProgress />
      <section className="ministerios-hero">
        <div className="page-shell ministerios-shell">
          <div className="section-heading">
            <span className="eyebrow">Ministérios</span>
            <h1>Espaços de serviço, discipulado e cuidado para diferentes fases da jornada.</h1>
            <p>
              Cada ministério nasce para conectar pessoas à missão da igreja com
              clareza, acompanhamento e oportunidade de servir com propósito.
            </p>
          </div>

          <div className="ministerios-highlight-grid">
            {ministryHighlights.map((item) => (
              <article key={item.title} className="ministerios-highlight surface-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ministerios-list">
        <div className="page-shell ministerios-shell">
          {ministryItems.map((item) => (
            <GridCard
              key={item.title}
              title={item.title}
              image={item.image}
              text={item.text}
            />
          ))}
        </div>
      </section>

      <section className="ministerios-flow">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">Como participar</span>
            <h2>Queremos que sua entrada no serviço seja saudável e bem acompanhada.</h2>
          </div>

          <div className="ministerios-flow-grid">
            {ministryFlow.map((step, index) => (
              <article key={step} className="ministerios-step surface-card">
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MinisteriosPage;
