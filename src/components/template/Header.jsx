import "./Header.css";
import logo from "../../assets/images/Ibaned.PNG";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <header className="header">
    <div className="container">
      <div className="flex">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/Sobre">SOBRE</Link>
            </li>
            <li>
              <Link to="/Ministerios">MINISTÉRIOS</Link>
            </li>
            {/* <li><a href="#">PROGRAMAÇÃO</a></li> */}
            <li>
              <Link to="/Celulas">CÉLULAS</Link>
            </li>
            <li>
              <Link to="/AssistirOnline">ASSISTIR ONLINE</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
