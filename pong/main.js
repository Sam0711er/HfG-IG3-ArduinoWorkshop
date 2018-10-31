var strings;

var socket = io("http://"+window.location.host);

//var textItem = document.getElementById('numbersText');

var player1Y;
var player2Y;

socket.on('potiValues', function(d){
  //console.log(d)
  //textItem.innerText = d;
  var res = d.split(",");
  player1Y = float(res[0]);
  player2Y = float(res[1]);
})
