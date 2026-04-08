import { Navigate, Route, Routes } from "react-router-dom";
import {
  CelulasPage,
  HomePage,
  MinisteriosPage,
  ProgramacaoPage,
  SobrePage,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/ministerios" element={<MinisteriosPage />} />
      <Route path="/programacao" element={<ProgramacaoPage />} />
      <Route path="/celulas" element={<CelulasPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
