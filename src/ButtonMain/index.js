import React, { useState } from 'react';
import './ButtonMain.css';

const ButtonMain = () => {
    const [botaoVisivel, setBotaoVisivel] = useState(true);

    const handleClick = () => {
        console.log('Botão clicado!');
        setBotaoVisivel(false);
    };

    return (
        <div>
            {botaoVisivel && (
                <button id='image-button' onClick={handleClick}>
                    <img src='./imagens/button-main.png' id='image-button-style' draggable="false" />
                </button>
            )}
        </div>
    );
}

export default ButtonMain;
