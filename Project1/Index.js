function hello () {
	alert("This site is using cockies, just accept it you have no choice!");
}

function Lul() {
	alert("...");
}

function Lal () {
	alert("This is what we wanted froma young age!");
}

count = 0;

function change () {
	count += 1;
	if (count % 2 == 0){
		document.getElementsByTagName("p")[0].innerText = "what's up ?";
		return
	}
	document.getElementsByTagName("p")[0].innerText = lines[0].line1;
}

lines = [
	{
		line1:
		"hello user, you might have thought this button wouldn't work, but we are really happy to be able to say, that this button is indeed "+
		"workin. "
	}
]