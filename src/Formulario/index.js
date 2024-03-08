import React, { useState, useEffect } from 'react';
import Resultado from '../Resultado';
import Personagens from '../Personagens/Personagens';
import './index.css';

const Formulario = () => {
  const perguntas = [
    {
      pergunta: 'Qual dessas comidas você prefere?',
      alternativas: ['Strogonoff', 'Sushi', 'Feijoada', 'Pizza'],
    },
    {
      pergunta: 'O que você mais gosta de fazer?',
      alternativas: ['Esportes', 'Jogar Video Game', 'Cantar', 'Assistir a uma Série'],
    },
    {
      pergunta: 'Escolha um animal:',
      alternativas: ['Passaro', 'Cobra', 'Elefante', 'Sapo'],
    },
  ];

  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [questionarioConcluido, setQuestionarioConcluido] = useState(false);
  const [personagemFinal, setPersonagemFinal] = useState(null);
  const [resultadoFinal, setResultadoFinal] = useState('');

  useEffect(() => {
    const resultadoPersonagem = determinarPersonagem(respostas);
    setPersonagemFinal(resultadoPersonagem);
  }, [respostas]);

  useEffect(() => {
    if (questionarioConcluido && personagemFinal) {
      const resultadoFinalTexto = personagemFinal.nome || 'Personagem Padrão';
      setResultadoFinal(resultadoFinalTexto);
    }
  }, [questionarioConcluido, personagemFinal]);

  const determinarPersonagem = (respostas) => {
    const respostasArray = Object.values(respostas);
  
    if (respostasArray.length === 0) {
      return Personagens[0]; 
    }
  
    const contagemAlternativas = respostasArray.reduce((acc, resposta) => {
      if (typeof resposta === 'number') {
        acc[resposta] = (acc[resposta] || 0) + 1;
      }
      return acc;
    }, {});
  
    let alternativaMaisSelecionada = 0;
    let maiorContagem = 0;
  
    Object.keys(contagemAlternativas).forEach((alternativaIndex) => {
      const contagem = contagemAlternativas[alternativaIndex];
      if (contagem > maiorContagem) {
        maiorContagem = contagem;
        alternativaMaisSelecionada = parseInt(alternativaIndex, 10);
      }
    });
  
    let personagemEncontrado;
  
    if (alternativaMaisSelecionada === 0) {
      personagemEncontrado = Personagens[1];
    } else if (alternativaMaisSelecionada === 1) {
      personagemEncontrado = Personagens[2];
    } else if (alternativaMaisSelecionada === 2) {
      personagemEncontrado = Personagens[3];
    } else if (alternativaMaisSelecionada === 3) {
      personagemEncontrado = Personagens[4];
    } else {
      personagemEncontrado = Personagens[0]; 
    }
  
    return personagemEncontrado;
  };

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

  const reiniciarFormulario = () => {
    setIndicePergunta(0);
    setRespostas({});
    setQuestionarioConcluido(false);
    setPersonagemFinal(null);
    setResultadoFinal('');
  };

  return (
    <div className='container-personagens glow'>
      {questionarioConcluido ? (
        <Resultado personagem={personagemFinal} resultadoFinal={resultadoFinal} onReiniciar={reiniciarFormulario} />
      ) : (
        perguntas.map((pergunta, index) => (
          <div key={index} style={{ display: index === indicePergunta ? 'block' : 'none' }}>
            <div className='container-personagens__dentro'>
              <h1 id='h1-formulario'>{pergunta.pergunta}</h1>
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
                <button id='button-44' onClick={proximaPergunta}>Finalizar</button>
              ) : (
                <button id='button-33' onClick={proximaPergunta}>Próxima Pergunta</button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Formulario;
