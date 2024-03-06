import React, { useState } from "react";
import Formulario from "../Formulario";
import './ButtonMain.css';

const ButtonMain = () => {
    const [buttonType, setButtonType] = useState(true);

    const handleButtonClick = () => {
        setButtonType(false); 
    };

    return (
        <div>
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
