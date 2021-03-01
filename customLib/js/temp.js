var inputFahrenheit = document.getElementById("inputFahrenheit");
var inputCelsius = document.getElementById("inputCelsius");
var inputKelvin = document.getElementById("inputKelvin");

function ConvertF(input) {
	inputCelsius.value = ((input - 32) / 1.8);
	inputKelvin.value = (((input - 32) / 1.8) + 273.15);
}
function ConvertC(input) {
	inputFahrenheit.value = ((input * 1.8) + 32);
	inputKelvin.value = ((input) + 273.15);
}
function ConvertK(input) {
	inputFahrenheit.value = (((input - 273.15) * 1.8) + 32);
	inputCelsius.value = ((input) - 273.15);
}