//------------------------------------------------------------------------------
function printMessage()
{
  var img = document.getElementById("googleImage");
  img.setAttribute('src','images/g.jpg');
  var par = document.getElementById("par1");
  par.innerHTML += "Hello all!";
}
//------------------------------------------------------------------------------
//
function sumMessage()
{
var x =document.getElementById("xVar").value;
var y =document.getElementById("yVar").value;
var sum = parseInt(x) + parseInt(y);
var output = document.getElementById("total");
output.innerHTML = sum;
}
//------------------------------------------------------------------------------
function changeImage()
{
var img = $("myImage");//getting attribute by Id
img.attr('src','images/g.jpg');
$('img').fadeTo("slow",0.5);
}
