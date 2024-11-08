/**
 * Jokenpo
 * @author Claudio Henrique
 */

// biblioteca
const input = require("readline-sync")

// variáveis
let jogador, computador

console.clear()
console.log("Jokenpo")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")

// lógica do jogador
jogador = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu: Pedra")
        break
    case 2:
        console.log("Jogador escolheu: Papel")
        break
    case 3:
        console.log("Jogador escolheu: Tesoura")
        break
    default:
        console.log("Opção inválida")
        break
}

// lógica do computador
computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("Computador escolheu: Pedra")
        break
    case 2:
        console.log("Computador escolheu: Papel")
        break
    case 3:
        console.log("Computador escolheu: Tesoura")
        break
}

// lógica para determinar o vencedor ou declarar empate
if (jogador === computador) {
    console.log("Empate!")
} else if (jogador 1 > 3 && 2 > 1 && 3 > 2) {
    console.log("Você venceu!")
} else {
    console.log("Computador venceu!")
}
