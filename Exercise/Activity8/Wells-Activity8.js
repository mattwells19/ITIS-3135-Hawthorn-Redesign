var names = ["Tom", "Lily", "Jose", "Sarah"];
var height = [65, 60, 72, 68];

var $ = function(id) {
  return document.getElementById(id);
};

const showResult = e => {
  var avgHeight = 0,
    maxHeight = 0;
  height.forEach(h => {
    avgHeight += h;
    maxHeight = h > maxHeight ? h : maxHeight;
  });
  avgHeight /= height.length;

  $("result").innerHTML = `
        <h2>Results</h2>
        <p>Average eight = ${avgHeight}</p>
        <p>Highest height = ${maxHeight}</p>
    `;
};

const displayHeight = e => {
  var table = $("height_table");

  table.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = "Heights";
  table.appendChild(header);

  table.insertRow(0).innerHTML = `<th style='text-align: left'>Names</th>
    <th style='text-align: left'>Heights</th>`;

  for (var i = 0; i < names.length; i++) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = names[i];
    row.insertCell(1).innerHTML = height[i];
  }
};

const addHeight = e => {
  var nameInput = $("name").value;
  var heightInput = $("height").value;

  var validInput =
    nameInput.length > 0 &&
    !isNaN(heightInput) &&
    heightInput >= 0 &&
    heightInput <= 100;

  if (!validInput) {
    alert("You must enter a name and a valid height");
  } else {
    names.push(nameInput);
    height.push(parseInt(heightInput));
    $("name").value = "";
    $("height").value = "";
    $("name").focus();
  }
};

window.onload = function() {
  this.$("name").focus();
  $("show_results").onclick = showResult;
  $("add").onclick = addHeight;
  $("display_height").onclick = displayHeight;
};
