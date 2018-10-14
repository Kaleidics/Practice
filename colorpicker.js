var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetBu");
var easyBu = document.querySelector("#easyBut");
var hardBu = document.querySelector("#hard");



easyBu.addEventListener("click", function(){
	hard.classList.remove("selected");
 	easyBu.classList.add("selected");
 	numberOfSquares = 3;
 	colors = generateRandomColors(numberOfSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i = 0; i < squares.length; i++){
 		if(colors[i]){
 			squares[i].style.background = colors[i];
 		} else{
 			squares[i].style.display = "none";

 		};
 	}

});

hardBu.addEventListener("click", function(){
	hard.classList.add("selected");
 	easyBu.classList.remove("selected");
 	numberOfSquares = 6;
 	colors = generateRandomColors(numberOfSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i = 0; i < squares.length; i++){	
 		squares[i].style.background = colors[i];
 		squares[i].style.display = "block";
 	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	 colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	 pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i =0; i < squares.length; i++){
	// add inital colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
	resetBu.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i =0; i < squares.length; i++){
	// add inital colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add clicker listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetBu.textContent = "Play Again?";
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
};

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;

	//change each color to match given color aka correct square
	};
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
};

function generateRandomColors(num){
	//make an array
	var arr = [];
	//ad num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	};
	//return that array
	return arr;
};
function randomColor(){
	//generate random colors, remember to add 1 otherwise will not hit 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}