import { postUsers } from "./llamados.js";

const tipo = document.getElementById("tipo");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const cedula = document.getElementById("cedula");
const email = document.getElementById("email");
const password = document.getElementById("password");
const sumit = document.getElementById("sumit");

sumit.addEventListener("click", async function () {
    // Validar campos vacíos
    if (tipo.value === "" || name.value === "" || lastName.value === "" || cedula.value === "" || email.value === "" || password.value === "") {
        Swal.fire({
            title: "Espacios en blanco",
            text: "Por favor, complete todos los campos.",
            icon: "error"
        });
        return;
    }

    try {
        // Intentar registrar al usuario
        await postUsers(tipo.value, name.value, lastName.value, cedula.value, email.value, password.value);

        Swal.fire({
            title: "Registro Exitoso",
            text: "Usuario registrado correctamente.",
            icon: "success"
        }).then(() => {
            // Redirigir a la página de inicio de sesión después de registrar
            window.location.href = 'login.html';
        });

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        Swal.fire({
            title: "Error al registrar",
            text: "Inténtalo de nuevo.",
            icon: "error"
        });
    }
});
