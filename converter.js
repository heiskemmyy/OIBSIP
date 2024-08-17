// File: converter.js

function convertTemperature() {
  const tempInput = parseFloat(document.getElementById("temp-input").value);
  const tempScale = document.getElementById("temp-scale").value;
  const result = document.getElementById("result");

  // Ensure the input is a valid number
  if (isNaN(tempInput)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let convertedTemp;

  // Perform conversion based on selected scale
  if (tempScale === "celsius") {
    convertedTemp = (tempInput * 9) / 5 + 32; // Celsius to Fahrenheit
    result.textContent = `${tempInput.toFixed(
      2
    )}°C is equal to ${convertedTemp.toFixed(2)}°F.`;
  } else {
    convertedTemp = ((tempInput - 32) * 5) / 9; // Fahrenheit to Celsius
    result.textContent = `${tempInput.toFixed(
      2
    )}°F is equal to ${convertedTemp.toFixed(2)}°C.`;
  }

  // Optional: Adding a fade-in effect
  result.style.opacity = 0;
  setTimeout(() => {
    result.style.transition = "opacity 0.5s";
    result.style.opacity = 1;
  }, 100);
}
