import { getUsers} from "./llamados.js";

const userName = document.getElementById("UserName");
const password = document.getElementById("password");
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", async function () {
    // Validar campos vacíos
    if (userName.value === "" || password.value === "") {
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, complete ambos campos.",
        });
    
    }
    const usuariosRegist = await getUsers();
    console.log(usuariosRegist);
    let usuarioEncontrado= false;
        


        // Recorrer usuarios con for
        for (let index = 0; index < usuariosRegist.length; index++) {
            const usuario = usuariosRegist[index];
            if (userName.value === usuariosRegist[index].name && password.value === usuariosRegist[index].password) {
                usuarioEncontrado = true;

                if (usuario.tipo === "Administrador") {
                    localStorage.setItem("nombre",JSON.stringify(userName.value));

                    window.location.href = "administradores.html";

                } else if (usuario.tipo === "Estudiante") {

                    window.location.href = "estudiantes.html";
                }
                break;
            }
            localStorage.setItem("nombre",JSON.stringify(userName.value));
        }

        if (!usuarioEncontrado) {
            Swal.fire({
                icon: "error",
                title: "Usuario o contraseña incorrectos",
                text: "El nombre de usuario o la contraseña no coinciden.",
            });
        }

});

