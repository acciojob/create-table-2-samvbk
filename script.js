function createTable() {
	const tbody = document.getElementById("tableBody");
    const rn = prompt("Input number of rows");
	const cn = prompt("Input number of columns");
	for (let i = 0; i < rn; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j < cn; j++){
			const cell = document.createElement("td");
			cell.textContent = `Row ${i + 1}, Cell ${j + 1}`;
			row.appendChild(cell);
		}
		tbody.appendChild(row);
	}
}
