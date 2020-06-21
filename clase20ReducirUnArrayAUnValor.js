var luis = {
    nombre: 'Luis',
    apellido: 'Chavez',
    altura: 150,
    cantidadDeLibros: 10
}
var pau = {
    nombre: 'Luz',
    apellido: 'Sarmiento',
    altura: 173,
    cantidadDeLibros: 15
}
var luz = {
    nombre: 'Luz',
    apellido: 'Ospina',
    altura: 160,
    cantidadDeLibros: 13
}
var elkin = {
    nombre: 'Elkin',
    apellido: 'Sarmiento',
    altura: 180,
    cantidadDeLibros: 5
}

var rolando = {
    nombre: 'Rolando',
    apellido: 'Sarmiento',
    altura: 175,
    cantidadDeLibros: 7
}

var personas = [luis, pau, luz, elkin, rolando]

/* var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
}
 */

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)