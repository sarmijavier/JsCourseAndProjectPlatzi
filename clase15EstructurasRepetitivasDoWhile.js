var contador = 0

const LLUEVE = () => Math.random() < 0.25

do {
    contador++
} while (!LLUEVE())
if (contador === 1)
    console.log(`Fuí a ver si llovía ${contador} vez`)
else if (contador > 1)
    console.log(`Fuí a ver si llovía ${contador} veces`)