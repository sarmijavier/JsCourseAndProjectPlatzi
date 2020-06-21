const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opts = { crossDomain: true }


function obtenerPersonaje(id) {
    return new Promise(function(resolve, reject) {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data) {
                resolve(data) //no se va a llamar esta función hasta que sea exitoso
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtner el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]

var promesas = ids.map((id) => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)