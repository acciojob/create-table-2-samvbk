function createTable() {
	const tbody = document.getElementById("tableBody");
	let rn = prompt("Input number of rows");
	let cn = prompt("Input number of columns");
	while (true) {
		// let rnn = Number(rn);
		// let cnn = Number(cn);
		// if (rn=== null || cn ===null) {
		// 	break;
		// }
		// if (rn<=0 || cn<=0) {
		// 	alert("Negative/Zero/Null Input");
		// 	continue;
		// }
		// if (rn.trim()!=="" ||!isNaN(rnn)) {
		// 	continue;
		// }
		// if (cn.trim()!=="" ||!isNaN(cnn)) {
		// 	continue;
		// }
		// break;


		if (rn === null || cn === null) {
		    return;
		}

		let rnn = Number(rn);
		let cnn = Number(cn);
		
		if (
		    rn.trim() === "" ||
		    cn.trim() === "" ||
		    !Number.isInteger(rnn) ||
		    !Number.isInteger(cnn) ||
		    rnn <= 0 ||
		    cnn <= 0
		) {
		    alert("Please enter positive integers");
		    rn = prompt("Input number of rows");
		    cn = prompt("Input number of columns");
		    continue;
		}
		
		break;
	}
	rn = Number(rn);
	cn=Number(cn);
	for (let i = 0; i < rn; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j < cn; j++){
			const cell = document.createElement("td");
			cell.textContent = `Row-${i}, Column-${j}`;
			row.appendChild(cell);
		}
		tbody.appendChild(row);
	}
}
