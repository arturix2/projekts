window.onload = function() {
  zimetuzcanva();
}

function zimetuzcanva() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.fillStyle = "green";
  konteksts.fillRect(20,20,150,100);
}

function taisnsturis() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.strokeStyle = "red";
  konteksts.strokeRect(60,60,150,100);
}

function aplis() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.arc(200,200,50,0,2*Math.PI);
  konteksts.lineWidth = 20;
  konteksts.fillStyle = "green";
  konteksts.strokeStyle = "red";
  konteksts.fill();
  konteksts.stroke();
}

function linija() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.moveTo(50,300);
  konteksts.lineTo(250,350);
  konteksts.lineWidth = 5;
  konteksts.strokeStyle = "green";
  konteksts.stroke();
}

function teksts() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.font = "30px Sofia";
  konteksts.fillStyle = "red";
  konteksts.fillText("Sveiki, pasaule!", 200, 150);
}