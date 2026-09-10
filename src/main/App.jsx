import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "../components/layout";
import { BackToTop, ScrollToTop } from "../components/ui";
import SmoothScroll from "../components/providers/SmoothScroll";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="App">
          <ScrollToTop />
          <Header />
          <AppRoutes />
          <Footer />
          <BackToTop />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
