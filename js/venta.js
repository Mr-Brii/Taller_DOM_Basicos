
function calcular() {

    let formulario = document.querySelector("form");
    let campos = formulario.querySelectorAll("input");

    let producto = campos[0].value.trim();
    let cantidad = Number(campos[1].value);
    let precio = Number(campos[2].value);

    if (producto === "" || campos[1].value === "" || campos[2].value === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!Number.isFinite(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
        alert("La cantidad debe ser un número entero mayor que cero.");
        return;
    }

    if (!Number.isFinite(precio) || precio < 0) {
        alert("El precio debe ser un número válido y no negativo.");
        return;
    }

    let subtotal = cantidad * precio;
    let iva = subtotal * 0.19;
    let descuento = 0;

    if (cantidad > 10) {
        descuento = subtotal * 0.05;
    }

    let total = subtotal + iva - descuento;

    let formato = {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    };

    campos[3].value = subtotal.toLocaleString("es-CO", formato);
    campos[4].value = iva.toLocaleString("es-CO", formato);
    campos[5].value = descuento.toLocaleString("es-CO", formato);
    campos[6].value = total.toLocaleString("es-CO", formato);
}
