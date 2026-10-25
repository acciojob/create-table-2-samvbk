function createTable() {
	const tbody = document.getElementById("tableBody");
    const rn = prompt("Input number of rows");
	const cn = prompt("Input number of columns");
	let rnn = Number(rn);
	let cnn = Number(cn);
	if (rn<=0 || cn<=0 || rn=== null || cn ====null) {
		alert("Negative/Zero/Null Input");
	}
	if (rn.trim()!=="" &&!isNan(rnn) ||cn.trim()!=="" &&!isNan(cnn)) {
		alert("Non-Numeric Input");
	}
	
	else {
		for (let i = 0; i < rn; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j < cn; j++){
			const cell = document.createElement("td");
			cell.textContent = `Row-${i}, Cell-${j}`;
			row.appendChild(cell);
		}
		tbody.appendChild(row);
	}
	}
	
	
}
