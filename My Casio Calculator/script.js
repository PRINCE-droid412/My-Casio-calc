const displayField = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('input[type="button"]');

// Attach event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const buttonValue = event.target.value;

    // Clear button: Reset the display
    if (buttonValue.toLowerCase() === 'clear') {
        displayField.value = '';
        return;
    }

    // Equals button: Evaluate the expression
    if (buttonValue.toLowerCase() === 'equals' || buttonValue === '=') {
        evaluateExpression();
        return;
    }

    // Append clicked button value to the display
    displayField.value += buttonValue;
}

function evaluateExpression() {
    try {
        // Replace 'x' with '*' for multiplication compatibility
        const expression = displayField.value.replace(/x/g, '*');

        // Evaluate the expression using JavaScript's `eval`
        const result = eval(expression); // Be cautious when using `eval` in production

        // Display the result or a default message for empty input
        displayField.value = result !== undefined ? result : '0';
    } catch (error) {
        // Handle any evaluation errors
        displayField.value = 'Error';
    }
}
