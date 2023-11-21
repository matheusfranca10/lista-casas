function addHouse() {
	const area = document.getElementById("area").value;
	const number = document.getElementById("number").value;
	const neighborhood = document.getElementById("neighborhood").value;
	const city = document.getElementById("city").value;

	const listItem = document.createElement("li");
	listItem.innerText = `${area} m², Número: ${number}, Bairro: ${neighborhood}, Cidade: ${city}  `;

	const removeButton = document.createElement("button");
	removeButton.innerText = "Remover";
	removeButton.addEventListener("click", function(){
		listItem.remove();
	})

	listItem.appendChild(removeButton);

	document.getElementById("house-list").appendChild(listItem);

	document.getElementById("area").value = "";
	document.getElementById("number").value = "";
	document.getElementById("neighborhood").value = "";
	document.getElementById("city").value = "";
}