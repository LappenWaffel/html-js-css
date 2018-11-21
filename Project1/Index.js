function hello () {
	alert("This site is using cockies, just accept it you have no choice!");
}

function OnLoad() {
	var Cookies = new Popup(300, 400, 300, 100, { text: "this side uses cookies!", img: "cookies.jpg", onclick: null }, document.getElementById("Popup"))
	CreateMenu({
		0: {
			0: "Jacob", 1: change
		},
		1: {
			0: "Julius", 1: function () { window.location.href = "julius.html";}
		},
		2: {
			0: "Lappen", 1: change
		}
	}, document.getElementById("Menu"));
}

var count = 0;
function change() {
	count++;
	document.getElementsByTagName("p")[0].textContent = lines[count % Object.keys(lines).length];
}

lines = {
	0: "what's up ?",
	1: "hello user, you might have thought this button wouldn't work, but we are really happy to be able to say, that this button is indeed workin"
}


//Examples for Popups
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//vars			: Popup.width, Popup.height, Popup.positionX, Popup,positionY, Popup.information.text, Popup.information.img, Popup.information.onclick
//DOM-Elements	: Popup.body, Popup.img, Popup.text, Popup.exitBtn
//functions		: Popup.destruct, Popup.setSize(width, height), Popup.setPosition(positionX, positionY), Popup.setText(text), setImage(path)

//1.
function CreatePopup() {
	var parent = document.getElementById("Popup");
	var popup = new Popup(/*width*/120, /*height*/300, /*positionX*/150, /*positionY*/50, /*information*/{ text: "You Won! Click here!", img: "/popup/popup.jpg", onclick:OnPopupClick }, parent);

	//just for better visualisation:
	var popup2 = new Popup(/*width*/    120,
						   /*height*/   300,
						   /*positionX*/150,
						   /*positionY*/ 50,
						   /*information*/ {
							text: "You Won! Click here!",
							img: "/popup/popup.jpg",
							onclick: OnPopupClick
							},
							parent);		 // | //
}											 // | //
function OnPopupClick() {					 // v //
	alert("Your price will be send to you until next century!");
}

//2.
function CreatePopup2() {
	var parent = document.getElementById("Popup");
	var popup = new Popup(/*width*/120, /*height*/300, /*positionX*/150, /*positionY*/50, /*information*/{
		text: "You Won! Click here!",
		img: "/popup/popup.jpg",
		onclick:function () {
			alert("Your price doesnt exist! Weve nevwe thaught that anyone is dump enough to click on this popup!");
		}
	}, parent);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------