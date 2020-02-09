//Global variables
var prevCalc = 0;
var calc = "";

function $(element) {
  return document.getElementsByName(element)[0];
}

window.onload = () => {
  for (var i = 0; i < 10; i++) {
    const index = i; // just using i makes the onclick method showNum(10) for every button
    $(`btn${i}`).onclick = () => showNum(index);
  }
  $("btnDecimal").onclick = () => showNum(".");
  $("btnPlus").onclick = add;
  $("btnMinus").onclick = subtract;
  $("btnTimes").onclick = multiply;
  $("btnDivide").onclick = divide;
  $("btnPow").onclick = powerXY;
  $("btnPow2").onclick = squareMe;
  $("btnDecrement").onclick = decrement;
  $("btnIncrement").onclick = increment;
  $("btnSqrt").onclick = sqrt;
  $("btnFloor").onclick = floor;
  $("btnRound").onclick = round;
  $("btnReset").onclick = clear;
  $("btnCalc").onclick = calculate;
};

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked.
function showNum(value) {
  document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.
function decrement() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num--;
    document.frmCalc.txtNumber.value = num;
  }
}

//The following function increases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.
function increment() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num++;
    document.frmCalc.txtNumber.value = num;
  }
}

//The following function rounds the displayed number down to a whole number.
//isNaN method checks whether the value passed to the method is a number or not.
function floor() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    document.frmCalc.txtNumber.value = Math.floor(num);
  }
}

//The following function rounds the displayed number to the nearest whole number.
//isNaN method checks whether the value passed to the method is a number or not.
function round() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    document.frmCalc.txtNumber.value = Math.round(num);
  }
}

//The following function is called when "Add" button is clicked.
//Note that it also changes the values of the global variables.
function add() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Add";
  }
}

//The following function is called when "Subtract" button is clicked.
//Note that it also changes the values of the global variables.
function subtract() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Subtract";
  }
}

//The following function is called when "Multiply" button is clicked.
//Note that it also changes the values of the global variables.
function multiply() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Multiply";
  }
}

//The following function is called when "Divide" button is clicked.
//Note that it also changes the values of the global variables.
function divide() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Divide";
  }
}

//The following function calculates the square root of the displayed number.
//isNaN method checks whether the value passed to the method is a number or not.
function sqrt() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    document.frmCalc.txtNumber.value = Math.sqrt(num);
  }
}

//The following function calculates the square of the displayed number.
//isNaN method checks whether the value passed to the method is a number or not.
function squareMe() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    document.frmCalc.txtNumber.value = num ** 2;
  }
}

//The following function is called when "Power" button is clicked.
//Note that it also changes the values of the global variables.
function powerXY() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Power";
  }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.
function calculate() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    if (calc == "Add") {
      var total = prevCalc + num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "Subtract") {
      var total = prevCalc - num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "Multiply") {
      var total = prevCalc * num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "Divide") {
      var total = prevCalc / num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "Power") {
      var total = prevCalc ** num;
      document.frmCalc.txtNumber.value = total;
    }
  }
}

function clear() {
  document.frmCalc.txtNumber.value = "";
  prevCalc = 0;
  calc = "";
}
