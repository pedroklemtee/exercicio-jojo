// Resultado.js
import React from 'react';
import './index.css'

const Resultado = ({ personagem, resultadoFinal, onReiniciar }) => {
  return (
    <div>
      <h1 id='resultado-final-style'>Resultado Final:</h1>
      {personagem && (
        <div>
        <p id='personagem-style'>{resultadoFinal}</p>
          {personagem.img && <img src={personagem.img} alt={`Imagem de ${personagem.nome}`} />}
        </div>
      )}
      <p id='descricao'>{personagem.descricao}</p>
      <button id='button-55'onClick={onReiniciar}>Reiniciar</button>
    </div>
  );
};

export default Resultado;