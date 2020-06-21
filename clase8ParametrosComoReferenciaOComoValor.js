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

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function imprimirEdad({ nombre, edad }) {
    console.log(`${nombre} tiene ${edad} años`)
}


imprimirNombreEnMayusculas(javier)
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })

imprimirEdad(javier)
imprimirEdad(sacha)

function cumpleaños(persona) {
    return {
        ...persona,
        edad: persona.edad + 1,
        cumpleaños: '2de agost'
    }
}

cumpleaños(javier)