import React from 'react';

const Resultado = ({ personagemFinal }) => {
  return (
    <div>
      <h1>Resultado Final:</h1>
      {personagemFinal && (
        <div>
          <h2>{personagemFinal.nome}</h2>
          <img src={personagemFinal.img} alt={personagemFinal.nome} />
          <p>{personagemFinal.descricao}</p>
        </div>
      )}
    </div>
  );
};

export default Resultado;
