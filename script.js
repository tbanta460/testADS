
// Test Pertama

function test01(num){
	let el = document.querySelector('.chdt table');
	let count = 1
	for(let i = num; i >= 1; i--){
		let elRow = document.createElement('tr');

		for(let j = 1; j <= num; j++){

			// Mengosongkan Table
			let tdEl = document.createElement('td');
			tdEl.innerHTML = " ";
			elRow.appendChild(tdEl);

			// Mengisi table dari atas kanan ke kiri bawah
			if(j === i && i !== count){
				tdEl.innerHTML = `${j}`;
				elRow.appendChild(tdEl)
			}

			// Mengisi table dari kiri atas ke kanan bawah
			if(j === count && i !== count){
				tdEl.innerHTML = `${count}`;
				elRow.appendChild(tdEl)
			}

			// Mengisi bagian tengah table
			if(i === count && i === j){
				tdEl.innerHTML = `${i}`;
				elRow.appendChild(tdEl)
			}
		}
		count++

		// Untuk menambah Row Pada Table
		el.appendChild(elRow)
	}
}
test01(9);





//Test kedua

function test02(num){
	let el = document.querySelector('.chd table');
	let count = 0;
	
	for(let i = num; i >= 0; i--){
		let elRow = document.createElement('tr');

		for(let j = 0; j <= num; j++){

			// Mengosongkan table
			let tdEl = document.createElement('td');
			tdEl.innerHTML = " ";
			elRow.appendChild(tdEl)

			// Mengisi table dari kiri atas ke kanan bawah
			if(j === count && i !== count){ 
				tdEl.innerHTML = `${count},${j}`
				elRow.appendChild(tdEl);
			}

			// Mengisi table dari kanan atas ke kiri bawah
			if(j === i && i !== count){
				if(i === 2 ){
					tdEl.innerHTML = `${j},${count}`
					elRow.appendChild(tdEl);
				}else if(i <= 1){
					tdEl.innerHTML = `${i},${i}`
					elRow.appendChild(tdEl);
				}else{
					tdEl.innerHTML = `${count},${i}`
					elRow.appendChild(tdEl);
				}
			}
			
			// Mengisi tengah table
			if(i === count && i === j){
				tdEl.innerHTML = `${i},${i}`
				elRow.appendChild(tdEl);

			}
		}
		count++

		// Untuk menambah Row Pada Table
		el.appendChild(elRow)
	}
}
test02(8)
