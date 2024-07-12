document.addEventListener("DOMContentLoaded", function () {
    // Animación de entrada para el contenido principal
    const mainContent = document.querySelector('.main-futuro');
    mainContent.style.opacity = '1';

      // Animación de entrada para la imagen
    const imgFuturo = document.querySelector('.img-futuro');
    imgFuturo.style.opacity = '1';
});

//MODALFUTURO
document.addEventListener("DOMContentLoaded", () => {
  const btnAbrirModal = document.getElementById("btn-abrir-modal");
  const modalFuturo = document.getElementById("modal-futuro");
  const btnCerrarModal = document.getElementById("btn-cerrar-modal");
  const formContacto = document.getElementById("contacto-form");

  btnAbrirModal.addEventListener("click", () => {
      modalFuturo.showModal();
  });

  btnCerrarModal.addEventListener("click", () => {
      modalFuturo.close();
      window.location.href = "index.html"; // Redirige a la página principal
  });

  formContacto.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(formContacto);
      const params = new URLSearchParams(formData).toString();
      
      alert("Gracias por enviarnos su información, en breve nos comunicaremos");

      // Limpiar los campos del formulario
      formContacto.reset();

      // Opcionalmente, podrías enviar la información a un servidor
      // fetch("tu-servidor-endpoint?" + params);

      modalFuturo.close();
  });
});
//TERMINA MODAL FUTURO