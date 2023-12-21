// INICIALIZACIÓN DE VARIABLES ..........................................................................................
const cuotasPosibles = [
    {numero:1, aumento:1},
    {numero:3, aumento:1.15},
    {numero:6, aumento:1.25}
]

class Producto {
    constructor (id, nombre, precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
    aplicarInteres (aumento){
        let precioFinal;
        precioFinal = this.precio * aumento;
        return precioFinal;
    }
}

const productos = [
    new Producto(1, "remera blanca", 6000),
    new Producto(2, "remera negra", 6250),
    new Producto(3, "remera azul", 6500),
    new Producto(4, "pantalon negro", 7000),
    new Producto(5, "pantalon blanco", 7500)
]

// CREACIÓN DE FUNCIONES .................................................................................................
function validarIngresoEleccion (){
    let eleccion = prompt("Nuestros productos:\n1. Remera Blanca $6000\n2. Remera Negra $6250\n3. Remera Azul $6500\n4. Pantalón Negro $7000\n5. Pantalón Blanco $7500\n\nIngresa el producto que desea adquirir (-1 para cancelar la compra):");
    if (parseInt(eleccion)!==-1) {
        let productoElegido = productos.find( (producto) => {
            return producto.nombre===eleccion.toLocaleLowerCase();
        })
        while (productoElegido===undefined && parseInt(eleccion)!==-1) {
            eleccion = prompt("Error, no se ha ingresado un producto existente.\n\nNuestros productos:\n1. Remera Blanca $6000\n2. Remera Negra $6250\n3. Remera Azul $6500\n4. Pantalón Negro $7000\n5. Pantalón Blanco $7500\n\nIngresa el producto que desea adquirir (-1 para cancelar la compra):");
            productoElegido = productos.find( (producto) => {
                return producto.nombre===eleccion.toLocaleLowerCase();
            })
        }
        if (parseInt(eleccion)!==-1) {
            return productoElegido;
        } else {
            return parseInt(eleccion);
        }
    } else {
        return parseInt(eleccion);
    }
}

function validarIngresoCuotas () {
    let cuotas = parseInt(prompt("El pago se puede realizar en las siguientes cuotas:\n1 cuota con precio de lista.\n3 cuotas con 15% de interés.\n6 cuotas con 25% de interés.\n\nIngrese la cantidad de cuotas en que desea abonar (-1 para cancelar la compra):"));
    if (cuotas!==-1) {
        let existe = cuotasPosibles.some( (cuota) => cuotas===cuota.numero);
        while (!(existe) && parseInt(cuotas)!==-1) {
            cuotas = parseInt(prompt("Error, no se ha ingresado una cuota existente.\n\nEl pago se puede realizar en las siguientes cuotas:\n1 cuota con precio de lista.\n3 cuotas con 15% de interés.\n6 cuotas con 25% de interés.\n\nIngrese la cantidad de cuotas en que desea abonar (-1 para cancelar la compra):"));
            existe = cuotasPosibles.some( (cuota) => cuotas===cuota.numero);
        }
        return cuotas;
    } else {
        return cuotas;
    }
}

// PROGRAMA PRINCIPAL ..........................................................................................

const productoElegido = validarIngresoEleccion ()
if (parseInt(productoElegido)!==-1) {
    const cuotas = validarIngresoCuotas ()
    if (cuotas!==-1) {
        const cuotaElegida = cuotasPosibles.find ( (cuota) => cuota.numero===cuotas)
        const precio = (Math.ceil(productoElegido.aplicarInteres (cuotaElegida.aumento))).toFixed(2);
        const precioCuotas = (precio/cuotas).toFixed(2);
        const telefono = prompt("Ingresá un teléfono:");
        alert (`Gracias por comprar en Phanterz Indumentaria!\n\nNos comunicaremos a +${telefono} para finalizar la compra.\nEl precio final de tu producto "${productoElegido.nombre}" es de $${precio}.\nCada una de las ${cuotas} cuotas será de $${precioCuotas}.`)
    } else {
        alert ("Compra cancelada.")
    }
} else {
    alert ("Compra cancelada.")
}