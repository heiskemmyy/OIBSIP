// File: converter.js

function convertTemperature() {
  const tempInput = parseFloat(document.getElementById('temp-input').value);
  const tempScale = document.getElementById('temp-scale').value;
  const result = document.getElementById('result');

  // Ensure the input is a valid number
  if (isNaN(tempInput) || tempInput === "") {
      result.textContent = "Please enter a valid number.";
      return;
  }

  let convertedTemp;
  
  // Perform conversion based on selected scale
  switch (tempScale) {
      case "celsius-to-fahrenheit":
          convertedTemp = (tempInput * 9/5) + 32; // Celsius to Fahrenheit
          result.textContent = `${tempInput}°C is equal to ${convertedTemp.toFixed(2)}°F.`;
          break;
      case "fahrenheit-to-celsius":
          convertedTemp = (tempInput - 32) * 5/9; // Fahrenheit to Celsius
          result.textContent = `${tempInput}°F is equal to ${convertedTemp.toFixed(2)}°C.`;
          break;
      case "celsius-to-kelvin":
          convertedTemp = tempInput + 273.15; // Celsius to Kelvin
          result.textContent = `${tempInput}°C is equal to ${convertedTemp.toFixed(2)}K.`;
          break;
      case "kelvin-to-celsius":
          convertedTemp = tempInput - 273.15; // Kelvin to Celsius
          result.textContent = `${tempInput}K is equal to ${convertedTemp.toFixed(2)}°C.`;
          break;
      case "fahrenheit-to-kelvin":
          convertedTemp = (tempInput - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
          result.textContent = `${tempInput}°F is equal to ${convertedTemp.toFixed(2)}K.`;
          break;
      case "kelvin-to-fahrenheit":
          convertedTemp = (tempInput - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
          result.textContent = `${tempInput}K is equal to ${convertedTemp.toFixed(2)}°F.`;
          break;
      default:
          result.textContent = "Please select a valid conversion option.";
          break;
  }
}
