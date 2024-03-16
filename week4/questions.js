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
  paragraph6.style.backgroundColor = "blue";
}
