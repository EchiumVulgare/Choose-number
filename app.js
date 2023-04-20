let secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum (num){
	if(tries >=5){
		return alert("Game Over");
	}
	
	if(num === secretNum) {
		alert("You win");
		tries = 5;
	} else {
		alert("Try one more time");
		tries++;
	}
}