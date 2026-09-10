import { LuArrowRight } from "react-icons/lu";
import "./MinistryCard.css";

/**
 * Ministry presentation card: image, público, nome, descrição and a CTA that
 * opens a conversation with the leadership. The `featured` variant lays the
 * image beside the copy for the first item in an asymmetric grid.
 */
export default function MinistryCard({
  title,
  image,
  audience,
  text,
  ctaHref,
  featured = false,
}) {
  return (
    <article className={`ministry-card ${featured ? "ministry-card--featured" : ""}`}>
      <div className="ministry-card__media">
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="ministry-card__body">
        {audience ? (
          <span className="ministry-card__audience">{audience}</span>
        ) : null}
        <h3 className="ministry-card__title">{title}</h3>
        <p className="ministry-card__text">{text}</p>
        <a
          className="ministry-card__cta"
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a liderança
          <LuArrowRight aria-hidden="true" focusable="false" />
        </a>
      </div>
    </article>
  );
}
