/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Sobre.css";
import { AboutCard } from "../../components/ui";
import {
  aboutPillars,
  aboutPractices,
  churchHistory,
  pastors,
} from "../../data/siteContent";

function SobrePage() {
  return (
    <main className="sobre-page">
      <section className="sobre-hero">
        <div className="page-shell sobre-shell">
          <div className="section-heading">
            <span className="eyebrow">Sobre nós</span>
            <h1>Igreja local, fé bíblica e uma caminhada construída em comunidade.</h1>
            <p>
              A IBANED é uma igreja congregacional de modelo representativo,
              filiada à Convenção Batista Nacional e liderada por um conselho
              pastoral comprometido com o cuidado da igreja.
            </p>
          </div>

          <div className="sobre-pillars">
            {aboutPillars.map((pillar) => (
              <article key={pillar.title} className="sobre-pillar surface-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sobre-pastores">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">Liderança</span>
            <h2>Pastores que servem com presença, ensino e cuidado.</h2>
          </div>

          <div className="pastors-grid">
            {pastors.map((pastor) => (
              <AboutCard
                key={pastor.name}
                img={pastor.image}
                title={pastor.name}
                text={pastor.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sobre-history">
        <div className="page-shell sobre-history-shell">
          <div className="section-heading">
            <span className="eyebrow">Nossa história</span>
            <h2>Uma trajetória marcada por oração, serviço e fidelidade.</h2>
          </div>

          <div className="history-card surface-card">
            {churchHistory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="sobre-practices">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">Como vivemos a fé</span>
            <h2>Convicções que moldam a experiência do visitante e da igreja.</h2>
          </div>

          <div className="practice-grid">
            {aboutPractices.map((practice) => (
              <article key={practice} className="practice-card surface-card">
                <p>{practice}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sobre-location">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow">Nossa localização</span>
            <h2>Um ponto de encontro para pessoas e famílias da região.</h2>
          </div>

          <div className="map-container surface-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.980197180699!2d-43.977176923982114!3d-19.967335039473866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697d054c41631%3A0xb6b7c7a7086340bb!2sIBANED%20-%20Igreja%20Batista%20Estrela%20D'Alva!5e0!3m2!1spt-BR!2sbr!4v1716136704432!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default SobrePage;
