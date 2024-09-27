/**
 * Sintaxe básica da linguagem JavaScript
 * @author Claudio Silva
 */

// Limpar a tela do console
console.clear()

// JS - Sentença e ";" opcional
console.log("Hello World")

let nome = "Claudio Silva"
let idade = 19
// o ponto é usado para casas decimais
let altura = 1.90
// typeof() é usado para identificar o tipo de
// variável
console.log("____________")
console.log("Typeof(nome):")
console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(altura))

// identificando variáveis inteiras e não inteiras
console.log("_________________________________")
console.log("Variáveis inteiras e não inteiras:")
console.log(Number.isInteger(idade))
console.log(Number.isInteger(altura))

// concatenação (unir textos e variáveis)
console.log("_____________________________________")
console.log("Concatenação (unir textos e variáveis:")
console.log(`Nome: ${nome}`)
console.log("Nome: " + nome) // não recomendado

// arredondamento (casas decimais)
console.log("_______________________________")
console.log("Arredondamento (casas decimais):")
let media = 5.789
console.log(`Média: ${media.toFixed(1)}`)

// Particularidades do JavaScript
console.log("________________")
console.log("Particularidades:")
console.log(10 / 0)
console.log(0.5 + 0.2)
console.log(0.1 + 0.2)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)