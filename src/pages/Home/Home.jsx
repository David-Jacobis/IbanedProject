import "./Home.css";
import React, { Suspense } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LuCalendarDays,
  LuClock,
  LuHeartHandshake,
  LuMapPin,
  LuMessageCircle,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  CountUp,
  GroupsSection,
  Reveal,
  ScrollProgress,
  Stagger,
} from "../../components/ui";
import heroImage from "../../assets/images/hero-home.jpg";
import {
  contactInfo,
  featuredCellGroup,
  homeHighlights,
  homeJourney,
  homeStats,
  homeValues,
  scheduleItems,
  servicePurpose,
} from "../../data/siteContent";

/* Below-the-fold and dependency-heavy — split out of the initial bundle. */
const EventsCarousel = React.lazy(() =>
  import("../../components/ui/EventsCarousel/EventsCarousel")
);
const ContactForm = React.lazy(() =>
  import("../../components/ui/ContactForm/ContactForm")
);

const EASE = [0.16, 1, 0.3, 1];

const HomePage = () => {
  const reduceMotion = useReducedMotion();
  const firstRowValues = homeValues.slice(0, 3);
  const secondRowValues = homeValues.slice(3);

  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 700], [0, 90]);
  const imageY = reduceMotion ? 0 : parallax;

  const heroContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };
  const heroItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.65, ease: EASE },
    },
  };

  return (
    <React.Fragment>
      <ScrollProgress />
      <main className="home-page">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <motion.img
              src={heroImage}
              alt=""
              className="hero-image"
              style={{ y: imageY }}
              fetchpriority="high"
              decoding="async"
            />
            <div className="hero-scrim" />
          </div>

          <div className="page-shell hero-inner">
            <motion.div
              className="hero-content"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="hero-eyebrow" variants={heroItem}>
                Igreja Batista Estrela Dalva
              </motion.span>
              <motion.h1 className="hero-title" variants={heroItem}>
                Para a glória de Deus fazemos discípulos
              </motion.h1>
              <motion.p className="hero-lede" variants={heroItem}>
                Amamos porque fomos amados 1 João 4:1.
              </motion.p>
              <motion.div className="hero-actions" variants={heroItem}>
                <a
                  className="btn btn--primary btn--lg"
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuMessageCircle size={20} aria-hidden="true" focusable="false" />
                  Fale conosco
                </a>
                <Link className="btn btn--ghost btn--lg" to="/programacao">
                  <LuCalendarDays size={20} aria-hidden="true" focusable="false" />
                  Ver programação
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="page-shell hero-facts-wrap">
            <Reveal className="hero-facts" y={18} delay={0.1}>
              <div className="hero-fact">
                <LuMapPin aria-hidden="true" focusable="false" />
                <div>
                  <strong>Belo Horizonte</strong>
                  <span>{contactInfo.address[0]}</span>
                </div>
              </div>
              <div className="hero-fact">
                <LuClock aria-hidden="true" focusable="false" />
                <div>
                  <strong>Cultos aos domingos</strong>
                  <span>10h e 18h</span>
                </div>
              </div>
              <div className="hero-fact">
                <LuHeartHandshake aria-hidden="true" focusable="false" />
                <div>
                  <strong>Ambiente acolhedor</strong>
                  <span>Espaço para toda a família</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="home-highlights">
          <Stagger className="page-shell highlights-grid fluid-grid">
            {homeHighlights.map((item) => (
              <Stagger.Item
                as="article"
                key={item.title}
                className="highlight-card surface-card"
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Stagger.Item>
            ))}
          </Stagger>
        </section>

        <section className="home-values-section">
          <div className="page-shell">
            <Reveal className="section-heading">
              <span className="eyebrow">Quem somos</span>
              <h2>Uma igreja com convicções bíblicas e uma missão prática.</h2>
              <p>
                Nossa identidade não está apenas no que acreditamos, mas em como
                vivemos isso juntos ao longo da semana.
              </p>
            </Reveal>

            <div className="values-layout">
              <Stagger className="values-row values-row-primary">
                {firstRowValues.map((value) => (
                  <Stagger.Item
                    as="article"
                    key={value.title}
                    className="value-item"
                  >
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
                  </Stagger.Item>
                ))}
              </Stagger>

              <Stagger className="values-row values-row-secondary">
                {secondRowValues.map((value) => (
                  <Stagger.Item
                    as="article"
                    key={value.title}
                    className="value-item"
                  >
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
                  </Stagger.Item>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        <section className="home-stats">
          <Stagger className="page-shell stats-grid">
            {homeStats.map((item) => (
              <Stagger.Item
                as="article"
                key={item.label}
                className="stat-card surface-card"
              >
                <strong>
                  {item.count ? <CountUp to={item.value} /> : item.value}
                </strong>
                <p>{item.label}</p>
              </Stagger.Item>
            ))}
          </Stagger>
        </section>

        <section className="home-path">
          <div className="page-shell path-shell">
            <Reveal className="section-heading">
              <span className="eyebrow">Como começar</span>
              <h2>Queremos tornar sua chegada simples e sua jornada consistente.</h2>
            </Reveal>

            <Stagger className="path-grid fluid-grid">
              {homeJourney.map((item, index) => (
                <Stagger.Item
                  as="article"
                  key={item.title}
                  className="path-card surface-card"
                >
                  <span className="path-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </section>

        <GroupsSection />

        <section className="home-events">
          <div className="page-shell">
            <Reveal className="section-heading section-heading--wide">
              <span className="eyebrow">Encontros da semana</span>
              <h2>Momentos para adorar, ouvir a Palavra e caminhar junto.</h2>
              <p>
                Uma agenda com ritmo e acolhimento — venha do jeito que estiver.
              </p>
            </Reveal>
            <Reveal>
              <Suspense fallback={<div className="lazy-block" aria-hidden="true" />}>
                <EventsCarousel items={scheduleItems} label="Encontros da semana" />
              </Suspense>
            </Reveal>
          </div>
        </section>

        <section className="home-cell-banner">
          <Reveal className="page-shell cell-banner-shell">
            <div className="cell-banner-copy">
              <span className="eyebrow">Vida em célula</span>
              <h2>{featuredCellGroup.title}</h2>
              <p>{featuredCellGroup.description}</p>
            </div>
            <Link className="btn btn--ghost btn--lg" to="/celulas">
              Saiba mais
            </Link>
          </Reveal>
        </section>

        <section className="home-purpose">
          <div className="page-shell">
            <Reveal className="purpose-card surface-card">
              <h2>{servicePurpose.title.toUpperCase()}</h2>
              <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="purpose-quote" />
              <p>{servicePurpose.text}</p>
              <FontAwesomeIcon
                icon={faQuoteRight}
                size="2x"
                className="purpose-quote purpose-quote-end"
              />
            </Reveal>
          </div>
        </section>

        <section className="home-contact">
          <div className="page-shell home-contact-grid">
            <Reveal className="home-contact-copy">
              <span className="eyebrow">Fale com a gente</span>
              <h2>Tem uma dúvida, um pedido de oração ou quer nos visitar?</h2>
              <p>
                Escreva pra gente. Uma pessoa da equipe vai responder com
                atenção e sem formalidade.
              </p>
              <ul className="home-contact-list">
                <li>
                  <LuMapPin aria-hidden="true" focusable="false" />
                  <span>
                    {contactInfo.address[0]} — {contactInfo.address[1]}
                  </span>
                </li>
                <li>
                  <LuMessageCircle aria-hidden="true" focusable="false" />
                  <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp {contactInfo.phone}
                  </a>
                </li>
              </ul>
            </Reveal>
            <Reveal className="home-contact-form surface-card" delay={0.08}>
              <Suspense fallback={<div className="lazy-block" aria-hidden="true" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
