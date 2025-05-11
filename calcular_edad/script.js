function calcularEdad() {
  const añoNacimiento = document.getElementById("anio").value;

  const añoActual = new Date().getFullYear();

  if (añoNacimiento && !isNaN(añoNacimiento)) {
    const edad = añoActual - parseInt(añoNacimiento);

    document.getElementById("resultado").textContent = `Tu edad es: ${edad} años.`;
  } else {
    document.getElementById("resultado").textContent = "Por favor, ingresa un año válido.";
  }
}
