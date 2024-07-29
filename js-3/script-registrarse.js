// Función para mostrar u ocultar contraseñas
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function() {
        // Obtiene el input relacionado al toggle actual
        const passwordField = this.previousElementSibling; 
        const togglePassword = this;
        
        // Alterna el tipo de input entre 'password' y 'text'
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.textContent = '🙈'; // Cambia el icono al de ojos cerrados
        } else {
            passwordField.type = 'password';
            togglePassword.textContent = '👁️'; // Cambia el icono al de ojos abiertos
        }
    });
});
