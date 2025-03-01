import React from "react";
import "./Programacao.css";
import ScrollLinked from "../atoms/scroll/Scroll";
import Imagem from "../../assets/images/2025  ANO DE fazer.png";
import Semanas from "../../assets/images/TE AGRADEÇO - KLEBER LUCAS.png"
import Oracao from "../../assets/images/oração.png"
import Sow from "../../assets/images/SowTeste.png"

import { Flex } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Programacao = () => {
  return (
    <React.Fragment>
      <ScrollLinked/>
      <div className="programacao-content">
        <Flex vertical justify="center" align="center">
          <h3>NOSSA PROGRAMAÇÃO</h3>
          <h1>JUNTE-SE A NÓS E FAÇA </h1>
          <h1>PARTE DE ALGO INCRÍVEL</h1>
        </Flex>
        <div className="card">
          {/* Texto */}
          <div className="card-text">
            <h3><strong>CULTO 30 SEMANAS</strong></h3>
            <h5> <FontAwesomeIcon icon={faClock} /> TODA QUARTA-FEIRA 20HRS</h5>
            <h5> <FontAwesomeIcon icon={faLocationDot} /> Av. Raul Mourão Guimarães, 740</h5>
            <h5>Palmeiras, Belo Horizonte</h5>
          </div>

          {/* Imagem */}
          <div className="card-image">
            <img src={Semanas} alt="Imagem do Card" />
          </div>
        </div>
        <div className="card">
          {/* Texto */}
          <div className="card-text">
            <h3><strong>CULTO DE ORAÇÃO</strong></h3>
            <h5> <FontAwesomeIcon icon={faClock} /> TODA QUINTA-FEIRA 20HRS</h5>
            <h5> <FontAwesomeIcon icon={faLocationDot} /> Av. Raul Mourão Guimarães, 740</h5>
            <h5>Palmeiras, Belo Horizonte</h5>
          </div>

          {/* Imagem */}
          <div className="card-image">
            <img src={Oracao} alt="Imagem do Card" />
          </div>
        </div>

        <div className="card">
          {/* Texto */}
          <div className="card-text">
            <h3><strong>CULTO SOW</strong></h3>
            <h5> <FontAwesomeIcon icon={faClock} /> TODO SÁBADO 19:30HRS</h5>
            <h5> <FontAwesomeIcon icon={faLocationDot} /> Av. Raul Mourão Guimarães, 740</h5>
            <h5>Palmeiras, Belo Horizonte</h5>
          </div>

          {/* Imagem */}
          <div className="card-image">
            <img src={Sow} alt="Imagem do Card" />
          </div>
        </div>

        <div className="card">
          {/* Texto */}
          <div className="card-text">
            <h3><strong>CULTOS DOMINICAIS</strong></h3>
            <h5> <FontAwesomeIcon icon={faClock} /> TODO DOMINGO 10 E 18HRS</h5>
            <h5> <FontAwesomeIcon icon={faLocationDot} /> Av. Raul Mourão Guimarães, 740</h5>
            <h5>Palmeiras, Belo Horizonte</h5>
          </div>

          {/* Imagem */}
          <div className="card-image">
            <img src={Imagem} alt="Imagem do Card" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Programacao;
