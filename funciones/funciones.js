// Función para mostrar un saludo en la página de inicio
function mostrarSaludo() {
    alert("¡Bienvenido a la Sociedad Gastronómica y Cultural!");
}

// Función para cambiar el color de fondo en la página de recetas
function cambiarColorFondo() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Función para mostrar la fecha actual en la página de eventos
function mostrarFecha() {
    alert("Hoy es " + new Date().toLocaleDateString());
}

// Función para mostrar información adicional en la página de acerca de
function mostrarInfo() {
    alert("Nuestra sociedad fue fundada en 1990 y desde entonces hemos organizado más de 1000 eventos.");
}

// Función para validar el formulario en la página de contacto
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
    } else {
        alert("Formulario completado correctamente.");
    }
}
