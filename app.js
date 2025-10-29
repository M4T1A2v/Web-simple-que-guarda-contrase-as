const masterPassword = "1234";

function acceder() {
    const clave = document.getElementById("masterKey").value;
    if (clave.toLowerCase() === masterPassword.toLowerCase()) {
        document.getElementById("app").style.display = "block";
    } else {
        alert("Contraseña incorrecta");
    }
}

function guardar() {
    const sitio = document.getElementById("sitio").value.toLowerCase();
    const clave = document.getElementById("clave").value;
    if (sitio && clave) {
        localStorage.setItem(sitio, clave);
        alert("Contraseña guardada.");
        document.getElementById("sitio").value = "";
        document.getElementById("clave").value = "";
    }
}

function buscar() {
    const sitio = document.getElementById("buscarSitio").value.toLowerCase();
    const resultado = localStorage.getItem(sitio);
    document.getElementById("resultado").innerText = resultado 
        ? `Contraseña: ${resultado}` 
        : "No se encontró la contraseña.";
}
