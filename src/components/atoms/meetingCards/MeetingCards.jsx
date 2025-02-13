import "./MeetingCards.css";

import { useState } from "react";
import { 
    LuPopcorn, 
    LuPuzzle, 
    LuMusic, 
    LuBookOpen,  
    LuMessageCircle 
  } from "react-icons/lu";

import {PiHandsPrayingFill} from "react-icons/pi"

  const items = [
    { icon: <LuPopcorn size={40} />, title: "Lanche e comunhão", info: "Um momento de descontração onde colocamos o papo em dia, conhecemos melhor os visitantes e compartilhamos o lanche." },
    { icon: <LuPuzzle size={40} />, title: "Quebra-gelo", info: "Uma dinâmica rápida que acontece antes da Palavra para introduzir o assunto e deixar todos mais a vontade, mais familiarizados com o assunto." },
    { icon: <LuMusic size={40} />, title: "Louvor", info: "A música é um instrumento poderoso de adoração. Ela fala aos coração de um jeito especial e nos conecta com Deus, por isso é tão importantes." },
    { icon: <LuBookOpen size={40} />, title: "Estudo", info: "O líder estará pronto para abordar o tema da semana e repassar aos participantes uma Palavra inspira por Deus." },
    { icon: <PiHandsPrayingFill size={40} />, title: "Oração", info: "Por isso célula é lugar de orar a Deus, buscar intimidade com Ele, e interceder uns pelos outros." },
    { icon: <LuMessageCircle size={40} />, title: "Desafio", info: "Ao final de cada lição, você será inspirado a cumprir um desafio pensado para motivá-lo e aproximá-lo ainda mais de Deus." },
  ];

export default function MeetingCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="containerMeetingCard">
      <div className="grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="Meetingcard"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="icon">{item.icon}</span>
            <p className="Meetingcard-title">{item.title}</p>
            {hovered === index && (
              <div className="overlay">{item.info}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
