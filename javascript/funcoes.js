// Funções

// Definição da Função
function saudacao() {
    console.log('Olá, seja bem-vinda(o) ao nosso curso de JavaScript!')
}

saudacao()


// Como enviar parãmetros para as funções?

function saudacao(nome, curso='Java') {
    console.log(`Olá, ${nome}! seja bem-vinda(o) ao nosso curso de ${curso}!`)
}

saudacao('João Equer', 'JavaScript')

// Retorno da função

function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado / 2)