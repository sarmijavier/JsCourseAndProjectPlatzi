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
    //equivalent, pero mejor esta forma
    //var personasAltas = personas.filter(function(persona) {
    //return persona.altura >= 180
    //})

console.log(personasAltas)
console.log(personasBajas)