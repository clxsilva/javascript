/**
 *  Cálculo da porcentagem de um valor (Regra de 3)
 *  @author Claudio Silva
 */

input = require('readline-sync')
console.clear()

// Regra de 3:
// 10% de 200 = 20
// 200 ------ 100%
// Valor ---- 10%
// x * 100 = 200 * 10
// x * 100 = 2000
// x = 2000 / 100
// x = 20
// Valor = 20
// x% de y = valor:
// Y * X / 100

// variáveis
let x, y, valor

// entrada
x = Number(input.question("Digite o valor de X: "))
y = Number(input.question("Digite o valor de Y: "))

// processamento
valor = (x * y) / 100

// saída
console.log(`Valor: ${valor}`)