/**
 * Cálculo do consumo de combsutível
 *  @author Claudio Silva
 */

input = require ('readline-sync')

// limpar após execução
console.clear

// váriaveis
let consumo, litros, distancia

// entrada
litros = Number(input.question("Qual a quantidade de litros: "))
distancia = Number(input.question("Qual a distancia a ser percorrida: "))

// processamento
consumo = distancia / litros

// saída
console.log(`Consumo: ${consumo.toFixed(1)} km/l`)