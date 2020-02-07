var convertToLetterGrade = function (number_grade) {
  if (number_grade > 99) return "A";
  else if (number_grade > 79) return "B";
  else if (number_grade > 69) return "C";
  else if (number_grade > 59) return "D";
  else return "F";
};

do {
  var numberGrade = -2;

  //   Do while for data vaildation
  do {

    numberGrade = prompt("Enter a number grade between 0 and 120\nOr enter -1 to end entries");

    // Input must be between -1 and 120, a number, and not empty. Can be null!
    var validInput = numberGrade <= 120 && numberGrade >= -1 && !isNaN(numberGrade) && numberGrade != "";

  } while (!validInput);

  //   Don't want to alert if the user wants to quit
  if (numberGrade != -1 && numberGrade != null) {
    alert(`Number grade = ${numberGrade}\nLetter Grade = ${convertToLetterGrade(numberGrade)}`);
  }

} while (numberGrade != -1 && numberGrade != null); // Quit if user entered -1 or hit cancel
