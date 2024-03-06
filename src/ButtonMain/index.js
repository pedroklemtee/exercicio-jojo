import React, { useState } from "react";
import Formulario from "../Formulario";
import './ButtonMain.css'

const ButtonMain = () => {
    const [buttonType, setButtonType] = useState(true);

    const handleButtonClick = () => {
        setButtonType(!buttonType);
    };

    return (
        <div>
            {buttonType ? (
                <div>
                    <button id='image-button'onClick={handleButtonClick}>
                    </button>
                </div>
            ) : (
                <Formulario/>
            )}
        </div>
    );
};

export default ButtonMain;
