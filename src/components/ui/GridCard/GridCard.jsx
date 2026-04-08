import React from "react";
import "./GridCard.css";

export default function GridCard({ title, image, text }) {
  return (
    <article className="grid-card-container">
      <div className="grid-card-header">
        <h2 className="grid-card-title">{title}</h2>
      </div>
      <div className="grid-card-body">
        <div className="grid-card-image-wrap">
          <img
            src={image}
            alt={title}
            className="grid-card-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid-card-copy">
          <p className="grid-card-text">{text}</p>
        </div>
      </div>
    </article>
  );
}
