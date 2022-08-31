// PRESTAMO PERSONAL

// VARIABLES

let interes = 1.20

// BIENVENIDO

console.log("Bienvenido!")


// VERAZ

function denegado(){
    console.log("Gracias vuelvas prontos")
}

let veraz = confirm("Usted esta en el veraz?:")

if (veraz == true){
    alert("Usted no puede recibir un prestamo.")
    denegado()
}
    else{
    console.log("Perfecto, usted puede recibir un prestamo.")
    pedirDatos()
}



// DATOS
function pedirDatos(){
    const monto = prompt("Ingrese aqui el monto deseado:")
    const cuotas = prompt("Ingrese la cantidad de cuotas(3,6,12):")
    calculo(monto, interes, cuotas)
    
}


// CALCULO

function calculo(monto, interes, cuotas){
    console.log("El valor de cada cuota seria de:", monto * interes / cuotas)
    
}

