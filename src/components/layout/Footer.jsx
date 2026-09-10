import "./Footer.css";
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  contactInfo,
  navigationLinks,
  socialLinks,
} from "../../data/siteContent";

const iconById = {
  whatsapp: faWhatsapp,
  facebook: faFacebookF,
  instagram: faInstagram,
  youtube: faYoutube,
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <section className="footer-column">
          <h3>{contactInfo.name}</h3>
          <p>Copyright © 2026 Igreja Batista Estrela Dalva.</p>
          <p>{contactInfo.phone}</p>
          {contactInfo.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>{contactInfo.email}</p>
        </section>

        <section className="footer-column">
          <h4>Links rápidos</h4>
          {navigationLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.path}>
                {link.label}
              </Link>
            )
          )}
        </section>

        <section className="footer-column">
          <h4>Conecte-se</h4>
          <ul className="social-row">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ "--brand": link.brand }}
                  aria-label={`${link.label} da IBANED (abre em nova aba)`}
                  title={link.label}
                >
                  <FontAwesomeIcon icon={iconById[link.id]} aria-hidden="true" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-column">
          <h4>Receba novidades</h4>
          <p>
            Fale com a igreja pelo WhatsApp ou acompanhe nossa programação nas
            redes para saber dos próximos encontros.
          </p>
          <a
            className="footer-cta"
            href="https://wa.me/553125264248"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar em contato
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
