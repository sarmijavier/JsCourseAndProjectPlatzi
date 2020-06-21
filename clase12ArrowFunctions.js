var javier = {
    nombre: 'Javier',
    apellido: 'Sarmiento',
    edad: 20,
    ingeniero: true,
    cocinero: false,
    dj: false,
    cantante: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}



function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es :`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.dj) {
        console.log('Dj')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Drone')
    }

}

imprimirProfesiones(javier)

const MAYORIA_DE_EDAD = 18 //CONSTANTES

//asignar una variable a una función, función anonima, dos formas de escribirla
/* const  esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD // retornan implicitamente, desestructurar
const esMenorDeEdad = ({ edad }) => edad <= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log('Es mayor de edad')
    } else {
        console.log('No es mayor de edad')
    }

}

function permitirAcceso(persona) {
    if (!esMenorDeEdad(persona)) {
        console.log('Acceso Denegado')
    }
}

imprimirSiEsMayorDeEdad(javier)