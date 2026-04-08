import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "../components/layout";
import { BackToTop, ScrollToTop } from "../components/ui";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <AppRoutes />
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
