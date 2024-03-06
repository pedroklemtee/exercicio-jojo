import React from 'react';
import Personagens from '../Personagens/Personagens';
import './index.css';
import { useState } from 'react';

const Formulario = () => {

  const perguntas = [
    {
      pergunta: 'Qual é a capital do Brasil?',
      alternativas: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    },
  ];

  const [indicePergunta, setIndicePergunta] = useState(0);

  console.log(indicePergunta)

  return (
    <div className='container-personagens'>
      {perguntas.map((pergunta, index) => (
        <div key={index}>
          <h1>{pergunta.pergunta}</h1>
          <div className='container-personagens__dentro'>
            {pergunta.alternativas.map((alternativa, optionIndex) => (
              <label key={optionIndex}>
                <input type='radio' name={`pergunta-${index}`} value={`opcao${optionIndex}`} />
                {alternativa}
              </label>
            ))}
            <button onClick={() => setIndicePergunta(indicePergunta + 1)}>Próxima Pergunta</button>
          </div>
        </div>
      ))}
    </div>
  );

};

export default Formulario;
