var bomb = Math.ceil(Math.random() * 9);
var treasure = Math.ceil(Math.random() * 9);
var counter = 5
while(bomb === treasure){
	treasure = Math.ceil(Math.random() * 9);
}

function clicked() {
}

function changeChar(location) {
	if(!(counter <= 0)){
		if (counter > 0) {
			counter = counter - 1
			document.getElementById("counter").innerHTML = `turns remaining = ${counter}`}


			if(location === bomb){
				alert ("YOU LOSE!!!")
				document.getElementById(location).innerHTML = "🦈"
			}
			else if(location === treasure){
				alert ("YOU WIN!!!")
				document.getElementById(location).innerHTML = "🏝"
			}
			else{
				document.getElementById(location).innerHTML = "🏄🏼"
			}

		}
	else{
		alert("you ran out!")
	}

}
