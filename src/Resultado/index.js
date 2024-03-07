// Resultado.js
import React from 'react';

const Resultado = ({ personagem, resultadoFinal, onReiniciar }) => {
  return (
    <div>
      <h1>Resultado Final:</h1>
      {personagem && (
        <div>
          <h2>{personagem.nome}</h2>
          {personagem.img && <img src={personagem.img} alt={`Imagem de ${personagem.nome}`} />}
          <p>{personagem.descricao}</p>
        </div>
      )}
      <p>{resultadoFinal}</p>
      <button onClick={onReiniciar}>Reiniciar</button>
    </div>
  );
};

export default Resultado;
