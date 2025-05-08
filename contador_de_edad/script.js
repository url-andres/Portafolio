function guardarValor() {
    const yearNacimiento = document.getElementById("year").value;

    if (!yearNacimiento || isNaN(yearNacimiento)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un año de nacimiento válido.";
        return;
    }

    const hoy = new Date();
    const añoActual = hoy.getFullYear();

    let edad = añoActual - parseInt(yearNacimiento);

    document.getElementById("resultado").innerText = `Tu edad es: ${edad} años`;
}

