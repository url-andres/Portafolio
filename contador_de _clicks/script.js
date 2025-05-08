let contador = 0;

const boton = document.getElementById("clickButton");
const displayContador = document.getElementById("contador");

boton.addEventListener("click", function() {
    contador++; 
    displayContador.innerText = contador;
});
