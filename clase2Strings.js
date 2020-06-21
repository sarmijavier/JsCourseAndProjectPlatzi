var nombre = 'Javier', apellido = 'Sarmiento'

var nombreEnMayusculas = nombre.toUpperCase() //string a mayusculas
var apellidoEnMinuscula = nombre.toLocaleLowerCase() //string a minusculas


var primeraLetraDelNombre = nombre.charAt(0) //posición de un string, argumento posición

var cantidadDeLetrasDelNombre = nombre.length //es un atributo no una función

var nombreCompleto = nombre +' '+ apellido //concatenación de strings
var nombreCompleto2 = `${nombre} ${apellido}` //interpolación de texto, interpolar variables

var str = nombre.substr(1,2) // similar a slices en python

var ultimaLetraDelNombre = nombre.substr(-1)//última letra como en python

