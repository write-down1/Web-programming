var elementP = document.createElement("p");
var paragraph = document.createTextNode("Hello world");
var contentdiv = document.getElementById("content");
elementP.appendChild(paragraph);
contentdiv.appendChild(elementP);

//-------------------------------------------------//

var elementli = document.createElement("li");
var description = document.createTextNode("new Item");
var ul = document.getElementById("mylist");

elementli.appendChild(description);
ul.appendChild(elementli);

//----------------------------------------------------//

var span = document.getElementsByClassName("info");
for (var i = 0; i < span.length; i++) {
  var elementspan = document.createElement("span");
  var spanDescription = document.createTextNode("This is an information box");
  elementspan.appendChild(spanDescription);
  span[i].appendChild(elementspan);
}
console.log(span.length);

//-------------------------------------------------------//

// question 4////

var list = document.getElementById("list");

var newItem = document.createElement("li");
var newItemParag = document.createTextNode("add by java");
newItem.appendChild(newItemParag);
list.appendChild(newItem);

list.insertBefore(newItem, list.firstChild);

//----------------------------------------------------------///

// question 5////

var newDivContainer = document.getElementById("container");

var childNodesDiv = newDivContainer.childNodes.length;

window.alert("(question 5) container div has " + childNodesDiv + " children");

//-------------------------------------------------------//
//bonus question//

var bonusButton = document.getElementById("bonusQuestion");

bonusButton.addEventListener("click", function () {
  window.location.href = "bonusQuestion.html";
});
