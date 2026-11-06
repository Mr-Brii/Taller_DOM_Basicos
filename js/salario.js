
function calcular() {
    let formulario = document.querySelector("form");
    let campos = formulario.querySelectorAll("input");

    let horas = Number(campos[0].value);
    let valorHora = Number(campos[1].value);

    if (campos[0].value === "" || campos[1].value === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (horas <= 0 || valorHora <= 0) {
        alert("Las horas y el valor por hora deben ser mayores que cero.");
        return;
    }

    let salario;

    if (horas > 8) {
        let horasNormales = 8;
        let horasExtra = horas - 8;

        let pagoNormal = horasNormales * valorHora;
        let pagoExtra = horasExtra * valorHora * 1.25;

        salario = pagoNormal + pagoExtra;
    } else {
        salario = horas * valorHora;
    }

    campos[2].value = salario.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}
