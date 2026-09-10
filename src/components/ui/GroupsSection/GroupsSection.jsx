import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { LuPause, LuPlay } from "react-icons/lu";
import Reveal from "../Reveal/Reveal";
import "./GroupsSection.css";

/* Fotos da galeria — placeholder com imagens já existentes no projeto.
 * Troque estas importações pelos registros dos seus grupos, ou passe um
 * array pronto pela prop `images`. */
import photo1 from "../../../assets/images/PrLeal.jpg";
import photo2 from "../../../assets/images/matheusbiblia-1600.jpg";
import photo3 from "../../../assets/images/PrEber3.jpg";
import photo4 from "../../../assets/images/biblia-1600.jpg";
import photo5 from "../../../assets/images/PrLu.jpg";
import photo6 from "../../../assets/images/PrFabio.jpg";
import photo7 from "../../../assets/images/PrMarcos.jpg";

/* ------------------------------------------------------------------ *
 * CONFIGURAÇÃO — edite aqui
 * ------------------------------------------------------------------ */

/* Cole o link do seu Google Forms entre as aspas. Enquanto ficar como
 * está, o botão avisa no console em vez de abrir uma URL inválida. */
const GROUP_FORM_URL = "COLOCAR_URL_DO_GOOGLE_FORMS_AQUI";

const groupImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

/* ------------------------------------------------------------------ */

const PLACEHOLDER_URL = "COLOCAR_URL_DO_GOOGLE_FORMS_AQUI";

/* Number of identical copies of the photo set laid end to end. The track
 * scrolls left by exactly one copy and loops seamlessly, so a finite set
 * of photos rotates forever. Three copies keep the strip gap-free on any
 * realistic viewport width. */
const MARQUEE_COPIES = 3;

/* Per-photo rhythm (repeats every 7): size + tilt + vertical offset so the
 * strip reads as a scattered mosaic with depth, not a flat row. */
const RHYTHM = [
  { size: "md", rot: -3, off: 12 },
  { size: "lg", rot: 2, off: -16 },
  { size: "sm", rot: -1, off: 8 },
  { size: "md", rot: 3, off: -10 },
  { size: "lg", rot: -2, off: 16 },
  { size: "sm", rot: 1, off: -6 },
  { size: "md", rot: -3, off: 10 },
];

export default function GroupsSection({
  images = groupImages,
  formUrl = GROUP_FORM_URL,
  title = "Faça parte de um grupo da igreja!",
  subtitle = "Encontre pessoas, compartilhe a vida e cresça junto com a gente.",
  ctaLabel = "Encontre um grupo para você",
}) {
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const handleCtaClick = (event) => {
    if (!formUrl || formUrl === PLACEHOLDER_URL) {
      event.preventDefault();
      // eslint-disable-next-line no-console
      console.warn(
        "GroupsSection: defina GROUP_FORM_URL com o link do seu Google Forms."
      );
    }
  };

  const copies = reduceMotion ? 1 : MARQUEE_COPIES;

  const renderSet = (copyIndex) => (
    <ul className="groups-marquee__set" key={copyIndex}>
      {images.map((src, i) => {
        const cfg = RHYTHM[i % RHYTHM.length];
        return (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={`groups-photo groups-photo--${cfg.size}`}
            style={{ "--rot": `${cfg.rot}deg`, "--off": `${cfg.off}px` }}
          >
            <div className="groups-photo__frame">
              <img src={src} alt="" loading="lazy" decoding="async" />
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="groups-section" aria-labelledby="groups-section-title">
      <div className="page-shell groups-section__head">
        <Reveal as="h2" id="groups-section-title" className="groups-section__title">
          {title}
        </Reveal>
        <Reveal as="p" className="groups-section__subtitle" delay={0.08}>
          {subtitle}
        </Reveal>
        <Reveal className="groups-section__cta-wrap" delay={0.16}>
          <a
            className="btn btn--primary btn--lg"
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
          >
            {ctaLabel}
          </a>
        </Reveal>
      </div>

      <Reveal
        className={`groups-marquee ${
          reduceMotion ? "groups-marquee--static" : ""
        }`}
      >
        <div
          className="groups-marquee__viewport"
          role="img"
          aria-label="Mosaico de fotos da nossa comunidade"
        >
          <div
            className={`groups-marquee__track ${paused ? "is-paused" : ""}`}
          >
            {Array.from({ length: copies }, (_, index) => renderSet(index))}
          </div>
        </div>

        {!reduceMotion ? (
          <button
            type="button"
            className="groups-marquee__toggle"
            aria-pressed={paused}
            aria-label={
              paused
                ? "Retomar o movimento das fotos"
                : "Pausar o movimento das fotos"
            }
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <LuPlay aria-hidden="true" focusable="false" />
            ) : (
              <LuPause aria-hidden="true" focusable="false" />
            )}
          </button>
        ) : null}
      </Reveal>
    </section>
  );
}
