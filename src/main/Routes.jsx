import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Sobre from "../components/sobre/Sobre";
import Ministerios from "../components/ministerios/Ministerios";

const Rotas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Ministerios" element={<Ministerios />} />
    </Routes>
  );
};

export default Rotas;
