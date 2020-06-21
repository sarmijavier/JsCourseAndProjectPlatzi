var javier = {
    nombre: 'Javier',
    apellido: 'Sarmiento',
    edad: 20,
    peso: 60
}

console.log(`Al inicio del año ${javier.nombre} pesa ${javier.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = javier.peso - 3
var dias = 0

while (javier.peso > META) {
    //debugger
    if (comeMucho()) {
        //aumenta de pesona
        aumentarDePeso(javier)
    }
    if (realizaDeporte()) {
        //adelgazar
        adelgazar(javier)
    }
    dias += 1

}

console.log(`Pasaron ${dias} días hasta que ${javier.nombre} adelgazó 3kg`)