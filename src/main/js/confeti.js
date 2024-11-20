document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.correct-answer');
    const checkButton = document.querySelector('.btn-check');

    checkButton.addEventListener('click', () => {
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);

        if (allChecked) {
            triggerConfetti();
        } else if (!anyChecked) {
            alert('Selecciona todas las opciones por favor');
        } else {
            alert('Por favor, selecciona todas las respuestas correctas');
        }
    });
});

function triggerConfetti() {
    confetti({
        particleCount: 500,
        spread: 160,
        origin: { y: 0.8 }
    });
}