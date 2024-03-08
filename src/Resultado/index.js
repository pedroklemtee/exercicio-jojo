// Resultado.js
import React from 'react';

const Resultado = ({ personagem, resultadoFinal, onReiniciar }) => {
  return (
    <div>
      <h1>Resultado Final:</h1>
      {personagem && (
        <div>
          <p>{personagem.descricao}</p>
          {personagem.img && <img src={personagem.img} alt={`Imagem de ${personagem.nome}`} />}
        </div>
      )}
      <p>{resultadoFinal}</p>
      <button id='button-55'onClick={onReiniciar}>Reiniciar</button>
    </div>
  );
};

export default Resultado;
