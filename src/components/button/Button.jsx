import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  const isExternalLink = props.link.startsWith("http");

  const handleClick = () => {
    console.log("Botão clicado!");
    window.open(props.link, "_blank");
  };
  return isExternalLink ? (
    <button className="botao-sm" onClick={handleClick}>
      {props.icon && React.cloneElement(props.icon, { className: "icon" })}
      {props.button}
    </button>
  ) : (
    <Link to={props.link}>
      <button className="botao-sm">
        {props.icon && React.cloneElement(props.icon, { className: "icon" })}
        {props.button}
      </button>
    </Link>
  );
}

export default Button;
