//definir prototipo

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function() {
    return this.altura >= 180
}



//instancia del prototipo
var javier = new Persona('Javier', 'Sarmiento', 178)
var erika = new Persona('Erika', 'Luna', 180)
var arturo = new Persona('Arturo', 'Martinez', 155)