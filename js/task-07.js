const fontSizeContol = document.querySelector('#font-size-control');
const textToControl = document.querySelector('#text');

console.dir(fontSizeContol);
console.dir(textToControl);

fontSizeContol.addEventListener('input', sizeChange);

function sizeChange(event) {
    const size = event.currentTarget.value
    textToControl.style.fontSize = `${size}px`;
    console.log(event.currentTarget.value);
    textToControl.style.color = "tomato"
    console.log(textToControl.style.fontSize);
}