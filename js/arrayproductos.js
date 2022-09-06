// PRODUCTOS
const IVA = 1.20
const productos = [ 
                {nombre: "MONITOR", precio: 20000, id: 124},
                {nombre: "MOUSE", precio: 5000, id: 456},
                {nombre: "TECLADO", precio: 6000, id: 789},
                {nombre: "GABINETE", precio: 25000, id: 987},
                {nombre: "PLACA DE VIDEO", precio: 40000, id: 654},
                {nombre: "PROCESADOR", precio: 30000, id: 321}
]



// BUSCADOR

function buscarProducto() {
    
    let item = prompt("Ingrese el producto que desea:").toUpperCase()
    debugger
    let resultado = productos.filter((producto)=> producto.nombre.includes(item))

    console.table(resultado)

    if (item === "MONITOR"){
        let precio = console.log(precio)
    } else if (item === "MOUSE"){
        let precio = 5000
    } else if (item === "TECLADO"){
        let precio = 6000
    } else if (item === "GABINETE"){
        let precio = 25000
    } else if (item === "PLACA DE VIDEO"){
        let precio = 40000
    } else if (item === "PROCESADOR"){
        let precio = 30000
    } else {
        alert("No contamos con stock de ese producto.")
    }

    compra()
    calculo(precio, IVA, cuotas)
    
    
}

buscarProducto()


// COMPRA

function compra() {
    let realizarCompra = confirm("Usted desea realizar la compra?")
    if (realizarCompra == true){
        const cuotas = prompt("Ingrese la cantidad de cuotas(1,3,6,12):")
        
    }
    else {
        console.log("Bueno, siga mirando tranquilo.")
    }


}




// CALCULO

function calculo(precio, IVA, cuotas){
    console.log("El valor de cada cuota seria de:", precio * IVA / cuotas)
    return
    
}

