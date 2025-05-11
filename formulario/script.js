function validarCorreo() {
  const campo = document.getElementById("correo");
  const error = document.getElementById("errorCorreo");
  const correo = campo.value.trim();
  const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com|icloud\.com|live\.com)$/;

  if (!regex.test(correo)) {
    error.textContent = "Por favor ingresa un correo válido de Gmail, Hotmail, Outlook, Yahoo, iCloud o Live.";
    campo.focus();
    return false;
  }

  error.textContent = "";
  return true;
}
