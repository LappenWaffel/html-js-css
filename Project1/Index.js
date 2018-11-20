function hello () {
	alert("This site is using cockies, just accept it you have no choice!");
}

function OnLoad() {
	CreateMenu(2,
		{
			0:{
				0: "Jacob", 1: Lul
			},
			1:{
				0: "Julius", 1:change
			}
		});
}

function Lul() {
	alert("...");
}

function change () {
	document.getElementsByTagName("p")[0].innerText = lines[0].line1
}

lines = [
	{
		line1:
		"hello user, you might have thought this button wouldn't work, but we are really happy to be able to say, that this button is indeed "+
		"workin. "
	}
]