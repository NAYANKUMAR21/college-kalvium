'use strict';
var Subtract = document.getElementById('Subtract');
var Add = document.getElementById('add');
var count = document.getElementById('span');
Add.addEventListener('click', function () {
  var x = Number(count.innerText);
  x++;
  count.innerHTML = x + '';
  console.log(x);
});
Subtract.addEventListener('click', function () {
  var x = Number(count.innerText);
  x--;
  count.innerHTML = x + '';
  console.log(x);
});
