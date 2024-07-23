document.addEventListener('DOMContentLoaded', function () {
    const loginCard = document.querySelector('.login-card');
    loginCard.style.opacity = 0;
    loginCard.style.transform = 'translateY(50px)';
    setTimeout(() => {
        loginCard.style.transition = 'all 0.5s ease-in-out';
        loginCard.style.opacity = 1;
        loginCard.style.transform = 'translateY(0)';
    }, 100);
});

/**Este código se utiliza para crear un efecto de animación suave para el elemento loginCard cuando se carga la página. Inicialmente, el loginCard es invisible y está desplazado hacia abajo. Después de un breve retraso (100 milisegundos), el loginCard aparece y se mueve suavemente a su posición original en un lapso de 0.5 segundos. Esto mejora la experiencia del usuario al hacer que el elemento loginCard aparezca de manera más atractiva y dinámica.
 */

// // Para la contraseña
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.textContent = '🙈'; // Cambia el icono al de ojos cerrados
    } else {
        passwordField.type = 'password';
        togglePassword.textContent = '👁️'; // Cambia el icono al de ojos abiertos
    }
});
