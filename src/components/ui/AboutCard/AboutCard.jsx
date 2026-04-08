import React from "react";
import "./AboutCard.css";

export default function AboutCard({ img, title, text }) {
  return (
    <article className="about-card">
      <img
        src={img}
        alt={title}
        className="about-card-image"
        loading="lazy"
        decoding="async"
      />
      <div className="about-card-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
