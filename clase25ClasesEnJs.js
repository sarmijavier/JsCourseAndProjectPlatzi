//2015 EM -> estándar de js para ser lenguaje
//herencia prototipal

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura >= 180
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} soy Desarrollad@r`)
    }
}




/* var javier = new Persona('Javier', 'Sarmiento', 178)
var erika = new Persona('Erika', 'Luna', 180)
var arturo = new Persona('Arturo', 'Martinez', 155) */