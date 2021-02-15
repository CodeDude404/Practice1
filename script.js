const afterStart = `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>repl.it</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link href="customcss.css" rel="stylesheet" type="text/css" />
</head>

<body class="container-dark">

  <span class="align-center">
    <h1>Press Enter To Start</h1>
    <button class="button-blue-selected" id="cli">CLI</button>
    <button class="button-blue" id="gui">GUI</button>
  </span>

  <script src="script.js"></script>
</body>

</html>
`
var startPassed = false;
var uiPassed = false;
var selectedUI = "";
function buttonClicked(event) {

    if (startPassed === false){
        if (event.keyCode === 13) {
            startPassed = true;
            console.log("Enter Pressed: Selected button: Start");
            document.write(afterStart);
        }

    } 
    
    else {
        if (uiPassed === true) {
            console.log("FATAL ERROR: NOWHERE TO GO!");
            alert("FATAL ERROR: NOWHERE TO GO!");
        } 
        
        else {
            if (event.keyCode === 40) {
                //Handle downarrow event
                document.getElementById("cli").className = "button-blue";
                document.getElementById("gui").className = "button-blue-selected";
                selectedUI = "gui";
            }
            if (event.keyCode === 38) {
                document.getElementById("cli").className = "button-blue-selected";
                document.getElementById("gui").className = "button-blue";
                selectedUI = "cli";
            } 
        }
    }
}



document.addEventListener("keydown", buttonClicked)