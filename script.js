let display = document.getElementById("display");

// Function to append values to the display
function appendToDisplay(value) {
    // Prevent multiple consecutive operators (e.g., "++" or "**")
    let lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
        return; // Prevent adding operator after an operator
    }
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate the expression
function calculate() {
    try {
        // Use a safer evaluation method instead of eval()
        let result = Function('"use strict";return (' + display.value + ')')();
        display.value = result;
    } catch (error) {
        alert("Invalid expression!");
        display.value = "";
    }
}
