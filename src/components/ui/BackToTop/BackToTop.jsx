import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLenis } from "lenis/react";
import "./BackToTop.css";

const VISIBILITY_SCROLL_OFFSET = 280;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > VISIBILITY_SCROLL_OFFSET);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
