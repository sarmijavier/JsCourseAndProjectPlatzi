//herencia prototipal

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo

}


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


function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} soy Desarrollad@r`)
}


/* var javier = new Persona('Javier', 'Sarmiento', 178)
var erika = new Persona('Erika', 'Luna', 180)
var arturo = new Persona('Arturo', 'Martinez', 155) */