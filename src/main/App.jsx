import "./App.css";
import React from "react";
import Routes from "./Routes";
import Header from "../components/template/Header";
import Footer from "../components/template/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
