/**
 * Cálculo do troco
 * @author Claudio Silva
 */

const input = require('readline-sync')

let valorPago, troco, total

total = Number(input.question("Digite o valor do produto: "))
valorPago = Number(input.question("Digite o valor pago: "))

troco = valorPago - total

console.log(`Troco: R$${troco}`)