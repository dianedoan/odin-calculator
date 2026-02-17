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

// variables for html display
let number1 = "";
let operator = "";
let number2 = "";

// get elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// updates the display with number1/number2 when the calculator's digit buttons are clicked
function updateDigit(digit) {
    // before operator button clicked
    if (operator === "") {
        number1 += digit;

        // display number
        display.textContent = number1;
    } else { // after operator button clicked
        number2 += digit;

        // display number
        display.textContent = number2;
    }
}

// calls operate function and displays result
function handleExpression() {
    // ensure two numbers and an operator have been clicked
    if (number1 && operator && number2) {
        // call operate function
        const result = operate(operator, Number(number1), Number(number2));

        // display calculated result
        display.textContent = result;

        // set variables
        number1 = result;
        number2 = "";
    }
}

// iterate through each button
buttons.forEach((button) => {
    // add a 'click' event listener for each button
    button.addEventListener("click", () => {
        const value = button.textContent;

        // clear button
        if (value === "C") {
            // display reset value
            display.textContent = 0;

            // reset variables
            number1 = "";
            operator = "";
            number2 = "";
            return;
        }

        // equals button
        if (value === "=") {
            // solve full expression
            handleExpression();

            // reset operator variable
            operator = "";
            return;
        }
        
        // operator buttons
        if (["+", "-", "*", "/"].includes(value)) {
            // solve full expression first if it exists
            handleExpression();

            // set value as operator
            operator = value;
            return;
        }
        
        // update display with digit
        updateDigit(value);
    })
});
