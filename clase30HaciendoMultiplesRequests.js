const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opts = { crossDomain: true }

const onPeopleResponse = function(person) {
    console.log(`Hola yo soy ${person.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

for (var i = 0; i < 100; i++) {
    obtenerPersonaje(i)
}