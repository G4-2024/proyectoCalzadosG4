// archivo validacion.js
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value; 
    const mensaje = document.getElementById('mensaje').value;

    // Validación básica
    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Validación de formato de correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        alert('Ingresa un correo electrónico válido.');
        return false;
    }

    // Validación de formato de numero telefono
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, introduce un número de teléfono válido (10 dígitos).");
        return false; 
    }
    return true;
}