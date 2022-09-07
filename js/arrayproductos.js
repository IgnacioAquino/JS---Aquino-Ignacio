// PRODUCTOS
let precio = ""
const carrito = []
const IVA = 1.20
const productos = [ 
                {nombre: "MONITOR", precio: 20000, id: 124},
                {nombre: "MOUSE", precio: 5000, id: 456},
                {nombre: "TECLADO", precio: 6000, id: 789},
                {nombre: "GABINETE", precio: 25000, id: 987},
                {nombre: "PLACA DE VIDEO", precio: 40000, id: 654},
                {nombre: "PROCESADOR", precio: 30000, id: 321}
]

// CARRITO

class Producto{
    constructor(id, nombre, precio){
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

function anadirCarrito(){

    carrito.push(new Producto(2345, "TECLADO", 6000))
    carrito.push(new Producto(3456, "MONITOR", 20000))
    carrito.push(new Producto(2345, "MOUSE", 6000))
    carrito.push(new Producto(4567, "GABINETE", 19000))
    carrito.push(new Producto(5678, "PLACA DE VIDEO", 60000))
    carrito.push(new Producto(6789, "PROCESADOR", 25000))

}


// BUSCADOR

function buscarProducto() {
    
    let item = prompt("Ingrese el producto que desea:").toUpperCase()
    debugger
    let resultado = productos.filter((producto)=> producto.nombre.includes(item))

    console.table(resultado)


    switch (item){
        case "MONITOR":
            precio = 20000;
            carrito.push(new Producto(3456, "MONITOR", 20000))
            break;

        case "MOUSE":
            precio = 5000;
            carrito.push(new Producto(2345, "MOUSE", 6000))
            break;

        case "TECLADO":
            precio = 6000;
            carrito.push(new Producto(2345, "TECLADO", 6000))
            break;

        case "GABINETE":
            precio = 25000;
            carrito.push(new Producto(4567, "GABINETE", 19000))
            break;

        case "PLACA DE VIDEO":
            precio = 40000;
            carrito.push(new Producto(5678, "PLACA DE VIDEO", 60000))
            break;

        case "PROCESADOR":
            precio = 30000;
            carrito.push(new Producto(6789, "PROCESADOR", 25000))
            break;

    }

    compra()
}

buscarProducto()


// COMPRA

function compra() {
     realizarCompra = confirm("Usted desea realizar la compra?")
    if (realizarCompra == true){
       
        const cuotas = prompt("Ingrese la cantidad de cuotas(1,3,6,12):")
        calculoCuotas(precio, IVA, cuotas)
    }
    else {
        console.log("Bueno, siga mirando tranquilo.")
    }
}




// CALCULO

function calculoCuotas(precio, IVA, cuotas){
    console.log("El valor de cada cuota con los intereses seria de:", precio * IVA / cuotas)
    return
    
}





