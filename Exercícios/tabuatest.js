/**
 * Tabuada com Switch case
 * @author Claudio Silva
 */

const input = require('readline-sync')

let tabuada, valor

console.clear()
console.log("Tabuadas")
console.log("")
console.log("1x")
console.log("2x")
console.log("3x")
console.log("4x")
console.log("5x")
console.log("")
tabuada = Number(input.question("Qual tabuada voce quer consultar? "))
console.log("")
switch (tabuada) {
    case 1:
        console.log("Tabuada do 1:")
        for (let i = 1; i < 11; i++) {
            console.log(`${valor} x ${i} = ${valor * i}`)
        }
        break
    case 2:
        console.log("Tabuada do 2:")
        break
    case 3:
        console.log("Tabuada do 3:")
        break
    case 4:
        console.log("Tabuada do 4:")
        break
    case 5:
        console.log("Tabuada do 5:")
        break
    default:
        console.log("Tabuada não catalogada.")
        break
}