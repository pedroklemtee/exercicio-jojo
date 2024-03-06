import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Formulario = () => {
  const perguntas = [
    {
      pergunta: 'Qual é a capital do Brasil?',
      alternativas: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    },
    // Adicione mais perguntas conforme necessário
  ];

  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [questionarioConcluido, setQuestionarioConcluido] = useState(false);
  const navigate = useNavigate();

  const handleRespostaChange = (perguntaIndex, alternativaIndex) => {
    setRespostas({
      ...respostas,
      [perguntaIndex]: alternativaIndex,
    });
  };

  const proximaPergunta = () => {
    if (indicePergunta === perguntas.length - 1) {
      setQuestionarioConcluido(true);
    } else {
      setIndicePergunta(indicePergunta + 1);
    }
  };

  useEffect(() => {
    if (questionarioConcluido) {
      navigate(`/resultado?respostas=${JSON.stringify(respostas)}`);
    }
  }, [questionarioConcluido, respostas, navigate]);

  return (
    <div className='container-personagens'>
      {perguntas.map((pergunta, index) => (
        <div key={index} style={{ display: index === indicePergunta ? 'block' : 'none' }}>
          <h1>{pergunta.pergunta}</h1>
          <div className='container-personagens__dentro'>
            {pergunta.alternativas.map((alternativa, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type='radio'
                  name={`pergunta-${index}`}
                  value={`opcao${optionIndex}`}
                  checked={respostas[index] === optionIndex}
                  onChange={() => handleRespostaChange(index, optionIndex)}
                />
                {alternativa}
              </label>
            ))}
            {index === perguntas.length - 1 ? (
              <button onClick={proximaPergunta}>Finalizar</button>
            ) : (
              <button onClick={proximaPergunta}>Próxima Pergunta</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formulario;
