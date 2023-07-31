
// Function to convert temperature
function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const unitSelection = document.getElementById("unitSelection").value;
    let resultText = document.getElementById("resultText");
  
    if (isNaN(inputValue)) {
      resultText.textContent = "Invalid input. Please enter a valid number.";
      return;
    }
  
    if (unitSelection === "celsius") {
      const fahrenheitValue = (inputValue * 9) / 5 + 32;
      const kelvinValue = inputValue + 273.15;
  
      resultText.textContent = `Fahrenheit: ${fahrenheitValue.toFixed(
        2
      )}, Kelvin: ${kelvinValue.toFixed(2)}`;
    } else if (unitSelection === "fahrenheit") {
      const celsiusValue = ((inputValue - 32) * 5) / 9;
      const kelvinValue = ((inputValue - 32) * 5) / 9 + 273.15;
  
      resultText.textContent = `Celsius: ${celsiusValue.toFixed(
        2
      )}, Kelvin: ${kelvinValue.toFixed(2)}`;
    } else if (unitSelection === "kelvin") {
      const celsiusValue = inputValue - 273.15;
      const fahrenheitValue = (inputValue - 273.15) * (9 / 5) + 32;
  
      resultText.textContent = `Celsius: ${celsiusValue.toFixed(
        2
      )}, Fahrenheit: ${fahrenheitValue.toFixed(2)}`;
    }
  }
  
