document.getElementById("type").addEventListener("change", function () {
  const selected = this.value;
  const converterArea = document.getElementById("converterArea");
  const result = document.getElementById("result");

  // Clear old content
  converterArea.innerHTML = "";
  result.textContent = "";
  if (selected === "CtoF") {
    // celsius to Fahrenheit converter
    converterArea.innerHTML = `
    <label for="celsius">Celsius:</label>
    <input type="number" id="celsius" placeholder="Enter Celsius">
    <button id="cbtn">Convert to Fahrenheit</button>
  `;
    document.getElementById("cbtn").addEventListener("click", function () {
      const celsius = parseFloat(document.getElementById("celsius").value);
      if (isNaN(celsius)) {
        result.textContent = "Please enter a valid number.";
      } else {
        const fahrenheit = (celsius * 9) / 5 + 32;
        result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(
          2
        )}°F`;
      }
    });
  } else if (selected === "FtoC") {
    // Fahrenheit to Celsius converter
    converterArea.innerHTML = `
    <label for="fahrenheit">Fahrenheit:</label>
    <input type="number" id="fahrenheit" placeholder="Enter Fahrenheit">
    <button id="fbtn">Convert to Celsius</button>
  `;
    document.getElementById("fbtn").addEventListener("click", function () {
      const fahrenheit = parseFloat(
        document.getElementById("fahrenheit").value
      );
      if (isNaN(fahrenheit)) {
        result.textContent = "Please enter a valid number.";
        return;
      }
      const celsius = ((fahrenheit - 32) * 5) / 9;
      result.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(
        2
      )}°C`;
    });
  }
});
