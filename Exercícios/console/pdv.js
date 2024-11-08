/** 
 * Ponto de venda
 * @author Claudio Silva
 */

const input = require('readline-sync')

console.clear()

console.log("\\")

// banner

let total, desconto, troco, totalDesconto, valorDesconto, valorPago

// entrada 1
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o desconto em %: "))

// processamento 1
valorDesconto = (desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// processamento 3
troco = valorPago - totalDesconto

// saída
console.log("")
console.log("___________")
console.log(`Total: R$${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}`)
console.log(`Valor do desconto: R$${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$${totalDesconto.toFixed(2)}`)
console.log("")

// saída
console.log("")
console.log(`Valor pago em dinheiro: R$${valorPago.toFixed(2)}`)
console.log(`Troco: R$${troco.toFixed(2)}`)
