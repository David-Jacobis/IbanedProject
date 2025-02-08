import React from "react";
import "./Programacao.css";
import Imagem from "../../assets/images/Avalanche.jpg";
import { Flex} from "antd";

const Programacao = () => {
  return (
    <React.Fragment>
      <div className="programacao-content">
        <Flex vertical justify="center" align="center">
          <h3>NOSSA PROGRAMAÇÃO</h3>
          <h1>JUNTE-SE A NÓS E FAÇA </h1>
          <h1>PARTE DE ALGO INCRÍVEL</h1>
        </Flex>
        <div className="card">
      {/* Texto */}
      <div className="card-text">
        <h2>CULTO 30 SEMANAS</h2>
        <h3>QUARTAS-FEIRAS 20HRS</h3>
        <p>
          Este é um card simples com um texto e uma imagem ao lado. Ele é responsivo e se ajusta ao tamanho da tela.
        </p>
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
