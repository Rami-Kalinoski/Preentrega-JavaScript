function validarProducto (texto) {
    let valor = parseInt(prompt(texto))
    while (valor!=1 && valor!=2 && valor!=3 && valor!=-1) {
        alert("Error, no ha ingresado correctamente el número.");
        valor = parseInt(prompt(texto));
    }
    return valor
}
function validarCuotas (texto) {
    let valor = parseInt(prompt(texto))
    while (valor!=1 && valor!=3 && valor!=6 && valor!=-1) {
        alert("Error, no ha ingresado correctamente el número.");
        valor = parseInt(prompt(texto));
    }
    return valor
}

let precioFinal;
let cuota;
let telefono;
// const precios = {
//     1 : 6200,
//     2 : 6000,
//     3 : 6750
// }

let producto = validarProducto("Nuestros Productos:\n1. Remera blanca por $6.200.\n2. Remera negra por $6.000.\n3. Remera azul por $6.750.\n\nSeleccione el producto que quiere adquirir (1, 2 o 3).\nIngrese '-1' para cancelar la compra.")
if (producto!=-1) {
    let cuotas = validarCuotas("Seleccione la cantidad de cuotas en que quiere abonar:\n\n--> 1 cuota con precio de lista.\n--> 3 cuotas con 10% de incremento.\n--> 6 cuotas con 20% de incremento.\n\nIngrese '-1' para cancelar la compra.")
    if (cuotas!=-1) {

        // if (cuotas==1) {
        //     precioFinal = precios[producto]
        //     telefono = prompt("El precio final del producto es de $" + precioFinal.toString() + ".\n\nIngrese su teléfono:")
        //     while (telefono=='') {
        //         telefono = prompt("Porfavor, ingrese un teléfono:")
        //     }
        //     alert("Gracias por comprar en Phanterz Indumentaria!\nPronto nos contactaremos a " + telefono + " para finalizar la compra, que tengar un buen día!")
        // }
        // else if (cuotas==3) {
        //     precioFinal = precios[producto] + (precios[producto]*0.10)
        //     cuota = precioFinal/3
        //     telefono = prompt("El precio final del producto es de $" + precioFinal.toString() + ".\nCada cuota será de $" + cuota.toString() + ".\n\nIngrese su teléfono:")
        //     while (telefono=='') {
        //         telefono = prompt("Porfavor, ingrese un teléfono:")
        //     }
        //     alert("Gracias por comprar en Phanterz Indumentaria!\nPronto nos contactaremos a " + telefono + " para finalizar la compra, que tengar un buen día!")
        // }
        // else if (cuotas==6) {
        //     precioFinal = precios[producto] + (precios[producto]*0.20)
        //     cuota = precioFinal/6
        //     telefono = prompt("El precio final del producto es de $" + precioFinal.toString() + ".\nCada cuota será de $" + cuota.toString() + ".\n\nIngrese su teléfono:")
        //     while (telefono=='') {
        //         telefono = prompt("Porfavor, ingrese un teléfono:")
        //     }
        //     alert("Gracias por comprar en Phanterz Indumentaria!\nPronto nos contactaremos a " + telefono + " para finalizar la compra, que tengar un buen día!")
        // }
    } else {
        alert("Compra cancelada.")
    }
} else {
    alert("Compra cancelada.")
}