function convertirMayusculas() {
    const textoEntrada = document.getElementById("textoEntrada").value;
    const textoMayusculas = textoEntrada.toUpperCase();
    document.getElementById("textoSalida").textContent = textoMayusculas;
  }
  