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

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona['nombre']} mide ${persona['altura']}cm`)
}