let display = document.getElementById('display');
let currentNumber = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendToDisplay(value) {
    // Check if the value is an operator
    if (['+', '-', '*', '/'].includes(value)) {
        if (operator === '') {
            operator = value;
            firstOperand = parseFloat(currentNumber);
            currentNumber = '';
        } else {
            calculate(); // calculate the previous operation if a new operator is pressed
            operator = value;
        }
    } else {
        currentNumber += value;
        display.value = currentNumber;
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
}

function calculate() {
    if (operator === '' || currentNumber === '') return;

    secondOperand = parseFloat(currentNumber);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
            break;
        default:
            result = 'Error';
    }

    display.value = result;
    currentNumber = result.toString();
    firstOperand = result;
    secondOperand = '';
    operator = '';
}
