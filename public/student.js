import { posFormulario } from "./llamadform.js";

const nombreEstudiante = document.getElementById("nombreEstudiante");
const date = document.getElementById("date");
const hour = document.getElementById("hour");
const consultaInput = document.getElementById("consulta");
const solicitarBtn = document.getElementById("solicitar");
const registroDiv = document.getElementById("registro");
const logoutBtn = document.getElementById("logout");

// Obtener el nombre del estudiante desde localStorage
const estudiante = localStorage.getItem("nombre");

if (estudiante) {
    nombreEstudiante.textContent = `Estudiante: ${estudiante}`;
} else {
    nombreEstudiante.textContent = "Estudiante no identificado";
}

// Manejar la solicitud de un nuevo ticket
solicitarBtn.addEventListener("click", async function () {
    let fecha = new Date().toLocaleString('es-ES', { hour12: false, second: '2-digit', minute: '2-digit', hour: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' }).slice(0, -3);
    
    if (consultaInput.value === "" || fecha === "") {
        alert("Por favor complete todos los campos.");
        return;
    }
    else {
        console.log(estudiante,fecha,consultaInput.value);
        
        posFormulario(estudiante,fecha,consultaInput.value)
    }



    // Crear un nuevo elemento de registro de consulta
    const consultaElemento = document.createElement("p");
    const fechaHora = new Date().toLocaleString();
    consultaElemento.textContent = `${fechaHora} - ${estudiante} - ${consultaInput.value}`;

    registroDiv.appendChild(consultaElemento);
    consultaInput.value = "";

    // Guardar la consulta en localStorage para persistencia
    guardarConsultaLocalStorage(consultaElemento.textContent);
});

// Cargar consultas previas desde localStorage
cargarConsultasPrevias();

// Función para guardar las consultas en localStorage
function guardarConsultaLocalStorage(consulta) {
    let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultas.push(consulta);
    localStorage.setItem("consultas", JSON.stringify(consultas));
}

// Función para cargar las consultas previas desde localStorage
function cargarConsultasPrevias() {
    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultas.forEach((consulta) => {
        const consultaElemento = document.createElement("p");
        consultaElemento.textContent = consulta;
        registroDiv.appendChild(consultaElemento);
    });
}

// Manejar el cierre de sesión
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("nombreEstudiante");
    localStorage.removeItem("consultas");
    window.location.href = "login.html";
});
