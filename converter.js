// File: converter.js

function convertTemperature() {
  const tempInput = document.getElementById('temp-input').value;
  const tempScale = document.getElementById('temp-scale').value;
  const result = document.getElementById('result');

  // Ensure the input is a valid number
  if (isNaN(tempInput) || tempInput === "") {
      result.textContent = "Please enter a valid number.";
      return;
  }

  let convertedTemp;
  
  // Perform conversion based on selected scale
  if (tempScale === "celsius") {
      convertedTemp = (tempInput * 9/5) + 32; // Celsius to Fahrenheit
      result.textContent = `${tempInput}°C is equal to ${convertedTemp.toFixed(2)}°F.`;
  } else {
      convertedTemp = (tempInput - 32) * 5/9; // Fahrenheit to Celsius
      result.textContent = `${tempInput}°F is equal to ${convertedTemp.toFixed(2)}°C.`;
  }
}
