// Se definen los valores correctos
var nombreCorrecto = "Michael";
var apellidoCorrecto = "Jordan";


// Función para comprobar los valores
function comprobar() {
    // Se obtienen los valores ingresados
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    // Variable para mostrar el resultado
    var result = document.getElementById("result");

    // COndicional para verificar el caso
    if (nombre == nombreCorrecto && apellido == apellidoCorrecto) {
        result.style.color = "green";
        result.textContent = "La respuesta es correcta";
    } else {
        result.style.color = "red";
        result.textContent = "La respuesta es incorrecta";
    }
}
