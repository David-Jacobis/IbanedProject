import React from "react";
import "./AboutCard.css";

/**
 * Leader/profile row: photo beside a full biography. Built for longer bios
 * (name + a real paragraph) rather than a cramped narrow grid card — the
 * text column keeps a comfortable reading width no matter the container.
 * `reverse` flips photo and text (desktop only) for alternating rhythm in a
 * stacked list.
 */
export default function AboutCard({ img, title, text, reverse = false }) {
  return (
    <article className={`about-card ${reverse ? "about-card--reverse" : ""}`}>
      <div className="about-card-media">
        <img src={img} alt={title} loading="lazy" decoding="async" />
      </div>
      <div className="about-card-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
