



function halfNumb() {
  var numb = document.getElementById("half-input").value;
  var halfNumb = numb / 2;
  alert("half of " + numb + " is " + halfNumb);
  console.log("half of " + numb + " is " + halfNumb);
}

function fortune() {
  var name = document.getElementById("fortune-input").value;
  var fortunes = [
    "You will buy new pants",
    "Imitation is pure flattery",
    "Work will pay its dividends fully",
    "Take opportunity by the horns and command your ship.",
  ];
  var randomInd = Math.floor(Math.random() * fortunes.length);
  var finalStr = fortunes[randomInd];
  var msg =  name + ", here is your fortune: " + finalStr;
  document.getElementById("fortune-output").innerHTML = msg;
  restyle();
}

function restyle() {
  var fortuneOutput = document.getElementById("fortune-output")
  var sizeArr = ["162pt", "25pt", "36pt", "48pt"];
  var size = sizeArr[Math.floor(Math.random() * sizeArr.length)];
  var colorArr = ["red", "turquiose", "black", "purple", "hotpink", "blue"];
  var color = colorArr[Math.floor(Math.random() * colorArr.length)];
  var colorBG = colorArr[Math.floor(Math.random() * colorArr.length)];
  var textDecorationArr = ["none","underline","overline","dotted"];
  var textDecoration = textDecorationArr[Math.floor(Math.random() * textDecorationArr.length)];
  fortuneOutput.style.color = color;
  fortuneOutput.style.fontSize = size;
  fortuneOutput.style.textDecoration = textDecoration;
  fortuneOutput.style.background-color = colorBG;
}
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", halfNumb);
document.getElementById("fortune-button").addEventListener("click", fortune);
