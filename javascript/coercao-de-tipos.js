// > Coerção (conversão) de tipos

// - 1. Coerção Explicativa (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123456'))
console.log(parseFloat('123456'))
console.log(parseInt('123456'))


