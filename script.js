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
    switch(operator) {
            case `+`:
                addition(firstNumber, secondNumber);
                break;
            case `-`:
                subtraction(firstNumber, secondNumber);
                break;
            case `*`:
                multiplication(firstNumber, secondNumber);
                break;
            case `/`:
                division(firstNumber, secondNumber);
                break;
    }
}

// console.log(addition(a,b));
// console.log(subtraction(a,b));
// console.log(multiplication(a,b));
// console.log(division(a,b));