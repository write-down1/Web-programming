function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}
function changeColor() {
  var button = document.getElementById("colorchange");

  button.style.backgroundColor = "red";
}
function orignalcolor() {
  var button = document.getElementById("colorchange");
  button.style.backgroundColor = "#ccc";
}
function changeTextStyle() {
  var paragraph = document.getElementById("text");

  paragraph.style.color = "red";
}

function paragraphcolor() {
  var paragraph6 = document.getElementById("paragraphbackground");
  paragraph6.style.backgroundColor = "brown";
}

//question 7
function numberToDigitsArray(number) {
  var numberString = number.toString();

  var digitsArray = [];

  for (var i = 0; i < numberString.length; i++) {
    digitsArray.push(parseInt(numberString[i]));
  }

  // Return the array of digits
  return digitsArray;
}

function convertAndDisplay() {
  var numberInput = document.getElementById("numberInput").value;
  var result = numberToDigitsArray(numberInput);
  document.getElementById("result").innerText =
    "Array of Digits: " + result.join(", ");
}

//question8
function filterOutValues() {
  // Get input values from user
  var originalArrayInput = document.getElementById("originalArray").value;
  var filterValuesInput = document.getElementById("filterValues").value;

  // Convert input strings to arrays
  var originalArray = originalArrayInput.split(",").map(Number);
  var filterValues = filterValuesInput.split(",").map(Number);

  // Filter out specified values
  var filteredArray = originalArray.filter(function (value) {
    return !filterValues.includes(value);
  });

  // Display the filtered array
  document.getElementById("result1").innerText =
    "Filtered Array: " + filteredArray;
}
