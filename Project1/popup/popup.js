class Popup {
	constructor(width, height, positionX, positionY, information) {
		this.width = width;
		this.height = height;
		this.information = information;
		this.PositionX = positionX;
		this.positionY = positionY;

		this.body = document.createElement("div");
		this.body.className = "popup";
		this.body.style.width = `${width}px`;
		this.body.style.height = `${height}px`;
		this.body.onclick = information.onclick;
		this.body.style.left = `${positionX}px`;
		this.body.style.bottom = `${positionY}px`;

		this.img = document.createElement("div");
		this.img.className = "_img";
		if (information.img != undefined) {
			this.img.style.backgroundImage = `url(${information.img})`;
		}
		this.text = document.createElement("div");
		this.text.className = "_text";

		var span = document.createElement("span");
		span.textContent = information.text;
		span.style.lineHeight = `${height * 0.2}px`;

		this.exitBtn = document.createElement("div");
		this.exitBtn.className = "_exit";
		this.exitBtn.onclick = function () {
			this.destruct();
		}.bind(this);

		this.text.append(span);
		this.body.append(this.img);
		this.body.append(this.text);
		this.body.append(this.exitBtn);

		document.getElementById("Popup").append(this.body);
	}

	setPosition(PositionX, PositionY) {
		this.PositionX = positionX;
		this.positionY = positionY;
		this.body.style.left = `${positionX}px`;
		this.body.style.bottom = `${positionY}px`;
	}

	setSize(width, height) {
		this.width = width;
		this.height = height;
		this.body.style.width = `${width}px`;
		this.body.style.height = `${height}px`;
	}

	setText(text) {
		this.text.firstChild.textContent = this.information.text = text;
	}

	setImage(path) {
		this.img.backgroundImage = this.information.img = `url(${path})`;
	}

	destruct() {
		this.body.parentElement.removeChild(this.body);
	}
}