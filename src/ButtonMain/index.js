import React, { useState } from 'react';
import './ButtonMain.css';

const ButtonMain = () => {
    const [botaoVisivel, setBotaoVisivel] = useState(true);
    const [respostas, setRespostas] = useState({});

    const perguntas = [
        {
            pergunta: "Escolha um prato favorito:",
            opcoes: ["Pizza", "Hamburguer", "Sushi", "Strogonoff"]
        },
        {
            pergunta: "Qual sua atividade de lazer preferida:",
            opcoes: ["Ler", "Praticar esportes", "Jogar videogame", "Meditar"]
        },
        {
            pergunta: "Escolha um superpoder:",
            opcoes: ["Voar", "Invisibilidade", "Superforça", "Ler mentes"]
        }
    ];

    const handleButtonClick = () => {
        setBotaoVisivel(false);
    };

    const handleRespostaChange = (perguntaIndex, respostaIndex) => {
        setRespostas({
            ...respostas,
            [perguntaIndex]: respostaIndex
        });
    };

    const Resultado = () => {

        const resultado = "Personagem Aleatório";

        return (
            <div>
                <h2>Resultado:</h2>
                <p>Você é como {resultado}!</p>
            </div>
        );
    };

    return (
        <div>
            {botaoVisivel ? (
                <>
                    <h2>Iniciar Formulário:</h2>
                    <button id='image-button' onClick={handleButtonClick}>

                    </button>
                </>
            ) : (
                <>
                    {perguntas.map((pergunta, perguntaIndex) => (
                        <div key={perguntaIndex}>
                            <p>{pergunta.pergunta}</p>
                            {pergunta.opcoes.map((opcao, opcaoIndex) => (
                                <div key={opcaoIndex}>
                                    <input
                                        type="radio"
                                        id={`opcao${opcaoIndex}`}
                                        name={`pergunta${perguntaIndex}`}
                                        value={opcaoIndex}
                                        onChange={() => handleRespostaChange(perguntaIndex, opcaoIndex)}
                                    />
                                    <label htmlFor={`opcao${opcaoIndex}`}>{opcao}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button onClick={handleButtonClick}>
                        Enviar Respostas
                    </button>
                    <Resultado />
                </>
            )}
        </div>
    );
}

export default ButtonMain;
