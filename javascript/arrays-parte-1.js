// > Arrays

// - Como criar um array?

let arr = ['João Equer', 26, 1.70, true]

console.log(arr)
// - Como acessar os elementos do array

console.log('Primeiro elemento:', arr[0])
console.log('Primeiro elemento:', arr[1])
console.log('Primeiro elemento:', arr[2])
console.log('Primeiro elemento:', arr[3])

// Como obter o tamanho do array
console.log('Tamanho do array:',arr.length)

// - Percorrendo arrays

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

for (let elemento of arr){
    console.log(elemento)
}

for (let variavel in arr){
    console.log(variavel)
}