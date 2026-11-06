
function calcular() {
    let formulario = document.querySelector("form");
    let campos = formulario.querySelectorAll("input");

    let nota1 = Number(campos[0].value);
    let nota2 = Number(campos[1].value);
    let nota3 = Number(campos[2].value);

    if (campos[0].value === "" || campos[1].value === "" || campos[2].value === "") {
        alert("Por favor, ingresa las tres notas.");
        return;
    }

    if (
        nota1 < 0 || nota1 > 5 ||
        nota2 < 0 || nota2 > 5 ||
        nota3 < 0 || nota3 > 5
    ) {
        alert("Las notas deben estar entre 0.0 y 5.0");
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    campos[3].value = promedio.toFixed(2);
}
