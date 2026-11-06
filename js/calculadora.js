
function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 + num2;

    document.getElementById("resultado1").value = resultado;
}


function restar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 - num2;

    document.getElementById("resultado1").value = resultado;
}


function multi() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 * num2;

    document.getElementById("resultado1").value = resultado;
}


function divi() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa los dos números.");
        return;
    }

    if (num2 === 0) {
        alert("No se puede dividir entre cero.");
        return;
    }

    let resultado = num1 / num2;

    document.getElementById("resultado1").value = resultado;
}
