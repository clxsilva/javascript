/**
 * Cálculo da média artimética de 3 (três) valores
 * @author Claudio Silva
 */

// importar a bibliteca read-line-sync
const input = require('readline-sync')

// variáveis
let num1, num2, num3, media

console.clear()
console.log("Cálculo da média aritmética de 3 números")

// entrada
// no console entradas(input) numéricas precisam ser
//convertidas com uso do método Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("DIgite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2 + num3) / 3

// saída
console.log(`Média: ${media.toFixed(1)}`)

