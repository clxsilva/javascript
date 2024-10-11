/**
 * Álcool x Gasolina
 * @author Claudio Silva
 */

const input = require('readline-sync')
console.clear()
console.log("Calculando o valor dos combustiveis")
let alcool, gasolina
alcool = Number(input.question("Preco por litro do alcool: "))
gasolina = Number(input.question("Preco por litro da gasolina: "))

media = alcool / gasolina

console.log("Qual a melhor opção?")
if (media < 0.7) {
    console.log("A melhor opção é álcool")
} else {
    console.log("A melhor opção é gasolina")
}