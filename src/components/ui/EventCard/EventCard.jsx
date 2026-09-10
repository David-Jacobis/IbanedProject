import { LuClock, LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./EventCard.css";

/**
 * A single recurring gathering: image, day, title, location and a CTA.
 * Used both inside <EventsCarousel> and as a plain grid item on the
 * Programação page.
 */
export default function EventCard({
  title,
  day,
  location,
  image,
  ctaLabel = "Ver programação",
  ctaTo = "/programacao",
}) {
  return (
    <article className="event-card" aria-roledescription="slide">
      <div className="event-card__media">
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="event-card__body">
        <p className="event-card__meta">
          <LuClock aria-hidden="true" focusable="false" />
          {day}
        </p>
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__meta event-card__meta--muted">
          <LuMapPin aria-hidden="true" focusable="false" />
          {location}
        </p>
        {ctaTo ? (
          <Link className="btn btn--dark event-card__cta" to={ctaTo}>
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
