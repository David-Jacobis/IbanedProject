import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header } from "../components/layout";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
