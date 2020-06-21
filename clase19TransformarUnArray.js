var luis = {
    nombre: 'Luis',
    apellido: 'Chavez',
    altura: 150
}
var pau = {
    nombre: 'Luz',
    apellido: 'Sarmiento',
    altura: 173
}
var luz = {
    nombre: 'Luz',
    apellido: 'Ospina',
    altura: 160
}
var elkin = {
    nombre: 'Elkin',
    apellido: 'Sarmiento',
    altura: 180
}

var rolando = {
    nombre: 'Rolando',
    apellido: 'Sarmiento',
    altura: 175
}

var personas = [luis, pau, luz, elkin, rolando]

// filtrar personas altas 

const esAlta = ({ altura }) => altura >= 180
const esBajo = ({ altura }) => altura < 180

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBajo)

console.log(personasAltas)
console.log(personasBajas)

//mejor forma, los parentesis dicen que vamos a retornar el objeto o:
const pasarAlturaAMetros = (persona) => ({
    ...persona,
    altura: persona.altura / 100
})


/* {
    return {
        ...persona,
        altura: persona.altura / 100
    }
} */


var personasM = personas.map(pasarAlturaAMetros)

console.log(personasM)