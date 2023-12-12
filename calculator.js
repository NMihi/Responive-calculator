let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerHTML === '0') {
        display.innerHTML = '';
    }
    display.innerHTML += value;
}

function clearDisplay() {
    display.innerHTML = '0';
}

function calculateResult() {
    display.innerHTML = eval(display.innerHTML);
}

function deleteLastCharacter() {
    let currentValue = display.innerHTML;
    if (currentValue.length > 0) {
        display.innerHTML = currentValue.slice(0, -1);
        if (display.innerHTML === '') {
            display.innerHTML = '0';
        }
    }
}