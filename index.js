const toFahrenheit1 = document.getElementById("toFahrenheit1");
const toFahrenheit2 = document.getElementById("toFahrenheit2");
const toCelsius1 = document.getElementById("toCelsius1");
const toCelsius2 = document.getElementById("toCelsius2");
const toKelvin1 = document.getElementById("toKelvin1");
const toKelvin2 = document.getElementById("toKelvin2");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let temp;

submit.onclick = function convert(){
    if (toFahrenheit1.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelsius1.checked){
        temp = Number(textBox.value);
        temp = (5/9) * (temp - 32) ;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else if (toKelvin1.checked){
        temp = Number(textBox.value);
        temp = temp + 273;
        result.textContent = temp.toFixed(1) + " K";
    }
    else if (toCelsius2.checked) {
        temp = Number(textBox.value);
        temp = temp - 273;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else if (toKelvin2.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9 + 273;
        result.textContent = temp.toFixed(1) + " K";
    }
    else if (toFahrenheit2.checked) {
        temp = Number(textBox.value);
        temp = (temp - 273) * (9/5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else{
        result.textContent = "Please select a unit";
    }
}