let contador = 0;

document.getElementById("clickButton").onclick = function() {
  contador++;
  document.getElementById("contador").textContent = contador;
};
