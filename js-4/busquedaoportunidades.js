// Función para actualizar el input cuando se selecciona una opción del dropdown
function actualizarInput(opcionSeleccionada, inputDestino) {
    inputDestino.value = opcionSeleccionada;
    mostrarSeleccionEnOtroLugar(opcionSeleccionada, inputDestino);
}

// Función para mostrar la selección en otro lugar con la "X" para eliminar
function mostrarSeleccionEnOtroLugar(valor, inputDestino) {
    const idInput = inputDestino.classList[1]; // Obtén la clase que identifica el input
    const resultadoDiv = document.getElementById(`resultado-${idInput}`);
    if (resultadoDiv) {
        // Limpiar cualquier contenido previo en el div
        resultadoDiv.innerHTML = '';

        // Solo proceder si hay un valor seleccionado
        if (valor && valor.trim() !== '') { 
            const spanTexto = document.createElement('span');
            spanTexto.textContent = `Has seleccionado: ${valor}`;

            // Crear un span para la "X" que permitirá eliminar la selección
            const spanEliminar = document.createElement('span');
            spanEliminar.textContent = ' ×';
            spanEliminar.className = 'eliminar'; // Aplica la clase de estilo

            // Agregar el evento de click para eliminar el resultado
            spanEliminar.addEventListener('click', function () {
                resultadoDiv.innerHTML = ''; // Eliminar el contenido del div
                inputDestino.value = ''; // Vaciar el input asociado
            });

            // Añadir los spans al div de resultado
            resultadoDiv.appendChild(spanTexto);
            resultadoDiv.appendChild(spanEliminar);
        }
    }
}

// Inicializar el comportamiento para todos los dropdowns
document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
        const inputField = this.closest('.input-group').querySelector('input');
        actualizarInput(this.textContent, inputField);
    });
});

// Botón de búsqueda que muestra todas las selecciones
document.querySelector('.boton-busqueda').addEventListener('click', function () {
    const ubicacionSeleccionada = document.querySelector('.intr-ubica').value;
    const tipoOportunidadSeleccionada = document.querySelector('.intr-oportun').value;
    const sectorSeleccionado = document.querySelector('.intr-sect').value;

    // Solo mostrar si hay valor seleccionado
    if (ubicacionSeleccionada.trim() !== '') {
        mostrarSeleccionEnOtroLugar(ubicacionSeleccionada, document.querySelector('.intr-ubica'));
    }

    if (tipoOportunidadSeleccionada.trim() !== '') {
        mostrarSeleccionEnOtroLugar(tipoOportunidadSeleccionada, document.querySelector('.intr-oportun'));
    }

    if (sectorSeleccionado.trim() !== '') {
        mostrarSeleccionEnOtroLugar(sectorSeleccionado, document.querySelector('.intr-sect'));
    }
});

// Botón de limpiar que vacía los inputs y resultados
document.querySelector('.boton-limpiar').addEventListener('click', function () {
    // Limpiar inputs
    document.querySelector('.intr-ubica').value = '';
    document.querySelector('.intr-oportun').value = '';
    document.querySelector('.intr-sect').value = '';

    // Limpiar resultados mostrados
    document.getElementById('resultado-intr-ubica').innerHTML = '';
    document.getElementById('resultado-intr-oportun').innerHTML = '';
    document.getElementById('resultado-intr-sect').innerHTML = '';
});