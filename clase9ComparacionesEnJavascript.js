var x = 4,
    y = '4'

x == y //compara contenido
x === y //comparar contenido y tipo de dato

var javier = {
    nombre: 'Javier'
}

var otraPersona = {
    nombre: 'Javier'
}

javier == otraPersona // false -> los compara en memoria
javier === otraPersona // false -> los compara en memoria
    //para que de true

var otraPerson2 = javier
otraPersona2 == javier // true -> mismo lugar en memoria
otraPersona2 === javier // true -> mismo lugar en memoria

var otraPersona3 = {
    ...javier
}

otraPersona3 == javier // false, es una nueva persona(objeto), otro lugar en memoria
otraPersona3 === javier // false, es una nueva persona(objeto), otro lugar en memoria