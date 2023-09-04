document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (unit === "celsius") {
            convertedTemperature = (temperature - 32) * (5 / 9);
        } else {
            convertedTemperature = (temperature * (9 / 5)) + 32;
        }

        result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit === "celsius" ? "°C" : "°F"}`;
    });
});
