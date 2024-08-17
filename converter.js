function convertTemperature() {
  const input = parseFloat(document.getElementById("temp-input").value);
  const scale = document.getElementById("temp-scale").value;
  const resultElement = document.getElementById("result");

  if (isNaN(input)) {
    resultElement.textContent = "Please enter a valid temperature.";
    return;
  }

  let result;

  switch (scale) {
    case "celsius-to-fahrenheit":
      result = (input * 9) / 5 + 32;
      resultElement.textContent = `${input} °C is ${result.toFixed(2)} °F`;
      break;
    case "fahrenheit-to-celsius":
      result = ((input - 32) * 5) / 9;
      resultElement.textContent = `${input} °F is ${result.toFixed(2)} °C`;
      break;
    case "celsius-to-kelvin":
      result = input + 273.15;
      resultElement.textContent = `${input} °C is ${result.toFixed(2)} K`;
      break;
    case "kelvin-to-celsius":
      result = input - 273.15;
      resultElement.textContent = `${input} K is ${result.toFixed(2)} °C`;
      break;
    case "fahrenheit-to-kelvin":
      result = ((input - 32) * 5) / 9 + 273.15;
      resultElement.textContent = `${input} °F is ${result.toFixed(2)} K`;
      break;
    case "kelvin-to-fahrenheit":
      result = ((input - 273.15) * 9) / 5 + 32;
      resultElement.textContent = `${input} K is ${result.toFixed(2)} °F`;
      break;
    default:
      resultElement.textContent = "Invalid conversion scale.";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("header nav ul");

  navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });
});
