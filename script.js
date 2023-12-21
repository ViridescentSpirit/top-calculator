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
let equalPressed = false;

operButtons.forEach(button => {
    button.addEventListener(`click`, () => {
        if (firstNumber === 0) {
            operator = button.id;
            firstNumber = currentNumber;   
        } else if(operator === `` && firstNumber != 0) {
            operator = button.id;
        } else if(equalPressed === true) {
            operator = button.id;
            firstNumber = currentNumber;
        } else {
            secondNumber = currentNumber;
            firstNumber = Math.round(operate(firstNumber, secondNumber, operator) * 100) / 100;
            operator = button.id;
        }

        history.textContent = `${firstNumber}  ${operator}`;
        currentNumDisplay.textContent = firstNumber;
        currentNumber = ``;
        equalPressed = false;
    });
});

const equalsButton = document.querySelector(`.equalsButton`);

equalsButton.addEventListener(`click`, () => {
    if(firstNumber === 0) {
        firstNumber = currentNumber;
        history.textContent = `${firstNumber}  =`
    } else {
        secondNumber = currentNumber;
        currentNumber = Math.round(operate(firstNumber, secondNumber, operator) * 100) / 100;
        history.textContent = `${firstNumber}  ${operator}  ${secondNumber}  =`;
    } 
    currentNumDisplay.textContent = currentNumber;
    firstNumber = currentNumber;
    equalPressed = true;
});

const clearButton = document.querySelector(`#clearButton`);

clearButton.addEventListener(`click`, () => {
    currentNumDisplay.textContent = ``;
    currentNumber = ``;
});

const clearEverythingButton = document.querySelector(`#clearEverythingButton`);

clearEverythingButton.addEventListener(`click`, () => {
    firstNumber = 0;
    secondNumber = 0;
    operator = ``;
    currentNumber = ``;
    currentNumDisplay.textContent = ``;
    history.textContent = ``;
});