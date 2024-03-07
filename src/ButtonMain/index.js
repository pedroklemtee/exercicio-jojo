import React, { useState } from "react";
import Formulario from "../Formulario";
import './ButtonMain.css';


const ButtonMain = () => {
    const [buttonType, setButtonType] = useState(true);
    const [hideTitle, setHideTitle] = useState(false);

    const handleButtonClick = () => {
        setButtonType(false);
        setHideTitle(true); // Adiciona classe para esconder o título
    };

    return (
        <div className="button-container">
            <h2 className={hideTitle ? "hidden" : ""}>Iniciar Formulário</h2>
            {buttonType ? (
                <button
                    id='image-button'
                    className={buttonType ? "" : "hide"}
                    onClick={handleButtonClick}
                >
                    Mostrar Formulário
                </button>
            ) : (
                <Formulario />
            )}
        </div>
    );
};

export default ButtonMain;