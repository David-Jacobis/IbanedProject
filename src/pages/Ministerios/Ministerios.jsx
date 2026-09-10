import React from "react";
import "./Ministerios.css";
import {
  MinistryCard,
  Reveal,
  ScrollProgress,
  Stagger,
} from "../../components/ui";
import {
  contactInfo,
  ministryFlow,
  ministryHighlights,
  ministryItems,
} from "../../data/siteContent";

function MinisteriosPage() {
  return (
    <main className="ministerios-page">
      <ScrollProgress />
      <section className="ministerios-hero">
        <div className="page-shell ministerios-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">Ministérios</span>
            <h1>Espaços de serviço, discipulado e cuidado para diferentes fases da jornada.</h1>
            <p>
              Cada ministério nasce para conectar pessoas à missão da igreja com
              clareza, acompanhamento e oportunidade de servir com propósito.
            </p>
          </Reveal>

          <Stagger className="ministerios-highlight-grid fluid-grid">
            {ministryHighlights.map((item) => (
              <Stagger.Item
                as="article"
                key={item.title}
                className="ministerios-highlight surface-card"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Stagger.Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="ministerios-list">
        <div className="page-shell ministry-list-shell">
          <Reveal>
            <MinistryCard
              title={ministryItems[0].title}
              image={ministryItems[0].image}
              audience={ministryItems[0].audience}
              text={ministryItems[0].text}
              ctaHref={contactInfo.whatsapp}
              featured
            />
          </Reveal>

          <Stagger className="ministry-grid fluid-grid">
            {ministryItems.slice(1).map((item) => (
              <Stagger.Item key={item.title} className="ministry-grid__item">
                <MinistryCard
                  title={item.title}
                  image={item.image}
                  audience={item.audience}
                  text={item.text}
                  ctaHref={contactInfo.whatsapp}
                />
              </Stagger.Item>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="ministerios-flow">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">Como participar</span>
            <h2>Queremos que sua entrada no serviço seja saudável e bem acompanhada.</h2>
          </Reveal>

          <Stagger className="ministerios-flow-grid fluid-grid">
            {ministryFlow.map((step, index) => (
              <Stagger.Item
                as="article"
                key={step}
                className="ministerios-step surface-card"
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
}

export default MinisteriosPage;
