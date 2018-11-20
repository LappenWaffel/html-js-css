function hello () {
	alert("This site is using cockies, just accept it you have no choice!");
}

function OnLoad() {
	CreateMenu({
		0: {
			0: "Jacob", 1: Lul
		},
		1: {
			0: "Julius", 1: change
		},
		2: {
			0: "Lappen", 1: change
		}
	});
	CreateCookies();
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


//Examples for Popups
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//vars			: Popup.width, Popup.height, Popup.positionX, Popup,positionY, Popup.information.text, Popup.information.img, Popup.information.onclick
//DOM-Elements	: Popup.body, Popup.img, Popup.text, Popup.exitBtn
//functions		: Popup.destruct, Popup.setSize(width, height), Popup.setPosition(positionX, positionY), Popup.setText(text), setImage(path)

//1.
function CreatePopup() {
	var popup = new Popup(/*width*/120, /*height*/300, /*positionX*/150, /*positionY*/50, /*information*/{ text: "You Won! Click here!", img: "/popup/popup.jpg", onclick=OnPopupClick });

	//just for better visualisation:
	var popup2 = new Popup(/*width*/    120,
						   /*height*/   300,
						   /*positionX*/150,
						   /*positionY*/ 50,
						   /*information*/ {
							   text: "You Won! Click here!",
							   img: "/popup/popup.jpg",
							   onclick=OnPopupClick
						   });				 // | //
}											 // | //
function OnPopupClick() {					 // v //
	alert("Your price will be send to you until next century!");
}

//2.
function CreatePopup2() {
	var popup = new Popup(/*width*/120, /*height*/300, /*positionX*/150, /*positionY*/50, /*information*/{
		text: "You Won! Click here!",
		img: "/popup/popup.jpg",
		onclick=function () {
			alert("Your price doesnt exist! Weve nevwe thaught that anyone is dump enough to click on this popup!");
		}
	});
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------