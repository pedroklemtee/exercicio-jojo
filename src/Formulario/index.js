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
      pergunta: 'Se fosse para você ser um animal:',
      alternativas: ['Passaro', 'Cobra', 'Elefante', 'Sapo'],
    },
    // Adicione mais perguntas conforme necessário
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

    // Lógica para contar a quantidade de cada resposta
    const contagemAlternativas = respostasArray.reduce((acc, resposta) => {
      if (typeof resposta === 'number') {
        acc[resposta] = (acc[resposta] || 0) + 1;
      }
      return acc;
    }, {});

    // Determine o personagem com base nas escolhas mais frequentes
    const personagemEscolhido = Personagens.reduce((escolhido, personagem, index) => {
      if (contagemAlternativas[index] >= 1) {
        return personagem;
      }
      return escolhido;
    }, null);

    // Se não houver escolhas suficientes, escolha o primeiro personagem
    return personagemEscolhido || Personagens[0];
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
                <button id='button-44'onClick={proximaPergunta}>Finalizar</button>
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
