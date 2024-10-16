import "./Home.css";
import React from "react";
import VideoSemear from "../../assets/images/Biblia.MP4";
import imagemTeste from "../../assets/images/Intercecao.jpg";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Flex, Card, Col, Row, Button } from "antd";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [isMuted, setIsMuted] = useState(true); // Estado para controlar o som
  const videoRef = useRef(null); // Referência para o vídeo

  // Função para alternar o som
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <React.Fragment>
      <div className="content">
        <div
          className="VideoCard-Wrapper"
          style={{ position: "relative", width: "100%", height: "70vh" }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover", // Coloca o vídeo no fundo
            }}
          >
            <source src={VideoSemear} type="video/mp4" />
          </video>

          <button
            onClick={toggleMute}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 2, // Coloca o botão acima do vídeo
            }}
          >
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
          <Flex
            className="Flex-Text-Wrap MobileCenter"
            vertical
            justify="flex-start"
            align="flex-start"
            style={{
              zIndex: 1,
              position: "relative",
              height: "100%",
              padding: "24px 44px",
            }}
            gap="middle"
          >
            <h3>BEM-VINDO À NOSSA IGREJA</h3>
            <h1>2024 É O ANO DE SEMEAR</h1>
            <Flex
              vertical
              justify="center"
              align="flex-start"
              className="Flex-Text-Content"
            >
              <p>
                Porque o que semeia para a sua própria carne da carne colherá
                corrupção mas o que semeia para o Espírito do Espírito colherá
                vida eterna.E não nos cansemos de fazer o bem, porque a seu
                tempo ceifaremos, se
              </p>
              <p>
                não desfalecermos.Por isso, enquanto tivermos oportunidade,
                façamos o bem a todos, mas principalmente aos da família da fé.
              </p>
              <p>Gálatas 6:8-10</p>
            </Flex>
            <motion.a
              className="Motionbutton"
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/553125264248"
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer"
            >
              <span className="ButtonContent">
                <FontAwesomeIcon icon={faWhatsapp} />
                MANDE SUA MENSAGEM
              </span>
            </motion.a>
          </Flex>
        </div>
        <div className="Group2">
          <h4>QUEM SOMOS?</h4>
          <h1>
            <strong>DESCUBRA QUEM SOMOS</strong>
          </h1>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <Card className="CardGroup2">
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2x"
                    className="CardIcon"
                  />
                  <h2>
                    <strong>SOBRE NÓS</strong>
                  </h2>
                  <p>
                    Raízes e Tradições Explore a trajetória e os marcos
                    importantes que moldaram nossa igreja ao longo dos anos.
                  </p>
                </div>
              </Card>
              <div className="CardGroup2Footer"></div>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card className="CardGroup2">
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2x"
                    className="CardIcon"
                  />
                  <h2>
                    <strong>FAÇA PARTE</strong>
                  </h2>
                  <p>
                    Participe e Cresça Conosco. Conheça as oportunidades de
                    envolvimento e descubra como você pode se integrar à nossa
                    família espiritual.
                  </p>
                </div>
              </Card>
              <div className="CardGroup2Footer"></div>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card className="CardGroup2">
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2x"
                    className="CardIcon"
                  />
                  <h2>
                    <strong>NOSSA MISSÃO</strong>
                  </h2>
                  <p>
                    Unidos na Fé e no Amor. Descubra os objetivos e valores que
                    guiam nossa comunidade e como buscamos fazer a diferença no
                    mundo.
                  </p>
                </div>
              </Card>
              <div className="CardGroup2Footer"></div>
            </Col>
          </Row>
          <Flex vertical>
            <h2>Sub-headline</h2>
            <h1>
              <strong>AMOR E COMPAIXÃO</strong>
              <p>
                O amor, na Bíblia, é a base dos mandamentos, representado pelo
                amor a Deus e ao próximo (Mateus 22:37-39). Ele é paciente,
                bondoso e sacrificial (1 Coríntios 13:4-7), exemplificado pelo
                sacrifício de Jesus por amor à humanidade (João 3:16). A
                compaixão é a sensibilidade às necessidades dos outros, levando
                à ação, como demonstrado por Jesus ao curar e ajudar aqueles que
                sofriam (Mateus 9:36). Ambos são reflexos do caráter de Deus e
                devem ser praticados pelos cristãos (Colossenses 3:12).
              </p>
            </h1>
          </Flex>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="ImgCardCouple"
                  alt="example"
                  src={imagemTeste}
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Button>SAIBA MAIS</Button>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="ImgCardGroup"
                  alt="example"
                  src={imagemTeste}
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="ImgCardCouple"
                  alt="example"
                  src={imagemTeste}
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
