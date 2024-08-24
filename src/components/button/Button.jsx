import React from "react";
import "./Button.css";

function Button(props) {
  const handleClick = () => {
    console.log("Botão clicado!");
    window.open(props.link, "_blank");
  };
  return (
    <button className="botao-sm" onClick={handleClick}>
      {props.icon && React.cloneElement(props.icon, { className: "icon" })}
      {props.button}
    </button>
  );
}

export default Button;
