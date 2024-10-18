import "./Footer.css";
import React from "react";

import { Col, Row, Flex, Button, Space, Input } from "antd";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <Flex justify="center" align="center">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={12} md={6}>
            <Flex vertical justify="flex-start" align="start">
              <h3>
                <strong>ibaned</strong>
              </h3>
              <p>Copyright © 2024 IGREJA BATISTA ESTRELA DALVA.</p>
              <p>All rights reserved.</p>
              
              <p>(31) 2526-4248</p>
              <p>Av. Raul Mourão Guimarães, 740</p>
              <p>Palmeiras, Belo Horizonte - MG,</p>
              <p>30575-400</p>
              <p>ibaned@gmail.com</p>
            </Flex>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <Flex vertical justify="flex-start" align="start">
              <h4>Links rápidos</h4>
              <a href="/">HOME</a>
              <a href="/Sobre">SOBRE</a>
              <a href="/Ministerios">MINISTÉRIO</a>
              <a href="/Programacao">PROGRAMAÇÃO</a>
              <a href="/Celulas">CÉLULAS</a>
              <a href="/AssistirOnline">ASSISTA ONLINE</a>
            </Flex>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <Flex vertical justify="flex-start">
              <h4>Connect</h4>
              <Flex justify="space-around">
                <a
                  href="https://wa.me/553125264248"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatszapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a
                  href="https://www.facebook.com/denabi123"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/igreja_ibaned/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                  href="https://www.youtube.com/@IBANED"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" id="Youtube" />
                </a>
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Flex vertical justify="space-around">
              <h3>
                INSCREVA-SE PARA RECEBER AS ÚLTIMAS ATUALIZAÇÕES E NOTÍCIAS
              </h3>
              <Space.Compact style={{ width: "100%" }}>
                <Input
                  size="default"
                  placeholder="Seuemail@gmail.com"
                  className="custom-input"
                />
                <Button size="default">INSCREVA-SE</Button>
              </Space.Compact>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </footer>
  );
};

export default Footer;
