

let etanol, gasolina
console.clear()
console.log("Etanol x Gasolina")

etanol = Number(input.question("Digite o valor do Etanol: "))
gasolina = Number(input.question("Digite o valor da Gasolina: "))

if (etanol < 0.7 * gasolina) {
        console.log("Abastecer com etanol")
} else {
        console.log("Abastecer com gasoliina")
}