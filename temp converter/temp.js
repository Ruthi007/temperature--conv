const form = document.getElementById('temp-form');
const temperature = document.getElementById('temperature');
const scale = document.getElementById('scale');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let temperatureValue = parseFloat(temperature.value);
    let scaleValue = scale.value;
    let kelvin = 0;
    let celsius = 0;
    let fahrenheit = 0;

    if (scaleValue === 'kelvin') {
        kelvin = temperatureValue;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } else if (scaleValue === 'celsius') {
        celsius = temperatureValue;
        kelvin = celsius + 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } else if (scaleValue === 'fahrenheit') {
        fahrenheit = temperatureValue;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    }

    output.textContent = `${temperatureValue} ${scaleValue} is equivalent to ${kelvin.toFixed(2)} Kelvin, ${celsius.toFixed(2)} Celsius, and ${fahrenheit.toFixed(2)} Fahrenheit.`;
});