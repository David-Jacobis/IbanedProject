import React from "react";
import './Button.css';

function Button(props){
    const handleClick = () => {
        // Você pode usar a função onClick passada como prop para realizar alguma ação
        // e usar o props.link para redirecionar para o link desejado.
        console.log("Botão clicado!");
        window.open(props.link, '_blank');
      };
    return(
    <button className="botao-sm" onClick={handleClick}>
      {props.icon && React.cloneElement(props.icon, { className: 'icon' })}
      {props.button}
      </button>
)
}

export default Button;
