const input = document.querySelector('#validation-input');

input.addEventListener('blur', validInput);

console.dir(input);

function validInput(event) {
    const element = event.currentTarget;
    const limit = parseInt(element.dataset.length, 10);
    console.dir(limit);
    console.log(element.value.length == limit)
    console.log(element.value.length);
    if (element.value.length == limit) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    }
    else {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}