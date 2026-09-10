import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import EventCard from "../EventCard/EventCard";
import "./EventsCarousel.css";

/**
 * Horizontal carousel for the church's recurring gatherings.
 * Keyboard: arrows and dots are real <button>s; the viewport is a labelled
 * region. There is no autoplay, so it never moves without user intent.
 */
export default function EventsCarousel({
  items,
  ctaLabel = "Ver programação",
  ctaTo = "/programacao",
  label = "Encontros da semana",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }
    const sync = (api) => {
      setScrollSnaps(api.scrollSnapList());
      onSelect(api);
    };
    sync(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", sync);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className="events-carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
    >
      <div className="events-carousel__viewport" ref={emblaRef}>
        <div className="events-carousel__container">
          {items.map((item) => (
            <div className="events-carousel__slide" key={item.title}>
              <EventCard
                title={item.title}
                day={item.day}
                location={item.location}
                image={item.image}
                ctaLabel={ctaLabel}
                ctaTo={ctaTo}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="events-carousel__controls">
        <div className="events-carousel__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`events-carousel__dot ${
                index === selectedIndex ? "is-active" : ""
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
              aria-current={index === selectedIndex}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
        <div className="events-carousel__arrows">
          <button
            type="button"
            className="events-carousel__arrow"
            aria-label="Slide anterior"
            disabled={!canScrollPrev}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
          >
            <LuArrowLeft aria-hidden="true" focusable="false" />
          </button>
          <button
            type="button"
            className="events-carousel__arrow"
            aria-label="Próximo slide"
            disabled={!canScrollNext}
            onClick={() => emblaApi && emblaApi.scrollNext()}
          >
            <LuArrowRight aria-hidden="true" focusable="false" />
          </button>
        </div>
      </div>
    </div>
  );
}
