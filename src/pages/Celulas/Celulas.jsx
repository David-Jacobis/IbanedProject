import React from "react";
import "./Celulas.css";
import { MeetingCards } from "../../components/ui";
import { cellBenefits, cellSteps } from "../../data/siteContent";
import { ScrollProgress } from "../../components/ui";

const CelulasPage = () => {
  return (
    <main className="celulas-page">
      <ScrollProgress />
      <section className="celulas-hero">
        <div className="page-shell">
          <div className="celulas-hero-card surface-card">
            <span className="eyebrow">Vida em comunidade</span>
            <h1>
              "E todos os dias, no templo e de casa em casa, não cessavam de
              ensinar e de pregar Jesus, o Cristo."
            </h1>
            <p>Atos 5:42</p>
          </div>
        </div>
      </section>

      <section className="celulas-benefits">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">Por que participar</span>
            <h2>Células aproximam pessoas, fortalecem vínculos e sustentam a fé no cotidiano.</h2>
          </div>

          <div className="celulas-benefit-grid fluid-grid">
            {cellBenefits.map((item) => (
              <article key={item.title} className="celulas-benefit-card surface-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="celulas-meeting">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">O que acontece em uma célula</span>
            <h2>Uma experiência simples, acolhedora e centrada na Palavra.</h2>
          </div>
          <MeetingCards />
        </div>
      </section>

      <section className="celulas-steps">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">Como entrar em uma célula</span>
            <h2>Queremos ajudar você a encontrar um grupo com leveza e clareza.</h2>
          </div>

          <div className="celulas-step-grid fluid-grid">
            {cellSteps.map((step, index) => (
              <article key={step} className="celulas-step-card surface-card">
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CelulasPage;
