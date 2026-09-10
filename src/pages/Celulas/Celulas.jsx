import React from "react";
import "./Celulas.css";
import {
  MeetingCards,
  Reveal,
  ScrollProgress,
  Stagger,
} from "../../components/ui";
import { cellBenefits, cellSteps } from "../../data/siteContent";

const CelulasPage = () => {
  return (
    <main className="celulas-page">
      <ScrollProgress />
      <section className="celulas-hero">
        <div className="page-shell">
          <Reveal className="celulas-hero-card surface-card">
            <span className="eyebrow">Vida em comunidade</span>
            <h1>
              "E todos os dias, no templo e de casa em casa, não cessavam de
              ensinar e de pregar Jesus, o Cristo."
            </h1>
            <p>Atos 5:42</p>
          </Reveal>
        </div>
      </section>

      <section className="celulas-benefits">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">Por que participar</span>
            <h2>Células aproximam pessoas, fortalecem vínculos e sustentam a fé no cotidiano.</h2>
          </Reveal>

          <Stagger className="celulas-benefit-grid fluid-grid">
            {cellBenefits.map((item) => (
              <Stagger.Item
                as="article"
                key={item.title}
                className="celulas-benefit-card surface-card"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Stagger.Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="celulas-meeting">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">O que acontece em uma célula</span>
            <h2>Uma experiência simples, acolhedora e centrada na Palavra.</h2>
          </Reveal>
          <MeetingCards />
        </div>
      </section>

      <section className="celulas-steps">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">Como entrar em uma célula</span>
            <h2>Queremos ajudar você a encontrar um grupo com leveza e clareza.</h2>
          </Reveal>

          <Stagger className="celulas-step-grid fluid-grid">
            {cellSteps.map((step, index) => (
              <Stagger.Item
                as="article"
                key={step}
                className="celulas-step-card surface-card"
              >
                <span>0{index + 1}</span>
                <p>{step}</p>
              </Stagger.Item>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
};

export default CelulasPage;
