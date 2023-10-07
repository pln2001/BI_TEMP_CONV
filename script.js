document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusOutput = document.getElementById("celsiusOutput");
    const fahrenheitOutput = document.getElementById("fahrenheitOutput");

    celsiusInput.addEventListener("input", convertCelsiusToFahrenheit);
    fahrenheitInput.addEventListener("input", convertFahrenheitToCelsius);
});

function convertCelsiusToFahrenheit() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;

    fahrenheitOutput.textContent = fahrenheitValue.toFixed(2);
}

function convertFahrenheitToCelsius() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;

    celsiusOutput.textContent = celsiusValue.toFixed(2);
}