var nombre = 'Javier',
    edad = 20


//cierto nombre tiene tantos años
function imprimirEdad() {
    //cuerpo de la función
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad()

//función acepte parámetros

function imprimirEdadSegundaVez(nombre, edad) {
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdadSegundaVez(nombre, edad)
imprimirEdadSegundaVez('Vicky', 28)
imprimirEdadSegundaVez('Darío', 27)
imprimirEdadSegundaVez(27, 'Eric')
imprimirEdadSegundaVez()
    //Es un lenguaje que no espera a que todo este definido, hay que tener cuidado con eso,
    //débilmente tipado