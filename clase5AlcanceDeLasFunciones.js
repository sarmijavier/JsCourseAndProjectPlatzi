// a que variables podemos acceder cuando invocamos una función
var nombre = 'Javier' //-> variale global

//función que imprime nombre en mayúsculas
function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase() // -> variable local 
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)