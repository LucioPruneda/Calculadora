function valor(x) {
  document.getElementById("input").value += x;
}
function borrar(y) {
  document.getElementById("input").value = y;
}

function resultado() {
  let result = eval(document.getElementById("input").value);
  document.getElementById("input").value = result;
}
