import Home from "../components/home/Home";
import Sobre from "../components/sobre/Sobre";
import { Routes, Route } from "react-router-dom";
import Celulas from "../components/celulas/Celulas";
import Ministerios from "../components/ministerios/Ministerios";
import Programacao from "../components/programacao/Programacao";

const Rotas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Ministerios" element={<Ministerios />} />
      <Route path="/Programacao" element={<Programacao />} />
      <Route path="/Celulas" element={<Celulas/>} />
    </Routes>
  );
};

export default Rotas;
