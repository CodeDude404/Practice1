var inputPounds = document.getElementById("inputPounds");
var inputKilograms = document.getElementById("inputKilograms");
var inputOunces = document.getElementById("inputOunces");
var inputGrams = document.getElementById("inputGrams");
var inputStones = document.getElementById("inputStones");


function ConvertP(input) {
	console.log(input)
	inputKilograms.value = (input / 2.2046);
	inputOunces.value = (input * 16);
	inputGrams.value = (input / 0.0022046)
	inputStones.value = (input * 0.071429);
}


function ConvertK(input) {
	console.log(input)
	inputPounds.value = (input * 2.2046);
	inputOunces.value = (input * 35.274);
	inputGrams.value = (input * 1000);
	inputStones.value = (input * 0.1574);
}

function ConvertO(input) {
	console.log(input)
	inputPounds.value = (input * 0.062500);
	inputKilograms.value = (input / 35.274);
	inputGrams.value = (input / 0.035274);
	inputStones.value = (input * 0.0044643);
}


function ConvertG(input) {
	inputPounds.value = (valNum * 0.0022046).toFixed(4);
	inputKilograms.value = (valNum / 1000).toFixed(4);
	inputOunces.value = (valNum * 0.035274).toFixed(3);
	inputStones.value = (valNum * 0.00015747).toFixed(5);
}
function ConvertS(input) {
	inputPounds.value = (valNum * 14).toFixed(1);
	inputKilograms.value = (valNum / 0.15747).toFixed(1);
	inputOunces.value = (valNum * 224).toFixed();
	inputGrams.value = (valNum / 0.00015747).toFixed();
}