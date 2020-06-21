var javier = {
    nombre: 'Javier',
    apellido: 'Sarmiento',
    edad: 20
}
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(javier)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })