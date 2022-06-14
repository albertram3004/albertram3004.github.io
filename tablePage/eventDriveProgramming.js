function startTable() {
  const startButton = document.getElementById('startButton');
  startButton.style.backgroundColor = "red";
  startButton.style.color = "white";
  const data = loadData()
  const tableBody = document.getElementById("table-body");
  for (let i = 0; i < 10; i++) {
    let tableRow  = "<tr>";
    for (let j = 0; j < data[i].length; j++) {
      tableRow += "<td>" + data[i][j]; + "</td>"
    }
    tableRow += "</tr>";
    tableBody.innerHTML += tableRow;
  }
}