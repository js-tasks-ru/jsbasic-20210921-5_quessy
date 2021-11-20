function highlight(table) {
  let tbody = table.querySelector('tbody');

  for (let row of tbody.rows) {
    let ageCell = row.cells[1];
    let genderCell = row.cells[2];
    let statusCell = row.cells[3];

    row.classList.add(statusCell.dataset.available === 'true' ? 'available' : 'unavailable');
    row.classList.add(genderCell.innerHTML === 'm' ? 'male' : 'female');

    if (statusCell.dataset.available === undefined) {
      row.hidden = true;
    }

    if (parseInt(ageCell.innerHTML) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}

function countNames() {
  let tbody = table.querySelector('tbody');
  let nameCell = row.cells[0];

  for (let row of tbody.rows) {
    alert ("Привет, " + nameCell);
  }
}
