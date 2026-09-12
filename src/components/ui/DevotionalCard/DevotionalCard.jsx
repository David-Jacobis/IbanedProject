import { LuArrowUpRight, LuCalendarDays } from "react-icons/lu";
import "./DevotionalCard.css";

/**
 * Grid card for a single devotional (used in "Todos os devocionais").
 * The date shown is already formatted by the caller — this component only
 * renders what it's given.
 */
export default function DevotionalCard({
  title,
  description,
  image,
  url,
  publishedAt,
  onCtaClick,
}) {
  return (
    <article className="devotional-card">
      <div className="devotional-card__media">
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="devotional-card__body">
        {publishedAt ? (
          <p className="devotional-card__date">
            <LuCalendarDays aria-hidden="true" focusable="false" />
            {publishedAt}
          </p>
        ) : null}
        <h3 className="devotional-card__title">{title}</h3>
        <p className="devotional-card__description">{description}</p>
        <a
          className="devotional-card__cta"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onCtaClick}
        >
          Ler no YouVersion
          <LuArrowUpRight aria-hidden="true" focusable="false" />
        </a>
      </div>
    </article>
  );
}
