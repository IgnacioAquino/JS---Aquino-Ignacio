// FILAS

function agregarProducto(){
    const tabla = document.getElementById("tabla")
    let fila = ""
    productos.forEach(producto => {
        fila = `<tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.id}</td>
                </tr>`

                tabla.innerHTML += fila
        });
}

agregarProducto()


