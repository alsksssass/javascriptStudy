import { add, sub, mul, div } from './calculator.js';

const displayInput = document.getElementById("display");
const numberButtons = document.querySelectorAll('.display_button');
const operatorButtons = document.querySelectorAll('.operator_button');
const calculateButton = document.getElementById("calculate_button");
const CButton = document.getElementById("C_button");
let a = null;
let b = null;
let currentOperator = null;

// display_button(0~9)
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        displayInput.value += buttonText;
    });
});

// operator_button(+,-,*,/)
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (displayInput.value === '') return;
        a = parseFloat(displayInput.value);
        currentOperator = e.target.textContent;
        displayInput.value = '';
    });
});

// =
calculateButton.addEventListener('click', () => {
    if (displayInput.value === '' || a === null || currentOperator === null) return;
    b = parseFloat(displayInput.value);

    let result;
    try {
        switch (currentOperator) {
            case '+':
                result = add(a, b);
                break;
            case '-':
                result = sub(a, b);
                break;
            case '*':
                result = mul(a, b);
                break;
            case '/':
                result = div(a, b);
                break;
            default:
                result = 'Error';
        }
    } catch (error) {
        result = error.message; // 예외 처리
    }

    displayInput.value = result;
    a = null;
    b = null;
    currentOperator = null;
});

// C
CButton.addEventListener('click', () => {
    displayInput.value = '';
    a = null;
    b = null;
    currentOperator = null;
});
