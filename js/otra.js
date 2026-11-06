
function calcularPresupuesto() {
    let formulario = document.querySelector("form");
    let campos = formulario.querySelectorAll("input");

    let invitados = Number(campos[0].value);
    let costoComida = Number(campos[1].value);
    let costoBebida = Number(campos[2].value);
    let decoracion = Number(campos[3].value);
    let musica = Number(campos[4].value);
    let porcentajePropina = Number(campos[5].value);

    for (let campo of campos) {
        if (campo.value === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }
    }

    if (!Number.isInteger(invitados) || invitados <= 0) {
        alert("El número de invitados debe ser mayor que cero.");
        return;
    }

    if (
        costoComida < 0 ||
        costoBebida < 0 ||
        decoracion < 0 ||
        musica < 0 ||
        porcentajePropina < 0
    ) {
        alert("Los valores no pueden ser negativos.");
        return;
    }

    let comidaTotal = invitados * costoComida;
    let bebidaTotal = invitados * costoBebida;

    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;

    let propina = subtotal * (porcentajePropina / 100);

    let totalGeneral = subtotal + propina;

    let costoPorInvitado = totalGeneral / invitados;

    let formato = {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    };

    let filas = document.querySelectorAll("tbody tr");

    filas[0].children[1].textContent = comidaTotal.toLocaleString("es-CO", formato);
    filas[1].children[1].textContent = bebidaTotal.toLocaleString("es-CO", formato);
    filas[2].children[1].textContent = decoracion.toLocaleString("es-CO", formato);
    filas[3].children[1].textContent = musica.toLocaleString("es-CO", formato);
    filas[4].children[1].textContent = subtotal.toLocaleString("es-CO", formato);
    filas[5].children[1].textContent = propina.toLocaleString("es-CO", formato);
    filas[6].children[1].textContent = totalGeneral.toLocaleString("es-CO", formato);
    filas[7].children[1].textContent = costoPorInvitado.toLocaleString("es-CO", formato);
}
