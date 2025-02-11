import "./Home.css";
import React from "react";
import ScrollLinked from "../atoms/scroll/Scroll";

import { motion } from "framer-motion";
import { Flex, Card, Col, Row } from "antd";
import {
  faCross,
  faPeopleRoof,
  faChurch,
  faTree,
  faEarthAmericas,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <React.Fragment>
      <ScrollLinked />
      <div className="content">
        <div className="StyledFlexHome">
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
        </div>
        <div className="Group2">
          <h4>QUEM SOMOS?</h4>
          <h1>
            <strong>DESCUBRA QUEM SOMOS</strong>
          </h1>
          <Row gutter={[32, 48]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <Card
                className="CardGroup2"
                style={{ backgroundColor: "#7ee787" }}
              >
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faCross}
                    size="2x"
                    className="CardIcon"
                    style={{ color: "#2ea043" }}
                  />
                  <h2>EXISTIMOS PARA A GLÓRIA DE</h2>
                  <h1>
                    <strong>DEUS</strong>
                  </h1>
                </div>
              </Card>
              <div
                className="CardGroup2Footer"
                style={{ backgroundColor: "#3fb950" }}
              ></div>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card
                className="CardGroup2"
                style={{ backgroundColor: "#ffa198" }}
              >
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faPeopleRoof}
                    size="2x"
                    className="CardIcon"
                    style={{ color: "#da3633" }}
                  />
                  <h2>E POR ISSO FAZEMOS DISCÍPULOS DE</h2>
                  <h1>
                    <strong>JESUS CRISTO</strong>
                  </h1>
                </div>
              </Card>
              <div
                className="CardGroup2Footer"
                style={{ backgroundColor: "#f85149" }}
              ></div>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Card className="CardGroup2">
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faChurch}
                    size="2x"
                    className="CardIcon"
                  />
                  <h2>INCLUINDO OS NA FAMÍLIA DA</h2>
                  <h1>
                    <strong>FÉ</strong>
                  </h1>
                </div>
              </Card>
              <div className="CardGroup2Footer"></div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                className="CardGroup2"
                style={{ backgroundColor: "#b9efff" }}
              >
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faTree}
                    size="2x"
                    className="CardIcon"
                    style={{ color: "#2cc8f7" }}
                  />
                  <Flex vertical>
                    <h2>DESENVOLVENDO SEUS DONS E</h2>
                    <h1>
                      <strong>MINISTÉRIOS</strong>
                    </h1>
                  </Flex>
                </div>
              </Card>
              <div
                className="CardGroup2Footer"
                style={{ backgroundColor: "#2cc8f7" }}
              ></div>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                className="CardGroup2"
                style={{ backgroundColor: "#DDD6FE" }}
              >
                <div className="CardContent">
                  <FontAwesomeIcon
                    icon={faEarthAmericas}
                    size="2x"
                    className="CardIcon"
                    style={{ color: "#A78BFA" }}
                  />
                  <h2>PARA A GLÓRIA GLOBAL DE</h2>
                  <h1>
                    <strong>DEUS</strong>
                  </h1>
                </div>
              </Card>
              <div
                className="CardGroup2Footer"
                style={{ backgroundColor: "#A78BFA" }}
              ></div>
            </Col>
          </Row>
        </div>
        <div className="StyledFlex">
          <div className="StyledFlex-Content">
            <h1>
              QUEREMOS <br />
              SERVIR O MUNDO
              <br /> AO NOSSO REDOR
            </h1>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="3x"
              className="CardIcon"
              style={{
                color: "#A78BFA",
                marginTop: "20px",
                alignSelf: "flex-start",
              }} // Estilizando as aspas
            />
            <p>
              Queremos servir o mundo ao nosso redor, pois fomos chamados a ser
              luz e sal na Terra (Mateus 5:13-14). A fé cristã nos ensina que o
              amor ao próximo é o maior mandamento depois de amar a Deus (Mateus
              22:37-39). Servir é um ato de obediência e gratidão, pois “o Filho
              do Homem não veio para ser servido, mas para servir” (Marcos
              10:45). Ao cuidar dos necessitados, estamos servindo ao próprio
              Cristo, como Ele disse: "Tudo o que fizerem a um destes meus
              pequeninos irmãos, a mim o fizeram" (Mateus 25:40). Nosso chamado
              é impactar vidas com gestos de compaixão, justiça e bondade. Assim
              como Jesus lavou os pés de seus discípulos (João 13:14-15),
              devemos seguir Seu exemplo de humildade e serviço. Em cada ato de
              amor, refletimos o coração de Deus, levando esperança e
              transformação ao mundo. Que possamos viver como instrumentos da
              Sua paz e justiça, sendo mãos e pés de Cristo em nosso cotidiano.
            </p>
            <FontAwesomeIcon
              icon={faQuoteRight}
              size="3x"
              className="CardIcon2"
              style={{
                color: "#A78BFA",
                marginTop: "20px",
                alignSelf: "flex-end",
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
