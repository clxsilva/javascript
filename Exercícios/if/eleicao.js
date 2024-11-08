/**
 * Verificar a obrigatoriedade de votar em
 * função da idade.
 * @author Claudio Henrique
 */

const input = require("readline-sync")

console.clear()
let idade
idade = Number(input.question("Digite sua idade: "))
console.log(`Idade: ${idade}`)

if (idade < 16) {
    console.log("Proibido votar")
} else if (idade >= 16 && idade < 18 || idade > 70) {
    console.log("Voto facultativo")
} else {
    console.log("Voto obrigatório")
}