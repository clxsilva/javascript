/**
 * Tabuada com Switch case
 * @author Claudio Silva
 */

const input = require('readline-sync')

let tabuada

console.clear()
console.log("Tabuadas disponíveis")
console.log("")
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
console.log("")
tabuada = Number(input.question("Qual tabuada voce quer consultar? "))
console.log("")
switch (tabuada) {
    case 1:
        console.log("Tabuada do 1:")
        for (let i = 1; i < 11; i++) {
            console.log(`${1} x ${i} = ${1 * i}`)
        }
        break
    case 2:
        console.log("Tabuada do 2:")
        for (let i = 1; i < 11; i++) {
            console.log(`${2} x ${i} = ${2 * i}`)
        }
        break
    case 3:
        console.log("Tabuada do 3:")
        for (let i = 1; i < 11; i++) {
            console.log(`${3} x ${i} = ${3 * i}`)
        }
        break
    case 4:
        console.log("Tabuada do 4:")
        for (let i = 1; i < 11; i++) {
            console.log(`4 x ${i} = ${4 * i}`)
        }
        break
    case 5:
        console.log("Tabuada do 5:")
        for (let i = 1; i < 11; i++) {
            console.log(`5 x ${i} = ${5 * i}`)
        }
        break
    default:
        console.log("Tabuada não catalogada.")
        break
}