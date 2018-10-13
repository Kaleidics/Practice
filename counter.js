var scoreF = document.getElementById("firstscore");
var scoreS = document.getElementById("secondS");
var endtotal = document.getElementById("total");
var buttonOne = document.querySelector("#buttonO");
var buttonTwo = document.querySelector("#buttonT");
var buttonReset = document.querySelector("#res");
var numInput = document.querySelector("input[type = 'number']");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

buttonOne.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
			if(p1Score === winningScore){
				scoreF.classList.add("winner");
				gameOver = true;
			}
		scoreF.textContent = p1Score;
}
});
buttonTwo.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
			if(p2Score === winningScore){
				scoreS.classList.add("winner");
				gameOver = true;
			}
		scoreS.textContent = p2Score;
}
});
buttonReset.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	scoreF.textContent = 0;
	scoreS.textContent = 0;
	scoreF.classList.remove("winner");
	scoreS.classList.remove("winner");
	gameOver = false;
};

numInput.addEventListener("change", function(){
	endtotal.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();

})