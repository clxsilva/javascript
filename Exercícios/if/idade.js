/**
 * Verificar maioridade
 * @author Claudio Silva
 */

const input = require('readline-sync')

let idade

console.clear()
console.log("Verificar maioridade")
idade = Number(input.question("Digite a idade: "))
console.log(`Idade: ${idade}`)
if (idade < 18) {
    console.log("Menor de idade")
} else {
    console.log("Maior de idade")
}

// outras opções:
1)
if (idade < 18) {
    console.log("Menor de idade")
}

if (idade === 18) {
    console.log("Maior de idade")
}

if (idade > 18) {
    console.log("Maior de idade")
}

2) 
if (idade < 18) {
    console.log("Menor de idade")
}

if (idade >= 18) {
    console.log("Menor de idade")
}