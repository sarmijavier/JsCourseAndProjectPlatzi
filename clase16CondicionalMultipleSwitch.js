var signo = prompt('Cuál es tú signo')

switch (signo) {
    case 'acuerio':
        console.log('acuario')
        break
    case 'cancer':
    case 'cáncer':
        console.log('cancer')
        break
    case 'leo':
        console.log('leo')
        break
    case 'gemenis':
    case 'géminis':
        console.log('gémenis')
        break
    default:
        console.log(' usted no existe')
}