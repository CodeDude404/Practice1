var keyOn = true
var ctlPressed = false
var colors = [
	"AliceBlue",
	"AntiqueWhite ",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisqu",
	"Black",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"BurlyWood",
	"CadetBlue",
	"Chartreuse",
	"Chocolate",
	"Coral",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"Cyan",
	"DarkBlue",
	"DarkCyan",
	"DarkGoldenRod",
	"DarkGray",
	"DarkGreen",
	"DarkKhaki",
	"DarkMagenta",
	"DarkOliveGreen",
	"Darkorange",
	"DarkOrchid",
	"DarkRed",
	"DarkSalmon",
	"DarkSeaGreen",
	"DarkSlateBlue",
	"DarkSlateGray",
	"DarkTurquoise",
	"DarkViolet",
	"DeepPink",
	"DeepSkyBlue",
	"DimGray",
	"DimGrey",
	"DodgerBlue",
	"FireBrick",
	"FloralWhite",
	"ForestGreen",
	"Fuchsia",
	"Gainsboro",
	"GhostWhite",
	"Gold",
	"GoldenRod",
	"Gray",
	"Green",
	"GreenYellow",
	"HoneyDew",
	"HotPink",
	"IndianRed ",
	"Indigo ",
	"Ivory",
	"Khaki",
	"Lavender",
	"LavenderBlush",
	"LawnGreen",
	"LemonChiffon",
	"LightBlue",
	"LightCoral",
	"LightCyan",
	"LightGoldenRodYellow",
	"LightGrey",
	"LightGreen",
	"LightPink",
	"LightSalmon",
	"LightSeaGreen",
	"LightSkyBlue",
	"LightSlateGrey",
	"LightSteelBlue",
	"LightYellow",
	"Lime",
	"LimeGreen",
	"Linen",
	"Magenta",
	"Maroon",
	"MediumAquaMarine",
	"MediumBlue",
	"MediumOrchid",
	"MediumPurple",
	"MediumSeaGreen",
	"MediumSlateBlue",
	"MediumSpringGreen",
	"MediumTurquoise",
	"MediumVioletRed",
	"MidnightBlue",
	"MintCream",
	"MistyRose",
	"Moccasin",
	"NavajoWhite",
	"Navy",
	"OldLace",
	"Olive",
	"OliveDrab",
	"Orange",
	"OrangeRed",
	"Orchid",
	"PaleGoldenRod",
	"PaleGreen",
	"PaleTurquoise",
	"PaleVioletRed",
	"PapayaWhip",
	"PeachPuff",
	"Peru",
	"Pink",
	"Plum",
	"PowderBlue",
	"Purple",
	"Red",
	"RosyBrown",
	"RoyalBlue",
	"SaddleBrown",
	"Salmon",
	"SandyBrown",
	"SeaGreen",
	"SeaShell",
	"Sienna",
	"Silver",
	"SkyBlue",
	"SlateBlue",
	"SlateGray",
	"SlateGrey",
	"Snow",
	"SpringGreen",
	"SteelBlue",
	"Tan",
	"Teal",
	"Thistle",
	"Tomato",
	"Turquoise",
	"Violet",
	"Wheat",
	"White",
	"WhiteSmoke",
	"Yellow",
	"YellowGreen"
]

function startClock() {
	if (typeof(Worker) !== "undefined") {
		if (typeof(w) == "undefined") {
			w = new Worker("customLib/js/date.js");
		}
		w.onmessage = function(event) {
			document.getElementById("time").innerHTML = event.data;
		};
	} else {
		document.getElementById("time").innerHTML = "Not Supported";
	}
}

function endClock() {
	w.terminate();
	w = undefined;
	document.getElementById("time").innerHTML = "";
}

function SetTheme() {
	var e = document.getElementById("bkg");
	var value = e.options[e.selectedIndex].value;
	var content = document.getElementById("main");

	console.log(value)


	if (value === "default") {
		content.className = "container mt-3";
		console.log("bkg = normal")
	} else {
		//var i;
		//for (let i = 0; i < colors.length; i++) {
		//	if (value === colors[i]) {
		//		console.log("bkg = " + colors[i])
		//		content.className = "container mt-3 " + colors[i] + "-background"
		//	}

		content.style.background = value;
	
	}




	var e = document.getElementById("textnav");
	var value = e.options[e.selectedIndex].value;
	var clockNav = document.getElementById("time");

	console.log(e)
	if (value === "default") {
		clockNav.className = "navbar-brand"
		console.log("navtext = default")
	} else {
		var i;
		for (i = 0; i < colors.length; i++) {
			if (value === colors[i]) {
				clockNav.className = "navbar-default " + colors[i] + "-navbar"
			}
		}
	}


	var e = document.getElementById("bkg");
	var value = e.options[e.selectedIndex].value;
	var clockNav = document.getElementById("main");

	console.log(e)
	if (value === "default") {
		clockNav.className = "container mt-3"
	} else {
		var i;
		for (i = 0; i < colors.length; i++) {
			if (value === colors[i]) {
				clockNav.className = "container mt-3 " + colors[i] + "-background"
			}
		}
	}

}

function SetClock() {
	var e = document.getElementById("clockNav");
	var value = e.options[e.selectedIndex].value;

	console.log(e)
	if (value === "on") {
		console.log("clock on");
		startClock();
	} else if (value === "off") {
		console.log("clock off");
		endClock();

	}
}


function SetKey() {
	var e = document.getElementById("key");
	var value = e.options[e.selectedIndex].value;

	console.log(e)
	if (value === "on") {
		console.log("shortcusts on");
		keyOn = true

	}
	if (value === "off") {
		console.log("shortcusts off");
		keyOn = false

	}
}


function LoadCode() {
	startClock()
	$('.toast').toast('show');
	
	var i;
	for (i = 0; i < colors.length; i++) {
		var txt = document.getElementById("textnav");

		txt.innerHTML = txt.innerHTML + "<option value=\"" + colors[i] + ">" + colors[i] + "</option>"
	}

	var i;
	for (i = 0; i < colors.length; i++) {
		var txt = document.getElementById("bkg");

		txt.innerHTML = txt.innerHTML + "<option value=\"" + colors[i] + ">" + colors[i] + "</option>"
	}
}


document.onkeyup = function(event) {
	if (keyOn === true) {

		var key = event.key

		if (key === "Control") {
			ctlPressed = true

		} else if (key === "s") {
			if (ctlPressed === true) {
				$('#mainSettings').modal('show'); 
				ctlPressed = false;
			}
		}
	}

}

