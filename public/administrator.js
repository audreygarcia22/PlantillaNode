import { getFormulario } from "./llamadform.js";

const nombreAdministrador = document.getElementById("nombreAdministrador");
const listaCola = document.getElementById("listaCola");
const respuestaInput = document.getElementById("respuesta");
const asistenciaBtn = document.getElementById("asistencia");
const logoutBtn = document.getElementById("logout");

// Obtener el nombre del administrador desde localStorage
const administrador = localStorage.getItem("nombre");

if (administrador) {
    nombreAdministrador.textContent = `Administrador: ${administrador}`;
} else {
    nombreAdministrador.textContent = "Administrador no identificado";
}

// Cargar la cola de tickets al cargar la página
document.addEventListener("DOMContentLoaded", async () => {

    mostrar()
});

// Manejar la respuesta a la consulta
asistenciaBtn.addEventListener("click", async function () {
    const respuesta = respuestaInput.value.trim();
    if (respuesta === "") {
        alert("Por favor ingrese una respuesta.");
        return;
    }
    


    
});

// Cerrar sesión
// logoutBtn.addEventListener("click", async function () {

//      localStorage.removeItem("nombre");

//     window.location.href = "login.html";
// });

mostrar()
async function mostrar() {
    const consultas = await getFormulario();

    for (let index = 0; index < consultas.length; index++) {
        const element = consultas[index];
        
        console.log(element);
        
        const div = document.createElement("div");
        div.id="div"

        const itemNom = document.createElement("p");
        itemNom.textContent = element.name

        const itemCon = document.createElement("p");
        itemCon.textContent = element.consulta

        const itemFecha = document.createElement("p");
        itemFecha.textContent = element.date


        div.appendChild(itemNom);
        div.appendChild(itemCon);
        div.appendChild(itemFecha);

        listaCola.appendChild(div);



    }
    
}
 
