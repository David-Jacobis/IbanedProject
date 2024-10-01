import "./Home.css";
import React from "react";
import { Divider, Flex, Card, Col, Row } from "antd";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "../button/Button";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import Video from "../../assets/images/Biblia.MP4";

// import { Row, Col } from "antd";

function Home() {
  return (
    <React.Fragment>
      <div className="content">
        <Divider />
        <div className="Group2">
          <h4>QUEM SOMOS?</h4>
          <h1><strong>DESCUBRA QUEM SOMOS</strong></h1>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <Card size="default" className="CardGroup2">
                <Flex vertical justify="start" align="center">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  <h2><strong>SOBRE NÓS</strong></h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, dolorum aliquam architecto quidem facere saepe ipsa
                    voluptate officiis dolorem laborum et eos atque, sapiente
                    omnis veritatis ipsam earum at itaque.
                  </p>
                </Flex>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="default" className="CardGroup2">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                <h2><strong>SOBRE NÓS</strong></h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, dolorum aliquam architecto quidem facere saepe ipsa
                  voluptate officiis dolorem laborum et eos atque, sapiente
                  omnis veritatis ipsam earum at itaque.
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card size="default" className="CardGroup2">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                <h2><strong>SOBRE NÓS</strong></h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, dolorum aliquam architecto quidem facere saepe ipsa
                  voluptate officiis dolorem laborum et eos atque, sapiente
                  omnis veritatis ipsam earum at itaque.
                </p>
              </Card>
              <div className="CardGroup2Footer"></div>
            </Col>
          </Row>
        </div>
        {/* <div className="box1">
                <div className="text-div">
                    <h1>Semear</h1>
                    <h3>O ano de 2024 é o ano de Semear</h3>
                    <p>
                    ⁸ Quem semeia para a sua carne, da carne colherá destruição; mas quem semeia para o Espírito, do Espírito colherá a vida eterna.
                    ⁹ E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos.
                    ¹⁰ Portanto, enquanto temos oportunidade, façamos o bem a todos, especialmente aos da família da fé.
                    <br/>
                    Gálatas 6:8-10
                    </p>
                    <p>Venha conosco neste ano e participe dos nossos cultos!</p>
                </div>
                <div className="button1">
                    <Button 
                    icon={<WhatsAppIcon fontSize="large" />}
                    button="Mande sua Mensagem" 
                    link="https://wa.me/553125264248?text=Vim%20atrav%C3%A9s%20do%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20ano%20Semear."/>
                </div>
            </div>
        <Row justify="center">
          <Col sm={12} md={12} lg={24}>
            <div className="video-container">
              <video controls autoPlay loop>
                <source src="movie.ogg" type="video/ogg" />
                <source src={Video} type="video/mp4" />
              </video>
              <div className="caption">
                <h1>Semear</h1>
              </div>
              <div className="button1">
                <Button
                  icon={<WhatsAppIcon fontSize="large" />}
                  button="Mande sua Mensagem"
                  link="https://wa.me/553125264248?text=Vim%20atrav%C3%A9s%20do%20Site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20ano%20Semear."
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col sm={6} md={6} lg={6}>
            <div className="box2">
              <div className="text-div">
                <h1>Veja nossa Programação</h1>
                <p>
                  Abraçe a oportunidade de estar em comunhão com a igreja de
                  Cristo.
                </p>
                <p>
                  Confira nossos cronogramas e realize seu planejamento para
                  poder participar.
                </p>
                <span>
                  <strong>Segunda | 19h</strong>
                </span>
                <p>
                  Acontece aqui em nosso prédio o programa Valorizando Vidas,
                  <br /> voltado para quem precisa de ajuda em relação a vicíos
                  e compulsões.
                </p>
                <span>
                  <strong>Quarta | 20h</strong>
                </span>
                <p>
                  Acontece o culto 30 semanas, venha participar e seja
                  surpreendido pelo Espírito Santo.
                </p>
                <span>
                  <strong>Domingo | 10:30h & 18h</strong>
                </span>
                <p>Acontece aqui em nosso prédio o culto de Domingo</p>
                <div className="spanlink">
                  <span>
                    <strong>
                      Assista a transmissão dos cultos de domingo no Youtube
                    </strong>
                  </span>
                  <div className="button1">
                    <Button
                      icon={<YouTubeIcon fontSize="large" />}
                      button="Assista Aqui"
                      link="https://www.youtube.com/@IBANED"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="box3">
          <div className="text-div">
            <h1>Intercessão</h1>
            <h3>Participe do nosso ministério de Intercessão</h3>
            <p>
              “Todavia atende à oração do teu servo, e à sua súplica, ó Senhor
              meu Deus, para ouvires o clamor e a oração que o teu servo faz
              perante ti hoje; […] e ouve a súplica do teu servo, e do teu povo
              Israel, quando orarem voltados para este lugar; sim, ouve tu no
              lugar da tua habitação, nos céus; ouve, e perdoa.”
              <br />1 Reis 8:28-30
            </p>
          </div>
        </div>

        <div className="box4">
          <div className="text-div">
            <h1>Avalanche</h1>
            <h3>Participe do nosso ministério de Lutas</h3>
            <p>
              “Assim, quer vocês comam, quer bebam, quer façam qualquer outra
              coisa, façam tudo para a glória de Deus.”
              <br />
              1Coríntios 10:31
            </p>
          </div>
          <div className="button1">
            <Button
              button="Cadastre-se"
              link="https://docs.google.com/spreadsheets/d/1GE1MpSpV3lC-ZLG8JDLJmZ_JqIXWAIQ5B23afzMT84g/edit#gid=0"
            />
          </div>
        </div>

        <div className="box5">
          <div className="text-div">
            <h1>Conheça nossos Ministérios</h1>
          </div>
          <div className="button1">
            <Button button="Conheça Aqui" link="/Ministerios" />
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default Home;
