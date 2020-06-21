//2015 EM -> estándar de js para ser lenguaje
//herencia prototipal

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto() {
        return this.altura >= 180
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        /*      var nombre = this.nombre
                var apellido = this.apellido */
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} soy Desarrollad@r`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira no sabía que eras desarrollad@r`)
    }
}




var javier = new Persona('Javier', 'Sarmiento', 178)
var erika = new Persona('Erika', 'Luna', 180)
var arturo = new Desarrollador('Arturo', 'Martinez', 155)


javier.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)