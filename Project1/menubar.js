function CreateMenu(information) {
	var table = document.createElement("table");
	table.className = "menu";
	var cells = Object.keys(information).length;
	console.log(cells);
	var tr = document.createElement("tr");
	for (var i = 0; i < cells; i++) {
		var td = document.createElement("td");
		var span = document.createElement("span");
		td.style.width = `${100.0 / cells}%`;
		span.textContent = information[i][0];
		td.onclick = information[i][1];
		td.append(span);
		tr.append(td);
	}
	table.append(tr);
	document.getElementById("Menu").append(table);
}