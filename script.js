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
let number1 = "0";
let operator = "";
let number2 = "";
let calculated = false;


// get elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// updates the display with number1/number2 when the calculator's digit buttons are clicked
function updateDigit(digit) {
    // reset variables when a digit is pressed if calculation has been made previously
    if (calculated) {
        number1 = "0";
        operator = "";
        number2 = "";

        // mark as not calculated
        calculated = false;
    }

    // set digit as number1 before operator button is clicked
    if (operator === "") {
        number1 += digit;

        // display number
        display.textContent = number1;

    } else { // set digit as number2 after operator button is clicked
        number2 += digit;

        // display number
        display.textContent = number2;
    }
}

// calls operate function and displays result
function handleExpression() {
    // ensure two numbers and an operator have been clicked
    if (number1 && operator && number2) {
        // check if dividing by 0
        if (operator === "/" && number2 === "0") {
            // display error message
            display.textContent = "Cannot divide by 0";
            
            // reset variables
            number1 = "0";
            operator = "";
            number2 = "";

        } else {
            // call operate function
            const result = operate(operator, Number(number1), Number(number2));

            // convert result to string and remove decimals
            const resultStr = result.toString().replace('.', '');
            // check length of result
            if (resultStr.length >= 15) {
                // round result to 15 decimal points to prevent display overflow
                const roundedResult = result.toFixed(15);

                // display calculated result
                display.textContent = roundedResult;

            } else {
                // display calculated result
                display.textContent = result;
            }

            // set variables
            number1 = result;
            number2 = "";
        }
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
            number1 = "0";
            operator = "";
            number2 = "";

            // mark as not calculated
            calculated = false;
            return;
        }

        // equals button
        if (value === "=") {
            // solve full expression
            handleExpression();

            // reset operator variable
            operator = "";

            // mark as calculated
            calculated = true;
            return;
        }
        
        // operator buttons
        if (["+", "-", "*", "/"].includes(value)) {
            // if not calculated solve full expression first if it exists
            if (!calculated) {
                handleExpression();
            }

            // set value as operator
            operator = value;

            // mark as not calculated 
            calculated = false;
            return;
        }
        
        // update display with digit
        updateDigit(value);
    })
});
