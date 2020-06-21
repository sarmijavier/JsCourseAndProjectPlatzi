var javier = {
    nombre: 'Javier',
    apellido: 'Sarmiento',
    edad: 20,
    peso: 60
}

console.log(`Al inicio del año ${javier.nombre} pesa ${javier.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 0; i < DIAS_DEL_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        // aumenta de peso
        aumentarDePeso(javier)
    } else if (random > 0.5) {
        // adelgazar
        adelgazar(javier)
    }
}

console.log(`Al final del año ${javier.nombre} pesa ${javier.peso}kg`)