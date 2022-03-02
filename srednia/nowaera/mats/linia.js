
document.addEventListener("DOMContentLoaded", function () {
 linia(num);
});
var num;
num.typof == string;
function linia(num) {
  var a = num;
var c = document.getElementById(a);
var ctx=c.getContext("2d");
var s=a.getAttribute("width");
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(s-20,10);
ctx.lineTo(10,10);
ctx.stroke();
var k=9;/* ile kresek wpisać o 1 więcej niż ma być*/
var y=(s-20)/k;
for (var x = y+0.5; x < s-40; x += y ) {
  ctx.moveTo(x,5);
  ctx.lineTo(x,15);
  ctx.lineTo(x,5);
}
ctx.stroke();
ctx.moveTo(s-20,10);
ctx.lineTo(s-30,5);
ctx.lineTo(s-30,15);
ctx.lineTo(s-20,10);
ctx.fillStyle="#000000";
ctx.fill();
ctx.stroke();

var lg=1;
if (lg=0) {
ctx.font = "20px Tahoma";
textAlign = "center";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
ctx.fillText("1", y-4, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
ctx.strokeStyle="#000000";}
 else if (lg=1){
ctx.font = "15px Tahoma";
textAlign = "center";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
ctx.fillText("1", y-4, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
ctx.strokeStyle="#000000";
ctx.moveTo(y-5,33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
ctx.lineTo(y+5,33);
ctx.lineTo(y-5,33);}
else if (lg=2){
	ctx.font = "15px Tahoma";
textAlign = "center";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
ctx.fillText("1", y-8, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
ctx.strokeStyle="#000000";
ctx.moveTo(y-9,33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
ctx.lineTo(y+9,33);
ctx.lineTo(y-9,33);}
else {
	ctx.font = "15px Tahoma";
textAlign = "center";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
ctx.fillText("1", y-12, 30);/* jeśli jednocyfrowa to -4, dla dwucyfrowej -8*/
ctx.strokeStyle="#000000";
ctx.moveTo(y-13,33);/*  -5 dla jednocyfrowych, a -9 dla dwucyfrowych */
ctx.lineTo(y+13,33);
ctx.lineTo(y-13,33);}
ctx.font = "15px Tahoma";
textAlign = "center";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
var ld=1;
if (ld=1 && lg!=0){
ctx.fillText("2", y-4, 48);}
else if (ld=2 && lg!=0){
ctx.fillText("2", y-8, 48);}
else if (ld=3 && lg!=0){
ctx.fillText("2", y-12, 48);}

ctx.font = "15px Tahoma";
textAlign = "center";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
ctx.fillText("x", 4*y-4, 30);
ctx.strokeStyle="#000000";
ctx.font = "15px Tahoma";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
ctx.fillText("5", 7*y-4, 30);
ctx.strokeStyle="#000000";
ctx.moveTo(7*y-5,33);
ctx.lineTo(7*y+5,33);
ctx.lineTo(7*y-5,33);
ctx.font = "15px Tahoma";
ctx.shadowColor = "#888";
ctx.shadowBlur = "15";
ctx.fillText("6", 7*y-4, 48);
ctx.strokeStyle="#000000";
ctx.stroke();

ctx.beginPath();
ctx.arc(4*y,10,3,0,10*Math.PI);
ctx.strokeStyle="red";
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();}
