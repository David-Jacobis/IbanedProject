import "./Header.css";
import { Flex } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import logo from "../../assets/images/IbanedIcon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setIsMobile] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2, // Define o intervalo entre a animação dos itens
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Verifica o tamanho da tela no carregamento
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(true); // Abre o menu automaticamente para telas maiores
      }
    };

    handleResize(); // Checa o tamanho da tela no primeiro carregamento
    window.addEventListener("resize", handleResize); // Atualiza no resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <Flex justify="space-around" align="center" className="header-content">
        <Link to="/">
          <motion.img
            src={logo}
            id="logo"
            alt="logo"
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
        <MenuOutlined
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-icon"
        />
        <motion.nav
          className={`menu ${menuOpen ? "active" : ""}`}
          initial="hidden" // Estado inicial
          animate={menuOpen ? "visible" : "hidden"} // Define o estado de acordo com o menu
          variants={menuVariants} // Aplica a animação para o container do menu
        >
          <motion.div variants={itemVariants}>
            <Link to="/">HOME</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/Sobre">SOBRE</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/Ministerios">MINISTÉRIOS</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/Programacao">PROGRAMAÇÃO</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/Celulas">CÉLULAS</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link to="/AssistirOnline">ASSISTIR ONLINE</Link>
          </motion.div>
        </motion.nav>
      </Flex>
    </header>
  );
};

export default Header;
