// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  const logoutButton = document.getElementById("logout");

  logoutButton.addEventListener("click", function() {
    // Lógica para manejar el cierre de sesión
    alert("Cerrar sesión");
  });

  // Simular actualización de la imagen del usuario al iniciar sesión
  const userPhoto = document.getElementById("user-photo");
  const userName = document.getElementById("user-name");

  // Simular datos de usuario (esto debería venir del servidor en una aplicación real)
  const userData = {
    name: "Pepito Pérez Pérez",
    photo: "img/Avatar.png" // Ruta a la foto del usuario
  };

  // Actualizar la interfaz con los datos del usuario
  userName.textContent = userData.name;
  userPhoto.src = userData.photo;
});


/* show menu */
const navMenu = document.getElementById('nav-bar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
  