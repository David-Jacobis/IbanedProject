import "./Home.css";
import React from "react";
import { motion } from "framer-motion";
import {
  faCalendarDays,
  faLocationDot,
  faQuoteLeft,
  faQuoteRight,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ScrollProgress } from "../../components/ui";
import {
  contactInfo,
  featuredCellGroup,
  homeHighlights,
  homeJourney,
  homeStats,
  homeValues,
  servicePurpose,
} from "../../data/siteContent";

const HomePage = () => {
  const firstRowValues = homeValues.slice(0, 3);
  const secondRowValues = homeValues.slice(3);

  return (
    <React.Fragment>
      <ScrollProgress />
      <main className="home-page">
        <section className="home-hero">
          <div className="page-shell home-hero-shell">
            <div className="home-hero-copy">
              <span className="eyebrow">Igreja Batista Estrela Dalva</span>
              <h1>Um lugar para conhecer Jesus, criar raízes e servir em comunidade.</h1>
              <p>
                Queremos receber você com clareza, cuidado e um ambiente que
                facilite conexão, pertencimento e crescimento espiritual.
              </p>
              <div className="home-hero-actions">
                <motion.a
                  className="hero-button hero-button-primary"
                  whileHover={{ scale: 1.03 }}
                  href="https://wa.me/553125264248"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  Fale conosco
                </motion.a>
                <Link className="hero-button hero-button-secondary" to="/programacao">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  Ver programação
                </Link>
              </div>
            </div>

            <div className="home-hero-panel surface-card">
              <div className="home-hero-item">
                <FontAwesomeIcon icon={faLocationDot} />
                <div>
                  <strong>Estamos em Belo Horizonte</strong>
                  <p>{contactInfo.address[0]}</p>
                </div>
              </div>
              <div className="home-hero-item">
                <FontAwesomeIcon icon={faUsers} />
                <div>
                  <strong>Ambiente acolhedor</strong>
                  <p>Comunhão, discipulado, oração e espaço para toda a família.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-highlights">
          <div className="page-shell highlights-grid">
            {homeHighlights.map((item) => (
              <article key={item.title} className="highlight-card surface-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-values-section">
          <div className="page-shell">
            <div className="section-heading">
              <span className="eyebrow">Quem somos</span>
              <h2>Uma igreja com convicções bíblicas e uma missão prática.</h2>
              <p>
                Nossa identidade não está apenas no que acreditamos, mas em como
                vivemos isso juntos ao longo da semana.
              </p>
            </div>

            <div className="values-layout">
              <div className="values-row values-row-primary">
                {firstRowValues.map((value) => (
                  <article key={value.title} className="value-item">
                    <div
                      className="value-card"
                      style={{ backgroundColor: value.cardColor }}
                    >
                      <div className="value-card-content">
                        <FontAwesomeIcon
                          icon={value.icon}
                          size="2x"
                          className="value-card-icon"
                          style={{ color: value.iconColor }}
                        />
                        <h3>{value.title.toUpperCase()}</h3>
                        <h4>{value.highlight.toUpperCase()}</h4>
                      </div>
                    </div>
                    <div
                      className="value-card-accent"
                      style={{ backgroundColor: value.accentColor }}
                    />
                  </article>
                ))}
              </div>

              <div className="values-row values-row-secondary">
                {secondRowValues.map((value) => (
                  <article key={value.title} className="value-item">
                    <div
                      className="value-card"
                      style={{ backgroundColor: value.cardColor }}
                    >
                      <div className="value-card-content">
                        <FontAwesomeIcon
                          icon={value.icon}
                          size="2x"
                          className="value-card-icon"
                          style={{ color: value.iconColor }}
                        />
                        <h3>{value.title.toUpperCase()}</h3>
                        <h4>{value.highlight.toUpperCase()}</h4>
                      </div>
                    </div>
                    <div
                      className="value-card-accent"
                      style={{ backgroundColor: value.accentColor }}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-stats">
          <div className="page-shell stats-grid">
            {homeStats.map((item) => (
              <article key={item.label} className="stat-card surface-card">
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-path">
          <div className="page-shell path-shell">
            <div className="section-heading">
              <span className="eyebrow">Como começar</span>
              <h2>Queremos tornar sua chegada simples e sua jornada consistente.</h2>
            </div>

            <div className="path-grid">
              {homeJourney.map((item, index) => (
                <article key={item.title} className="path-card surface-card">
                  <span className="path-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-cell-banner">
          <div className="page-shell cell-banner-shell">
            <div className="cell-banner-copy">
              <span className="eyebrow">Vida em célula</span>
              <h2>{featuredCellGroup.title}</h2>
              <p>{featuredCellGroup.description}</p>
            </div>
            <motion.div whileHover={{ scale: 1.03 }}>
              <Link className="hero-button hero-button-secondary" to="/celulas">
                Saiba mais
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="home-purpose">
          <div className="page-shell">
            <div className="purpose-card surface-card">
              <h2>{servicePurpose.title.toUpperCase()}</h2>
              <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="purpose-quote" />
              <p>{servicePurpose.text}</p>
              <FontAwesomeIcon
                icon={faQuoteRight}
                size="2x"
                className="purpose-quote purpose-quote-end"
              />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
