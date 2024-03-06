import React, { useState } from "react";
import './index';

const Formulario = () => {
    const [answers, setAnswers] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
    });

    const handleAnswerChange = (question, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question]: answer,
        }));
    };

    const handleSubmit = () => {
        // Lógica para determinar o personagem com base nas respostas
        const character = determineCharacter(answers);
        console.log("Personagem selecionado:", character);
    };

    const determineCharacter = (answers) => {
        // Lógica para atribuir personagens com base nas respostas
        // Exemplo fictício:
        if (
            answers.question1 === "estrogonofe" &&
            answers.question2 === "banana" &&
            answers.question3 === "maça" &&
            answers.question4 === "beterraba"
        ) {
            return "Personagem A";
        } else {
            return "Personagem B";
        }
    };

    return (
        <div>
            <h2>Pergunta 1: Qual é o seu prato favorito?</h2>
            <label>
                <input
                    type="radio"
                    value="estrogonofe"
                    checked={answers.question1 === "estrogonofe"}
                    onChange={() => handleAnswerChange("question1", "estrogonofe")}
                />
                Estrogonofe
            </label>
            {/* Outras alternativas da pergunta 1... */}

            {/* Perguntas 2, 3 e 4 com suas alternativas... */}

            <button onClick={handleSubmit}>Verificar Personagem</button>
        </div>
    );
};

export default Formulario;
