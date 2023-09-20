document.addEventListener("DOMContentLoaded", function () {
    const clienteForm = document.getElementById("clienteForm");

    clienteForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores ingresados por el usuario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;

        // Aquí puedes realizar cualquier acción que desees con estos datos, como enviarlos a un servidor o almacenarlos en el navegador.

        // Por ejemplo, puedes mostrar un mensaje de éxito:
        alert(`¡Cliente registrado con éxito!\nNombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}`);

        // Limpiar el formulario después de guardar los datos
        clienteForm.reset();
    });
});
