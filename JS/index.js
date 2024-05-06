// En tu archivo validacion.js
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación básica (puedes agregar más condiciones según tus necesidades)
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

    // Aquí puedes enviar el formulario o realizar otras acciones
    // (por ejemplo, enviar los datos a un servidor mediante AJAX).

    return true;
}