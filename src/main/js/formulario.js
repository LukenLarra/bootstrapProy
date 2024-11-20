document.addEventListener('DOMContentLoaded', () => {
    const correctCheckboxes = document.querySelectorAll('.correct-answer');
    const checkButton = document.querySelector('.btn-check');
    const checkboxes = document.querySelectorAll('.form-check-input');

    checkButton.addEventListener('click', () => {
        const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
        const allChecked = Array.from(correctCheckboxes).every(cb => cb.checked);

        if (allChecked) {
            colorOptions(checkboxes);
            triggerConfetti();
        } else if (!anyChecked) {
            alert('Selecciona todas las opciones por favor');
        } else {
            colorOptions(checkboxes);
        }
    });
});

function triggerConfetti() {
    confetti({
            particleCount: 700,
            spread: 360,
            startVelocity: 30,
            origin: { x: 0.5, y: 0.5 },
            ticks: 200,
            gravity: 0.5
    });
}

function colorOptions(checkboxes) {
    checkboxes.forEach(cb => {
        if (cb.checked) {
            if (cb.classList.contains('correct-answer')) {
                cb.parentElement.style.backgroundColor = '#28a745';
            } else {
                cb.parentElement.style.backgroundColor = 'red';
            }
        } else {
            cb.parentElement.style.backgroundColor = '';
        }
    });
}