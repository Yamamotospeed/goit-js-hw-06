const formEl = {
    resultValue: document.querySelector('#value'),
    counterDecrement: document.querySelector('[data-action="decrement"]'),
    counterIncrement: document.querySelector('[data-action="increment"]'),
}
let counterValue = 0;

console.dir(formEl.resultValue);

formEl.counterDecrement.addEventListener('click', onDecrementClick);

formEl.counterIncrement.addEventListener('click', onIncrementClick)

function onDecrementClick() {
    counterValue -= 1;
    console.log(counterValue);
    formEl.resultValue.textContent = `${counterValue}`;
}

function onIncrementClick() {
    counterValue += 1;
    console.log(counterValue);
    formEl.resultValue.textContent = `${counterValue}`;
}