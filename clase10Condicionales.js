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


function imprimirSiEsMayorDeEdad({ edad }) {
    if (edad >= 18) {
        console.log('Es mayor de edad')
    } else {
        console.log('No es mayor de edad')
    }

}

imprimirSiEsMayorDeEdad(javier)