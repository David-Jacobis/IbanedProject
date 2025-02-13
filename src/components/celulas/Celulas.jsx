import React from "react";
import "./Celulas.css";

import MeetingCards from '../atoms/meetingCards/MeetingCards'

const Celulas = () => {
  return (
    <>
      <div className="CelulaFlex">
        <h1>
          <strong>
            "E todos os dias, no templo e de casa em casa, não cessavam de
            ensinar e de pregar Jesus, o Cristo."
          </strong>
        </h1>
        <h1>
          <strong>Atos 5:42</strong>
        </h1>
      </div>
      <div className="ReuniaoFlex">
        <h1><strong>O que acontece em uma célula?</strong></h1>
    	<MeetingCards/>
      </div>
      <div className="ContactFlex"><h1><strong>QUERO ENTRAR EM UMA CÉLULA</strong></h1>
      <p>Entre em contato com o número: (31) 2526-4248 ou através do whatsapp clicando no botão ao lado.</p>
      </div>
    </>
  );
};

export default Celulas;
