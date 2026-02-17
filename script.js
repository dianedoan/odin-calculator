// BASIC MATH OPERATIONS
// add 
function add(num1, num2) {
    return num1 + num2;
}

// subtract
function subtract(num1, num2) {
    return num1 - num2;
}

// multiply
function multiply(num1, num2){
    return num1 * num2;
}

// divide
function divide(num1, num2) {
    return num1 / num2;
}

// variables for html display
let number1 = "";
let operator = "";
let number2 = "";

// takes an operator and two numbers and calls one of the basic math operation functions on the two numbers
function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator ==="/") {
        return divide(num1, num2);
    } else {
        return "invalid operator";
    }
}
