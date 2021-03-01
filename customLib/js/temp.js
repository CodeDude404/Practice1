var inputFahrenheit = document.getElementById("inputFahrenheit");
var inputCelsius = document.getElementById("inputCelsius");
var inputKelvin = document.getElementById("inputKelvin");

function ConvertF(input) {
	inputCelsius.value = ((valNum - 32) / 1.8);
	inputKelvin.value = (((valNum - 32) / 1.8) + 273.15);
}
function ConvertC(input) {
	inputFahrenheit.value = ((valNum * 1.8) + 32);
	inputKelvin.value = ((valNum) + 273.15);
}
function ConvertK(input) {
	inputFahrenheit.value = (((valNum - 273.15) * 1.8) + 32);
	inputCelsius.value = ((valNum) - 273.15);
}