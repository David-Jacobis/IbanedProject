import "./MeetingCards.css";
import { useState } from "react";
import { meetingItems } from "../../../data/siteContent";

export default function MeetingCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="containerMeetingCard">
      <div className="grid">
        {meetingItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;

          return (
            <button
              key={item.title}
              type="button"
              className={`Meetingcard ${isActive ? "active" : ""}`}
              onClick={() =>
                setActiveIndex((current) => (current === index ? null : index))
              }
            >
              <span className="icon">
                <Icon size={40} />
              </span>
              <p className="Meetingcard-title">{item.title}</p>
              <div className={`overlay ${isActive ? "visible" : ""}`}>
                {item.info}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
