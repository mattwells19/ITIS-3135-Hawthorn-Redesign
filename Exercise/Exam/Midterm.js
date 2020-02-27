var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var expenditure = [20, 12, 15, 10, 30, 25, 40];

var $ = function (id) {
  return document.getElementById(id);
};

var updateExpenditure = function (event) {

  var dayOfWeek = $("days").value;
  var expend = $("expend").value;

  // Because input is number based, expend will be null if not a number
  if (expend) {

    var index = days.indexOf(dayOfWeek);
    expenditure[index] = parseInt(expend);
    alert(`Your updated expenditures are: ${expenditure}`);

    // Reset to defaults
    $("expend").value = "";
    $("days").selectedIndex = 0;

  } else {

    alert("Enter a valid number.");

  }
};

var showTotalExp = function (event) {
  var sum = 0;
  expenditure.forEach(exp => (sum += exp));
  $("totalExpend").value = sum;
  $("totalExpend").style = "color: red; background-color: transparent";
};

var showMax = function (event) {

  // Find max exoenditure and index of max expenditure
  var max = 0;
  var index = 0;
  expenditure.forEach((exp, i) => {
    if (exp > max) {
      max = exp;
      index = i;
    }
  });
  // Get day of max expenditure using index
  var maxDay = days[index];

  // If the paragraph already exists, just change the inner text
  // If the paragraph does not exist, create the p tag, set its id, add the appropriatte message and append to div
  if ($("show_max_p")) {

    $("show_max_p").innerText = `Your maximum expenditure is $${max} on ${maxDay}`;

  } else {

    var pMax = document.createElement("p");
    pMax.id = "show_max_p";
    var textMax = document.createTextNode(`Your maximum expenditure is $${max} on ${maxDay}`);
    pMax.appendChild(textMax);
    $("showMax").appendChild(pMax);

  }
};

window.onload = function () {
  //event handlers
  $("update").onclick = updateExpenditure;
  $("total").onclick = showTotalExp;
  $("show_max").onmouseover = showMax;
};
