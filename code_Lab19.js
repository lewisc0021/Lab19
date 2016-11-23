  //Add to Shopping Cart Table
  function addToCart(product,price)
  {
  var cart =document.getElementById("shoppingCart");
  var row = cart.insertRow(0);
  var productCell = row.insertCell(0);
  var priceCell = row.insertCell(1);

  var footer = cart.createTFoot();
  productCell.innerHTML = product;
  priceCell.innerHTML = price;
  calculateTotal()
  }

  function calculateTotal()
  {
  var cart =document.getElementById('shoppingCart');
  var runningTotal =document.getElementById("sum");
  var x;
  var y=0;
  for (var i = 0;i< cart.rows.length-1; i++)
  {
  x = cart.rows[i].cells.item(1).innerHTML;
  y+=parseFloat(x);
  console.log(y);
  }
  runningTotal.innerHTML=y
  }//END
