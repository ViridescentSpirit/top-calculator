let a = 6
let b = 3

let firstNumber = 0;
let secondNumber = 0;
let operator = ``;

function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division(a,b) {
    return a / b;
}

function operate(firstNumber, secondNumber, operator) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    
    switch(operator) {
            case `+`:
                return addition(firstNumber, secondNumber);
                break;
            case `-`:
                return subtraction(firstNumber, secondNumber);
                break;
            case `*`:
                return multiplication(firstNumber, secondNumber);
                break;
            case `/`:
                return division(firstNumber, secondNumber);
                break;
    }
}

const numButtons = document.querySelectorAll(`.numButton`);
const currentNumDisplay = document.querySelector(`.currentNumber`);
let currentNumber = ``;

numButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        appendNumber(button.textContent);
    });
});

function appendNumber(inputNumber) {
    currentNumDisplay.textContent = currentNumber;
    currentNumDisplay.textContent += inputNumber;
    currentNumber = currentNumDisplay.textContent;
};

const operButtons = document.querySelectorAll(`.operButton`);
const history = document.querySelector(`.history`);

operButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        if (firstNumber === 0) {
            operator = button.id;
            firstNumber = currentNumber;   
        } else {
            secondNumber = currentNumber;
            firstNumber = operate(firstNumber, secondNumber, operator);
            operator = button.id;
        }

        history.textContent = `${firstNumber}  ${operator}`;
        currentNumDisplay.textContent = firstNumber;
        currentNumber = ``;
    });
});
