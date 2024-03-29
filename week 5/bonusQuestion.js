//-------------------------------------------------------//
var rootDiv = document.getElementById("root");

for (var i = 1; i < 2; i++) {
  var ulElement = document.createElement("ul");
  var liElement = document.createElement("li");

  var liParagaph = document.createTextNode("Level " + i);
  liElement.appendChild(liParagaph);
  rootDiv.appendChild(ulElement);
  ulElement.appendChild(liElement);

  for (var j = 0; j < 2; j++) {
    var ulElement2 = document.createElement("ul");
    var liElement2 = document.createElement("li");

    var liParagraph2 = document.createTextNode(
      "level " + (i + 1) + " - " + (j + 1)
    );

    liElement2.appendChild(liParagraph2);
    ulElement2.appendChild(liElement2);

    liElement.appendChild(ulElement2);
  }
}
