const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter();
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateCounter();
});

function updateCounter() {
    valueSpan.textContent = counterValue;
};