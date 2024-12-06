// Correct answers object for verification
const correctAnswers = {
    respuesta1: 'Matricular el TFG, Subir la documentación, Escoger fecha para la defensa',
    respuesta2: 'A falta de 3 optativas por aprobar (210 créditos)',
    respuesta3: 'Resolucion de preguntas',
    respuesta4: 'Que consolides lo que sabes y lo apliques en un proyecto original, relacionado con tu carrera',
    respuesta5: 'El tribunal de evaluación',
    respuesta6: 'Sin duda alguna'
};

function checkAnswer() {
    const results = [];
    let correctCount = 0;
    let unanswered = false; // Flag to check unanswered questions

    // Iterate through each question in the correctAnswers object
    for (const [questionName, correctValue] of Object.entries(correctAnswers)) {
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

        // Check if the question is unanswered
        if (!selectedOption) {
            unanswered = true;
            break; // Stop further checks if one is unanswered
        }

        // Compare selected answer with the correct one
        if (selectedOption.value === correctValue) {
            correctCount++;
            results.push({ question: questionName, result: 'correcto' });
        } else {
            results.push({ question: questionName, result: 'incorrecto' });
        }
    }

    // Display alert if there are unanswered questions
    if (unanswered) {
        document.getElementById('alerta').textContent = 'Por favor, responde todas las preguntas.';
        return;
    } else {
        document.getElementById('alerta').textContent = ''; // Clear previous alerts
    }

    // Display results
    displayResults(correctCount, results);
}

function displayResults(correctCount, results) {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container', 'mt-4', 'text-center');

    // Create result message based on the number of correct answers
    let resultMessage = '';
    if (correctCount >= 4) {
        resultMessage = `¡Felicidades! Has acertado ${correctCount} preguntas. Estás bastante informado sobre el tema. <b>MUCHA SUERTE.</b>`;
        triggerConfetti();
    } else if (correctCount >= 2) {
        resultMessage = `Has acertado ${correctCount} preguntas. Algo has leído, pero vuélvetelo a mirar por si acaso.`;
    } else {
        resultMessage = `Has acertado ${correctCount} preguntas. Anda ponte a leer o vete a hacer algo productivo.`;
    }

    // Create detailed results list
    const resultsList = document.createElement('ul');
    resultsList.classList.add('list-unstyled', 'mt-3');
    results.forEach((result, index) => {
        const li = document.createElement('li');
        li.innerHTML = `Pregunta ${index + 1}: ${result.result === 'correcto' ? '✓ Correcto' : '✗ Incorrecto'}`;
        li.classList.add(result.result === 'correcto' ? 'text-success' : 'text-danger');
        resultsList.appendChild(li);
    });

    // Create reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reintentar Cuestionario';
    resetButton.classList.add('btn', 'btn-primary', 'mt-3');
    resetButton.addEventListener('click', resetForm);

    // Assemble result container
    resultContainer.innerHTML = `<h3>${resultMessage}</h3>`;
    resultContainer.appendChild(resultsList);
    resultContainer.appendChild(resetButton);

    // Remove any existing results and add the new ones
    const existingResults = document.querySelector('.result-container');
    if (existingResults) {
        existingResults.remove();
    }
    document.querySelector('form').appendChild(resultContainer);
}

function resetForm() {
    // Uncheck all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });

    // Remove results container
    const resultContainer = document.querySelector('.result-container');
    if (resultContainer) {
        resultContainer.remove();
    }

    // Clear alert messages
    document.getElementById('alerta').textContent = '';
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
}

// Add event listener to the check answers button
document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.querySelector('.btn-check');
    checkButton.addEventListener('click', checkAnswer);
});