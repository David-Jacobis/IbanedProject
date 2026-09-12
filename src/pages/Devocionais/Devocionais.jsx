import React from "react";
import "./Devocionais.css";
import { LuBookOpen, LuCalendarDays, LuExternalLink } from "react-icons/lu";
import {
  DevotionalCard,
  Reveal,
  ScrollProgress,
  Stagger,
} from "../../components/ui";
import { devotionals, YOUVERSION_PLACEHOLDER_URL } from "../../data/siteContent";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const formatDate = (isoDate) => {
  const date = new Date(`${isoDate}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : dateFormatter.format(date);
};

/* Guards the "Ler no YouVersion" link: while a devotional still carries the
 * placeholder URL, clicking it warns in the console instead of navigating
 * to an invalid address. */
const guardYouVersionLink = (url) => (event) => {
  if (!url || url === YOUVERSION_PLACEHOLDER_URL) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.warn(
      "Devocionais: defina a URL real do YouVersion para este devocional."
    );
  }
};

function DevocionaisPage() {
  /* The most recent entry (by publishedAt) is always the featured one —
     no manual reordering or component edits needed when a new devotional
     with a newer date is added to siteContent.js. */
  const sorted = [...devotionals].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  const [featured, ...rest] = sorted;

  return (
    <main className="devocionais-page">
      <ScrollProgress />
      <section className="devocionais-hero">
        <div className="page-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">Devocionais</span>
            <h1>Palavra, reflexão e oração para o seu dia a dia.</h1>
            <p>
              Um espaço para se aproximar de Deus durante a semana, com
              devocionais curtos e leituras guiadas no YouVersion.
            </p>
          </Reveal>
        </div>
      </section>

      {featured ? (
        <section className="devocionais-featured">
          <div className="page-shell">
            <Reveal className="featured-devotional surface-card">
              <div className="featured-devotional__media">
                <img
                  src={featured.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="featured-devotional__body">
                <span className="featured-devotional__badge">
                  <LuBookOpen aria-hidden="true" focusable="false" />
                  Devocional mais recente
                </span>
                <h2>{featured.title}</h2>
                {formatDate(featured.publishedAt) ? (
                  <p className="featured-devotional__date">
                    <LuCalendarDays aria-hidden="true" focusable="false" />
                    {formatDate(featured.publishedAt)}
                  </p>
                ) : null}
                <p className="featured-devotional__description">
                  {featured.description}
                </p>
                <a
                  className="btn btn--primary btn--lg"
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={guardYouVersionLink(featured.url)}
                >
                  Ler no YouVersion
                  <LuExternalLink aria-hidden="true" focusable="false" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="devocionais-list">
          <div className="page-shell">
            <Reveal className="section-heading">
              <span className="eyebrow">Acervo</span>
              <h2>Todos os devocionais</h2>
            </Reveal>

            <Stagger className="devocionais-grid fluid-grid">
              {rest.map((item) => (
                <Stagger.Item
                  key={item.title}
                  className="devocionais-grid__item"
                >
                  <DevotionalCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    url={item.url}
                    publishedAt={formatDate(item.publishedAt)}
                    onCtaClick={guardYouVersionLink(item.url)}
                  />
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default DevocionaisPage;
