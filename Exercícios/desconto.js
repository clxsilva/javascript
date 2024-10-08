/**
 * Cálculo de desconto em uma compra:
   Desenvolva um programa que calcule o valor final
   de um produto após um desconto. O usuário deve
   inserir o preço original e o percentual de desconto.
   O programa deve calcular e exibir o valor final.
 @author CLaudio Silva
 */

const input = require('readline-sync')

console.clear()
console.log("Cálculo do valor do desconto")

let totalDesconto, total, desconto

total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

totalDesconto = total - ((desconto * total) / 100)

console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
